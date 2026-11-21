---
id: req_req_trail_0045
title: index.json from the files
feature: feature_req_trail_04
owner: "@GabrielKoenig"
version: 1
priority: must
type: functional
category: ""
depends_on: [req_req_trail_0020@1]
reviews: []
reviews_reason: "Reads repository files and pull request events; handles appear only as GitHub already shows them."
source: "concept/concept.html#estimate"
statement: >
  build_index shall write index.json with every project, feature, requirement and spec it reads.
rationale: >
  Every view, check and report reads one generated index instead of parsing the files again.
acceptance:
  - "Unit: on projects/recipe_box the index holds feature_recipe_box_01, req_recipe_box_0001, req_recipe_box_0003, spec_recipe_box_0001 and spec_recipe_box_0002 with all their fields."
links:
  spec: null
---
