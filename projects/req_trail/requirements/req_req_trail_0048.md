---
id: req_req_trail_0048
title: Suspect links
feature: feature_req_trail_04
owner: "@GabrielKoenig"
version: 1
priority: must
type: functional
category: ""
depends_on: []
reviews: []
reviews_reason: "Reads repository files and pull request events; handles appear only as GitHub already shows them."
source: "concept/concept.html#estimate"
statement: >
  build_index shall mark a spec, code pull request, acceptance record or dependent requirement as suspect when it
  references an older version of a requirement.
rationale: >
  Anything made against an older version of a requirement may no longer fit it.
acceptance:
  - "Unit: a spec that covers req_recipe_box_0003@1 is suspect once req_recipe_box_0003 is at version 2."
  - "Unit: confirming it at req_recipe_box_0003@2 clears the mark."
  - "Unit: a merged code pull request with implements: req_recipe_box_0003@1 is suspect once req_recipe_box_0003 is at version 2."
  - "Unit: a requirement whose depends_on pins req_recipe_box_0003@1 is suspect once req_recipe_box_0003 is at version 2."
links:
  spec: null
---

Code pull requests become suspect, not tests: a test carries no version, while a code pull request pins one in its
implements line. A requirement that pins the older version in `depends_on` is suspect too.
