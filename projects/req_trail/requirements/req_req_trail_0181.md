---
id: req_req_trail_0181
title: Works without reqTrail's own project
feature: feature_req_trail_17
owner: "@GabrielKoenig"
version: 1
priority: must
type: constraint
category: ""
depends_on: []
reviews: []
reviews_reason: "Runs the checks on a copy of the repository; no personal data or credentials."
source: "conventions.md#layout"
statement: >
  CI shall fail a pull request after which validate, the concept data check or a concept page fails on a copy of
  the repository without projects/req_trail.
rationale: >
  The repository serves as the template for every project, so nothing outside projects/ may depend on reqTrail's
  own requirements.
acceptance:
  - "Integration: on a copy without projects/req_trail, validate and npm run check_concept_data pass."
  - "Integration: on that copy, concept.html, roles.html and architecture.html load in headless Chromium without console errors."
links:
  spec: null
---

On such a copy the tracker on the concept page shows only recipe_box, and the architecture page says that the files
of reqTrail are missing. Until the CI job exists, the copy is checked by hand before a merge.
