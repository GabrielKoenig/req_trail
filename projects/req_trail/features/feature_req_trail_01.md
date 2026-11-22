---
id: feature_req_trail_01
title: Repository skeleton and ID scheme
project: req_trail
goal: >
  Anyone can add a project, feature, requirement, spec or acceptance record from a template without inventing
  the format.
scope:
  - Conventions for names, IDs, versions, statuses and gates
  - The format version of a project
  - One template per file type
  - A made-up example project
non_scope:
  - Checks that enforce the conventions (feature_req_trail_03)
  - Hats and CODEOWNERS (feature_req_trail_16)
origin: ["concept/concept.html#estimate"]
metric:
  name: Minutes to write a first requirement file
  unit: "min"
  baseline: 30
  target: 10
  direction: at_most
estimate: 1
depends_on: []
target_release: "1.0"
---

Built in work package 1. It holds 10 requirements. The baseline is an estimate; the value review after
the release measures it.
