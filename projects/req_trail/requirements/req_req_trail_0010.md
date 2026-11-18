---
id: req_req_trail_0010
title: Rules for statement and rationale
feature: feature_req_trail_01
owner: "@GabrielKoenig"
version: 1
priority: must
type: functional
category: ""
depends_on: []
reviews: []
reviews_reason: "Defines file formats only; no personal data, credentials or permissions."
source: "concept/concept.html#estimate"
statement: >
  The conventions shall state that a statement is plain text and that a rationale says in one sentence why the
  requirement exists.
rationale: >
  A plain-text statement exports cleanly, and a rationale keeps the reason that today only the request issue
  holds.
acceptance:
  - "Manual: the reviewer finds both rules in the section Text fields of conventions.md."
links:
  mockup: n/a
  spec: null
---

## Manual test

**Who:** the reviewer of the pull request that builds it, who did not write it.

1. Open conventions.md.
2. Read the section Text fields.

**Passes when:** One rule says the statement is plain text without tables, images, lists or links, and one says the rationale is one sentence on why the requirement exists.
