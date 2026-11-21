---
id: req_req_trail_0176
title: Product name in prose
feature: feature_req_trail_03
owner: "@GabrielKoenig"
version: 1
priority: should
type: constraint
category: ""
depends_on: []
reviews: []
reviews_reason: "Reads text files of the repository; no personal data or credentials."
source: "CLAUDE.md"
statement: >
  validate shall fail a pull request in which a Markdown or HTML file writes `req_trail` in prose, outside a code
  span, an HTML code element, a path or an ID.
rationale: >
  The product is called reqTrail in titles and text, and `req_trail` only where a tool needs a name, so that both
  stay readable and a search finds each one.
acceptance:
  - "Unit: a readme with the heading `# req_trail` fails and names the file and line."
  - "Unit: an HTML page with `<title>req_trail roles</title>` fails."
  - "Unit: `projects/req_trail`, `req_req_trail_0001`, `GabrielKoenig/req_trail` and `name: req_trail` pass."
  - "Unit: a sentence that names the repo in a code span, as in the repo `req_trail`, passes."
links:
  mockup: n/a
  spec: null
---

The rule is in `CLAUDE.md` under Naming. A YAML value that names the project, such as `project: req_trail`, is a
name, not prose, and passes.
