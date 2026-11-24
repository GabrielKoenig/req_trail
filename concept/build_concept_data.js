// Reads every file in projects/ and writes concept/concept_data.js, which the concept pages load with a script tag,
// so the pages show the files as they are and never a copy kept by hand. It also writes the table of the section
// requirements_to_specs in each feature concept, projects/<project>/concepts/<feature id>.html (req_req_trail_0179).
// Both commands stop when the order of the features breaks its rules (req_req_trail_0183, req_req_trail_0184), or
// when the planner figures on concept.html do not fit the features of their project (req_req_trail_0185).
//
//   npm run concept_data         writes concept/concept_data.js and the tables
//   npm run check_concept_data   fails when concept/concept_data.js or a table differs from the files
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
const conceptPage = path.join(__dirname, "concept.html");
const testKinds = ["Unit", "Integration", "Smoke", "Static", "Manual"];
const plannerKinds = ["code", "setup"];

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

function readFeature(file, folder) {
  const { fields } = readMarkdown(file);
  const metric = fields.metric || {};
  const concept = path.join(folder, "concepts", fields.id + ".html");
  const dependsOn = fields.depends_on;
  if (!Array.isArray(dependsOn) || !dependsOn.every((id) => typeof id === "string")) {
    throw new Error(relative(file) + ": depends_on must be a list of feature IDs, [] when the feature needs none " +
      "(req_req_trail_0183)");
  }
  return {
    id: fields.id,
    concept: fs.existsSync(concept) ? relative(concept) : null,
    title: text(fields.title),
    goal: text(fields.goal),
    scope: fields.scope || [],
    nonScope: fields.non_scope || [],
    origin: fields.origin || [],
    metric: { name: text(metric.name), unit: text(metric.unit), baseline: metric.baseline ?? null,
      target: metric.target ?? null, direction: text(metric.direction) },
    estimate: fields.estimate ?? null,
    dependsOn,
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
    covers: fields.covers ? parsePin(fields.covers) : null,
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
    concept: project.concept ?? null,
    features: listFiles(path.join(folder, "features"), ".md").map((file) => readFeature(file, folder)),
    requirements: listFiles(path.join(folder, "requirements"), ".md").map(readRequirement),
    specs: listFiles(path.join(folder, "specs"), ".md").map(readSpec),
    acceptance: listFiles(path.join(folder, "acceptance"), ".md").map(readAcceptance),
    metrics: fs.existsSync(metricsFile) ? YAML.parse(readText(metricsFile)) || [] : [],
  };
}

// The order of the features: each feature names features of its own project, the lists form no cycle
// (req_req_trail_0183), and a requirement depends only on requirements of features that its own feature depends on,
// directly or through the features it names (req_req_trail_0184). Returns one message per problem.
function orderProblems(project) {
  const where = "projects/" + project.name + ": ";
  const features = new Map(project.features.map((feature) => [feature.id, feature]));
  const problems = [];
  for (const feature of project.features) {
    feature.dependsOn.filter((id) => !features.has(id)).forEach((id) => {
      problems.push(where + feature.id + " depends on " + id + ", which is not a feature of the project.");
    });
  }
  // Every feature that a feature depends on, directly or through others. A feature that reaches itself is in a cycle.
  const reach = new Map(project.features.map((feature) => {
    const seen = new Set();
    const open = [...feature.dependsOn];
    while (open.length) {
      const id = open.pop();
      if (seen.has(id) || !features.has(id)) continue;
      seen.add(id);
      open.push(...features.get(id).dependsOn);
    }
    return [feature.id, seen];
  }));
  project.features.filter((feature) => reach.get(feature.id).has(feature.id)).forEach((feature) => {
    problems.push(where + feature.id + " is part of a cycle in depends_on.");
  });
  const featureOf = new Map(project.requirements.map((requirement) => [requirement.id, requirement.feature]));
  for (const requirement of project.requirements) {
    if (!features.has(requirement.feature)) continue;
    for (const pin of requirement.dependsOn) {
      const other = featureOf.get(pin.id);
      if (!other || other === requirement.feature || reach.get(requirement.feature).has(other)) continue;
      problems.push(where + requirement.id + " depends on " + pin.id + " of " + other + ", but " + requirement.feature +
        " does not depend on " + other + ", neither directly nor through other features.");
    }
  }
  return problems;
}

// The figures of the planner on concept.html that the feature files do not hold, keyed by feature ID: the kind of
// work, the range of the estimate, the effort with an AI assistant and what a work package reuses. They must fit the
// features of their project; on a copy of the repository without that project there is nothing to compare
// (req_req_trail_0181, req_req_trail_0185). Returns one message per problem.
function plannerProblems(projects) {
  const where = "concept/concept.html, planner_figures: ";
  const block = /<script type="application\/json" id="planner_figures">([\s\S]*?)<\/script>/;
  const match = block.exec(readText(conceptPage));
  if (!match) return [where + "the script block is missing."];
  let figures;
  try {
    figures = JSON.parse(match[1]);
  } catch (error) {
    return [where + "not valid JSON: " + error.message];
  }
  if (typeof figures.project !== "string") return [where + "project must name the project that the planner shows."];
  const project = projects.find((candidate) => candidate.name === figures.project);
  if (!project) return [];
  const packages = figures.work_packages || {};
  const ids = project.features.map((feature) => feature.id);
  const problems = [];
  Object.keys(packages).filter((id) => !ids.includes(id)).forEach((id) => {
    problems.push(where + id + " is not a feature of " + project.name + ".");
  });
  for (const feature of project.features) {
    const entry = packages[feature.id];
    if (!entry) {
      problems.push(where + "no figures for " + feature.id + ".");
      continue;
    }
    const unknown = Object.keys(entry).filter((key) => !["kind", "low", "high", "with_assistant", "reuses"].includes(key));
    if (unknown.length) problems.push(where + feature.id + " has unknown keys: " + unknown.join(", ") + ".");
    if (!plannerKinds.includes(entry.kind)) problems.push(where + feature.id + ": kind must be code or setup.");
    if (!(typeof entry.low === "number" && typeof entry.high === "number" && entry.low <= feature.estimate &&
      feature.estimate <= entry.high)) {
      problems.push(where + feature.id + ": low and high must enclose the estimate " + feature.estimate + ".");
    }
    if (!(typeof entry.with_assistant === "number" && entry.with_assistant > 0)) {
      problems.push(where + feature.id + ": with_assistant must be a number of person-days above 0.");
    }
    if (typeof entry.reuses !== "string" || !entry.reuses.trim()) {
      problems.push(where + feature.id + ": reuses is empty.");
    }
  }
  for (const milestone of figures.milestones || []) {
    (milestone.after || []).filter((id) => !ids.includes(id)).forEach((id) => {
      problems.push(where + "the milestone " + milestone.name + " waits for " + id + ", which is not a feature.");
    });
  }
  return problems;
}

// The date and commit that added each file, and how many commits changed it. Git history changes with every commit,
// so the check below compares only the file data, not this part.
function readHistory() {
  let log;
  try {
    log = execFileSync("git", ["log", "--format=@@%h %cs", "--name-only", "--", "projects"], { cwd: repoRoot,
      encoding: "utf8", maxBuffer: 64 * 1024 * 1024, stdio: ["ignore", "pipe", "ignore"] });
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

// The section requirements_to_specs of a feature concept: each requirement of the feature with the one spec that
// covers it. Only the part between the two comments is generated; the rest of the page is written by hand.
const generatedStart = "<!-- generated: requirements_to_specs -->";
const generatedEnd = "<!-- end generated -->";

function html(value) {
  return String(value).replace(/[&<>"]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" })[c])
    .replace(/`([^`]+)`/g, "<code>$1</code>");
}

function requirementsToSpecs(project, featureId) {
  const rows = project.requirements.filter((r) => r.feature === featureId).map((r) => {
    const spec = project.specs.find((s) => s.covers && s.covers.id === r.id);
    const requirement = '<a href="../requirements/' + r.id + '.md"><code>' + r.id + "</code></a> version " + r.version +
      "<br>" + html(r.title) + "<br><small>" + html(r.statement) + "</small>";
    let translation = "No spec yet.";
    if (spec) {
      const suspect = spec.covers.version < r.version ?
        ' <span class="suspect">suspect: written for version ' + spec.covers.version + "</span>" : "";
      translation = '<a href="../specs/' + spec.id + '.md"><code>' + spec.id + "</code></a> version " + spec.version +
        suspect + "<br>" + html(spec.title) + (spec.architecture ? "<br><small>" + html(spec.architecture) + "</small>" : "");
    }
    return "      <tr><td>" + requirement + "</td><td>" + translation + "</td></tr>";
  });
  return [generatedStart,
    "  <table>",
    "    <thead><tr><th>Requirement</th><th>Spec that translates it</th></tr></thead>",
    "    <tbody>",
    ...(rows.length ? rows : ['      <tr><td colspan="2">No requirement belongs to this feature yet.</td></tr>']),
    "    </tbody>",
    "  </table>",
    "  " + generatedEnd].join("\n");
}

// Every feature concept with its current text and the text it has once its table is generated.
function conceptPages(projects) {
  const pages = [];
  for (const project of projects) {
    for (const feature of project.features) {
      if (!feature.concept) continue;
      const file = path.join(repoRoot, feature.concept);
      const raw = fs.readFileSync(file, "utf8");
      const current = raw.replace(/\r\n/g, "\n");
      const start = current.indexOf(generatedStart);
      const end = current.indexOf(generatedEnd);
      if (start < 0 || end < start) {
        throw new Error(feature.concept + ": the section requirements_to_specs needs the comments " + generatedStart +
          " and " + generatedEnd);
      }
      const updated = current.slice(0, start) + requirementsToSpecs(project, feature.id) +
        current.slice(end + generatedEnd.length);
      pages.push({ file, current, updated, lineEnd: raw.includes("\r\n") ? "\r\n" : "\n" });
    }
  }
  return pages;
}

function build() {
  const projects = fs.readdirSync(projectsDir, { withFileTypes: true }).filter((entry) => entry.isDirectory())
    .map((entry) => entry.name).sort().map((name) => readProject(path.join(projectsDir, name)));
  const dataPart = "window.CONCEPT_DATA = " + serialize({ testKinds, projects }) + ";\n";
  const header = "// Generated by concept/build_concept_data.js from the files in projects/. Do not edit: run " +
    "npm run concept_data.\n";
  return {
    dataPart,
    problems: [...projects.flatMap(orderProblems), ...plannerProblems(projects)],
    pages: conceptPages(projects),
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
  if (result.problems.length) {
    result.problems.forEach((problem) => console.error(problem));
    process.exit(1);
  }
  if (process.argv.includes("--check")) {
    const current = fs.existsSync(outputFile) ? readText(outputFile) : "";
    const stale = result.pages.filter((page) => page.current !== page.updated).map((page) => relative(page.file));
    if (!current.includes(result.dataPart) || stale.length) {
      if (!current.includes(result.dataPart)) console.error("concept/concept_data.js differs from the files in projects/.");
      stale.forEach((file) => console.error(file + ": the table of requirements_to_specs differs from the files."));
      console.error("Run: npm run concept_data");
      process.exit(1);
    }
    console.log("concept/concept_data.js and " + result.pages.length + " feature concepts match the files in projects/.");
    return;
  }
  fs.writeFileSync(outputFile, result.text(readHistory()));
  console.log("wrote " + relative(outputFile));
  result.pages.filter((page) => page.current !== page.updated).forEach((page) => {
    fs.writeFileSync(page.file, page.updated.split("\n").join(page.lineEnd));
    console.log("wrote the table of " + relative(page.file));
  });
}

main();
