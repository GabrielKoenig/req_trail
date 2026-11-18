---
id: req_req_trail_0084
title: Labels for the triage decision
feature: feature_req_trail_10
owner: "@GabrielKoenig"
version: 1
priority: should
type: functional
category: ""
depends_on: [req_req_trail_0016@1]
reviews: []
reviews_reason: "Posts only a link back to the issue."
source: "concept/concept.html#estimate"
statement: >
  labels.yml shall hold one label for each triage decision: accepted, declined, duplicate and needs_info.
rationale: >
  A G0 decision recorded as a label can be counted, filtered and shown in the Triage view.
acceptance:
  - "Static: labels.yml holds the four labels, each with a description."
links:
  mockup: n/a
  spec: null
---
