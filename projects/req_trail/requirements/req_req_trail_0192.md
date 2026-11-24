---
id: req_req_trail_0192
title: Warning on parallel pull requests
feature: feature_req_trail_18
owner: "@GabrielKoenig"
version: 1
priority: should
type: functional
category: ""
depends_on: [req_req_trail_0186@1, req_req_trail_0130@1]
reviews: []
reviews_reason: "Reads index.json, which shows only what GitHub already shows."
source: "concept/concept.html#gates"
statement: >
  text_check shall warn when another open pull request changes the same requirement file, or when a spec pull request
  covers a requirement that has an open change pull request, reading the open pull requests from the published
  index.json.
rationale: >
  Two changes to one requirement at the same time make one of them stale, and a spec reviewed against the old version
  turns suspect at the next merge.
acceptance:
  - "Unit: two open pull requests that both change req_recipe_box_0003 each get a warning that names the other, and both checks pass."
  - "Unit: an open spec pull request that covers req_recipe_box_0003@2 gets a warning while a pull request that changes req_recipe_box_0003 is open."
  - "Unit: when index.json cannot be read, the check passes and says that the comparison was skipped."
links:
  spec: null
---

Only `build_index` decides which pull request touches which requirement (`req_req_trail_0186`), so `text_check` reads
that list instead of working it out again.
