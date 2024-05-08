const { defineConfig, devices } = require('@playwright/test');

/**
 * @see https://playwright.dev/docs/test-configuration
 */
module.exports = defineConfig({
  /* Configure projects for major browsers */
  projects: [
    {
      name: 'web',
      use: { ...devices['Desktop Firefox'], channel: 'firefox' }, // Adjust as needed
    },
    {
      name: 'mobile',
      use: devices['iPhone 12 Pro Max'],
    },
    {
      name: 'api',
      use: { ...devices['Desktop Firefox'], channel: 'firefox' },
    },
  ],
  testDir: './e2e/tests',
  /* Run tests in files in parallel */
  fullyParallel: true,
  /* Fail the build on CI if you accidentally left test.only in the source code. */
  forbidOnly: !!process.env.CI,
  /* Retry on CI only */
  retries: process.env.CI ? 2 : 0,
  /* Opt out of parallel tests on CI. */
  workers: process.env.CI ? 1 : undefined,
  reporter:[
    ['html'],
    ['allure-playwright']
  ],
  use: {
    trace: 'on-first-retry',
  },
});

