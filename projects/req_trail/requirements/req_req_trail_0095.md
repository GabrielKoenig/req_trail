---
id: req_req_trail_0095
title: Gates view
feature: feature_req_trail_13
owner: "@GabrielKoenig"
version: 1
priority: should
type: functional
category: ""
depends_on: [req_req_trail_0051@1]
reviews: []
reviews_reason: "Shows issue data that GitHub already shows to the same readers."
source: "concept/concept.html#estimate"
statement: >
  The Gates view shall show each open item at its gate with its waiting time, amber from 5 and red from 10
  working days.
rationale: >
  Gatekeepers need to see what waits for them and for how long, before an item gets stuck.
acceptance:
  - "Unit: 4 working days shows plain, 5 shows amber and 10 shows red."
links:
  spec: null
---
