---
requirement: req_rb_0001@1
code: ["yourorg/recipe_box#21"]
tests: [export_recipe_pdf.Tests.ps1]
evidence:
  kind: ci_run
  commit: a1b2c3d
  run: "1001"
  result: "4 passed, 0 failed"
  date: 2026-10-02
conditions:
  - "Logs hold no recipe notes (privacy review of spec_rb_0001@1): checked by a test in export_recipe_pdf.Tests.ps1."
docs: updated
---

Release 0.4. The CI run on the merged commit ran every test tagged `req_rb_0001`; all passed.
