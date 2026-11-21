---
id: req_req_trail_0174
title: Sources in a fixed form
feature: feature_req_trail_03
owner: "@GabrielKoenig"
version: 1
priority: should
type: functional
category: ""
depends_on: []
reviews: []
reviews_reason: "Reads repository files only; no personal data or credentials."
source: "concept/concept.html#compatibility"
statement: >
  validate shall fail when the source of a requirement or an origin of a feature is not `#<issue>`,
  `<owner>/<repo>#<issue>` or a path in the repository with an optional `#<anchor>`.
rationale: >
  Only a source in a fixed form can become a link, in the explorer and in an export.
acceptance:
  - "Unit: #18, yourorg/project_management#18 and concept/concept.html#estimate pass."
  - "Unit: the source 'see forum' fails, and so does a path that does not exist."
links:
  spec: null
---
