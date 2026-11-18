---
id: req_req_trail_0059
title: Reviewer for tagged specs
feature: feature_req_trail_05
owner: "@GabrielKoenig"
version: 1
priority: must
type: functional
category: ""
depends_on: []
reviews: []
reviews_reason: "Configures GitHub's own review rules; stores no new data."
source: "concept/concept.html#estimate"
statement: >
  The engine shall request the data protection officer or the security reviewer on a spec pull request that
  covers a requirement tagged privacy or security.
rationale: >
  A privacy or security review is easy to forget when nobody is asked for it automatically.
acceptance:
  - "Integration: a spec that covers a requirement with reviews: [privacy] requests the data protection officer hat."
  - "Integration: a spec that covers only untagged requirements requests neither."
links:
  mockup: n/a
  spec: null
---
