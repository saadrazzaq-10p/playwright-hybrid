const { test, expect } = require("@playwright/test");
const ApiBase = require("../../pages/api/apiBase");

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
    const newUser = {
      name: 'John Doe',
      job: 'Software Engineer',
    };
  
    const response = await reqresPage.createUser(newUser);
  
    expect(response.name).toBe(newUser.name);
    expect(response.job).toBe(newUser.job);
  });
  
});
