---
id: req_req_trail_0139
title: Format version per project
feature: feature_req_trail_01
owner: "@GabrielKoenig"
version: 1
priority: must
type: functional
category: ""
depends_on: []
reviews: []
reviews_reason: "Defines file formats only; no personal data, credentials or permissions."
source: "concept/concept.html#estimate"
statement: >
  Every project.yml shall state the format version that all files of the project follow.
rationale: >
  The engine can read a file correctly only when it knows which format the file was written in.
acceptance:
  - "Static: templates/project.yml and every projects/*/project.yml hold format_version as a whole number."
links:
  spec: null
---
