---
id: spec_recipe_box_0002
title: Ingredient text conversion
feature: feature_recipe_box_01
version: 2
covers: req_recipe_box_0003@2
estimate_days: 1.5
---

## Architecture

`ConvertTo-RecipeText` turns amounts, units, links and notes into plain text for the PDF. `Get-SafeUrl` lets only
http and https links through; any other link is printed as text.

## Interfaces

`ConvertTo-RecipeText -Recipe <object>` returns the text of each field, in the order of the ingredient table.

## Decisions

Version 2 follows `req_recipe_box_0003@2`: links other than http and https are no longer clickable.

## Libraries considered

| Part | Library | Release, licence, use | Decision |
|---|---|---|---|
| `Get-SafeUrl` | The URL class of .NET, `System.Uri` | Part of the runtime | Used: it reads the scheme, so no pattern of our own decides what a link is |
| `ConvertTo-RecipeText` | None found | | Built: the fields and their order are recipe_box's own |

## Risks

A note can hold a name; the conversion passes it through unchanged and does not log it.

## Review

Privacy, because `req_recipe_box_0003` carries it. Same data flow as `spec_recipe_box_0001@1`; notes are printed, never logged.

Answer of `@privacy1`: no objection.
