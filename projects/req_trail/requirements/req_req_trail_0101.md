---
id: req_req_trail_0101
title: Engine changes name their requirements
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
  Every pull request that changes the engine's code shall name the requirements it implements, or say no_req
  with a reason.
rationale: >
  The engine has to follow its own rule on linking code, or the rule is not credible for other teams.
acceptance:
  - "Static: every merged pull request of reqTrail that changes tools/, model/ or the explorer has an implements line or a no_req line."
  - "Manual: the link comment on such a pull request shows each named requirement with its status."
links:
  spec: null
---

## Manual test

**Who:** the co-author, on the pull request of each work package.

1. Open the pull request of a work package.
2. Read the comment of the link workflow and compare it with the implements line.

**Passes when:** The comment has one line for each named requirement, with its status, version and statement.
