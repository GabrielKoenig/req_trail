---
id: req_req_trail_0046
title: Status from events
feature: feature_req_trail_04
owner: "@GabrielKoenig"
version: 1
priority: must
type: functional
category: ""
depends_on: [req_req_trail_0005@1]
reviews: []
reviews_reason: "Reads repository files and pull request events; handles appear only as GitHub already shows them."
source: "concept/concept.html#estimate"
statement: >
  build_index shall derive each requirement's status from the GitHub events listed in conventions.md.
rationale: >
  Only the events of the gates in GitHub show where a requirement really stands.
acceptance:
  - "Unit: one fixture per event (draft pull request, ready for review, merged, spec merged, implements merged, acceptance merged) yields Draft, In review, Approved, Specified, Implemented and Verified."
links:
  mockup: n/a
  spec: null
---
