---
id: req_req_trail_0155
title: A changed requirement or spec needs a new version
feature: feature_req_trail_04
owner: "@GabrielKoenig"
version: 1
priority: must
type: functional
category: ""
depends_on: [req_req_trail_0163@1]
reviews: []
reviews_reason: "Reads the files and the labels of the pull request; no personal data or credentials."
source: "concept/architecture.html#risks"
statement: >
  validate shall fail a pull request that changes the statement or a criterion of a requirement past G1, or the
  text of a spec past G2, without a new version, unless it is labelled `editorial`.
rationale: >
  A substantive change that keeps its version would leave every spec, code pull request and acceptance record
  pinned to it looking current.
acceptance:
  - "Unit: a pull request that changes the statement of req_recipe_box_0003 and keeps version 2 fails and names the file."
  - "Unit: the same pull request with the label editorial passes."
  - "Unit: a pull request that changes an acceptance criterion of req_recipe_box_0003 and raises it to version 3 passes."
  - "Unit: a pull request that changes the statement of a requirement that has not passed G1 and keeps version 1 passes without the label editorial."
  - "Unit: a pull request that changes the text of spec_recipe_box_0002 and keeps version 2 fails and names the file."
  - "Unit: a pull request that changes the text of a spec that has not passed G2 and keeps version 1 passes without the label editorial."
links:
  spec: null
---

The label `editorial` joins `labels.yml` when work package 2 creates it. The reviewer at G1 or G2 checks that a
change with this label keeps the meaning.

It is built in work package 4, because whether a requirement has passed G1 comes from build_index
(req_req_trail_0163).
