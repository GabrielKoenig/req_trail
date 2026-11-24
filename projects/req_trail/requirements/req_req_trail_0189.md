---
id: req_req_trail_0189
title: Gates of the files in gates.yml
feature: feature_req_trail_03
owner: "@GabrielKoenig"
version: 1
priority: must
type: functional
category: ""
depends_on: []
reviews: []
reviews_reason: "Defines a data file of the engine; no personal data or credentials."
source: "concept/concept.html#gates"
statement: >
  gates.yml shall list for each gate the path patterns of its files, its gatekeeper hat and the branch phases it
  allows, and list the paths that belong to no gate.
rationale: >
  One list that validate, build_index and CODEOWNERS all read cannot disagree with itself, while three copies can.
acceptance:
  - "Static: gates.yml passes its schema, and every file type in templates/ matches the paths of exactly one gate or of no gate."
  - "Static: gates.yml allows idea and change_request for G1, concept for G2 and dev for G3, as the branch rule in CLAUDE.md says."
  - "Unit: validate fails a gates.yml in which one path pattern belongs to two gates."
  - "Manual: the reviewer finds no list of gate paths in the code of validate, build_index or the branch check."
links:
  spec: null
---

`conventions.md` explains the gates and refers to `gates.yml` for the paths. Files that `gates.yml` does not list,
such as code or the concept pages of this repo, belong to no gate.

## Manual test

**Who:** the reviewer of the pull request that builds it, who did not write it.

1. Search the code of validate, `build_index` and the branch check for the folder names of requirements, specs,
   feature concepts and acceptance records.
2. For each hit, check whether it reads the paths from `gates.yml`.

**Passes when:** Every hit reads its paths from `gates.yml`.
