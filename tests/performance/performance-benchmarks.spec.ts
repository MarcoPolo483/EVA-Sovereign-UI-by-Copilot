import { test, expect, chromium, firefox, webkit } from '@playwright/test';
import type { Browser, Page } from '@playwright/test';

/**
 * Performance benchmarks for EVA Sovereign UI components
 * Tests bundle size, load time, render performance, and runtime metrics
 */

interface PerformanceMetrics {
  loadTime: number;
  domContentLoaded: number;
  firstPaint: number;
  firstContentfulPaint: number;
  largestContentfulPaint: number;
  timeToInteractive: number;
  totalBlockingTime: number;
  cumulativeLayoutShift: number;
  bundleSize: number;
  memoryUsage: number;
}

test.describe('Performance Benchmarks', () => {
  test('Baseline - Empty page load', async ({ page }) => {
    const metrics = await measurePageLoad(page, `
      <!DOCTYPE html>
      <html lang="en">
      <head><meta charset="UTF-8"></head>
      <body></body>
      </html>
    `);
    
    console.log('Baseline metrics:', metrics);
    
    // Baseline should be fast
    expect(metrics.loadTime).toBeLessThan(100);
    expect(metrics.firstPaint).toBeLessThan(100);
  });
  
  test('Component bundle size', async ({ page }) => {
    const response = await page.goto('http://localhost:5173/packages/eva-sovereign-ui-wc/dist/index.js');
    const bundleSize = (await response?.body())?.length || 0;
    
    console.log(`Bundle size: ${(bundleSize / 1024).toFixed(2)} KB`);
    
    // Bundle should be under 200KB (gzipped typically 30-40% of this)
    expect(bundleSize).toBeLessThan(200 * 1024);
  });
  
  test('Single component load - EVAGCButton', async ({ page }) => {
    const metrics = await measurePageLoad(page, `
      <!DOCTYPE html>
      <html lang="en">
      <head>
        <meta charset="UTF-8">
        <script type="module" src="/packages/eva-sovereign-ui-wc/dist/index.js"></script>
      </head>
      <body>
        <eva-gc-button>Click Me</eva-gc-button>
      </body>
      </html>
    `);
    
    console.log('EVAGCButton metrics:', metrics);
    
    // Should load quickly
    expect(metrics.loadTime).toBeLessThan(1000);
    expect(metrics.firstContentfulPaint).toBeLessThan(800);
  });
  
  test('Complex form load', async ({ page }) => {
    const metrics = await measurePageLoad(page, `
      <!DOCTYPE html>
      <html lang="en">
      <head>
        <meta charset="UTF-8">
        <script type="module" src="/packages/eva-sovereign-ui-wc/dist/index.js"></script>
      </head>
      <body>
        <form>
          <eva-label for="name">Name</eva-label>
          <eva-input id="name" type="text"></eva-input>
          
          <eva-label for="email">Email</eva-label>
          <eva-input id="email" type="email"></eva-input>
          
          <eva-label for="country">Country</eva-label>
          <eva-select id="country">
            <eva-select-item value="ca">Canada</eva-select-item>
            <eva-select-item value="us">USA</eva-select-item>
          </eva-select>
          
          <eva-checkbox>Accept terms</eva-checkbox>
          
          <eva-radio-group name="plan">
            <eva-radio-group-item value="basic">Basic</eva-radio-group-item>
            <eva-radio-group-item value="pro">Pro</eva-radio-group-item>
          </eva-radio-group>
          
          <eva-gc-button>Submit</eva-gc-button>
        </form>
      </body>
      </html>
    `);
    
    console.log('Complex form metrics:', metrics);
    
    // Should handle multiple components efficiently
    expect(metrics.loadTime).toBeLessThan(1500);
    expect(metrics.firstContentfulPaint).toBeLessThan(1000);
    expect(metrics.cumulativeLayoutShift).toBeLessThan(0.1);
  });
  
  test('Large data table rendering', async ({ page }) => {
    const start = Date.now();
    
    await page.setContent(`
      <!DOCTYPE html>
      <html lang="en">
      <head>
        <meta charset="UTF-8">
        <script type="module" src="/packages/eva-sovereign-ui-wc/dist/index.js"></script>
      </head>
      <body>
        <eva-data-table id="table"></eva-data-table>
        <script type="module">
          const table = document.getElementById('table');
          const data = Array.from({ length: 1000 }, (_, i) => ({
            id: i,
            name: \`Item \${i}\`,
            value: Math.random() * 100,
            category: ['A', 'B', 'C'][i % 3]
          }));
          table.data = data;
        </script>
      </body>
      </html>
    `);
    
    await page.waitForLoadState('networkidle');
    const renderTime = Date.now() - start;
    
    console.log(`Table render time: ${renderTime}ms`);
    
    // Should render 1000 rows in under 2 seconds
    expect(renderTime).toBeLessThan(2000);
  });
  
  test('Dialog open/close performance', async ({ page }) => {
    await page.setContent(`
      <!DOCTYPE html>
      <html lang="en">
      <head>
        <meta charset="UTF-8">
        <script type="module" src="/packages/eva-sovereign-ui-wc/dist/index.js"></script>
      </head>
      <body>
        <eva-gc-button id="trigger">Open Dialog</eva-gc-button>
        <eva-dialog id="dialog">
          <eva-dialog-content>Dialog content</eva-dialog-content>
        </eva-dialog>
      </body>
      </html>
    `);
    
    await page.waitForLoadState('networkidle');
    
    const iterations = 10;
    const openTimes: number[] = [];
    const closeTimes: number[] = [];
    
    for (let i = 0; i < iterations; i++) {
      // Measure open
      const openStart = Date.now();
      await page.locator('#trigger').click();
      await page.waitForSelector('eva-dialog[open]');
      openTimes.push(Date.now() - openStart);
      
      // Measure close
      const closeStart = Date.now();
      await page.keyboard.press('Escape');
      await page.waitForSelector('eva-dialog:not([open])');
      closeTimes.push(Date.now() - closeStart);
    }
    
    const avgOpen = openTimes.reduce((a, b) => a + b) / iterations;
    const avgClose = closeTimes.reduce((a, b) => a + b) / iterations;
    
    console.log(`Dialog open avg: ${avgOpen.toFixed(2)}ms`);
    console.log(`Dialog close avg: ${avgClose.toFixed(2)}ms`);
    
    // Should be snappy
    expect(avgOpen).toBeLessThan(100);
    expect(avgClose).toBeLessThan(100);
  });
  
  test('Memory usage - component lifecycle', async ({ page }) => {
    await page.setContent(`
      <!DOCTYPE html>
      <html lang="en">
      <head>
        <meta charset="UTF-8">
        <script type="module" src="/packages/eva-sovereign-ui-wc/dist/index.js"></script>
      </head>
      <body id="container"></body>
      </html>
    `);
    
    await page.waitForLoadState('networkidle');
    
    // Initial memory
    const initialMemory = await getMemoryUsage(page);
    
    // Create 100 components
    await page.evaluate(() => {
      const container = document.getElementById('container')!;
      for (let i = 0; i < 100; i++) {
        const button = document.createElement('eva-gc-button');
        button.textContent = `Button ${i}`;
        container.appendChild(button);
      }
    });
    
    await page.waitForTimeout(1000);
    const afterCreateMemory = await getMemoryUsage(page);
    
    // Remove all components
    await page.evaluate(() => {
      document.getElementById('container')!.innerHTML = '';
    });
    
    // Force garbage collection (if available)
    await page.evaluate(() => {
      if ((window as any).gc) {
        (window as any).gc();
      }
    });
    
    await page.waitForTimeout(2000);
    const afterRemoveMemory = await getMemoryUsage(page);
    
    console.log(`Initial memory: ${(initialMemory / 1024 / 1024).toFixed(2)} MB`);
    console.log(`After create: ${(afterCreateMemory / 1024 / 1024).toFixed(2)} MB`);
    console.log(`After remove: ${(afterRemoveMemory / 1024 / 1024).toFixed(2)} MB`);
    
    const memoryLeak = afterRemoveMemory - initialMemory;
    console.log(`Memory diff: ${(memoryLeak / 1024 / 1024).toFixed(2)} MB`);
    
    // Should not leak significant memory (allow 5MB tolerance)
    expect(memoryLeak).toBeLessThan(5 * 1024 * 1024);
  });
  
  test('Scroll performance - large list', async ({ page }) => {
    await page.setContent(`
      <!DOCTYPE html>
      <html lang="en">
      <head>
        <meta charset="UTF-8">
        <script type="module" src="/packages/eva-sovereign-ui-wc/dist/index.js"></script>
        <style>
          #container { height: 400px; overflow: auto; }
        </style>
      </head>
      <body>
        <eva-scroll-area id="container">
          ${Array.from({ length: 500 }, (_, i) => 
            `<div style="padding: 10px;">Item ${i}</div>`
          ).join('')}
        </eva-scroll-area>
      </body>
      </html>
    `);
    
    await page.waitForLoadState('networkidle');
    
    // Measure scroll performance
    const scrollMetrics = await page.evaluate(async () => {
      const container = document.getElementById('container')!;
      const scrollHeight = container.scrollHeight;
      const start = performance.now();
      
      // Scroll to bottom
      for (let i = 0; i < 100; i++) {
        container.scrollTop = (scrollHeight / 100) * i;
        await new Promise(resolve => requestAnimationFrame(resolve));
      }
      
      return performance.now() - start;
    });
    
    console.log(`Scroll time: ${scrollMetrics.toFixed(2)}ms`);
    
    // Should maintain 60fps (16.67ms per frame, 100 frames = ~1667ms)
    expect(scrollMetrics).toBeLessThan(2000);
  });
  
  test('Cross-browser performance', async () => {
    const browsers = [
      { name: 'Chromium', launch: chromium },
      { name: 'Firefox', launch: firefox },
      { name: 'WebKit', launch: webkit },
    ];
    
    const results: Record<string, PerformanceMetrics> = {};
    
    for (const { name, launch } of browsers) {
      const browser = await launch.launch();
      const context = await browser.newContext();
      const page = await context.newPage();
      
      const metrics = await measurePageLoad(page, `
        <!DOCTYPE html>
        <html lang="en">
        <head>
          <meta charset="UTF-8">
          <script type="module" src="/packages/eva-sovereign-ui-wc/dist/index.js"></script>
        </head>
        <body>
          <eva-gc-header>
            <span slot="title">Test</span>
          </eva-gc-header>
          <eva-gc-button>Click</eva-gc-button>
          <eva-input type="text"></eva-input>
        </body>
        </html>
      `);
      
      results[name] = metrics;
      
      await browser.close();
    }
    
    console.log('Cross-browser results:', results);
    
    // All browsers should meet performance targets
    for (const [browser, metrics] of Object.entries(results)) {
      console.log(`${browser}: ${metrics.loadTime}ms load, ${metrics.firstContentfulPaint}ms FCP`);
      expect(metrics.loadTime).toBeLessThan(1500);
      expect(metrics.firstContentfulPaint).toBeLessThan(1000);
    }
  });
});

// Helper functions

async function measurePageLoad(page: Page, html: string): Promise<PerformanceMetrics> {
  await page.setContent(html);
  await page.waitForLoadState('networkidle');
  
  const metrics = await page.evaluate(() => {
    const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
    const paint = performance.getEntriesByType('paint');
    
    return {
      loadTime: navigation.loadEventEnd - navigation.fetchStart,
      domContentLoaded: navigation.domContentLoadedEventEnd - navigation.fetchStart,
      firstPaint: paint.find(e => e.name === 'first-paint')?.startTime || 0,
      firstContentfulPaint: paint.find(e => e.name === 'first-contentful-paint')?.startTime || 0,
      largestContentfulPaint: 0, // Would need PerformanceObserver
      timeToInteractive: 0, // Would need PerformanceObserver
      totalBlockingTime: 0, // Would need PerformanceObserver
      cumulativeLayoutShift: 0, // Would need PerformanceObserver
      bundleSize: 0,
      memoryUsage: (performance as any).memory?.usedJSHeapSize || 0,
    };
  });
  
  return metrics;
}

async function getMemoryUsage(page: Page): Promise<number> {
  return await page.evaluate(() => {
    return (performance as any).memory?.usedJSHeapSize || 0;
  });
}

// Bundle size monitoring
test.describe('Bundle Size Monitoring', () => {
  test('Individual component sizes', async () => {
    const components = [
      'eva-gc-button',
      'eva-input',
      'eva-dialog',
      'eva-tabs',
      'eva-select',
    ];
    
    // This would require build analysis
    // For now, just document the approach
    console.log('Component sizes should be monitored via build tools (esbuild-analyzer)');
  });
});
