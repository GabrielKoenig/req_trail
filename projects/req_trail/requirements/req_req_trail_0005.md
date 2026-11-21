---
id: req_req_trail_0005
title: Statuses and their events
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
  The conventions shall name the seven statuses and the GitHub event that sets each one.
rationale: >
  A status means the same in every project only when the event that sets it is written down.
acceptance:
  - "Manual: the section Statuses of conventions.md lists Draft, In review, Approved, Specified, Implemented, Verified and Withdrawn, each with its event."
links:
  spec: null
---

Withdrawn is the seventh status, set when a merged pull request deletes the requirement file.

## Manual test

**Who:** the reviewer of the pull request that builds it, who did not write it.

1. Open conventions.md.
2. Read the section Statuses.

**Passes when:** The table lists the seven statuses in order, and each row names the GitHub event that sets it.
