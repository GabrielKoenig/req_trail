---
id: req_req_trail_0173
title: Statements have a hard limit
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
  The requirement schema shall reject a statement longer than 80 words.
rationale: >
  A statement that long cannot be one testable sentence, and a warning at 40 words is easy to ignore.
acceptance:
  - "Unit: a statement of 81 words fails the schema, and one of 80 words passes."
links:
  mockup: n/a
  spec: null
---

text_check still warns from 41 words (req_req_trail_0128). JSON Schema counts characters, so the word limit
needs a pattern or a check in the requirement class.
