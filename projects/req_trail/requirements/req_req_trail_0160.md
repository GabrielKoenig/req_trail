---
id: req_req_trail_0160
title: Markdown without scripts
feature: feature_req_trail_06
owner: "@GabrielKoenig"
version: 1
priority: must
type: non_functional
category: "security"
depends_on: [req_req_trail_0064@2]
reviews: [security]
reviews_reason: "Requirement text comes from anyone who can open a pull request, and the explorer shows it to every reader."
source: "concept/architecture.html#risks"
statement: >
  The explorer shall render Markdown without running scripts or loading content from other origins.
rationale: >
  Text from a pull request must not run code in a reader's browser or tell another site who reads it.
acceptance:
  - "Unit: a note with a `<script>` element, an `onerror=` attribute and a `javascript:` link renders with all three removed."
  - "Unit: an image from another origin in a note is not loaded."
links:
  mockup: n/a
  spec: null
---

Reuse before building: markdown-it with `html: false` already escapes raw HTML and refuses `javascript:` links, so
the spec of work package 6 may need no separate sanitizer such as DOMPurify. Images from other origins still need a
renderer rule or a Content Security Policy. The spec records the choice in its section Libraries considered.
