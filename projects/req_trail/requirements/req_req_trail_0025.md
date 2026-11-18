---
id: req_req_trail_0025
title: References resolve
feature: feature_req_trail_03
owner: "@GabrielKoenig"
version: 1
priority: must
type: functional
category: ""
depends_on: []
reviews: []
reviews_reason: "Reads repository files only; no personal data or credentials."
source: "concept/concept.html#estimate"
statement: >
  validate shall fail when a reference names an ID that does not exist.
rationale: >
  A reference to a missing ID is a broken link that nobody notices until someone follows it.
acceptance:
  - "Unit: depends_on: [req_recipe_box_0099@1] fails when req_recipe_box_0099 does not exist."
  - "Unit: the same holds for covers, links.spec and requirement."
links:
  mockup: n/a
  spec: null
---
