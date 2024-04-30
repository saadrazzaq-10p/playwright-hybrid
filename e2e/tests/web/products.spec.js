const { test, expect } = require('../../../fixtures/base');

test.describe("e2e Test", () => {

    test.beforeEach(async ({ page, loginPage }, testInfo) => {
        await loginPage.navigateToLogin()
        await loginPage.loginUser('standard_user', 'secret_sauce')
    })
})