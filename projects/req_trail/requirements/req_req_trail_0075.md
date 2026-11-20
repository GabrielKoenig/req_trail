---
id: req_req_trail_0075
title: Unknown ID fails
feature: feature_req_trail_08
owner: "@GabrielKoenig"
version: 2
priority: must
type: functional
category: ""
depends_on: [req_req_trail_0153@1]
reviews: []
reviews_reason: "Reads the published index and the text of the pull request; stores nothing."
source: "concept/concept.html#estimate"
statement: >
  The link workflow shall fail when an implements line names an ID that never existed, and only warn when it names
  a withdrawn requirement.
rationale: >
  An implements line with a wrong ID breaks the trail from the code back to the requirement, while a withdrawn ID was
  valid when the code was written.
acceptance:
  - "Unit: implements: req_recipe_box_0999@1 fails and names the ID."
  - "Unit: implements: req_recipe_box_0002@1, whose file a merged pull request deleted, passes with a warning that names the ID as withdrawn."
links:
  mockup: n/a
  spec: null
---

Version 2: an implements line that names a withdrawn requirement warns instead of failing.
