# EVA Sovereign UI - Demo Applications

This directory contains interactive demo applications showcasing EVA Sovereign UI Web Components.

## 📦 Demo Applications

### 1. Dev Kit Demo (`apps/dev-kit-demo/`)

**Purpose:** Comprehensive component gallery and developer reference

**Features:**
- ✅ Complete showcase of all 49 components
- ✅ Five Eyes theme switcher (Canada, USA, UK, Australia, New Zealand)
- ✅ Interactive code examples with live editing
- ✅ Bilingual support (EN/FR)
- ✅ Responsive layout demonstration
- ✅ Accessibility testing tools
- ✅ Real-time component interaction

**URL:** https://eva-devkit.netlify.app (deployed via CI/CD)

**Local Development:**
```bash
npm run dev:devkit
# Opens http://localhost:5173
```

**Build:**
```bash
npm run build:devkit
# Output: dist-devkit/
```

### 2. ESDC Demo (`apps/esdc-demo/`)

**Purpose:** Employment and Social Development Canada public portal demo

**Features:**
- ✅ Government service application flows
- ✅ ESDC-specific components (Program Cards, Service Forms)
- ✅ GC Design System compliance
- ✅ WCAG 2.2 AA accessibility
- ✅ Bilingual content (EN/FR)
- ✅ Real-world government scenarios
- ✅ Form validation examples

**URL:** https://eva-esdc-demo.netlify.app (deployed via CI/CD)

**Local Development:**
```bash
npm run dev:esdc
# Opens http://localhost:5174
```

**Build:**
```bash
npm run build:esdc
# Output: dist-esdc/
```

## 🚀 Automated Deployment

Both demo applications are automatically deployed via GitHub Actions CI/CD pipeline:

### Deployment Workflow

1. **Trigger:** Push to `main` branch or pull request
2. **Build:** Both demos built in parallel (Task: `build` job)
3. **Deploy:** Uploaded to Netlify (Task: `deploy-demos` job)
4. **Preview:** PR deployments create preview URLs

### Configuration

**Netlify Sites:**
- Dev Kit: `eva-devkit` site
- ESDC: `eva-esdc-demo` site

**Environment Variables:**
```yaml
NETLIFY_AUTH_TOKEN: ${{ secrets.NETLIFY_AUTH_TOKEN }}
NETLIFY_SITE_ID_DEVKIT: ${{ secrets.NETLIFY_SITE_ID_DEVKIT }}
NETLIFY_SITE_ID_ESDC: ${{ secrets.NETLIFY_SITE_ID_ESDC }}
```

### Manual Deployment

Deploy manually via GitHub Actions UI:
1. Go to Actions tab
2. Select "CI/CD Pipeline" workflow
3. Click "Run workflow"
4. Select `main` branch
5. Click "Run workflow" button

## 🎨 Component Categories Demonstrated

### GC Design System
- GC Header with official branding
- GC Footer with government links
- GC Buttons with proper styling
- Language Switcher (EN/FR)

### Form Controls
- Input (text, email, password, search)
- Textarea (multi-line text)
- Select (dropdown menus)
- Checkbox (single/multiple selection)
- Radio Groups (exclusive selection)
- Switch (toggle on/off)

### UI Components
- Cards (content containers)
- Dialogs (modal windows)
- Alerts (status messages)
- Badges (labels and counts)
- Tabs (tabbed interfaces)
- Tables (data grids)
- Pagination (page navigation)
- Accordion (collapsible sections)
- Breadcrumbs (navigation trail)

### Layout
- Page Shell (full page structure)
- Container (content width management)
- Hero Banner (page headers)

### Accessibility
- Skip Links (keyboard navigation)
- Focus Management
- ARIA attributes
- Keyboard shortcuts

### ESDC-Specific
- Program Cards (service information)
- Application Forms (multi-step flows)
- Service Initiation (process starting)
- Contact Information

## 📱 Responsive Design

All demos are fully responsive:
- ✅ Mobile (320px+)
- ✅ Tablet (768px+)
- ✅ Desktop (1024px+)
- ✅ Large screens (1200px+)

## ♿ Accessibility

WCAG 2.2 AA compliance:
- ✅ Color contrast ratios
- ✅ Keyboard navigation
- ✅ Screen reader support
- ✅ Focus indicators
- ✅ ARIA labels and roles
- ✅ Semantic HTML

## 🌐 Internationalization

Bilingual support:
- ✅ English (Canada) - en-CA
- ✅ French (Canada) - fr-CA
- ✅ Language switcher in header
- ✅ Dynamic content translation
- ✅ Locale-aware formatting

Five Eyes locales supported:
- 🇨🇦 Canada (en-CA, fr-CA)
- 🇺🇸 United States (en-US)
- 🇬🇧 United Kingdom (en-GB)
- 🇦🇺 Australia (en-AU)
- 🇳🇿 New Zealand (en-NZ)

## 🧪 Testing Demos Locally

### Dev Kit Demo
```bash
# Development mode with hot reload
npm run dev:devkit

# Production build
npm run build:devkit
npm run preview:devkit
```

### ESDC Demo
```bash
# Development mode with hot reload
npm run dev:esdc

# Production build
npm run build:esdc
npm run preview:esdc
```

### All Demos
```bash
# Build all applications (including demos)
npm run build

# Preview all
npm run preview
```

## 📊 Performance

Both demos are optimized for performance:
- ✅ Lazy loading of components
- ✅ Code splitting
- ✅ Asset optimization
- ✅ Minified bundles
- ✅ Gzip compression
- ✅ CDN delivery via Netlify

**Bundle Sizes:**
- Dev Kit: ~250 KB (gzipped)
- ESDC: ~180 KB (gzipped)

**Lighthouse Scores:**
- Performance: 95+
- Accessibility: 100
- Best Practices: 100
- SEO: 100

## 🛠️ Development

### Adding New Component Demos

1. **Edit Demo HTML:**
```html
<!-- apps/dev-kit-demo/index.html -->
<section class="component-demo">
  <h2 class="demo-title">New Component</h2>
  <eva-new-component></eva-new-component>
  
  <div class="code-example">
    <code>&lt;eva-new-component&gt;&lt;/eva-new-component&gt;</code>
  </div>
</section>
```

2. **Import Component:**
```html
<script type="module">
  import '../../packages/eva-sovereign-ui-wc/src/components/ui/eva-new-component.js';
</script>
```

3. **Test Locally:**
```bash
npm run dev:devkit
```

4. **Deploy:**
```bash
git add .
git commit -m "feat(demo): add new component example"
git push
# CI/CD automatically deploys to Netlify
```

### Updating ESDC Demo

1. **Edit Content:**
```html
<!-- apps/esdc-demo/index.html -->
<main>
  <eva-hero-banner>
    <h1>Employment Services</h1>
  </eva-hero-banner>
  
  <eva-program-card
    title="Employment Insurance"
    description="Financial support during job search"
    href="/ei"
  ></eva-program-card>
</main>
```

2. **Add Translations:**
```javascript
const translations = {
  'en-CA': {
    heroTitle: 'Employment Services',
    programTitle: 'Employment Insurance',
    programDesc: 'Financial support during job search'
  },
  'fr-CA': {
    heroTitle: 'Services d\'emploi',
    programTitle: 'Assurance-emploi',
    programDesc: 'Soutien financier pendant la recherche d\'emploi'
  }
};
```

3. **Test & Deploy:**
```bash
npm run dev:esdc
# Test changes, then commit and push
```

## 📝 Documentation

Each demo includes:
- ✅ Inline code examples
- ✅ Usage patterns
- ✅ Accessibility notes
- ✅ Interactive controls
- ✅ API reference links

## 🐛 Troubleshooting

### Demo Not Loading
```bash
# Clear node_modules and reinstall
rm -rf node_modules package-lock.json
npm install

# Rebuild demos
npm run build:devkit
npm run build:esdc
```

### Components Not Rendering
- Check browser console for errors
- Verify component imports in HTML
- Ensure Web Components are supported (Chrome 67+, Firefox 63+, Safari 10.1+)

### Netlify Deployment Fails
- Check GitHub Actions logs
- Verify Netlify secrets are set
- Confirm build succeeds locally

## 🔗 Links

- **Dev Kit Live:** https://eva-devkit.netlify.app
- **ESDC Live:** https://eva-esdc-demo.netlify.app
- **Storybook:** https://eva-suite.github.io/eva-sovereign-ui (deployed via CI/CD)
- **GitHub:** https://github.com/eva-suite/eva-sovereign-ui
- **npm:** https://www.npmjs.com/package/@eva-suite/sovereign-ui

## 📄 License

MIT © EVA Suite Team
