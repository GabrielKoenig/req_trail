---
id: feature_req_trail_17
title: "Modular setup: engine, project template, hub"
project: req_trail
goal: >
  A team sets up a project repo in an hour and gets engine fixes by changing one version number.
scope:
  - Engine releases with version tags
  - "Format versions: frozen once released, one migration per change, migrate as a pull request"
  - Reusable workflows
  - Project template repo
  - Optional hub
non_scope:
  - Moving issues between repos by hand
origin: ["concept/concept.html#estimate"]
metric:
  name: Hours to set up a new project repo
  unit: "h"
  baseline: 8
  target: 1
  direction: at_most
target_release: "1.0"
---

Built in work package 17. It holds 14 requirements. The baseline is an estimate; the value review after
the release measures it.
