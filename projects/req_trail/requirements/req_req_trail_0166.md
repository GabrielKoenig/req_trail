---
id: req_req_trail_0166
title: Warn before G2
feature: feature_req_trail_08
owner: "@GabrielKoenig"
version: 1
priority: should
type: functional
category: ""
depends_on: []
reviews: []
reviews_reason: "Reads the published index and the text of issues and pull requests; stores nothing."
source: "concept/concept.html#gates"
statement: >
  The link workflow shall warn when a named requirement is Approved but not yet Specified.
rationale: >
  Code built before its spec passed G2 may follow a plan that the architecture owner never approved.
acceptance:
  - "Unit: implements: req_recipe_box_0003@2 for an Approved requirement without a merged spec warns, and the check still passes."
links:
  mockup: n/a
  spec: null
---

It warns during the pilot. A change request after the pilot can turn the warning into a failure.
