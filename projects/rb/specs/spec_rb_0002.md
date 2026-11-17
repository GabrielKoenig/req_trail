---
id: spec_rb_0002
title: Ingredient text conversion
feature: ft_rb_01
version: 2
covers: [req_rb_0003@2]
mockup: n/a
estimate_days: 1.5
---

## Architecture

`convert_to_recipe_text` turns amounts, units, links and notes into plain text for the PDF. `get_safe_url` lets only
http and https links through; any other link is printed as text.

## Interfaces

`convert_to_recipe_text -recipe <object>` returns the text of each field, in the order of the ingredient table.

## Decisions

Version 2 follows `req_rb_0003@2`: links other than http and https are no longer clickable.

## Risks

A note can hold a name; the conversion passes it through unchanged and does not log it.

## Review

Privacy, because `req_rb_0003` carries it. Same data flow as `spec_rb_0001@1`; notes are printed, never logged.

Answer of `@privacy1`: no objection.
