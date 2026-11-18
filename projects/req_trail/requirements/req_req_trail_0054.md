---
id: req_req_trail_0054
title: validate is required
feature: feature_req_trail_05
owner: "@GabrielKoenig"
version: 1
priority: must
type: functional
category: ""
depends_on: [req_req_trail_0021@1]
reviews: []
reviews_reason: "Configures GitHub's own review rules; stores no new data."
source: "concept/concept.html#estimate"
statement: >
  A project repo shall require the validate check to pass before a pull request can merge.
rationale: >
  A check that is not required can be ignored, and then the format is no longer guaranteed.
acceptance:
  - "Integration: on the test repo a pull request with a schema error cannot be merged."
links:
  mockup: n/a
  spec: null
---
