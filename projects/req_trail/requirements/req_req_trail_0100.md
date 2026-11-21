---
id: req_req_trail_0100
title: A change goes through all gates again
feature: feature_req_trail_14
owner: "@GabrielKoenig"
version: 1
priority: must
type: functional
category: ""
depends_on: []
reviews: []
reviews_reason: "Runs on the engine's own repo; pull requests show handles as GitHub already does."
source: "concept/concept.html#estimate"
statement: >
  A substantive change to a Verified requirement of reqTrail shall pass G1, G2 and G3 again and end Verified
  at its new version.
rationale: >
  A change after verification is the hardest case for the gates, so the pilot has to go through one.
acceptance:
  - "Manual: the requirement moves from Verified to Approved, Specified, Implemented and Verified again, and its spec shows as suspect until the spec's new version is merged."
links:
  mockup: n/a
  spec: null
---

## Manual test

**Who:** the requirements owner makes the change; the co-author reviews each gate and checks the result.

1. In the explorer, pick a Verified requirement of the project `req_trail` and press Propose change.
2. Write a substantive change, mark it substantive and send the form.
3. Review and merge the pull request that the workflow opens (G1).
4. In the explorer, check that the requirement shows Approved at version 2 and that its spec shows as suspect.
5. Change the spec to cover version 2 and merge it (G2); check that the requirement shows Specified and the suspect mark is gone.
6. Adapt the test, merge the code with an implements line for version 2, then open and merge the acceptance pull request (G3).

**Passes when:** The status runs Verified, Approved, Specified, Implemented, Verified; the suspect mark shows in step 4 and is gone after step 5; the changelog lists both versions.
