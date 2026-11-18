---
id: req_req_trail_0143
title: Released formats are frozen
feature: feature_req_trail_17
owner: "@GabrielKoenig"
version: 1
priority: must
type: functional
category: ""
depends_on: []
reviews: []
reviews_reason: "Release and workflow setup; reads nothing beyond the repos that call it."
source: "concept/concept.html#estimate"
statement: >
  A test shall fail when a schema of a released format version differs from the checksum recorded at its
  release.
rationale: >
  Files written in a released format must stay readable as they are, so its definition can never change in
  place.
acceptance:
  - "Unit: changing one character in a schema of a released format makes the test fail and name the file."
  - "Unit: a schema of the format that is not released yet can change without failing the test."
links:
  mockup: n/a
  spec: null
---
