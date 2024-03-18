exports.productsPage = class ProductsPage {

    constructor(page) {
        this.page = page
        this.productName = page.locator('[data-test="add-to-cart-sauce-labs-backpack"]');
        this.checkoutButton = page.locator('xpath=//*[@class="shopping_cart_link"]');
    }

    async addToCart() {
        await this.productName.click()
    }
    async clickOnCheckOut() {
        await this.checkoutButton.click();
    }

}