---
id: req_req_trail_0027
title: References are pinned
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
  validate shall fail when a reference has no version.
rationale: >
  An unpinned reference cannot show that its target has changed since it was made.
acceptance:
  - "Unit: depends_on: [req_recipe_box_0001] fails with the hint to write req_recipe_box_0001@1."
links:
  mockup: n/a
  spec: null
---
