const { expect,test } = require('../../../fixtures/base');

test.describe('Search Functionality', () => {

    test.beforeEach(async ({ page, SearchPage }, testInfo) => {
        await SearchPage.navigateToSearchPage()
    })

    test('Search for "jha900" and verify results', async ({SearchPage}) => {
        await SearchPage.searchFor('jha900');
        const followersCount = await SearchPage.getFollowersCount();
        expect(followersCount).toBeVisible;
    });
});
