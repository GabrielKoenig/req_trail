---
id: req_req_trail_0038
title: Same result locally
feature: feature_req_trail_03
owner: "@GabrielKoenig"
version: 1
priority: should
type: constraint
category: ""
depends_on: []
reviews: []
reviews_reason: "Reads repository files only; no personal data or credentials."
source: "concept/concept.html#estimate"
statement: >
  validate shall give the same result on a local clone as in CI for the same commit.
rationale: >
  An author should see the same error before pushing as the pull request shows afterwards.
acceptance:
  - "Integration: npm run validate on a clone and the CI job on the same commit print the same messages and exit with the same code."
links:
  spec: null
---
