---
id: req_req_trail_0021
title: Schema errors fail
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
  validate shall fail when a file breaks its schema, and name the file, the field and the rule.
rationale: >
  An error that names the file, the field and the rule can be fixed without asking a maintainer.
acceptance:
  - "Unit: a requirement with priority: urgent makes validate exit with code 1 and print the file, the field priority and the allowed values."
links:
  spec: null
---
