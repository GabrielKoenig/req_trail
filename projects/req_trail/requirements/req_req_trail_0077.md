---
id: req_req_trail_0077
title: Neither line
feature: feature_req_trail_08
owner: "@GabrielKoenig"
version: 1
priority: should
type: functional
category: ""
depends_on: []
reviews: []
reviews_reason: "Reads the published index and the text of the pull request; stores nothing."
source: "concept/concept.html#estimate"
statement: >
  The link workflow shall warn when a code pull request has neither an implements line nor a no_req line.
rationale: >
  A code change without a link is invisible in the trace matrix.
acceptance:
  - "Unit: a body without either line gives a warning."
  - "Unit: a body with no_req: refactor passes without a warning."
links:
  spec: null
---
