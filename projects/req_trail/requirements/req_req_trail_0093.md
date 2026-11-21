---
id: req_req_trail_0093
title: Expected benefit as a metric
feature: feature_req_trail_12
owner: "@GabrielKoenig"
version: 1
priority: should
type: functional
category: ""
depends_on: [req_req_trail_0020@1]
reviews: []
reviews_reason: "Uses pull request lines that are already visible in the repos."
source: "concept/concept.html#estimate"
statement: >
  The feature file shall state the benefit that the feature is expected to bring as a metric with a baseline, a
  target and a direction.
rationale: >
  The value review needs to know in advance what benefit the feature was meant to bring.
acceptance:
  - "Unit: the feature schema fails a feature whose metric lacks a baseline, a target or a direction."
links:
  spec: null
---

The metric is the expected benefit, so the feature file needs no separate field for it: the value review
compares the measured value with the target (req_req_trail_0092, req_req_trail_0094).
