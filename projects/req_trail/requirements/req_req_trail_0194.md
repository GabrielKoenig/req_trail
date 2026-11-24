---
id: req_req_trail_0194
title: zizmor as a required check
feature: feature_req_trail_05
owner: "@GabrielKoenig"
version: 1
priority: must
type: non_functional
category: "security"
depends_on: [req_req_trail_0054@1]
reviews: [security]
reviews_reason: "A workflow that runs untrusted input with write rights is the most direct way into a repo, so the security reviewer checks the linter and its settings."
source: "concept/architecture.html#risks"
statement: >
  A project repo shall require a zizmor check of every workflow file, with no rule turned off and no finding ignored,
  to pass before a pull request can merge.
rationale: >
  An established linter finds dangerous triggers, template injection and excessive permissions in workflows before
  they run.
acceptance:
  - "Integration: on the test repo, a pull request that adds a workflow using pull_request_target cannot be merged."
  - "Static: the repo has no zizmor configuration that turns off a rule and no zizmor ignore comment."
links:
  spec: null
---

Reuse before building: zizmor is an open-source security linter for GitHub Actions. The spec of work package 5 records
it under Libraries considered, next to actionlint (`req_req_trail_0159`). The index build needs no exception, because
it never runs on `pull_request_target` (`req_req_trail_0052`).
