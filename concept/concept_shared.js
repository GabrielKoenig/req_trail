// Helpers that the concept pages and concept/build_concept_data.js share, so each of these rules exists once: the test
// kinds of conventions.md, how text is escaped for HTML, how a feature ID carries its number, and how test kinds are
// counted. Plain JavaScript without a build step: the pages load it with a script tag, Node loads it with require.
(function (root, factory) {
  "use strict";
  var shared = factory();
  if (typeof module === "object" && module.exports) module.exports = shared;
  else root.conceptShared = shared;
})(this, function () {
  "use strict";

  // The test kinds of conventions.md, in the order the pages list them.
  var testKinds = ["Unit", "Integration", "Smoke", "Static", "Manual"];
  var criterionStart = new RegExp("^(" + testKinds.join("|") + "):\\s*([\\s\\S]*)$");

  // Text for HTML: escapes the characters that could end an element or an attribute value.
  function escapeHtml(value) {
    return String(value).replace(/[&<>"]/g, function (character) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[character];
    });
  }

  // "Unit: a test ..." becomes { kind: "Unit", text: "a test ..." }; a criterion without a known kind keeps kind "".
  function parseCriterion(criterion) {
    var match = criterionStart.exec(String(criterion));
    return match ? { kind: match[1], text: match[2] } : { kind: "", text: String(criterion) };
  }

  // How many times each test kind occurs in a list of kinds; empty kinds are left out.
  function countTestKinds(kinds) {
    var counts = {};
    kinds.forEach(function (kind) { if (kind) counts[kind] = (counts[kind] || 0) + 1; });
    return counts;
  }

  // The counts as "3 Unit, 1 Manual", in the order of testKinds.
  function describeTestKinds(counts) {
    return testKinds.filter(function (kind) { return counts[kind]; })
      .map(function (kind) { return counts[kind] + " " + kind; }).join(", ");
  }

  // feature_req_trail_05 carries the number 5, and featureId("req_trail", 5) gives feature_req_trail_05 back.
  function featureNumber(id) {
    var match = /_(\d+)$/.exec(String(id));
    return match ? Number(match[1]) : NaN;
  }
  function featureId(project, number) {
    return "feature_" + project + "_" + (number < 10 ? "0" : "") + number;
  }

  return Object.freeze({
    testKinds: Object.freeze(testKinds.slice()),
    escapeHtml: escapeHtml,
    parseCriterion: parseCriterion,
    countTestKinds: countTestKinds,
    describeTestKinds: describeTestKinds,
    featureNumber: featureNumber,
    featureId: featureId,
  });
});
