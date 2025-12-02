import { test, expect } from '@playwright/test';
import { AxePuppeteer } from '@axe-core/playwright';

/**
 * Automated accessibility tests for all EVA components
 * Integrates axe-core for WCAG 2.2 Level AA compliance
 */

test.describe('Accessibility Tests - GC Components', () => {
  test('EVAGCButton meets WCAG 2.2 AA', async ({ page }) => {
    await page.goto('/');
    
    await page.setContent(`
      <!DOCTYPE html>
      <html lang="en">
      <head>
        <meta charset="UTF-8">
        <script type="module" src="/packages/eva-sovereign-ui-wc/dist/index.js"></script>
      </head>
      <body>
        <eva-gc-button>Primary Action</eva-gc-button>
        <eva-gc-button variant="secondary">Secondary Action</eva-gc-button>
        <eva-gc-button variant="danger">Delete</eva-gc-button>
        <eva-gc-button disabled>Disabled</eva-gc-button>
      </body>
      </html>
    `);
    
    await page.waitForLoadState('networkidle');
    
    const accessibilityScanResults = await new AxePuppeteer(page as any)
      .withTags(['wcag2a', 'wcag2aa', 'wcag21a', 'wcag21aa', 'wcag22aa'])
      .analyze();
    
    expect(accessibilityScanResults.violations).toEqual([]);
  });
  
  test('EVAGCHeader with language switcher meets WCAG 2.2 AA', async ({ page }) => {
    await page.setContent(`
      <!DOCTYPE html>
      <html lang="en">
      <head>
        <meta charset="UTF-8">
        <script type="module" src="/packages/eva-sovereign-ui-wc/dist/index.js"></script>
      </head>
      <body>
        <eva-gc-header>
          <span slot="title">Government of Canada</span>
          <eva-language-switcher 
            slot="language-toggle"
            current-locale="en-CA"
            available-locales='["en-CA", "fr-CA"]'
          ></eva-language-switcher>
        </eva-gc-header>
      </body>
      </html>
    `);
    
    await page.waitForLoadState('networkidle');
    
    const accessibilityScanResults = await new AxePuppeteer(page as any)
      .withTags(['wcag2aa', 'wcag22aa'])
      .analyze();
    
    expect(accessibilityScanResults.violations).toEqual([]);
  });
  
  test('EVAGCFooter meets WCAG 2.2 AA', async ({ page }) => {
    await page.setContent(`
      <!DOCTYPE html>
      <html lang="en">
      <head>
        <meta charset="UTF-8">
        <script type="module" src="/packages/eva-sovereign-ui-wc/dist/index.js"></script>
      </head>
      <body>
        <eva-gc-footer>
          <p>© 2025 Government of Canada</p>
        </eva-gc-footer>
      </body>
      </html>
    `);
    
    await page.waitForLoadState('networkidle');
    
    const accessibilityScanResults = await new AxePuppeteer(page as any)
      .withTags(['wcag2aa', 'wcag22aa'])
      .analyze();
    
    expect(accessibilityScanResults.violations).toEqual([]);
  });
});

test.describe('Accessibility Tests - Form Components', () => {
  test('EVAInput with label meets WCAG 2.2 AA', async ({ page }) => {
    await page.setContent(`
      <!DOCTYPE html>
      <html lang="en">
      <head>
        <meta charset="UTF-8">
        <script type="module" src="/packages/eva-sovereign-ui-wc/dist/index.js"></script>
      </head>
      <body>
        <eva-label for="email">Email Address</eva-label>
        <eva-input id="email" type="email" required aria-required="true"></eva-input>
        
        <eva-label for="password">Password</eva-label>
        <eva-input id="password" type="password" required aria-required="true"></eva-input>
      </body>
      </html>
    `);
    
    await page.waitForLoadState('networkidle');
    
    const accessibilityScanResults = await new AxePuppeteer(page as any)
      .withTags(['wcag2aa', 'wcag22aa'])
      .analyze();
    
    expect(accessibilityScanResults.violations).toEqual([]);
  });
  
  test('EVACheckbox meets WCAG 2.2 AA', async ({ page }) => {
    await page.setContent(`
      <!DOCTYPE html>
      <html lang="en">
      <head>
        <meta charset="UTF-8">
        <script type="module" src="/packages/eva-sovereign-ui-wc/dist/index.js"></script>
      </head>
      <body>
        <eva-checkbox>I agree to the terms and conditions</eva-checkbox>
        <eva-checkbox checked>Subscribe to newsletter</eva-checkbox>
        <eva-checkbox disabled>Disabled option</eva-checkbox>
      </body>
      </html>
    `);
    
    await page.waitForLoadState('networkidle');
    
    const accessibilityScanResults = await new AxePuppeteer(page as any)
      .withTags(['wcag2aa', 'wcag22aa'])
      .analyze();
    
    expect(accessibilityScanResults.violations).toEqual([]);
  });
  
  test('EVARadioGroup meets WCAG 2.2 AA', async ({ page }) => {
    await page.setContent(`
      <!DOCTYPE html>
      <html lang="en">
      <head>
        <meta charset="UTF-8">
        <script type="module" src="/packages/eva-sovereign-ui-wc/dist/index.js"></script>
      </head>
      <body>
        <fieldset>
          <legend>Select an option</legend>
          <eva-radio-group name="choice" value="option1">
            <eva-radio-group-item value="option1">Option 1</eva-radio-group-item>
            <eva-radio-group-item value="option2">Option 2</eva-radio-group-item>
            <eva-radio-group-item value="option3">Option 3</eva-radio-group-item>
          </eva-radio-group>
        </fieldset>
      </body>
      </html>
    `);
    
    await page.waitForLoadState('networkidle');
    
    const accessibilityScanResults = await new AxePuppeteer(page as any)
      .withTags(['wcag2aa', 'wcag22aa'])
      .analyze();
    
    expect(accessibilityScanResults.violations).toEqual([]);
  });
  
  test('EVASelect meets WCAG 2.2 AA', async ({ page }) => {
    await page.setContent(`
      <!DOCTYPE html>
      <html lang="en">
      <head>
        <meta charset="UTF-8">
        <script type="module" src="/packages/eva-sovereign-ui-wc/dist/index.js"></script>
      </head>
      <body>
        <eva-label for="country">Country</eva-label>
        <eva-select id="country" aria-label="Select country">
          <eva-select-item value="ca">Canada</eva-select-item>
          <eva-select-item value="us">United States</eva-select-item>
          <eva-select-item value="uk">United Kingdom</eva-select-item>
        </eva-select>
      </body>
      </html>
    `);
    
    await page.waitForLoadState('networkidle');
    
    const accessibilityScanResults = await new AxePuppeteer(page as any)
      .withTags(['wcag2aa', 'wcag22aa'])
      .analyze();
    
    expect(accessibilityScanResults.violations).toEqual([]);
  });
});

test.describe('Accessibility Tests - Dialog Components', () => {
  test('EVADialog meets WCAG 2.2 AA', async ({ page }) => {
    await page.setContent(`
      <!DOCTYPE html>
      <html lang="en">
      <head>
        <meta charset="UTF-8">
        <script type="module" src="/packages/eva-sovereign-ui-wc/dist/index.js"></script>
      </head>
      <body>
        <eva-dialog open modal aria-labelledby="dialog-title" aria-describedby="dialog-desc">
          <eva-dialog-header>
            <eva-dialog-title id="dialog-title">Confirmation Required</eva-dialog-title>
            <eva-dialog-description id="dialog-desc">
              Please confirm your action.
            </eva-dialog-description>
          </eva-dialog-header>
          <eva-dialog-content>
            <p>Are you sure you want to proceed?</p>
          </eva-dialog-content>
          <eva-dialog-footer>
            <eva-gc-button variant="secondary">Cancel</eva-gc-button>
            <eva-gc-button>Confirm</eva-gc-button>
          </eva-dialog-footer>
        </eva-dialog>
      </body>
      </html>
    `);
    
    await page.waitForLoadState('networkidle');
    
    const accessibilityScanResults = await new AxePuppeteer(page as any)
      .withTags(['wcag2aa', 'wcag22aa'])
      .analyze();
    
    expect(accessibilityScanResults.violations).toEqual([]);
  });
  
  test('EVAAlertDialog meets WCAG 2.2 AA', async ({ page }) => {
    await page.setContent(`
      <!DOCTYPE html>
      <html lang="en">
      <head>
        <meta charset="UTF-8">
        <script type="module" src="/packages/eva-sovereign-ui-wc/dist/index.js"></script>
      </head>
      <body>
        <eva-alert-dialog open aria-labelledby="alert-title" aria-describedby="alert-desc">
          <eva-alert-dialog-title id="alert-title">Warning</eva-alert-dialog-title>
          <eva-alert-dialog-description id="alert-desc">
            This action cannot be undone.
          </eva-alert-dialog-description>
          <eva-alert-dialog-footer>
            <eva-gc-button variant="secondary">Cancel</eva-gc-button>
            <eva-gc-button variant="danger">Delete</eva-gc-button>
          </eva-alert-dialog-footer>
        </eva-alert-dialog>
      </body>
      </html>
    `);
    
    await page.waitForLoadState('networkidle');
    
    const accessibilityScanResults = await new AxePuppeteer(page as any)
      .withTags(['wcag2aa', 'wcag22aa'])
      .analyze();
    
    expect(accessibilityScanResults.violations).toEqual([]);
  });
});

test.describe('Accessibility Tests - Navigation Components', () => {
  test('EVATabs meets WCAG 2.2 AA', async ({ page }) => {
    await page.setContent(`
      <!DOCTYPE html>
      <html lang="en">
      <head>
        <meta charset="UTF-8">
        <script type="module" src="/packages/eva-sovereign-ui-wc/dist/index.js"></script>
      </head>
      <body>
        <eva-tabs value="tab1" aria-label="Settings">
          <eva-tabs-list role="tablist">
            <eva-tabs-trigger value="tab1" role="tab">Profile</eva-tabs-trigger>
            <eva-tabs-trigger value="tab2" role="tab">Security</eva-tabs-trigger>
            <eva-tabs-trigger value="tab3" role="tab">Notifications</eva-tabs-trigger>
          </eva-tabs-list>
          <eva-tabs-content value="tab1" role="tabpanel">Profile content</eva-tabs-content>
          <eva-tabs-content value="tab2" role="tabpanel">Security content</eva-tabs-content>
          <eva-tabs-content value="tab3" role="tabpanel">Notifications content</eva-tabs-content>
        </eva-tabs>
      </body>
      </html>
    `);
    
    await page.waitForLoadState('networkidle');
    
    const accessibilityScanResults = await new AxePuppeteer(page as any)
      .withTags(['wcag2aa', 'wcag22aa'])
      .analyze();
    
    expect(accessibilityScanResults.violations).toEqual([]);
  });
  
  test('EVAAccordion meets WCAG 2.2 AA', async ({ page }) => {
    await page.setContent(`
      <!DOCTYPE html>
      <html lang="en">
      <head>
        <meta charset="UTF-8">
        <script type="module" src="/packages/eva-sovereign-ui-wc/dist/index.js"></script>
      </head>
      <body>
        <eva-accordion>
          <eva-accordion-item>
            <eva-accordion-trigger aria-controls="section1">Section 1</eva-accordion-trigger>
            <eva-accordion-content id="section1">Content for section 1</eva-accordion-content>
          </eva-accordion-item>
          <eva-accordion-item>
            <eva-accordion-trigger aria-controls="section2">Section 2</eva-accordion-trigger>
            <eva-accordion-content id="section2">Content for section 2</eva-accordion-content>
          </eva-accordion-item>
        </eva-accordion>
      </body>
      </html>
    `);
    
    await page.waitForLoadState('networkidle');
    
    const accessibilityScanResults = await new AxePuppeteer(page as any)
      .withTags(['wcag2aa', 'wcag22aa'])
      .analyze();
    
    expect(accessibilityScanResults.violations).toEqual([]);
  });
  
  test('EVABreadcrumbs meets WCAG 2.2 AA', async ({ page }) => {
    await page.setContent(`
      <!DOCTYPE html>
      <html lang="en">
      <head>
        <meta charset="UTF-8">
        <script type="module" src="/packages/eva-sovereign-ui-wc/dist/index.js"></script>
      </head>
      <body>
        <nav aria-label="Breadcrumb">
          <eva-gc-breadcrumbs>
            <eva-gc-breadcrumbs-item href="/">Home</eva-gc-breadcrumbs-item>
            <eva-gc-breadcrumbs-item href="/services">Services</eva-gc-breadcrumbs-item>
            <eva-gc-breadcrumbs-item current aria-current="page">Employment</eva-gc-breadcrumbs-item>
          </eva-gc-breadcrumbs>
        </nav>
      </body>
      </html>
    `);
    
    await page.waitForLoadState('networkidle');
    
    const accessibilityScanResults = await new AxePuppeteer(page as any)
      .withTags(['wcag2aa', 'wcag22aa'])
      .analyze();
    
    expect(accessibilityScanResults.violations).toEqual([]);
  });
});

test.describe('Accessibility Tests - Keyboard Navigation', () => {
  test('EVADialog keyboard navigation and focus trap', async ({ page }) => {
    await page.setContent(`
      <!DOCTYPE html>
      <html lang="en">
      <head>
        <meta charset="UTF-8">
        <script type="module" src="/packages/eva-sovereign-ui-wc/dist/index.js"></script>
      </head>
      <body>
        <eva-gc-button id="trigger">Open Dialog</eva-gc-button>
        <eva-dialog open modal>
          <eva-dialog-content>
            <eva-input type="text" id="input1" placeholder="First"></eva-input>
            <eva-input type="text" id="input2" placeholder="Second"></eva-input>
            <eva-gc-button id="closeBtn">Close</eva-gc-button>
          </eva-dialog-content>
        </eva-dialog>
      </body>
      </html>
    `);
    
    await page.waitForLoadState('networkidle');
    
    // Check initial focus
    const firstInput = page.locator('#input1');
    await expect(firstInput).toBeFocused();
    
    // Tab through elements
    await page.keyboard.press('Tab');
    await expect(page.locator('#input2')).toBeFocused();
    
    await page.keyboard.press('Tab');
    await expect(page.locator('#closeBtn')).toBeFocused();
    
    // Tab should wrap back to first
    await page.keyboard.press('Tab');
    await expect(firstInput).toBeFocused();
    
    // Escape should close
    await page.keyboard.press('Escape');
    await expect(page.locator('eva-dialog')).not.toHaveAttribute('open');
  });
  
  test('EVATabs keyboard navigation', async ({ page }) => {
    await page.setContent(`
      <!DOCTYPE html>
      <html lang="en">
      <head>
        <meta charset="UTF-8">
        <script type="module" src="/packages/eva-sovereign-ui-wc/dist/index.js"></script>
      </head>
      <body>
        <eva-tabs value="tab1">
          <eva-tabs-list>
            <eva-tabs-trigger value="tab1">Tab 1</eva-tabs-trigger>
            <eva-tabs-trigger value="tab2">Tab 2</eva-tabs-trigger>
            <eva-tabs-trigger value="tab3">Tab 3</eva-tabs-trigger>
          </eva-tabs-list>
        </eva-tabs>
      </body>
      </html>
    `);
    
    await page.waitForLoadState('networkidle');
    
    // Focus first tab
    await page.locator('eva-tabs-trigger[value="tab1"]').focus();
    
    // Arrow right should move to tab2
    await page.keyboard.press('ArrowRight');
    await expect(page.locator('eva-tabs-trigger[value="tab2"]')).toBeFocused();
    
    // Arrow right should move to tab3
    await page.keyboard.press('ArrowRight');
    await expect(page.locator('eva-tabs-trigger[value="tab3"]')).toBeFocused();
    
    // Arrow right should wrap to tab1
    await page.keyboard.press('ArrowRight');
    await expect(page.locator('eva-tabs-trigger[value="tab1"]')).toBeFocused();
    
    // Arrow left should wrap to tab3
    await page.keyboard.press('ArrowLeft');
    await expect(page.locator('eva-tabs-trigger[value="tab3"]')).toBeFocused();
    
    // Home should go to first
    await page.keyboard.press('Home');
    await expect(page.locator('eva-tabs-trigger[value="tab1"]')).toBeFocused();
    
    // End should go to last
    await page.keyboard.press('End');
    await expect(page.locator('eva-tabs-trigger[value="tab3"]')).toBeFocused();
  });
});

test.describe('Accessibility Tests - Color Contrast', () => {
  test('GC buttons have sufficient contrast', async ({ page }) => {
    await page.setContent(`
      <!DOCTYPE html>
      <html lang="en">
      <head>
        <meta charset="UTF-8">
        <script type="module" src="/packages/eva-sovereign-ui-wc/dist/index.js"></script>
      </head>
      <body>
        <eva-gc-button>Primary</eva-gc-button>
        <eva-gc-button variant="secondary">Secondary</eva-gc-button>
        <eva-gc-button variant="danger">Danger</eva-gc-button>
      </body>
      </html>
    `);
    
    await page.waitForLoadState('networkidle');
    
    const accessibilityScanResults = await new AxePuppeteer(page as any)
      .withTags(['wcag2aa'])
      .withRules(['color-contrast'])
      .analyze();
    
    expect(accessibilityScanResults.violations).toEqual([]);
  });
});
