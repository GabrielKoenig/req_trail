---
id: req_req_trail_0127
title: Two behaviours in one sentence
feature: feature_req_trail_18
owner: "@GabrielKoenig"
version: 1
priority: could
type: functional
category: ""
depends_on: []
reviews: []
reviews_reason: "Text rules run in CI; no data leaves GitHub."
source: "concept/concept.html#estimate"
statement: >
  text_check shall warn when a statement joins two verbs with 'and' or 'or' after 'shall'.
rationale: >
  Two behaviours in one statement cannot pass or fail separately.
acceptance:
  - "Unit: 'The tool shall export and print the list.' warns."
links:
  spec: null
---
