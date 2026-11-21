---
id: req_req_trail_0107
title: CODEOWNERS from roles.yml
feature: feature_req_trail_16
owner: "@GabrielKoenig"
version: 1
priority: must
type: functional
category: ""
depends_on: [req_req_trail_0055@1]
reviews: []
reviews_reason: "Checks approvals that GitHub already records; stores no new personal data."
source: "concept/concept.html#estimate"
statement: >
  The engine shall write CODEOWNERS from roles.yml with one line per path.
rationale: >
  Writing CODEOWNERS by hand next to roles.yml creates two lists of hats that drift apart.
acceptance:
  - "Unit: the example roles.yml produces the expected CODEOWNERS."
  - "Unit: validate fails when the committed CODEOWNERS differs from the generated one."
links:
  spec: null
---
