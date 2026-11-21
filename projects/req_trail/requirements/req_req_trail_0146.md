---
id: req_req_trail_0146
title: Older formats stay readable
feature: feature_req_trail_17
owner: "@GabrielKoenig"
version: 1
priority: must
type: functional
category: ""
depends_on: [req_req_trail_0145@1]
reviews: []
reviews_reason: "Release and workflow setup; reads nothing beyond the repos that call it."
source: "concept/concept.html#estimate"
statement: >
  The engine shall read a project in an older format version by applying the migrations in order, without
  changing its files.
rationale: >
  A project should be able to take a new engine first and migrate its files later, in a pull request of its
  own.
acceptance:
  - "Unit: a format 1 test project loads in a test engine whose current format is 3, through two migrations in memory."
  - "Unit: the files of the test project are unchanged afterwards."
links:
  spec: null
---
