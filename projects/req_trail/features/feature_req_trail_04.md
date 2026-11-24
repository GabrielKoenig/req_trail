---
id: feature_req_trail_04
title: Index builder and matrix
project: req_trail
goal: >
  Anyone can see each requirement's status, links and history without asking a developer.
scope:
  - index.json
  - Status derived from GitHub events
  - Trace matrix and suspect links
  - Changelog
  - Waiting time per gate
  - Open pull requests per requirement
  - Builds on merges, nightly and on pull request events
non_scope:
  - A database such as index.sqlite (B8)
  - Test evidence (feature_req_trail_11)
origin: ["concept/concept.html#estimate"]
metric:
  name: Status questions sent to developers
  unit: "per month"
  baseline: 10
  target: 2
  direction: at_most
estimate: 3.75
depends_on:
  - feature_req_trail_03
target_release: "1.0"
---

Built in work package 4. It holds 18 requirements. The baseline is an estimate; the value review after
the release measures it.
