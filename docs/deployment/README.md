# Deployment Documentation

Comprehensive guides for deploying EVA Sovereign UI across major hosting platforms including Vercel, Netlify, AWS, Azure, and Government of Canada Cloud infrastructure.

## Table of Contents

- [Overview](#overview)
- [Vercel Deployment](#vercel-deployment)
- [Netlify Deployment](#netlify-deployment)
- [AWS Deployment](#aws-deployment)
- [Azure Deployment](#azure-deployment)
- [Government of Canada Cloud](#government-of-canada-cloud)
- [CI/CD Integration](#cicd-integration)
- [Environment Variables](#environment-variables)

---

## Overview

### Deployment Options Comparison

| Platform | Best For | Pricing | Build Time | Government Use |
|----------|----------|---------|------------|----------------|
| **Vercel** | Next.js, React apps | Free tier available | Fast (2-5 min) | ❌ Public cloud |
| **Netlify** | Static sites, SPAs | Free tier available | Fast (2-5 min) | ❌ Public cloud |
| **AWS** | Enterprise, scalable | Pay-as-you-go | Medium (5-10 min) | ✅ FedRAMP certified |
| **Azure** | Enterprise, .NET apps | Pay-as-you-go | Medium (5-10 min) | ✅ GC approved |
| **GC Cloud** | Government agencies | Government contract | Variable | ✅ Required for sensitive data |

### Prerequisites

All deployments require:
- Node.js 18+ installed
- npm or pnpm package manager
- Git repository
- Build output (typically `dist/` or `build/`)

---

## Vercel Deployment

### Option 1: Vercel CLI

#### Installation

```bash
npm install -g vercel
```

#### Deployment

```bash
# Login to Vercel
vercel login

# Deploy (production)
vercel --prod

# Deploy (preview)
vercel
```

#### Configuration

Create `vercel.json` in project root:

```json
{
  "buildCommand": "npm run build",
  "outputDirectory": "dist",
  "devCommand": "npm run dev",
  "installCommand": "npm install",
  "framework": null,
  "rewrites": [
    { "source": "/(.*)", "destination": "/index.html" }
  ],
  "headers": [
    {
      "source": "/assets/(.*)",
      "headers": [
        {
          "key": "Cache-Control",
          "value": "public, max-age=31536000, immutable"
        }
      ]
    }
  ]
}
```

### Option 2: Vercel GitHub Integration

1. Push code to GitHub repository
2. Visit [vercel.com](https://vercel.com)
3. Click "Import Project"
4. Select your GitHub repository
5. Configure build settings:
   - **Build Command:** `npm run build`
   - **Output Directory:** `dist`
   - **Install Command:** `npm install`
6. Click "Deploy"

### Next.js with EVA Sovereign UI

```typescript
// next.config.js
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  transpilePackages: ['@eva-suite/eva-sovereign-ui-react'],
  webpack: (config) => {
    config.resolve.extensionAlias = {
      '.js': ['.ts', '.tsx', '.js', '.jsx']
    };
    return config;
  }
};

module.exports = nextConfig;
```

### Environment Variables

```bash
# Vercel Dashboard → Settings → Environment Variables
VITE_API_URL=https://api.example.com
VITE_ENV=production
```

---

## Netlify Deployment

### Option 1: Netlify CLI

#### Installation

```bash
npm install -g netlify-cli
```

#### Deployment

```bash
# Login to Netlify
netlify login

# Initialize site
netlify init

# Deploy (production)
netlify deploy --prod

# Deploy (preview)
netlify deploy
```

#### Configuration

Create `netlify.toml` in project root:

```toml
[build]
  command = "npm run build"
  publish = "dist"

[build.environment]
  NODE_VERSION = "18"

[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200

[[headers]]
  for = "/assets/*"
  [headers.values]
    Cache-Control = "public, max-age=31536000, immutable"

[[headers]]
  for = "/*"
  [headers.values]
    X-Frame-Options = "DENY"
    X-Content-Type-Options = "nosniff"
    Referrer-Policy = "strict-origin-when-cross-origin"
    Permissions-Policy = "accelerometer=(), camera=(), geolocation=(), gyroscope=(), magnetometer=(), microphone=(), payment=(), usb=()"
```

### Option 2: Netlify Git Integration

1. Push code to GitHub/GitLab/Bitbucket
2. Visit [netlify.com](https://netlify.com)
3. Click "Add new site" → "Import an existing project"
4. Connect to Git provider
5. Configure build settings:
   - **Build command:** `npm run build`
   - **Publish directory:** `dist`
6. Click "Deploy site"

### Netlify Functions (Serverless)

```typescript
// netlify/functions/api.ts
import type { Handler } from '@netlify/functions';

export const handler: Handler = async (event, context) => {
  return {
    statusCode: 200,
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ message: 'Hello from Netlify Functions' })
  };
};
```

### Environment Variables

```bash
# Netlify Dashboard → Site settings → Environment variables
VITE_API_URL=https://api.example.com
VITE_ENV=production
```

---

## AWS Deployment

### Option 1: S3 + CloudFront (Static Hosting)

#### 1. Build Application

```bash
npm run build
```

#### 2. Create S3 Bucket

```bash
aws s3 mb s3://eva-sovereign-ui-app
```

#### 3. Configure Bucket for Static Hosting

```bash
aws s3 website s3://eva-sovereign-ui-app \
  --index-document index.html \
  --error-document index.html
```

#### 4. Upload Files

```bash
aws s3 sync dist/ s3://eva-sovereign-ui-app \
  --delete \
  --cache-control "public,max-age=31536000,immutable" \
  --exclude "index.html" \
  --exclude "*.txt"

# Upload index.html without caching
aws s3 cp dist/index.html s3://eva-sovereign-ui-app/index.html \
  --cache-control "public,max-age=0,must-revalidate"
```

#### 5. Create CloudFront Distribution

```bash
aws cloudfront create-distribution \
  --origin-domain-name eva-sovereign-ui-app.s3.amazonaws.com \
  --default-root-object index.html
```

#### CloudFront Configuration (JSON)

```json
{
  "DistributionConfig": {
    "CallerReference": "eva-ui-2025",
    "Origins": {
      "Quantity": 1,
      "Items": [
        {
          "Id": "S3-eva-sovereign-ui-app",
          "DomainName": "eva-sovereign-ui-app.s3.amazonaws.com",
          "S3OriginConfig": {
            "OriginAccessIdentity": ""
          }
        }
      ]
    },
    "DefaultCacheBehavior": {
      "TargetOriginId": "S3-eva-sovereign-ui-app",
      "ViewerProtocolPolicy": "redirect-to-https",
      "Compress": true,
      "CachePolicyId": "658327ea-f89d-4fab-a63d-7e88639e58f6"
    },
    "CustomErrorResponses": {
      "Quantity": 1,
      "Items": [
        {
          "ErrorCode": 404,
          "ResponsePagePath": "/index.html",
          "ResponseCode": "200"
        }
      ]
    },
    "Enabled": true
  }
}
```

### Option 2: AWS Amplify

#### 1. Install Amplify CLI

```bash
npm install -g @aws-amplify/cli
amplify configure
```

#### 2. Initialize Amplify

```bash
amplify init
```

#### 3. Add Hosting

```bash
amplify add hosting
# Choose: Hosting with Amplify Console
# Choose: Continuous deployment
```

#### 4. Deploy

```bash
amplify publish
```

#### Amplify Configuration

Create `amplify.yml`:

```yaml
version: 1
frontend:
  phases:
    preBuild:
      commands:
        - npm ci
    build:
      commands:
        - npm run build
  artifacts:
    baseDirectory: dist
    files:
      - '**/*'
  cache:
    paths:
      - node_modules/**/*
```

### Option 3: Elastic Beanstalk (Node.js Server)

For server-side rendering (SSR) applications.

#### Configuration

Create `.ebextensions/nodecommand.config`:

```yaml
option_settings:
  aws:elasticbeanstalk:container:nodejs:
    NodeCommand: "npm start"
  aws:elasticbeanstalk:application:environment:
    NODE_ENV: production
```

---

## Azure Deployment

### Option 1: Azure Static Web Apps

#### 1. Install Azure CLI

```bash
# Windows
winget install Microsoft.AzureCLI

# macOS
brew install azure-cli

# Linux
curl -sL https://aka.ms/InstallAzureCLIDeb | sudo bash
```

#### 2. Login to Azure

```bash
az login
```

#### 3. Create Static Web App

```bash
az staticwebapp create \
  --name eva-sovereign-ui \
  --resource-group my-resource-group \
  --source https://github.com/username/eva-sovereign-ui \
  --location "canadacentral" \
  --branch main \
  --app-location "/" \
  --output-location "dist"
```

#### Configuration

Create `staticwebapp.config.json`:

```json
{
  "routes": [
    {
      "route": "/assets/*",
      "headers": {
        "Cache-Control": "public, max-age=31536000, immutable"
      }
    }
  ],
  "navigationFallback": {
    "rewrite": "/index.html",
    "exclude": ["/assets/*"]
  },
  "globalHeaders": {
    "X-Content-Type-Options": "nosniff",
    "X-Frame-Options": "DENY",
    "Strict-Transport-Security": "max-age=31536000; includeSubDomains"
  },
  "mimeTypes": {
    ".json": "application/json",
    ".woff2": "font/woff2"
  }
}
```

### Option 2: Azure App Service

For server-rendered applications (SSR).

#### 1. Create App Service

```bash
az webapp create \
  --resource-group my-resource-group \
  --plan my-app-service-plan \
  --name eva-sovereign-ui \
  --runtime "NODE:18-lts"
```

#### 2. Configure Deployment

```bash
az webapp deployment source config \
  --name eva-sovereign-ui \
  --resource-group my-resource-group \
  --repo-url https://github.com/username/eva-sovereign-ui \
  --branch main \
  --manual-integration
```

#### 3. Set Environment Variables

```bash
az webapp config appsettings set \
  --resource-group my-resource-group \
  --name eva-sovereign-ui \
  --settings NODE_ENV=production \
             VITE_API_URL=https://api.example.com
```

### Option 3: Azure Blob Storage + CDN

Similar to AWS S3 + CloudFront.

#### 1. Create Storage Account

```bash
az storage account create \
  --name evasovereignui \
  --resource-group my-resource-group \
  --location canadacentral \
  --sku Standard_LRS \
  --kind StorageV2
```

#### 2. Enable Static Website

```bash
az storage blob service-properties update \
  --account-name evasovereignui \
  --static-website \
  --404-document index.html \
  --index-document index.html
```

#### 3. Upload Files

```bash
az storage blob upload-batch \
  --account-name evasovereignui \
  --source dist \
  --destination '$web'
```

---

## Government of Canada Cloud

### Requirements

- **Security Clearance:** Required for sensitive data
- **Protected B:** Minimum classification for most applications
- **FedRAMP Compliance:** For cloud services
- **TBS Standards:** Treasury Board Secretariat requirements

### Approved Cloud Providers

1. **Azure (Canada Central)**
   - Protected B certified
   - Data residency in Canada
   - Most common choice

2. **AWS (Canada Region)**
   - Protected B certified
   - Data residency in Canada
   - FedRAMP authorized

3. **Google Cloud (Canada)**
   - Protected B certified
   - Newer offering

### Deployment Process

#### 1. Security Assessment

Before deployment:
- Security Assessment and Authorization (SA&A)
- Privacy Impact Assessment (PIA)
- Threat and Risk Assessment (TRA)

#### 2. Azure Government Cloud

```bash
# Use Canada Central or Canada East region
az account set --subscription "GC-Subscription-ID"

az staticwebapp create \
  --name eva-sovereign-ui-gc \
  --resource-group gc-resource-group \
  --location "canadacentral" \
  --source https://github.com/gc-org/eva-sovereign-ui \
  --branch main
```

#### 3. Compliance Configuration

```json
{
  "security": {
    "tls": {
      "minimumVersion": "TLS1.2"
    },
    "headers": {
      "X-Frame-Options": "DENY",
      "X-Content-Type-Options": "nosniff",
      "Strict-Transport-Security": "max-age=31536000; includeSubDomains; preload",
      "Content-Security-Policy": "default-src 'self'; script-src 'self'; style-src 'self' 'unsafe-inline'"
    }
  },
  "dataResidency": "canada",
  "logging": {
    "enabled": true,
    "retentionDays": 90
  },
  "encryption": {
    "atRest": true,
    "inTransit": true
  }
}
```

#### 4. Network Security

```yaml
# Azure Network Security Group
securityRules:
  - name: AllowHTTPS
    protocol: Tcp
    sourcePortRange: '*'
    destinationPortRange: 443
    sourceAddressPrefix: '*'
    destinationAddressPrefix: '*'
    access: Allow
    priority: 100
    direction: Inbound
  
  - name: DenyAllInbound
    protocol: '*'
    sourcePortRange: '*'
    destinationPortRange: '*'
    sourceAddressPrefix: '*'
    destinationAddressPrefix: '*'
    access: Deny
    priority: 1000
    direction: Inbound
```

### GC-Specific Requirements

#### Bilingual Content

```html
<!-- Both languages must be available -->
<html lang="en">
  <eva-language-switcher 
    current-locale="en-CA"
    available-locales='["en-CA", "fr-CA"]'
  ></eva-language-switcher>
</html>
```

#### Accessibility

- WCAG 2.2 Level AA compliance required
- Regular accessibility audits
- VPAT documentation

#### Privacy

```html
<!-- Privacy notice required on all forms -->
<eva-gc-footer>
  <p>
    Personal information is collected under the authority of...
    and will be used to...
  </p>
</eva-gc-footer>
```

---

## CI/CD Integration

### GitHub Actions

Create `.github/workflows/deploy.yml`:

```yaml
name: Deploy to Production

on:
  push:
    branches: [main]
  workflow_dispatch:

jobs:
  build-and-deploy:
    runs-on: ubuntu-latest
    
    steps:
      - name: Checkout code
        uses: actions/checkout@v4
      
      - name: Setup Node.js
        uses: actions/setup-node@v4
        with:
          node-version: '18'
          cache: 'npm'
      
      - name: Install dependencies
        run: npm ci
      
      - name: Run tests
        run: npm test
      
      - name: Build application
        run: npm run build
        env:
          VITE_API_URL: ${{ secrets.API_URL }}
          VITE_ENV: production
      
      - name: Deploy to Vercel
        uses: amondnet/vercel-action@v25
        with:
          vercel-token: ${{ secrets.VERCEL_TOKEN }}
          vercel-org-id: ${{ secrets.VERCEL_ORG_ID }}
          vercel-project-id: ${{ secrets.VERCEL_PROJECT_ID }}
          vercel-args: '--prod'
```

### GitLab CI

Create `.gitlab-ci.yml`:

```yaml
stages:
  - test
  - build
  - deploy

variables:
  NODE_VERSION: '18'

cache:
  paths:
    - node_modules/

test:
  stage: test
  image: node:${NODE_VERSION}
  script:
    - npm ci
    - npm run test
    - npm run lint

build:
  stage: build
  image: node:${NODE_VERSION}
  script:
    - npm ci
    - npm run build
  artifacts:
    paths:
      - dist/
    expire_in: 1 hour

deploy-production:
  stage: deploy
  image: node:${NODE_VERSION}
  only:
    - main
  script:
    - npm install -g netlify-cli
    - netlify deploy --prod --dir=dist --site=$NETLIFY_SITE_ID --auth=$NETLIFY_AUTH_TOKEN
  environment:
    name: production
    url: https://eva-sovereign-ui.netlify.app
```

### Azure DevOps

Create `azure-pipelines.yml`:

```yaml
trigger:
  branches:
    include:
      - main

pool:
  vmImage: 'ubuntu-latest'

variables:
  nodeVersion: '18.x'

steps:
  - task: NodeTool@0
    inputs:
      versionSpec: $(nodeVersion)
    displayName: 'Install Node.js'

  - script: |
      npm ci
    displayName: 'Install dependencies'

  - script: |
      npm run test
    displayName: 'Run tests'

  - script: |
      npm run build
    displayName: 'Build application'
    env:
      VITE_API_URL: $(API_URL)
      VITE_ENV: production

  - task: AzureStaticWebApp@0
    inputs:
      app_location: '/'
      api_location: ''
      output_location: 'dist'
      azure_static_web_apps_api_token: $(AZURE_STATIC_WEB_APPS_API_TOKEN)
```

---

## Environment Variables

### Development (.env.development)

```bash
VITE_API_URL=http://localhost:3001
VITE_ENV=development
VITE_DEBUG=true
```

### Production (.env.production)

```bash
VITE_API_URL=https://api.production.com
VITE_ENV=production
VITE_DEBUG=false
```

### Platform-Specific

#### Vercel
```bash
# vercel.json
{
  "env": {
    "VITE_API_URL": "https://api.example.com"
  }
}
```

#### Netlify
```toml
# netlify.toml
[context.production.environment]
  VITE_API_URL = "https://api.example.com"
```

#### AWS Amplify
```yaml
# amplify.yml
frontend:
  phases:
    build:
      commands:
        - export VITE_API_URL=https://api.example.com
        - npm run build
```

---

## Best Practices

### 1. Security Headers

```javascript
// vite.config.ts
export default {
  server: {
    headers: {
      'X-Frame-Options': 'DENY',
      'X-Content-Type-Options': 'nosniff',
      'Referrer-Policy': 'strict-origin-when-cross-origin',
      'Permissions-Policy': 'camera=(), microphone=(), geolocation=()'
    }
  }
};
```

### 2. Cache Strategy

```
Static assets (JS/CSS/images): 1 year cache
HTML: No cache (must-revalidate)
API responses: Vary by endpoint
```

### 3. Compression

Enable Brotli/Gzip compression:

```nginx
# nginx.conf
gzip on;
gzip_types text/css application/javascript application/json;
gzip_min_length 1000;

brotli on;
brotli_types text/css application/javascript application/json;
```

### 4. Monitoring

```typescript
// Add error tracking
import * as Sentry from '@sentry/browser';

Sentry.init({
  dsn: 'YOUR_SENTRY_DSN',
  environment: import.meta.env.VITE_ENV
});
```

### 5. Health Checks

```typescript
// health.ts
export async function healthCheck() {
  return {
    status: 'ok',
    timestamp: new Date().toISOString(),
    version: '1.1.0'
  };
}
```

---

## Troubleshooting

### Build Failures

```bash
# Clear cache
rm -rf node_modules dist .cache
npm install
npm run build
```

### 404 on Route Refresh

Add rewrite rules to serve `index.html` for all routes (see platform-specific configurations above).

### Environment Variables Not Working

```bash
# Verify variables are prefixed correctly
VITE_API_URL=...  # ✅ Correct
API_URL=...       # ❌ Won't work with Vite
```

---

## Resources

- [Vercel Documentation](https://vercel.com/docs)
- [Netlify Documentation](https://docs.netlify.com/)
- [AWS Static Hosting](https://aws.amazon.com/getting-started/hands-on/host-static-website/)
- [Azure Static Web Apps](https://learn.microsoft.com/en-us/azure/static-web-apps/)
- [GC Cloud Services](https://www.canada.ca/en/government/system/digital-government/digital-government-innovations/cloud-services.html)

## License

MIT © EVA Suite Team
