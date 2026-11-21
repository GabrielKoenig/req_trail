---
id: req_req_trail_0052
title: On merge and nightly
feature: feature_req_trail_04
owner: "@GabrielKoenig"
version: 1
priority: must
type: functional
category: ""
depends_on: []
reviews: []
reviews_reason: "Reads repository files and pull request events; handles appear only as GitHub already shows them."
source: "concept/concept.html#estimate"
statement: >
  build_index shall run on every merge to main and once a night.
rationale: >
  Merges in this repo and events in the code repos both change statuses, so the index needs both triggers.
acceptance:
  - "Static: the workflow triggers on a push to main and on a nightly schedule."
links:
  spec: null
---
