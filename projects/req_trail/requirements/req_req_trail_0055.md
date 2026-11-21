---
id: req_req_trail_0055
title: One gatekeeper per path
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
  CODEOWNERS shall name the gatekeeper hat for requirements, feature concepts, specs, acceptance records, features
  and metrics.yml.
rationale: >
  Each kind of file has its own gate, so each needs its own gatekeeper.
acceptance:
  - "Integration: a pull request that changes a requirement requests a review from the Principal Engineer hat."
  - "Integration: a pull request that changes a spec requests a review from the architecture owner hat."
  - "Integration: a pull request that changes a feature concept requests a review from the architecture owner hat."
links:
  spec: null
---
