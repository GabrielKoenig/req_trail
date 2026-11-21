---
id: req_req_trail_0151
title: Code names in the style of their language
feature: feature_req_trail_03
owner: "@GabrielKoenig"
version: 1
priority: must
type: constraint
category: ""
depends_on: [req_req_trail_0043@1]
reviews: []
reviews_reason: "Reads source files only; no personal data or credentials."
source: "CLAUDE.md"
statement: >
  The code of the engine shall name variables, functions and parameters in the style of its language: camelCase in
  JavaScript, and Verb-Noun functions with PascalCase parameters in PowerShell.
rationale: >
  Code in its language's own style reads like the libraries it calls, and the usual linters check it without rules of
  our own.
acceptance:
  - "Static: ESLint with the rule camelcase, property names excepted, passes on tools/ and tests/."
  - "Static: PSScriptAnalyzer gives no PSUseApprovedVerbs finding on setup/, and every function name there has the form Verb-Noun."
links:
  spec: null
---
