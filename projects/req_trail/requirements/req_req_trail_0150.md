---
id: req_req_trail_0150
title: Branch named after phase, project, feature and issue
feature: feature_req_trail_05
owner: "@GabrielKoenig"
version: 1
priority: should
type: constraint
category: ""
depends_on: []
reviews: []
reviews_reason: "Reads the branch name and the pull request text only; no personal data or credentials."
source: "CLAUDE.md"
statement: >
  validate shall fail a pull request whose branch lacks a listed tool prefix and is not
  `<phase>/<project>/[<feature>_]<topic>` with a listed phase, an existing project, an optional feature of that
  project and, if it closes an issue, the topic `issue<number>`.
rationale: >
  The branch list then shows where each change stands in the process, what it belongs to and which issue it
  implements, and the number cannot drift from the one on GitHub.
acceptance:
  - "Unit: a pull request from branch idea/recipe_box/feature_recipe_box_01_issue31 with Closes #31 passes."
  - "Unit: with Closes #31, the branches idea/recipe_box/feature_recipe_box_01_issue32, requirement/recipe_box/feature_recipe_box_01_issue31, idea/bike_rental/feature_recipe_box_01_issue31, idea/recipe_box/feature_recipe_box_09_issue31 and idea/feature/issue31_pdf_export each fail, and the message names the expected form <phase>/<project>/[<feature>_]issue31."
  - "Unit: a pull request that closes no issue passes from concept/req_trail/branch_names and fails from branch_names."
  - "Unit: with Closes #31, idea/recipe_box/issue31 passes, and idea/recipe_box/feature_pdf_issue31 fails because a topic may not start with feature_."
  - "Unit: a pull request from dependabot/npm_and_yarn/yaml-2.9.2 passes while dependabot/ is a listed tool prefix, and fails when it is not."
links:
  mockup: n/a
  spec: null
---

The levels are the phase (`idea`, `concept`, `dev`, `release` or `change_request`), the project and an optional
feature. A branch is `<phase>/<project>/<topic>`, or `<phase>/<project>/<feature>_<topic>` when the change belongs to
a feature. A feature is recognized by its ID form `feature_<project>_<nn>`, so a topic may not start with `feature_`.
A branch that a tool creates, such as `dependabot/`, passes when its prefix is listed, because the tool cannot follow
the scheme. The spec at G2 decides where the lists of phases and tool prefixes live.
