import { test, expect } from '@playwright/test';

/**
 * End-to-End Integration Tests
 * 
 * Tests complete user flows and component interactions
 */

test.describe('Integration Tests - Government Form Flow', () => {
  test.beforeEach(async ({ page }) => {
    // Navigate to demo application
    await page.goto('http://localhost:5173/apps/esdc-demo/index.html');
    await page.waitForLoadState('networkidle');
  });

  test('Complete form submission workflow', async ({ page }) => {
    // Fill out personal information
    await page.fill('eva-input[name="firstName"]', 'John');
    await page.fill('eva-input[name="lastName"]', 'Doe');
    await page.fill('eva-input[name="email"]', 'john.doe@example.gc.ca');
    
    // Select from dropdown
    await page.click('eva-select[name="province"]');
    await page.click('eva-select-item[value="ON"]');
    
    // Check checkbox
    await page.click('eva-checkbox[name="terms"]');
    
    // Submit form
    await page.click('eva-gc-button[type="submit"]');
    
    // Verify success message
    await expect(page.locator('eva-alert[variant="success"]')).toBeVisible();
    await expect(page.locator('eva-alert')).toContainText('Form submitted successfully');
  });

  test('Form validation errors display correctly', async ({ page }) => {
    // Submit without filling required fields
    await page.click('eva-gc-button[type="submit"]');
    
    // Check for error messages
    const errors = page.locator('eva-input[aria-invalid="true"]');
    await expect(errors).toHaveCount(3); // firstName, lastName, email
    
    // Verify error messages are accessible
    const firstNameError = page.locator('eva-input[name="firstName"] + .error-message');
    await expect(firstNameError).toBeVisible();
    await expect(firstNameError).toContainText('required');
  });

  test('Bilingual language switching', async ({ page }) => {
    // Check initial language (English)
    await expect(page.locator('eva-gc-header')).toContainText('Government of Canada');
    
    // Switch to French
    await page.click('eva-language-switcher');
    await page.click('[data-lang="fr"]');
    
    // Verify French content
    await expect(page.locator('eva-gc-header')).toContainText('Gouvernement du Canada');
    await expect(page.locator('eva-gc-button[type="submit"]')).toContainText('Soumettre');
    
    // Switch back to English
    await page.click('eva-language-switcher');
    await page.click('[data-lang="en"]');
    await expect(page.locator('eva-gc-header')).toContainText('Government of Canada');
  });

  test('Theme switching workflow', async ({ page }) => {
    // Open theme switcher
    await page.click('eva-theme-switcher');
    
    // Switch to dark mode
    await page.click('.dark-toggle');
    
    // Verify dark mode applied
    const html = page.locator('html');
    await expect(html).toHaveAttribute('data-theme', /dark/);
    
    // Switch theme
    await page.click('eva-theme-switcher');
    await page.click('[data-theme="uk"]');
    
    // Verify UK theme applied
    await expect(html).toHaveAttribute('data-theme', 'uk-dark');
  });
});

test.describe('Integration Tests - Data Table Workflow', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('http://localhost:5173/apps/esdc-demo/index.html');
    await page.waitForLoadState('networkidle');
  });

  test('Table sorting, filtering, and pagination', async ({ page }) => {
    // Navigate to data table
    await page.click('a[href="#data"]');
    await page.waitForSelector('eva-data-table');
    
    // Sort by column
    await page.click('eva-data-table th[data-column="name"]');
    
    // Verify sorted order (ascending)
    const firstCell = page.locator('eva-data-table tbody tr:first-child td:first-child');
    const firstText = await firstCell.textContent();
    
    // Sort again (descending)
    await page.click('eva-data-table th[data-column="name"]');
    const firstCellDesc = page.locator('eva-data-table tbody tr:first-child td:first-child');
    const firstTextDesc = await firstCellDesc.textContent();
    
    // Verify order changed
    expect(firstText).not.toBe(firstTextDesc);
    
    // Test search/filter
    await page.fill('eva-input[type="search"]', 'John');
    await page.waitForTimeout(300); // Debounce
    
    // Verify filtered results
    const rows = page.locator('eva-data-table tbody tr');
    await expect(rows).toHaveCount(3, { timeout: 2000 });
    
    // Test pagination
    await page.click('eva-pagination button[aria-label="Next page"]');
    
    // Verify page changed
    const paginationInfo = page.locator('eva-pagination .page-info');
    await expect(paginationInfo).toContainText('Page 2');
  });

  test('Table row selection and bulk actions', async ({ page }) => {
    await page.click('a[href="#data"]');
    
    // Select multiple rows
    await page.click('eva-data-table tr:nth-child(1) eva-checkbox');
    await page.click('eva-data-table tr:nth-child(2) eva-checkbox');
    await page.click('eva-data-table tr:nth-child(3) eva-checkbox');
    
    // Verify selection count
    const selectionInfo = page.locator('.selection-info');
    await expect(selectionInfo).toContainText('3 items selected');
    
    // Perform bulk action
    await page.click('eva-gc-button[data-action="delete-selected"]');
    
    // Confirm in dialog
    await expect(page.locator('eva-dialog')).toBeVisible();
    await page.click('eva-dialog eva-gc-button[variant="destructive"]');
    
    // Verify success notification
    await expect(page.locator('eva-toast')).toBeVisible();
    await expect(page.locator('eva-toast')).toContainText('3 items deleted');
  });
});

test.describe('Integration Tests - Modal and Dialog Flows', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('http://localhost:5173/apps/esdc-demo/index.html');
    await page.waitForLoadState('networkidle');
  });

  test('Modal open, interaction, and close', async ({ page }) => {
    // Open modal
    await page.click('eva-gc-button[data-opens="settings-modal"]');
    
    // Verify modal opened
    await expect(page.locator('eva-dialog[open]')).toBeVisible();
    
    // Verify focus trapped in modal
    await page.keyboard.press('Tab');
    const focusedElement = page.locator(':focus');
    const modalContent = page.locator('eva-dialog[open]');
    
    // Focused element should be inside modal
    const isInsideModal = await focusedElement.evaluate((el, modal) => {
      return modal.contains(el);
    }, await modalContent.elementHandle());
    
    expect(isInsideModal).toBe(true);
    
    // Interact with modal content
    await page.fill('eva-dialog eva-input[name="username"]', 'testuser');
    await page.click('eva-dialog eva-checkbox[name="notifications"]');
    
    // Save and close
    await page.click('eva-dialog eva-gc-button[type="submit"]');
    
    // Verify modal closed
    await expect(page.locator('eva-dialog[open]')).not.toBeVisible();
    
    // Verify success notification
    await expect(page.locator('eva-toast')).toBeVisible();
  });

  test('Close modal with Escape key', async ({ page }) => {
    await page.click('eva-gc-button[data-opens="settings-modal"]');
    await expect(page.locator('eva-dialog[open]')).toBeVisible();
    
    // Press Escape
    await page.keyboard.press('Escape');
    
    // Verify modal closed
    await expect(page.locator('eva-dialog[open]')).not.toBeVisible();
  });

  test('Nested modals handling', async ({ page }) => {
    // Open first modal
    await page.click('eva-gc-button[data-opens="modal-1"]');
    await expect(page.locator('eva-dialog[id="modal-1"]')).toBeVisible();
    
    // Open second modal from within first
    await page.click('eva-dialog[id="modal-1"] eva-gc-button[data-opens="modal-2"]');
    await expect(page.locator('eva-dialog[id="modal-2"]')).toBeVisible();
    
    // Close second modal
    await page.keyboard.press('Escape');
    await expect(page.locator('eva-dialog[id="modal-2"]')).not.toBeVisible();
    
    // First modal should still be open
    await expect(page.locator('eva-dialog[id="modal-1"]')).toBeVisible();
    
    // Close first modal
    await page.keyboard.press('Escape');
    await expect(page.locator('eva-dialog[id="modal-1"]')).not.toBeVisible();
  });
});

test.describe('Integration Tests - Navigation and Routing', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('http://localhost:5173/apps/esdc-demo/index.html');
    await page.waitForLoadState('networkidle');
  });

  test('Tab navigation workflow', async ({ page }) => {
    // Click tabs and verify content changes
    await page.click('eva-tabs button[role="tab"]:nth-child(1)');
    await expect(page.locator('eva-tabs [role="tabpanel"]:nth-child(1)')).toBeVisible();
    
    await page.click('eva-tabs button[role="tab"]:nth-child(2)');
    await expect(page.locator('eva-tabs [role="tabpanel"]:nth-child(2)')).toBeVisible();
    
    // Use keyboard navigation
    await page.keyboard.press('ArrowRight');
    await expect(page.locator('eva-tabs button[role="tab"]:nth-child(3)')).toBeFocused();
    
    await page.keyboard.press('Enter');
    await expect(page.locator('eva-tabs [role="tabpanel"]:nth-child(3)')).toBeVisible();
  });

  test('Breadcrumb navigation', async ({ page }) => {
    // Navigate deep into application
    await page.click('a[href="#services"]');
    await page.click('a[href="#services/employment"]');
    await page.click('a[href="#services/employment/search"]');
    
    // Verify breadcrumbs
    const breadcrumbs = page.locator('eva-breadcrumb');
    await expect(breadcrumbs).toContainText('Home');
    await expect(breadcrumbs).toContainText('Services');
    await expect(breadcrumbs).toContainText('Employment');
    await expect(breadcrumbs).toContainText('Job Search');
    
    // Click breadcrumb to navigate back
    await page.click('eva-breadcrumb a[href="#services"]');
    
    // Verify navigation
    await expect(page.locator('h1')).toContainText('Services');
  });

  test('Accordion expand/collapse states', async ({ page }) => {
    // Expand first accordion item
    await page.click('eva-accordion-item:nth-child(1) button');
    await expect(page.locator('eva-accordion-item:nth-child(1) [role="region"]')).toBeVisible();
    
    // Expand second item
    await page.click('eva-accordion-item:nth-child(2) button');
    await expect(page.locator('eva-accordion-item:nth-child(2) [role="region"]')).toBeVisible();
    
    // First should still be open (multiple mode)
    await expect(page.locator('eva-accordion-item:nth-child(1) [role="region"]')).toBeVisible();
    
    // Collapse first item
    await page.click('eva-accordion-item:nth-child(1) button');
    await expect(page.locator('eva-accordion-item:nth-child(1) [role="region"]')).not.toBeVisible();
  });
});

test.describe('Integration Tests - Accessibility Flow', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('http://localhost:5173/apps/esdc-demo/index.html');
    await page.waitForLoadState('networkidle');
  });

  test('Keyboard-only navigation', async ({ page }) => {
    // Tab through interactive elements
    await page.keyboard.press('Tab');
    await expect(page.locator(':focus')).toHaveAttribute('role', 'button');
    
    await page.keyboard.press('Tab');
    await page.keyboard.press('Tab');
    
    // Activate element with keyboard
    await page.keyboard.press('Enter');
    
    // Verify action occurred
    // (implementation depends on what the focused element does)
  });

  test('Screen reader announcements', async ({ page }) => {
    // Check for live regions
    const liveRegions = page.locator('[aria-live]');
    await expect(liveRegions).toHaveCount(1, { timeout: 5000 });
    
    // Trigger an action that should announce
    await page.click('eva-gc-button[type="submit"]');
    
    // Verify live region updated
    const liveRegion = page.locator('[aria-live="polite"]');
    await expect(liveRegion).not.toBeEmpty();
  });

  test('Skip to content link', async ({ page }) => {
    // Focus skip link
    await page.keyboard.press('Tab');
    
    // Activate skip link
    await page.keyboard.press('Enter');
    
    // Verify focus moved to main content
    const mainContent = page.locator('main');
    await expect(mainContent).toBeFocused();
  });
});

test.describe('Integration Tests - Error Handling', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('http://localhost:5173/apps/esdc-demo/index.html');
    await page.waitForLoadState('networkidle');
  });

  test('Network error handling', async ({ page }) => {
    // Intercept network request and fail it
    await page.route('**/api/data', route => route.abort());
    
    // Trigger action that makes API call
    await page.click('eva-gc-button[data-action="load-data"]');
    
    // Verify error message displayed
    await expect(page.locator('eva-alert[variant="destructive"]')).toBeVisible();
    await expect(page.locator('eva-alert')).toContainText('Failed to load data');
    
    // Verify retry button available
    await expect(page.locator('eva-gc-button[data-action="retry"]')).toBeVisible();
  });

  test('Component error boundary', async ({ page }) => {
    // Trigger component error
    await page.click('eva-gc-button[data-trigger-error="true"]');
    
    // Verify error boundary UI
    await expect(page.locator('eva-error-boundary')).toBeVisible();
    await expect(page.locator('eva-error-boundary')).toContainText('Something went wrong');
    
    // Verify recovery option
    await expect(page.locator('eva-gc-button[data-action="recover"]')).toBeVisible();
  });
});

test.describe('Integration Tests - Multi-Step Workflows', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('http://localhost:5173/apps/esdc-demo/index.html');
    await page.waitForLoadState('networkidle');
  });

  test('Stepper workflow completion', async ({ page }) => {
    // Navigate to stepper page
    await page.click('a[href="#wizard"]');
    
    // Step 1: Personal Information
    await page.fill('eva-input[name="firstName"]', 'Jane');
    await page.fill('eva-input[name="lastName"]', 'Smith');
    await page.click('eva-gc-button[data-action="next"]');
    
    // Verify moved to step 2
    await expect(page.locator('eva-stepper [data-step="2"]')).toHaveAttribute('aria-current', 'step');
    
    // Step 2: Address
    await page.fill('eva-input[name="address"]', '123 Main St');
    await page.fill('eva-input[name="city"]', 'Ottawa');
    await page.click('eva-gc-button[data-action="next"]');
    
    // Verify moved to step 3
    await expect(page.locator('eva-stepper [data-step="3"]')).toHaveAttribute('aria-current', 'step');
    
    // Step 3: Review and Submit
    await expect(page.locator('.review-section')).toContainText('Jane Smith');
    await expect(page.locator('.review-section')).toContainText('123 Main St');
    
    await page.click('eva-gc-button[type="submit"]');
    
    // Verify completion
    await expect(page.locator('eva-alert[variant="success"]')).toBeVisible();
    await expect(page.locator('.completion-message')).toContainText('Application submitted');
  });

  test('Stepper back navigation preserves data', async ({ page }) => {
    await page.click('a[href="#wizard"]');
    
    // Fill step 1
    await page.fill('eva-input[name="firstName"]', 'Test');
    await page.click('eva-gc-button[data-action="next"]');
    
    // Fill step 2
    await page.fill('eva-input[name="address"]', '456 Test Ave');
    await page.click('eva-gc-button[data-action="next"]');
    
    // Go back to step 1
    await page.click('eva-gc-button[data-action="back"]');
    await page.click('eva-gc-button[data-action="back"]');
    
    // Verify data preserved
    const firstNameInput = page.locator('eva-input[name="firstName"]');
    await expect(firstNameInput).toHaveValue('Test');
  });
});

test.describe('Integration Tests - File Upload Workflow', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('http://localhost:5173/apps/esdc-demo/index.html');
    await page.waitForLoadState('networkidle');
  });

  test('File upload with validation', async ({ page }) => {
    // Navigate to upload page
    await page.click('a[href="#upload"]');
    
    // Upload valid file
    const fileInput = page.locator('eva-file-upload input[type="file"]');
    await fileInput.setInputFiles({
      name: 'document.pdf',
      mimeType: 'application/pdf',
      buffer: Buffer.from('PDF content'),
    });
    
    // Verify file added
    await expect(page.locator('.file-list')).toContainText('document.pdf');
    await expect(page.locator('.file-size')).toBeVisible();
    
    // Upload button should be enabled
    await expect(page.locator('eva-gc-button[data-action="upload"]')).toBeEnabled();
    
    // Upload file
    await page.click('eva-gc-button[data-action="upload"]');
    
    // Verify progress
    await expect(page.locator('eva-progress')).toBeVisible();
    
    // Verify completion
    await expect(page.locator('eva-alert[variant="success"]')).toBeVisible({ timeout: 10000 });
  });

  test('File upload validation errors', async ({ page }) => {
    await page.click('a[href="#upload"]');
    
    // Try to upload invalid file type
    const fileInput = page.locator('eva-file-upload input[type="file"]');
    await fileInput.setInputFiles({
      name: 'image.exe',
      mimeType: 'application/x-msdownload',
      buffer: Buffer.from('EXE content'),
    });
    
    // Verify error message
    await expect(page.locator('eva-alert[variant="destructive"]')).toBeVisible();
    await expect(page.locator('eva-alert')).toContainText('Invalid file type');
    
    // Upload button should be disabled
    await expect(page.locator('eva-gc-button[data-action="upload"]')).toBeDisabled();
  });
});
