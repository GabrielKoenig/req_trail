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
  The explorer shall show a requirement's statement as plain text and its acceptance criteria, history, links and
  notes, rendering Markdown as HTML only in the criteria and notes.
rationale: >
  A reader needs everything about one requirement on one screen, with the statement exactly as an export carries it
  and the rest formatted for reading.
acceptance:
  - "Manual: req_recipe_box_0003 shows its statement, three criteria, two versions and its links, and its notes render as HTML."
  - "Unit: a statement that holds **bold** shows the asterisks as written, while the same text in an acceptance criterion or a note renders as bold."
links:
  mockup: null
  spec: null
---

The statement is shown as plain text, as an export carries it; Markdown is rendered only in the criteria and the
notes.

## Manual test

**Who:** the reviewer of the pull request that builds it, who did not write it.

1. Open the explorer preview of the pull request.
2. Open req_recipe_box_0003.
3. Compare what is shown with projects/recipe_box/requirements/req_recipe_box_0003.md.

**Passes when:** Statement, the three criteria, both versions and the links match the file, and the notes show as formatted text, not as Markdown signs.
