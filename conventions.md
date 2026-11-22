# Conventions

The rules every file in `projects/` follows. The concept page (`concept/concept.html`) explains why; this page says
what. The templates in `templates/` put these rules into practice.

This page explains the format; it does not enforce it. The format is defined by the JSON Schemas in
`model/format_<n>/`, and the engine loads a file only through the class of its object type, which rejects what the
schema does not allow. Until work package 3 builds the schemas and the classes, nothing checks these rules
automatically: the review at G1 is the only safeguard, and the tables below are kept by hand.

## Names

Every name is lower snake case: files, folders, IDs, keys and enum values (`priority: should`). Only a tool may force
another spelling, as listed in `CLAUDE.md`.

Names are written out in full: `recipe_box`, not `rb`; `feature_`, not `ft_`; `metrics.yml`, not `kpis.yml`. The only
short forms are `req` and `spec`, for example in `req_recipe_box_0003`, `spec_recipe_box_0002` and `no_req`.

## Layout

```
projects/
└─ <project>/                    # the project name, for example recipe_box
   ├─ project.yml                # name, format version, description, code repos, concept, gates_after, solo_mode
   ├─ metrics.yml                # measured outcomes after a release
   ├─ features/<feature id>.md
   ├─ concepts/<feature id>.html # the implementation concept of one feature, with its design
   ├─ requirements/<requirement id>.md
   ├─ specs/<spec id>.md         # how one requirement is built
   └─ acceptance/<requirement id>.md   # the G3 record with its evidence
```

A project is one code repo. A feature is one tool or capability inside it. A requirement is one testable sentence about
a feature. A spec says how one requirement is built.

Files stay in one folder per kind, not in one folder per feature: a requirement can move to another feature, and then
only its `feature:` field changes, never its path. Nothing outside `projects/` depends on one project, so a copy of
the repo without `projects/req_trail` still builds and passes its checks (`req_req_trail_0181`).

## Concepts

A concept says how something is meant to work before it is built. There are two levels.

- **Overview concept:** what the whole project is for, its context and its architecture, along the arc42 template.
  It lives with the project's code, where its readers are, and `concept` in `project.yml` links to it. reqTrail's
  overview is the `concept/` folder of this repo. A project needs the link as soon as it has a spec
  (`req_req_trail_0180`).
- **Feature concept:** how one feature, one work package, is built. It is an HTML page, `concepts/<feature id>.html`,
  made from `templates/feature_concept.html`, because most of it is visual: diagrams, screens and the design. A
  feature needs it as soon as it has a spec (`req_req_trail_0177`). It has five sections, each with a fixed `id`:

| Section | `id` | What it holds |
|---|---|---|
| User flow | `flow` | Who does what, step by step, and what they see |
| Design and mockups | `design` | The screens, pages or output the user sees, drawn on the page with made-up data |
| Architecture | `architecture` | The building blocks of the work package, their interfaces and data flow, and how they fit the overview |
| Test approach | `tests` | How the acceptance criteria are tested: test kinds, test data, what runs in CI |
| Requirements to specs | `requirements_to_specs` | Each requirement of the feature with the spec that translates it, generated from the files |

- **Spec:** one per requirement. `covers` names that one requirement, pinned to the version it was written for, and
  no other spec covers it (`req_req_trail_0178`). The spec holds what the concept leaves out: interfaces, decisions,
  libraries considered and the review.
- `npm run concept_data` writes the table of `requirements_to_specs` between its two comments, and
  `npm run check_concept_data` fails when it differs from the files (`req_req_trail_0179`).
- G2 approves the feature concept together with the specs of its requirements. `CODEOWNERS` gives `concepts/` and
  `specs/` to the architecture owner (`req_req_trail_0055`). The explorer links each feature to its concept and each
  project to its overview (`req_req_trail_0182`).

## IDs

| Kind | Format | Example |
|---|---|---|
| Project | the name of its code repo, in lower snake case | `recipe_box` |
| Feature | `feature_<project>_<nn>` | `feature_recipe_box_01` |
| Requirement | `req_<project>_<nnnn>` | `req_recipe_box_0003` |
| Spec | `spec_<project>_<nnnn>` | `spec_recipe_box_0002` |
| Request | the number of its issue | `#18` |

- Numbers count up per project and kind, padded with zeros.
- The file name is the ID plus `.md`. An acceptance record carries the ID of its requirement.
- An ID is never reused and never renamed, not even when its requirement is dropped.
- A request needs no file of its own: its issue number is its permanent name, and a feature points back to it.

## Versions and pinned references

- Every requirement and spec has `version`, a whole number that starts at 1.
- A requirement keeps version 1 until it passes G1, and a spec until it passes G2. Before its gate nothing is built
  on it, so every change is part of the draft. `validate` fails a pull request that breaks this
  (`req_req_trail_0175`).
- After that gate, a substantive change raises the version by one, once per pull request however many commits it
  has. An editorial change (a typo, wording that keeps the meaning) keeps it; the pull request says which it is. A
  pull request that changes the statement or an acceptance criterion of such a requirement, or the text of such a
  spec, without raising the version carries the label `editorial` (`req_req_trail_0155`).
- A reference to a requirement or spec names the version it was made against: `req_recipe_box_0001@1`. This applies to
  the `depends_on` of a requirement, `covers`, `links.spec` and `requirement`.
- When the target moves to a higher version, every reference to the old one is suspect until someone confirms it.

## Order of features

- A feature lists in `depends_on` the features of its project that must be finished before its work starts, by ID and
  without a version, because a feature has none. A feature that needs none has `depends_on: []`. The lists form no
  cycle (`req_req_trail_0183`).
- The order of the features comes from these lists, never from their numbers. An ID is never renamed, so a feature
  keeps its number wherever it falls in the order.
- A requirement may depend on a requirement of another feature only when its own feature depends on that feature,
  directly or through the features it lists (`req_req_trail_0184`). A feature may list more than its requirements
  need, such as a form or a page of another feature that its work builds on.
- Until work package 3, `npm run concept_data` and `npm run check_concept_data` fail when these rules are broken.
- The work package table and the schedule of `concept/concept.html` show reqTrail's own features in this order
  (`req_req_trail_0185`).

## Format versions

- **Every project names its format.** `project.yml` holds `format_version`, a whole number. It applies to every file of
  the project.
- **A released format never changes.** At each engine release, the checksums of its schemas are recorded, and a test
  fails when a released schema differs from them.
- **Every change to the format is a new format version with a migration** from the version before it, in
  `model/migrations/format_<n>_to_<n+1>.js`. When nothing changes, there is no new version and no migration.
- **A migration changes the structure of the files, never their content.** The migration runner rejects a result that
  changes an ID, a statement or a version, or that breaks the schema of the new format.
- **Older formats stay readable.** The engine applies the migrations in memory and leaves the files as they are;
  `migrate` writes the migrated files as one pull request.
- **A new format version comes only with a new major engine version,** so a project pinned to `@v1` never meets a format
  its files are not in.
- **Format 1 is released with engine 1.0.** Until then it may still change without a migration, because no project
  outside this repo uses it.

## Fields with fixed values

A field with a fixed list takes one of these values, spelled exactly as shown. The lists are the same in every project,
so a mapping to the values of another tool, such as a requirements management tool, is written once.

| Field | Values |
|---|---|
| `priority` | `must`, `should`, `could` |
| `type` | `functional`: something the system does; `non_functional`: how well it does it; `constraint`: a limit on how it may be built, such as a language, platform or licence |
| `category` | `security`, `privacy`, `usability`, `performance`; only when `type` is `non_functional`, otherwise `""` |
| `reviews` | a list of `privacy` and `security`, or `[]`; `reviews_reason` says why in both cases |

## Text fields

- `statement` is one sentence with "shall", in plain text, of at most 80 words; `text_check` warns above 40. Code in
  backticks is fine; tables, images, lists and links are not, because an export to ReqIF carries the text as simple
  XHTML.
- `rationale` is one sentence on why the requirement exists: the problem it solves or the need behind it. It travels
  with the requirement into an export; the request issue does not.
- `source` of a requirement and each `origin` of a feature take one of three forms: `#<issue>` for an issue in the same
  repo, `<owner>/<repo>#<issue>` for an issue in another repo, or a path in the repository with an optional
  `#<anchor>`, such as `concept/concept.html#estimate`.
- Notes below the front matter are optional and are not exported.

## Acceptance criteria

Every acceptance criterion can be checked on its own and starts with its test kind:

| Kind | What checks it | Evidence at G3 |
|---|---|---|
| `Unit` | An automated test of one part, with made-up input | The JUnit XML report of the CI run |
| `Integration` | An automated test of several parts together, often on a test repo | The JUnit XML report, or a test record when it does not run in CI |
| `Smoke` | A short automated check of a deployed build, right after the deploy | The report of that run, stored as a test record |
| `Static` | A check of files, names or settings, without running the code | The output of the check in CI |
| `Manual` | A person who follows written steps | A test record by the tester |

A requirement with a `Manual` criterion has a section `## Manual test` in its notes: who tests it, the steps, and when
it passes.

## Statuses

No file holds a status. The index derives it from what happened in GitHub:

| Status | Set by |
|---|---|
| Draft | The pull request that adds the requirement is open as a draft (on a plan without draft pull requests: carries the label `draft`). |
| In review | That pull request is open and ready for review. |
| Approved | That pull request is merged: gate G1. |
| Specified | A spec that covers the requirement at its current version is merged: gate G2. |
| Implemented | A merged pull request in the code repo names it in an `implements:` line. |
| Verified | Its acceptance record is merged: gate G3. |
| Withdrawn | A merged pull request deletes the requirement file. Its ID is never used again. |

Until it is withdrawn, a requirement's status is the furthest stage it has reached at its current version. Evidence
for an older version, such as a spec that covers `req_recipe_box_0003@1` when the requirement is at version 2, makes
that link suspect and does not count toward the status. So a substantive change after G1 sends the requirement back
to Approved, once the new version is merged.

`project.yml` holds two settings for the gates:

- `gates_after` names the last commit that reached `main` without passing a gate. A requirement that only merges up to
  that commit changed counts as Draft. `null` means every merge passed a gate.
- `solo_mode: true` says the project has one maintainer for now. A gate merge without a second person's approval then
  counts, and the index marks it solo. Once a second person approves, the project sets it to `false`.

## Gates

| Gate | Decision | Gatekeeper | Where |
|---|---|---|---|
| G0 | Do we take this request? | Requirements owner | Label `accepted` on the request issue |
| G1 | Is the requirement clear, buildable and testable? | Principal Engineer | Merge of the requirement pull request |
| G2 | Are the feature concept and the specs sound, and do they fit the estimate? | Architecture owner, plus privacy or security when tagged | Merge of the pull request with the feature concept or a spec |
| G3 | Does it do what the requirement says, shown by evidence? | Tech lead opens, an owner approves | Merge of the acceptance pull request |

A gate pull request may carry several files of the same gate, such as all requirements of a feature, or a feature
concept with the specs of its requirements (`req_req_trail_0097`).

Nobody approves what they wrote. Who holds which hat lives in `roles.yml`, the single source for hats.

## Links to code and tests

- A work issue and a pull request in the code repo name what they build: `implements: req_recipe_box_0003@2`. A change with
  nothing to link says `no_req: refactor` (or `docs`, `build`).
- A test carries the requirement ID in its name or in the name of its group, for example
  `Describe 'req_recipe_box_0003 ConvertTo-RecipeText'`. Test tools write these names into their JUnit XML report, which the
  index reads, so the code repo can use any language and test tool.
- The index finds code and tests through these lines and names; requirement files hold no code or test links.

## Languages and test tools

Each part is tested with the tool of its own language. reqTrail prescribes no test tool for a code repo; it reads only
JUnit XML.

| Part | Language | Tests with | What reqTrail reads |
|---|---|---|---|
| reqTrail's engine: checks, index builder, explorer | JavaScript on Node | Node's test runner, `node --test` | JUnit XML from `node --test --test-reporter=junit`, like any code repo |
| A code repo, such as `recipe_box` | Its own; `recipe_box` is PowerShell | Its own; `recipe_box` uses Pester | JUnit XML, with the requirement ID in the name of the test or of its group |
| The setup of a maintainer's PC, in `setup/` | PowerShell, on Windows | A manual run | Nothing |

- The engine needs Git and Node.js 22 or newer, and nothing else at run time. On Windows, `install_prerequisites.cmd`
  installs both.
- A test tool that cannot write JUnit XML needs a converter in the code repo's CI before its results count as evidence.
