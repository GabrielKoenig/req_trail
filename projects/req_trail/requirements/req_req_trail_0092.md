---
id: req_req_trail_0092
title: Value review issue
feature: feature_req_trail_12
owner: "@GabrielKoenig"
version: 1
priority: should
type: functional
category: ""
depends_on: []
reviews: []
reviews_reason: "Uses pull request lines that are already visible in the repos."
source: "concept/concept.html#estimate"
statement: >
  The engine shall open a value review issue for a feature six weeks after the release tag that delivered it.
rationale: >
  Whether a feature solved the problem shows only after people have used it for a while.
acceptance:
  - "Unit: a release on 2026-09-01 that delivered feature_recipe_box_01 schedules the issue for 2026-10-13."
  - "Integration: the issue names the feature, its metric and its target."
links:
  mockup: n/a
  spec: null
---
