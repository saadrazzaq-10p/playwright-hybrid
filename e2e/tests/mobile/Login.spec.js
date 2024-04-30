const { test, expect } = require('../../../fixtures/base');
require('dotenv').config();
const username = process.env.USERNAME;
const password = process.env.PASS;

test.describe("e2e Test", () => {

    test.beforeEach(async ({ page, loginPage }, testInfo) => {
        await loginPage.navigateToLogin()
    })

    test('Login functionality', async ({ page, loginPage }) => {

        await loginPage.loginUser(username, password)
    })
})