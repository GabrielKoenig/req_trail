---
id: req_req_trail_0007
title: Made-up example project
feature: feature_req_trail_01
owner: "@GabrielKoenig"
version: 1
priority: should
type: functional
category: ""
depends_on: []
reviews: []
reviews_reason: "Defines file formats only; no personal data, credentials or permissions."
source: "concept/concept.html#estimate"
statement: >
  The engine shall include an example project with made-up data that shows every file type.
rationale: >
  A complete example shows a new author every file type in use and doubles as test input for the checks.
acceptance:
  - "Static: projects/recipe_box holds a project file, a feature, a feature concept, a requirement, a spec, an acceptance record and a metrics file."
  - "Manual: the reviewer finds no real person, organisation or system in projects/recipe_box."
links:
  spec: null
---

## Manual test

**Who:** the reviewer of the pull request that builds it, who did not write it.

1. Open every file in projects/recipe_box.
2. Look for names of people, organisations, products and systems.

**Passes when:** Only made-up names appear: recipe_box, yourorg and handles such as @owner1.
