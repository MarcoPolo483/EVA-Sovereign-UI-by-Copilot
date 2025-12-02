# GitHub Repository Setup Guide

This guide covers the final configuration steps to enable all enterprise-grade features for EVA Sovereign UI.

## 1. Enable GitHub Pages (Deploy Demos)

### Steps:

1. **Navigate to Repository Settings**
   - Go to: https://github.com/MarcoPolo483/EVA-Sovereign-UI-by-Copilot/settings

2. **Access Pages Settings**
   - In the left sidebar, click **"Pages"** (under "Code and automation")

3. **Configure Source**
   - **Source**: Select **"GitHub Actions"** from the dropdown
   - Leave other settings as default

4. **Save and Verify**
   - The page will auto-save
   - Check the banner at the top: "Your site is ready to be published at `https://marcopolo483.github.io/EVA-Sovereign-UI-by-Copilot/`"

5. **Trigger First Deployment**
   - Push any commit to `main` branch (deployment workflow already configured)
   - Or manually trigger: Actions tab → "Deploy to GitHub Pages" → "Run workflow"

6. **Verify Deployment**
   - Wait 2-3 minutes for build
   - Visit: https://marcopolo483.github.io/EVA-Sovereign-UI-by-Copilot/
   - ESDC Demo: https://marcopolo483.github.io/EVA-Sovereign-UI-by-Copilot/esdc/

### Troubleshooting:

- **404 Error**: Deployment may still be in progress, wait 5 minutes
- **Build Failed**: Check Actions tab for workflow errors
- **Blank Page**: Clear browser cache, check browser console for errors

---

## 2. Add NPM_TOKEN Secret (Automated Publishing)

### Prerequisites:

You need an npm account with publishing access to `@eva-suite` organization.

### Steps:

#### A. Generate npm Access Token

1. **Login to npm**
   - Go to: https://www.npmjs.com/login
   - Sign in with your credentials

2. **Access Token Settings**
   - Click your profile icon (top right) → **"Access Tokens"**
   - Or direct link: https://www.npmjs.com/settings/YOUR_USERNAME/tokens

3. **Generate New Token**
   - Click **"Generate New Token"** → **"Classic Token"**
   - **Token Type**: Select **"Automation"** (required for CI/CD)
   - **Token Name**: `EVA-Sovereign-UI-GitHub-Actions`
   - Click **"Generate Token"**

4. **Copy Token**
   - **IMPORTANT**: Copy the token immediately (shown only once)
   - Format: `npm_xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx`

#### B. Add Token to GitHub Secrets

1. **Navigate to Secrets Settings**
   - Go to: https://github.com/MarcoPolo483/EVA-Sovereign-UI-by-Copilot/settings/secrets/actions

2. **Add New Secret**
   - Click **"New repository secret"**
   - **Name**: `NPM_TOKEN` (MUST be exactly this name)
   - **Value**: Paste the npm token from step A.4
   - Click **"Add secret"**

3. **Verify Configuration**
   - Secret should appear in the list (value hidden)
   - Release workflow (`.github/workflows/release.yml`) will now have publishing permissions

#### C. Enable Provenance (Optional but Recommended)

The release workflow already includes `NPM_CONFIG_PROVENANCE: true`, which adds cryptographic proof of package origin. No additional setup needed.

### Testing:

1. **Trigger a Release**
   - Commit with `feat:` or `fix:` prefix to trigger semantic-release
   - Or manually run "Release" workflow from Actions tab

2. **Verify npm Publishing**
   - Check Actions tab → "Release" workflow → logs
   - Look for: `Publishing to npm` and `Successfully published`
   - Visit: https://www.npmjs.com/package/@eva-suite/sovereign-ui-react

### Troubleshooting:

- **401 Unauthorized**: Token is invalid or expired, regenerate and update secret
- **403 Forbidden**: npm account lacks publishing permissions for `@eva-suite` scope
- **Package Not Found**: May need to publish initial version manually (`npm publish --access public`)

---

## 3. Configure Branch Protection Rules

### Recommended Rules for `main` Branch:

1. **Navigate to Branch Protection Settings**
   - Go to: https://github.com/MarcoPolo483/EVA-Sovereign-UI-by-Copilot/settings/branches

2. **Add Rule**
   - Click **"Add branch protection rule"**
   - **Branch name pattern**: `main`

3. **Configure Protection Settings**

   #### Required Status Checks
   - ✅ **Require status checks to pass before merging**
   - ✅ **Require branches to be up to date before merging**
   - Select these required checks:
     - `test` (CI workflow)
     - `lighthouse` (Lighthouse CI)
     - `analyze` (CodeQL)
     - `dependency-review` (Dependency Review)
     - `release` (Release workflow) [optional, may prevent merges during release]

   #### Pull Request Reviews
   - ✅ **Require a pull request before merging**
   - ✅ **Require approvals**: Set to `1` (or `2` for high-security)
   - ✅ **Dismiss stale pull request approvals when new commits are pushed**
   - ✅ **Require review from Code Owners** (if CODEOWNERS file exists)

   #### Additional Settings
   - ✅ **Require conversation resolution before merging**
   - ✅ **Require signed commits** (optional, requires GPG setup)
   - ✅ **Require linear history** (prevents merge commits, enforces rebase/squash)
   - ✅ **Do not allow bypassing the above settings**

   #### Restrictions
   - ✅ **Restrict who can push to matching branches**
   - Add yourself and CI service accounts to allowed list
   - ✅ **Allow force pushes**: **Disable** (prevents history rewriting)
   - ✅ **Allow deletions**: **Disable** (prevents accidental branch deletion)

4. **Save Changes**
   - Click **"Create"** at the bottom

### Verification:

- Try to push directly to `main`: should be blocked
- Create a PR: should require passing CI before merge
- Force push: should fail with protection error

---

## 4. Enable GitHub Discussions (Community Support)

### Steps:

1. **Navigate to Repository Settings**
   - Go to: https://github.com/MarcoPolo483/EVA-Sovereign-UI-by-Copilot/settings

2. **Enable Discussions**
   - Scroll to **"Features"** section
   - ✅ Check **"Discussions"**
   - Click **"Set up discussions"** button

3. **Create Welcome Post** (Auto-generated)
   - GitHub will create a welcome discussion automatically
   - Edit the generated post to include:
     ```markdown
     # Welcome to EVA Sovereign UI Discussions!
     
     This is the place for:
     - 💬 General questions and support
     - 💡 Feature requests and ideas
     - 🏛️ Government deployment discussions
     - 🌍 Internationalization requests
     - 🎨 Design system feedback
     
     Please use GitHub Issues for bug reports.
     ```

4. **Configure Categories**
   - Navigate to: https://github.com/MarcoPolo483/EVA-Sovereign-UI-by-Copilot/discussions/categories
   - Recommended categories:

   | Category | Description | Format |
   |----------|-------------|--------|
   | 📣 Announcements | Release notes and updates | Announcement |
   | 💬 General | General discussions | Open |
   | 💡 Ideas | Feature requests | Open |
   | 🏛️ Government | Gov-specific deployments | Open |
   | 🌍 i18n | Internationalization | Open |
   | ❓ Q&A | Questions needing answers | Q&A |
   | 🎓 Show and Tell | Share your projects | Open |

5. **Add Discussion Templates** (Optional)
   - Create `.github/DISCUSSION_TEMPLATE/` directory
   - Add template files for common questions

### Moderation Guidelines:

Create a pinned discussion with community guidelines:

```markdown
# Community Guidelines

## Be Respectful
- Treat everyone with respect and consideration
- No harassment, hate speech, or personal attacks

## Stay On Topic
- Keep discussions relevant to EVA Sovereign UI
- Use appropriate categories

## Security Vulnerabilities
- **DO NOT** discuss security issues publicly
- Use private vulnerability reporting: SECURITY.md

## Government Deployments
- Tag discussions with `government` for priority support
- Respect classification levels (no sensitive data)

## Code of Conduct
See CODE_OF_CONDUCT.md for full details.
```

---

## 5. Additional Recommended Settings

### A. Enable Vulnerability Alerts

1. Go to: Settings → Security → Code security and analysis
2. Enable:
   - ✅ Dependency graph
   - ✅ Dependabot alerts
   - ✅ Dependabot security updates
   - ✅ Code scanning (CodeQL already configured)
   - ✅ Secret scanning

### B. Configure Merge Options

1. Go to: Settings → General → Pull Requests
2. Recommended settings:
   - ✅ Allow squash merging (default)
   - ❌ Allow merge commits (prevents messy history)
   - ❌ Allow rebase merging (optional, can enable if team prefers)
   - ✅ Automatically delete head branches (cleanup merged PRs)

### C. Set Repository Topics

1. Go to repository homepage
2. Click ⚙️ next to "About"
3. Add topics:
   - `web-components`
   - `design-system`
   - `government`
   - `accessibility`
   - `wcag`
   - `react`
   - `canada`
   - `five-eyes`
   - `i18n`

---

## 6. Verification Checklist

After completing all steps:

- [ ] GitHub Pages deployed successfully (visit live URL)
- [ ] NPM_TOKEN secret added and visible in Secrets list
- [ ] Branch protection active (try force push to `main`, should fail)
- [ ] GitHub Discussions enabled and categories configured
- [ ] Dependabot enabled and scanning dependencies
- [ ] All CI workflows passing (check Actions tab)
- [ ] README badges displaying correctly
- [ ] Security policies visible (SECURITY.md, CONTRIBUTING.md)

---

## Support

- **Setup Issues**: Open a GitHub Issue with label `documentation`
- **Security Concerns**: See SECURITY.md for private reporting
- **General Questions**: Use GitHub Discussions

**Last Updated**: December 2, 2025  
**Version**: 1.1.0
