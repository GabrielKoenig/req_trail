# ReqTrail

**Requirements as code.** Write down the need; Git keeps the trail.

ReqTrail is a concept for keeping the requirements, specs, mockups and changes of several projects in one Git
repository, the way docs-as-code keeps documentation next to the code. Every change is a pull request, so the history
shows who changed what and why. Four gates, G0 to G3, turn a status change into a decision with a named gatekeeper,
enforced through `CODEOWNERS`, branch protection and checks. In the pages, the repository that holds the requirements
is called `project_management`.

**Status: concept.** Nothing here is set up or built. The pages describe a proposal and simulate it with example data.

## Contents

| File | What it is |
| ---- | ---------- |
| `concept.html` | The concept page: the process from request to technical spec, the gates, repos and issues, community intake, a working demo of the requirements tracker, Obsidian as a viewer, the architecture, options, an effort estimate and a review list of open, unverified, taken and rejected points |
| `roles.html` | The roles dashboard: hats instead of people, duties per phase and gate, a simulated history of who held which hat, and the checks that read the roles |

Open the files in a browser; they need no server and link to each other.

All projects, requirements, people, pull request numbers, commits, test runs and measurements in them are made up.
The example code repo is `recipe-box`, a fictional PowerShell tool set with a PDF export of recipe collections and an
import checker. People appear only as role handles such as `@owner-a` or `@lead-a`.

## Licence

Open source under the [MIT License](LICENSE): anyone may use, copy, change and share it, also commercially, as long
as the licence notice stays with it.
