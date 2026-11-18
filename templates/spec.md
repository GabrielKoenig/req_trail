---
# One file per spec, at projects/<project>/specs/<id>.md. The architecture owner approves it at G2.
id: spec_<project>_<nnnn>
title: <short name>
feature: feature_<project>_<nn>
version: 1                       # +1 for every substantive change
covers: [req_<project>_<nnnn>@1] # every requirement it builds, pinned to the version it was written for
mockup: null                     # mockups/<name>.html, or n/a
estimate_days: <best guess>
---

## Architecture

<The parts and how they work together.>

## Interfaces

<Commands, parameters, files and formats other parts rely on.>

## Decisions

<What was decided, and the alternative that was rejected, with the reason.>

## Risks

<What could go wrong, and what limits it.>

## Review

<Only when a covered requirement carries reviews: the data flow, the least permissions needed, secrets, what is logged,
and how to roll back. The reviewer's answer and any conditions follow here; the owner checks the conditions at G3.>
