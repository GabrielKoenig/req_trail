---
id: req_req_trail_0049
title: Trace matrix
feature: feature_req_trail_04
owner: "@GabrielKoenig"
version: 1
priority: must
type: functional
category: ""
depends_on: []
reviews: []
reviews_reason: "Reads repository files and pull request events; handles appear only as GitHub already shows them."
source: "concept/concept.html#estimate"
statement: >
  index.json shall hold, for each requirement, its spec, mockup, code pull requests, tests and acceptance
  record.
rationale: >
  A trace matrix that is generated cannot drift, unlike one that someone keeps up by hand.
acceptance:
  - "Unit: req_recipe_box_0001 shows spec_recipe_box_0001@1, pdf_layout.html and its acceptance record, and an empty cell for each missing link."
links:
  mockup: n/a
  spec: null
---
