---
id: req_req_trail_0161
title: Accessible explorer
feature: feature_req_trail_06
owner: "@GabrielKoenig"
version: 1
priority: should
type: non_functional
category: "usability"
depends_on: []
reviews: []
reviews_reason: "Concerns how the pages are built; no personal data, credentials or permissions."
source: "concept/architecture.html#risks"
statement: >
  The explorer shall meet WCAG 2.2 level AA.
rationale: >
  Requirements concern a whole team, including people who use a screen reader or only a keyboard.
acceptance:
  - "Integration: axe-core reports no violations on the list, detail, matrix and KPI views."
  - "Manual: every view can be used with the keyboard alone."
links:
  spec: null
---

axe-core finds only part of the WCAG failures, so the keyboard test is manual.

## Manual test

**Who:** the reviewer of the pull request that builds it, who did not write it.

1. Open the explorer preview of the pull request and put the mouse aside.
2. Open each view with Tab, Shift+Tab, Enter and the arrow keys, and use its filters and links.

**Passes when:** Every view, filter and link can be reached and used, and the focus can always be seen.
