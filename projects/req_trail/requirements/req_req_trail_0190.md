---
id: req_req_trail_0190
title: One gate per pull request
feature: feature_req_trail_05
owner: "@GabrielKoenig"
version: 1
priority: must
type: functional
category: ""
depends_on: [req_req_trail_0189@1, req_req_trail_0150@1]
reviews: []
reviews_reason: "Reads the changed paths of a pull request only; no personal data or credentials."
source: "concept/concept.html#gates"
statement: >
  validate shall fail a pull request whose files belong to more than one gate, that mixes files of a gate with files
  of no gate, or whose branch names a feature while its files belong to another feature.
rationale: >
  A gate decides one kind of question for one work package, so a pull request that mixes them gets a review without
  context and maps to no single gate.
acceptance:
  - "Unit: a pull request with req_recipe_box_0003 and req_recipe_box_0004 of feature_recipe_box_01 from branch idea/recipe_box/feature_recipe_box_01_issue31 passes."
  - "Unit: a pull request with req_recipe_box_0003 and spec_recipe_box_0003 fails, and the message names G1 and G2."
  - "Unit: a pull request with req_recipe_box_0003 and project.yml fails."
  - "Unit: a pull request with a requirement of feature_recipe_box_02 fails from branch idea/recipe_box/feature_recipe_box_01_issue31 and passes from idea/recipe_box/issue31."
links:
  spec: null
---

Bundling stays the normal case: a gate pull request may carry all requirements of a feature, or a feature concept with
the specs of its requirements. When one of them is not ready, the author takes it out of the pull request and it
follows in a pull request of its own. A change that spans several features uses a branch without a feature. Format
migrations are handled by `req_req_trail_0195`.
