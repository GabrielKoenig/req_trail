---
id: req_req_trail_0119
title: Short caller files
feature: feature_req_trail_17
owner: "@GabrielKoenig"
version: 1
priority: should
type: constraint
category: ""
depends_on: []
reviews: []
reviews_reason: "Release and workflow setup; reads nothing beyond the repos that call it."
source: "concept/concept.html#estimate"
statement: >
  Each caller workflow in a project repo shall be at most 15 lines long.
rationale: >
  A short caller workflow is easy to review and holds no logic that could drift from the engine.
acceptance:
  - "Static: every workflow file in the project template has 15 lines or fewer."
links:
  mockup: n/a
  spec: null
---
