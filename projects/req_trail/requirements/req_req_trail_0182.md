---
id: req_req_trail_0182
title: Concepts from the explorer
feature: feature_req_trail_06
owner: "@GabrielKoenig"
version: 1
priority: must
type: functional
category: ""
depends_on: []
reviews: []
reviews_reason: "Shows only what index.json holds; the concepts are files of the repository or links in project.yml."
source: "conventions.md#concepts"
statement: >
  The explorer shall link each feature to its feature concept and each project to the overview concept named in
  project.yml.
rationale: >
  A reader should get from a requirement to the design it belongs to without searching the repository.
acceptance:
  - "Unit: index.json holds the path projects/recipe_box/concepts/feature_recipe_box_01.html for feature_recipe_box_01 and the concept link of recipe_box."
  - "Manual: the explorer opens the concept of feature_recipe_box_01 from the feature and from req_recipe_box_0003."
links:
  spec: null
---

## Manual test

**Who:** the reviewer of the pull request that builds it, who did not write it.

1. Open the explorer preview of the pull request.
2. Open feature_recipe_box_01 and follow the link to its concept.
3. Open req_recipe_box_0003 and follow the link to the concept of its feature.
4. Open the project recipe_box and follow the link to its overview concept.

**Passes when:** steps 2 and 3 open projects/recipe_box/concepts/feature_recipe_box_01.html, and step 4 leads to the
address in `concept` of projects/recipe_box/project.yml.
