---
id: req_req_trail_0137
title: From change request to pull request
feature: feature_req_trail_19
owner: "@GabrielKoenig"
version: 1
priority: should
type: non_functional
category: "security"
depends_on: []
reviews: [security]
reviews_reason: "Anyone can open an issue, and the workflow writes a branch with the repo token, so the issue text must never run as code."
source: "concept/concept.html#estimate"
statement: >
  The propose_change workflow shall turn a change request issue into a branch and a pull request that changes
  only the named file.
rationale: >
  Every change, also one from someone without Git, has to go through a pull request and its gate.
acceptance:
  - "Integration: a change request for req_recipe_box_0003 opens a pull request that changes that file alone and links the issue."
  - "Unit: proposed text that holds YAML or shell syntax ends up as plain text in the statement."
links:
  mockup: n/a
  spec: null
---
