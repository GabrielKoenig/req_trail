---
id: req_req_trail_0193
title: Pages only from main
feature: feature_req_trail_05
owner: "@GabrielKoenig"
version: 1
priority: must
type: non_functional
category: "security"
depends_on: []
reviews: [security]
reviews_reason: "Whoever can deploy the explorer decides what every reader sees, so the security reviewer checks the rule."
source: "concept/architecture.html#deployment"
statement: >
  The github-pages environment of a project repo shall accept deployments only from main.
rationale: >
  Otherwise anyone with write access could publish a dashboard from a branch that shows statuses no gate has decided.
acceptance:
  - "Smoke: after each deploy, a check reads the deployment branch rule of the github-pages environment through the GitHub API and fails unless main is the only branch allowed."
  - "Integration: on the test repo, a workflow on another branch that deploys to Pages is rejected."
links:
  spec: null
---

This rule is the boundary for every trigger of `req_req_trail_0052`: whatever a branch runs, it cannot publish.
