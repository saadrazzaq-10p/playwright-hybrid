exports.loginPage = class LoginPage{
    constructor(page) {
    this.page = page
    this.username = page.locator('xpath=//*[@placeholder="Username"]')
    this.password = page.locator('#password')
    this.loginButton = page.locator('xpath=//*[@id="login-button"]')
}

async navigateToLogin(){
    await this.page.goto('https://www.saucedemo.com/')
}

async enterUserName(){
    await this.username.fill('standard_user');
}

async enterPassword(){
    await this.password.fill('secret_sauce');
}
async clickOnLogin(){
    await this.loginButton.click();
}
async loginUser(username, password){
    await this.username.fill(username);
    await this.password.fill(password);
    await this.loginButton.click();
}
}