const { expect } = require('@playwright/test');

async function clickElement(page, elementLocator) {
    await elementLocator.waitFor({ state: 'visible' });
    await elementLocator.waitFor({ state: 'attached' });
    await expect(elementLocator).toHaveCount(1);
    await elementLocator.click();
}

module.exports = { clickElement };
