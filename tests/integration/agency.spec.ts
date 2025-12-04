import { test, expect } from '@playwright/test';

test.describe('ESDC Demo Smoke', () => {
  test('loads shell and has no console errors', async ({ page }) => {
    const errors: string[] = [];

    page.on('console', (msg) => {
      if (msg.type() === 'error') {
        const text = msg.text();
        if (text.includes('Failed to load locale')) return;
        errors.push(text);
      }
    });
    page.on('pageerror', (err) => errors.push(String(err)));

    await page.goto('http://localhost:5173/apps/agency-demo/index.html');
    await page.waitForSelector('eva-page-shell', { state: 'attached', timeout: 60000 });

    const localeSelector = page.locator('[data-testid="locale-selector"]');
    await expect(localeSelector).toHaveCount(1);

    const programGrid = page.locator('[data-testid="program-grid"]');
    await expect(programGrid).toHaveCount(1);

    // Interact minimally: click a locale button to trigger updates
    const gbButton = page.locator('.locale-btn[data-locale="en-GB"]');
    await gbButton.click();

    // Give events time to dispatch
    await page.waitForTimeout(250);

    expect(errors).toEqual([]);
  });
});
