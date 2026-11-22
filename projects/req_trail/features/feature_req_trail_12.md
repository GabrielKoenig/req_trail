---
id: feature_req_trail_12
title: Releases and value review
project: req_trail
goal: >
  Each release lists what it delivered, and six weeks later the owner checks the outcome.
scope:
  - Release notes from implements lines
  - Releases view
  - Value review issue
non_scope:
  - Publishing releases in the code repos
origin: ["concept/concept.html#estimate"]
metric:
  name: Minutes to write release notes
  unit: "min"
  baseline: 60
  target: 5
  direction: at_most
estimate: 1
depends_on:
  - feature_req_trail_06
  - feature_req_trail_11
target_release: "1.0"
---

Built in work package 12. It holds 5 requirements. The baseline is an estimate; the value review after
the release measures it.
