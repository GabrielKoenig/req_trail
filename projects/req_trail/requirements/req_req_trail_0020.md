---
id: req_req_trail_0020
title: One schema per file type
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
  The engine shall have one JSON Schema per file type: project, feature, requirement, spec, acceptance and
  metrics.
rationale: >
  A schema states each file format in a form that a machine can check on every pull request.
acceptance:
  - "Static: schema/ holds six files ending in .schema.json."
  - "Unit: every file in projects/recipe_box and projects/req_trail passes its schema."
links:
  mockup: n/a
  spec: null
---
