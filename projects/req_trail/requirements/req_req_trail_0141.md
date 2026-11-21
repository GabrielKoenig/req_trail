---
id: req_req_trail_0141
title: Schemas as the single source
feature: feature_req_trail_03
owner: "@GabrielKoenig"
version: 1
priority: must
type: constraint
category: ""
depends_on: [req_req_trail_0020@1]
reviews: []
reviews_reason: "Reads repository files only; no personal data or credentials."
source: "concept/concept.html#estimate"
statement: >
  Field names, required fields and allowed values shall be defined only in the schemas of the format.
rationale: >
  Two lists of the same values drift apart, so the code, the templates and the documentation read them from
  one place.
acceptance:
  - "Unit: the keys of each template equal the properties of its schema, in the same order."
  - "Static: no file under tools/ holds a list of allowed values of its own."
links:
  spec: null
---
