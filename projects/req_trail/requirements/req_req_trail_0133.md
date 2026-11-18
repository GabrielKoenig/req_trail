---
id: req_req_trail_0133
title: The AI review only comments
feature: feature_req_trail_18
owner: "@GabrielKoenig"
version: 1
priority: must
type: non_functional
category: "security"
depends_on: [req_req_trail_0132@1]
reviews: [security]
reviews_reason: "It runs with the repo token, so it must not be able to write."
source: "concept/concept.html#estimate"
statement: >
  The AI review shall post its findings as one pull request comment and change no file.
rationale: >
  The suggestions of an AI must stay suggestions that a person accepts or rejects.
acceptance:
  - "Integration: after the AI step the pull request has one new comment and no new commit."
links:
  mockup: n/a
  spec: null
---
