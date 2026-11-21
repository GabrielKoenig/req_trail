---
id: req_req_trail_0043
title: One language for the engine
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
  Every check and tool of the engine shall be written in JavaScript.
rationale: >
  One language keeps the engine maintainable by one team with one toolchain.
acceptance:
  - "Static: every file under tools/ ends in .js, and the only PowerShell file in the repo is setup/install_prerequisites.ps1."
links:
  spec: null
---
