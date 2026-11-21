---
id: req_req_trail_0120
title: The template holds no engine code
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
  The project template shall hold projects/, roles.yml, CODEOWNERS, the issue forms and the caller workflows,
  and no engine code.
rationale: >
  A template copied with engine code in it would fall behind the engine at once.
acceptance:
  - "Static: the template repo has no tools/ or schema/ folder."
  - "Integration: a repo created from the template passes validate on its first pull request."
links:
  spec: null
---
