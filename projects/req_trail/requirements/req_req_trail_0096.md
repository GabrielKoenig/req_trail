---
id: req_req_trail_0096
title: Triage view
feature: feature_req_trail_13
owner: "@GabrielKoenig"
version: 1
priority: should
type: functional
category: ""
depends_on: []
reviews: []
reviews_reason: "Shows issue data that GitHub already shows to the same readers."
source: "concept/concept.html#estimate"
statement: >
  The Triage view shall list the open request issues that have no triage label yet.
rationale: >
  Requests waiting for a G0 decision must be visible, or they wait forever.
acceptance:
  - "Integration: on the test repo an untriaged request shows, and a request labelled accepted does not."
links:
  spec: null
---
