---
id: req_req_trail_0172
title: Estimate in the feature file
feature: feature_req_trail_09
owner: "@GabrielKoenig"
version: 1
priority: should
type: functional
category: ""
depends_on: [req_req_trail_0020@1]
reviews: []
reviews_reason: "Defines a field of the feature file; no personal data or credentials."
source: "concept/concept.html#gates"
statement: >
  Every feature file shall hold the estimated effort of the feature in person-days.
rationale: >
  The Ready list at G1 asks for an estimate, and the KPI view sets the effort spent against it.
acceptance:
  - "Static: templates/feature.md and every projects/*/features/*.md hold estimate as a number."
  - "Unit: the feature schema fails a feature without estimate."
links:
  spec: null
---
