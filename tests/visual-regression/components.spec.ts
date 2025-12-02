import { test, expect } from './setup';

test.describe('EVA Components Visual Regression', () => {
  test.describe('GC Design System Components', () => {
    test('EVAGCButton - all variants', async ({ visualPage, takeScreenshot, checkAccessibility }) => {
      await visualPage.goto('/demo.html');
      
      await visualPage.setContent(`
        <!DOCTYPE html>
        <html lang="en">
        <head>
          <meta charset="UTF-8">
          <script type="module" src="/packages/eva-sovereign-ui-wc/dist/index.js"></script>
        </head>
        <body style="padding: 20px; font-family: system-ui;">
          <div style="display: flex; gap: 16px; flex-wrap: wrap;">
            <eva-gc-button>Primary</eva-gc-button>
            <eva-gc-button variant="secondary">Secondary</eva-gc-button>
            <eva-gc-button variant="danger">Danger</eva-gc-button>
            <eva-gc-button disabled>Disabled</eva-gc-button>
          </div>
        </body>
        </html>
      `);
      
      await visualPage.waitForLoadState('networkidle');
      await takeScreenshot('gc-button-variants');
      await checkAccessibility();
    });
    
    test('EVAGCHeader - with breadcrumbs', async ({ visualPage, takeScreenshot, checkAccessibility }) => {
      await visualPage.setContent(`
        <!DOCTYPE html>
        <html lang="en">
        <head>
          <meta charset="UTF-8">
          <script type="module" src="/packages/eva-sovereign-ui-wc/dist/index.js"></script>
        </head>
        <body style="margin: 0;">
          <eva-gc-header>
            <span slot="title">Government of Canada</span>
            <eva-language-switcher 
              slot="language-toggle"
              current-locale="en-CA"
              available-locales='["en-CA", "fr-CA"]'
            ></eva-language-switcher>
          </eva-gc-header>
          
          <eva-gc-breadcrumbs style="padding: 20px;">
            <eva-gc-breadcrumbs-item href="/">Home</eva-gc-breadcrumbs-item>
            <eva-gc-breadcrumbs-item href="/services">Services</eva-gc-breadcrumbs-item>
            <eva-gc-breadcrumbs-item current>Employment</eva-gc-breadcrumbs-item>
          </eva-gc-breadcrumbs>
        </body>
        </html>
      `);
      
      await visualPage.waitForLoadState('networkidle');
      await takeScreenshot('gc-header-breadcrumbs', { fullPage: true });
      await checkAccessibility();
    });
  });
  
  test.describe('Form Components', () => {
    test('EVAInput - states', async ({ visualPage, takeScreenshot, checkAccessibility }) => {
      await visualPage.setContent(`
        <!DOCTYPE html>
        <html lang="en">
        <head>
          <meta charset="UTF-8">
          <script type="module" src="/packages/eva-sovereign-ui-wc/dist/index.js"></script>
        </head>
        <body style="padding: 20px;">
          <div style="display: flex; flex-direction: column; gap: 16px; max-width: 400px;">
            <eva-label>Default</eva-label>
            <eva-input type="text" placeholder="Enter text"></eva-input>
            
            <eva-label>With value</eva-label>
            <eva-input type="text" value="Sample text"></eva-input>
            
            <eva-label>Disabled</eva-label>
            <eva-input type="text" disabled placeholder="Disabled"></eva-input>
            
            <eva-label>Error state</eva-label>
            <eva-input type="text" class="error" placeholder="Error"></eva-input>
            <span style="color: #d32f2f; font-size: 14px;">This field is required</span>
          </div>
        </body>
        </html>
      `);
      
      await visualPage.waitForLoadState('networkidle');
      await takeScreenshot('input-states');
      await checkAccessibility();
    });
    
    test('EVACheckbox and EVARadio', async ({ visualPage, takeScreenshot, checkAccessibility }) => {
      await visualPage.setContent(`
        <!DOCTYPE html>
        <html lang="en">
        <head>
          <meta charset="UTF-8">
          <script type="module" src="/packages/eva-sovereign-ui-wc/dist/index.js"></script>
        </head>
        <body style="padding: 20px;">
          <div style="display: flex; gap: 48px;">
            <div>
              <h3>Checkboxes</h3>
              <eva-checkbox checked>Checked</eva-checkbox>
              <eva-checkbox>Unchecked</eva-checkbox>
              <eva-checkbox disabled>Disabled</eva-checkbox>
            </div>
            
            <div>
              <h3>Radio Group</h3>
              <eva-radio-group name="demo" value="option1">
                <eva-radio-group-item value="option1">Option 1</eva-radio-group-item>
                <eva-radio-group-item value="option2">Option 2</eva-radio-group-item>
                <eva-radio-group-item value="option3" disabled>Disabled</eva-radio-group-item>
              </eva-radio-group>
            </div>
          </div>
        </body>
        </html>
      `);
      
      await visualPage.waitForLoadState('networkidle');
      await takeScreenshot('checkbox-radio');
      await checkAccessibility();
    });
    
    test('EVASelect - dropdown', async ({ visualPage, takeScreenshot, checkAccessibility }) => {
      await visualPage.setContent(`
        <!DOCTYPE html>
        <html lang="en">
        <head>
          <meta charset="UTF-8">
          <script type="module" src="/packages/eva-sovereign-ui-wc/dist/index.js"></script>
        </head>
        <body style="padding: 20px;">
          <eva-label>Select an option</eva-label>
          <eva-select placeholder="Choose...">
            <eva-select-item value="1">Option 1</eva-select-item>
            <eva-select-item value="2">Option 2</eva-select-item>
            <eva-select-item value="3">Option 3</eva-select-item>
          </eva-select>
        </body>
        </html>
      `);
      
      await visualPage.waitForLoadState('networkidle');
      
      // Closed state
      await takeScreenshot('select-closed');
      
      // Open state
      const select = visualPage.locator('eva-select');
      await select.click();
      await visualPage.waitForTimeout(300); // Animation
      await takeScreenshot('select-open');
      
      await checkAccessibility();
    });
  });
  
  test.describe('Dialog Components', () => {
    test('EVADialog', async ({ visualPage, takeScreenshot, checkAccessibility }) => {
      await visualPage.setContent(`
        <!DOCTYPE html>
        <html lang="en">
        <head>
          <meta charset="UTF-8">
          <script type="module" src="/packages/eva-sovereign-ui-wc/dist/index.js"></script>
        </head>
        <body style="padding: 20px;">
          <eva-dialog open modal>
            <eva-dialog-header>
              <eva-dialog-title>Dialog Title</eva-dialog-title>
              <eva-dialog-description>
                This is a description of what the dialog is for.
              </eva-dialog-description>
            </eva-dialog-header>
            <eva-dialog-content>
              <p>Dialog content goes here.</p>
            </eva-dialog-content>
            <eva-dialog-footer>
              <eva-gc-button variant="secondary">Cancel</eva-gc-button>
              <eva-gc-button>Confirm</eva-gc-button>
            </eva-dialog-footer>
          </eva-dialog>
        </body>
        </html>
      `);
      
      await visualPage.waitForLoadState('networkidle');
      await takeScreenshot('dialog-open');
      await checkAccessibility({ selector: 'eva-dialog' });
    });
    
    test('EVAAlertDialog', async ({ visualPage, takeScreenshot, checkAccessibility }) => {
      await visualPage.setContent(`
        <!DOCTYPE html>
        <html lang="en">
        <head>
          <meta charset="UTF-8">
          <script type="module" src="/packages/eva-sovereign-ui-wc/dist/index.js"></script>
        </head>
        <body style="padding: 20px;">
          <eva-alert-dialog open>
            <eva-alert-dialog-title>Delete Item?</eva-alert-dialog-title>
            <eva-alert-dialog-description>
              This action cannot be undone. This will permanently delete your item.
            </eva-alert-dialog-description>
            <eva-alert-dialog-footer>
              <eva-gc-button variant="secondary">Cancel</eva-gc-button>
              <eva-gc-button variant="danger">Delete</eva-gc-button>
            </eva-alert-dialog-footer>
          </eva-alert-dialog>
        </body>
        </html>
      `);
      
      await visualPage.waitForLoadState('networkidle');
      await takeScreenshot('alert-dialog');
      await checkAccessibility({ selector: 'eva-alert-dialog' });
    });
  });
  
  test.describe('Layout Components', () => {
    test('EVATabs', async ({ visualPage, takeScreenshot, checkAccessibility }) => {
      await visualPage.setContent(`
        <!DOCTYPE html>
        <html lang="en">
        <head>
          <meta charset="UTF-8">
          <script type="module" src="/packages/eva-sovereign-ui-wc/dist/index.js"></script>
        </head>
        <body style="padding: 20px;">
          <eva-tabs value="tab1">
            <eva-tabs-list>
              <eva-tabs-trigger value="tab1">Profile</eva-tabs-trigger>
              <eva-tabs-trigger value="tab2">Settings</eva-tabs-trigger>
              <eva-tabs-trigger value="tab3">Notifications</eva-tabs-trigger>
            </eva-tabs-list>
            <eva-tabs-content value="tab1">
              <h3>Profile Content</h3>
              <p>Your profile information goes here.</p>
            </eva-tabs-content>
            <eva-tabs-content value="tab2">
              <h3>Settings Content</h3>
              <p>Application settings go here.</p>
            </eva-tabs-content>
            <eva-tabs-content value="tab3">
              <h3>Notifications Content</h3>
              <p>Notification preferences go here.</p>
            </eva-tabs-content>
          </eva-tabs>
        </body>
        </html>
      `);
      
      await visualPage.waitForLoadState('networkidle');
      await takeScreenshot('tabs-default');
      
      // Switch to second tab
      await visualPage.locator('eva-tabs-trigger[value="tab2"]').click();
      await visualPage.waitForTimeout(200);
      await takeScreenshot('tabs-tab2');
      
      await checkAccessibility();
    });
    
    test('EVAAccordion', async ({ visualPage, takeScreenshot, checkAccessibility }) => {
      await visualPage.setContent(`
        <!DOCTYPE html>
        <html lang="en">
        <head>
          <meta charset="UTF-8">
          <script type="module" src="/packages/eva-sovereign-ui-wc/dist/index.js"></script>
        </head>
        <body style="padding: 20px;">
          <eva-accordion>
            <eva-accordion-item>
              <eva-accordion-trigger>Section 1</eva-accordion-trigger>
              <eva-accordion-content>
                Content for section 1.
              </eva-accordion-content>
            </eva-accordion-item>
            <eva-accordion-item>
              <eva-accordion-trigger>Section 2</eva-accordion-trigger>
              <eva-accordion-content>
                Content for section 2.
              </eva-accordion-content>
            </eva-accordion-item>
            <eva-accordion-item>
              <eva-accordion-trigger>Section 3</eva-accordion-trigger>
              <eva-accordion-content>
                Content for section 3.
              </eva-accordion-content>
            </eva-accordion-item>
          </eva-accordion>
        </body>
        </html>
      `);
      
      await visualPage.waitForLoadState('networkidle');
      
      // All closed
      await takeScreenshot('accordion-closed');
      
      // First open
      await visualPage.locator('eva-accordion-trigger').first().click();
      await visualPage.waitForTimeout(300);
      await takeScreenshot('accordion-open');
      
      await checkAccessibility();
    });
  });
  
  test.describe('Responsive Design', () => {
    const viewports = [
      { name: 'mobile', width: 375, height: 667 },
      { name: 'tablet', width: 768, height: 1024 },
      { name: 'desktop', width: 1920, height: 1080 },
    ];
    
    for (const viewport of viewports) {
      test(`GC Header - ${viewport.name}`, async ({ visualPage, takeScreenshot, checkAccessibility }) => {
        await visualPage.setViewportSize(viewport);
        
        await visualPage.setContent(`
          <!DOCTYPE html>
          <html lang="en">
          <head>
            <meta charset="UTF-8">
            <script type="module" src="/packages/eva-sovereign-ui-wc/dist/index.js"></script>
          </head>
          <body style="margin: 0;">
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
        
        await visualPage.waitForLoadState('networkidle');
        await takeScreenshot(`gc-header-${viewport.name}`);
        await checkAccessibility();
      });
    }
  });
  
  test.describe('Theme Variations', () => {
    test('Dark mode support', async ({ visualPage, takeScreenshot }) => {
      await visualPage.emulateMedia({ colorScheme: 'dark' });
      
      await visualPage.setContent(`
        <!DOCTYPE html>
        <html lang="en">
        <head>
          <meta charset="UTF-8">
          <script type="module" src="/packages/eva-sovereign-ui-wc/dist/index.js"></script>
          <style>
            body {
              background: #1a1a1a;
              color: #ffffff;
              padding: 20px;
            }
          </style>
        </head>
        <body>
          <eva-gc-button>Primary Button</eva-gc-button>
          <eva-input type="text" placeholder="Enter text" style="margin: 20px 0;"></eva-input>
          <eva-checkbox>Accept terms</eva-checkbox>
        </body>
        </html>
      `);
      
      await visualPage.waitForLoadState('networkidle');
      await takeScreenshot('dark-mode');
    });
  });
});
