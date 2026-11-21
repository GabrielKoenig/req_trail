---
id: req_req_trail_0171
title: Baseline tag at each spec merge
feature: feature_req_trail_05
owner: "@GabrielKoenig"
version: 1
priority: should
type: functional
category: ""
depends_on: []
reviews: []
reviews_reason: "Writes tags with the repo token; no personal data. Its permissions follow req_req_trail_0159."
source: "concept/concept.html#process"
statement: >
  A workflow shall set the tag `<project>_baseline_<n>` on the merge commit of every spec pull request, with n one
  higher than the project's last baseline.
rationale: >
  A baseline set by hand is easily forgotten, and without it nobody can say what was agreed at G2.
acceptance:
  - "Integration: merging a spec pull request of recipe_box after recipe_box_baseline_3 sets recipe_box_baseline_4 on the merge commit."
  - "Integration: a merge that changes no spec sets no tag."
links:
  spec: null
---
