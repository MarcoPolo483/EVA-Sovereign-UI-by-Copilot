# Production Deployment Checklist

This checklist ensures EVA Sovereign UI is deployed safely and optimally in production environments (government/enterprise).

## 1. Build & Bundle
- [ ] Run `npm run build:wc` (core library)
- [ ] Verify dist sizes with `npm run size:guard`
- [ ] Confirm `custom-elements.json` generated (for IDE docs)
- [ ] Ensure `types` emitted and correct (`./dist/index.d.ts`)

## 2. Security
- [ ] Review `SECURITY-AUDIT-REPORT.md`
- [ ] Confirm CSP headers applied (see `docs/SECURITY-GUIDE.md`)
- [ ] Confirm HTTPS with HSTS
- [ ] Enable Subresource Integrity (SRI) for CDN script links
- [ ] Verify no inline scripts/styles unless CSP allows

## 3. Performance
- [ ] Enable Brotli/Gzip compression on server/CDN
- [ ] Configure caching: `Cache-Control: public, max-age=31536000, immutable`
- [ ] Use CDN (`jsdelivr`/`unpkg`) for `eva-sovereign-ui.es.js`
- [ ] Run Lighthouse audit (Performance >95)
- [ ] Monitor Web Vitals in production (`utils/performance`)

## 4. Accessibility
- [ ] Run `npm run test:a11y`
- [ ] Address any violations in reports
- [ ] Validate ARIA usage for custom components

## 5. Testing
- [ ] Run `npm test` (unit + component)
- [ ] Run `npm run test:perf` (performance benchmarks)
- [ ] Run `npm run test:visual` (update snapshots if needed)
- [ ] Optional: `npm run test:coverage` (target 80%+)

## 6. Versioning & Release
- [ ] Update `version` in `package.json`
- [ ] Generate changelog (`semantic-release` or manual)
- [ ] Tag release in Git: `git tag vX.Y.Z && git push --tags`
- [ ] Publish to npm:
  - `npm login`
  - `npm publish --access public`
- [ ] Verify CDN availability:
  - `https://cdn.jsdelivr.net/npm/@eva-suite/sovereign-ui@X.Y.Z/dist/eva-sovereign-ui.es.js`
  - `https://unpkg.com/@eva-suite/sovereign-ui@X.Y.Z/dist/eva-sovereign-ui.umd.js`

## 7. Server Configuration
- [ ] Apply CSP (recommended or strict)
- [ ] Enable compression (Brotli/Gzip)
- [ ] HTTP/2 or HTTP/3 enabled
- [ ] Set `X-Content-Type-Options: nosniff`
- [ ] Set `X-Frame-Options: DENY` (unless embedding required)
- [ ] Set `Referrer-Policy: no-referrer-when-downgrade`
- [ ] Set `Permissions-Policy` minimal

## 8. Monitoring & Logging
- [ ] Enable error tracking (Sentry/Datadog)
- [ ] Aggregate security logs (`SecurityLogger`)
- [ ] Monitor bundle downloads and cache hit ratio
- [ ] Track Web Vitals (LCP/FID/CLS)

## 9. Documentation
- [ ] Update `README.md` with CDN/script usage
- [ ] Link `docs/PERFORMANCE-GUIDE.md` and `docs/SECURITY-GUIDE.md`
- [ ] Provide integration examples (React/Vue/Angular/Svelte)

## 10. Post-Deployment Validation
- [ ] Sanity check on staging/production
- [ ] Test with assistive tech (NVDA/JAWS/VoiceOver)
- [ ] Test on slow networks (3G) and low-end devices
- [ ] Verify multi-language content
- [ ] Verify dark/light themes and tokens

---

## Quick Commands

```pwsh
# Build and verify
npm run build:wc
npm run size:guard

# Run core tests
npm test
npm run test:a11y
npm run test:perf
npm run test:visual

# Release
npm version patch   # or minor/major
git push && git push --tags
npm publish --access public
```

## CDN Usage

```html
<!-- ES Module (recommended) -->
<script type="module" src="https://cdn.jsdelivr.net/npm/@eva-suite/sovereign-ui@X.Y.Z/dist/eva-sovereign-ui.es.js" crossorigin></script>

<!-- UMD (fallback) -->
<script src="https://unpkg.com/@eva-suite/sovereign-ui@X.Y.Z/dist/eva-sovereign-ui.umd.js" crossorigin></script>
```

Refer to `SECURITY-GUIDE.md` and `PERFORMANCE-GUIDE.md` for detailed configuration.
