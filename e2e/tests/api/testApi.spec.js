const { test, expect } = require("@playwright/test");
const ApiBase = require("../../pages/api/apiBase");
const testData = require("../../../data/test-data.json");

test.describe("GitHub API Tests", () => {
  let apiBase;

  test.beforeEach(async () => {
    apiBase = new ApiBase();
  });

  test("Get User", async () => {
    const username = testData.username;
    const response = await apiBase.getUser(username);

    expect(response.login).toBe(username);
  });
});
