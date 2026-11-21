---
id: req_req_trail_0121
title: Upgrade in one pull request
feature: feature_req_trail_17
owner: "@GabrielKoenig"
version: 1
priority: should
type: functional
category: ""
depends_on: [req_req_trail_0118@1]
reviews: []
reviews_reason: "Release and workflow setup; reads nothing beyond the repos that call it."
source: "concept/concept.html#estimate"
statement: >
  A project repo shall move to a new major engine version by changing only the version in its caller
  workflows.
rationale: >
  An upgrade that needs more than a version change will be put off.
acceptance:
  - "Integration: on the test project repo, changing @v1 to a test major tag is the only change needed to run that version."
links:
  spec: null
---
