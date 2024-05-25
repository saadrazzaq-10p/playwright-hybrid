const { expect,test } = require('../../../fixtures/base');
const testData = require("../../../data/test-data.json");

test.describe('Search Functionality', () => {

    test.beforeEach(async ({ page, WebSearchPage }, testInfo) => {
        await WebSearchPage.navigateToSearchPage()
    })

    test('Search for "jha900" and verify results', async ({WebSearchPage}) => {
        await WebSearchPage.searchFor(testData.username);
        const followersCount = await WebSearchPage.getFollowersCount();
        expect(followersCount).toBeVisible;
    });
});
