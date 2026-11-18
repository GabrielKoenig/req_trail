---
id: req_recipe_box_0003
title: Readable ingredient lists
feature: feature_recipe_box_01
owner: "@owner1"
version: 2
priority: should
type: functional
category: ""
depends_on: [req_recipe_box_0001@1]
reviews: [privacy]
reviews_reason: "Notes can hold the names of the people who shared a recipe."
source: "#18"
statement: >
  The PDF shall show amounts, units, links and notes as readable text.
rationale: >
  Raw amounts and link markup make a printed recipe hard to cook from.
acceptance:
  - An amount shows with its unit.
  - A linked recipe shows its title.
  - Only http and https links stay clickable.
links:
  mockup: n/a
  spec: spec_recipe_box_0002@2
---

Version 2 limited clickable links to http and https.
