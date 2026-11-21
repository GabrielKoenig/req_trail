---
id: req_req_trail_0018
title: ID and version in each row
feature: feature_req_trail_02
owner: "@GabrielKoenig"
version: 1
priority: should
type: functional
category: ""
depends_on: [req_req_trail_0017@1]
reviews: []
reviews_reason: "Forms and templates ask for the need, not for names or credentials."
source: "concept/concept.html#estimate"
statement: >
  The work issue template shall show each requirement row with the requirement ID and its version.
rationale: >
  A row without its version cannot show that the requirement changed after the work started.
acceptance:
  - "Static: the first cell of the requirement row in the work issue template reads req_<project>_<nnnn>@<version>."
links:
  spec: null
---
