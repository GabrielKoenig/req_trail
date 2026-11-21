---
id: req_req_trail_0099
title: Exceptions name their reason
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
  Every pull request of the pilot that is merged with the label gate_exception shall state the reason in its
  description.
rationale: >
  An exception without a stated reason cannot be judged later, and it hides how often the gates were bypassed.
acceptance:
  - "Manual: each merged pull request with gate_exception names its reason in one sentence."
links:
  mockup: n/a
  spec: null
---

## Manual test

**Who:** the co-author, at the end of the pilot.

1. On GitHub, filter the pull requests of the repo `req_trail` with is:merged label:gate_exception.
2. Read the description of each one.
3. Find each one in the explorer.

**Passes when:** Each description names the reason, for example that two people cannot hold the three hats of G3, and the explorer marks each one as an exception.
