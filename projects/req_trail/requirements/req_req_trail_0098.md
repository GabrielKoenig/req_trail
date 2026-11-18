---
id: req_req_trail_0098
title: Independent approvals
feature: feature_req_trail_14
owner: "@GabrielKoenig"
version: 1
priority: must
type: functional
category: ""
depends_on: []
reviews: []
reviews_reason: "Runs on the engine's own repo; pull requests show handles as GitHub already does."
source: "concept/concept.html#estimate"
statement: >
  Every G1 and G2 approval in the pilot shall come from a person other than the author of the pull request.
rationale: >
  An approval by the author proves nothing, so the pilot has to show that independent review works in
  practice.
acceptance:
  - "Manual: for every merged requirement and spec pull request of req_trail, the approver differs from the author."
links:
  mockup: n/a
  spec: null
---

## Manual test

**Who:** the co-author, at the end of the pilot.

1. In the explorer, open the changelog of each requirement and spec of the project req_trail; it lists the pull request of every version.
2. Open each pull request on GitHub and compare its author with the approver under Reviews.

**Passes when:** No pull request was approved by its own author, and none was merged without an approval unless it carries gate_exception.
