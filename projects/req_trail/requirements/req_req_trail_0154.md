---
id: req_req_trail_0154
title: Deleted IDs stay taken
feature: feature_req_trail_03
owner: "@GabrielKoenig"
version: 1
priority: must
type: functional
category: ""
depends_on: [req_req_trail_0004@1]
reviews: []
reviews_reason: "Reads repository files and their Git history only; no personal data or credentials."
source: "concept/architecture.html#risks"
statement: >
  validate shall fail when a new file uses an ID that a deleted file held in the Git history.
rationale: >
  Without this check, the rule that an ID is never reused rests on memory alone.
acceptance:
  - "Unit: a new file req_recipe_box_0002.md, after a merged pull request deleted the file with that ID, makes validate fail and names the commit that deleted it."
  - "Unit: a new file with an ID that no file ever held passes."
links:
  mockup: n/a
  spec: null
---

req_req_trail_0023 checks the files of one commit; this check adds the history. In CI it needs the full history,
for example a checkout with `fetch-depth: 0`; the spec at G2 decides how.
