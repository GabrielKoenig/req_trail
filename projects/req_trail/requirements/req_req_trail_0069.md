---
id: req_req_trail_0069
title: Phone width
feature: feature_req_trail_06
owner: "@GabrielKoenig"
version: 1
priority: should
type: non_functional
category: "usability"
depends_on: []
reviews: []
reviews_reason: "Shows only what index.json holds; handles appear as GitHub already shows them."
source: "concept/concept.html#estimate"
statement: >
  The explorer shall work at a width of 375 pixels without horizontal page scrolling.
rationale: >
  Reviewers often check a status on a phone between meetings.
acceptance:
  - "Manual: at 375 pixels every view is readable and the page does not scroll sideways."
links:
  mockup: n/a
  spec: null
---

## Manual test

**Who:** the reviewer of the pull request that builds it, who did not write it.

1. Open the explorer in a browser.
2. Set the window or the device emulation to 375 pixels wide.
3. Open each view in turn and scroll through it.

**Passes when:** Every view is readable, and the page itself never scrolls sideways; a wide table may scroll inside its own box.
