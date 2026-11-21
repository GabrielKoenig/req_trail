---
id: req_req_trail_0033
title: Rationale required
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
  validate shall fail when a requirement has no rationale.
rationale: >
  The reason for a requirement gets lost in an export unless the file itself holds it.
acceptance:
  - "Unit: a requirement with an empty rationale fails and names the file."
links:
  spec: null
---
