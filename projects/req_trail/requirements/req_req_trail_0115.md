---
id: req_req_trail_0115
title: Nightly return path
feature: feature_req_trail_16
owner: "@GabrielKoenig"
version: 1
priority: must
type: functional
category: ""
depends_on: [req_req_trail_0052@1]
reviews: []
reviews_reason: "Checks approvals that GitHub already records; stores no new personal data."
source: "concept/concept.html#estimate"
statement: >
  The nightly build_index run shall pick up merges, test runs and release tags in the code repos since the
  previous run.
rationale: >
  Merges, test runs and releases in the code repos change statuses even when this repo is quiet.
acceptance:
  - "Integration: a merge in the test code repo shows in the index after the next nightly run."
links:
  spec: null
---
