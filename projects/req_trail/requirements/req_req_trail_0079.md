---
id: req_req_trail_0079
title: No token for a public index
feature: feature_req_trail_08
owner: "@GabrielKoenig"
version: 1
priority: should
type: functional
category: ""
depends_on: []
reviews: []
reviews_reason: "Reads the published index and the text of the pull request; stores nothing."
source: "concept/concept.html#estimate"
statement: >
  The link workflow shall read the index of a public project repo without a token.
rationale: >
  A code repo should not need a secret only to read public data.
acceptance:
  - "Integration: the workflow runs with no secret set and reads index.json from GitHub Pages."
links:
  mockup: n/a
  spec: null
---
