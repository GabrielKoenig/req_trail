---
id: req_req_trail_0130
title: Warnings only
feature: feature_req_trail_18
owner: "@GabrielKoenig"
version: 1
priority: must
type: functional
category: ""
depends_on: []
reviews: []
reviews_reason: "Text rules run in CI; no data leaves GitHub."
source: "concept/concept.html#estimate"
statement: >
  text_check shall never fail a pull request.
rationale: >
  The Principal Engineer decides at G1, and a text rule only helps the review.
acceptance:
  - "Unit: a statement that breaks every rule gives warnings and exit code 0."
links:
  mockup: n/a
  spec: null
---
