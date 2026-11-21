---
id: req_req_trail_0060
title: Tagged specs wait for that review
feature: feature_req_trail_05
owner: "@GabrielKoenig"
version: 1
priority: must
type: functional
category: ""
depends_on: [req_req_trail_0059@1]
reviews: []
reviews_reason: "Configures GitHub's own review rules; stores no new data."
source: "concept/concept.html#estimate"
statement: >
  The review check shall pass a spec pull request that covers a tagged requirement only after the requested
  reviewer has approved it.
rationale: >
  A requested review that is not required can be skipped by merging before it arrives.
acceptance:
  - "Integration: the check fails until the data protection officer approves, then passes."
  - "Integration: the check passes at once when no covered requirement is tagged (B3)."
links:
  spec: null
---
