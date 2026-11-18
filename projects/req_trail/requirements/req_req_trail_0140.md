---
id: req_req_trail_0140
title: One class per object type
feature: feature_req_trail_03
owner: "@GabrielKoenig"
version: 1
priority: must
type: functional
category: ""
depends_on: [req_req_trail_0020@1]
reviews: []
reviews_reason: "Reads repository files only; no personal data or credentials."
source: "concept/concept.html#estimate"
statement: >
  The engine shall load every project file only through the class of its object type, which rejects data that
  the schema of the project's format version does not allow.
rationale: >
  Data that never becomes an object cannot reach a check, a view or an export in a broken form.
acceptance:
  - "Unit: loading a requirement with priority: urgent throws an error that names the file, the field and the allowed values."
  - "Unit: a file with a key that its schema does not define, such as status, is rejected."
  - "Unit: a property of a loaded object cannot be changed."
  - "Static: only tools/model.js parses YAML or front matter."
links:
  mockup: n/a
  spec: null
---
