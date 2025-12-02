import { test as base, expect } from '@playwright/test';
import type { Page } from '@playwright/test';
import { injectAxe, checkA11y, getViolations } from 'axe-playwright';

export interface VisualTestFixtures {
  /**
   * Page with common setup for visual regression tests
   */
  visualPage: Page;
  
  /**
   * Take a screenshot with consistent options
   */
  takeScreenshot: (name: string, options?: ScreenshotOptions) => Promise<void>;
  
  /**
   * Check accessibility with axe-core
   */
  checkAccessibility: (options?: A11yCheckOptions) => Promise<void>;
}

export interface ScreenshotOptions {
  /**
   * Full page screenshot (default: false)
   */
  fullPage?: boolean;
  
  /**
   * Mask elements before screenshot
   */
  mask?: string[];
  
  /**
   * Animations disabled (default: 'disabled')
   */
  animations?: 'disabled' | 'allow';
}

export interface A11yCheckOptions {
  /**
   * Specific element to test (default: entire page)
   */
  selector?: string;
  
  /**
   * Rules to run or skip
   */
  rules?: {
    [key: string]: { enabled: boolean };
  };
  
  /**
   * Elements to exclude from testing
   */
  exclude?: string[];
}

/**
 * Extended Playwright test with visual regression and accessibility utilities
 */
export const test = base.extend<VisualTestFixtures>({
  visualPage: async ({ page }, use) => {
    // Disable animations for consistent screenshots
    await page.addInitScript(() => {
      (window as any).matchMedia = (query: string) => ({
        matches: query === '(prefers-reduced-motion: reduce)',
        media: query,
        onchange: null,
        addEventListener: () => {},
        removeEventListener: () => {},
        dispatchEvent: () => true,
      });
    });
    
    // Set viewport for consistency
    await page.setViewportSize({ width: 1280, height: 720 });
    
    // Inject axe-core for accessibility testing
    await page.goto('about:blank');
    await injectAxe(page);
    
    await use(page);
  },
  
  takeScreenshot: async ({ visualPage }, use) => {
    const takeScreenshot = async (
      name: string,
      options: ScreenshotOptions = {}
    ) => {
      const {
        fullPage = false,
        mask = [],
        animations = 'disabled'
      } = options;
      
      // Mask elements if specified
      const maskLocators = mask.map(selector => 
        visualPage.locator(selector)
      );
      
      // Wait for fonts to load
      await visualPage.evaluate(() => document.fonts.ready);
      
      // Take screenshot
      await expect(visualPage).toHaveScreenshot(`${name}.png`, {
        fullPage,
        mask: maskLocators,
        animations,
        maxDiffPixelRatio: 0.01, // 1% diff tolerance
        threshold: 0.2 // Pixel diff threshold
      });
    };
    
    await use(takeScreenshot);
  },
  
  checkAccessibility: async ({ visualPage }, use) => {
    const checkAccessibility = async (
      options: A11yCheckOptions = {}
    ) => {
      const {
        selector,
        rules = {},
        exclude = []
      } = options;
      
      // Run axe-core
      await checkA11y(visualPage, selector, {
        axeOptions: {
          rules,
        },
        detailedReport: true,
        detailedReportOptions: {
          html: true,
        },
      }, true, 'v2');
      
      // Get violations for custom assertions
      const violations = await getViolations(visualPage, selector, {
        rules,
      });
      
      // Fail test if critical violations found
      const criticalViolations = violations.filter(
        v => ['critical', 'serious'].includes(v.impact || '')
      );
      
      if (criticalViolations.length > 0) {
        throw new Error(
          `Found ${criticalViolations.length} critical accessibility violations:\n` +
          criticalViolations.map(v => 
            `  - ${v.id}: ${v.description}\n` +
            `    Impact: ${v.impact}\n` +
            `    Elements: ${v.nodes.length}`
          ).join('\n')
        );
      }
    };
    
    await use(checkAccessibility);
  },
});

export { expect } from '@playwright/test';
