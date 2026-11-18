---
id: req_req_trail_0086
title: ID in the test name
feature: feature_req_trail_11
owner: "@GabrielKoenig"
version: 1
priority: must
type: functional
category: ""
depends_on: [req_req_trail_0085@1]
reviews: []
reviews_reason: "Test reports hold test names and counts, no personal data."
source: "concept/concept.html#estimate"
statement: >
  build_index shall link a test result to a requirement when the name of the test or of its group contains the
  requirement ID.
rationale: >
  The name of a test is the one place that every test tool carries into its report.
acceptance:
  - "Unit: a test in the group 'req_recipe_box_0003 convert_to_recipe_text' counts for req_recipe_box_0003."
  - "Unit: a test whose names hold no ID counts for no requirement."
links:
  mockup: n/a
  spec: null
---
