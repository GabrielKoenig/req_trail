---
id: req_req_trail_0177
title: Feature concept with five sections
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
  validate shall fail a pull request in which a feature that has a spec has no page `concepts/<feature id>.html`,
  or the page lacks a section with one of the ids flow, design, architecture, tests and requirements_to_specs.
rationale: >
  Reviewers at G2 and developers find the flow, the design, the architecture and the test approach of every work
  package at the same place.
acceptance:
  - "Unit: feature_recipe_box_01 without concepts/feature_recipe_box_01.html fails and names the feature."
  - "Unit: a concept page without the section with the id tests fails and names the missing section."
  - "Unit: a feature with no spec and no concept page passes."
  - "Unit: the concept page of feature_recipe_box_01 passes."
links:
  spec: null
---

A section is any element with the id, such as `<section id="flow">`, and the page may hold more. The overview
concept of the project lives with its code, not in `projects/`; req_req_trail_0180 checks the link to it.
