require('dotenv').config();

const BaseUrl = process.env.BASE_URL;

exports.loginPage = class LoginPage {
    constructor(page) {
        this.page = page;
        this.usernamefield = page.locator('xpath=//*[@placeholder="Username"]');
        this.passwordfield = page.locator('#password');
        this.loginButtonfield = page.locator('xpath=//*[@id="login-button"]');
    }

    async navigateToLogin() {
        await this.page.goto(BaseUrl);
        await this.page.waitForLoadState('networkidle');
    }

    async enterUserName(name) {
        await this.usernamefield.fill(name);
    }

    async enterPassword(pwd) {
        await this.passwordfield.fill(pwd);
    }

    async clickOnLogin() {
        await this.loginButtonfield.click();
    }

    async loginUser(user, pass) {
        await this.usernamefield.fill(user);
        await this.passwordfield.fill(pass);
        await this.loginButtonfield.click();
    }
};
