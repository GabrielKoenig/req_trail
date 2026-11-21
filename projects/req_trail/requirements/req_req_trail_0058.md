---
id: req_req_trail_0058
title: New commits dismiss approvals
feature: feature_req_trail_05
owner: "@GabrielKoenig"
version: 1
priority: must
type: functional
category: ""
depends_on: []
reviews: []
reviews_reason: "Configures GitHub's own review rules; stores no new data."
source: "concept/concept.html#estimate"
statement: >
  A new commit on an approved pull request shall dismiss the approval.
rationale: >
  An approval covers only the commit that was reviewed, not what was pushed after it.
acceptance:
  - "Integration: an approved pull request that gets one more commit shows no approval."
links:
  spec: null
---
