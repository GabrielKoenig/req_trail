---
id: feature_req_trail_14
title: "Pilot: reqTrail through its own gates"
project: req_trail
goal: >
  The whole process works on a real project, reqTrail itself, before another team relies on it.
scope:
  - "req_trail's own requirements through G0 to G3"
  - "The engine's code and tests linked to those requirements"
  - One change that travels through all gates again
  - A tracking issue for findings and effort
  - Findings fixed or recorded
non_scope:
  - Projects of other teams
  - A pilot on the made-up example recipe_box
origin: ["concept/concept.html#estimate"]
metric:
  name: Work packages that pass G1 to G3 without a manual workaround
  unit: "%"
  baseline: 0
  target: 80
  direction: at_least
estimate: 3
depends_on:
  - feature_req_trail_06
  - feature_req_trail_07
  - feature_req_trail_08
  - feature_req_trail_09
  - feature_req_trail_10
  - feature_req_trail_11
  - feature_req_trail_12
  - feature_req_trail_13
  - feature_req_trail_16
  - feature_req_trail_17
  - feature_req_trail_18
  - feature_req_trail_19
target_release: "1.0"
---

Built in work package 14. It holds 9 requirements. The baseline is an estimate; the value review after
the release measures it.
