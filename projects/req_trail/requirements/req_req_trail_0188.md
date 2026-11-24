---
id: req_req_trail_0188
title: Build time in the explorer
feature: feature_req_trail_06
owner: "@GabrielKoenig"
version: 1
priority: should
type: functional
category: ""
depends_on: [req_req_trail_0052@1]
reviews: []
reviews_reason: "Shows the time and cause of a workflow run that GitHub already shows to the same readers."
source: "concept/concept.html#demo"
statement: >
  The explorer shall show when index.json was built and what started that run, and mark it amber when it is more than
  26 hours old.
rationale: >
  Readers must know how current the page is, and a failed nightly run must not go unnoticed.
acceptance:
  - "Unit: an index built at 13:32 UTC after an event of pull request #41 shows the time in the reader's time zone and pull request #41."
  - "Unit: an index built by the nightly run shows nightly, and one built after a merge shows the merged pull request."
  - "Unit: an index that is 25 hours old shows plain, and one that is 27 hours old shows amber."
links:
  spec: null
---
