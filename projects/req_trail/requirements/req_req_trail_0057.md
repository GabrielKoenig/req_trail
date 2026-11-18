---
id: req_req_trail_0057
title: No direct push
feature: feature_req_trail_05
owner: "@GabrielKoenig"
version: 1
priority: must
type: non_functional
category: "security"
depends_on: []
reviews: []
reviews_reason: "Configures GitHub's own review rules; stores no new data."
source: "concept/concept.html#estimate"
statement: >
  main shall accept changes only through a merged pull request.
rationale: >
  A direct push to main skips every gate and leaves no review behind.
acceptance:
  - "Integration: a direct push to main on the test repo is rejected, also for an admin (B4)."
links:
  mockup: n/a
  spec: null
---
