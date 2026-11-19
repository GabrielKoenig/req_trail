---
id: req_req_trail_0150
title: Branch named after step, type and issue
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
  validate shall fail a pull request whose branch name is not `<step>/<type>/<name>` with a listed step and type
  and, if it closes an issue, a name starting with `issue<number>_` for that issue.
rationale: >
  The branch name then shows which review a change needs and which issue it implements, and the number cannot drift
  from the one on GitHub.
acceptance:
  - "Unit: a pull request from branch spec/feature/issue31_pdf_export with Closes #31 passes."
  - "Unit: with Closes #31, the branches spec/feature/issue32_pdf_export, feature/issue31_pdf_export, design/feature/issue31_pdf_export and spec/feature/issue-31-pdf-export each fail, and the message names the expected form <step>/<type>/issue31_<name>."
  - "Unit: a pull request that closes no issue passes from implementation/chore/update_ajv and fails from update_ajv."
links:
  mockup: n/a
  spec: null
---
