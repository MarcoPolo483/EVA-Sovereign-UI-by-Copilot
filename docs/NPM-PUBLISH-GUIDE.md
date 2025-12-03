# NPM Publish Guide

## Prerequisites

1. **npm Account**: Create an account at https://www.npmjs.com/ if you don't have one
2. **2FA Setup**: Enable two-factor authentication in your npm account settings
3. **Organization Access**: Request `@eva-suite` scope access or publish under your personal scope

## Local Publish (Manual)

### Step 1: Authenticate

```pwsh
npm adduser
```

You'll be prompted for:
- Username
- Password
- Email
- One-time password (if 2FA is enabled)

Verify authentication:
```pwsh
npm whoami
```

### Step 2: Verify Build

```pwsh
npm run build:wc
npm run size:guard
```

Expected output:
- ES bundle: ~11.87 kB (gzip)
- UMD bundle: ~9.30 kB (gzip)

### Step 3: Publish

```pwsh
npm publish --access public
```

### Step 4: Validate

Check npm registry (wait 1-2 minutes for propagation):
```pwsh
start https://www.npmjs.com/package/@eva-suite/sovereign-ui
```

Check CDN endpoints:
```pwsh
# jsDelivr
start https://cdn.jsdelivr.net/npm/@eva-suite/sovereign-ui@latest/dist/eva-sovereign-ui.umd.js

# unpkg
start https://unpkg.com/@eva-suite/sovereign-ui@latest/dist/eva-sovereign-ui.es.js
```

## CI Publish (Recommended)

### Step 1: Create npm Token

1. Go to https://www.npmjs.com/settings/[your-username]/tokens
2. Click "Generate New Token" → "Automation"
3. Copy the token (starts with `npm_...`)

### Step 2: Add GitHub Secret

1. Go to your repo: https://github.com/MarcoPolo483/EVA-Sovereign-UI-by-Copilot/settings/secrets/actions
2. Click "New repository secret"
3. Name: `NPM_TOKEN`
4. Value: paste your npm token
5. Click "Add secret"

### Step 3: Trigger Release

```pwsh
git add -A
git commit -m "chore: trigger automated release"
git push origin main
```

The workflow at `.github/workflows/release.yml` will:
- Build the library (`npm run build:wc`)
- Run `semantic-release` to:
  - Analyze commits since last release
  - Determine version bump (patch/minor/major)
  - Update `package.json` and `CHANGELOG.md`
  - Publish to npm
  - Create GitHub release with notes

### Step 4: Monitor

Check workflow progress:
```pwsh
start https://github.com/MarcoPolo483/EVA-Sovereign-UI-by-Copilot/actions/workflows/release.yml
```

## Troubleshooting

### `ENEEDAUTH` Error

**Problem**: `npm publish` says "need auth"

**Solution**: Run `npm adduser` and complete authentication

### `403 Forbidden` Error

**Problem**: No permission to publish to `@eva-suite` scope

**Solutions**:
1. Request access to the org from the owner
2. OR publish under your personal scope:
   - Update `package.json`: `"name": "@your-username/sovereign-ui"`
   - Run `npm publish --access public`

### 2FA Required

**Problem**: Publish blocked by two-factor auth

**Solution**: 
- For manual: Enter OTP when prompted
- For CI: Use "Automation" token (bypasses 2FA for CI)

### CDN Not Updating

**Problem**: CDN still serves old version

**Solutions**:
- Wait 5-10 minutes for propagation
- Purge CDN cache:
  - jsDelivr: `https://purge.jsdelivr.net/npm/@eva-suite/sovereign-ui@latest/dist/eva-sovereign-ui.umd.js`
  - unpkg: Automatic purge on new publish

## Post-Publish Checklist

- [ ] Verify npm package page shows correct version
- [ ] Check bundle sizes in package details
- [ ] Test CDN URLs (jsDelivr + unpkg)
- [ ] Update GitHub release with notes
- [ ] Announce release (internal channels, changelog)
- [ ] Update documentation links if needed

## Quick Reference

```pwsh
# Check current version
npm view @eva-suite/sovereign-ui version

# Check published files
npm view @eva-suite/sovereign-ui files

# Download tarball for inspection
npm pack @eva-suite/sovereign-ui

# Unpublish (only within 72 hours, use carefully!)
npm unpublish @eva-suite/sovereign-ui@1.1.1
```

## Resources

- npm Docs: https://docs.npmjs.com/cli/v10/commands/npm-publish
- Semantic Release: https://semantic-release.gitbook.io/
- jsDelivr Docs: https://www.jsdelivr.com/documentation
- unpkg Docs: https://unpkg.com/
