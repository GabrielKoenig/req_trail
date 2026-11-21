---
id: req_req_trail_0179
title: Requirements to specs is generated
feature: feature_req_trail_03
owner: "@GabrielKoenig"
version: 1
priority: must
type: functional
category: ""
depends_on: [req_req_trail_0177@1]
reviews: []
reviews_reason: "Reads files of the repository; no personal data or credentials."
source: "conventions.md#concepts"
statement: >
  validate shall fail a pull request in which the section requirements_to_specs of a feature concept differs from
  the table that the engine generates from the requirement and spec files.
rationale: >
  The table pairs each requirement with the spec that translates it, so a table written by hand would drift from the
  files.
acceptance:
  - "Unit: after spec_recipe_box_0002 rises to version 3, the old table of feature_recipe_box_01 fails."
  - "Unit: a table that shows req_recipe_box_0001 without a spec, while spec_recipe_box_0001 covers it, fails."
  - "Unit: a requirement at version 2 whose spec covers version 1 shows as suspect in the generated table."
  - "Unit: the table that npm run concept_data writes passes."
links:
  spec: null
---

The table stands between the comments `<!-- generated: requirements_to_specs -->` and `<!-- end generated -->`; the
rest of the page is written by hand. Until work package 3, `npm run concept_data` writes it and
`npm run check_concept_data` fails when it differs.
