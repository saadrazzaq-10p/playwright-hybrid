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

    // Assert the status code is 200
    expect(response.status).toBe(200);

    //added assertion for contain
    expect(response.body.login).toContain(username)

    // Assert the response body contains the expected username
    expect(response.body.login).toBe(username);
  });
});
