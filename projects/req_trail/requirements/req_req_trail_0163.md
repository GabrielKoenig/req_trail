---
id: req_req_trail_0163
title: Merges before the gates count as Draft
feature: feature_req_trail_04
owner: "@GabrielKoenig"
version: 1
priority: must
type: functional
category: ""
depends_on: [req_req_trail_0046@2]
reviews: []
reviews_reason: "Reads repository files and pull request events; handles appear only as GitHub already shows them."
source: "concept/concept.html#gates"
statement: >
  build_index shall count a requirement as Draft when every merge that changed it lies at or before the commit
  named in `gates_after` of its project.yml.
rationale: >
  Requirements that reached main before the gates applied have passed no gate, so they must not show as Approved.
acceptance:
  - "Unit: with gates_after at commit c2, a requirement merged only in c1 shows Draft."
  - "Unit: a pull request merged after c2 that changes that requirement makes it Approved."
  - "Unit: in a project without gates_after, every merge counts."
links:
  mockup: n/a
  spec: null
---

req_trail sets `gates_after` to the last commit that reached main without a pull request.
