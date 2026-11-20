---
id: req_req_trail_0175
title: Version 1 until G1
feature: feature_req_trail_03
owner: "@GabrielKoenig"
version: 1
priority: must
type: functional
category: ""
depends_on: [req_req_trail_0163@1]
reviews: []
reviews_reason: "Reads the files of the pull request and of main; no personal data or credentials."
source: "conventions.md#versions-and-pinned-references"
statement: >
  validate shall fail a pull request in which a requirement that has not passed G1 has a version other than 1, or
  a requirement that has passed G1 rises by more than one version.
rationale: >
  Before G1 nothing is specified, built or tested against a requirement, so a new version there would only mark
  links suspect that nobody relies on.
acceptance:
  - "Unit: a pull request that adds a requirement at version 2 fails and names the file."
  - "Unit: a pull request that raises a requirement that has not passed G1 from version 1 to 2 fails."
  - "Unit: a pull request that raises req_recipe_box_0003 from version 2 to 4 fails."
  - "Unit: a pull request that raises req_recipe_box_0003 from version 2 to 3 passes."
links:
  mockup: n/a
  spec: null
---

A requirement has passed G1 when its file reached main in a pull request merged after the commit that `gates_after`
in `project.yml` names (req_req_trail_0163). req_req_trail_0155 covers the other direction: after G1, a changed
statement or criterion needs a new version or the label `editorial`.
