---
id: req_req_trail_0187
title: Open pull requests in the explorer
feature: feature_req_trail_06
owner: "@GabrielKoenig"
version: 1
priority: should
type: functional
category: ""
depends_on: [req_req_trail_0186@1]
reviews: []
reviews_reason: "Shows pull request numbers that GitHub already shows to the same readers."
source: "concept/concept.html#demo"
statement: >
  The explorer shall show each open pull request of a requirement as a chip next to its status, with the linked
  number, gate, draft state and working days waiting, and offer a filter for requirements with open pull requests.
rationale: >
  Readers see on the requirement itself that a decision on it is pending, without searching GitHub.
acceptance:
  - "Unit: req_recipe_box_0003, Approved with spec pull request #41 ready for 3 working days, shows Approved and a chip with G2, #41 and 3 days that links to the pull request."
  - "Unit: a draft pull request shows its chip marked as draft."
  - "Unit: two requirements in the same pull request show the same chip."
  - "Unit: the detail of req_recipe_box_0003 lists each of its open pull requests with the same fields."
  - "Unit: the filter for open pull requests lists only requirements that have one."
links:
  spec: null
---
