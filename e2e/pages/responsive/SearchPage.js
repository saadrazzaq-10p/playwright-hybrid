require('dotenv').config();

class SearchPage {
    constructor(page) {
        this.page = page;
        this.searchInput = page.locator('input[data-testid="search-bar"]');
        this.searchButton = page.locator('button[type="submit"]');
        this.resultContainer = page.locator('xpath=//*[@id="root"]/main/section[2]/section/article[2]/div/h3');
        this.userDisplayName = page.locator('xpath=//h4[normalize-space()="Joan Azeka"]');
    }

    async navigateToSearchPage() {
        await this.page.goto(process.env.BASE_URL);
    }

    async searchFor(query) {
        await this.searchInput.fill(query);
        await this.searchButton.click();
    }

    async getSearchResults() {
        await this.page.waitForSelector('.results');
        return await this.resultContainer.textContent();
    }

    async getDisplayName() {
        return await this.userDisplayName.textContent();
    }

    async getFollowersCount() {
        try {
            const followersElement = await this.page.locator('xpath=//h3[normalize-space()="3"]');
            const followersText = await followersElement.textContent();
            
            const followersCount = parseInt(followersText, 10); // Assuming followersText is something like "3 followers"
            if (isNaN(followersCount)) {
                throw new Error('Followers count is not a number');
            }
            return followersCount;
        } catch (error) {
            console.error('Error fetching followers count:', error);
            return -1;
        }
    }
}

module.exports = { SearchPage };
