# Security Guide - EVA Sovereign UI

Comprehensive security implementation guide for government and enterprise deployments.

## Table of Contents

1. [Security Architecture](#security-architecture)
2. [XSS Prevention](#xss-prevention)
3. [CSRF Protection](#csrf-protection)
4. [Content Security Policy](#content-security-policy)
5. [Input Validation](#input-validation)
6. [File Upload Security](#file-upload-security)
7. [Rate Limiting](#rate-limiting)
8. [Secure Storage](#secure-storage)
9. [Security Audit](#security-audit)
10. [Best Practices](#best-practices)

## Security Architecture

EVA Sovereign UI implements defense-in-depth with multiple layers:

### Layer 1: Shadow DOM Encapsulation
- Prevents CSS/JS injection
- Isolates component internals
- Prevents style conflicts

### Layer 2: Input Sanitization
- HTML escaping for all user input
- Attribute value sanitization
- URL validation

### Layer 3: CSP Compliance
- No inline scripts/styles
- Strict CSP headers support
- Nonce-based execution

### Layer 4: CSRF Protection
- Token-based validation
- Automatic header injection
- Session-based tokens

### Layer 5: Rate Limiting
- Client-side throttling
- API request limiting
- Brute-force protection

## XSS Prevention

### HTML Escaping

Always escape user input before rendering:

```typescript
import { escapeHtml } from '@eva-sovereign/ui-wc/utils/security';

// ❌ UNSAFE - Never do this
element.innerHTML = userInput;

// ✅ SAFE - Escape HTML
element.textContent = userInput;
// OR
element.innerHTML = escapeHtml(userInput);
```

### Attribute Sanitization

```typescript
import { sanitizeAttribute } from '@eva-sovereign/ui-wc/utils/security';

// ❌ UNSAFE
element.setAttribute('href', userInput);

// ✅ SAFE
element.setAttribute('href', sanitizeAttribute(userInput));
```

### URL Validation

```typescript
import { isSafeUrl, sanitizeUrl } from '@eva-sovereign/ui-wc/utils/security';

// Check if URL is safe
if (isSafeUrl(userUrl)) {
  link.href = userUrl;
}

// Or sanitize automatically
link.href = sanitizeUrl(userUrl); // Returns '#' if unsafe
```

### Safe innerHTML Usage

```typescript
import { setSafeInnerHTML } from '@eva-sovereign/ui-wc/utils/security';

// Only use for trusted content
// Removes <script>, event handlers, and javascript: URLs
setSafeInnerHTML(element, trustedHtml);
```

### Common XSS Vectors

**Blocked by EVA:**

```html
<!-- Script injection -->
<script>alert('XSS')</script>

<!-- Event handlers -->
<img src="x" onerror="alert('XSS')">

<!-- JavaScript URLs -->
<a href="javascript:alert('XSS')">Click</a>

<!-- Data URLs -->
<iframe src="data:text/html,<script>alert('XSS')</script>">
```

## CSRF Protection

### Token Generation

```typescript
import { CSRFToken } from '@eva-sovereign/ui-wc/utils/security';

// Generate token on page load
const token = CSRFToken.generate();

// Include in forms
const form = document.querySelector('form');
const input = document.createElement('input');
input.type = 'hidden';
input.name = 'csrf_token';
input.value = token;
form.appendChild(input);
```

### Automatic Fetch Protection

```typescript
import { secureFetch, CSRFToken } from '@eva-sovereign/ui-wc/utils/security';

// Automatically includes CSRF token in headers
const response = await secureFetch('/api/data', {
  method: 'POST',
  body: JSON.stringify({ data: 'value' })
});

// Manual header addition
const headers = CSRFToken.addToHeaders({
  'Content-Type': 'application/json'
});

fetch('/api/data', {
  method: 'POST',
  headers,
  body: JSON.stringify({ data: 'value' })
});
```

### Server-Side Validation

```javascript
// Express.js example
app.post('/api/data', (req, res) => {
  const token = req.headers['x-csrf-token'];
  const sessionToken = req.session.csrfToken;
  
  if (token !== sessionToken) {
    return res.status(403).json({ error: 'Invalid CSRF token' });
  }
  
  // Process request
});
```

## Content Security Policy

### Recommended CSP Headers

```typescript
import { CSP } from '@eva-sovereign/ui-wc/utils/security';

// Get recommended policy
const policy = CSP.getRecommendedPolicy();
// default-src 'self'; script-src 'self' 'unsafe-inline'; ...

// Get strict policy (may break some features)
const strictPolicy = CSP.getStrictPolicy();
// default-src 'none'; script-src 'self'; ...
```

### Apache Configuration

```apache
<IfModule mod_headers.c>
  Header set Content-Security-Policy "default-src 'self'; script-src 'self' 'unsafe-inline'; style-src 'self' 'unsafe-inline'; img-src 'self' data: https:; font-src 'self' data:; connect-src 'self'; frame-ancestors 'none'; base-uri 'self'; form-action 'self'"
</IfModule>
```

### Nginx Configuration

```nginx
add_header Content-Security-Policy "default-src 'self'; script-src 'self' 'unsafe-inline'; style-src 'self' 'unsafe-inline'; img-src 'self' data: https:; font-src 'self' data:; connect-src 'self'; frame-ancestors 'none'; base-uri 'self'; form-action 'self'";
```

### Node.js/Express

```javascript
const helmet = require('helmet');

app.use(helmet.contentSecurityPolicy({
  directives: {
    defaultSrc: ["'self'"],
    scriptSrc: ["'self'", "'unsafe-inline'"],
    styleSrc: ["'self'", "'unsafe-inline'"],
    imgSrc: ["'self'", "data:", "https:"],
    fontSrc: ["'self'", "data:"],
    connectSrc: ["'self'"],
    frameAncestors: ["'none'"],
    baseUri: ["'self'"],
    formAction: ["'self'"]
  }
}));
```

## Input Validation

### Security Pattern Validation

```typescript
import { validateInput, SecurityPatterns } from '@eva-sovereign/ui-wc/utils/security';

// Check for XSS
const xssResult = validateInput(userInput, 'xss');
if (!xssResult.valid) {
  console.error(xssResult.error); // "Potential XSS detected"
}

// Check for SQL injection
const sqlResult = validateInput(userInput, 'sql');

// Check for path traversal
const pathResult = validateInput(userInput, 'path');

// Validate filename
const filenameResult = validateInput(userFilename, 'filename');

// Validate ID format
const idResult = validateInput(userId, 'id');
```

### Custom Validation

```typescript
// Manual pattern checking
if (SecurityPatterns.hasXSS.test(input)) {
  // Block input
}

if (SecurityPatterns.hasSQLInjection.test(input)) {
  // Block input
}

if (SecurityPatterns.hasPathTraversal.test(input)) {
  // Block input
}
```

## File Upload Security

### Validate File Uploads

```typescript
import { validateFile } from '@eva-sovereign/ui-wc/utils/security';

const fileInput = document.querySelector('input[type="file"]');

fileInput.addEventListener('change', (e) => {
  const file = e.target.files[0];
  
  const result = validateFile(file, {
    maxSize: 5 * 1024 * 1024, // 5MB
    allowedTypes: ['image/jpeg', 'image/png', 'application/pdf'],
    allowedExtensions: ['jpg', 'jpeg', 'png', 'pdf']
  });
  
  if (!result.valid) {
    alert(result.error);
    fileInput.value = '';
    return;
  }
  
  // Process file
});
```

### Server-Side Validation (Required)

```javascript
// Express.js with multer
const multer = require('multer');
const path = require('path');

const storage = multer.diskStorage({
  destination: './uploads/',
  filename: (req, file, cb) => {
    // Generate random filename
    const ext = path.extname(file.originalname);
    cb(null, `${Date.now()}${ext}`);
  }
});

const fileFilter = (req, file, cb) => {
  const allowedTypes = ['image/jpeg', 'image/png', 'application/pdf'];
  if (allowedTypes.includes(file.mimetype)) {
    cb(null, true);
  } else {
    cb(new Error('Invalid file type'), false);
  }
};

const upload = multer({
  storage,
  fileFilter,
  limits: { fileSize: 5 * 1024 * 1024 }
});

app.post('/upload', upload.single('file'), (req, res) => {
  res.json({ success: true });
});
```

## Rate Limiting

### Client-Side Rate Limiting

```typescript
import { RateLimiter } from '@eva-sovereign/ui-wc/utils/security';

const limiter = new RateLimiter(5, 60000); // 5 attempts per minute

const submitButton = document.querySelector('button[type="submit"]');

submitButton.addEventListener('click', async () => {
  if (!limiter.isAllowed('form-submit')) {
    alert('Too many attempts. Please wait a minute.');
    return;
  }
  
  // Process form
  await submitForm();
});
```

### API Endpoint Protection

```typescript
// Login form with rate limiting
const loginLimiter = new RateLimiter(3, 300000); // 3 attempts per 5 minutes

async function handleLogin(username: string, password: string) {
  if (!loginLimiter.isAllowed(`login:${username}`)) {
    throw new Error('Too many login attempts. Please try again later.');
  }
  
  try {
    const response = await secureFetch('/api/login', {
      method: 'POST',
      body: JSON.stringify({ username, password })
    });
    
    if (response.ok) {
      // Success - reset rate limit
      loginLimiter.reset(`login:${username}`);
    }
    
    return response;
  } catch (error) {
    throw error;
  }
}
```

### Server-Side Rate Limiting (Required)

```javascript
// Express Rate Limit
const rateLimit = require('express-rate-limit');

const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100, // limit each IP to 100 requests per windowMs
  message: 'Too many requests from this IP'
});

app.use('/api/', limiter);

// Stricter limit for authentication
const authLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 5,
  message: 'Too many login attempts'
});

app.use('/api/login', authLimiter);
```

## Secure Storage

### Encrypted Local Storage

```typescript
import { SecureStorage } from '@eva-sovereign/ui-wc/utils/security';

const encryptionKey = 'your-encryption-key'; // In production, use proper key management

// Store encrypted data
SecureStorage.setItem('user-token', 'abc123', encryptionKey);

// Retrieve decrypted data
const token = SecureStorage.getItem('user-token', encryptionKey);

// Remove data
SecureStorage.removeItem('user-token');
```

**WARNING:** The built-in encryption is basic XOR. For production:

1. Use a proper encryption library (e.g., crypto-js, tweetnacl)
2. Use secure key management (e.g., Web Crypto API)
3. Consider server-side session storage for sensitive data

### Session Storage for Tokens

```typescript
// Use session storage for temporary tokens
sessionStorage.setItem('csrf-token', CSRFToken.generate());

// Clear on logout
sessionStorage.clear();
```

### Avoid Local Storage for Sensitive Data

```typescript
// ❌ NEVER store sensitive data in plain localStorage
localStorage.setItem('password', userPassword);
localStorage.setItem('credit-card', cardNumber);

// ✅ Use secure storage or server-side sessions
SecureStorage.setItem('session-id', sessionId, encryptionKey);
```

## Security Audit

### Logging Security Events

```typescript
import { SecurityLogger } from '@eva-sovereign/ui-wc/utils/security';

// Log XSS attempt
SecurityLogger.logXSS(userInput, 'comment-form');

// Log CSRF violation
SecurityLogger.logCSRF(invalidToken);

// Log rate limit exceeded
SecurityLogger.logRateLimit('login-form');

// Get all logs
const logs = SecurityLogger.getLogs();
console.table(logs);

// Clear logs
SecurityLogger.clearLogs();
```

### Automated Security Audits

```bash
# Run npm security audit
npm audit

# Fix vulnerabilities automatically
npm audit fix

# Check for known vulnerabilities in dependencies
npm audit --audit-level=high

# Generate security report
npm audit --json > security-report.json
```

### Manual Security Checklist

- [ ] All user input is escaped/sanitized
- [ ] CSRF tokens implemented on all state-changing operations
- [ ] CSP headers configured
- [ ] Rate limiting on authentication endpoints
- [ ] File upload validation (client + server)
- [ ] HTTPS enabled in production
- [ ] Secure cookie flags set (HttpOnly, Secure, SameSite)
- [ ] SQL injection prevention (parameterized queries)
- [ ] Authentication tokens stored securely
- [ ] Error messages don't leak sensitive information
- [ ] Logging doesn't capture sensitive data
- [ ] Dependencies regularly updated
- [ ] Security headers configured (HSTS, X-Frame-Options, etc.)

## Best Practices

### 1. Always Validate Input

```typescript
// ✅ Good - Validate on both client and server
const result = validateInput(userInput, 'xss');
if (result.valid) {
  await sendToServer(userInput);
}

// ❌ Bad - Client-side only
await sendToServer(userInput);
```

### 2. Use HTTPS in Production

```nginx
# Nginx - Force HTTPS
server {
  listen 80;
  server_name yourdomain.com;
  return 301 https://$server_name$request_uri;
}

server {
  listen 443 ssl http2;
  server_name yourdomain.com;
  
  ssl_certificate /path/to/cert.pem;
  ssl_certificate_key /path/to/key.pem;
  
  # Security headers
  add_header Strict-Transport-Security "max-age=31536000; includeSubDomains" always;
  add_header X-Frame-Options "DENY" always;
  add_header X-Content-Type-Options "nosniff" always;
  add_header X-XSS-Protection "1; mode=block" always;
}
```

### 3. Secure Cookie Configuration

```javascript
// Express.js
app.use(session({
  secret: process.env.SESSION_SECRET,
  cookie: {
    httpOnly: true,      // Prevents JavaScript access
    secure: true,        // HTTPS only
    sameSite: 'strict',  // CSRF protection
    maxAge: 3600000      // 1 hour
  }
}));
```

### 4. Implement Security Headers

```javascript
const helmet = require('helmet');

app.use(helmet({
  contentSecurityPolicy: true,
  hsts: {
    maxAge: 31536000,
    includeSubDomains: true,
    preload: true
  },
  frameguard: { action: 'deny' },
  noSniff: true,
  xssFilter: true
}));
```

### 5. Regular Dependency Updates

```bash
# Check for outdated packages
npm outdated

# Update all dependencies
npm update

# Update to latest major versions (carefully!)
npm install <package>@latest

# Use automated tools
npm install -g npm-check-updates
ncu -u
npm install
```

### 6. Environment Variable Management

```bash
# .env file (never commit!)
SESSION_SECRET=your-secret-key
API_KEY=your-api-key
DATABASE_URL=postgres://user:pass@localhost/db

# Load in Node.js
require('dotenv').config();
const secret = process.env.SESSION_SECRET;
```

### 7. Error Handling

```typescript
// ✅ Good - Generic error messages
try {
  await authenticate(username, password);
} catch (error) {
  res.status(401).json({ error: 'Invalid credentials' });
}

// ❌ Bad - Leaks information
try {
  await authenticate(username, password);
} catch (error) {
  res.status(401).json({ error: error.message }); // "User not found" vs "Invalid password"
}
```

### 8. SQL Injection Prevention

```javascript
// ✅ Good - Parameterized queries
db.query('SELECT * FROM users WHERE id = ?', [userId]);

// ❌ Bad - String concatenation
db.query(`SELECT * FROM users WHERE id = ${userId}`);
```

### 9. Authentication Best Practices

```typescript
// Password hashing (server-side)
const bcrypt = require('bcrypt');

// Hash password
const hash = await bcrypt.hash(password, 10);

// Verify password
const valid = await bcrypt.compare(password, hash);

// JWT tokens
const jwt = require('jsonwebtoken');

// Create token
const token = jwt.sign({ userId }, process.env.JWT_SECRET, {
  expiresIn: '1h'
});

// Verify token
try {
  const decoded = jwt.verify(token, process.env.JWT_SECRET);
} catch (error) {
  // Invalid token
}
```

### 10. Regular Security Audits

Schedule regular security reviews:

- **Weekly**: Dependency vulnerability scans
- **Monthly**: Code security audits
- **Quarterly**: Penetration testing
- **Annually**: Third-party security assessment

## Additional Resources

- [OWASP Top 10](https://owasp.org/www-project-top-ten/)
- [CWE/SANS Top 25](https://cwe.mitre.org/top25/)
- [Content Security Policy](https://content-security-policy.com/)
- [Mozilla Web Security Guidelines](https://infosec.mozilla.org/guidelines/web_security)
- [GitHub Security Best Practices](https://docs.github.com/en/code-security)

## Support

For security issues:
- **Critical**: security@eva-suite.dev (24/7)
- **Non-critical**: [GitHub Security Advisory](https://github.com/MarcoPolo483/EVA-Sovereign-UI-by-Copilot/security/advisories/new)
