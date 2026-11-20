<picture>
  <source media="(prefers-color-scheme: dark)" srcset="logo/logo_on_dark.svg">
  <img src="logo/logo_on_light.svg" alt="req_trail logo" width="96">
</picture>

# req_trail

**Requirements as code.** Write down the need; Git keeps the trail.

req_trail is a concept for keeping the requirements, specs, mockups and changes of several projects in one Git
repository, the way docs-as-code keeps documentation next to the code. Every change is a pull request, so the history
shows who changed what and why. Four gates, G0 to G3, turn a status change into a decision with a named gatekeeper,
enforced through `CODEOWNERS`, branch protection and checks. In the concept pages, the repository that holds the
requirements is called `project_management`.

**Status: being built.** The folders, templates and rules are in place (work package 1). Checks, the index and the
explorer follow in later work packages; the concept page lists them under "Estimate".

## Layout

```
req_trail/
├─ conventions.md     # names, IDs, versions, statuses, gates, links to code and tests
├─ templates/         # one template per file type
├─ projects/
│  ├─ recipe_box/     # example project with made-up data
│  └─ req_trail/      # req_trail's own requirements
├─ concept/           # the concept, architecture and roles pages, and the data they read
├─ logo/              # the logo as SVG, for dark and light backgrounds
├─ setup/             # the one-click setup of a maintainer's PC on Windows
├─ install_prerequisites.cmd
├─ package.json       # the tools' npm packages and scripts
├─ CLAUDE.md          # rules for AI assistants working in this repository
├─ readme.md
└─ license
```

| Path | What it is |
| ---- | ---------- |
| [`conventions.md`](conventions.md) | The rules every file follows: lower snake case names, the ID formats, versions and pinned references, the seven statuses and what sets them, the gates, and how code and tests point back to a requirement |
| `templates/` | `project.yml`, `feature.md`, `requirement.md`, `spec.md`, `acceptance.md` and `metrics.yml`, each with placeholders and short comments |
| `projects/recipe_box/` | The example project `recipe_box`: one feature, two requirements, two specs, a mockup, an acceptance record and a measured outcome, the same data as the demo on the concept page |
| `projects/req_trail/` | req_trail's own requirements: one feature per work package, and for each requirement its rationale and the acceptance criteria that say how it is tested. The dry run takes them through the gates like any project |
| `concept/concept.html` | The concept page: the process from request to technical spec, the gates, repos and issues, community intake, a working demo of the requirements tracker with the example project and req_trail's own requirements, Obsidian as a viewer, the architecture, options, an effort estimate and a review list |
| `concept/architecture.html` | The architecture along the twelve sections of the arc42 template: goals, constraints, context, building blocks, runtime and deployment, decisions, quality requirements and risks. Constraints, quality requirements and dependencies are read from the files |
| `concept/concept_data.js` | Generated from the files in `projects/` by `npm run concept_data`; the concept and architecture pages read it. `npm run check_concept_data` fails when it is out of date |
| `concept/roles.html` | The roles dashboard: hats instead of people, duties per phase and gate, a simulated history of who held which hat, and the checks that read the roles |
| `logo/` | The logo as SVG, one file for dark and one for light backgrounds (see [Logo](#logo)) |
| `CLAUDE.md` | Rules for AI assistants working in this repository: lower snake case outside code and each language's own style inside it, names written out in full, generic English content |

Open the HTML files in a browser; they need no server, and the concept pages link to each other. After a change in
`projects/`, run `npm ci` once and then `npm run concept_data`, so the pages show the new state.

## Setup

The engine's tools are JavaScript on Node. On Windows, double-click `install_prerequisites.cmd`: it checks for Git and
Node.js 22 or newer and installs what is missing with winget. `install_prerequisites.cmd -CheckOnly` only reports. On
other systems, install Git and Node.js LTS by hand. The concept pages need neither.

## Adding a project

1. Name the project after its code repo, in lower snake case, and create `projects/<project>/`.
2. Copy `templates/project.yml` into it and fill it in.
3. Add features, requirements and specs from the templates, one file each, named after their ID.

All example data is made up. The example code repo is `recipe_box`, a fictional PowerShell tool set with a PDF export of
recipe collections and an import checker. People appear only as role handles such as `@owner1` or `@lead1`. Every name
outside code is in lower snake case, except where a tool needs another spelling; names inside code follow their language (see `CLAUDE.md`).

## Logo

The logo is an R drawn as a Git graph inside an open seal. Main, in gold, starts at the open ring at the foot of the
stem and runs up to the middle commit and out along the leg. A branch, in blue, leaves main there, goes up and around
the bowl and merges back where the leg begins. The leg runs out through a gap in the seal and ends in a release tag:
the need comes in as an open ring and leaves as a tagged release.

## Licence

Open source under the [MIT License](license): anyone may use, copy, change and share it, also commercially, as long
as the licence notice stays with it.
