---
id: req_req_trail_0102
title: Engine tests carry the IDs
feature: feature_req_trail_14
owner: "@GabrielKoenig"
version: 1
priority: should
type: functional
category: ""
depends_on: [req_req_trail_0086@1]
reviews: []
reviews_reason: "Runs on the engine's own repo; pull requests show handles as GitHub already does."
source: "concept/concept.html#estimate"
statement: >
  Every Unit or Integration criterion of a finished work package shall have at least one engine test whose
  name or group name holds the requirement ID.
rationale: >
  Test evidence works only if the engine's own tests carry the requirement IDs.
acceptance:
  - "Static: the JUnit XML report of the engine's tests holds, for each such criterion's requirement, at least one test whose name holds its ID."
links:
  spec: null
---
