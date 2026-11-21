---
id: req_req_trail_0117
title: Version tags
feature: feature_req_trail_17
owner: "@GabrielKoenig"
version: 1
priority: must
type: functional
category: ""
depends_on: []
reviews: []
reviews_reason: "Release and workflow setup; reads nothing beyond the repos that call it."
source: "concept/concept.html#estimate"
statement: >
  The engine shall publish each release as a version tag and keep a major tag such as v1 on the latest
  compatible release.
rationale: >
  Project repos need a stable version to pin, and a major tag lets them take fixes without editing anything.
acceptance:
  - "Integration: after release v1.2.0, the tag v1 points to the same commit as v1.2.0."
  - "Smoke: after each release, a workflow on the test repo that uses the tag v1 runs validate and passes."
links:
  spec: null
---
