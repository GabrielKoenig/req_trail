---
id: req_req_trail_0053
title: Index for 1,000 requirements
feature: feature_req_trail_04
owner: "@GabrielKoenig"
version: 2
priority: should
type: non_functional
category: "performance"
depends_on: []
reviews: []
reviews_reason: "Reads repository files and pull request events; handles appear only as GitHub already shows them."
source: "concept/concept.html#estimate"
statement: >
  build_index shall finish within 2 minutes for 1,000 requirements on a GitHub-hosted runner.
rationale: >
  A slow index delays every view and check that depends on it.
acceptance:
  - "Integration: a generated project with 1,000 requirements and 200 specs builds in under 2 minutes, as the median of 3 runs."
links:
  mockup: n/a
  spec: null
---

Version 2: the time is the median of 3 runs, so that one slow runner does not decide it.
