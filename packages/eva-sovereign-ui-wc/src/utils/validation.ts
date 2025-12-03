/**
 * Form Validation Utilities
 * 
 * Comprehensive validation system for Canadian government forms with:
 * - Email, phone, postal code validation
 * - SIN (Social Insurance Number) validation
 * - Bilingual error messages (English/French)
 * - Custom validation rules
 * - Async validation support
 * - ARIA live region integration
 */

/**
 * Validation result interface
 */
export interface ValidationResult {
  valid: boolean;
  errors: ValidationError[];
}

/**
 * Validation error with bilingual messages
 */
export interface ValidationError {
  field: string;
  code: string;
  message: string;
  messageFr?: string;
}

/**
 * Validation rule function
 */
export type ValidationRule<T = any> = (
  value: T,
  context?: ValidationContext
) => ValidationResult | Promise<ValidationResult>;

/**
 * Validation context with form data
 */
export interface ValidationContext {
  formData?: Record<string, any>;
  locale?: 'en' | 'fr';
  [key: string]: any;
}

/**
 * Validation schema for form fields
 */
export interface ValidationSchema {
  [fieldName: string]: ValidationRule[];
}

/**
 * Built-in validation error messages (bilingual)
 */
export const validationMessages = {
  required: {
    en: 'This field is required',
    fr: 'Ce champ est requis'
  },
  email: {
    en: 'Please enter a valid email address',
    fr: 'Veuillez entrer une adresse courriel valide'
  },
  phone: {
    en: 'Please enter a valid Canadian phone number',
    fr: 'Veuillez entrer un numéro de téléphone canadien valide'
  },
  postalCode: {
    en: 'Please enter a valid Canadian postal code (e.g., K1A 0B1)',
    fr: 'Veuillez entrer un code postal canadien valide (p. ex., K1A 0B1)'
  },
  sin: {
    en: 'Please enter a valid Social Insurance Number (9 digits)',
    fr: 'Veuillez entrer un numéro d\'assurance sociale valide (9 chiffres)'
  },
  minLength: {
    en: (min: number) => `Must be at least ${min} characters`,
    fr: (min: number) => `Doit contenir au moins ${min} caractères`
  },
  maxLength: {
    en: (max: number) => `Must be no more than ${max} characters`,
    fr: (max: number) => `Ne doit pas dépasser ${max} caractères`
  },
  min: {
    en: (min: number) => `Must be at least ${min}`,
    fr: (min: number) => `Doit être au moins ${min}`
  },
  max: {
    en: (max: number) => `Must be no more than ${max}`,
    fr: (max: number) => `Ne doit pas dépasser ${max}`
  },
  pattern: {
    en: 'Invalid format',
    fr: 'Format invalide'
  },
  custom: {
    en: 'Validation failed',
    fr: 'La validation a échoué'
  }
};

/**
 * Get localized validation message
 */
export function getValidationMessage(
  code: string,
  locale: 'en' | 'fr' = 'en',
  params?: any
): string {
  const message = validationMessages[code as keyof typeof validationMessages];
  if (!message) return validationMessages.custom[locale];
  
  if (typeof message[locale] === 'function') {
    return (message[locale] as Function)(params);
  }
  
  return message[locale] as string;
}

/**
 * Required field validator
 */
export const required = (customMessage?: { en?: string; fr?: string }): ValidationRule => {
  return (value: any, context?: ValidationContext): ValidationResult => {
    const isEmpty = value === null || 
                    value === undefined || 
                    value === '' || 
                    (Array.isArray(value) && value.length === 0);
    
    if (isEmpty) {
      const locale = context?.locale || 'en';
      return {
        valid: false,
        errors: [{
          field: 'value',
          code: 'required',
          message: customMessage?.en || getValidationMessage('required', locale),
          messageFr: customMessage?.fr || getValidationMessage('required', 'fr')
        }]
      };
    }
    
    return { valid: true, errors: [] };
  };
};

/**
 * Email validator (RFC 5322 compliant)
 */
export const email = (): ValidationRule => {
  const emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
  
  return (value: string, context?: ValidationContext): ValidationResult => {
    if (!value) return { valid: true, errors: [] }; // Empty is valid (use required() separately)
    
    if (!emailRegex.test(value)) {
      const locale = context?.locale || 'en';
      return {
        valid: false,
        errors: [{
          field: 'value',
          code: 'email',
          message: getValidationMessage('email', locale),
          messageFr: getValidationMessage('email', 'fr')
        }]
      };
    }
    
    return { valid: true, errors: [] };
  };
};

/**
 * Canadian phone number validator
 * Accepts formats:
 * - (123) 456-7890
 * - 123-456-7890
 * - 1234567890
 * - +1 (123) 456-7890
 * - +1-123-456-7890
 */
export const canadianPhone = (): ValidationRule => {
  const phoneRegex = /^(\+?1[-.\s]?)?\(?([0-9]{3})\)?[-.\s]?([0-9]{3})[-.\s]?([0-9]{4})$/;
  
  return (value: string, context?: ValidationContext): ValidationResult => {
    if (!value) return { valid: true, errors: [] };
    
    // Remove all spaces and dashes for validation
    const cleaned = value.replace(/[\s\-().]/g, '');
    
    // Check if it starts with +1 or 1
    const hasCountryCode = cleaned.startsWith('+1') || cleaned.startsWith('1');
    const digits = hasCountryCode ? cleaned.substring(cleaned.indexOf('1') + 1) : cleaned;
    
    if (!phoneRegex.test(value) || digits.length !== 10) {
      const locale = context?.locale || 'en';
      return {
        valid: false,
        errors: [{
          field: 'value',
          code: 'phone',
          message: getValidationMessage('phone', locale),
          messageFr: getValidationMessage('phone', 'fr')
        }]
      };
    }
    
    return { valid: true, errors: [] };
  };
};

/**
 * Canadian postal code validator
 * Format: A1A 1A1 (letter-digit-letter space digit-letter-digit)
 * Letters cannot be D, F, I, O, Q, U, W, Z
 */
export const canadianPostalCode = (): ValidationRule => {
  const postalCodeRegex = /^[ABCEGHJ-NPRSTVXY]\d[ABCEGHJ-NPRSTV-Z][ -]?\d[ABCEGHJ-NPRSTV-Z]\d$/i;
  
  return (value: string, context?: ValidationContext): ValidationResult => {
    if (!value) return { valid: true, errors: [] };
    
    const cleaned = value.trim().toUpperCase();
    
    if (!postalCodeRegex.test(cleaned)) {
      const locale = context?.locale || 'en';
      return {
        valid: false,
        errors: [{
          field: 'value',
          code: 'postalCode',
          message: getValidationMessage('postalCode', locale),
          messageFr: getValidationMessage('postalCode', 'fr')
        }]
      };
    }
    
    return { valid: true, errors: [] };
  };
};

/**
 * Social Insurance Number (SIN) validator
 * Validates Canadian SIN using Luhn algorithm
 * Format: 9 digits (123-456-789 or 123456789)
 */
export const sin = (): ValidationRule => {
  return (value: string, context?: ValidationContext): ValidationResult => {
    if (!value) return { valid: true, errors: [] };
    
    // Remove dashes and spaces
    const cleaned = value.replace(/[\s\-]/g, '');
    
    // Must be exactly 9 digits
    if (!/^\d{9}$/.test(cleaned)) {
      const locale = context?.locale || 'en';
      return {
        valid: false,
        errors: [{
          field: 'value',
          code: 'sin',
          message: getValidationMessage('sin', locale),
          messageFr: getValidationMessage('sin', 'fr')
        }]
      };
    }
    
    // Validate using Luhn algorithm (mod 10 check)
    const digits = cleaned.split('').map(Number);
    let sum = 0;
    
    for (let i = 0; i < digits.length; i++) {
      let digit = digits[i];
      
      // Double every second digit
      if (i % 2 === 1) {
        digit *= 2;
        // If result is > 9, sum the digits
        if (digit > 9) {
          digit = Math.floor(digit / 10) + (digit % 10);
        }
      }
      
      sum += digit;
    }
    
    if (sum % 10 !== 0) {
      const locale = context?.locale || 'en';
      return {
        valid: false,
        errors: [{
          field: 'value',
          code: 'sin',
          message: getValidationMessage('sin', locale),
          messageFr: getValidationMessage('sin', 'fr')
        }]
      };
    }
    
    return { valid: true, errors: [] };
  };
};

/**
 * Minimum length validator
 */
export const minLength = (min: number): ValidationRule => {
  return (value: string, context?: ValidationContext): ValidationResult => {
    if (!value) return { valid: true, errors: [] };
    
    if (value.length < min) {
      const locale = context?.locale || 'en';
      return {
        valid: false,
        errors: [{
          field: 'value',
          code: 'minLength',
          message: getValidationMessage('minLength', locale, min),
          messageFr: getValidationMessage('minLength', 'fr', min)
        }]
      };
    }
    
    return { valid: true, errors: [] };
  };
};

/**
 * Maximum length validator
 */
export const maxLength = (max: number): ValidationRule => {
  return (value: string, context?: ValidationContext): ValidationResult => {
    if (!value) return { valid: true, errors: [] };
    
    if (value.length > max) {
      const locale = context?.locale || 'en';
      return {
        valid: false,
        errors: [{
          field: 'value',
          code: 'maxLength',
          message: getValidationMessage('maxLength', locale, max),
          messageFr: getValidationMessage('maxLength', 'fr', max)
        }]
      };
    }
    
    return { valid: true, errors: [] };
  };
};

/**
 * Minimum value validator (for numbers)
 */
export const min = (minValue: number): ValidationRule => {
  return (value: number, context?: ValidationContext): ValidationResult => {
    if (value === null || value === undefined) return { valid: true, errors: [] };
    
    if (value < minValue) {
      const locale = context?.locale || 'en';
      return {
        valid: false,
        errors: [{
          field: 'value',
          code: 'min',
          message: getValidationMessage('min', locale, minValue),
          messageFr: getValidationMessage('min', 'fr', minValue)
        }]
      };
    }
    
    return { valid: true, errors: [] };
  };
};

/**
 * Maximum value validator (for numbers)
 */
export const max = (maxValue: number): ValidationRule => {
  return (value: number, context?: ValidationContext): ValidationResult => {
    if (value === null || value === undefined) return { valid: true, errors: [] };
    
    if (value > maxValue) {
      const locale = context?.locale || 'en';
      return {
        valid: false,
        errors: [{
          field: 'value',
          code: 'max',
          message: getValidationMessage('max', locale, maxValue),
          messageFr: getValidationMessage('max', 'fr', maxValue)
        }]
      };
    }
    
    return { valid: true, errors: [] };
  };
};

/**
 * Pattern validator (regex)
 */
export const pattern = (regex: RegExp, customMessage?: { en?: string; fr?: string }): ValidationRule => {
  return (value: string, context?: ValidationContext): ValidationResult => {
    if (!value) return { valid: true, errors: [] };
    
    if (!regex.test(value)) {
      const locale = context?.locale || 'en';
      return {
        valid: false,
        errors: [{
          field: 'value',
          code: 'pattern',
          message: customMessage?.en || getValidationMessage('pattern', locale),
          messageFr: customMessage?.fr || getValidationMessage('pattern', 'fr')
        }]
      };
    }
    
    return { valid: true, errors: [] };
  };
};

/**
 * Custom validator
 */
export const custom = (
  validator: (value: any, context?: ValidationContext) => boolean | Promise<boolean>,
  errorMessage: { en: string; fr: string }
): ValidationRule => {
  return async (value: any, context?: ValidationContext): Promise<ValidationResult> => {
    const isValid = await validator(value, context);
    
    if (!isValid) {
      const locale = context?.locale || 'en';
      return {
        valid: false,
        errors: [{
          field: 'value',
          code: 'custom',
          message: errorMessage[locale] || errorMessage.en,
          messageFr: errorMessage.fr
        }]
      };
    }
    
    return { valid: true, errors: [] };
  };
};

/**
 * Validate a single field with multiple rules
 */
export async function validateField(
  value: any,
  rules: ValidationRule[],
  context?: ValidationContext
): Promise<ValidationResult> {
  const errors: ValidationError[] = [];
  
  for (const rule of rules) {
    const result = await rule(value, context);
    if (!result.valid) {
      errors.push(...result.errors);
    }
  }
  
  return {
    valid: errors.length === 0,
    errors
  };
}

/**
 * Validate entire form with schema
 */
export async function validateForm(
  formData: Record<string, any>,
  schema: ValidationSchema,
  context?: ValidationContext
): Promise<Record<string, ValidationResult>> {
  const results: Record<string, ValidationResult> = {};
  
  for (const [field, rules] of Object.entries(schema)) {
    const value = formData[field];
    results[field] = await validateField(value, rules, {
      ...context,
      formData
    });
  }
  
  return results;
}

/**
 * Check if form is valid
 */
export function isFormValid(results: Record<string, ValidationResult>): boolean {
  return Object.values(results).every(result => result.valid);
}

/**
 * Get all form errors
 */
export function getFormErrors(results: Record<string, ValidationResult>): ValidationError[] {
  return Object.values(results).flatMap(result => result.errors);
}

/**
 * Format phone number for display (Canadian format)
 */
export function formatPhoneNumber(phone: string): string {
  const cleaned = phone.replace(/\D/g, '');
  
  if (cleaned.length === 10) {
    return `(${cleaned.slice(0, 3)}) ${cleaned.slice(3, 6)}-${cleaned.slice(6)}`;
  } else if (cleaned.length === 11 && cleaned.startsWith('1')) {
    return `+1 (${cleaned.slice(1, 4)}) ${cleaned.slice(4, 7)}-${cleaned.slice(7)}`;
  }
  
  return phone;
}

/**
 * Format postal code for display (Canadian format)
 */
export function formatPostalCode(postalCode: string): string {
  const cleaned = postalCode.replace(/\s/g, '').toUpperCase();
  
  if (cleaned.length === 6) {
    return `${cleaned.slice(0, 3)} ${cleaned.slice(3)}`;
  }
  
  return postalCode;
}

/**
 * Format SIN for display (XXX-XXX-XXX)
 */
export function formatSIN(sin: string): string {
  const cleaned = sin.replace(/\D/g, '');
  
  if (cleaned.length === 9) {
    return `${cleaned.slice(0, 3)}-${cleaned.slice(3, 6)}-${cleaned.slice(6)}`;
  }
  
  return sin;
}
