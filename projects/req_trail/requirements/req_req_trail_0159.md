---
id: req_req_trail_0159
title: Least privilege for workflows
feature: feature_req_trail_17
owner: "@GabrielKoenig"
version: 1
priority: must
type: non_functional
category: "security"
depends_on: []
reviews: [security]
reviews_reason: "Token scopes and secrets decide what a faulty or compromised workflow can change, so the security reviewer checks them."
source: "concept/architecture.html#risks"
statement: >
  Every workflow of the engine and the project template shall declare its token permissions explicitly, request no
  write scope its jobs do not use, and take credentials only from GitHub Actions secrets.
rationale: >
  A token that can do no more than its job needs limits the damage of a faulty or compromised workflow.
acceptance:
  - "Static: every workflow file has a permissions: key."
  - "Static: no workflow uses write-all."
  - "Static: no workflow file holds a credential in plain text."
  - "Manual: the security reviewer finds, for each write scope, the step that uses it."
links:
  mockup: n/a
  spec: null
---

Reuse before building: the spec at G2 checks whether an established linter for GitHub Actions, such as zizmor or
actionlint, covers the Static criteria.

## Manual test

**Who:** the security reviewer, who did not write the workflows.

1. List the write scopes in the permissions: keys of every workflow of the engine and the project template.
2. For each scope, find the step that uses it.

**Passes when:** Every write scope has a step that needs it.
