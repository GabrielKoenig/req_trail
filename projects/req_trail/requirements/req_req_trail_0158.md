---
id: req_req_trail_0158
title: A failed build keeps the last index
feature: feature_req_trail_04
owner: "@GabrielKoenig"
version: 1
priority: must
type: functional
category: ""
depends_on: [req_req_trail_0157@1]
reviews: []
reviews_reason: "Reads repository files and pull request events; handles appear only as GitHub already shows them."
source: "concept/architecture.html#risks"
statement: >
  build_index shall leave the last published index in place when it fails.
rationale: >
  A failed build must not leave readers with an empty or half-written index.
acceptance:
  - "Integration: a build_index run that fails on a broken file leaves the published index.json and roles_history.json unchanged."
links:
  mockup: n/a
  spec: null
---
