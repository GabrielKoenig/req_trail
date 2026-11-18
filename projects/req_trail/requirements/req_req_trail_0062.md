---
id: req_req_trail_0062
title: No server
feature: feature_req_trail_06
owner: "@GabrielKoenig"
version: 1
priority: must
type: constraint
category: ""
depends_on: []
reviews: []
reviews_reason: "Shows only what index.json holds; handles appear as GitHub already shows them."
source: "concept/concept.html#estimate"
statement: >
  The explorer shall run from static files and index.json, with no server of its own.
rationale: >
  A server would have to be run, secured and paid for, while static files on GitHub Pages need none of that.
acceptance:
  - "Integration: the published folder, served by a plain static file server, shows every main view."
links:
  mockup: n/a
  spec: null
---
