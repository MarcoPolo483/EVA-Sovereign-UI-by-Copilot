# CDN Package Configuration

Configuration for CDN distribution via jsDelivr, unpkg, and esm.sh.

## Package Files Exposed

The following files are automatically available via CDN when the package is published to npm:

### Main Bundle
```
@eva-suite/eva-sovereign-ui-wc@1.1.0/dist/
├── eva-sovereign-ui.es.js       # ES Module bundle (main entry)
├── eva-sovereign-ui.umd.js      # UMD bundle (legacy browsers)
├── style.css                     # Component styles
└── types/                        # TypeScript definitions
```

### Individual Components (Tree-shakeable)
```
@eva-suite/eva-sovereign-ui-wc@1.1.0/dist/components/
├── gc-button.js
├── gc-header.js
├── gc-footer.js
├── input.js
├── select.js
└── ... (all 49 components)
```

## CDN Provider Configuration

### jsDelivr

**Automatic Configuration:**
- Files are automatically available after npm publish
- Global CDN with 750+ locations worldwide
- Supports version ranges and latest tag
- Auto-minification enabled

**URLs:**
```
https://cdn.jsdelivr.net/npm/@eva-suite/eva-sovereign-ui-wc@{version}/dist/eva-sovereign-ui.es.js
https://cdn.jsdelivr.net/npm/@eva-suite/eva-sovereign-ui-wc@{version}/dist/style.css
```

**Features:**
- Permanent caching (immutable once published)
- HTTP/2 and HTTP/3 support
- Brotli compression
- China-friendly (ICP licensed)

### unpkg

**Automatic Configuration:**
- Files available immediately after npm publish
- Simple URL structure
- File browsing interface
- Automatic latest version resolution

**URLs:**
```
https://unpkg.com/@eva-suite/eva-sovereign-ui-wc@{version}/dist/eva-sovereign-ui.es.js
https://unpkg.com/@eva-suite/eva-sovereign-ui-wc@{version}/dist/style.css
```

**Features:**
- Fast global CDN
- Automatic redirects to specific versions
- File listing at package root

### esm.sh

**Automatic Configuration:**
- ES Module-focused CDN
- TypeScript support
- Automatic optimization

**URLs:**
```
https://esm.sh/@eva-suite/eva-sovereign-ui-wc@{version}
https://esm.sh/@eva-suite/eva-sovereign-ui-wc@{version}?bundle
```

**Features:**
- Tree-shaking support
- Automatic dependency resolution
- TypeScript type resolution
- Bundle optimization

## Package.json CDN Configuration

Our `package.json` is optimized for CDN distribution:

```json
{
  "name": "@eva-suite/eva-sovereign-ui-wc",
  "version": "1.1.0",
  "type": "module",
  "main": "./dist/eva-sovereign-ui.umd.js",
  "module": "./dist/eva-sovereign-ui.es.js",
  "types": "./dist/types/index.d.ts",
  "exports": {
    ".": {
      "import": "./dist/eva-sovereign-ui.es.js",
      "require": "./dist/eva-sovereign-ui.umd.js",
      "types": "./dist/types/index.d.ts"
    },
    "./style.css": "./dist/style.css",
    "./components/*": "./dist/components/*"
  },
  "files": [
    "dist",
    "README.md",
    "LICENSE"
  ],
  "jsdelivr": "./dist/eva-sovereign-ui.es.js",
  "unpkg": "./dist/eva-sovereign-ui.umd.js"
}
```

### Key Fields for CDN:

- **`main`**: Default entry for CommonJS (UMD bundle)
- **`module`**: Default entry for ES Modules
- **`types`**: TypeScript definitions
- **`exports`**: Fine-grained export control
  - `.`: Main package entry
  - `./style.css`: Direct CSS import
  - `./components/*`: Individual component imports
- **`files`**: Whitelist of published files (dist folder only)
- **`jsdelivr`**: jsDelivr default entry point
- **`unpkg`**: unpkg default entry point

## Build Configuration for CDN

Our Vite build is optimized for CDN usage:

```javascript
// vite.config.ts
export default defineConfig({
  build: {
    lib: {
      entry: resolve(__dirname, 'src/index.ts'),
      name: 'EVASovereignUI',
      formats: ['es', 'umd'],
      fileName: (format) => `eva-sovereign-ui.${format}.js`
    },
    rollupOptions: {
      output: {
        // Preserve imports for tree-shaking
        preserveModules: false,
        // Global variable for UMD build
        globals: {
          // No external dependencies
        },
        // Optimal chunking for CDN
        manualChunks: undefined
      }
    },
    // Minification for CDN
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: false,
        drop_debugger: true
      }
    },
    // Source maps for debugging
    sourcemap: true,
    // Target modern browsers
    target: 'es2020'
  }
});
```

## Testing CDN Availability

After publishing to npm, test CDN availability:

### jsDelivr
```bash
# Test main bundle
curl -I https://cdn.jsdelivr.net/npm/@eva-suite/eva-sovereign-ui-wc@1.1.0/dist/eva-sovereign-ui.es.js

# Test styles
curl -I https://cdn.jsdelivr.net/npm/@eva-suite/eva-sovereign-ui-wc@1.1.0/dist/style.css

# Browse package files
open https://cdn.jsdelivr.net/npm/@eva-suite/eva-sovereign-ui-wc@1.1.0/
```

### unpkg
```bash
# Test main bundle
curl -I https://unpkg.com/@eva-suite/eva-sovereign-ui-wc@1.1.0/dist/eva-sovereign-ui.es.js

# Test styles
curl -I https://unpkg.com/@eva-suite/eva-sovereign-ui-wc@1.1.0/dist/style.css

# Browse package files
open https://unpkg.com/@eva-suite/eva-sovereign-ui-wc@1.1.0/
```

### esm.sh
```bash
# Test ES module
curl -I https://esm.sh/@eva-suite/eva-sovereign-ui-wc@1.1.0

# Test with bundle optimization
curl -I https://esm.sh/@eva-suite/eva-sovereign-ui-wc@1.1.0?bundle
```

## CDN Cache Invalidation

**Important:** CDN providers cache packages permanently based on version. To update CDN content:

1. **Publish new version** to npm (versions are immutable)
2. **Wait for propagation** (typically 5-15 minutes)
3. **Test new version** using versioned URLs

**Never:**
- Delete published versions from npm (breaks CDN links)
- Expect CDN to update for same version (caching is permanent)

## Version Management

### Recommended Versioning Strategy

For production CDN usage, use **exact versions**:

```html
<!-- Good: Exact version -->
<script src="https://cdn.jsdelivr.net/npm/@eva-suite/eva-sovereign-ui-wc@1.1.0/dist/eva-sovereign-ui.es.js"></script>

<!-- Acceptable: Minor version range (gets bug fixes) -->
<script src="https://cdn.jsdelivr.net/npm/@eva-suite/eva-sovereign-ui-wc@1.1/dist/eva-sovereign-ui.es.js"></script>

<!-- Risky: Major version range (may get breaking changes) -->
<script src="https://cdn.jsdelivr.net/npm/@eva-suite/eva-sovereign-ui-wc@1/dist/eva-sovereign-ui.es.js"></script>

<!-- Dangerous: Latest (can break without notice) -->
<script src="https://cdn.jsdelivr.net/npm/@eva-suite/eva-sovereign-ui-wc/dist/eva-sovereign-ui.es.js"></script>
```

## Security Considerations

### Subresource Integrity (SRI)

Generate SRI hashes for published versions:

```bash
# Install sri-toolbox
npm install -g sri-toolbox

# Generate hash for jsDelivr
sri-toolbox https://cdn.jsdelivr.net/npm/@eva-suite/eva-sovereign-ui-wc@1.1.0/dist/eva-sovereign-ui.es.js

# Output:
# sha384-oqVuAfXRKap7fdgcCY5uykM6+R9GqQ8K/uxy9rx7HNQlGYl1kPzQho1wx4JwY8wC
```

Use in HTML:

```html
<script 
  type="module" 
  src="https://cdn.jsdelivr.net/npm/@eva-suite/eva-sovereign-ui-wc@1.1.0/dist/eva-sovereign-ui.es.js"
  integrity="sha384-oqVuAfXRKap7fdgcCY5uykM6+R9GqQ8K/uxy9rx7HNQlGYl1kPzQho1wx4JwY8wC"
  crossorigin="anonymous"
></script>
```

### Content Security Policy (CSP)

Allow EVA components in CSP headers:

```
Content-Security-Policy: 
  script-src 'self' https://cdn.jsdelivr.net https://unpkg.com;
  style-src 'self' https://cdn.jsdelivr.net https://unpkg.com;
  connect-src 'self';
```

## Performance Monitoring

Monitor CDN performance using Real User Monitoring (RUM):

```html
<script>
  // Track CDN load performance
  window.addEventListener('load', () => {
    const perfData = performance.getEntriesByType('resource')
      .filter(entry => entry.name.includes('cdn.jsdelivr.net'));
    
    perfData.forEach(entry => {
      console.log('CDN Resource:', {
        name: entry.name,
        duration: entry.duration,
        transferSize: entry.transferSize,
        cached: entry.transferSize === 0
      });
    });
  });
</script>
```

## Bundle Size Information

| Bundle | Size (Gzipped) | Description |
|--------|----------------|-------------|
| ES Module | ~85 KB | Main bundle for modern browsers |
| UMD | ~92 KB | Legacy bundle with UMD wrapper |
| CSS | ~45 KB | Component styles |
| Individual Components | ~2-5 KB each | Tree-shakeable imports |

## CDN Monitoring URLs

Monitor CDN status:

- jsDelivr Status: https://status.jsdelivr.com/
- unpkg Status: https://twitter.com/unpkg
- npm Status: https://status.npmjs.org/

## Troubleshooting

### Package Not Available on CDN

1. Check npm publication: `npm view @eva-suite/eva-sovereign-ui-wc`
2. Wait 5-15 minutes for CDN propagation
3. Clear browser cache
4. Check CDN provider status pages

### Wrong Files Served

1. Verify `package.json` `files` field includes `dist`
2. Check `exports` field configuration
3. Verify build output in local `dist/` folder
4. Test with exact version URL (not @latest)

### Performance Issues

1. Use preload: `<link rel="preload" href="..." as="script">`
2. Enable HTTP/2 on your server
3. Use version ranges for automatic updates: `@1.1` instead of `@1.1.0`
4. Consider self-hosting for critical applications

## Resources

- [npm Package](https://www.npmjs.com/package/@eva-suite/eva-sovereign-ui-wc)
- [jsDelivr CDN](https://www.jsdelivr.com/package/npm/@eva-suite/eva-sovereign-ui-wc)
- [unpkg CDN](https://unpkg.com/@eva-suite/eva-sovereign-ui-wc/)
- [CDN Usage Guide](./README.md)
