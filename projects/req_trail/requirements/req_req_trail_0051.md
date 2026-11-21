---
id: req_req_trail_0051
title: Waiting time per gate
feature: feature_req_trail_04
owner: "@GabrielKoenig"
version: 1
priority: should
type: functional
category: ""
depends_on: []
reviews: []
reviews_reason: "Reads repository files and pull request events; handles appear only as GitHub already shows them."
source: "concept/concept.html#estimate"
statement: >
  build_index shall record how many working days each open item has waited at its gate.
rationale: >
  Without a measured waiting time, gates quietly turn into queues.
acceptance:
  - "Unit: a pull request opened on a Monday and still open on the Wednesday of the next week has waited 7 working days."
  - "Unit: Saturdays and Sundays do not count."
links:
  spec: null
---
