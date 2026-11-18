---
id: req_req_trail_0065
title: Trace matrix view
feature: feature_req_trail_06
owner: "@GabrielKoenig"
version: 1
priority: must
type: functional
category: ""
depends_on: [req_req_trail_0049@1]
reviews: []
reviews_reason: "Shows only what index.json holds; handles appear as GitHub already shows them."
source: "concept/concept.html#estimate"
statement: >
  The explorer shall show the trace matrix with gaps and suspect links marked.
rationale: >
  Gaps and suspect links are what a lead has to act on, so they must stand out.
acceptance:
  - "Unit: the cell function returns gap for a missing spec of a Specified requirement."
  - "Unit: the cell function returns suspect for a link to an older version."
links:
  mockup: null
  spec: null
---
