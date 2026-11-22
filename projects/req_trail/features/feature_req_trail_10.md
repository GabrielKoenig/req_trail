---
id: feature_req_trail_10
title: Community intake
project: req_trail
goal: >
  A need posted in the community forum reaches the request list without being retyped.
scope:
  - "The #request marker"
  - A request issue from a post
  - A reply in the thread
non_scope:
  - "Triage decisions: G0 stays with the requirements owner"
origin: ["concept/concept.html#estimate"]
metric:
  name: Working days from forum post to request issue
  unit: "days"
  baseline: 7
  target: 1
  direction: at_most
estimate: 1
depends_on:
  - feature_req_trail_02
target_release: "1.0"
---

Built in work package 10. It holds 2 requirements. The baseline is an estimate; the value review after
the release measures it.
