---
id: req_req_trail_0097
title: Every work package through the gates
feature: feature_req_trail_14
owner: "@GabrielKoenig"
version: 1
priority: must
type: functional
category: ""
depends_on: []
reviews: []
reviews_reason: "Runs on the engine's own repo; pull requests show handles as GitHub already does."
source: "concept/concept.html#estimate"
statement: >
  Every must requirement of a finished work package of reqTrail shall reach Verified through its own
  requirement, spec and acceptance pull requests.
rationale: >
  The pilot has to prove that the whole chain from requirement to evidence works before another team relies on
  it.
acceptance:
  - "Manual: in the explorer, every must requirement of a finished work package shows Verified and links its three merged gate pull requests."
links:
  spec: null
---

## Manual test

**Who:** the co-author, after each work package.

1. Open the explorer on GitHub Pages and choose the project `req_trail`.
2. Filter by the feature of the finished work package and by priority must.
3. Open each requirement and read its status and the links to its requirement, spec and acceptance pull requests.
4. Open each of the three pull requests on GitHub.

**Passes when:** Every requirement shows Verified, and all three of its pull requests are merged.
