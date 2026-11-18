---
id: feature_req_trail_18
title: Requirement text checks and AI review
project: req_trail
goal: >
  Reviewers spend their time on content, because common wording problems are flagged before the review.
scope:
  - Warn-only text rules
  - Similar requirements
  - Optional AI review
non_scope:
  - Blocking a pull request because of its wording
origin: ["concept/concept.html#estimate"]
metric:
  name: Review rounds per requirement pull request
  unit: ""
  baseline: 3
  target: 2
  direction: at_most
target_release: "1.0"
---

Built in work package 18. It holds 10 requirements. The baseline is an estimate; the value review after
the release measures it.
