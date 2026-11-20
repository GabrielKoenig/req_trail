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
- **Reuse before building.** Before building a tool, parser, format, check or pattern ourselves, search for an
  established open-source library or standard that does the job, and use it if it fits. Signs of an established
  library: a release in the last 12 months, wide use, an organisation or more than one maintainer behind it, and a
  licence compatible with MIT; a library that misses one needs a reason. Record the search in the section Libraries
  considered of the spec, also when nothing fits. Enforced by `req_req_trail_0149`, a check built in work package 3;
  until then, the review at G2.

## Naming

- **Lower snake case for every name outside code.** File and folder names, IDs, repository and project names, labels,
  checks and workflows, keys in data files and example handles: `req_trail`, `concept.html`, `req_recipe_box_0001`,
  `feature_recipe_box_01`, `build_index.js`, `gate_check`, `to_be_reviewed`, `roles_history.json`.
- **Names inside code follow the style of their language,** as its usual linter checks it: camelCase in JavaScript
  (`loadProject`), Verb-Noun functions with approved verbs and PascalCase parameters in PowerShell
  (`Export-RecipePdf -CheckOnly`), snake_case in Python (`load_project`). Data keys read in code keep their snake case
  (`project.format_version`). Enforced by `req_req_trail_0151`, built in work package 3; until then, the review.
- **Write names out in full.** No abbreviations in file, folder, project, ID or key names: `recipe_box`, not `rb`;
  `feature_recipe_box_01`, not `ft_rb_01`; `metrics.yml`, not `kpis.yml`. A project is named after its code repo. The
  only short forms are `req` and `spec`, as in `req_recipe_box_0003`, `spec_recipe_box_0002` and `no_req`, and the
  branch phase `dev`.
- **This includes the example content** inside the pages, not only the repository's own files.
- **Only a tool may force another spelling**, and the name then keeps exactly the spelling the tool needs: `CLAUDE.md`
  (Claude Code looks for it), `CODEOWNERS` and `.github/ISSUE_TEMPLATE/` (GitHub), `.gitignore` (Git),
  `package-lock.json` (npm), the `.Tests.ps1` ending (Pester finds tests by it), commands and keywords such as
  `Invoke-Pester` or `Closes #31`, and the names of other products such as `sphinx-needs`.
- **GitHub user and organisation names cannot contain `_`.** Example handles and organisations are one lower-case word,
  with a number where needed: `@owner1`, `@lead2`, `yourorg`.
- **A branch name is `<phase>/<project>/<topic>`, or `<phase>/<project>/<feature>_<topic>` when the change
  belongs to a feature,** for example `concept/req_trail/concept_review` or
  `idea/recipe_box/feature_recipe_box_01_issue31`.
  - The phase is one of five, each with at most one gate: `idea` (feature file and requirements, G1), `concept`
    (specs and mockups, G2), `dev` (code, tests and acceptance records, G3), `release` (release notes and the value
    review) or `change_request` (a change to a merged requirement). The request (G0) is an issue and has no branch.
    The concept pages, rules and templates of this repo are `concept`; its code, tests and setup are `dev`.
  - The project is the project's ID, the name of its code repo: `recipe_box`, `req_trail`.
  - The feature is the ID of the feature the change belongs to, in its fixed form `feature_<project>_<nn>`.
    A change that belongs to none, as a release or a rule, leaves it out, so a topic never starts with
    `feature_`.
  - The topic is `issue<number>` when the change closes an issue, with the issue's number on GitHub, never a
    requirement or feature ID. Otherwise it is a short name in lower snake case.
  - If the session started on another branch, rename it with `git branch -m` before the first commit. Enforced by
    `req_req_trail_0150`, a check built in work package 5; until then, the review.
- **Prose stays prose.** Headings, sentences, gate names (G0 to G3), statuses and hat names are written normally.

## Content

- **Generic only.** No real people, organisations, employers, internal systems or customers. Examples use the made-up
  code repos `recipe_box` and `bike_rental` and role handles such as `@owner1`.
- **One exception: req_trail's own project.** `projects/req_trail/` holds the requirements of req_trail itself, so it
  names the real repo `GabrielKoenig/req_trail` and the maintainers' GitHub handles, spelled as GitHub has them. Later,
  `roles.yml` and `CODEOWNERS` do the same. Nothing else in the repo names a real person or account.
- **English only.**
