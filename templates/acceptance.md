---
# The G3 record, at projects/<project>/acceptance/<requirement id>.md. The tech lead opens the pull request that adds it,
# an owner approves it. The evidence is stored here, not linked, because links to CI runs expire.
requirement: req_<project>_<nnnn>@<version>
code: ["<organisation>/<repo>#<pull request>"]
tests: [<test file>]
evidence:
  kind: ci_run                   # ci_run, or test_record for integration, smoke and manual tests
  commit: <commit>
  run: "<run id>"
  result: "<n> passed, 0 failed"
  date: <yyyy-mm-dd>
conditions: []                   # each condition from the G2 review, with how it was checked
docs: updated                    # updated or not_needed
---

<For a test_record: what was tested, how, and what came out.>
