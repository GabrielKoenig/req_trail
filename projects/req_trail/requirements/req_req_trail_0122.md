---
id: req_req_trail_0122
title: Unique project names
feature: feature_req_trail_17
owner: "@GabrielKoenig"
version: 1
priority: should
type: functional
category: ""
depends_on: []
reviews: []
reviews_reason: "Release and workflow setup; reads nothing beyond the repos that call it."
source: "concept/concept.html#estimate"
statement: >
  The hub shall fail a pull request that adds a project name already in its list.
rationale: >
  Two projects with the same name would produce clashing IDs in the overview index.
acceptance:
  - "Unit: adding the project recipe_box a second time fails."
links:
  spec: null
---
