---
id: req_req_trail_0184
title: Requirement dependencies follow the feature order
feature: feature_req_trail_03
owner: "@GabrielKoenig"
version: 1
priority: should
type: functional
category: ""
depends_on: [req_req_trail_0183@1]
reviews: []
reviews_reason: "Compares fields of repository files; no personal data or credentials."
source: "concept/concept.html#estimate"
statement: >
  validate shall fail a requirement that depends on a requirement of another feature unless its own feature depends
  on that feature, directly or through the features it depends on.
rationale: >
  A requirement can only be built after the requirements it needs, so the order of the features has to allow for
  every dependency between their requirements.
acceptance:
  - "Unit: a requirement of feature_recipe_box_02 that depends on req_recipe_box_0001@1 fails while feature_recipe_box_02 has depends_on: []."
  - "Unit: the same requirement passes once feature_recipe_box_02 lists feature_recipe_box_01."
  - "Unit: a requirement of feature_recipe_box_03 that depends on req_recipe_box_0001@1 passes when feature_recipe_box_03 lists only feature_recipe_box_02, which lists feature_recipe_box_01."
links:
  spec: null
---

A feature may list more than its requirements need, such as a form or a page of another work package that its work
builds on. Until work package 3, `npm run concept_data` and `npm run check_concept_data` fail in the same case.
