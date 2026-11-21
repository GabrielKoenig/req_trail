---
id: req_req_trail_0004
title: IDs are permanent
feature: feature_req_trail_01
owner: "@GabrielKoenig"
version: 1
priority: must
type: functional
category: ""
depends_on: []
reviews: []
reviews_reason: "Defines file formats only; no personal data, credentials or permissions."
source: "concept/concept.html#estimate"
statement: >
  The conventions shall state that an ID is never reused and never renamed.
rationale: >
  Code, tests and pull requests point to IDs, so a reused or renamed ID would silently break the trail.
acceptance:
  - "Manual: the reviewer finds the rule in the section IDs of conventions.md."
links:
  spec: null
---

## Manual test

**Who:** the reviewer of the pull request that builds it, who did not write it.

1. Open conventions.md.
2. Read the section IDs.

**Passes when:** One sentence says that an ID is never reused and never renamed.
