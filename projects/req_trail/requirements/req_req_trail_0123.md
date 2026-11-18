---
id: req_req_trail_0123
title: Overview index
feature: feature_req_trail_17
owner: "@GabrielKoenig"
version: 1
priority: could
type: functional
category: ""
depends_on: []
reviews: []
reviews_reason: "Release and workflow setup; reads nothing beyond the repos that call it."
source: "concept/concept.html#estimate"
statement: >
  The hub shall build a nightly overview index across all registered project repos.
rationale: >
  Leads with several project repos need one overview instead of one explorer per repo.
acceptance:
  - "Integration: with two registered test repos the overview lists the requirements of both."
links:
  mockup: n/a
  spec: null
---
