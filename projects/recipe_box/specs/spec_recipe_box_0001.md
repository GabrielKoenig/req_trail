---
id: spec_recipe_box_0001
title: PDF export pipeline
feature: feature_recipe_box_01
version: 1
covers: [req_recipe_box_0001@1]
mockup: mockups/pdf_layout.html
estimate_days: 4
---

## Architecture

`Export-RecipePdf` reads the recipes of a collection, resolves a saved selection with `Resolve-RecipeSelection`,
renders one HTML page per recipe with `ConvertTo-RecipePrintHtml` and prints the result to PDF. Messages come from
`resources/<lang>/strings.psd1`.

## Interfaces

`Export-RecipePdf -Collection <name> [-Selection <name>] -Path <file.pdf>` writes one PDF and returns its path.

## Decisions

Print HTML to PDF with the system's print engine.

## Libraries considered

| Part | Library | Release, licence, use | Decision |
|---|---|---|---|
| Printing to PDF | The system's print engine | Part of the operating system | Used |
| Printing to PDF | A PDF library | Maintained, open source | Rejected: it adds a dependency and a licence to check for a layout that HTML already handles |

## Risks

Very long ingredient lists may split across pages. Column widths that follow the content are left to a later
requirement.

## Review

Privacy, because `req_recipe_box_0001` carries it. Data flow: recipes are read and written on the same computer; nothing is
uploaded. Least permissions: read access to the collection, write access to the target folder. Secrets: none. Logging:
the number of recipes and the duration, no recipe content. Roll back: delete the PDF.

Answer of `@privacy1`: no objection, on one condition: logs hold no recipe notes.
