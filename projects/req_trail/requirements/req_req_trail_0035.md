---
id: req_req_trail_0035
title: Ready and Done lists ticked
feature: feature_req_trail_03
owner: "@GabrielKoenig"
version: 1
priority: should
type: functional
category: ""
depends_on: [req_req_trail_0015@1]
reviews: []
reviews_reason: "Reads repository files only; no personal data or credentials."
source: "concept/concept.html#estimate"
statement: >
  gate_check shall fail a gate pull request whose Ready or Done list has an unticked item.
rationale: >
  An unticked item on the Ready or Done list means the gate is not ready, whatever the approval says.
acceptance:
  - "Unit: a pull request body with one unticked item under Ready fails and names the item."
  - "Unit: a body with every item ticked passes."
links:
  spec: null
---
