---
id: req_req_trail_0183
title: Order of features
feature: feature_req_trail_03
owner: "@GabrielKoenig"
version: 1
priority: should
type: functional
category: ""
depends_on: [req_req_trail_0020@1]
reviews: []
reviews_reason: "Defines a field of the feature file; no personal data or credentials."
source: "concept/concept.html#estimate"
statement: >
  Every feature file shall list in depends_on the features of its project that must be finished before its work
  starts, without a cycle.
rationale: >
  The number of a feature is permanent, so the order in which the features can be built has to come from a field
  and not from the numbers.
acceptance:
  - "Static: templates/feature.md and every projects/*/features/*.md hold depends_on as a list."
  - "Unit: validate fails a feature whose depends_on names a feature that does not exist in its project."
  - "Unit: validate fails two features that depend on each other."
links:
  spec: null
---

A feature names other features by ID and without a version, because a feature has none. Until work package 3,
`npm run concept_data` and `npm run check_concept_data` fail in the same cases.
