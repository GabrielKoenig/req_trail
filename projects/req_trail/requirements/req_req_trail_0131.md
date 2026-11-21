---
id: req_req_trail_0131
title: Similar requirements
feature: feature_req_trail_18
owner: "@GabrielKoenig"
version: 1
priority: should
type: functional
category: ""
depends_on: [req_req_trail_0045@1]
reviews: []
reviews_reason: "Text rules run in CI; no data leaves GitHub."
source: "concept/concept.html#estimate"
statement: >
  text_check shall list the existing requirements that share at least 60 percent of their words with a new
  statement.
rationale: >
  A near duplicate found before review keeps two requirements from drifting apart.
acceptance:
  - "Unit: a copy of req_recipe_box_0003 with one word changed lists req_recipe_box_0003."
  - "Unit: an unrelated statement lists nothing."
links:
  spec: null
---
