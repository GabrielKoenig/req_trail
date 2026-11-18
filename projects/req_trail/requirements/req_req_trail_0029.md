---
id: req_req_trail_0029
title: A requirement needs an owner
feature: feature_req_trail_03
owner: "@GabrielKoenig"
version: 1
priority: must
type: functional
category: ""
depends_on: [req_req_trail_0020@1]
reviews: []
reviews_reason: "Reads repository files only; no personal data or credentials."
source: "concept/concept.html#estimate"
statement: >
  validate shall fail when a requirement has no owner.
rationale: >
  A requirement without an owner has nobody who answers questions about it or decides on changes.
acceptance:
  - "Unit: a requirement without owner fails and names the field owner."
links:
  mockup: n/a
  spec: null
---
