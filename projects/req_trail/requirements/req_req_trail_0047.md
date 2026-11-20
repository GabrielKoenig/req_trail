---
id: req_req_trail_0047
title: A new version reopens the gates
feature: feature_req_trail_04
owner: "@GabrielKoenig"
version: 1
priority: must
type: functional
category: ""
depends_on: [req_req_trail_0046@2]
reviews: []
reviews_reason: "Reads repository files and pull request events; handles appear only as GitHub already shows them."
source: "concept/concept.html#estimate"
statement: >
  build_index shall set a requirement back to Approved when a substantive new version of it is merged.
rationale: >
  A substantive change has not been specified, built or verified yet, so it cannot keep its old status.
acceptance:
  - "Unit: a Specified requirement whose version 2 is merged shows Approved."
links:
  mockup: n/a
  spec: null
---
