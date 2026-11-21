---
id: req_req_trail_0168
title: No dependency cycles
feature: feature_req_trail_03
owner: "@GabrielKoenig"
version: 1
priority: must
type: functional
category: ""
depends_on: []
reviews: []
reviews_reason: "Reads repository files only; no personal data or credentials."
source: "concept/concept.html#gates"
statement: >
  validate shall fail when the `depends_on` references of a project's requirements form a cycle.
rationale: >
  A cycle leaves no order in which the requirements can be built.
acceptance:
  - "Unit: req_recipe_box_0001 depending on req_recipe_box_0003, which depends on req_recipe_box_0001, fails and names both IDs."
  - "Unit: a requirement that depends on itself fails."
links:
  spec: null
---
