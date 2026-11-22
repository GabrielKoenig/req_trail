---
id: feature_req_trail_11
title: Test results as evidence
project: req_trail
goal: >
  A requirement shows whether its tests passed, whatever test tool the code repo uses.
scope:
  - Reading JUnit XML from code repo runs
  - Results per requirement ID
  - Pass or fail in the matrix and the pull request comment
non_scope:
  - Running the tests of code repos
origin: ["concept/concept.html#estimate"]
metric:
  name: Acceptance records with test evidence
  unit: "%"
  baseline: 0
  target: 90
  direction: at_least
estimate: 1.5
depends_on:
  - feature_req_trail_04
  - feature_req_trail_08
target_release: "1.0"
---

Built in work package 11. It holds 5 requirements. The baseline is an estimate; the value review after
the release measures it.
