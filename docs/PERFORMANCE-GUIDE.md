# Performance Optimization Guide - EVA Sovereign UI

## Overview

EVA Sovereign UI is optimized for production use with a focus on:
- **Small bundle size**: 75.36 KB ES / 60.68 KB UMD (uncompressed)
- **Fast load times**: <2.5s LCP, <100ms FID
- **Efficient rendering**: 60fps animations, <16ms render time
- **Memory efficiency**: Minimal memory footprint, no leaks

## Bundle Size Analysis

### Current Bundle Sizes

```
eva-sovereign-ui.es.js    75.36 KB (uncompressed)
                          ~22 KB (gzipped estimate)
                          
eva-sovereign-ui.umd.js   60.68 KB (uncompressed)
                          ~18 KB (gzipped estimate)
```

### Bundle Size Optimization

#### Tree Shaking (Automatic)

EVA Sovereign UI is built as ES modules with full tree-shaking support. Only import what you use:

```typescript
// ✅ Good - Only imports specific components
import { EVAButton, EVAInput } from '@eva-sovereign/ui-wc';

// ❌ Bad - Imports everything
import * as EVA from '@eva-sovereign/ui-wc';
```

#### Code Splitting Example

```typescript
// Lazy load heavy components
const loadDataGrid = () => import('@eva-sovereign/ui-wc/components/eva-data-grid');

// Use when needed
button.addEventListener('click', async () => {
  const { EVADataGrid } = await loadDataGrid();
  customElements.define('eva-data-grid', EVADataGrid);
});
```

## Web Vitals Monitoring

### Setup

```typescript
import { webVitalsMonitor } from '@eva-sovereign/ui-wc/utils/performance';

// Monitor Web Vitals
webVitalsMonitor.onMetricsUpdate((metrics) => {
  console.log('Web Vitals:', metrics);
  
  // Send to analytics
  if (metrics.LCP) {
    analytics.track('LCP', metrics.LCP);
  }
  if (metrics.FID) {
    analytics.track('FID', metrics.FID);
  }
  if (metrics.CLS) {
    analytics.track('CLS', metrics.CLS);
  }
});

// Get current metrics
const metrics = webVitalsMonitor.getMetrics();
console.log('Current metrics:', metrics);

// Evaluate against thresholds
const evaluation = webVitalsMonitor.evaluateMetrics();
console.log('Evaluation:', evaluation);
// { LCP: 'good', FID: 'good', CLS: 'needs-improvement' }
```

### Web Vitals Targets

| Metric | Good | Needs Improvement | Poor |
|--------|------|-------------------|------|
| **LCP** (Largest Contentful Paint) | ≤2.5s | ≤4.0s | >4.0s |
| **FID** (First Input Delay) | ≤100ms | ≤300ms | >300ms |
| **CLS** (Cumulative Layout Shift) | ≤0.1 | ≤0.25 | >0.25 |
| **FCP** (First Contentful Paint) | ≤1.8s | ≤3.0s | >3.0s |
| **TTI** (Time to Interactive) | ≤3.8s | ≤7.3s | >7.3s |
| **TBT** (Total Blocking Time) | ≤200ms | ≤600ms | >600ms |

## Component Performance Tracking

### Track Component Performance

```typescript
import { componentTracker } from '@eva-sovereign/ui-wc/utils/performance';

class MyComponent extends HTMLElement {
  connectedCallback() {
    // Mark start of initialization
    componentTracker.markStart('MyComponent', 'init');
    
    this.setupShadowDOM();
    this.attachEventListeners();
    
    // Mark end of initialization
    componentTracker.markEnd('MyComponent', 'init');
    
    // Track render
    componentTracker.markStart('MyComponent', 'render');
    this.render();
    componentTracker.markEnd('MyComponent', 'render');
  }
  
  attributeChangedCallback() {
    // Track updates
    componentTracker.markStart('MyComponent', 'update');
    this.update();
    componentTracker.markEnd('MyComponent', 'update');
  }
}

// Get metrics
const metrics = componentTracker.getMetrics('MyComponent');
console.log('Component metrics:', metrics);
// { name: 'MyComponent', initTime: 12, renderTime: 8, updateCount: 5 }

// Find slow components
const slowComponents = componentTracker.getSlowComponents(16); // >16ms
console.log('Slow components:', slowComponents);
```

## Lazy Loading

### Lazy Load Components

```typescript
import { lazyLoadComponent } from '@eva-sovereign/ui-wc/utils/performance';

// Lazy load heavy component when visible
const element = document.querySelector('#data-grid-container');

const cleanup = lazyLoadComponent(
  element,
  async () => {
    // Load component only when visible
    const { EVADataGrid } = await import('@eva-sovereign/ui-wc/components/eva-data-grid');
    customElements.define('eva-data-grid', EVADataGrid);
  },
  {
    rootMargin: '50px', // Load 50px before visible
    onVisible: (el) => {
      console.log('Component loaded!');
    },
  }
);

// Cleanup when done
cleanup();
```

### Lazy Loader for Multiple Elements

```typescript
import { LazyLoader } from '@eva-sovereign/ui-wc/utils/performance';

const loader = new LazyLoader({
  rootMargin: '100px',
  threshold: 0.1,
});

// Observe multiple images
document.querySelectorAll('img[data-src]').forEach((img) => {
  loader.observe(img, {
    onVisible: (el) => {
      const imgEl = el as HTMLImageElement;
      imgEl.src = imgEl.dataset.src!;
      imgEl.removeAttribute('data-src');
    },
  });
});
```

## Performance Budgets

### Set Performance Budgets

```typescript
import { PerformanceBudgetMonitor, DEFAULT_PERFORMANCE_BUDGET } from '@eva-sovereign/ui-wc/utils/performance';

// Use default budget
const budgetMonitor = new PerformanceBudgetMonitor();

// Or set custom budget
const customBudget = {
  ...DEFAULT_PERFORMANCE_BUDGET,
  maxInitTime: 30,      // 30ms max init
  maxRenderTime: 10,    // 10ms max render (strict)
  maxBundleSize: 150,   // 150KB max
};

const monitor = new PerformanceBudgetMonitor(customBudget);

// Check component against budget
const componentMetrics = componentTracker.getMetrics('EVAButton');
const result = monitor.checkComponent(componentMetrics);

if (!result.passed) {
  console.warn('Performance budget violations:', result.violations);
  // ['Init time 45.23ms exceeds budget 30ms']
}

// Check Web Vitals against budget
const webVitalsMetrics = webVitalsMonitor.getMetrics();
const vitalsResult = monitor.checkWebVitals(webVitalsMetrics);

if (!vitalsResult.passed) {
  console.warn('Web Vitals violations:', vitalsResult.violations);
}
```

### Default Performance Budget

```typescript
{
  maxBundleSize: 200,    // 200 KB
  maxInitTime: 50,       // 50ms per component
  maxRenderTime: 16,     // 16ms (60fps)
  maxMemoryUsage: 50,    // 50 MB
  maxLCP: 2500,          // 2.5s
  maxFID: 100,           // 100ms
  maxCLS: 0.1,           // 0.1
}
```

## Memory Leak Detection

### Monitor Memory Usage

```typescript
import { MemoryLeakDetector } from '@eva-sovereign/ui-wc/utils/performance';

const detector = new MemoryLeakDetector();

// Start monitoring (takes snapshot every 5 seconds)
detector.startMonitoring(5000);

// After some time, analyze trends
setTimeout(() => {
  const analysis = detector.analyze();
  
  console.log('Memory trend:', analysis.trend); // 'increasing' | 'stable' | 'decreasing'
  console.log('Leak suspected:', analysis.leakSuspected); // true/false
  console.log('Average growth:', (analysis.averageGrowthPerSnapshot / 1024 / 1024).toFixed(2), 'MB');
  
  if (analysis.leakSuspected) {
    console.error('⚠️ Memory leak detected!');
    console.log(detector.exportReport());
  }
  
  // Stop monitoring
  detector.stopMonitoring();
}, 60000); // After 1 minute
```

### Manual Memory Snapshots

```typescript
const detector = new MemoryLeakDetector();

// Take snapshots manually
const before = detector.takeSnapshot();

// Do something that might leak memory
for (let i = 0; i < 1000; i++) {
  document.body.appendChild(document.createElement('div'));
}

const after = detector.takeSnapshot();

if (before && after) {
  const growth = after.usedJSHeapSize - before.usedJSHeapSize;
  console.log('Memory growth:', (growth / 1024 / 1024).toFixed(2), 'MB');
}
```

## Resource Loading Optimization

### Preload Critical Resources

```typescript
import { preloadResource, prefetchResource } from '@eva-sovereign/ui-wc/utils/performance';

// Preload critical CSS
preloadResource('/css/critical.css', 'style');

// Preload fonts
preloadResource('/fonts/inter.woff2', 'font');

// Prefetch resources for next page
prefetchResource('/dashboard.js');
prefetchResource('/dashboard.css');
```

### Debounce and Throttle

```typescript
import { debounce, throttle } from '@eva-sovereign/ui-wc/utils/performance';

// Debounce search input (wait 300ms after typing stops)
const handleSearch = debounce((query: string) => {
  console.log('Searching:', query);
  performSearch(query);
}, 300);

input.addEventListener('input', (e) => {
  handleSearch((e.target as HTMLInputElement).value);
});

// Throttle scroll handler (max once per 100ms)
const handleScroll = throttle(() => {
  console.log('Scroll position:', window.scrollY);
  updateScrollIndicator();
}, 100);

window.addEventListener('scroll', handleScroll);
```

### Request Idle Callback

```typescript
import { requestIdleCallback, cancelIdleCallback } from '@eva-sovereign/ui-wc/utils/performance';

// Run non-critical work when browser is idle
const id = requestIdleCallback((deadline) => {
  while (deadline.timeRemaining() > 0 && tasksRemaining()) {
    performNonCriticalWork();
  }
  
  if (tasksRemaining()) {
    // Schedule more work
    requestIdleCallback(arguments.callee);
  }
}, { timeout: 2000 }); // Max 2s wait

// Cancel if needed
cancelIdleCallback(id);
```

## Optimization Best Practices

### 1. Component Optimization

```typescript
class OptimizedComponent extends HTMLElement {
  private updateScheduled = false;
  
  attributeChangedCallback() {
    // Batch updates using requestAnimationFrame
    if (!this.updateScheduled) {
      this.updateScheduled = true;
      requestAnimationFrame(() => {
        this.update();
        this.updateScheduled = false;
      });
    }
  }
  
  update() {
    // Use DocumentFragment for batch DOM updates
    const fragment = document.createDocumentFragment();
    
    // Build DOM off-screen
    for (const item of this.items) {
      const el = this.createItemElement(item);
      fragment.appendChild(el);
    }
    
    // Single DOM update
    this.shadowRoot!.appendChild(fragment);
  }
  
  disconnectedCallback() {
    // Clean up event listeners to prevent memory leaks
    this.removeAllEventListeners();
  }
}
```

### 2. Virtual Scrolling for Large Lists

```typescript
// Use eva-data-grid with virtual scrolling for large datasets
<eva-data-grid
  virtual-scroll
  row-height="40"
  visible-rows="20"
></eva-data-grid>

// Only visible rows are rendered (20 DOM nodes instead of 10,000)
```

### 3. Image Optimization

```html
<!-- Use lazy loading for images -->
<img 
  src="placeholder.jpg" 
  data-src="large-image.jpg" 
  loading="lazy"
  width="800" 
  height="600"
/>

<!-- Use responsive images -->
<picture>
  <source srcset="image-800.webp" type="image/webp" media="(min-width: 800px)">
  <source srcset="image-400.webp" type="image/webp" media="(min-width: 400px)">
  <img src="image-400.jpg" alt="Description" loading="lazy">
</picture>
```

### 4. CSS Optimization

```css
/* Use CSS containment for better rendering performance */
eva-card {
  contain: layout style paint;
}

/* Use will-change sparingly for animations */
eva-modal[open] {
  will-change: transform, opacity;
}

eva-modal:not([open]) {
  will-change: auto; /* Reset after animation */
}

/* Use transform and opacity for animations (GPU accelerated) */
@keyframes slideIn {
  from { transform: translateY(-100%); }
  to { transform: translateY(0); }
}
```

### 5. Network Optimization

```html
<!-- Use CDN with compression -->
<script 
  type="module" 
  src="https://cdn.jsdelivr.net/npm/@eva-sovereign/ui-wc@latest/dist/eva-sovereign-ui.es.js"
  crossorigin
></script>

<!-- Enable HTTP/2 Server Push for critical resources -->
<!-- In your server config -->
Link: </css/critical.css>; rel=preload; as=style
Link: </js/eva-sovereign-ui.es.js>; rel=preload; as=script
```

## Performance Testing

### Lighthouse CI

```bash
# Install Lighthouse CI
npm install -g @lhci/cli

# Run audit
lhci autorun --collect.url=http://localhost:5173
```

### Playwright Performance Tests

```typescript
// tests/performance/performance-benchmarks.spec.ts
test('Component load performance', async ({ page }) => {
  const startTime = Date.now();
  
  await page.goto('http://localhost:5173');
  await page.waitForLoadState('networkidle');
  
  const loadTime = Date.now() - startTime;
  console.log('Load time:', loadTime, 'ms');
  
  expect(loadTime).toBeLessThan(1000); // <1s load time
  
  // Check Web Vitals
  const metrics = await page.evaluate(() => {
    const navigation = performance.getEntriesByType('navigation')[0] as any;
    return {
      loadTime: navigation.loadEventEnd - navigation.fetchStart,
      domContentLoaded: navigation.domContentLoadedEventEnd - navigation.fetchStart,
    };
  });
  
  expect(metrics.loadTime).toBeLessThan(1000);
  expect(metrics.domContentLoaded).toBeLessThan(800);
});
```

### Bundle Size Guard

```bash
# Run bundle size check
npm run size-guard

# Output:
# ✅ Bundle size: 75.36 KB (within 200 KB budget)
# ✅ Gzipped: ~22 KB (estimated)
```

## Production Checklist

- [ ] Enable production build optimizations
- [ ] Use CDN with compression (Brotli/Gzip)
- [ ] Enable HTTP/2 or HTTP/3
- [ ] Set up performance monitoring
- [ ] Configure performance budgets
- [ ] Implement lazy loading for heavy components
- [ ] Use virtual scrolling for large lists
- [ ] Optimize images (WebP, lazy loading)
- [ ] Set up caching headers
- [ ] Monitor Web Vitals in production
- [ ] Run Lighthouse audits regularly
- [ ] Test on low-end devices
- [ ] Test on slow networks (3G)

## Monitoring in Production

### Setup Performance Monitoring

```typescript
import { 
  webVitalsMonitor, 
  componentTracker,
  budgetMonitor 
} from '@eva-sovereign/ui-wc/utils/performance';

// Send metrics to analytics service
webVitalsMonitor.onMetricsUpdate((metrics) => {
  // Send to your analytics (Google Analytics, Datadog, etc.)
  gtag('event', 'web_vitals', {
    metric_name: 'LCP',
    value: metrics.LCP,
    metric_rating: webVitalsMonitor.evaluateMetrics().LCP,
  });
});

// Monitor component performance
setInterval(() => {
  const slowComponents = componentTracker.getSlowComponents(16);
  if (slowComponents.length > 0) {
    console.warn('Slow components detected:', slowComponents);
    // Send alert
  }
}, 60000); // Check every minute

// Check performance budgets
const budgetCheck = budgetMonitor.checkWebVitals(webVitalsMonitor.getMetrics());
if (!budgetCheck.passed) {
  console.error('Performance budget violations:', budgetCheck.violations);
  // Send alert to monitoring service
}
```

## Troubleshooting

### Slow Component Initialization

```typescript
// Profile component initialization
componentTracker.markStart('SlowComponent', 'init');

// ... initialization code ...

const initTime = componentTracker.markEnd('SlowComponent', 'init');
console.log('Init time:', initTime, 'ms');

// If >50ms, consider:
// 1. Lazy loading heavy dependencies
// 2. Deferring non-critical setup
// 3. Using requestIdleCallback for non-critical work
```

### Memory Leaks

```typescript
// Run memory leak detection
const detector = new MemoryLeakDetector();
detector.startMonitoring(5000);

// After some time
setTimeout(() => {
  const analysis = detector.analyze();
  if (analysis.leakSuspected) {
    console.error('Memory leak detected!');
    console.log(detector.exportReport());
    
    // Common causes:
    // 1. Event listeners not removed
    // 2. Circular references
    // 3. Cached DOM references
    // 4. Timers not cleared
  }
  detector.stopMonitoring();
}, 60000);
```

### Poor Web Vitals

```typescript
// Check which metrics are poor
const evaluation = webVitalsMonitor.evaluateMetrics();
console.log('Web Vitals evaluation:', evaluation);

// Poor LCP: Optimize images, reduce bundle size, use CDN
// Poor FID: Reduce JavaScript execution time, split bundles
// Poor CLS: Set explicit sizes, avoid dynamic content injection
```

## Resources

- [Web Vitals](https://web.dev/vitals/)
- [Lighthouse](https://developers.google.com/web/tools/lighthouse)
- [Chrome DevTools Performance](https://developer.chrome.com/docs/devtools/performance/)
- [Performance Budget Calculator](https://www.performancebudget.io/)
- [Bundle Size Tools](https://bundlephobia.com/)
