---
id: req_req_trail_0028
title: A review decision with a reason
feature: feature_req_trail_03
owner: "@GabrielKoenig"
version: 1
priority: must
type: functional
category: ""
depends_on: []
reviews: []
reviews_reason: "Reads repository files only; no personal data or credentials."
source: "concept/concept.html#estimate"
statement: >
  validate shall fail when the reviews_reason of a requirement is empty.
rationale: >
  A review decision without a reason cannot be checked later, neither the yes nor the no.
acceptance:
  - "Unit: reviews: [] with an empty reviews_reason fails."
  - "Unit: reviews: [privacy] with a reason passes."
links:
  spec: null
---
