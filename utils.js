const { expect } = require('@playwright/test');

async function clickElement(page, elementLocator) {
    await elementLocator.waitFor({ state: 'visible' });
    await elementLocator.waitFor({ state: 'attached' });
    await elementLocator.click();

    //change class name to actionClass.js
}

module.exports = { clickElement };
