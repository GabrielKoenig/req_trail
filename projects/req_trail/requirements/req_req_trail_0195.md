---
id: req_req_trail_0195
title: Format migrations belong to no gate
feature: feature_req_trail_17
owner: "@GabrielKoenig"
version: 1
priority: must
type: functional
category: ""
depends_on: [req_req_trail_0190@1, req_req_trail_0145@1]
reviews: []
reviews_reason: "Release and workflow setup; reads nothing beyond the repos that call it."
source: "concept/concept.html#gates"
statement: >
  validate shall exempt a pull request from the rule of one gate per pull request only when the migration runner shows
  that it changes no ID, statement or version, and then treat it as belonging to no gate.
rationale: >
  A format migration rewrites the files of every gate at once but decides nothing, so it needs no gate and must not be
  blocked by the rule of one gate per pull request.
acceptance:
  - "Unit: the pull request of a migration from format 1 to 2 that changes project.yml and only the layout of requirements, specs and acceptance records passes, and build_index lists it for no requirement."
  - "Unit: a migration pull request that changes project.yml and only the layout of the requirements passes."
  - "Unit: the same pull request with one statement edited fails, and the message names the requirement."
links:
  spec: null
---

The branch name `change_request/<project>/format_<version>` (`req_req_trail_0147`) is not enough on its own, because
anyone can type it; the content decides.
