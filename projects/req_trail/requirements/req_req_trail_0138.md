---
id: req_req_trail_0138
title: The version rises with the change
feature: feature_req_trail_19
owner: "@GabrielKoenig"
version: 1
priority: could
type: functional
category: ""
depends_on: [req_req_trail_0137@1]
reviews: []
reviews_reason: "Opens GitHub's own pages; writes nothing itself."
source: "concept/concept.html#estimate"
statement: >
  The propose_change workflow shall raise the version when the change request is marked substantive.
rationale: >
  Whether a change is substantive decides the version, and the proposer is asked for exactly that.
acceptance:
  - "Unit: a substantive change to req_recipe_box_0003 at version 2 writes version 3."
  - "Unit: an editorial change keeps version 2."
links:
  spec: null
---
