---
id: req_req_trail_0074
title: Comment per ID
feature: feature_req_trail_08
owner: "@GabrielKoenig"
version: 1
priority: must
type: functional
category: ""
depends_on: [req_req_trail_0045@1]
reviews: []
reviews_reason: "Reads the published index and the text of the pull request; stores nothing."
source: "concept/concept.html#estimate"
statement: >
  The link workflow shall comment on a code pull request one line per ID in its implements line, with status,
  version and statement.
rationale: >
  A reviewer of code should see what the change is meant to do without opening another repo.
acceptance:
  - "Integration: a pull request with implements: req_recipe_box_0003@2 gets a comment with the status, version 2 and the statement."
links:
  mockup: n/a
  spec: null
---
