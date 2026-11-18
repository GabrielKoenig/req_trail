---
id: req_req_trail_0032
title: Category only where it fits
feature: feature_req_trail_03
owner: "@GabrielKoenig"
version: 1
priority: should
type: functional
category: ""
depends_on: [req_req_trail_0020@1, req_req_trail_0031@1]
reviews: []
reviews_reason: "Reads repository files only; no personal data or credentials."
source: "concept/concept.html#estimate"
statement: >
  validate shall fail when a non_functional requirement has no category from the allowed list, or another
  requirement has a category.
rationale: >
  Only a non-functional requirement has a quality category, and a fixed list keeps it filterable and
  exportable.
acceptance:
  - "Unit: a non_functional requirement with category: speed fails and lists the allowed categories."
  - "Unit: a functional requirement with category: security fails."
  - "Unit: a functional requirement with an empty category passes."
links:
  mockup: n/a
  spec: null
---
