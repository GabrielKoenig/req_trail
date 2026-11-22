---
id: req_req_trail_0185
title: Work package plan from the feature files
feature: feature_req_trail_03
owner: "@GabrielKoenig"
version: 1
priority: should
type: functional
category: ""
depends_on: [req_req_trail_0183@1, req_req_trail_0152@1]
reviews: []
reviews_reason: "Reads repository files only; no personal data or credentials."
source: "concept/concept.html#estimate"
statement: >
  The work package table and the schedule of concept/concept.html shall take the title, scope, estimate and
  dependencies of each work package from the feature files in projects/req_trail.
rationale: >
  A list of work packages kept by hand on the page drifted from the feature files, and a planner that reads the
  files cannot drift.
acceptance:
  - "Static: the planner script of concept/concept.html holds no title, scope, estimate or dependency of a work package."
  - "Integration: npm run check_concept_data fails when planner_figures lacks a feature of projects/req_trail or names one that does not exist."
  - "Manual: in concept/concept.html, every work package in the table comes after the work packages it needs, and its stage is one more than the highest stage among them."
links:
  spec: null
---

The figures that the feature files do not hold stay on the page in `planner_figures`, keyed by feature ID: the kind
of work, the range of the estimate, the effort with an AI assistant and what a work package reuses.
`npm run check_concept_data` also fails when a range does not enclose the estimate of its feature.

## Manual test

**Who:** the reviewer of the pull request that changes the planner, who did not write it.

1. Open concept/concept.html and go to the section Estimate.
2. For three work packages, compare the column Needs with depends_on in their feature files.
3. Check that each of them comes after the work packages it needs and that its stage is one more than theirs.

**Passes when:** The three rows match their feature files, and no work package comes before one it needs.
