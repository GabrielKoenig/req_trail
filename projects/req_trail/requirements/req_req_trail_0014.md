---
id: req_req_trail_0014
title: Change request form
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
  The change request form shall ask for the requirement ID with its version, the proposed text and the reason.
rationale: >
  A change request without the version and the reason cannot be judged against the text it wants to change.
acceptance:
  - "Static: .github/ISSUE_TEMPLATE/change_request.yml has these three fields, each marked required."
links:
  mockup: n/a
  spec: null
---
