---
id: req_req_trail_0008
title: Names written out in full
feature: feature_req_trail_01
owner: "@GabrielKoenig"
version: 1
priority: must
type: constraint
category: ""
depends_on: []
reviews: []
reviews_reason: "Defines file formats only; no personal data, credentials or permissions."
source: "concept/concept.html#estimate"
statement: >
  Every file name, folder name and ID in the engine repo shall be written out in full, with req and spec as
  the only short forms.
rationale: >
  Short codes have to be decoded by every new reader, while full names explain themselves.
acceptance:
  - "Static: every feature ID matches feature_<project>_<nn> and every requirement and spec ID matches req_<project>_<nnnn> or spec_<project>_<nnnn>, where <project> is the name of its folder."
  - "Static: the file of measured outcomes is named metrics.yml in templates/ and in every project folder."
links:
  mockup: n/a
  spec: null
---
