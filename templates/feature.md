---
# One file per feature, at projects/<project>/features/<id>.md. Hats live in roles.yml, not here.
id: feature_<project>_<nn>
title: <short name>
project: <project>
goal: <what changes for the people who use it, in one sentence>
scope:
  - <what the feature includes>
non_scope:
  - <what it deliberately leaves out>
origin: ["#<request issue>"]   # the requests it comes from
metric:                        # the outcome the value review measures after a release
  name: <what is measured>
  unit: <unit, or "" for a count>
  baseline: <value before the feature>
  target: <value the feature aims for>
  direction: at_most           # at_most or at_least: which side of the target counts as reached
estimate: <person-days>        # the estimated effort of the feature, in person-days
target_release: "<release>"
---

<Background and risks: anything a reader needs that the fields above do not hold.>
