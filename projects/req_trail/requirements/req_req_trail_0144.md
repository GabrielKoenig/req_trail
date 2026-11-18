---
id: req_req_trail_0144
title: One migration per format change
feature: feature_req_trail_17
owner: "@GabrielKoenig"
version: 1
priority: must
type: functional
category: ""
depends_on: [req_req_trail_0143@1]
reviews: []
reviews_reason: "Release and workflow setup; reads nothing beyond the repos that call it."
source: "concept/concept.html#estimate"
statement: >
  Every format version after the first shall have a migration from the version before it.
rationale: >
  Without a defined path from the old format, existing projects would be stuck on an engine that cannot read
  them.
acceptance:
  - "Unit: adding model/format_2/ without model/migrations/format_1_to_2.js makes the test fail."
links:
  mockup: n/a
  spec: null
---
