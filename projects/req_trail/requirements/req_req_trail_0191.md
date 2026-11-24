---
id: req_req_trail_0191
title: A G1 pull request closes its request
feature: feature_req_trail_05
owner: "@GabrielKoenig"
version: 1
priority: should
type: functional
category: ""
depends_on: [req_req_trail_0150@1]
reviews: []
reviews_reason: "Reads the pull request text and its changed files only; no personal data or credentials."
source: "concept/concept.html#gates"
statement: >
  validate shall fail a pull request that adds a requirement whose source is an issue of the same repo unless its
  description closes that issue.
rationale: >
  GitHub then shows the open pull request on the request issue and closes the request when the requirement is
  approved.
acceptance:
  - "Unit: a pull request that adds req_recipe_box_0003 with source #25 and has Closes #25 in its description passes."
  - "Unit: the same pull request without Closes #25 fails, and the message names #25."
  - "Unit: a pull request that adds req_recipe_box_0003 and req_recipe_box_0004, both with source #25, passes with one Closes #25."
  - "Unit: a pull request that adds a requirement whose source is docs/user/tools.md passes without a closing keyword."
links:
  spec: null
---

One request leads to one G1 pull request, which may carry several requirements. A change request closes its issue the
same way (`req_req_trail_0137`).
