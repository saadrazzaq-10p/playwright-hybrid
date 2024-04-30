const Base = require("@playwright/test");
const { loginPage } = require('../e2e/pages/web/loginPage');
const { productsPage } = require('../e2e/pages/web/productsPage');

exports.test = Base.test.extend({
    loginPage: async ({page}, use) => {
        await use(new loginPage(page))
    },
    productsPage: async ({page}, use) => {
        await use(new productsPage(page))
    }
})

exports.expect = Base.expect
exports.request = Base.request