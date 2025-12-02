# ⚠️ DEPRECATED

**This React demo folder is deprecated as of v1.5.0 and will be removed in v2.0.0.**

## Migration Required

This legacy React application has been superseded by:

### ✅ Official React Wrapper Package

Use the official `@eva-suite/sovereign-ui-react` package for React applications.

**Installation**:
```bash
npm install @eva-suite/sovereign-ui-react
```

**Usage**:
```tsx
import { EVAButton, EVAGCHeader, EVAChatPanel } from '@eva-suite/sovereign-ui-react';

function App() {
  return (
    <div>
      <EVAGCHeader locale="en-CA" />
      <EVAButton variant="primary">Click me</EVAButton>
      <EVAChatPanel />
    </div>
  );
}
```

**Location**: See `packages/eva-sovereign-ui-react/` for all React components.

### ✅ Dev Kit Demo

For interactive component examples with React code tabs:

```bash
npm run dev:devkit
```

Access: `/apps/dev-kit-demo/index.html`

---

See [LEGACY-DEMOS-DEPRECATED.md](../LEGACY-DEMOS-DEPRECATED.md) for complete migration guide.

**Last Updated**: December 2, 2025
