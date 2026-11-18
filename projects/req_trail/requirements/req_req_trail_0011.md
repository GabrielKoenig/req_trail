---
id: req_req_trail_0011
title: Request form asks for the need
feature: feature_req_trail_02
owner: "@GabrielKoenig"
version: 1
priority: must
type: functional
category: ""
depends_on: []
reviews: []
reviews_reason: "Forms and templates ask for the need, not for names or credentials."
source: "concept/concept.html#estimate"
statement: >
  The request form shall ask for the problem, who is affected, how often it happens, the outcome wanted and
  the source.
rationale: >
  A request that states only a solution hides the problem, and the owner cannot judge it at G0.
acceptance:
  - "Static: .github/ISSUE_TEMPLATE/request.yml has these five fields, each marked required."
links:
  mockup: n/a
  spec: null
---
