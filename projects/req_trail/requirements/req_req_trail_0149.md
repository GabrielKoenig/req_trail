---
id: req_req_trail_0149
title: Libraries considered before building
feature: feature_req_trail_03
owner: "@GabrielKoenig"
version: 1
priority: must
type: constraint
category: ""
depends_on: [req_req_trail_0041@1]
reviews: []
reviews_reason: "Reads repository files only; no personal data or credentials."
source: "concept/concept.html#estimate"
statement: >
  Every module under tools/ and every runtime dependency of the engine shall be named in the section Libraries
  considered of a merged spec, with the established open-source libraries checked for its job.
rationale: >
  A well-maintained library has already been tested by many users, so building its job again costs time and
  brings back bugs that others have fixed.
acceptance:
  - "Static: each file in tools/ and each entry under dependencies in package.json is named in the section Libraries considered of a merged spec of project req_trail."
  - "Unit: a row of that section that names a part but neither a library nor None found fails the check, which names the spec and the part."
links:
  mockup: n/a
  spec: null
---
