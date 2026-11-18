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
│  └─ recipe_box/     # example project with made-up data
├─ concept/           # the concept page and the roles dashboard
├─ CLAUDE.md          # rules for AI assistants working in this repository
├─ readme.md
└─ license
```

| Path | What it is |
| ---- | ---------- |
| [`conventions.md`](conventions.md) | The rules every file follows: lower snake case names, the ID formats, versions and pinned references, the six statuses and what sets them, the gates, and how code and tests point back to a requirement |
| `templates/` | `project.yml`, `feature.md`, `requirement.md`, `spec.md`, `acceptance.md` and `metrics.yml`, each with placeholders and short comments |
| `projects/recipe_box/` | The example project `recipe_box`: one feature, two requirements, two specs, a mockup, an acceptance record and a measured outcome, the same data as the demo on the concept page |
| `concept/concept.html` | The concept page: the process from request to technical spec, the gates, repos and issues, community intake, a working demo of the requirements tracker, Obsidian as a viewer, the architecture, options, an effort estimate and a review list |
| `concept/roles.html` | The roles dashboard: hats instead of people, duties per phase and gate, a simulated history of who held which hat, and the checks that read the roles |
| `CLAUDE.md` | Rules for AI assistants working in this repository: lower snake case for every name, written out in full, generic English content |

Open the HTML files in a browser; they need no server, and the two concept pages link to each other.

## Adding a project

1. Name the project after its code repo, in lower snake case, and create `projects/<project>/`.
2. Copy `templates/project.yml` into it and fill it in.
3. Add features, requirements and specs from the templates, one file each, named after their ID.

All example data is made up. The example code repo is `recipe_box`, a fictional PowerShell tool set with a PDF export of
recipe collections and an import checker. People appear only as role handles such as `@owner1` or `@lead1`. Every name
is in lower snake case, except where a tool needs another spelling (see `CLAUDE.md`).

## Licence

Open source under the [MIT License](license): anyone may use, copy, change and share it, also commercially, as long
as the licence notice stays with it.
