---
id: req_req_trail_0145
title: Migrations keep the content
feature: feature_req_trail_17
owner: "@GabrielKoenig"
version: 1
priority: must
type: functional
category: ""
depends_on: [req_req_trail_0144@1]
reviews: []
reviews_reason: "Release and workflow setup; reads nothing beyond the repos that call it."
source: "concept/concept.html#estimate"
statement: >
  The migration runner shall reject a migration result that changes an ID, a statement or a version, or that
  breaks the schema of the new format.
rationale: >
  A migration changes the structure of the files, never what was approved at the gates.
acceptance:
  - "Unit: a test migration that edits a statement is rejected, and the error names the migration and the requirement."
  - "Unit: a test migration whose result lacks a required field of the new format is rejected."
links:
  spec: null
---
