---
id: req_req_trail_0081
title: KPI view
feature: feature_req_trail_09
owner: "@GabrielKoenig"
version: 1
priority: should
type: functional
category: ""
depends_on: [req_req_trail_0080@1]
reviews: []
reviews_reason: "KPI values are totals without personal data."
source: "concept/concept.html#estimate"
statement: >
  The explorer shall show each feature's metric with baseline, target, latest value and whether the target is
  reached.
rationale: >
  A sponsor asking whether a feature paid off should find the answer without reading YAML.
acceptance:
  - "Manual: the KPI view of the example data shows feature_recipe_box_01 with all four values."
links:
  spec: null
---

## Manual test

**Who:** the reviewer of the pull request that builds it, who did not write it.

1. Open the KPI view with the example data.
2. Find feature_recipe_box_01.
3. Compare it with projects/recipe_box/metrics.yml and the feature file.

**Passes when:** Baseline, target, the latest value and reached or not reached are shown and match the two files.
