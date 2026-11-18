---
id: req_req_trail_0026
title: No future versions
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
  validate shall fail when a reference names a version higher than the target's current version.
rationale: >
  A reference to a version that does not exist yet means the author pinned it by mistake.
acceptance:
  - "Unit: req_recipe_box_0001@2 fails while req_recipe_box_0001 is at version 1."
links:
  mockup: n/a
  spec: null
---
