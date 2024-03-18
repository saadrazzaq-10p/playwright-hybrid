const {test,expect} = require('@playwright/test');
const {CommonUtils}=require('../../../utils/CommonUtils');
const {LoginPage} = require('../../pages/mobile/LoginPage');
const {DashboardPage} = require('../../pages/mobile/DashboardPage');


test('Login success case', async ({page} )=> {

    const data_login_username = "testtmail95@gmail.com";
    const data_login_password = "HiRahul@123";
    
    const loginPage = new LoginPage(page);
    await loginPage.goToApplication();
    await loginPage.loginToApplication(data_login_username,data_login_password);


    const dashboardPage = new DashboardPage(page);
    
    console.log('Assertions for message: Login Successfully')
    await expect(dashboardPage.getMsg_LoginSuccess()).toBeVisible();
    await expect(dashboardPage.getMsg_LoginSuccess()).toHaveText('Login Successfully');
    await expect(dashboardPage.getMsg_LoginSuccess()).toContainText('Successfully');

});

test.afterEach(async() => {
    await new CommonUtils().waitForSomeTime(5);
});



