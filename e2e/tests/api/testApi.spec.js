const { test, expect } = require("@playwright/test");
const ApiBase = require("../../pages/api/apiBase");
const testData = require('../../../data/test-data.json');

test.describe("Reqres API Tests", () => {
  let reqresPage;

  test.beforeEach(async ({ page }) => {
    reqresPage = new ApiBase(page);
  });

  test("Get Single User", async () => {
    const userId = 1;
    const response = await reqresPage.getSingleUser(userId);

    expect(response.data).toBeDefined();
    expect(response.data.id).toBe(userId);
  });

  test('Create User', async ({ page }) => {
    const name = testData.name;
    const job = testData.job;

    const newUser = {
      name: name,
      job: job
    };

    const response = await reqresPage.createUser(newUser);

    expect(response.name).toBe(newUser.name);
    expect(response.job).toBe(newUser.job);
  });
});
