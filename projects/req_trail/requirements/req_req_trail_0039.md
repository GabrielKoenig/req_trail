---
id: req_req_trail_0039
title: Node.js is the only runtime
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
  The engine's tools shall need no runtime other than Node.js LTS and git.
rationale: >
  Every extra runtime is one more thing to install and update on every maintainer's PC and runner.
acceptance:
  - "Integration: the CI job sets up only Node.js and passes."
  - "Static: no file in tools/ starts pwsh, python or another interpreter."
links:
  mockup: n/a
  spec: null
---
