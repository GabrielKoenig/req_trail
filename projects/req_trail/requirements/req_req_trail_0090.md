---
id: req_req_trail_0090
title: Release notes
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
  build_index shall write release notes for each release tag of a code repo from the implements lines of the
  pull requests it contains.
rationale: >
  Release notes written from the implements lines are complete and need no extra typing.
acceptance:
  - "Unit: a tag after two pull requests that implement req_recipe_box_0001@1 and req_recipe_box_0003@2 lists both requirements."
links:
  spec: null
---
