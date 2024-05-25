const Base = require("@playwright/test");
const { SearchPage } = require('../e2e/pages/responsive/SearchPage');
const { WebSearchPage } = require('../e2e/pages/web/WebSearchPage');

exports.test = Base.test.extend({
    SearchPage: async ({page}, use) => {
        await use(new SearchPage(page))
    },
    WebSearchPage: async ({page}, use) => {
        await use(new WebSearchPage(page))
    }
})
//base class should be created for common functionality
exports.expect = Base.expect
exports.request = Base.request