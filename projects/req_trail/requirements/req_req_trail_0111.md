---
id: req_req_trail_0111
title: Guard on the label accepted
feature: feature_req_trail_16
owner: "@GabrielKoenig"
version: 1
priority: must
type: functional
category: ""
depends_on: []
reviews: []
reviews_reason: "Checks approvals that GitHub already records; stores no new personal data."
source: "concept/concept.html#estimate"
statement: >
  The engine shall remove the label accepted when someone without the requirements owner hat sets it, and say
  why in a comment.
rationale: >
  Anyone with write access can set a label, so the G0 decision needs a guard.
acceptance:
  - "Integration: a developer sets accepted on a test request; the label is gone within 5 minutes and a comment explains why."
links:
  mockup: n/a
  spec: null
---
