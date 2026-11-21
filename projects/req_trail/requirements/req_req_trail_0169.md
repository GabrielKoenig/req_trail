---
id: req_req_trail_0169
title: Approved on top of Draft
feature: feature_req_trail_03
owner: "@GabrielKoenig"
version: 1
priority: should
type: functional
category: ""
depends_on: [req_req_trail_0046@1]
reviews: []
reviews_reason: "Reads repository files and the published index; no personal data or credentials."
source: "concept/concept.html#gates"
statement: >
  validate shall warn when a requirement that is Approved or later depends on a requirement that is still Draft.
rationale: >
  An approved requirement that rests on an unapproved one can change under its feet.
acceptance:
  - "Unit: an Approved req_recipe_box_0003 that depends on a Draft req_recipe_box_0001 warns, and the check still passes."
links:
  spec: null
---
