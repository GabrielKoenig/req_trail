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
  The propose_change workflow shall turn a change request issue into a branch
  `change_request/<project>/<feature>_issue<number>` and a pull request that changes only the named file and closes
  the issue.
rationale: >
  Every change, also one from someone without Git, has to go through a pull request and its gate.
acceptance:
  - "Integration: change request issue #31 for req_recipe_box_0003 opens one pull request that changes that file alone."
  - "Integration: the pull request for change request issue #31 on req_recipe_box_0003 comes from the branch change_request/recipe_box/feature_recipe_box_01_issue31, and its body holds Closes #31."
  - "Unit: proposed text that holds YAML or shell syntax ends up as plain text in the statement."
links:
  spec: null
---

The branch follows the scheme in `CLAUDE.md`, and the pull request body closes the change request issue with `Closes
#<number>`.
