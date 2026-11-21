---
id: req_req_trail_0148
title: New format, new major version
feature: feature_req_trail_17
owner: "@GabrielKoenig"
version: 1
priority: must
type: functional
category: ""
depends_on: [req_req_trail_0117@1, req_req_trail_0143@1]
reviews: []
reviews_reason: "Release and workflow setup; reads nothing beyond the repos that call it."
source: "concept/concept.html#estimate"
statement: >
  The engine shall release a new format version only with a new major version tag.
rationale: >
  A project pinned to a major version takes every update automatically, so a change that needs a migration
  must wait for a major version the project chooses.
acceptance:
  - "Integration: tagging a minor release that adds model/format_2/ makes the release workflow fail."
links:
  spec: null
---
