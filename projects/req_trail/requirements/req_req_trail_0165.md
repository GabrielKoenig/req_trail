---
id: req_req_trail_0165
title: Solo merges are marked
feature: feature_req_trail_16
owner: "@GabrielKoenig"
version: 1
priority: must
type: functional
category: ""
depends_on: [req_req_trail_0046@1]
reviews: []
reviews_reason: "Reads the approvals of pull requests; handles appear only as GitHub already shows them."
source: "concept/concept.html#review"
statement: >
  While project.yml sets `solo_mode: true`, build_index shall mark every gate merge without an approval by someone
  other than its author as solo.
rationale: >
  A merge that no second person approved has passed no real gate, and every reader has to see that.
acceptance:
  - "Unit: with solo_mode: true, a requirement pull request merged by its author without a review shows Approved with the mark solo."
  - "Unit: a gate merge with an approval by another person carries no solo mark."
links:
  mockup: n/a
  spec: null
---

reqTrail runs in solo mode until work package 5 turns on the required reviews; from then on a second reviewer
approves (review item A3).
