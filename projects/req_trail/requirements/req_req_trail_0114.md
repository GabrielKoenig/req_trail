---
id: req_req_trail_0114
title: Roles dashboard
feature: feature_req_trail_16
owner: "@GabrielKoenig"
version: 1
priority: should
type: functional
category: ""
depends_on: [req_req_trail_0113@1]
reviews: [privacy]
reviews_reason: "Who held which hat when is personal data (A2)."
source: "concept/concept.html#estimate"
statement: >
  The roles dashboard shall show who held which hat on a chosen date.
rationale: >
  People need to see who was responsible for a gate on a given date without reading the git history.
acceptance:
  - "Manual: choosing a date before a hat changed shows the earlier holder."
links:
  mockup: null
  spec: null
---

## Manual test

**Who:** the reviewer of the pull request that builds it, who did not write it.

1. Open the roles dashboard.
2. Pick a hat whose holder changed in the history.
3. Choose a date before the change, then a date after it.

**Passes when:** The first date shows the earlier holder, the second date the new one.
