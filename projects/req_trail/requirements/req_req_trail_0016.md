---
id: req_req_trail_0016
title: Labels from one list
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
  The engine shall create every label listed in labels.yml that a repo does not have yet.
rationale: >
  Every repo needs the same labels for the checks and views to work, and creating them by hand misses some.
acceptance:
  - "Integration: on an empty test repo the label script creates every label in labels.yml."
  - "Integration: a second run changes nothing."
links:
  spec: null
---
