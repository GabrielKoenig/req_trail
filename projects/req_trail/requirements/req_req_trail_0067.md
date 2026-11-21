---
id: req_req_trail_0067
title: Dependency map
feature: feature_req_trail_06
owner: "@GabrielKoenig"
version: 1
priority: could
type: functional
category: ""
depends_on: []
reviews: []
reviews_reason: "Shows only what index.json holds; handles appear as GitHub already shows them."
source: "concept/concept.html#estimate"
statement: >
  The explorer shall show the dependencies between requirements as a map.
rationale: >
  A map shows which requirements are affected before someone changes the one they depend on.
acceptance:
  - "Manual: the map of the example data shows req_recipe_box_0003 pointing to req_recipe_box_0001."
links:
  spec: null
---

## Manual test

**Who:** the reviewer of the pull request that builds it, who did not write it.

1. Open the map view with the example data.
2. Find req_recipe_box_0003.

**Passes when:** An arrow leads from req_recipe_box_0003 to req_recipe_box_0001.
