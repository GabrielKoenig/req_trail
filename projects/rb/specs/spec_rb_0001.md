---
id: spec_rb_0001
title: PDF export pipeline
feature: ft_rb_01
version: 1
covers: [req_rb_0001@1]
mockup: mockups/pdf_layout.html
estimate_days: 4
---

## Architecture

`export_recipe_pdf` reads the recipes of a collection, resolves a saved selection with `resolve_recipe_selection`,
renders one HTML page per recipe with `convert_to_recipe_print_html` and prints the result to PDF. Messages come from
`resources/<lang>/strings.psd1`.

## Interfaces

`export_recipe_pdf -collection <name> [-selection <name>] -path <file.pdf>` writes one PDF and returns its path.

## Decisions

Print HTML to PDF with the system's print engine. Rejected: a PDF library, because it adds a dependency and a licence
to check for a layout that HTML already handles.

## Risks

Very long ingredient lists may split across pages. Column widths that follow the content are left to a later
requirement.

## Review

Privacy, because `req_rb_0001` carries it. Data flow: recipes are read and written on the same computer; nothing is
uploaded. Least permissions: read access to the collection, write access to the target folder. Secrets: none. Logging:
the number of recipes and the duration, no recipe content. Roll back: delete the PDF.

Answer of `@privacy1`: no objection, on one condition: logs hold no recipe notes.
