---
id: req_req_trail_0040
title: No build step
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
  The engine shall run from its source files without a compile or bundle step.
rationale: >
  A compile step adds tools and a second form of the code that can drift from what was reviewed.
acceptance:
  - "Static: package.json has no build script."
  - "Integration: a fresh clone runs validate after npm ci."
links:
  spec: null
---
