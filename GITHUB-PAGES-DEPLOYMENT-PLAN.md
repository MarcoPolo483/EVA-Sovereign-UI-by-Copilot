# GitHub Pages Deployment Plan

**Created**: December 3, 2025  
**Status**: Ready to Execute  
**Repository**: EVA-Sovereign-UI-by-Copilot (MarcoPolo483)

---

## Overview

Deploy the EVA-Sovereign-UI demos and documentation to GitHub Pages for public access.

---

## Prerequisites Checklist

- [x] Repository exists: `MarcoPolo483/EVA-Sovereign-UI-by-Copilot`
- [x] Currently on `main` branch
- [x] All builds passing (verified exit code 0)
- [x] Demos built successfully:
  - `dist-devkit/` - Dev Kit Demo
  - `dist-esdc/` - ESDC Demo
  - `dist-performance/` - Performance Dashboard
- [ ] GitHub Pages enabled in repository settings
- [ ] Deployment workflow configured

---

## Step-by-Step Deployment Plan

### Phase 1: Create GitHub Pages Workflow (Automated Deployment)

**Step 1.1**: Create `.github/workflows/deploy-pages.yml`
- Configure workflow to build and deploy on push to `main`
- Set up artifact upload
- Configure GitHub Pages deployment

**Step 1.2**: Update repository permissions
- Enable GitHub Pages in repository settings
- Set source to "GitHub Actions"
- Configure custom domain (optional)

**Step 1.3**: Test deployment
- Push workflow to GitHub
- Monitor Actions tab for successful deployment
- Verify site is live

### Phase 2: Organize Deployment Structure

**Step 2.1**: Create deployment directory structure
```
public/
├── index.html              # Landing page (redirects to dev-kit)
├── dev-kit/               # From dist-devkit/
│   └── index.html
├── esdc/                  # From dist-esdc/
│   └── index.html
├── performance/           # From dist-performance/
│   └── index.html
└── docs/                  # Documentation (optional)
```

**Step 2.2**: Create landing page
- Simple index.html with links to all demos
- EVA branding
- Navigation to each demo

### Phase 3: Configure Build Scripts

**Step 3.1**: Add deployment build script to `package.json`
```json
"build:gh-pages": "npm run build && node scripts/prepare-gh-pages.js"
```

**Step 3.2**: Create preparation script
- Copy built demos to proper structure
- Generate landing page
- Optimize assets

### Phase 4: Verify and Test

**Step 4.1**: Local preview
- Build all demos
- Preview deployment structure locally
- Test all links

**Step 4.2**: Deploy to GitHub Pages
- Push to main branch
- Wait for Actions workflow
- Verify live site

**Step 4.3**: Update README
- Add live demo links
- Add deployment badge
- Document deployment process

---

## Deployment Workflow (deploy-pages.yml)

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [ main ]
  workflow_dispatch:

permissions:
  contents: read
  pages: write
  id-token: write

concurrency:
  group: "pages"
  cancel-in-progress: false

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout
        uses: actions/checkout@v4
      
      - name: Setup Node.js
        uses: actions/setup-node@v4
        with:
          node-version: '20'
          cache: 'npm'
      
      - name: Install dependencies
        run: npm ci
      
      - name: Build all demos
        run: |
          npm run build:wc
          npm run build:devkit
          npm run build:esdc
          npm run build:perf
      
      - name: Create deployment structure
        run: |
          mkdir -p public/dev-kit
          mkdir -p public/esdc
          mkdir -p public/performance
          cp -r dist-devkit/* public/dev-kit/
          cp -r dist-esdc/* public/esdc/
          cp -r dist-performance/* public/performance/
          
      - name: Create landing page
        run: |
          cat > public/index.html << 'EOF'
          <!DOCTYPE html>
          <html lang="en">
          <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>EVA-Sovereign-UI - Live Demos</title>
            <style>
              body {
                font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
                max-width: 800px;
                margin: 50px auto;
                padding: 20px;
                line-height: 1.6;
              }
              h1 { color: #1a237e; }
              .demo-card {
                border: 1px solid #e0e0e0;
                border-radius: 8px;
                padding: 20px;
                margin: 20px 0;
                transition: box-shadow 0.3s;
              }
              .demo-card:hover { box-shadow: 0 4px 12px rgba(0,0,0,0.1); }
              a { color: #1976d2; text-decoration: none; }
              a:hover { text-decoration: underline; }
            </style>
          </head>
          <body>
            <h1>🍁 EVA-Sovereign-UI</h1>
            <p>Production-ready Web Components design system for government applications</p>
            
            <div class="demo-card">
              <h2>🎨 Developer Kit Demo</h2>
              <p>Comprehensive component gallery with interactive examples, theme switching, and code snippets.</p>
              <a href="./dev-kit/">Launch Dev Kit Demo →</a>
            </div>
            
            <div class="demo-card">
              <h2>🏛️ ESDC Government Demo</h2>
              <p>Five Eyes localization showcase with EN/FR bilingual support and government service portal.</p>
              <a href="./esdc/">Launch ESDC Demo →</a>
            </div>
            
            <div class="demo-card">
              <h2>📊 Performance Dashboard</h2>
              <p>Real-time performance metrics, Web Vitals tracking, and bundle analysis.</p>
              <a href="./performance/">Launch Performance Dashboard →</a>
            </div>
            
            <hr style="margin: 40px 0;">
            
            <p>
              <a href="https://github.com/MarcoPolo483/EVA-Sovereign-UI-by-Copilot">View on GitHub</a> |
              <a href="https://github.com/MarcoPolo483/EVA-Sovereign-UI-by-Copilot/blob/main/README.md">Documentation</a>
            </p>
          </body>
          </html>
          EOF
      
      - name: Setup Pages
        uses: actions/configure-pages@v4
      
      - name: Upload artifact
        uses: actions/upload-pages-artifact@v3
        with:
          path: './public'
      
      - name: Deploy to GitHub Pages
        id: deployment
        uses: actions/deploy-pages@v4

  deploy:
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
    runs-on: ubuntu-latest
    needs: build
    steps:
      - name: Deploy to GitHub Pages
        id: deployment
        uses: actions/deploy-pages@v4
```

---

## Expected URLs After Deployment

- **Landing Page**: `https://marcopolo483.github.io/EVA-Sovereign-UI-by-Copilot/`
- **Dev Kit**: `https://marcopolo483.github.io/EVA-Sovereign-UI-by-Copilot/dev-kit/`
- **ESDC Demo**: `https://marcopolo483.github.io/EVA-Sovereign-UI-by-Copilot/esdc/`
- **Performance**: `https://marcopolo483.github.io/EVA-Sovereign-UI-by-Copilot/performance/`

---

## Execution Steps (To Be Completed)

### ✅ Completed
- [x] Plan created and saved
- [x] All demos built successfully
- [x] Tests passing
- [x] GitHub Actions workflow file exists (`.github/workflows/deploy-pages.yml`)
- [x] Landing page exists (`public-index.html`)
- [x] Storybook build script configured

### 🔄 Next Steps (In Order)

1. **✅ DONE - GitHub Actions workflow file already exists**
   - File: `.github/workflows/deploy-pages.yml`
   - Includes: Dev Kit, ESDC, Performance Dashboard, Storybook
   
2. **Enable GitHub Pages in repository settings** ⬅️ **CURRENT STEP**
   - Go to: `https://github.com/MarcoPolo483/EVA-Sovereign-UI-by-Copilot/settings/pages`
   - Source: **Select "GitHub Actions"**
   - Branch: (Not applicable for GitHub Actions source)
   - Click **Save**

3. **Trigger deployment** (Workflow already committed)
   ```powershell
   # Workflow already exists, just trigger it
   git add GITHUB-PAGES-DEPLOYMENT-PLAN.md
   git commit -m "docs: update GitHub Pages deployment plan"
   git push origin main
   ```
   
   **OR** manually trigger via GitHub Actions:
   - Go to: Actions tab → "Deploy to GitHub Pages" → Run workflow

4. **Monitor deployment**
   - Go to Actions tab
   - Watch "Deploy to GitHub Pages" workflow
   - Check for green checkmark

5. **Verify live site**
   - Visit URLs listed above
   - Test all demos
   - Verify navigation

6. **Update README with live demo links**
   - Add badges for deployment status
   - Add links to live demos
   - Document deployment process

---

## Troubleshooting

### Issue: Workflow fails with permissions error
**Solution**: Enable read/write permissions in Settings → Actions → General → Workflow permissions

### Issue: 404 on GitHub Pages
**Solution**: Check that GitHub Pages source is set to "GitHub Actions" in Settings → Pages

### Issue: Assets not loading
**Solution**: Verify base path in vite configs matches repository name

### Issue: Build fails in workflow
**Solution**: Check that all dependencies are in package.json (not just devDependencies)

---

## Rollback Plan

If deployment fails:
1. Disable GitHub Pages in Settings
2. Revert workflow commit: `git revert HEAD`
3. Fix issues locally
4. Re-enable and try again

---

## Post-Deployment Tasks

1. Add deployment badge to README
2. Update social media preview (og:image)
3. Set up custom domain (optional)
4. Configure Lighthouse CI for automated audits
5. Add Google Analytics (optional)

---

## Notes

- GitHub Pages deployment typically takes 2-5 minutes
- Cache may take additional time to clear (up to 10 minutes)
- Use workflow_dispatch for manual deployments
- Consider branch protection rules for production

---

**Ready to begin? Start with Step 1: Create the workflow file.**
