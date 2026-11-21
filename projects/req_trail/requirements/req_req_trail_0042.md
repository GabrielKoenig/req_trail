---
id: req_req_trail_0042
title: Tests for every tool
feature: feature_req_trail_03
owner: "@GabrielKoenig"
version: 1
priority: must
type: constraint
category: ""
depends_on: []
reviews: []
reviews_reason: "Reads repository files only; no personal data or credentials."
source: "concept/concept.html#estimate"
statement: >
  Every tool of the engine shall have tests that run with node --test.
rationale: >
  The engine enforces the gates, so a defect in it lets broken files or unapproved changes through.
acceptance:
  - "Integration: node --test passes in CI."
  - "Static: each file in tools/ has a test file of the same base name in tests/."
links:
  spec: null
---
