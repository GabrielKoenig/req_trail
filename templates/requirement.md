---
# One file per requirement, at projects/<project>/requirements/<id>.md. No status: the index derives it.
id: req_<project>_<nnnn>
title: <short name>
feature: feature_<project>_<nn>
owner: "@<handle>"            # answerable for this requirement; one of the project's requirements owners
version: 1                    # +1 for every substantive change; an editorial change keeps it
priority: must                # must, should or could
type: functional              # functional, non_functional or constraint
category: ""                  # only for non_functional: security, privacy, usability or performance
depends_on: []                # pinned, for example [req_<project>_<nnnn>@1]
reviews: []                   # privacy, security, both, or [] for none
reviews_reason: "<why no review is needed, or what makes one necessary>"
source: "#<request issue>"
statement: >                  # plain text: code in backticks is fine, no tables, images, lists or links
  The <system> shall <one testable behaviour>.
rationale: >                  # one sentence on why the requirement exists; it travels with it into an export
  <the problem it solves or the need behind it>
acceptance:
  - <one criterion that can be checked on its own>
links:
  mockup: null                # mockups/<name>.html, or n/a when none is needed
  spec: null                  # pinned, for example spec_<project>_<nnnn>@1
---

<Optional notes: examples, what changed in each version. Not part of the requirement and not exported.>
