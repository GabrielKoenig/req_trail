---
# One file per requirement, at projects/<project>/requirements/<id>.md. No status: the index derives it.
id: req_<project>_<nnnn>
title: <short name>
feature: feature_<project>_<nn>
owner: "@<handle>"            # answerable for this requirement; one of the project's requirements owners
version: 1                    # stays 1 until G1, then +1 per substantive change; an editorial change keeps it
priority: must                # must, should or could
type: functional              # functional, non_functional or constraint
category: ""                  # only for non_functional: security, privacy, usability or performance
depends_on: []                # pinned, for example [req_<project>_<nnnn>@1]
reviews: []                   # privacy, security, both, or [] for none
reviews_reason: "<why no review is needed, or what makes one necessary>"
source: "#<request issue>"    # #<issue>, <owner>/<repo>#<issue>, or a path in the repo with an optional #<anchor>
statement: >                  # plain text of at most 80 words: code in backticks is fine, no tables, images, lists or links
  The <system> shall <one testable behaviour>.
rationale: >                  # one sentence on why the requirement exists; it travels with it into an export
  <the problem it solves or the need behind it>
acceptance:                   # each starts with its test kind: Unit, Integration, Smoke, Static or Manual
  - "Unit: <one criterion that can be checked on its own>"
links:
  mockup: null                # mockups/<name>.html, or n/a when none is needed
  spec: null                  # pinned, for example spec_<project>_<nnnn>@1
---

<Optional notes: examples, what changed in each version. Not part of the requirement and not exported. A Manual
criterion needs a section ## Manual test: who tests it, the steps, and when it passes.>
