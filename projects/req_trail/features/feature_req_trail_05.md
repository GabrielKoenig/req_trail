---
id: feature_req_trail_05
title: Pull request checks and review rules
project: req_trail
goal: >
  No requirement, spec or acceptance record reaches main without passing the checks and its gatekeeper.
scope:
  - validate as a required check
  - CODEOWNERS per gate
  - Branch protection
  - Privacy and security reviewers on tagged specs
non_scope:
  - Generating CODEOWNERS from roles.yml (feature_req_trail_16)
origin: ["concept/concept.html#estimate"]
metric:
  name: "Gate pull requests merged without the gatekeeper's approval"
  unit: "per month"
  baseline: 3
  target: 0
  direction: at_most
estimate: 2
depends_on:
  - feature_req_trail_03
target_release: "1.0"
---

Built in work package 5. It holds 9 requirements. The baseline is an estimate; the value review after
the release measures it.
