---
id: req_req_trail_0153
title: Withdrawn when the file is deleted
feature: feature_req_trail_04
owner: "@GabrielKoenig"
version: 1
priority: must
type: functional
category: ""
depends_on: [req_req_trail_0046@1]
reviews: []
reviews_reason: "Reads repository files and pull request events; handles appear only as GitHub already shows them."
source: "concept/architecture.html#risks"
statement: >
  build_index shall give a requirement the status Withdrawn when a merged pull request has deleted its file.
rationale: >
  A dropped requirement has to stay visible with its ID, so that links to it explain themselves instead of breaking.
acceptance:
  - "Unit: req_recipe_box_0002, whose file a merged pull request deleted, is in index.json with the status Withdrawn and that pull request."
  - "Unit: a requirement whose file is deleted only in an open pull request keeps its status."
links:
  spec: null
---
