---
id: req_req_trail_0094
title: Value review result in metrics.yml
feature: feature_req_trail_12
owner: "@GabrielKoenig"
version: 1
priority: should
type: functional
category: ""
depends_on: [req_req_trail_0092@1]
reviews: []
reviews_reason: "Uses pull request lines that are already visible in the repos."
source: "concept/concept.html#estimate"
statement: >
  The engine shall accept a value review result in metrics.yml only with the measured value, the date, the
  source and the decision.
rationale: >
  A result without the value, the date, the source and the decision cannot be trusted or traced later.
acceptance:
  - "Unit: a result without a decision fails the metrics schema."
  - "Unit: a result with all four fields passes."
links:
  mockup: n/a
  spec: null
---
