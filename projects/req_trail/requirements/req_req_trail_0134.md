---
id: req_req_trail_0134
title: Live checks in the explorer
feature: feature_req_trail_18
owner: "@GabrielKoenig"
version: 1
priority: could
type: functional
category: ""
depends_on: [req_req_trail_0125@1]
reviews: []
reviews_reason: "Text rules run in CI; no data leaves GitHub."
source: "concept/concept.html#estimate"
statement: >
  The explorer shall run the same text rules while someone writes a proposed change.
rationale: >
  Wording problems are cheapest to fix while the text is still being written.
acceptance:
  - "Static: the explorer and text_check import the same rules module."
  - "Manual: typing 'fast' into the proposed text shows the vague-word warning."
links:
  mockup: null
  spec: null
---

## Manual test

**Who:** the reviewer of the pull request that builds it, who did not write it.

1. Open Propose change on a requirement in the explorer.
2. Type 'The export shall be fast.' into the proposed text.

**Passes when:** A warning names the vague word fast before the form is sent.
