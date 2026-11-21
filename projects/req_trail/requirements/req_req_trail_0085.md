---
id: req_req_trail_0085
title: Read JUnit XML
feature: feature_req_trail_11
owner: "@GabrielKoenig"
version: 1
priority: must
type: functional
category: ""
depends_on: []
reviews: [security]
reviews_reason: "Reading the run artifacts of a private code repo needs a read-only token (B7)."
source: "concept/concept.html#estimate"
statement: >
  build_index shall read the JUnit XML report of each code repo CI run and count the passed and failed tests
  per requirement ID.
rationale: >
  JUnit XML is the one report format that test tools in most languages can write.
acceptance:
  - "Unit: a Pester report and a pytest report, each with tests for req_recipe_box_0003, give the right counts."
links:
  spec: null
---
