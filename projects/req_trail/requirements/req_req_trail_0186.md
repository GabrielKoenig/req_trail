---
id: req_req_trail_0186
title: Open pull requests per requirement
feature: feature_req_trail_04
owner: "@GabrielKoenig"
version: 1
priority: should
type: functional
category: ""
depends_on: [req_req_trail_0164@1, req_req_trail_0051@1, req_req_trail_0189@1]
reviews: []
reviews_reason: "Reads repository files and pull request events; handles appear only as GitHub already shows them."
source: "concept/concept.html#gates"
statement: >
  build_index shall list per requirement its open pull requests with gate and draft state: those from branches in the
  repo that change its file, a spec covering it or its acceptance record, and code pull requests that implement it.
rationale: >
  A status shows only what is merged, so without this list the work that waits in a pull request stays invisible.
acceptance:
  - "Unit: a pull request that is ready for review and changes req_recipe_box_0003 is listed for it with G1, and a draft one with G1 and draft."
  - "Unit: an open pull request with a spec that covers req_recipe_box_0003@2 is listed for it with G2, while its status stays Approved."
  - "Unit: an open pull request with the acceptance record of req_recipe_box_0003 is listed for it with G3."
  - "Unit: one pull request that adds req_recipe_box_0003 and req_recipe_box_0004 is listed for both."
  - "Unit: a pull request that deletes the file of req_recipe_box_0002 is listed for it with G1, and its status stays."
  - "Unit: a pull request from a fork that changes req_recipe_box_0003 is not listed."
  - "Unit: a code pull request whose description has implements: req_recipe_box_0003 is listed for it without a gate after the nightly run has read it."
  - "Unit: each entry in index.json holds the number, the gate, the draft state and the waiting time, and no title."
links:
  spec: null
---

The seven statuses keep describing what is merged on main; this list only adds what is still open. A gate pull request
may carry several requirements, so all of them list the same pull request. Code pull requests arrive with the nightly
run, because a code repo cannot start a run in this repo. The index holds no pull request titles, so the explorer
cannot show text it does not need (`req_req_trail_0187`).
