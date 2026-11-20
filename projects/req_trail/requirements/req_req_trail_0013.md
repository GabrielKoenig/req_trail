---
id: req_req_trail_0013
title: Review labels from the answers
feature: feature_req_trail_02
owner: "@GabrielKoenig"
version: 1
priority: should
type: functional
category: ""
depends_on: [req_req_trail_0012@1]
reviews: []
reviews_reason: "Forms and templates ask for the need, not for names or credentials."
source: "concept/concept.html#estimate"
statement: >
  The engine shall label a request review_privacy or review_security when one of the matching questions is answered yes.
rationale: >
  A label set from the answers means nobody has to remember to tag the review by hand.
acceptance:
  - "Unit: a request body with a yes to a privacy question gets the label review_privacy."
  - "Unit: a request body with six no answers gets neither label."
links:
  mockup: n/a
  spec: null
---

The labels are named review_privacy and review_security, as in labels.yml.
