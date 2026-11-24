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
  build_index shall record for each open gate pull request the working days it has been ready for review, and for each
  requirement without one the working days since it became ready for its next gate.
rationale: >
  Without a measured waiting time, gates quietly turn into queues, and only the time ready for review is time the
  gatekeeper owes.
acceptance:
  - "Unit: a pull request that became ready for review on a Monday and is still open on the Wednesday of the next week has waited 7 working days."
  - "Unit: a pull request ready on a Monday, back to draft on Tuesday, ready again on Friday and still open on the Wednesday of the next week has waited 4 working days."
  - "Unit: Saturdays and Sundays do not count."
  - "Unit: req_recipe_box_0003, approved on a Monday without an open spec pull request, is not started at G2 since that Monday, and an Implemented requirement without an acceptance pull request is not started at G3 since the merge of its code."
links:
  spec: null
---

Time as a draft waits for the author, not for the gatekeeper, so it does not count; the clock adds up the periods
ready for review, and switching to draft cannot reset it. A requirement that waits for work is not started, which the
Gates view shows apart from what waits for a decision (`req_req_trail_0095`).
