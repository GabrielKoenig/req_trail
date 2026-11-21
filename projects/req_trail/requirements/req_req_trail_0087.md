---
id: req_req_trail_0087
title: Test tools per language
feature: feature_req_trail_11
owner: "@GabrielKoenig"
version: 1
priority: must
type: functional
category: ""
depends_on: []
reviews: []
reviews_reason: "Test reports hold test names and counts, no personal data."
source: "concept/concept.html#estimate"
statement: >
  The conventions shall state that the engine's tests run with node --test and that a code repo may use any
  test tool that writes JUnit XML.
rationale: >
  Code repos keep their own language and test tool, so reqTrail must not depend on any one of them.
acceptance:
  - "Static: the section Languages and test tools of conventions.md names node --test for the engine and JUnit XML for code repos."
links:
  spec: null
---
