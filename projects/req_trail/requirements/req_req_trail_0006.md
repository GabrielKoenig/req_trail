---
id: req_req_trail_0006
title: No status in any file
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
  No template and no project file shall hold a status key.
rationale: >
  A status typed into a file drifts from what really happened in GitHub, so the index derives it instead.
acceptance:
  - "Static: no file under templates/ or projects/ has a line that starts with status:."
links:
  spec: null
---
