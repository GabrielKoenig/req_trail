---
id: req_req_trail_0178
title: One spec per requirement
feature: feature_req_trail_03
owner: "@GabrielKoenig"
version: 1
priority: must
type: functional
category: ""
depends_on: []
reviews: []
reviews_reason: "Reads files of the repository; no personal data or credentials."
source: "conventions.md#concepts"
statement: >
  validate shall fail a pull request in which a spec does not cover exactly one requirement of its own feature, or
  two specs cover the same requirement.
rationale: >
  With one spec per requirement, each requirement is translated into a design once, and nothing is specified twice
  or left out unnoticed.
acceptance:
  - "Unit: a spec whose covers holds a list fails and names the spec."
  - "Unit: a spec that covers req_recipe_box_0001, which spec_recipe_box_0001 already covers, fails and names both specs."
  - "Unit: a spec that covers a requirement of another feature fails."
  - "Unit: the specs of recipe_box pass."
links:
  spec: null
---

`covers` holds one pinned ID, such as `covers: req_recipe_box_0003@2`. A requirement that has passed G1 and has no
spec yet is not Specified, and the link workflow warns about it (req_req_trail_0166).
