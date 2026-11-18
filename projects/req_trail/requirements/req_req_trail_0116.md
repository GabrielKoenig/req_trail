---
id: req_req_trail_0116
title: gate_exception is visible
feature: feature_req_trail_16
owner: "@GabrielKoenig"
version: 1
priority: must
type: functional
category: ""
depends_on: []
reviews: []
reviews_reason: "Checks approvals that GitHub already records; stores no new personal data."
source: "concept/concept.html#estimate"
statement: >
  build_index shall mark every merge with the label gate_exception as an exception in the index.
rationale: >
  A bypassed gate must stay visible, or exceptions become the normal way to merge.
acceptance:
  - "Unit: a merged acceptance pull request with gate_exception shows Verified with the exception mark."
links:
  mockup: n/a
  spec: null
---
