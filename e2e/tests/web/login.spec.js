const { test, expect } = require('../../../fixtures/base');
const data = require("../../../data/test-data.json")

test.describe("e2e Test", () => {

    test.beforeEach(async ({ page, loginPage }, testInfo) => {
        await loginPage.navigateToLogin()
    })

    test('Login functionality', async ({ page, loginPage }) => {

        await loginPage.loginUser(data.username, data.password)
    })
})