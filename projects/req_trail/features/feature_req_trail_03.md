---
id: feature_req_trail_03
title: Schemas and validator
project: req_trail
goal: >
  A pull request cannot merge a file that breaks the format or points to something that does not exist.
scope:
  - JSON Schemas per file type
  - validate on every pull request
  - Ready and Done checks in gate_check
  - "Engine-wide constraints: Node.js, no build step, tests"
non_scope:
  - Text quality (feature_req_trail_18)
  - Role checks (feature_req_trail_16)
origin: ["concept/concept.html#estimate"]
metric:
  name: Files merged with a format error
  unit: "per month"
  baseline: 5
  target: 0
  direction: at_most
target_release: "1.0"
---

Built in work package 3. It holds 25 requirements. The baseline is an estimate; the value review after
the release measures it.
