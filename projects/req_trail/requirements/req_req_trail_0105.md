---
id: req_req_trail_0105
title: Usable without help
feature: feature_req_trail_14
owner: "@GabrielKoenig"
version: 1
priority: should
type: non_functional
category: "usability"
depends_on: []
reviews: []
reviews_reason: "Runs on the engine's own repo; pull requests show handles as GitHub already does."
source: "concept/concept.html#estimate"
statement: >
  A person new to reqTrail shall review a requirement pull request and find a requirement's status in the
  explorer without help.
rationale: >
  If a newcomer needs help with the basic tasks, other teams will not adopt the process.
acceptance:
  - "Manual: the co-author does both tasks without asking the maintainers and notes every unclear step as a finding."
links:
  mockup: n/a
  spec: null
---

## Manual test

**Who:** the co-author, in the first week of the pilot.

1. Open a requirement pull request of reqTrail from the GitHub notification.
2. Read the changed files and the check results, then approve or ask for changes.
3. Open the explorer and find the status of a requirement that the maintainers name.
4. Write down every step that needed help or a guess.

**Passes when:** Both tasks are done without help, and every unclear step is a finding in the tracking issue.
