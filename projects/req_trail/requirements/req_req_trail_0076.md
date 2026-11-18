---
id: req_req_trail_0076
title: Warn before approval
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
  The link workflow shall warn when a named requirement is Draft or In review.
rationale: >
  Building against a requirement that has not passed G1 risks work on something that may still change.
acceptance:
  - "Unit: a requirement In review gives a warning, and the check still passes."
links:
  mockup: n/a
  spec: null
---
