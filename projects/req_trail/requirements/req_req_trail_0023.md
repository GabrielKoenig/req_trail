---
id: req_req_trail_0023
title: Unique IDs
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
  validate shall fail when two files carry the same ID.
rationale: >
  Two files with one ID would make every link to that ID ambiguous.
acceptance:
  - "Unit: two requirement files with id req_recipe_box_0001 make validate fail and name both files."
links:
  spec: null
---
