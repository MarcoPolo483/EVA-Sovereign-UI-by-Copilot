# NPM Publishing Guide

Complete guide for publishing EVA-Sovereign-UI packages to NPM registry using semantic-release.

## Table of Contents

- [Prerequisites](#prerequisites)
- [Package Configuration](#package-configuration)
- [Semantic Release Setup](#semantic-release-setup)
- [Publishing Workflow](#publishing-workflow)
- [Versioning Strategy](#versioning-strategy)
- [Troubleshooting](#troubleshooting)

---

## Prerequisites

### 1. NPM Account Setup

1. Create an NPM account at [npmjs.com](https://www.npmjs.com/signup)
2. Verify your email address
3. Enable 2FA (Two-Factor Authentication):
   ```bash
   npm profile enable-2fa auth-and-writes
   ```

### 2. Organization Setup (Optional)

For scoped packages (@eva-suite/*):

1. Create an organization at [npmjs.com/org/create](https://www.npmjs.com/org/create)
2. Add organization members with appropriate permissions
3. Configure package access:
   ```bash
   npm access public @eva-suite/sovereign-ui
   ```

### 3. Generate NPM Token

```bash
# Login to NPM
npm login

# Generate automation token (for CI/CD)
npm token create --type=automation
```

Copy the token and add it to GitHub Secrets as `NPM_TOKEN`.

### 4. GitHub Secrets Configuration

Add the following secrets to your GitHub repository:

- `NPM_TOKEN`: Your NPM automation token
- `GITHUB_TOKEN`: Automatically provided by GitHub Actions

Navigate to: Repository Settings → Secrets and variables → Actions → New repository secret

---

## Package Configuration

### Root Package (Main Web Components)

**package.json**:
```json
{
  "name": "@eva-suite/sovereign-ui",
  "version": "1.1.0",
  "description": "Government-grade accessible web components",
  "type": "module",
  "main": "./dist/eva-sovereign-ui.umd.js",
  "module": "./dist/eva-sovereign-ui.es.js",
  "types": "./dist/index.d.ts",
  "exports": {
    ".": {
      "types": "./dist/index.d.ts",
      "import": "./dist/eva-sovereign-ui.es.js",
      "require": "./dist/eva-sovereign-ui.umd.js"
    },
    "./styles": "./dist/style.css"
  },
  "files": [
    "dist",
    "README.md",
    "LICENSE"
  ],
  "publishConfig": {
    "access": "public",
    "registry": "https://registry.npmjs.org/"
  }
}
```

### Framework Packages

Each framework wrapper includes:

- **React** (`@eva-suite/sovereign-ui-react`)
- **Vue** (`@eva-suite/sovereign-ui-vue`)
- **Angular** (`@eva-suite/sovereign-ui-angular`)
- **Svelte** (`@eva-suite/sovereign-ui-svelte`)

All configured with:
```json
{
  "publishConfig": {
    "access": "public"
  },
  "peerDependencies": {
    "@eva-suite/sovereign-ui": "^1.0.0"
  }
}
```

---

## Semantic Release Setup

### Configuration (.releaserc.json)

```json
{
  "branches": ["main", {"name": "next", "prerelease": true}],
  "plugins": [
    "@semantic-release/commit-analyzer",
    "@semantic-release/release-notes-generator",
    "@semantic-release/changelog",
    "@semantic-release/npm",
    "@semantic-release/github",
    "@semantic-release/git"
  ]
}
```

### Commit Message Convention

Follow [Conventional Commits](https://www.conventionalcommits.org/):

**Format**: `<type>(<scope>): <subject>`

**Types**:
- `feat`: New feature (minor version bump)
- `fix`: Bug fix (patch version bump)
- `perf`: Performance improvement (patch)
- `docs`: Documentation only (patch)
- `refactor`: Code refactoring (patch)
- `test`: Test updates (no release)
- `chore`: Build/tooling changes (no release)
- `BREAKING CHANGE`: Breaking change (major version bump)

**Examples**:
```bash
# Minor release (1.1.0 → 1.2.0)
git commit -m "feat: add Vue framework wrapper with v-model support"

# Patch release (1.1.0 → 1.1.1)
git commit -m "fix: resolve checkbox focus state in Safari"

# Major release (1.1.0 → 2.0.0)
git commit -m "feat!: redesign component API

BREAKING CHANGE: Component props renamed for consistency"
```

---

## Publishing Workflow

### Automatic Publishing (Recommended)

1. **Make changes** with conventional commits:
   ```bash
   git add .
   git commit -m "feat: add new component"
   git push origin main
   ```

2. **GitHub Actions triggers**:
   - Runs tests and builds
   - Analyzes commits to determine version
   - Generates CHANGELOG.md
   - Publishes to NPM
   - Creates GitHub Release
   - Commits version bump

3. **Monitor the release**:
   - Check GitHub Actions workflow
   - Verify NPM package publication
   - Review GitHub Release notes

### Manual Publishing (Development)

For testing or manual releases:

```bash
# Dry run (test without publishing)
npm run release:dry

# Publish from local machine
npm run release

# Publish specific package
cd packages/eva-sovereign-ui-react
npm publish --access public
```

### Pre-release Versions

For beta/alpha releases:

```bash
# Push to next branch for pre-release
git checkout -b next
git push origin next

# Creates version like 1.2.0-next.1
```

---

## Versioning Strategy

### Semantic Versioning (SemVer)

Format: `MAJOR.MINOR.PATCH`

- **MAJOR** (1.x.x → 2.x.x): Breaking changes
- **MINOR** (1.1.x → 1.2.x): New features (backward compatible)
- **PATCH** (1.1.1 → 1.1.2): Bug fixes (backward compatible)

### Current Versions

- **@eva-suite/sovereign-ui**: 1.1.0
- **@eva-suite/sovereign-ui-react**: 1.1.0
- **@eva-suite/sovereign-ui-vue**: 1.0.0
- **@eva-suite/sovereign-ui-angular**: 1.0.0
- **@eva-suite/sovereign-ui-svelte**: 1.0.0

### Version Alignment

All framework wrappers depend on the main package:

```json
{
  "peerDependencies": {
    "@eva-suite/sovereign-ui": "^1.0.0"
  }
}
```

When updating the main package major version, update all wrappers accordingly.

---

## Troubleshooting

### Issue: "npm ERR! 403 Forbidden"

**Solution**:
```bash
# Verify authentication
npm whoami

# Re-login
npm logout
npm login

# Verify package access
npm access list packages
```

### Issue: "Package name taken"

**Solution**:
- Use scoped packages: `@your-org/package-name`
- Choose a unique name
- Check availability: `npm view @eva-suite/sovereign-ui`

### Issue: "Version already published"

**Solution**:
```bash
# Check current published version
npm view @eva-suite/sovereign-ui version

# Let semantic-release handle versioning
# Never manually edit version in package.json on main branch
```

### Issue: "2FA required for publishing"

**Solution**:
```bash
# Enable 2FA
npm profile enable-2fa

# Use automation token (not auth-only)
npm token create --type=automation
```

### Issue: "Build fails before publish"

**Solution**:
```bash
# Test build locally
npm run build

# Check for TypeScript errors
npm run typecheck

# Run tests
npm test

# Fix issues before pushing
```

### Issue: "GitHub Actions workflow fails"

**Solution**:
1. Check GitHub Actions logs
2. Verify NPM_TOKEN secret exists
3. Ensure token has correct permissions
4. Check branch protection rules
5. Verify commit message format

---

## Publishing Checklist

Before publishing a major release:

- [ ] All tests passing (`npm test`)
- [ ] TypeScript compiles without errors (`npm run typecheck`)
- [ ] Bundle sizes within limits (`npm run size:guard`)
- [ ] Documentation updated
- [ ] CHANGELOG.md reviewed
- [ ] Breaking changes documented
- [ ] Migration guide provided (if applicable)
- [ ] Framework wrappers compatible
- [ ] Examples and demos updated
- [ ] Storybook documentation current
- [ ] Accessibility tests passing
- [ ] Performance benchmarks acceptable
- [ ] Visual regression tests passing
- [ ] All demos functional

---

## Post-Publishing Tasks

After a successful release:

1. **Verify Package**:
   ```bash
   npm view @eva-suite/sovereign-ui
   npm install @eva-suite/sovereign-ui
   ```

2. **Update Documentation**:
   - Update README badges with new version
   - Update installation instructions
   - Announce release on GitHub Discussions

3. **Monitor Feedback**:
   - Watch for GitHub issues
   - Monitor npm download stats
   - Check for bug reports

4. **Update Dependent Projects**:
   ```bash
   npm update @eva-suite/sovereign-ui
   ```

---

## NPM Scripts

```json
{
  "scripts": {
    "release": "semantic-release",
    "release:dry": "semantic-release --dry-run",
    "publish:react": "cd packages/eva-sovereign-ui-react && npm publish",
    "publish:vue": "cd packages/eva-sovereign-ui-vue && npm publish",
    "publish:angular": "cd packages/eva-sovereign-ui-angular && npm publish",
    "publish:svelte": "cd packages/eva-sovereign-ui-svelte && npm publish"
  }
}
```

---

## Security Considerations

### Package Access

- Use `publishConfig.access: "public"` for open-source packages
- Restrict org access for private packages
- Regularly audit package dependencies

### Token Management

- Store tokens in GitHub Secrets (never commit)
- Use automation tokens for CI/CD
- Rotate tokens periodically
- Revoke unused tokens

### Content Integrity

- Enable `npm audit` checks
- Use `npm ci` for reproducible installs
- Sign packages with GPG keys
- Enable npm provenance

---

## Resources

- [NPM Documentation](https://docs.npmjs.com/)
- [Semantic Release Docs](https://semantic-release.gitbook.io/)
- [Conventional Commits](https://www.conventionalcommits.org/)
- [SemVer Specification](https://semver.org/)
- [NPM Package Provenance](https://docs.npmjs.com/generating-provenance-statements)

---

## Support

For publishing issues:
- GitHub Issues: [eva-suite/EVA-Sovereign-UI-by-Copilot](https://github.com/eva-suite/EVA-Sovereign-UI-by-Copilot/issues)
- NPM Support: [npmjs.com/support](https://www.npmjs.com/support)

## License

MIT © EVA Suite Team
