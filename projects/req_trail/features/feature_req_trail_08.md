---
id: feature_req_trail_08
title: Link from code repos
project: req_trail
goal: >
  A code pull request shows which requirements it builds, and a missing link is caught.
scope:
  - Reusable workflow for code repos
  - implements and no_req lines
  - Warnings on unapproved requirements and new permissions
non_scope:
  - Test evidence (feature_req_trail_11)
origin: ["concept/concept.html#estimate"]
metric:
  name: Merged code pull requests with neither implements nor no_req
  unit: "%"
  baseline: 80
  target: 5
  direction: at_most
target_release: "1.0"
---

Built in work package 8. It holds 6 requirements. The baseline is an estimate; the value review after
the release measures it.
