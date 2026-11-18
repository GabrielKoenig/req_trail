---
id: req_req_trail_0075
title: Unknown ID fails
feature: feature_req_trail_08
owner: "@GabrielKoenig"
version: 1
priority: must
type: functional
category: ""
depends_on: []
reviews: []
reviews_reason: "Reads the published index and the text of the pull request; stores nothing."
source: "concept/concept.html#estimate"
statement: >
  The link workflow shall fail when an implements line names an ID that does not exist.
rationale: >
  An implements line with a wrong ID breaks the trail from the code back to the requirement.
acceptance:
  - "Unit: implements: req_recipe_box_0999@1 fails and names the ID."
links:
  mockup: n/a
  spec: null
---
