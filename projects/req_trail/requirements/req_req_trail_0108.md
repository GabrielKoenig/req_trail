---
id: req_req_trail_0108
title: The approver holds the hat
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
  gate_check shall fail a gate pull request whose approval does not come from a holder of the gate's hat in
  roles.yml.
rationale: >
  An approval counts only when it comes from the person who holds the gate's hat.
acceptance:
  - "Unit: a requirement pull request approved only by a tech lead fails."
  - "Unit: a requirement pull request approved by the Principal Engineer passes."
links:
  spec: null
---
