---
id: req_req_trail_0078
title: New permission or dependency
feature: feature_req_trail_08
owner: "@GabrielKoenig"
version: 1
priority: should
type: non_functional
category: "security"
depends_on: []
reviews: [security]
reviews_reason: "It decides when a security reviewer sees a change."
source: "concept/concept.html#estimate"
statement: >
  The link workflow shall warn when a pull request adds a dependency or a permission scope and names no
  requirement tagged security.
rationale: >
  A new dependency or permission scope is a security decision that should rest on a reviewed requirement.
acceptance:
  - "Unit: a diff that adds an entry to package.json, requirements.txt or a PowerShell module manifest warns when no named requirement has reviews: [security]."
links:
  spec: null
---
