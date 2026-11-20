---
id: req_req_trail_0070
title: Fast for 1,000 requirements
feature: feature_req_trail_06
owner: "@GabrielKoenig"
version: 2
priority: should
type: non_functional
category: "performance"
depends_on: []
reviews: []
reviews_reason: "Shows only what index.json holds; handles appear as GitHub already shows them."
source: "concept/concept.html#estimate"
statement: >
  The explorer shall show the requirements list within 2 seconds for an index of 1,000 requirements, in headless
  Chromium on a GitHub-hosted runner.
rationale: >
  A list that loads slowly makes people ask a developer instead of looking it up.
acceptance:
  - "Integration: with a generated index of 1,000 requirements, the median of 5 loads in headless Chromium on a GitHub-hosted runner shows the list in under 2 seconds."
links:
  mockup: n/a
  spec: null
---

Version 2: measured in headless Chromium on a GitHub-hosted runner as the median of 5 loads, instead of on a
mid-range laptop, so that CI can repeat the measurement.
