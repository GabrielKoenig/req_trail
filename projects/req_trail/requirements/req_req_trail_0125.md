---
id: req_req_trail_0125
title: Vague words
feature: feature_req_trail_18
owner: "@GabrielKoenig"
version: 1
priority: should
type: functional
category: ""
depends_on: []
reviews: []
reviews_reason: "Text rules run in CI; no data leaves GitHub."
source: "concept/concept.html#estimate"
statement: >
  text_check shall warn when a statement or acceptance criterion contains a word from its list of vague words.
rationale: >
  Words such as fast or easy cannot be tested, and reviewers spend their time pointing them out.
acceptance:
  - "Unit: 'The export shall be fast.' warns on fast."
  - "Unit: a word that a project adds to its own list also warns."
links:
  mockup: n/a
  spec: null
---
