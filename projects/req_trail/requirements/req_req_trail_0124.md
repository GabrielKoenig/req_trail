---
id: req_req_trail_0124
title: Read-only token for private repos
feature: feature_req_trail_17
owner: "@GabrielKoenig"
version: 1
priority: must
type: non_functional
category: "security"
depends_on: []
reviews: [security]
reviews_reason: "The token reaches every private project repo."
source: "concept/concept.html#estimate"
statement: >
  The hub shall read private project repos only with a read-only GitHub App token.
rationale: >
  A token that can write to every project repo would open all of them if it leaked.
acceptance:
  - "Static: the hub workflow uses no secret other than the app's key."
  - "Manual: the app's repository permissions are all read-only."
links:
  spec: null
---

## Manual test

**Who:** the admin of the organisation.

1. Open the settings of the hub's GitHub App.
2. Read its repository permissions.

**Passes when:** Every permission is read-only or no access.
