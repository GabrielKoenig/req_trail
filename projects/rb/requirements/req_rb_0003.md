---
id: req_rb_0003
title: Readable ingredient lists
feature: ft_rb_01
owner: "@owner1"
version: 2
priority: should
category: ""
depends_on: [req_rb_0001@1]
reviews: [privacy]
reviews_reason: "Notes can hold the names of the people who shared a recipe."
source: "#18"
statement: >
  The PDF shall show amounts, units, links and notes as readable text.
acceptance:
  - An amount shows with its unit.
  - A linked recipe shows its title.
  - Only http and https links stay clickable.
links:
  mockup: n/a
  spec: spec_rb_0002@2
---

Version 2 limited clickable links to http and https.
