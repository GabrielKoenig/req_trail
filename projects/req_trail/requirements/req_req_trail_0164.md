---
id: req_req_trail_0164
title: Open pull requests in the index
feature: feature_req_trail_04
owner: "@GabrielKoenig"
version: 1
priority: must
type: functional
category: ""
depends_on: [req_req_trail_0046@1]
reviews: []
reviews_reason: "Reads repository files and pull request events; handles appear only as GitHub already shows them."
source: "concept/concept.html#gates"
statement: >
  build_index shall read the requirement files of open pull requests, so that a requirement that is not merged yet
  appears in the index as Draft or In review.
rationale: >
  Draft and In review are set by open pull requests, so the files on main alone cannot show them.
acceptance:
  - "Unit: a requirement file added in an open draft pull request is in index.json as Draft, and one in a pull request that is ready for review as In review."
  - "Unit: once that pull request is closed without a merge, the requirement is gone from index.json."
links:
  mockup: n/a
  spec: null
---

A pull request from a fork is read as data only. Its text reaches the explorer, which renders it under
req_req_trail_0160.
