---
id: req_req_trail_0128
title: Statement length
feature: feature_req_trail_18
owner: "@GabrielKoenig"
version: 1
priority: should
type: functional
category: ""
depends_on: []
reviews: []
reviews_reason: "Text rules run in CI; no data leaves GitHub."
source: "concept/concept.html#estimate"
statement: >
  text_check shall warn when a statement is longer than 40 words.
rationale: >
  Long statements are hard to review and usually hide more than one requirement.
acceptance:
  - "Unit: a statement of 41 words warns, and one of 40 words does not."
links:
  mockup: n/a
  spec: null
---
