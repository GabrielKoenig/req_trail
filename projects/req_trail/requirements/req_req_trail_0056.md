---
id: req_req_trail_0056
title: No merge without the gatekeeper
feature: feature_req_trail_05
owner: "@GabrielKoenig"
version: 1
priority: must
type: functional
category: ""
depends_on: [req_req_trail_0055@1]
reviews: []
reviews_reason: "Configures GitHub's own review rules; stores no new data."
source: "concept/concept.html#estimate"
statement: >
  A gate pull request shall not be mergeable until a code owner of its changed files has approved it.
rationale: >
  Requesting the gatekeeper's review does nothing unless the merge waits for the approval.
acceptance:
  - "Integration: on the test repo a requirement pull request without an approval cannot be merged."
  - "Integration: after a holder of the Principal Engineer hat approves it, it can be merged."
links:
  mockup: n/a
  spec: null
---
