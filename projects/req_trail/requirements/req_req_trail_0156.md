---
id: req_req_trail_0156
title: Time and commit of the index
feature: feature_req_trail_06
owner: "@GabrielKoenig"
version: 1
priority: should
type: functional
category: ""
depends_on: [req_req_trail_0045@1]
reviews: []
reviews_reason: "Shows only what index.json holds; handles appear as GitHub already shows them."
source: "concept/architecture.html#risks"
statement: >
  The explorer shall show when the index it displays was built and from which commit.
rationale: >
  A reader has to see how current the statuses are, above all when the latest build failed.
acceptance:
  - "Unit: an index built at 06:00 UTC on 2026-11-19 from commit a1b2c3d shows that time and that commit on every view."
links:
  mockup: n/a
  spec: null
---

build_index writes the time and the commit into index.json; the spec at G2 names the fields.
