---
id: req_req_trail_0162
title: The AI review sends only changed requirements
feature: feature_req_trail_18
owner: "@GabrielKoenig"
version: 1
priority: must
type: non_functional
category: "privacy"
depends_on: [req_req_trail_0132@1]
reviews: [privacy]
reviews_reason: "It sends repository text to an outside provider, so the data protection officer checks what leaves."
source: "concept/architecture.html#risks"
statement: >
  The AI review shall send the provider only the requirement files that the pull request changes.
rationale: >
  Every file sent to an outside provider leaves the project's control, so only what the review needs may go.
acceptance:
  - "Unit: for a pull request that changes req_recipe_box_0003.md and a spec, the request to the provider holds req_recipe_box_0003.md and no other file."
  - "Unit: a pull request that changes no requirement file sends no request to the provider."
links:
  spec: null
---
