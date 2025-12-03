/**
 * Security Utilities
 * 
 * XSS prevention, input sanitization, and security helpers for EVA Sovereign UI
 */

/**
 * HTML encode special characters to prevent XSS
 */
export function escapeHtml(unsafe: string): string {
  return unsafe
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

/**
 * Sanitize attribute values
 */
export function sanitizeAttribute(value: string): string {
  // Remove any potential javascript: or data: URLs
  const dangerous = /^(javascript|data|vbscript):/i;
  if (dangerous.test(value)) {
    return '';
  }
  return escapeHtml(value);
}

/**
 * Safely set text content (prevents XSS)
 */
export function setTextContent(element: Element, text: string): void {
  element.textContent = text;
}

/**
 * Safely set innerHTML with sanitization
 * WARNING: Only use for trusted content
 */
export function setSafeInnerHTML(element: Element, html: string): void {
  // Remove script tags
  const withoutScripts = html.replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, '');
  
  // Remove event handlers
  const withoutHandlers = withoutScripts.replace(/on\w+\s*=\s*["'][^"']*["']/gi, '');
  
  // Remove javascript: URLs
  const withoutJsUrls = withoutHandlers.replace(/href\s*=\s*["']javascript:[^"']*["']/gi, '');
  
  element.innerHTML = withoutJsUrls;
}

/**
 * Validate URL is safe (no javascript: or data:)
 */
export function isSafeUrl(url: string): boolean {
  const dangerous = /^(javascript|data|vbscript):/i;
  return !dangerous.test(url.trim());
}

/**
 * Sanitize URL for href/src attributes
 */
export function sanitizeUrl(url: string): string {
  if (!isSafeUrl(url)) {
    return '#';
  }
  return url;
}

/**
 * Generate secure random string for IDs
 */
export function generateSecureId(prefix: string = 'eva'): string {
  const random = crypto.getRandomValues(new Uint32Array(2));
  return `${prefix}-${random[0].toString(36)}${random[1].toString(36)}`;
}

/**
 * Content Security Policy helpers
 */
export const CSP = {
  /**
   * Get recommended CSP header
   */
  getRecommendedPolicy(): string {
    return [
      "default-src 'self'",
      "script-src 'self' 'unsafe-inline'", // unsafe-inline needed for Shadow DOM
      "style-src 'self' 'unsafe-inline'", // unsafe-inline needed for component styles
      "img-src 'self' data: https:",
      "font-src 'self' data:",
      "connect-src 'self'",
      "frame-ancestors 'none'",
      "base-uri 'self'",
      "form-action 'self'"
    ].join('; ');
  },
  
  /**
   * Get strict CSP policy (may break some features)
   */
  getStrictPolicy(): string {
    return [
      "default-src 'none'",
      "script-src 'self'",
      "style-src 'self'",
      "img-src 'self' data:",
      "font-src 'self'",
      "connect-src 'self'",
      "frame-ancestors 'none'",
      "base-uri 'self'",
      "form-action 'self'",
      "upgrade-insecure-requests"
    ].join('; ');
  }
};

/**
 * CSRF token management
 */
export class CSRFToken {
  private static TOKEN_KEY = 'eva-csrf-token';
  private static HEADER_NAME = 'X-CSRF-Token';
  
  /**
   * Generate new CSRF token
   */
  static generate(): string {
    const token = generateSecureId('csrf');
    sessionStorage.setItem(this.TOKEN_KEY, token);
    return token;
  }
  
  /**
   * Get current CSRF token
   */
  static get(): string | null {
    let token = sessionStorage.getItem(this.TOKEN_KEY);
    if (!token) {
      token = this.generate();
    }
    return token;
  }
  
  /**
   * Validate CSRF token
   */
  static validate(token: string): boolean {
    const stored = this.get();
    return stored === token;
  }
  
  /**
   * Add CSRF token to fetch headers
   */
  static addToHeaders(headers: HeadersInit = {}): HeadersInit {
    const token = this.get();
    if (token) {
      return {
        ...headers,
        [this.HEADER_NAME]: token
      };
    }
    return headers;
  }
  
  /**
   * Clear CSRF token
   */
  static clear(): void {
    sessionStorage.removeItem(this.TOKEN_KEY);
  }
}

/**
 * Secure fetch wrapper with CSRF protection
 */
export async function secureFetch(
  url: string,
  options: RequestInit = {}
): Promise<Response> {
  // Add CSRF token to headers
  const headers = CSRFToken.addToHeaders(options.headers);
  
  // Ensure credentials are included for same-origin requests
  const credentials = options.credentials || 'same-origin';
  
  return fetch(url, {
    ...options,
    headers,
    credentials
  });
}

/**
 * Validate file upload
 */
export interface FileValidationOptions {
  maxSize?: number; // bytes
  allowedTypes?: string[]; // MIME types
  allowedExtensions?: string[];
}

export function validateFile(
  file: File,
  options: FileValidationOptions = {}
): { valid: boolean; error?: string } {
  const {
    maxSize = 10 * 1024 * 1024, // 10MB default
    allowedTypes = [],
    allowedExtensions = []
  } = options;
  
  // Check file size
  if (file.size > maxSize) {
    return {
      valid: false,
      error: `File size exceeds maximum of ${Math.round(maxSize / 1024 / 1024)}MB`
    };
  }
  
  // Check MIME type
  if (allowedTypes.length > 0 && !allowedTypes.includes(file.type)) {
    return {
      valid: false,
      error: `File type ${file.type} is not allowed`
    };
  }
  
  // Check file extension
  if (allowedExtensions.length > 0) {
    const ext = file.name.split('.').pop()?.toLowerCase();
    if (!ext || !allowedExtensions.includes(ext)) {
      return {
        valid: false,
        error: `File extension .${ext} is not allowed`
      };
    }
  }
  
  return { valid: true };
}

/**
 * Rate limiting helper (client-side)
 */
export class RateLimiter {
  private attempts: Map<string, number[]> = new Map();
  
  constructor(
    private maxAttempts: number = 5,
    private windowMs: number = 60000 // 1 minute
  ) {}
  
  /**
   * Check if action is allowed
   */
  isAllowed(key: string): boolean {
    const now = Date.now();
    const attempts = this.attempts.get(key) || [];
    
    // Remove old attempts outside window
    const recentAttempts = attempts.filter(time => now - time < this.windowMs);
    
    if (recentAttempts.length >= this.maxAttempts) {
      return false;
    }
    
    // Record attempt
    recentAttempts.push(now);
    this.attempts.set(key, recentAttempts);
    
    return true;
  }
  
  /**
   * Reset rate limit for key
   */
  reset(key: string): void {
    this.attempts.delete(key);
  }
  
  /**
   * Clear all rate limits
   */
  clear(): void {
    this.attempts.clear();
  }
}

/**
 * Input validation patterns
 */
export const SecurityPatterns = {
  /**
   * Detect potential SQL injection
   */
  hasSQLInjection: /(\b(SELECT|INSERT|UPDATE|DELETE|DROP|CREATE|ALTER|EXEC|UNION|SCRIPT)\b)|(-{2})|\/\*|\*\//i,
  
  /**
   * Detect potential XSS
   */
  hasXSS: /<script|javascript:|onerror=|onload=|eval\(|expression\(/i,
  
  /**
   * Detect path traversal
   */
  hasPathTraversal: /\.\.[\/\\]/,
  
  /**
   * Safe filename pattern
   */
  safeFilename: /^[a-zA-Z0-9_\-. ]+$/,
  
  /**
   * Safe ID pattern
   */
  safeId: /^[a-zA-Z0-9_\-]+$/
};

/**
 * Validate input against security patterns
 */
export function validateInput(
  input: string,
  type: 'sql' | 'xss' | 'path' | 'filename' | 'id' = 'xss'
): { valid: boolean; error?: string } {
  switch (type) {
    case 'sql':
      if (SecurityPatterns.hasSQLInjection.test(input)) {
        return { valid: false, error: 'Potential SQL injection detected' };
      }
      break;
    case 'xss':
      if (SecurityPatterns.hasXSS.test(input)) {
        return { valid: false, error: 'Potential XSS detected' };
      }
      break;
    case 'path':
      if (SecurityPatterns.hasPathTraversal.test(input)) {
        return { valid: false, error: 'Path traversal attempt detected' };
      }
      break;
    case 'filename':
      if (!SecurityPatterns.safeFilename.test(input)) {
        return { valid: false, error: 'Invalid filename' };
      }
      break;
    case 'id':
      if (!SecurityPatterns.safeId.test(input)) {
        return { valid: false, error: 'Invalid ID format' };
      }
      break;
  }
  
  return { valid: true };
}

/**
 * Secure localStorage wrapper with encryption (basic XOR for demo)
 * In production, use a proper encryption library
 */
export const SecureStorage = {
  /**
   * Simple XOR encryption (use proper crypto in production)
   */
  encrypt(data: string, key: string): string {
    let result = '';
    for (let i = 0; i < data.length; i++) {
      result += String.fromCharCode(data.charCodeAt(i) ^ key.charCodeAt(i % key.length));
    }
    return btoa(result);
  },
  
  /**
   * Simple XOR decryption
   */
  decrypt(data: string, key: string): string {
    const decoded = atob(data);
    let result = '';
    for (let i = 0; i < decoded.length; i++) {
      result += String.fromCharCode(decoded.charCodeAt(i) ^ key.charCodeAt(i % key.length));
    }
    return result;
  },
  
  /**
   * Set encrypted item
   */
  setItem(key: string, value: string, encryptionKey: string): void {
    const encrypted = this.encrypt(value, encryptionKey);
    localStorage.setItem(key, encrypted);
  },
  
  /**
   * Get decrypted item
   */
  getItem(key: string, encryptionKey: string): string | null {
    const encrypted = localStorage.getItem(key);
    if (!encrypted) return null;
    
    try {
      return this.decrypt(encrypted, encryptionKey);
    } catch {
      return null;
    }
  },
  
  /**
   * Remove item
   */
  removeItem(key: string): void {
    localStorage.removeItem(key);
  }
};

/**
 * Security audit logger
 */
export class SecurityLogger {
  private static logs: Array<{
    timestamp: Date;
    type: string;
    message: string;
    details?: any;
  }> = [];
  
  /**
   * Log security event
   */
  static log(type: string, message: string, details?: any): void {
    this.logs.push({
      timestamp: new Date(),
      type,
      message,
      details
    });
    
    // In production, send to server
    console.warn(`[Security] ${type}: ${message}`, details);
  }
  
  /**
   * Log XSS attempt
   */
  static logXSS(input: string, location: string): void {
    this.log('XSS_ATTEMPT', `Potential XSS detected at ${location}`, { input });
  }
  
  /**
   * Log CSRF violation
   */
  static logCSRF(token: string): void {
    this.log('CSRF_VIOLATION', 'Invalid CSRF token', { token });
  }
  
  /**
   * Log rate limit exceeded
   */
  static logRateLimit(key: string): void {
    this.log('RATE_LIMIT', `Rate limit exceeded for ${key}`);
  }
  
  /**
   * Get all logs
   */
  static getLogs(): typeof SecurityLogger.logs {
    return [...this.logs];
  }
  
  /**
   * Clear logs
   */
  static clearLogs(): void {
    this.logs = [];
  }
}
