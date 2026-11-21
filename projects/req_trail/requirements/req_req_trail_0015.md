---
id: req_req_trail_0015
title: Ready and Done lists
feature: feature_req_trail_02
owner: "@GabrielKoenig"
version: 1
priority: must
type: functional
category: ""
depends_on: []
reviews: []
reviews_reason: "Forms and templates ask for the need, not for names or credentials."
source: "concept/concept.html#estimate"
statement: >
  The pull request template shall hold a Ready list for requirement and spec pull requests and a Done list for
  acceptance pull requests.
rationale: >
  Reviewers need to see at a glance whether a gate pull request is complete before they approve it.
acceptance:
  - "Static: .github/pull_request_template.md has both lists as task-list items."
links:
  spec: null
---
