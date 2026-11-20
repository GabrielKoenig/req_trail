---
id: req_req_trail_0155
title: A changed statement needs a new version
feature: feature_req_trail_03
owner: "@GabrielKoenig"
version: 1
priority: must
type: functional
category: ""
depends_on: []
reviews: []
reviews_reason: "Reads the files and the labels of the pull request; no personal data or credentials."
source: "concept/architecture.html#risks"
statement: >
  validate shall fail a pull request that changes the statement or an acceptance criterion of a requirement
  without raising its version, unless the pull request carries the label `editorial`.
rationale: >
  A substantive change that keeps its version would leave every spec, code pull request and acceptance record
  pinned to it looking current.
acceptance:
  - "Unit: a pull request that changes the statement of req_recipe_box_0003 and keeps version 2 fails and names the file."
  - "Unit: the same pull request with the label editorial passes."
  - "Unit: a pull request that changes an acceptance criterion of req_recipe_box_0003 and raises it to version 3 passes."
links:
  mockup: n/a
  spec: null
---

The label `editorial` joins `labels.yml` when work package 2 creates it. The reviewer at G1 checks that a change
with this label keeps the meaning.
