---
id: req_req_trail_0030
title: A requirement needs acceptance criteria
feature: feature_req_trail_03
owner: "@GabrielKoenig"
version: 1
priority: must
type: functional
category: ""
depends_on: [req_req_trail_0020@1]
reviews: []
reviews_reason: "Reads repository files only; no personal data or credentials."
source: "concept/concept.html#estimate"
statement: >
  validate shall fail when a requirement has no acceptance criterion.
rationale: >
  Without acceptance criteria a requirement cannot pass G1, because nobody can say how it will be tested.
acceptance:
  - "Unit: acceptance: [] fails."
  - "Unit: a requirement with one criterion passes."
links:
  mockup: n/a
  spec: null
---
