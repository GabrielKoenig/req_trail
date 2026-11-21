---
id: req_req_trail_0170
title: Outdated rows in work issues
feature: feature_req_trail_08
owner: "@GabrielKoenig"
version: 1
priority: should
type: functional
category: ""
depends_on: [req_req_trail_0018@1]
reviews: []
reviews_reason: "Reads the published index and the text of issues and pull requests; stores nothing."
source: "concept/concept.html#process"
statement: >
  The link workflow shall comment on a work issue when one of its requirement rows names a version older than the
  requirement's current one.
rationale: >
  A row copies the sentence of its version, so a row at an old version shows a sentence that no longer holds.
acceptance:
  - "Integration: a work issue with the row req_recipe_box_0003@1, while req_recipe_box_0003 is at version 2, gets a comment that names the row and version 2."
links:
  spec: null
---

Review item A7 chose to copy the sentence into the work issue; this check keeps the copy honest.
