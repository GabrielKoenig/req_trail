---
id: req_req_trail_0103
title: Every finding ends somewhere
feature: feature_req_trail_14
owner: "@GabrielKoenig"
version: 1
priority: must
type: functional
category: ""
depends_on: []
reviews: []
reviews_reason: "Runs on the engine's own repo; pull requests show handles as GitHub already does."
source: "concept/concept.html#estimate"
statement: >
  Every problem found in the pilot shall end in a merged fix or in a request issue.
rationale: >
  A finding that is only noted gets lost, while a fix or a request issue can be tracked.
acceptance:
  - "Manual: every finding in the pilot's tracking issue links a merged pull request or a request issue."
links:
  mockup: n/a
  spec: null
---

## Manual test

**Who:** the co-author, at the end of the pilot.

1. Open the pilot's tracking issue.
2. Open the link of each finding.

**Passes when:** No finding is without a link, and every link leads to a merged pull request or to a request issue.
