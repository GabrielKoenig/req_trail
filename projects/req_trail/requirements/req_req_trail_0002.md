---
id: req_req_trail_0002
title: Lower snake case names
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
  Every file and folder name in the engine repo shall be lower snake case, except a name that a tool fixes.
rationale: >
  One spelling for every name lets people and scripts find a file without guessing its case or separator.
acceptance:
  - "Static: every tracked path part that does not match ^[a-z0-9_]+(\\.[a-z0-9_]+)*$ is listed as a tool exception in CLAUDE.md."
links:
  spec: null
---
