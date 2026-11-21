---
id: req_req_trail_0009
title: Fixed value lists
feature: feature_req_trail_03
owner: "@GabrielKoenig"
version: 1
priority: must
type: functional
category: ""
depends_on: [req_req_trail_0141@1]
reviews: []
reviews_reason: "Defines file formats only; no personal data, credentials or permissions."
source: "concept/concept.html#estimate"
statement: >
  The conventions shall show the allowed values of priority, type, category and reviews.
rationale: >
  A field with free values cannot be filtered, checked or mapped to the values of another tool.
acceptance:
  - "Static: conventions.md has a table with one row each for priority, type, category and reviews."
  - "Unit: the values in that table equal the enums of the schemas of the current format version."
links:
  spec: null
---

It is built in work package 3, because its test compares the table with the schemas (req_req_trail_0141).
