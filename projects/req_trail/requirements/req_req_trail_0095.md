---
id: req_req_trail_0095
title: Gates view
feature: feature_req_trail_13
owner: "@GabrielKoenig"
version: 1
priority: should
type: functional
category: ""
depends_on: [req_req_trail_0051@1, req_req_trail_0186@1]
reviews: []
reviews_reason: "Shows pull request data that GitHub already shows to the same readers."
source: "concept/concept.html#estimate"
statement: >
  The Gates view shall show one row per open gate pull request with its feature, number of requirements and waiting
  time, amber from 5 and red from 10 working days, and list requirements without one as not started, uncoloured.
rationale: >
  Gatekeepers need to see what waits for their decision and for how long, apart from work nobody has started yet.
acceptance:
  - "Unit: 4 working days shows plain, 5 shows amber and 10 shows red."
  - "Unit: one pull request with req_recipe_box_0003 and req_recipe_box_0004 is one row with 2 requirements, and opening the row lists both."
  - "Unit: an Approved requirement without an open spec pull request is listed as not started at G2 with its working days and no colour, also after 10 working days."
links:
  spec: null
---
