const test = require("node:test");
const assert = require("node:assert/strict");

const analytics = require("../shared/presentation-analytics.js");

test("denied sessionStorage access degrades to analytics-disabled instead of throwing", () => {
  const environment = {};
  Object.defineProperty(environment, "sessionStorage", {
    get() {
      throw new Error("SecurityError");
    },
  });

  assert.equal(analytics.getSessionStorage(environment), null);
});
