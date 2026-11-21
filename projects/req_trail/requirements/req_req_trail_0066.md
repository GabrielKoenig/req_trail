---
id: req_req_trail_0066
title: Ad-hoc questions as filters
feature: feature_req_trail_06
owner: "@GabrielKoenig"
version: 1
priority: should
type: functional
category: ""
depends_on: []
reviews: []
reviews_reason: "Shows only what index.json holds; handles appear as GitHub already shows them."
source: "concept/concept.html#estimate"
statement: >
  The explorer shall offer the filters approved but untested and changed since a baseline.
rationale: >
  The questions a lead asks most often should be one click away instead of a query to write.
acceptance:
  - "Unit: approved but untested returns the requirements at Approved or later that have no test."
  - "Unit: changed since a baseline returns the requirements whose version rose after the given tag."
links:
  spec: null
---
