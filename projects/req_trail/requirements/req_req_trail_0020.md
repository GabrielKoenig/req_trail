---
id: req_req_trail_0020
title: One schema per object type and format
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
  The engine shall have one JSON Schema per object type for each format version, in model/format_<n>/.
rationale: >
  A schema states each file format in a form that a machine can check on every pull request.
acceptance:
  - "Static: model/format_1/ holds six files ending in .schema.json: project, feature, requirement, spec, acceptance and metrics."
  - "Unit: every file in projects/recipe_box and projects/req_trail passes the schema of its project's format version."
links:
  spec: null
---
