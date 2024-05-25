const { expect,test } = require('../../../fixtures/base');
const testData = require("../../../data/test-data.json");

test.describe('Search Functionality', () => {

    test.beforeEach(async ({ page, SearchPage }, testInfo) => {
        await SearchPage.navigateToSearchPage()
    })

    test('Search for "jha900" and verify results', async ({SearchPage}) => {
        await SearchPage.searchFor(testData.username);
        const followersCount = await SearchPage.getFollowersCount();
        expect(followersCount).toBeVisible;
    });
});
