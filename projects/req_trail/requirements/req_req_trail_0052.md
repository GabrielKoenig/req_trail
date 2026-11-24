---
id: req_req_trail_0052
title: On merge, nightly and on pull request events
feature: feature_req_trail_04
owner: "@GabrielKoenig"
version: 1
priority: must
type: functional
category: ""
depends_on: []
reviews: [security]
reviews_reason: "The triggers decide which code runs with the right to publish the dashboard, so the security reviewer checks them."
source: "concept/architecture.html#runtime"
statement: >
  build_index shall run on main after every merge to main, once a night, and when a pull request from a branch in the
  repo that touches projects/ opens, changes or closes, and record in index.json when and why it ran.
rationale: >
  Merges, pull requests and events in the code repos all change what the dashboard shows, and only main's code may
  publish it.
acceptance:
  - "Static: the build workflow triggers on a push to main, on a nightly schedule and on workflow_dispatch, and no workflow uses pull_request_target."
  - "Static: the starter workflow triggers on pull_request for projects/** with the types opened, reopened, ready_for_review, converted_to_draft, synchronize and closed, and its only job starts the build on main with the pull request number as a number input."
  - "Static: the starter job asks only for actions: write, checks out nothing and skips pull requests from forks."
  - "Static: all build runs share one concurrency group that does not cancel a running build."
  - "Integration: on the test repo, a pull request that adds a requirement is in the published index.json within 5 minutes of being opened."
  - "Unit: index.json records the time of the build and the merge, pull request number or nightly run that started it."
links:
  spec: null
---

The build always runs main's code. A plain `pull_request` job only asks GitHub to start it, because
`pull_request_target` would run with write rights in the context of a pull request, and zizmor reports it
(`req_req_trail_0194`). Pull requests from forks get a read-only token and start nothing. Events in the code repos
still arrive with the nightly run. The concurrency group keeps one build running and only the newest one waiting,
which is safe because every build reads the whole state.
