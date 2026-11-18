---
id: req_req_trail_0082
title: A post becomes a request
feature: feature_req_trail_10
owner: "@GabrielKoenig"
version: 1
priority: should
type: functional
category: ""
depends_on: []
reviews: [privacy]
reviews_reason: "Forum posts carry names; only the link and an excerpt without names are kept."
source: "concept/concept.html#estimate"
statement: >
  A forum post marked #request shall become a request issue that holds the post link and a short excerpt
  without names.
rationale: >
  A need posted in the forum should reach the request list without being retyped and without exposing who
  posted it.
acceptance:
  - "Integration: a test post with #request creates a request issue within 15 minutes (B2)."
  - "Manual: the issue holds the link and an excerpt, and no name."
links:
  mockup: n/a
  spec: null
---

## Manual test

**Who:** the reviewer of the pull request that builds it, who did not write it.

1. Open the request issue that the test post created.
2. Compare its title and text with the post.

**Passes when:** The issue holds the post link and an excerpt, and neither the title nor the excerpt holds a name.
