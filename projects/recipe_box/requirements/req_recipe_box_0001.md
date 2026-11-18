---
id: req_recipe_box_0001
title: Export a collection as PDF
feature: feature_recipe_box_01
owner: "@owner1"
version: 1
priority: must
category: ""
depends_on: []
reviews: [privacy]
reviews_reason: "Exports whole collections, and recipes can hold the names and mail addresses of the people who shared them."
source: "#4"
statement: >
  The module shall export all recipes of a collection to a PDF file, one page per recipe.
acceptance:
  - A collection of 1,000 recipes exports to one PDF with one page per recipe.
  - The PDF opens without a repair prompt.
links:
  mockup: mockups/pdf_layout.html
  spec: spec_recipe_box_0001@1
---
