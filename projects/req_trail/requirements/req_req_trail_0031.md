---
id: req_req_trail_0031
title: Type from the fixed list
feature: feature_req_trail_03
owner: "@GabrielKoenig"
version: 1
priority: must
type: functional
category: ""
depends_on: [req_req_trail_0020@1]
reviews: []
reviews_reason: "Reads repository files only; no personal data or credentials."
source: "concept/concept.html#estimate"
statement: >
  validate shall fail when a requirement has no type, or a type other than functional, non_functional or
  constraint.
rationale: >
  Requirements management tools sort requirements by type, so every requirement needs one from a fixed list.
acceptance:
  - "Unit: type: feature fails and lists the allowed types."
  - "Unit: a requirement without type fails."
links:
  spec: null
---
