---
id: req_req_trail_0110
title: The admin approves a new project lead
feature: feature_req_trail_16
owner: "@GabrielKoenig"
version: 1
priority: must
type: non_functional
category: "security"
depends_on: []
reviews: []
reviews_reason: "Checks approvals that GitHub already records; stores no new personal data."
source: "concept/concept.html#estimate"
statement: >
  gate_check shall fail a change to the project lead hat in roles.yml that the organisation admin has not
  approved.
rationale: >
  The project lead hat controls roles.yml, so changing it needs someone above the project.
acceptance:
  - "Unit: a change of the project lead approved only by the project lead fails."
links:
  spec: null
---
