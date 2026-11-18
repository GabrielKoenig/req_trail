---
id: req_req_trail_0022
title: Broken YAML fails
feature: feature_req_trail_03
owner: "@GabrielKoenig"
version: 1
priority: must
type: functional
category: ""
depends_on: []
reviews: []
reviews_reason: "Reads repository files only; no personal data or credentials."
source: "concept/concept.html#estimate"
statement: >
  validate shall fail when the front matter of a file is not valid YAML, and name the file and the line.
rationale: >
  Broken front matter hides every other error, so it has to be reported first and precisely.
acceptance:
  - "Unit: front matter with an unclosed quote makes validate fail and print the file and the line."
links:
  mockup: n/a
  spec: null
---
