---
id: ft_rb_01
title: PDF export
project: rb
goal: People can print a recipe collection, or a saved selection of it, as a readable PDF.
scope:
  - Export a collection or a saved selection as PDF
  - Readable ingredient lists
  - Messages in German and English
non_scope:
  - Word export
  - Page templates
  - Scheduled exports
origin: ["#4", "#12", "#18"]
metric:
  name: Export time for 1,000 recipes
  unit: s
  baseline: 25
  target: 10
  direction: at_most
target_release: "0.5"
---

Risks: recipes can hold personal data, such as the names of the people who shared them, and very long ingredient
lists can break the page layout.
