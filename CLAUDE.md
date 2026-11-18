# Instructions for Claude

Rules for working in this repository. They apply to every session. Keep this file short and add each rule under the
right heading.

## General

- **Safe by design.** A rule that matters is enforced by the system, not by a sentence someone has to remember: a schema
  or class that rejects wrong data, a check that fails the pull request, a test that names the requirement, a safe
  default. Prose explains why; it is never the only safeguard. Add the enforcement in the same change as the rule. If
  that is not possible yet, record the missing enforcement as a requirement or an issue, and say so.
- **Make the wrong thing impossible** rather than detecting it later: fixed value lists over free text, generated files
  over hand-kept copies, one source of truth over two lists that must agree.

## Naming

- **Lower snake case for every name.** File and folder names, IDs, repository and project names, labels, script,
  function and test names, checks and workflows, keys and example handles: `req_trail`, `concept.html`,
  `req_recipe_box_0001`, `feature_recipe_box_01`, `build_index.js`, `gate_check`, `to_be_reviewed`, `roles_history.json`.
- **Write names out in full.** No abbreviations in file, folder, project, ID or key names: `recipe_box`, not `rb`;
  `feature_recipe_box_01`, not `ft_rb_01`; `metrics.yml`, not `kpis.yml`. A project is named after its code repo. The
  only short forms are `req` and `spec`, as in `req_recipe_box_0003`, `spec_recipe_box_0002` and `no_req`.
- **This includes the example content** inside the pages, not only the repository's own files.
- **Only a tool may force another spelling**, and the name then keeps exactly the spelling the tool needs: `CLAUDE.md`
  (Claude Code looks for it), `CODEOWNERS` and `.github/ISSUE_TEMPLATE/` (GitHub), the `.Tests.ps1` ending (Pester finds
  tests by it), commands and keywords such as `Invoke-Pester` or `Closes #31`, and the names of other products such as
  `sphinx-needs`.
- **GitHub user and organisation names cannot contain `_`.** Example handles and organisations are one lower-case word,
  with a number where needed: `@owner1`, `@lead2`, `yourorg`.
- **Prose stays prose.** Headings, sentences, gate names (G0 to G3), statuses and hat names are written normally.

## Content

- **Generic only.** No real people, organisations, employers, internal systems or customers. Examples use the made-up
  code repos `recipe_box` and `bike_rental` and role handles such as `@owner1`.
- **One exception: req_trail's own project.** `projects/req_trail/` holds the requirements of req_trail itself, so it
  names the real repo `GabrielKoenig/req_trail` and the maintainers' GitHub handles, spelled as GitHub has them. Later,
  `roles.yml` and `CODEOWNERS` do the same. Nothing else in the repo names a real person or account.
- **English only.**
