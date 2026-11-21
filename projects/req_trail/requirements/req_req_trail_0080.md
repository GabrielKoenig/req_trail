---
id: req_req_trail_0080
title: KPI against target
feature: feature_req_trail_09
owner: "@GabrielKoenig"
version: 1
priority: must
type: functional
category: ""
depends_on: []
reviews: []
reviews_reason: "KPI values are totals without personal data."
source: "concept/concept.html#estimate"
statement: >
  build_index shall compare the latest value in metrics.yml with each feature's target and direction.
rationale: >
  A feature is built for an outcome, and only a comparison with its target shows whether it was reached.
acceptance:
  - "Unit: feature_recipe_box_01 with target 10, direction at_most and a latest value of 9 counts as reached."
  - "Unit: a latest value of 12 counts as not reached."
links:
  spec: null
---
