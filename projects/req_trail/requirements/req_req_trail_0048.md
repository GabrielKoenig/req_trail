---
id: req_req_trail_0048
title: Suspect links
feature: feature_req_trail_04
owner: "@GabrielKoenig"
version: 1
priority: must
type: functional
category: ""
depends_on: []
reviews: []
reviews_reason: "Reads repository files and pull request events; handles appear only as GitHub already shows them."
source: "concept/concept.html#estimate"
statement: >
  build_index shall mark a spec, test or acceptance record as suspect when it references an older version of a
  requirement.
rationale: >
  A spec, test or acceptance record made against an older version may no longer fit the requirement.
acceptance:
  - "Unit: a spec that covers req_recipe_box_0003@1 is suspect once req_recipe_box_0003 is at version 2."
  - "Unit: confirming it at req_recipe_box_0003@2 clears the mark."
links:
  mockup: n/a
  spec: null
---
