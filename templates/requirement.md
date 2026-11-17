---
# One file per requirement, at projects/<project>/requirements/<id>.md. No status: the index derives it.
id: req_<project>_<nnnn>
title: <short name>
feature: ft_<project>_<nn>
owner: "@<handle>"            # answerable for this requirement; one of the project's requirements owners
version: 1                    # +1 for every substantive change; an editorial change keeps it
priority: must                # must, should or could
category: ""                  # only for a non-functional requirement: security, privacy, usability, performance
depends_on: []                # pinned, for example [req_<project>_<nnnn>@1]
reviews: []                   # privacy, security, both, or [] for none
reviews_reason: "<why no review is needed, or what makes one necessary>"
source: "#<request issue>"
statement: >
  The <system> shall <one testable behaviour>.
acceptance:
  - <one criterion that can be checked on its own>
links:
  mockup: null                # mockups/<name>.html, or n/a when none is needed
  spec: null                  # pinned, for example spec_<project>_<nnnn>@1
---

<Optional notes: why, examples, what changed in each version. Not part of the requirement.>
