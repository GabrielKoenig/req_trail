---
id: feature_req_trail_16
title: Roles, evidence and the return path
project: req_trail
goal: >
  Every gate is held by a named hat, and every decision shows who made it and on what evidence.
scope:
  - roles.yml and the CODEOWNERS generator
  - Role checks in gate_check
  - The guard on the label accepted
  - Acceptance records with evidence
  - Roles history and dashboard
  - The nightly return path from the code repos
  - The label gate_exception
non_scope:
  - Managing GitHub accounts or teams
origin: ["concept/concept.html#estimate"]
metric:
  name: Gate approvals by someone without the hat
  unit: "per month"
  baseline: 2
  target: 0
  direction: at_most
estimate: 4
target_release: "1.0"
---

Built in work package 16. It holds 11 requirements. The baseline is an estimate; the value review after
the release measures it.
