---
id: req_req_trail_0084
title: Every label in labels.yml
feature: feature_req_trail_02
owner: "@GabrielKoenig"
version: 1
priority: should
type: functional
category: ""
depends_on: [req_req_trail_0016@1]
reviews: []
reviews_reason: "Defines label names only; no personal data or credentials."
source: "concept/concept.html#estimate"
statement: >
  labels.yml shall hold the labels triage, accepted, declined, duplicate, needs_info, draft, gate_exception,
  review_privacy, review_security, source_github, source_community and editorial, each with a description.
rationale: >
  A label that one workflow sets and another reads has to be spelled the same in every repo.
acceptance:
  - "Static: labels.yml holds exactly these twelve labels, each with a description."
links:
  spec: null
---

The list holds every label the engine sets or reads, not only the triage decisions. The requirement belongs to
feature_req_trail_02, which builds labels.yml.
