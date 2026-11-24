---
id: req_req_trail_0159
title: Least privilege for workflows
feature: feature_req_trail_17
owner: "@GabrielKoenig"
version: 1
priority: must
type: non_functional
category: "security"
depends_on: [req_req_trail_0193@1, req_req_trail_0194@1]
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
  - "Integration: a project repo created from the template requires the zizmor check and lets Pages deploy only from main."
links:
  spec: null
---

Reuse before building: zizmor is a required check (`req_req_trail_0194`); the spec at G2 checks whether it, or
actionlint next to it, covers the Static criteria. A project repo gets the same check and the same rule for Pages
(`req_req_trail_0193`) as this repo.

## Manual test

**Who:** the security reviewer, who did not write the workflows.

1. List the write scopes in the permissions: keys of every workflow of the engine and the project template.
2. For each scope, find the step that uses it.

**Passes when:** Every write scope has a step that needs it.
