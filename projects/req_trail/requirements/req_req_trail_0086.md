---
id: req_req_trail_0086
title: ID in the test name
feature: feature_req_trail_11
owner: "@GabrielKoenig"
version: 2
priority: must
type: functional
category: ""
depends_on: [req_req_trail_0085@1]
reviews: []
reviews_reason: "Test reports hold test names and counts, no personal data."
source: "concept/concept.html#estimate"
statement: >
  build_index shall link a test result to a requirement when the name of the test or of its group contains the
  requirement ID as a whole token, with no letter, digit or underscore next to it.
rationale: >
  The name of a test is the one place that every test tool carries into its report.
acceptance:
  - "Unit: a test in the group 'req_recipe_box_0003 ConvertTo-RecipeText' counts for req_recipe_box_0003."
  - "Unit: a test whose names hold no ID counts for no requirement."
  - "Unit: the test names req_recipe_box_00031 and xreq_recipe_box_0003 link to no requirement."
links:
  mockup: n/a
  spec: null
---

Version 2: the ID counts only as a whole token, so a test named req_recipe_box_00031 does not count for
req_recipe_box_0003.
