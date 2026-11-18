---
id: req_req_trail_0089
title: Evidence on the merged commit
feature: feature_req_trail_11
owner: "@GabrielKoenig"
version: 1
priority: must
type: functional
category: ""
depends_on: []
reviews: []
reviews_reason: "Test reports hold test names and counts, no personal data."
source: "concept/concept.html#estimate"
statement: >
  gate_check shall accept as G3 evidence only a run on the merged commit or a later one.
rationale: >
  A test run on an older commit does not prove that the merged code works.
acceptance:
  - "Unit: an acceptance record that cites a run on an earlier commit fails."
  - "Unit: an acceptance record that cites a run on the merged commit passes."
links:
  mockup: n/a
  spec: null
---
