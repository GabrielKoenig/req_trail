---
id: req_req_trail_0109
title: The developer does not accept
feature: feature_req_trail_16
owner: "@GabrielKoenig"
version: 1
priority: must
type: functional
category: ""
depends_on: []
reviews: []
reviews_reason: "Checks approvals that GitHub already records; stores no new personal data."
source: "concept/concept.html#estimate"
statement: >
  gate_check shall fail an acceptance pull request that the developer of the change opened or approved.
rationale: >
  Whoever built a change cannot be the one who confirms that it works.
acceptance:
  - "Unit: an acceptance pull request opened by the author of the implementing pull request fails."
  - "Unit: an acceptance pull request approved by that author fails."
links:
  mockup: n/a
  spec: null
---
