---
id: req_req_trail_0126
title: Missing shall
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
  text_check shall warn when a statement has no 'shall'.
rationale: >
  A statement without shall often describes background instead of a behaviour.
acceptance:
  - "Unit: 'The export writes a PDF.' warns."
links:
  spec: null
---
