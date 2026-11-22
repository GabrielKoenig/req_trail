---
id: feature_req_trail_09
title: Feature KPI view
project: req_trail
goal: >
  Each feature shows whether it reached the outcome it was built for.
scope:
  - Values in metrics.yml
  - KPI compared with the target in the index
  - KPI view in the explorer
non_scope:
  - Collecting values automatically from the code repos
origin: ["concept/concept.html#estimate"]
metric:
  name: Features with a measured outcome after release
  unit: "%"
  baseline: 0
  target: 80
  direction: at_least
estimate: 1.75
depends_on:
  - feature_req_trail_06
target_release: "1.0"
---

Built in work package 9. It holds 3 requirements. The baseline is an estimate; the value review after
the release measures it.
