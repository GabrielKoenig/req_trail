---
id: req_req_trail_0070
title: Fast for 1,000 requirements
feature: feature_req_trail_06
owner: "@GabrielKoenig"
version: 1
priority: should
type: non_functional
category: "performance"
depends_on: []
reviews: []
reviews_reason: "Shows only what index.json holds; handles appear as GitHub already shows them."
source: "concept/concept.html#estimate"
statement: >
  The explorer shall show the requirements list within 2 seconds for an index of 1,000 requirements.
rationale: >
  A list that loads slowly makes people ask a developer instead of looking it up.
acceptance:
  - "Integration: with a generated index of 1,000 requirements the list appears within 2 seconds on a mid-range laptop (B8)."
links:
  mockup: n/a
  spec: null
---
