const { expect } = require('@playwright/test');

// Utility function for clicking an element with explicit wait
async function clickElement(page, elementLocator) {
    await expect(elementLocator).toHaveCount(1);
    await elementLocator.click();
}

module.exports = { clickElement };
