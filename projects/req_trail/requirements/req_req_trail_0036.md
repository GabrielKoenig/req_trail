---
id: req_req_trail_0036
title: Warn on e-mail addresses in a diff
feature: feature_req_trail_03
owner: "@GabrielKoenig"
version: 1
priority: should
type: functional
category: ""
depends_on: []
reviews: [privacy]
reviews_reason: "It looks for personal data; the data protection officer confirms what it should catch."
source: "concept/concept.html#estimate"
statement: >
  validate shall warn when a pull request adds an e-mail address.
rationale: >
  An e-mail address in a public repo is personal data that cannot be taken back once it is cloned.
acceptance:
  - "Unit: a diff that adds jane@example.com gives a warning with the file and the line, and validate still passes."
links:
  spec: null
---
