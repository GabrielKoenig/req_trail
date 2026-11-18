---
id: req_req_trail_0091
title: Releases view
feature: feature_req_trail_12
owner: "@GabrielKoenig"
version: 1
priority: should
type: functional
category: ""
depends_on: [req_req_trail_0090@1]
reviews: []
reviews_reason: "Uses pull request lines that are already visible in the repos."
source: "concept/concept.html#estimate"
statement: >
  The explorer shall list the releases with the requirements each one delivered.
rationale: >
  People need to see which requirements reached users in which release.
acceptance:
  - "Manual: the Releases view of the example data shows release 0.4 with its requirements."
links:
  mockup: null
  spec: null
---

## Manual test

**Who:** the reviewer of the pull request that builds it, who did not write it.

1. Open the Releases view with the example data.
2. Open release 0.4.

**Passes when:** Release 0.4 lists the requirements whose implementing pull requests are part of it.
