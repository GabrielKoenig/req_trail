---
# One file per requirement, at projects/<project>/specs/<id>.md: how that requirement is built. The architecture owner
# approves it at G2, together with the feature concept, concepts/<feature id>.html.
id: spec_<project>_<nnnn>
title: <short name>
feature: feature_<project>_<nn>
version: 1                       # stays 1 until G2, then +1 per substantive change; an editorial change keeps it
covers: req_<project>_<nnnn>@1   # the one requirement it builds, pinned to the version it was written for
estimate_days: <best guess>
---

## Architecture

<The parts and how they work together.>

## Interfaces

<Commands, parameters, files and formats other parts rely on.>

## Decisions

<What was decided, and the alternative that was rejected, with the reason.>

## Libraries considered

<For every part this spec builds: the established open-source libraries or standards that could do the job, and why
one is used or none fits. Signs of an established library: a release in the last 12 months, wide use, an organisation
or more than one maintainer behind it, and a licence compatible with the code repo's. If nothing fits, say what was
searched.>

| Part | Library | Release, licence, use | Decision |
|---|---|---|---|
| <file or part> | <name> | <latest release>, <licence>, <downloads or users> | <used, or rejected: why> |

## Risks

<What could go wrong, and what limits it.>

## Review

<Only when a covered requirement carries reviews: the data flow, the least permissions needed, secrets, what is logged,
and how to roll back. The reviewer's answer and any conditions follow here; the owner checks the conditions at G3.>
