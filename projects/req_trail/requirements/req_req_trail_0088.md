---
id: req_req_trail_0088
title: Result in the comment
feature: feature_req_trail_11
owner: "@GabrielKoenig"
version: 1
priority: should
type: functional
category: ""
depends_on: [req_req_trail_0074@1, req_req_trail_0085@1]
reviews: []
reviews_reason: "Test reports hold test names and counts, no personal data."
source: "concept/concept.html#estimate"
statement: >
  The link workflow shall show pass or fail of the latest run for each named requirement.
rationale: >
  A reviewer should see whether the tests for a requirement pass before approving the code.
acceptance:
  - "Integration: after a failing run the comment shows req_recipe_box_0003 as failed, with a link to the run."
links:
  spec: null
---
