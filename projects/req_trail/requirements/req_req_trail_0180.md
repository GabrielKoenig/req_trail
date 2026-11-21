---
id: req_req_trail_0180
title: Link to the overview concept
feature: feature_req_trail_03
owner: "@GabrielKoenig"
version: 1
priority: must
type: functional
category: ""
depends_on: []
reviews: []
reviews_reason: "Reads files of the repository; no personal data or credentials."
source: "conventions.md#concepts"
statement: >
  validate shall fail a pull request in which a project that has a spec has no `concept` in project.yml, or
  `concept` is not an https link.
rationale: >
  Every feature concept builds on the overview of its project, so a reader must be able to find that overview from
  the project.
acceptance:
  - "Unit: recipe_box with concept: null fails and names the project."
  - "Unit: concept: docs/concept.md fails, because it is not an https link."
  - "Unit: a project without specs and with concept: null passes."
  - "Unit: concept: https://github.com/yourorg/recipe_box/blob/main/docs/concept.md passes."
links:
  spec: null
---

The overview lives with the project's code, so validate checks the form of the link, not that the page exists.
reqTrail's overview is the `concept/` folder of its own repo.
