---
id: req_req_trail_0196
title: Branch phase matches the gate
feature: feature_req_trail_05
owner: "@GabrielKoenig"
version: 1
priority: should
type: constraint
category: ""
depends_on: [req_req_trail_0150@1, req_req_trail_0189@1]
reviews: []
reviews_reason: "Reads the branch name and the changed paths only; no personal data or credentials."
source: "CLAUDE.md"
statement: >
  validate shall fail a pull request whose branch phase is not one that gates.yml allows for the gate of its files.
rationale: >
  The phase in the branch name then tells the truth about which decision the pull request asks for.
acceptance:
  - "Unit: a pull request with requirement files fails from concept/recipe_box/feature_recipe_box_01_issue31, because gates.yml allows only idea and change_request for their gate G1."
  - "Unit: the same files pass from idea/recipe_box/feature_recipe_box_01_issue31 and from change_request/recipe_box/feature_recipe_box_01_issue31."
  - "Unit: a pull request that changes only files that gates.yml does not list passes from every listed phase."
links:
  spec: null
---

Files that `gates.yml` does not list, such as code or the concept pages of this repo, allow every phase. The branch
rule itself is `req_req_trail_0150`.
