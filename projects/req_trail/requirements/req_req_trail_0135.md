---
id: req_req_trail_0135
title: Edit button
feature: feature_req_trail_19
owner: "@GabrielKoenig"
version: 1
priority: should
type: functional
category: ""
depends_on: []
reviews: []
reviews_reason: "Opens GitHub's own pages; writes nothing itself."
source: "concept/concept.html#estimate"
statement: >
  The explorer shall show an Edit button on each requirement that opens GitHub's web editor on its file.
rationale: >
  People who do not use Git should reach the file they want to change in one click.
acceptance:
  - "Manual: Edit on req_recipe_box_0003 opens the editor on projects/recipe_box/requirements/req_recipe_box_0003.md."
  - "Manual: saving offers a new branch and a pull request, because main is protected (B12)."
links:
  mockup: null
  spec: null
---

## Manual test

**Who:** the reviewer of the pull request that builds it, who did not write it.

1. Sign in to GitHub with an account that has write access but cannot push to main.
2. Open req_recipe_box_0003 in the explorer and press Edit.
3. Change one word and save.

**Passes when:** GitHub's editor opens on projects/recipe_box/requirements/req_recipe_box_0003.md, and saving offers only a new branch with a pull request (B12).
