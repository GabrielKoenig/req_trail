// Reads every file in projects/ and writes concept/concept_data.js, which the concept pages load with a script tag,
// so the pages show the files as they are and never a copy kept by hand.
//
//   npm run concept_data         writes concept/concept_data.js
//   npm run check_concept_data   fails when concept/concept_data.js differs from the files
//
// Libraries considered: yaml (used; chosen for the engine in d4a3b38 because it can also write files back), js-yaml
// (rejected, see the same commit). The front matter is split with one regular expression; the spec of work package 3
// decides on vfile-matter for the engine. This script is a helper of the concept pages, not part of the engine: the
// index builder of work package 4 takes its place.
"use strict";

const fs = require("node:fs");
const path = require("node:path");
const { execFileSync } = require("node:child_process");
const YAML = require("yaml");

const repoRoot = path.resolve(__dirname, "..");
const projectsDir = path.join(repoRoot, "projects");
const outputFile = path.join(__dirname, "concept_data.js");
const testKinds = ["Unit", "Integration", "Static", "Manual"];

function readText(file) {
  return fs.readFileSync(file, "utf8").replace(/\r\n/g, "\n");
}

function relative(file) {
  return path.relative(repoRoot, file).split(path.sep).join("/");
}

// A Markdown file is front matter between two --- lines, then a body.
function readMarkdown(file) {
  const match = /^---\n([\s\S]*?)\n---\n?([\s\S]*)$/.exec(readText(file));
  if (!match) throw new Error(relative(file) + ": no front matter between two --- lines");
  return { fields: YAML.parse(match[1]) || {}, body: match[2] };
}

function listFiles(folder, ending) {
  if (!fs.existsSync(folder)) return [];
  return fs.readdirSync(folder).filter((name) => name.endsWith(ending)).sort().map((name) => path.join(folder, name));
}

// "req_x_0001@2" becomes { id: "req_x_0001", version: 2 }.
function parsePin(text) {
  const [id, version] = String(text).split("@");
  return { id, version: version === undefined ? null : Number(version) };
}

// "Unit: a test ..." becomes { kind: "Unit", text: "a test ..." }.
function parseCriterion(text) {
  const match = /^(\w+):\s*([\s\S]*)$/.exec(String(text));
  if (match && testKinds.includes(match[1])) return { kind: match[1], text: match[2] };
  return { kind: "", text: String(text) };
}

// The text of one "## Heading" section of a body, as one paragraph.
function section(body, heading) {
  const match = new RegExp("(?:^|\\n)## " + heading + "\\n+([\\s\\S]*?)(?=\\n## |$)").exec(body);
  return match ? match[1].trim().replace(/\s*\n\s*/g, " ") : "";
}

function text(value) {
  return value === undefined || value === null ? "" : String(value).trim();
}

function readFeature(file) {
  const { fields } = readMarkdown(file);
  const metric = fields.metric || {};
  return {
    id: fields.id,
    title: text(fields.title),
    goal: text(fields.goal),
    scope: fields.scope || [],
    nonScope: fields.non_scope || [],
    origin: fields.origin || [],
    metric: { name: text(metric.name), unit: text(metric.unit), baseline: metric.baseline ?? null,
      target: metric.target ?? null, direction: text(metric.direction) },
    estimate: fields.estimate ?? null,
    targetRelease: text(fields.target_release),
  };
}

function readRequirement(file) {
  const { fields, body } = readMarkdown(file);
  const links = fields.links || {};
  return {
    id: fields.id,
    title: text(fields.title),
    feature: fields.feature,
    owner: text(fields.owner),
    version: fields.version,
    priority: fields.priority,
    type: fields.type,
    category: text(fields.category),
    dependsOn: (fields.depends_on || []).map(parsePin),
    reviews: fields.reviews || [],
    reviewsReason: text(fields.reviews_reason),
    source: text(fields.source),
    statement: text(fields.statement),
    rationale: text(fields.rationale),
    acceptance: (fields.acceptance || []).map(parseCriterion),
    mockup: links.mockup ?? null,
    spec: links.spec ? parsePin(links.spec) : null,
    manualTest: section(body, "Manual test"),
  };
}

function readSpec(file) {
  const { fields, body } = readMarkdown(file);
  return {
    id: fields.id,
    title: text(fields.title),
    feature: fields.feature,
    version: fields.version,
    covers: (fields.covers || []).map(parsePin),
    mockup: fields.mockup ?? null,
    estimateDays: fields.estimate_days ?? null,
    architecture: section(body, "Architecture"),
  };
}

function readAcceptance(file) {
  const { fields } = readMarkdown(file);
  return {
    requirement: parsePin(fields.requirement),
    tests: fields.tests || [],
    file: relative(file),
  };
}

function readProject(folder) {
  const project = YAML.parse(readText(path.join(folder, "project.yml"))) || {};
  const metricsFile = path.join(folder, "metrics.yml");
  return {
    name: project.name,
    formatVersion: project.format_version,
    description: text(project.description),
    codeRepos: project.code_repos || [],
    features: listFiles(path.join(folder, "features"), ".md").map(readFeature),
    requirements: listFiles(path.join(folder, "requirements"), ".md").map(readRequirement),
    specs: listFiles(path.join(folder, "specs"), ".md").map(readSpec),
    acceptance: listFiles(path.join(folder, "acceptance"), ".md").map(readAcceptance),
    metrics: fs.existsSync(metricsFile) ? YAML.parse(readText(metricsFile)) || [] : [],
  };
}

// The date and commit that added each file, and how many commits changed it. Git history changes with every commit,
// so the check below compares only the file data, not this part.
function readHistory() {
  let log;
  try {
    log = execFileSync("git", ["log", "--format=@@%h %cs", "--name-only", "--", "projects"], { cwd: repoRoot,
      encoding: "utf8", maxBuffer: 64 * 1024 * 1024 });
  } catch {
    return {};
  }
  const history = {};
  let commit = null;
  for (const line of log.split("\n")) {
    if (line.startsWith("@@")) {
      const [hash, date] = line.slice(2).split(" ");
      commit = { hash, date };
    } else if (line.trim() && commit) {
      const entry = history[line.trim()] || (history[line.trim()] = { changes: 0 });
      if (!entry.changed) entry.changed = commit.date;
      entry.added = commit.date;
      entry.commit = commit.hash;
      entry.changes += 1;
    }
  }
  return history;
}

// One record per line, so a diff of the generated file shows which requirement changed.
function serializeProject(project) {
  return "{\n" + Object.keys(project).map((key) => {
    const value = project[key];
    const records = Array.isArray(value) && value.length && typeof value[0] === "object";
    return JSON.stringify(key) + ": " + (records ? "[\n" + value.map((item) => JSON.stringify(item)).join(",\n") +
      "\n]" : JSON.stringify(value));
  }).join(",\n") + "\n}";
}

function serialize(data) {
  return "{\n\"testKinds\": " + JSON.stringify(data.testKinds) + ",\n\"projects\": [\n" +
    data.projects.map(serializeProject).join(",\n") + "\n]\n}";
}

function build() {
  const projects = fs.readdirSync(projectsDir, { withFileTypes: true }).filter((entry) => entry.isDirectory())
    .map((entry) => entry.name).sort().map((name) => readProject(path.join(projectsDir, name)));
  const dataPart = "window.CONCEPT_DATA = " + serialize({ testKinds, projects }) + ";\n";
  const header = "// Generated by concept/build_concept_data.js from the files in projects/. Do not edit: run " +
    "npm run concept_data.\n";
  return {
    dataPart,
    text: (history) => {
      const current = {};
      Object.keys(history).sort().forEach((file) => {
        if (fs.existsSync(path.join(repoRoot, file))) current[file] = history[file];
      });
      return header + dataPart + "window.CONCEPT_HISTORY = {\n" + Object.keys(current)
        .map((file) => JSON.stringify(file) + ": " + JSON.stringify(current[file])).join(",\n") + "\n};\n";
    },
  };
}

function main() {
  const result = build();
  if (process.argv.includes("--check")) {
    const current = fs.existsSync(outputFile) ? readText(outputFile) : "";
    if (!current.includes(result.dataPart)) {
      console.error("concept/concept_data.js differs from the files in projects/. Run: npm run concept_data");
      process.exit(1);
    }
    console.log("concept/concept_data.js matches the files in projects/.");
    return;
  }
  fs.writeFileSync(outputFile, result.text(readHistory()));
  console.log("wrote " + relative(outputFile));
}

main();
