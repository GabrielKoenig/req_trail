---
id: req_req_trail_0112
title: Evidence stored in the record
feature: feature_req_trail_16
owner: "@GabrielKoenig"
version: 1
priority: must
type: functional
category: ""
depends_on: [req_req_trail_0020@1]
reviews: []
reviews_reason: "Checks approvals that GitHub already records; stores no new personal data."
source: "concept/concept.html#estimate"
statement: >
  An acceptance record shall hold its evidence in the file: run ID, commit, test counts and manual checks with
  their result.
rationale: >
  A link to a CI run expires, while evidence stored in the file stays with the record.
acceptance:
  - "Unit: the acceptance schema fails a record without a commit."
  - "Unit: the acceptance schema fails a record without test counts or manual checks."
links:
  spec: null
---
