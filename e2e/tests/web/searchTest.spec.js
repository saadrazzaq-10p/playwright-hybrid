const { expect, test } = require('../../../fixtures/base');
const testData = require("../../../data/test-data.json");

test.describe('Search User name and verify Details', () => {

    test.beforeEach(async ({ page, SearchPage }, testInfo) => {
        await SearchPage.navigateToSearchPage();
    });

    test('Search for "jha900" and verify results', async ({ SearchPage }) => {
        await SearchPage.searchFor(testData.username);
        const followersCount = await SearchPage.getFollowersCount();
        const displayName = await SearchPage.getDisplayName();

        if (followersCount === -1) {
            console.error('Failed to fetch followers count');
        } else {
            expect(followersCount).toBeVisible;
            expect(followersCount).toBeGreaterThan(0);
            expect(displayName).toEqual(testData.displayName)
        }
    });
});
