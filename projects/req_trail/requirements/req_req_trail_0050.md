---
id: req_req_trail_0050
title: Changelog
feature: feature_req_trail_04
owner: "@GabrielKoenig"
version: 1
priority: should
type: functional
category: ""
depends_on: []
reviews: []
reviews_reason: "Reads repository files and pull request events; handles appear only as GitHub already shows them."
source: "concept/concept.html#estimate"
statement: >
  build_index shall list every version of each requirement with its merge date and pull request.
rationale: >
  People need to see when and why a requirement changed without reading the git history.
acceptance:
  - "Unit: req_recipe_box_0003 lists version 1 and version 2, each with its merge date and pull request number."
links:
  spec: null
---
