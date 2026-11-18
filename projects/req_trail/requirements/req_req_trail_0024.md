---
id: req_req_trail_0024
title: File name equals ID
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
  validate shall fail when the name of a feature, requirement or spec file is not its ID plus .md.
rationale: >
  When the file name equals the ID, a link can be followed to its file without a search.
acceptance:
  - "Unit: req_recipe_box_0009.md with id req_recipe_box_0010 makes validate fail."
  - "Unit: an acceptance record whose file name differs from its requirement's ID makes validate fail."
links:
  mockup: n/a
  spec: null
---
