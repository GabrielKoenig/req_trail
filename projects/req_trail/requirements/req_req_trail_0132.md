---
id: req_req_trail_0132
title: AI review off by default
feature: feature_req_trail_18
owner: "@GabrielKoenig"
version: 1
priority: must
type: non_functional
category: "privacy"
depends_on: []
reviews: [privacy, security]
reviews_reason: "It sends requirement text to an outside provider and needs an API key (B13)."
source: "concept/concept.html#estimate"
statement: >
  The AI review shall run only when the project turns it on and provides an API key.
rationale: >
  An AI review sends requirement text to an outside provider, which each project has to agree to.
acceptance:
  - "Integration: with no setting the workflow skips the AI step."
  - "Integration: with the setting but no key it skips the step and says why."
links:
  mockup: n/a
  spec: null
---
