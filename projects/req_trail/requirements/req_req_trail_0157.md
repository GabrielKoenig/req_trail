---
id: req_req_trail_0157
title: Index published only on Pages
feature: feature_req_trail_04
owner: "@GabrielKoenig"
version: 1
priority: must
type: constraint
category: ""
depends_on: []
reviews: []
reviews_reason: "Publishes generated files to GitHub Pages; roles_history.json holds handles as GitHub already shows them."
source: "concept/architecture.html#risks"
statement: >
  build_index shall publish index.json and roles_history.json only to GitHub Pages, never to a branch of the
  repository.
rationale: >
  A workflow that commits generated files would bypass the pull requests that every change to a branch goes through.
acceptance:
  - "Static: no workflow commits or pushes index.json or roles_history.json."
  - "Integration: after a run on a test repo, index.json and roles_history.json are on its Pages site, and no branch has a new commit."
links:
  spec: null
---
