---
id: req_req_trail_0152
title: Concept data matches the files
feature: feature_req_trail_03
owner: "@GabrielKoenig"
version: 1
priority: should
type: functional
category: ""
depends_on: []
reviews: []
reviews_reason: "Reads repository files only; no personal data or credentials."
source: "concept/architecture.html#risks"
statement: >
  The pull request checks shall fail when concept/concept_data.js differs from what the files in projects/ produce.
rationale: >
  The concept pages show the requirements from a generated file, and a generated file that nobody rebuilds shows an
  old state without anyone noticing.
acceptance:
  - "Integration: a pull request that changes a requirement without running npm run concept_data fails, and the message names that command."
  - "Integration: npm run check_concept_data exits with code 0 on main."
links:
  mockup: n/a
  spec: null
---
