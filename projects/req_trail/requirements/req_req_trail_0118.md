---
id: req_req_trail_0118
title: Reusable workflows
feature: feature_req_trail_17
owner: "@GabrielKoenig"
version: 1
priority: must
type: functional
category: ""
depends_on: []
reviews: []
reviews_reason: "Release and workflow setup; reads nothing beyond the repos that call it."
source: "concept/concept.html#estimate"
statement: >
  A project repo shall run validate, build_index and the explorer build by calling the engine's reusable
  workflows at a fixed version.
rationale: >
  Project repos that call the engine's workflows get every fix from one place instead of from copies.
acceptance:
  - "Integration: the test project repo runs all three through uses: lines that end in @v1."
links:
  mockup: n/a
  spec: null
---
