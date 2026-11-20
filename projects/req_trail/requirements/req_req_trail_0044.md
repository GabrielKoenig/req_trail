---
id: req_req_trail_0044
title: One-click setup on Windows
feature: feature_req_trail_03
owner: "@GabrielKoenig"
version: 1
priority: should
type: functional
category: ""
depends_on: []
reviews: []
reviews_reason: "Reads repository files only; no personal data or credentials."
source: "concept/concept.html#estimate"
statement: >
  A maintainer on Windows shall be able to install every prerequisite of the engine by starting one file.
rationale: >
  A maintainer should be able to start work without searching for the right versions of Node.js and Git.
acceptance:
  - "Manual: on a Windows PC without Node.js, starting install_prerequisites.cmd installs Node.js 22 or newer."
  - "Integration: install_prerequisites.cmd -CheckOnly then reports every prerequisite as ok and exits with code 0."
links:
  mockup: n/a
  spec: null
---

## Manual test

**Who:** a maintainer or the co-author, on a Windows PC without Node.js.

1. Use a Windows PC on which node --version fails.
2. Double-click install_prerequisites.cmd in the repo root and accept the prompts.
3. Open a new terminal and run node --version.

**Passes when:** The version is 22 or newer, and the script ended with Done.
