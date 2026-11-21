---
id: req_req_trail_0098
title: Independent approvals
feature: feature_req_trail_14
owner: "@GabrielKoenig"
version: 1
priority: must
type: functional
category: ""
depends_on: [req_req_trail_0165@1]
reviews: []
reviews_reason: "Runs on the engine's own repo; pull requests show handles as GitHub already does."
source: "concept/concept.html#estimate"
statement: >
  Every G1 and G2 merge of reqTrail after solo mode ends shall carry an approval from a person other than the
  author of the pull request.
rationale: >
  An approval by the author proves nothing, so the pilot has to show that independent review works in
  practice.
acceptance:
  - "Manual: for every requirement and spec pull request of reqTrail merged after solo_mode was set to false, the approver differs from the author."
links:
  mockup: n/a
  spec: null
---

reqTrail has one maintainer until the required reviews of work package 5 are on, so it starts in solo mode
(req_req_trail_0165). From then on a second reviewer approves.

## Manual test

**Who:** the co-author, at the end of the pilot.

1. In the explorer, open the changelog of each requirement and spec of the project `req_trail`; it lists the pull request of every version.
2. Open each pull request on GitHub and compare its author with the approver under Reviews.

**Passes when:** No pull request merged after solo mode ended was approved by its own author, and none of them was merged without an approval unless it carries gate_exception.
