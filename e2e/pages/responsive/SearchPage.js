require('dotenv').config();

class SearchPage {
    constructor(page) {
        this.page = page;
        this.searchInput = page.locator('input[data-testid="search-bar"]');
        this.searchButton = page.locator('button[type="submit"]');
        this.resultContainer = page.locator('xpath=//*[//*[@id="root"]/main/section[2]/section/article[2]/div/h3]'); // Adjust this selector based on actual result container
    }

    async navigateToSearchPage() {
        await this.page.goto(process.env.BASE_URL);
    }

    async searchFor(query) {
        await this.searchInput.fill(query);
        await this.searchButton.click();
    }

    async getSearchResults() {
        await this.page.waitForSelector('.results'); // Adjust this selector based on actual result container
        return await this.resultContainer.textContent(); // Adjust method based on actual result format
    }

    async getFollowersCount() {
        const followersElement = await this.page.locator('.green'); // Adjust the selector as per your HTML
        const followersText = await followersElement.textContent();
        const followersCount = parseInt(followersText, 10); // Assuming followersText is something like "3 followers"
        return followersCount;
    }
}

module.exports = { SearchPage };
