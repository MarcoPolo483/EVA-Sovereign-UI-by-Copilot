import { test, expect } from '@playwright/test';

/**
 * Forms Integration Tests
 * Validates common form interactions across EVA components
 */

test.describe('Forms: Basic interactions on demo (smoke)', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('http://localhost:5173/apps/dev-kit-demo/index.html');
    await page.waitForLoadState('domcontentloaded');
    await page.waitForSelector('eva-page-shell', { state: 'attached', timeout: 10000 });
  });

  test('demo contains labeled email and notification switch', async ({ page }) => {
    expect(await page.locator('eva-label[for="demo-email"]').count()).toBeGreaterThan(0);
    expect(await page.locator('eva-input#demo-email').count()).toBeGreaterThan(0);
    expect(await page.locator('eva-switch#demo-notify').count()).toBeGreaterThan(0);
  });

  test('toggle notify without console errors', async ({ page }) => {
    const errors: string[] = [];
    page.on('pageerror', (err) => errors.push(String(err)));
    page.on('console', (msg) => { if (msg.type() === 'error') errors.push(msg.text()); });


    // Dispatch a click on host without requiring visibility
    await page.evaluate(() => {
      const host = document.querySelector('eva-switch#demo-notify');
      if (host) host.dispatchEvent(new MouseEvent('click', { bubbles: true }));
    });

    // Allow any event handlers to run
    await page.waitForTimeout(50);

    expect(errors).toEqual([]);
  });
});
