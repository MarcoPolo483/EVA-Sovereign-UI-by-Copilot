# Testing Infrastructure

Comprehensive testing setup for EVA Sovereign UI including unit tests, visual regression, accessibility automation, and performance benchmarks.

## Test Structure

```
tests/
├── accessibility/           # Automated accessibility tests (axe-core)
│   ├── automated.spec.ts   # WCAG 2.2 AA compliance tests
│   └── component-audit.spec.ts
├── performance/            # Performance benchmarks
│   └── performance-benchmarks.spec.ts
├── visual-regression/      # Playwright visual tests
│   ├── setup.ts           # Test fixtures and utilities
│   └── components.spec.ts # Component screenshot tests
└── setup.ts               # Global test setup
```

## Running Tests

### Unit Tests (Vitest)

```bash
# Run all unit tests
npm test

# Run with coverage
npm test -- --coverage

# Run specific test file
npm test -- src/components/ui/eva-button.test.ts

# Watch mode
npm test -- --watch
```

### Visual Regression Tests (Playwright)

```bash
# Run visual regression tests
npm run test:visual

# Update snapshots
npm run test:visual -- --update-snapshots

# Run in headed mode
npm run test:visual -- --headed

# Specific browser
npm run test:visual -- --project=chromium
```

### Accessibility Tests

```bash
# Run accessibility tests
npm run test:a11y

# Generate accessibility report
npm run test:a11y -- --reporter=html

# Run axe-core CLI
npx axe http://localhost:5173 --save results.json
```

### Performance Benchmarks

```bash
# Run performance tests
npm run test:perf

# With detailed output
npm run test:perf -- --reporter=verbose

# Specific test
npm run test:perf -- --grep "Dialog open/close"
```

## Test Coverage

Current coverage: **95%+**

### Coverage by Category

| Category | Lines | Functions | Branches | Statements |
|----------|-------|-----------|----------|------------|
| Components | 95%+ | 94%+ | 84%+ | 95%+ |
| i18n | 100% | 100% | 95%+ | 100% |
| Accessibility | 98%+ | 98%+ | 90%+ | 98%+ |

### Coverage Reports

```bash
# Generate HTML coverage report
npm test -- --coverage

# View report
open coverage/index.html  # macOS
start coverage/index.html # Windows
xdg-open coverage/index.html # Linux
```

## Visual Regression Testing

### How It Works

1. **First Run**: Takes baseline screenshots
2. **Subsequent Runs**: Compares against baseline
3. **Failures**: Shows pixel-level differences

### Example Test

```typescript
import { test, expect } from './setup';

test('Button visual consistency', async ({ visualPage, takeScreenshot, checkAccessibility }) => {
  await visualPage.setContent(`
    <eva-gc-button>Click Me</eva-gc-button>
  `);
  
  await takeScreenshot('button-default');
  await checkAccessibility();
});
```

### Reviewing Failures

```bash
# Open Playwright report
npx playwright show-report
```

Visual diffs shown with:
- Expected (baseline)
- Actual (current)
- Diff (highlighting changes)

## Accessibility Testing

### Automated Checks

- WCAG 2.2 Level AA compliance
- Color contrast ratios
- Keyboard navigation
- ARIA attributes
- Focus management

### Example Test

```typescript
test('Form accessibility', async ({ page }) => {
  await page.setContent(`
    <eva-label for="email">Email</eva-label>
    <eva-input id="email" type="email" required></eva-input>
  `);
  
  const results = await new AxePuppeteer(page)
    .withTags(['wcag2aa', 'wcag22aa'])
    .analyze();
  
  expect(results.violations).toEqual([]);
});
```

### Manual Testing

Use browser extensions:
- [axe DevTools](https://www.deque.com/axe/devtools/)
- [WAVE](https://wave.webaim.org/extension/)
- [Lighthouse](https://developers.google.com/web/tools/lighthouse)

## Performance Testing

### Metrics Tracked

- **Load Time**: Total page load
- **First Paint**: Initial render
- **First Contentful Paint**: First meaningful content
- **Time to Interactive**: When page becomes interactive
- **Memory Usage**: Heap size tracking
- **Bundle Size**: Total JavaScript size

### Performance Targets

| Metric | Target | Current |
|--------|--------|---------|
| Bundle Size | <200 KB | ~150 KB |
| Load Time | <1000ms | ~600ms |
| First Paint | <500ms | ~300ms |
| Memory Leak | <5 MB | <2 MB |

### Example Benchmark

```typescript
test('Dialog performance', async ({ page }) => {
  // Setup
  await page.setContent(`<eva-dialog id="dialog">...</eva-dialog>`);
  
  // Measure open time
  const start = Date.now();
  await page.locator('#trigger').click();
  await page.waitForSelector('eva-dialog[open]');
  const openTime = Date.now() - start;
  
  expect(openTime).toBeLessThan(100);
});
```

## CI/CD Integration

### GitHub Actions

```yaml
name: Test Suite

on: [push, pull_request]

jobs:
  test:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with:
          node-version: '18'
      
      - run: npm ci
      - run: npm test -- --coverage
      - run: npm run test:visual
      - run: npm run test:a11y
      - run: npm run test:perf
      
      - name: Upload coverage
        uses: codecov/codecov-action@v3
        with:
          files: ./coverage/lcov.info
```

## Test Writing Guidelines

### Unit Tests

```typescript
import { describe, it, expect } from 'vitest';

describe('EVAButton', () => {
  it('should render with text', async () => {
    const button = document.createElement('eva-button');
    button.textContent = 'Click';
    document.body.appendChild(button);
    
    await button.updateComplete;
    
    expect(button.textContent).toBe('Click');
  });
});
```

### Integration Tests

```typescript
test('Form submission', async ({ page }) => {
  await page.setContent(`
    <form id="form">
      <eva-input name="name"></eva-input>
      <eva-gc-button type="submit">Submit</eva-gc-button>
    </form>
  `);
  
  await page.fill('eva-input', 'John Doe');
  await page.click('eva-gc-button');
  
  // Assert form data
  const formData = await page.evaluate(() => {
    const form = document.getElementById('form');
    return Object.fromEntries(new FormData(form as HTMLFormElement));
  });
  
  expect(formData.name).toBe('John Doe');
});
```

## Troubleshooting

### Visual Test Failures

**Cause**: Small rendering differences across environments

**Solution**:
```bash
# Update snapshots
npm run test:visual -- --update-snapshots

# Increase tolerance
# In test: takeScreenshot('name', { threshold: 0.3 })
```

### Accessibility Violations

**Cause**: Missing ARIA attributes or insufficient contrast

**Solution**:
```typescript
// Add proper labels
<eva-input aria-label="Email address"></eva-input>

// Add descriptions
<eva-dialog aria-describedby="dialog-description">
  <p id="dialog-description">...</p>
</eva-dialog>
```

### Performance Regressions

**Cause**: Inefficient rendering or memory leaks

**Solution**:
```typescript
// Use event delegation
// Remove event listeners in disconnectedCallback()
// Avoid heavy computations in render()
```

## Resources

- [Vitest Documentation](https://vitest.dev/)
- [Playwright Documentation](https://playwright.dev/)
- [axe-core Rules](https://github.com/dequelabs/axe-core/blob/develop/doc/rule-descriptions.md)
- [Web Performance APIs](https://developer.mozilla.org/en-US/docs/Web/API/Performance)

## License

MIT © EVA Suite Team
