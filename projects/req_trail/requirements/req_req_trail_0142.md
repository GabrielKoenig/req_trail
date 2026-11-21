---
id: req_req_trail_0142
title: Unknown format fails
feature: feature_req_trail_03
owner: "@GabrielKoenig"
version: 1
priority: must
type: functional
category: ""
depends_on: [req_req_trail_0140@1]
reviews: []
reviews_reason: "Reads repository files only; no personal data or credentials."
source: "concept/concept.html#estimate"
statement: >
  validate shall fail when a project names a format version that the engine does not know.
rationale: >
  Guessing the format of a project written for a newer engine could silently misread its files.
acceptance:
  - "Unit: a project.yml with format_version: 99 makes validate fail and name the project and the versions the engine knows."
links:
  spec: null
---
