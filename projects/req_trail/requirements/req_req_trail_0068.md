---
id: req_req_trail_0068
title: One address per requirement
feature: feature_req_trail_06
owner: "@GabrielKoenig"
version: 1
priority: should
type: functional
category: ""
depends_on: []
reviews: []
reviews_reason: "Shows only what index.json holds; handles appear as GitHub already shows them."
source: "concept/concept.html#estimate"
statement: >
  Each requirement shall have its own address in the explorer.
rationale: >
  A link to one requirement is what people paste into issues, chats and meetings.
acceptance:
  - "Manual: the explorer address followed by #req_recipe_box_0003 opens that requirement."
links:
  spec: null
---

## Manual test

**Who:** the reviewer of the pull request that builds it, who did not write it.

1. Copy the explorer's address and add #req_recipe_box_0003.
2. Open it in a new browser tab.

**Passes when:** The tab opens with req_recipe_box_0003 selected and its detail shown.
