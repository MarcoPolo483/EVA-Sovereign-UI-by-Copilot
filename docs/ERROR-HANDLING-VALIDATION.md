# Error Handling & Validation System

Comprehensive error handling and form validation system with bilingual support, ARIA live regions, and Canadian government-specific validators.

## Features

- **Form Validation** - Email, phone, postal code, SIN validators
- **Bilingual Error Messages** - English and French support
- **Error Boundaries** - Graceful error handling with fallback UI
- **ARIA Live Regions** - Screen reader announcements
- **Canadian-Specific** - SIN, postal code, phone number validation
- **Async Validation** - Support for server-side validation
- **Custom Rules** - Extensible validation system

## Quick Start

### Basic Form Validation

```typescript
import { 
  required, 
  email, 
  validateField 
} from '@eva-sovereign/ui-wc/utils/validation';

// Validate a single field
const result = await validateField('test@example.com', [
  required(),
  email()
]);

if (!result.valid) {
  console.log(result.errors[0].message); // "Please enter a valid email address"
}
```

### Validation with Web Components

```html
<eva-input 
  id="emailInput"
  type="email"
  label="Email Address / Adresse courriel"
  required>
</eva-input>

<script type="module">
  import { required, email, validateField } from '@eva-sovereign/ui-wc/utils/validation';
  import { liveRegion } from '@eva-sovereign/ui-wc/utils/live-region';
  
  const input = document.getElementById('emailInput');
  
  input.addEventListener('blur', async () => {
    const result = await validateField(input.value, [
      required(),
      email()
    ]);
    
    if (!result.valid) {
      input.setAttribute('error', result.errors[0].message);
      liveRegion.announceError('Email', result.errors[0].message);
    } else {
      input.removeAttribute('error');
    }
  });
</script>
```

## Built-in Validators

### Required Field

```typescript
import { required } from '@eva-sovereign/ui-wc/utils/validation';

// Basic required
const result = await validateField('', [required()]);

// Custom message
const result2 = await validateField('', [
  required({
    en: 'This field must not be empty',
    fr: 'Ce champ ne doit pas être vide'
  })
]);
```

### Email Validation

RFC 5322 compliant email validation:

```typescript
import { email } from '@eva-sovereign/ui-wc/utils/validation';

const result = await validateField('user@example.com', [email()]);
// valid: true

const result2 = await validateField('invalid-email', [email()]);
// valid: false
// message: "Please enter a valid email address"
```

### Canadian Phone Number

Accepts multiple formats:
- `(123) 456-7890`
- `123-456-7890`
- `1234567890`
- `+1 (123) 456-7890`

```typescript
import { canadianPhone } from '@eva-sovereign/ui-wc/utils/validation';

const result = await validateField('(613) 555-0123', [canadianPhone()]);
// valid: true

const result2 = await validateField('123', [canadianPhone()]);
// valid: false
// message: "Please enter a valid Canadian phone number"
```

### Canadian Postal Code

Format: `A1A 1A1` (letter-digit-letter space digit-letter-digit)

```typescript
import { canadianPostalCode } from '@eva-sovereign/ui-wc/utils/validation';

const result = await validateField('K1A 0B1', [canadianPostalCode()]);
// valid: true

const result2 = await validateField('12345', [canadianPostalCode()]);
// valid: false
// message: "Please enter a valid Canadian postal code (e.g., K1A 0B1)"
```

### Social Insurance Number (SIN)

Validates 9-digit SIN using Luhn algorithm:

```typescript
import { sin } from '@eva-sovereign/ui-wc/utils/validation';

const result = await validateField('123-456-782', [sin()]);
// valid: true (if passes Luhn check)

const result2 = await validateField('123456789', [sin()]);
// valid: false (invalid checksum)
// message: "Please enter a valid Social Insurance Number (9 digits)"
```

### Length Validators

```typescript
import { minLength, maxLength } from '@eva-sovereign/ui-wc/utils/validation';

// Minimum length
const result1 = await validateField('abc', [minLength(5)]);
// valid: false
// message: "Must be at least 5 characters"

// Maximum length
const result2 = await validateField('too long text', [maxLength(5)]);
// valid: false
// message: "Must be no more than 5 characters"
```

### Numeric Range Validators

```typescript
import { min, max } from '@eva-sovereign/ui-wc/utils/validation';

// Minimum value
const result1 = await validateField(5, [min(10)]);
// valid: false
// message: "Must be at least 10"

// Maximum value
const result2 = await validateField(100, [max(50)]);
// valid: false
// message: "Must be no more than 50"
```

### Pattern Validator

Custom regex validation:

```typescript
import { pattern } from '@eva-sovereign/ui-wc/utils/validation';

// Username pattern (alphanumeric + underscore)
const result = await validateField('user_123', [
  pattern(/^[a-zA-Z0-9_]+$/, {
    en: 'Username can only contain letters, numbers, and underscores',
    fr: 'Le nom d\'utilisateur ne peut contenir que des lettres, chiffres et traits de soulignement'
  })
]);
```

### Custom Validator

Create your own validation logic:

```typescript
import { custom } from '@eva-sovereign/ui-wc/utils/validation';

// Async validation (e.g., check username availability)
const isUsernameAvailable = custom(
  async (username: string) => {
    const response = await fetch(`/api/check-username?username=${username}`);
    const data = await response.json();
    return data.available;
  },
  {
    en: 'This username is already taken',
    fr: 'Ce nom d\'utilisateur est déjà pris'
  }
);

const result = await validateField('johndoe', [isUsernameAvailable]);
```

## Form Validation

### Validate Entire Form

```typescript
import { 
  validateForm, 
  required, 
  email, 
  canadianPhone,
  canadianPostalCode 
} from '@eva-sovereign/ui-wc/utils/validation';

const formData = {
  firstName: 'John',
  lastName: 'Doe',
  email: 'john.doe@example.com',
  phone: '(613) 555-0123',
  postalCode: 'K1A 0B1'
};

const schema = {
  firstName: [required(), minLength(2)],
  lastName: [required(), minLength(2)],
  email: [required(), email()],
  phone: [required(), canadianPhone()],
  postalCode: [required(), canadianPostalCode()]
};

const results = await validateForm(formData, schema, { locale: 'en' });

// Check if entire form is valid
if (isFormValid(results)) {
  console.log('Form is valid!');
} else {
  // Get all errors
  const errors = getFormErrors(results);
  errors.forEach(error => {
    console.log(`${error.field}: ${error.message}`);
  });
}
```

### Real-Time Validation Example

```html
<form id="registrationForm">
  <eva-input 
    id="email"
    type="email"
    label="Email / Courriel"
    required>
  </eva-input>
  
  <eva-input 
    id="phone"
    type="tel"
    label="Phone / Téléphone"
    required>
  </eva-input>
  
  <eva-button type="submit">Submit / Soumettre</eva-button>
</form>

<script type="module">
  import { 
    required, 
    email, 
    canadianPhone,
    validateField 
  } from '@eva-sovereign/ui-wc/utils/validation';
  import { liveRegion } from '@eva-sovereign/ui-wc/utils/live-region';
  
  const form = document.getElementById('registrationForm');
  const emailInput = document.getElementById('email');
  const phoneInput = document.getElementById('phone');
  
  // Validate on blur
  emailInput.addEventListener('blur', async () => {
    const result = await validateField(emailInput.value, [
      required(),
      email()
    ]);
    
    if (!result.valid) {
      emailInput.setAttribute('error', result.errors[0].message);
      liveRegion.announceError('Email', result.errors[0].message);
    } else {
      emailInput.removeAttribute('error');
    }
  });
  
  phoneInput.addEventListener('blur', async () => {
    const result = await validateField(phoneInput.value, [
      required(),
      canadianPhone()
    ]);
    
    if (!result.valid) {
      phoneInput.setAttribute('error', result.errors[0].message);
      liveRegion.announceError('Phone', result.errors[0].message);
    } else {
      phoneInput.removeAttribute('error');
    }
  });
  
  // Validate on submit
  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    
    const formData = {
      email: emailInput.value,
      phone: phoneInput.value
    };
    
    const schema = {
      email: [required(), email()],
      phone: [required(), canadianPhone()]
    };
    
    const results = await validateForm(formData, schema);
    
    if (isFormValid(results)) {
      liveRegion.announceSuccess('Form submitted successfully!');
      // Submit form
    } else {
      const errors = getFormErrors(results);
      liveRegion.announceError('Form', `${errors.length} validation errors`);
    }
  });
</script>
```

## Error Boundaries

### Basic Error Boundary

```html
<eva-error-boundary locale="en">
  <div>
    <!-- Your application content -->
    <eva-button onclick="throwError()">Trigger Error</eva-button>
  </div>
</eva-error-boundary>

<script>
  function throwError() {
    throw new Error('Something went wrong!');
  }
</script>
```

### Custom Error Messages

```html
<eva-error-boundary 
  locale="fr"
  title="Erreur d'application"
  message="Une erreur inattendue s'est produite. Veuillez réessayer.">
  <!-- Your content -->
</eva-error-boundary>
```

### Programmatic Error Handling

```typescript
import { EVAErrorBoundary } from '@eva-sovereign/ui-wc/utils/error-boundary';

const boundary = document.querySelector('eva-error-boundary') as EVAErrorBoundary;

// Manually catch an error
try {
  riskyOperation();
} catch (error) {
  boundary.catchError(error, 'Error in risky operation');
}

// Reset the boundary
boundary.reset();
```

## ARIA Live Regions

### Announce Messages to Screen Readers

```typescript
import { liveRegion } from '@eva-sovereign/ui-wc/utils/live-region';

// Polite announcement (doesn't interrupt)
liveRegion.announce('Form saved successfully', {
  politeness: 'polite',
  clearAfter: 5000
});

// Assertive announcement (interrupts current speech)
liveRegion.announce('Error: Invalid input', {
  politeness: 'assertive',
  priority: 3
});
```

### Convenience Methods

```typescript
// Announce validation error
liveRegion.announceError('Email', 'Invalid email format', 'en');

// Announce success
liveRegion.announceSuccess('Profile updated successfully');

// Announce loading state
liveRegion.announceLoading('Loading user data...');

// Clear announcements
liveRegion.clear();
```

### Custom Live Region Component

```html
<eva-live-region id="customRegion" politeness="polite" atomic></eva-live-region>

<script type="module">
  import { EVALiveRegion } from '@eva-sovereign/ui-wc/utils/live-region';
  
  const region = document.getElementById('customRegion');
  
  // Announce message
  region.announce('Custom announcement', {
    clearAfter: 3000,
    priority: 2
  });
</script>
```

## Formatting Utilities

### Format Phone Number

```typescript
import { formatPhoneNumber } from '@eva-sovereign/ui-wc/utils/validation';

const formatted = formatPhoneNumber('6135550123');
// Returns: "(613) 555-0123"

const formatted2 = formatPhoneNumber('16135550123');
// Returns: "+1 (613) 555-0123"
```

### Format Postal Code

```typescript
import { formatPostalCode } from '@eva-sovereign/ui-wc/utils/validation';

const formatted = formatPostalCode('k1a0b1');
// Returns: "K1A 0B1"
```

### Format SIN

```typescript
import { formatSIN } from '@eva-sovereign/ui-wc/utils/validation';

const formatted = formatSIN('123456782');
// Returns: "123-456-782"
```

## Complete Form Example

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Registration Form</title>
</head>
<body>
  <eva-error-boundary locale="en">
    <form id="registrationForm">
      <h1>User Registration</h1>
      
      <eva-input 
        id="firstName"
        label="First Name"
        required
        autocomplete="given-name">
      </eva-input>
      
      <eva-input 
        id="lastName"
        label="Last Name"
        required
        autocomplete="family-name">
      </eva-input>
      
      <eva-input 
        id="email"
        type="email"
        label="Email Address"
        required
        autocomplete="email">
      </eva-input>
      
      <eva-input 
        id="phone"
        type="tel"
        label="Phone Number"
        required
        autocomplete="tel">
      </eva-input>
      
      <eva-input 
        id="postalCode"
        label="Postal Code"
        required
        autocomplete="postal-code">
      </eva-input>
      
      <eva-input 
        id="sin"
        label="Social Insurance Number"
        type="password"
        autocomplete="off">
      </eva-input>
      
      <eva-button type="submit" id="submitBtn">
        Register
      </eva-button>
    </form>
  </eva-error-boundary>
  
  <script type="module">
    import { 
      required,
      email,
      canadianPhone,
      canadianPostalCode,
      sin,
      minLength,
      validateForm,
      isFormValid,
      getFormErrors,
      formatPhoneNumber,
      formatPostalCode,
      formatSIN
    } from '@eva-sovereign/ui-wc/utils/validation';
    import { liveRegion } from '@eva-sovereign/ui-wc/utils/live-region';
    
    const form = document.getElementById('registrationForm');
    const fields = {
      firstName: document.getElementById('firstName'),
      lastName: document.getElementById('lastName'),
      email: document.getElementById('email'),
      phone: document.getElementById('phone'),
      postalCode: document.getElementById('postalCode'),
      sin: document.getElementById('sin')
    };
    
    // Validation schema
    const schema = {
      firstName: [required(), minLength(2)],
      lastName: [required(), minLength(2)],
      email: [required(), email()],
      phone: [required(), canadianPhone()],
      postalCode: [required(), canadianPostalCode()],
      sin: [sin()] // Optional field
    };
    
    // Validate field on blur
    Object.entries(fields).forEach(([name, field]) => {
      field.addEventListener('blur', async () => {
        const result = await validateField(field.value, schema[name]);
        
        if (!result.valid) {
          field.setAttribute('error', result.errors[0].message);
          liveRegion.announceError(name, result.errors[0].message);
        } else {
          field.removeAttribute('error');
        }
      });
      
      // Format on blur
      field.addEventListener('blur', () => {
        if (name === 'phone' && field.value) {
          field.value = formatPhoneNumber(field.value);
        } else if (name === 'postalCode' && field.value) {
          field.value = formatPostalCode(field.value);
        } else if (name === 'sin' && field.value) {
          field.value = formatSIN(field.value);
        }
      });
    });
    
    // Submit handler
    form.addEventListener('submit', async (e) => {
      e.preventDefault();
      
      const formData = Object.fromEntries(
        Object.entries(fields).map(([name, field]) => [name, field.value])
      );
      
      // Show loading state
      const submitBtn = document.getElementById('submitBtn');
      submitBtn.setAttribute('loading', '');
      liveRegion.announceLoading('Validating form...');
      
      // Validate form
      const results = await validateForm(formData, schema);
      
      if (isFormValid(results)) {
        // Submit to server
        try {
          const response = await fetch('/api/register', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(formData)
          });
          
          if (response.ok) {
            liveRegion.announceSuccess('Registration successful!');
            form.reset();
          } else {
            throw new Error('Registration failed');
          }
        } catch (error) {
          liveRegion.announceError('Form', 'Registration failed. Please try again.');
        }
      } else {
        // Show errors
        const errors = getFormErrors(results);
        errors.forEach(error => {
          const field = fields[error.field];
          if (field) {
            field.setAttribute('error', error.message);
          }
        });
        
        liveRegion.announceError('Form', `${errors.length} validation errors found`);
      }
      
      submitBtn.removeAttribute('loading');
    });
  </script>
</body>
</html>
```

## Best Practices

### 1. Validate on Blur, Not on Input

```typescript
// ✅ Good - Validate when user leaves field
input.addEventListener('blur', validateField);

// ❌ Bad - Too aggressive, validates while typing
input.addEventListener('input', validateField);
```

### 2. Provide Clear Error Messages

```typescript
// ✅ Good - Specific and helpful
const result = await validateField(phone, [
  required({
    en: 'Phone number is required to contact you',
    fr: 'Le numéro de téléphone est requis pour vous contacter'
  })
]);

// ❌ Bad - Generic and unhelpful
const result2 = await validateField(phone, [required()]);
```

### 3. Use ARIA Live Regions

```typescript
// ✅ Good - Announce errors to screen readers
if (!result.valid) {
  liveRegion.announceError('Phone', result.errors[0].message);
}

// ❌ Bad - Only visual feedback
if (!result.valid) {
  input.setAttribute('error', result.errors[0].message);
}
```

### 4. Format User Input

```typescript
// ✅ Good - Format for readability
input.addEventListener('blur', () => {
  input.value = formatPhoneNumber(input.value);
});

// ❌ Bad - Leave raw user input
```

### 5. Handle Async Validation

```typescript
// ✅ Good - Show loading state during async validation
input.setAttribute('validating', '');
const result = await validateField(input.value, [asyncValidator]);
input.removeAttribute('validating');
```

## API Reference

### Validation Functions

- `required(customMessage?)` - Required field validator
- `email()` - Email validator (RFC 5322)
- `canadianPhone()` - Canadian phone number validator
- `canadianPostalCode()` - Canadian postal code validator
- `sin()` - Social Insurance Number validator
- `minLength(min)` - Minimum length validator
- `maxLength(max)` - Maximum length validator
- `min(minValue)` - Minimum value validator
- `max(maxValue)` - Maximum value validator
- `pattern(regex, customMessage?)` - Pattern validator
- `custom(validator, errorMessage)` - Custom validator

### Form Validation

- `validateField(value, rules, context?)` - Validate single field
- `validateForm(formData, schema, context?)` - Validate entire form
- `isFormValid(results)` - Check if form is valid
- `getFormErrors(results)` - Get all form errors

### Formatting

- `formatPhoneNumber(phone)` - Format Canadian phone number
- `formatPostalCode(postalCode)` - Format Canadian postal code
- `formatSIN(sin)` - Format Social Insurance Number

### Live Region

- `liveRegion.announce(message, options?)` - Announce message
- `liveRegion.announceError(field, message, locale?)` - Announce error
- `liveRegion.announceSuccess(message)` - Announce success
- `liveRegion.announceLoading(message)` - Announce loading
- `liveRegion.clear()` - Clear announcements

## Browser Support

- ✅ Chrome/Edge 88+
- ✅ Firefox 85+
- ✅ Safari 14+
- ✅ Opera 75+

## Testing

See test examples in `/tests/validation.test.ts` and `/tests/error-boundary.test.ts`.
