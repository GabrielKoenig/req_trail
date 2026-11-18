---
id: req_req_trail_0064
title: Requirement detail
feature: feature_req_trail_06
owner: "@GabrielKoenig"
version: 1
priority: must
type: functional
category: ""
depends_on: []
reviews: []
reviews_reason: "Shows only what index.json holds; handles appear as GitHub already shows them."
source: "concept/concept.html#estimate"
statement: >
  The explorer shall show a requirement's statement, acceptance criteria, history and links, with Markdown
  rendered as HTML.
rationale: >
  A reader needs everything about one requirement on one screen, formatted for reading rather than as raw
  Markdown.
acceptance:
  - "Manual: req_recipe_box_0003 shows its statement, three criteria, two versions and its links, and its notes render as HTML."
links:
  mockup: null
  spec: null
---

## Manual test

**Who:** the reviewer of the pull request that builds it, who did not write it.

1. Open the explorer preview of the pull request.
2. Open req_recipe_box_0003.
3. Compare what is shown with projects/recipe_box/requirements/req_recipe_box_0003.md.

**Passes when:** Statement, the three criteria, both versions and the links match the file, and the notes show as formatted text, not as Markdown signs.
