---
id: req_req_trail_0147
title: Migration as a pull request
feature: feature_req_trail_17
owner: "@GabrielKoenig"
version: 1
priority: should
type: functional
category: ""
depends_on: [req_req_trail_0145@1]
reviews: []
reviews_reason: "Release and workflow setup; reads nothing beyond the repos that call it."
source: "concept/concept.html#estimate"
statement: >
  migrate shall write the migrated files of a project on the branch
  `change_request/<project>/format_<version>`, named after the new format version, and open one pull
  request for them.
rationale: >
  Rewritten files go through review like any other change, and the pull request shows exactly what changed.
acceptance:
  - "Integration: on a test repo with a format 1 project, migrate opens one pull request whose files pass validate at the current format."
  - "Unit: migrating recipe_box to format 2 writes to the branch change_request/recipe_box/format_2."
links:
  mockup: n/a
  spec: null
---

The branch follows the scheme in `CLAUDE.md`. A migration changes merged files, so its phase is `change_request`, and
it names no feature.
