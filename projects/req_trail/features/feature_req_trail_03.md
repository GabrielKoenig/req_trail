---
id: feature_req_trail_03
title: Model, schemas and validator
project: req_trail
goal: >
  A pull request cannot merge a file that breaks the format or points to something that does not exist.
scope:
  - One class per object type that loads a file only through its schema
  - JSON Schemas per object type and format version, the single source of fields and values
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
estimate: 3.5
target_release: "1.0"
---

Built in work package 3. It holds 44 requirements. The baseline is an estimate; the value review after
the release measures it.
