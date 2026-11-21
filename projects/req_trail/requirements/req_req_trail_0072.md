---
id: req_req_trail_0072
title: One view across repos
feature: feature_req_trail_07
owner: "@GabrielKoenig"
version: 1
priority: should
type: functional
category: ""
depends_on: []
reviews: []
reviews_reason: "Uses GitHub Projects as it is."
source: "concept/concept.html#estimate"
statement: >
  The board shall show request issues and work issues from all project and code repos in one view.
rationale: >
  Work spread over several repos is visible as a whole only when it shows in one place.
acceptance:
  - "Manual: the board's main view lists issues from at least two repos."
links:
  spec: null
---

## Manual test

**Who:** the reviewer of the pull request that builds it, who did not write it.

1. Open the project board.
2. Open its main view.

**Passes when:** The view lists issues from at least two repos, each with its repo name.
