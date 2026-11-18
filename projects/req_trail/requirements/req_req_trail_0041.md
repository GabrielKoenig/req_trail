---
id: req_req_trail_0041
title: Every dependency approved
feature: feature_req_trail_03
owner: "@GabrielKoenig"
version: 1
priority: must
type: non_functional
category: "security"
depends_on: []
reviews: [security]
reviews_reason: "Each dependency runs in CI with the repo token, so adding one is a supply-chain decision."
source: "concept/concept.html#estimate"
statement: >
  Every runtime dependency of the engine shall be named in a merged spec.
rationale: >
  A runtime dependency is outside code that runs with the engine's permissions, so it needs a reviewed
  decision.
acceptance:
  - "Static: each entry under dependencies in package.json appears in a merged spec of project req_trail."
links:
  mockup: n/a
  spec: null
---
