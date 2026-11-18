# Conventions

The rules every file in `projects/` follows. The concept page (`concept/concept.html`) explains why; this page says
what. The templates in `templates/` put these rules into practice.

This page explains the format; it does not enforce it. The format is defined by the JSON Schemas in
`model/format_<n>/`, and the engine loads a file only through the class of its object type, which rejects what the
schema does not allow. Until work package 3 builds the schemas and the classes, nothing checks these rules
automatically: the review at G1 is the only safeguard, and the tables below are kept by hand.

## Names

Every name is lower snake case: files, folders, IDs, keys and enum values (`priority: should`). Only a tool may force
another spelling, as listed in `CLAUDE.md`.

Names are written out in full: `recipe_box`, not `rb`; `feature_`, not `ft_`; `metrics.yml`, not `kpis.yml`. The only
short forms are `req` and `spec`, for example in `req_recipe_box_0003`, `spec_recipe_box_0002` and `no_req`.

## Layout

```
projects/
└─ <project>/                    # the project name, for example recipe_box
   ├─ project.yml                # name, format version, description, code repos
   ├─ metrics.yml                # measured outcomes after a release
   ├─ features/<feature id>.md
   ├─ requirements/<requirement id>.md
   ├─ specs/<spec id>.md
   ├─ mockups/<name>.html
   └─ acceptance/<requirement id>.md   # the G3 record with its evidence
```

A project is one code repo. A feature is one tool or capability inside it. A requirement is one testable sentence about
a feature. A spec says how one or more requirements are built.

## IDs

| Kind | Format | Example |
|---|---|---|
| Project | the name of its code repo, in lower snake case | `recipe_box` |
| Feature | `feature_<project>_<nn>` | `feature_recipe_box_01` |
| Requirement | `req_<project>_<nnnn>` | `req_recipe_box_0003` |
| Spec | `spec_<project>_<nnnn>` | `spec_recipe_box_0002` |
| Request | the number of its issue | `#18` |

- Numbers count up per project and kind, padded with zeros.
- The file name is the ID plus `.md`. An acceptance record carries the ID of its requirement.
- An ID is never reused and never renamed, not even when its requirement is dropped.
- A request needs no file of its own: its issue number is its permanent name, and a feature points back to it.

## Versions and pinned references

- Every requirement and spec has `version`, a whole number that starts at 1.
- A substantive change raises the version by one. An editorial change (a typo, wording that keeps the meaning) keeps
  it; the pull request says which it is.
- A reference to a requirement or spec names the version it was made against: `req_recipe_box_0001@1`. This applies to
  `depends_on`, `covers`, `links.spec` and `requirement`.
- When the target moves to a higher version, every reference to the old one is suspect until someone confirms it.

## Format versions

- **Every project names its format.** `project.yml` holds `format_version`, a whole number. It applies to every file of
  the project.
- **A released format never changes.** At each engine release, the checksums of its schemas are recorded, and a test
  fails when a released schema differs from them.
- **Every change to the format is a new format version with a migration** from the version before it, in
  `model/migrations/format_<n>_to_<n+1>.js`. When nothing changes, there is no new version and no migration.
- **A migration changes the structure of the files, never their content.** The migration runner rejects a result that
  changes an ID, a statement or a version, or that breaks the schema of the new format.
- **Older formats stay readable.** The engine applies the migrations in memory and leaves the files as they are;
  `migrate` writes the migrated files as one pull request.
- **A new format version comes only with a new major engine version,** so a project pinned to `@v1` never meets a format
  its files are not in.
- **Format 1 is released with engine 1.0.** Until then it may still change without a migration, because no project
  outside this repo uses it.

## Fields with fixed values

A field with a fixed list takes one of these values, spelled exactly as shown. The lists are the same in every project,
so a mapping to the values of another tool, such as a requirements management tool, is written once.

| Field | Values |
|---|---|
| `priority` | `must`, `should`, `could` |
| `type` | `functional`: something the system does; `non_functional`: how well it does it; `constraint`: a limit on how it may be built, such as a language, platform or licence |
| `category` | `security`, `privacy`, `usability`, `performance`; only when `type` is `non_functional`, otherwise `""` |
| `reviews` | a list of `privacy` and `security`, or `[]`; `reviews_reason` says why in both cases |

## Text fields

- `statement` is one sentence with "shall", in plain text. Code in backticks is fine; tables, images, lists and links
  are not, because an export to ReqIF carries the text as simple XHTML.
- `rationale` is one sentence on why the requirement exists: the problem it solves or the need behind it. It travels
  with the requirement into an export; the request issue does not.
- Notes below the front matter are optional and are not exported.

## Statuses

No file holds a status. The index derives it from what happened in GitHub:

| Status | Set by |
|---|---|
| Draft | The pull request that adds the requirement is open as a draft (on a plan without draft pull requests: carries the label `draft`). |
| In review | That pull request is open and ready for review. |
| Approved | That pull request is merged: gate G1. |
| Specified | A spec that covers the requirement at its current version is merged: gate G2. |
| Implemented | A merged pull request in the code repo names it in an `implements:` line. |
| Verified | Its acceptance record is merged: gate G3. |

A substantive change after G1 sends the requirement back to Approved, once the new version is merged.

## Gates

| Gate | Decision | Gatekeeper | Where |
|---|---|---|---|
| G0 | Do we take this request? | Requirements owner | Label `accepted` on the request issue |
| G1 | Is the requirement clear, buildable and testable? | Principal Engineer | Merge of the requirement pull request |
| G2 | Is the spec sound and does it fit the estimate? | Architecture owner, plus privacy or security when tagged | Merge of the spec pull request |
| G3 | Does it do what the requirement says, shown by evidence? | Tech lead opens, an owner approves | Merge of the acceptance pull request |

Nobody approves what they wrote. Who holds which hat lives in `roles.yml`, the single source for hats.

## Links to code and tests

- A work issue and a pull request in the code repo name what they build: `implements: req_recipe_box_0003@2`. A change with
  nothing to link says `no_req: refactor` (or `docs`, `build`).
- A test carries the requirement ID in its name or in the name of its group, for example
  `Describe 'req_recipe_box_0003 convert_to_recipe_text'`. Test tools write these names into their JUnit XML report, which the
  index reads, so the code repo can use any language and test tool.
- The index finds code and tests through these lines and names; requirement files hold no code or test links.
