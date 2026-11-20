---
id: req_req_trail_0167
title: Each criterion names its test kind
feature: feature_req_trail_03
owner: "@GabrielKoenig"
version: 1
priority: must
type: functional
category: ""
depends_on: [req_req_trail_0030@1]
reviews: []
reviews_reason: "Reads repository files only; no personal data or credentials."
source: "concept/concept.html#gates"
statement: >
  validate shall fail when an acceptance criterion does not start with `Unit:`, `Integration:`, `Static:` or `Manual:`.
rationale: >
  The kind of test decides who checks a criterion and what evidence G3 needs.
acceptance:
  - "Unit: the criterion 'The PDF opens without a repair prompt.' fails and names the file."
  - "Unit: the criterion 'Manual: the PDF opens without a repair prompt.' passes."
links:
  mockup: n/a
  spec: null
---
