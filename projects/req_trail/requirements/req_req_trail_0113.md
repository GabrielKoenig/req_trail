---
id: req_req_trail_0113
title: Roles history
feature: feature_req_trail_16
owner: "@GabrielKoenig"
version: 1
priority: should
type: functional
category: ""
depends_on: []
reviews: [privacy]
reviews_reason: "Who held which hat when is personal data (A2)."
source: "concept/concept.html#estimate"
statement: >
  build_index shall write roles_history.json with each change to roles.yml: date, hat, scope, handle and pull
  request.
rationale: >
  Decisions are judged by who held the hat at the time, not by who holds it today.
acceptance:
  - "Unit: two merged changes to roles.yml give two entries with their dates and pull requests."
links:
  mockup: n/a
  spec: null
---
