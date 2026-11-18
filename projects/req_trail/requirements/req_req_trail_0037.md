---
id: req_req_trail_0037
title: Warn on internal domains in a diff
feature: feature_req_trail_03
owner: "@GabrielKoenig"
version: 1
priority: should
type: functional
category: ""
depends_on: []
reviews: [privacy]
reviews_reason: "It keeps the names of internal systems out of a repo that may be public; the project decides which domains count."
source: "concept/concept.html#estimate"
statement: >
  validate shall warn when a pull request adds a domain from the project's list of internal domains.
rationale: >
  An internal domain name reveals details of the organisation that should not appear in a public repo.
acceptance:
  - "Unit: with internal_domains: [corp.example] in project.yml, a diff that adds wiki.corp.example gives a warning with the file and the line."
links:
  mockup: n/a
  spec: null
---
