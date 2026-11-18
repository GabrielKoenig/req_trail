---
id: req_req_trail_0104
title: Effort next to the estimate
feature: feature_req_trail_14
owner: "@GabrielKoenig"
version: 1
priority: should
type: functional
category: ""
depends_on: []
reviews: []
reviews_reason: "Runs on the engine's own repo; pull requests show handles as GitHub already does."
source: "concept/concept.html#estimate"
statement: >
  The pilot shall record the hours actually spent on each work package next to its estimate.
rationale: >
  The next estimate is only as good as the record of what the pilot really took.
acceptance:
  - "Manual: the pilot's tracking issue lists, for every finished work package, the estimate and the hours spent."
links:
  mockup: n/a
  spec: null
---

## Manual test

**Who:** the co-author, after each work package.

1. Open the pilot's tracking issue.
2. Compare its list with the finished work packages.

**Passes when:** Every finished work package has both numbers, and after work package 3 there is a new estimate for the rest (B9).
