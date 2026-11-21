---
id: req_req_trail_0106
title: Steps for each task
feature: feature_req_trail_15
owner: "@GabrielKoenig"
version: 1
priority: should
type: functional
category: ""
depends_on: []
reviews: []
reviews_reason: "Documentation only."
source: "concept/concept.html#estimate"
statement: >
  The runbook shall give step-by-step instructions for adding a project, adding a requirement, changing a
  requirement, using a baseline and running the intake.
rationale: >
  A new team should be able to start without a maintainer at hand.
acceptance:
  - "Manual: a person new to the engine adds a project and a requirement on a test repo with the runbook alone."
links:
  spec: null
---

A workflow sets the baselines (req_req_trail_0171), so the runbook explains how to use one, not how to set it.

## Manual test

**Who:** a person who has not worked on reqTrail, for example the co-author.

1. Take an empty test repo and the runbook.
2. Add a project and one requirement by following only the runbook.
3. Write down every step that needed a guess or help.

**Passes when:** The requirement pull request passes validate, and no step needed help.
