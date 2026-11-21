---
id: req_req_trail_0034
title: Plain-text statement
feature: feature_req_trail_03
owner: "@GabrielKoenig"
version: 1
priority: should
type: functional
category: ""
depends_on: [req_req_trail_0020@1]
reviews: []
reviews_reason: "Reads repository files only; no personal data or credentials."
source: "concept/concept.html#estimate"
statement: >
  validate shall fail when a statement holds a table, an image, a list or a link.
rationale: >
  ReqIF carries a statement as simple XHTML, so tables, images, lists and links would not survive an export.
acceptance:
  - "Unit: a statement with a Markdown link fails."
  - "Unit: a statement with code in backticks passes."
links:
  spec: null
---
