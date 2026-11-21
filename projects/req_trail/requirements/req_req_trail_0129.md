---
id: req_req_trail_0129
title: Checkable acceptance criteria
feature: feature_req_trail_18
owner: "@GabrielKoenig"
version: 1
priority: could
type: functional
category: ""
depends_on: []
reviews: []
reviews_reason: "Text rules run in CI; no data leaves GitHub."
source: "concept/concept.html#estimate"
statement: >
  text_check shall warn when an acceptance criterion names no observable result, such as a number, a state, an
  output or a message.
rationale: >
  A criterion without an observable result cannot be tested, so the requirement cannot pass G1.
acceptance:
  - "Unit: 'The export works well.' warns."
  - "Unit: 'The export writes three pages.' does not warn."
links:
  spec: null
---
