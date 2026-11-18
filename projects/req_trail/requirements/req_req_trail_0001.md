---
id: req_req_trail_0001
title: One template per file type
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
  The engine shall provide one template per file type: project.yml, feature.md, requirement.md, spec.md,
  acceptance.md and metrics.yml.
rationale: >
  Without a template, every author invents a slightly different format and the checks reject it.
acceptance:
  - "Static: templates/ holds exactly these six files."
links:
  mockup: n/a
  spec: null
---
