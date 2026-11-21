---
id: req_req_trail_0136
title: Propose change button
feature: feature_req_trail_19
owner: "@GabrielKoenig"
version: 1
priority: should
type: functional
category: ""
depends_on: [req_req_trail_0014@1]
reviews: []
reviews_reason: "Opens GitHub's own pages; writes nothing itself."
source: "concept/concept.html#estimate"
statement: >
  The explorer shall show a Propose change button that opens the change request form filled in with the ID,
  the version and the current statement.
rationale: >
  A change proposal that starts from the current text and version is easier to write and to judge.
acceptance:
  - "Manual: Propose change on req_recipe_box_0003 opens the form with req_recipe_box_0003@2 and its statement."
links:
  spec: null
---

## Manual test

**Who:** the reviewer of the pull request that builds it, who did not write it.

1. Open req_recipe_box_0003 in the explorer.
2. Press Propose change.

**Passes when:** The change request form opens with req_recipe_box_0003@2 and the current statement filled in.
