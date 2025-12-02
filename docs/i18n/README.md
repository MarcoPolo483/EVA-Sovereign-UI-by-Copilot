# Internationalization Guide

Complete guide for implementing multi-language support across 7 locales with RTL preparation, date/number formatting, and government bilingual requirements.

## Table of Contents

- [Supported Locales](#supported-locales)
- [Language Switching](#language-switching)
- [Date and Number Formatting](#date-and-number-formatting)
- [Custom Locale Creation](#custom-locale-creation)
- [Government Bilingual Requirements](#government-bilingual-requirements)
- [RTL Preparation](#rtl-preparation)
- [Translation Workflow](#translation-workflow)

---

## Supported Locales

EVA Sovereign UI provides built-in support for **7 locales** with culturally appropriate formatting.

### Locale List

| Locale | Language | Country | Date Format | Number Format |
|--------|----------|---------|-------------|---------------|
| `en-US` | English | United States | MM/DD/YYYY | 1,234.56 |
| `en-CA` | English | Canada | YYYY-MM-DD | 1,234.56 |
| `en-GB` | English | United Kingdom | DD/MM/YYYY | 1,234.56 |
| `en-AU` | English | Australia | DD/MM/YYYY | 1,234.56 |
| `en-NZ` | English | New Zealand | DD/MM/YYYY | 1,234.56 |
| `fr-CA` | French | Canada | YYYY-MM-DD | 1 234,56 |
| `mi-NZ` | Māori | New Zealand | DD/MM/YYYY | 1,234.56 |

### Default Locale

The default locale is **`en-CA`** (English Canada) for government compliance.

---

## Language Switching

### EVALanguageSwitcher Component

The `<eva-language-switcher>` component provides bilingual toggle for government sites.

#### Basic Usage (Vanilla HTML)

```html
<eva-language-switcher 
  current-locale="en-CA"
  available-locales='["en-CA", "fr-CA"]'
></eva-language-switcher>

<script>
const switcher = document.querySelector('eva-language-switcher');
switcher.addEventListener('locale-change', (e) => {
  console.log('New locale:', e.detail.locale);
  // Update application locale
  updateAppLocale(e.detail.locale);
});
</script>
```

#### React Integration

```tsx
import { EVALanguageSwitcher } from '@eva-suite/eva-sovereign-ui-react';
import { useState } from 'react';

function App() {
  const [locale, setLocale] = useState('en-CA');

  return (
    <EVALanguageSwitcher
      currentLocale={locale}
      availableLocales={['en-CA', 'fr-CA']}
      onLocaleChange={(e) => setLocale(e.detail.locale)}
    />
  );
}
```

#### Vue Integration

```vue
<template>
  <EVALanguageSwitcher
    :current-locale="locale"
    :available-locales="['en-CA', 'fr-CA']"
    @locale-change="handleLocaleChange"
  />
</template>

<script setup>
import { ref } from 'vue';
import { EVALanguageSwitcher } from '@eva-suite/eva-sovereign-ui-vue';

const locale = ref('en-CA');

const handleLocaleChange = (e) => {
  locale.value = e.detail.locale;
};
</script>
```

### Manual Locale Management

#### Storing Locale Preference

```typescript
// Save to localStorage
function saveLocalePreference(locale: string) {
  localStorage.setItem('eva-locale', locale);
}

// Load from localStorage
function loadLocalePreference(): string {
  return localStorage.getItem('eva-locale') || 'en-CA';
}

// Apply on page load
const preferredLocale = loadLocalePreference();
document.documentElement.lang = preferredLocale;
```

#### Browser Language Detection

```typescript
function detectBrowserLocale(supportedLocales: string[]): string {
  const browserLocales = navigator.languages || [navigator.language];
  
  for (const browserLocale of browserLocales) {
    // Exact match
    if (supportedLocales.includes(browserLocale)) {
      return browserLocale;
    }
    
    // Language-only match (en matches en-CA)
    const language = browserLocale.split('-')[0];
    const match = supportedLocales.find(loc => loc.startsWith(language));
    if (match) return match;
  }
  
  return 'en-CA'; // Default
}

// Usage
const supportedLocales = ['en-CA', 'fr-CA', 'en-US'];
const detectedLocale = detectBrowserLocale(supportedLocales);
```

#### URL-Based Locale

```typescript
// Example: /en-CA/services or /fr-CA/services

function getLocaleFromURL(): string | null {
  const match = window.location.pathname.match(/^\/(en-CA|fr-CA|en-US)/);
  return match ? match[1] : null;
}

function setLocaleInURL(locale: string) {
  const currentPath = window.location.pathname;
  const newPath = currentPath.replace(/^\/(en-CA|fr-CA|en-US)/, `/${locale}`);
  
  if (!currentPath.startsWith(`/${locale}`)) {
    window.history.pushState({}, '', newPath || `/${locale}`);
  }
}

// Usage
const urlLocale = getLocaleFromURL();
if (urlLocale) {
  setCurrentLocale(urlLocale);
}
```

---

## Date and Number Formatting

### Date Formatting

#### Using Intl.DateTimeFormat

```typescript
function formatDate(date: Date, locale: string): string {
  return new Intl.DateTimeFormat(locale, {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  }).format(date);
}

// Examples
formatDate(new Date('2025-12-02'), 'en-CA');
// → "December 2, 2025"

formatDate(new Date('2025-12-02'), 'fr-CA');
// → "2 décembre 2025"
```

#### Short Date Format

```typescript
function formatShortDate(date: Date, locale: string): string {
  return new Intl.DateTimeFormat(locale, {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit'
  }).format(date);
}

// Examples
formatShortDate(new Date('2025-12-02'), 'en-US');
// → "12/02/2025"

formatShortDate(new Date('2025-12-02'), 'en-CA');
// → "2025-12-02"

formatShortDate(new Date('2025-12-02'), 'en-GB');
// → "02/12/2025"
```

#### Time Format

```typescript
function formatTime(date: Date, locale: string): string {
  return new Intl.DateTimeFormat(locale, {
    hour: 'numeric',
    minute: '2-digit',
    hour12: locale.startsWith('en-US')
  }).format(date);
}

// Examples
formatTime(new Date('2025-12-02T14:30:00'), 'en-US');
// → "2:30 PM"

formatTime(new Date('2025-12-02T14:30:00'), 'en-CA');
// → "14:30"
```

### Number Formatting

#### Currency

```typescript
function formatCurrency(
  amount: number, 
  locale: string,
  currency: string = 'CAD'
): string {
  return new Intl.NumberFormat(locale, {
    style: 'currency',
    currency: currency
  }).format(amount);
}

// Examples
formatCurrency(1234.56, 'en-CA', 'CAD');
// → "CA$1,234.56"

formatCurrency(1234.56, 'fr-CA', 'CAD');
// → "1 234,56 $ CA"

formatCurrency(1234.56, 'en-US', 'USD');
// → "$1,234.56"
```

#### Decimal Numbers

```typescript
function formatNumber(value: number, locale: string): string {
  return new Intl.NumberFormat(locale, {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
  }).format(value);
}

// Examples
formatNumber(1234.56, 'en-CA');
// → "1,234.56"

formatNumber(1234.56, 'fr-CA');
// → "1 234,56"
```

#### Percentage

```typescript
function formatPercent(value: number, locale: string): string {
  return new Intl.NumberFormat(locale, {
    style: 'percent',
    minimumFractionDigits: 1
  }).format(value / 100);
}

// Examples
formatPercent(12.5, 'en-CA');
// → "12.5%"

formatPercent(12.5, 'fr-CA');
// → "12,5 %"
```

### Relative Time

```typescript
function formatRelativeTime(
  date: Date,
  locale: string
): string {
  const rtf = new Intl.RelativeTimeFormat(locale, { numeric: 'auto' });
  const diffInSeconds = (date.getTime() - Date.now()) / 1000;
  
  const units: Array<[Intl.RelativeTimeFormatUnit, number]> = [
    ['year', 365 * 24 * 60 * 60],
    ['month', 30 * 24 * 60 * 60],
    ['day', 24 * 60 * 60],
    ['hour', 60 * 60],
    ['minute', 60],
    ['second', 1]
  ];
  
  for (const [unit, secondsInUnit] of units) {
    if (Math.abs(diffInSeconds) >= secondsInUnit) {
      const value = Math.round(diffInSeconds / secondsInUnit);
      return rtf.format(value, unit);
    }
  }
  
  return rtf.format(0, 'second');
}

// Examples
formatRelativeTime(new Date(Date.now() - 3600000), 'en-CA');
// → "1 hour ago"

formatRelativeTime(new Date(Date.now() + 86400000), 'fr-CA');
// → "dans 1 jour"
```

---

## Custom Locale Creation

### Adding New Locales

To add a new locale to EVA Sovereign UI:

#### 1. Create Translation Files

```typescript
// locales/es-ES.ts
export const esES = {
  common: {
    submit: 'Enviar',
    cancel: 'Cancelar',
    close: 'Cerrar',
    loading: 'Cargando...',
    error: 'Error',
    success: 'Éxito'
  },
  forms: {
    required: 'Este campo es obligatorio',
    invalidEmail: 'Correo electrónico no válido',
    passwordTooShort: 'La contraseña debe tener al menos 8 caracteres'
  },
  components: {
    select: {
      placeholder: 'Seleccione una opción',
      noResults: 'No se encontraron resultados'
    },
    datePicker: {
      placeholder: 'Seleccione una fecha',
      today: 'Hoy',
      clear: 'Borrar'
    }
  }
};
```

#### 2. Register Locale

```typescript
// i18n-config.ts
import { esES } from './locales/es-ES';

const locales = {
  'en-CA': enCA,
  'fr-CA': frCA,
  'es-ES': esES // New locale
};

function registerLocale(locale: string, translations: object) {
  locales[locale] = translations;
}
```

#### 3. Update Component Strings

```typescript
// Component internal translations
const componentStrings = {
  'en-CA': {
    selectPlaceholder: 'Select an option',
    noResults: 'No results found'
  },
  'fr-CA': {
    selectPlaceholder: 'Sélectionnez une option',
    noResults: 'Aucun résultat trouvé'
  },
  'es-ES': {
    selectPlaceholder: 'Seleccione una opción',
    noResults: 'No se encontraron resultados'
  }
};
```

### Translation Hook (React)

```tsx
import { useTranslation } from './hooks/useTranslation';

function MyComponent() {
  const { t, locale, setLocale } = useTranslation();
  
  return (
    <div>
      <h1>{t('common.welcome')}</h1>
      <p>{t('forms.required')}</p>
    </div>
  );
}
```

### Translation Context

```typescript
// i18n-context.ts
import { createContext } from 'react';

interface I18nContextType {
  locale: string;
  setLocale: (locale: string) => void;
  t: (key: string) => string;
}

export const I18nContext = createContext<I18nContextType>({
  locale: 'en-CA',
  setLocale: () => {},
  t: (key) => key
});
```

---

## Government Bilingual Requirements

### Canada (GC Design System)

#### Legal Requirements

- **Official Languages Act**: All government services must be available in English and French
- **Equal prominence**: Both languages equally accessible
- **Simultaneous publication**: Content released in both languages at once

#### Implementation

```html
<!-- Language toggle must be prominent -->
<eva-gc-header>
  <eva-language-switcher 
    current-locale="en-CA"
    available-locales='["en-CA", "fr-CA"]'
  ></eva-language-switcher>
</eva-gc-header>
```

#### Content Guidelines

- Translate all UI text (buttons, labels, messages)
- Translate all instructional text
- Translate all error messages
- Translate all help documentation
- Keep formatting consistent across languages

#### URL Structure

**Recommended patterns:**

```
Option 1: Path-based
https://example.gc.ca/en/services
https://example.gc.ca/fr/services

Option 2: Subdomain
https://en.example.gc.ca/services
https://fr.example.gc.ca/services

Option 3: Query parameter (not recommended)
https://example.gc.ca/services?lang=en
```

### New Zealand (Te Reo Māori)

#### Requirements

- Māori Language Act: Te Reo Māori is an official language
- Government agencies should provide Māori language options
- Cultural sensitivity in translations

#### Implementation

```html
<eva-language-switcher 
  current-locale="en-NZ"
  available-locales='["en-NZ", "mi-NZ"]'
></eva-language-switcher>
```

---

## RTL Preparation

While EVA Sovereign UI currently focuses on LTR (left-to-right) languages, the architecture supports future RTL (right-to-left) expansion.

### RTL-Ready CSS

```css
/* Use logical properties instead of directional */
.component {
  /* ✅ RTL-ready */
  margin-inline-start: 1rem;
  padding-inline-end: 2rem;
  border-inline-start: 1px solid;
  
  /* ❌ Not RTL-ready */
  margin-left: 1rem;
  padding-right: 2rem;
  border-left: 1px solid;
}
```

### Direction Attribute

```html
<html dir="ltr" lang="en-CA">
  <!-- LTR content -->
</html>

<html dir="rtl" lang="ar-SA">
  <!-- RTL content (future) -->
</html>
```

### CSS Direction Support

```css
[dir="rtl"] .component {
  text-align: right;
}

[dir="ltr"] .component {
  text-align: left;
}
```

### Logical Properties Reference

| Instead of | Use |
|------------|-----|
| `margin-left` | `margin-inline-start` |
| `margin-right` | `margin-inline-end` |
| `padding-left` | `padding-inline-start` |
| `padding-right` | `padding-inline-end` |
| `border-left` | `border-inline-start` |
| `border-right` | `border-inline-end` |
| `left` | `inset-inline-start` |
| `right` | `inset-inline-end` |
| `text-align: left` | `text-align: start` |
| `text-align: right` | `text-align: end` |

---

## Translation Workflow

### Development Workflow

#### 1. Extract Strings

```bash
# Extract all translatable strings
npm run extract-strings

# Output: locales/strings.json
{
  "common.submit": "Submit",
  "common.cancel": "Cancel",
  "forms.required": "This field is required"
}
```

#### 2. Translate

Send `strings.json` to translation service or internal team.

**Translation services:**
- Professional: [Lionbridge](https://www.lionbridge.com/), [SDL](https://www.sdl.com/)
- Government: Translation Bureau of Canada
- Machine + Review: DeepL, Google Translate (review required)

#### 3. Import Translations

```typescript
// locales/fr-CA.json
{
  "common.submit": "Soumettre",
  "common.cancel": "Annuler",
  "forms.required": "Ce champ est obligatoire"
}
```

#### 4. Validate

```bash
# Check for missing translations
npm run validate-translations

# Output
Missing in fr-CA:
- forms.passwordTooShort
- components.select.noResults
```

### Continuous Translation

#### Git Workflow

```bash
# Create translation branch
git checkout -b translate/fr-CA-q4-2025

# Add new strings
npm run extract-strings

# Commit
git add locales/
git commit -m "chore: extract new strings for translation"

# Send for translation
# ...

# Import translations
git add locales/fr-CA.json
git commit -m "feat: add French translations for Q4 features"

# Merge
git checkout main
git merge translate/fr-CA-q4-2025
```

### Translation Review Checklist

- [ ] All strings translated
- [ ] Cultural appropriateness verified
- [ ] Dates/numbers formatted correctly
- [ ] No character encoding issues
- [ ] UI fits translated text (no overflow)
- [ ] Keyboard shortcuts don't conflict
- [ ] Right-click menus work
- [ ] Government terminology correct
- [ ] Legal terms accurate

---

## Best Practices

### 1. Avoid Hardcoded Strings

**❌ Bad:**
```tsx
<eva-gc-button>Submit Application</eva-gc-button>
```

**✅ Good:**
```tsx
<eva-gc-button>{t('application.submit')}</eva-gc-button>
```

### 2. Use Placeholders

**❌ Bad:**
```typescript
const message = 'You have ' + count + ' new messages';
```

**✅ Good:**
```typescript
const message = t('messages.count', { count });
// en: "You have {count} new messages"
// fr: "Vous avez {count} nouveaux messages"
```

### 3. Context for Translators

```json
{
  "forms.submit": {
    "message": "Submit",
    "description": "Button text for submitting a form"
  }
}
```

### 4. Handle Pluralization

```json
{
  "messages.count": {
    "zero": "No messages",
    "one": "1 message",
    "other": "{count} messages"
  }
}
```

### 5. Test with Longest Translation

German and French often 30-40% longer than English. Test UI with longest expected strings.

---

## Resources

- [Intl.DateTimeFormat MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat)
- [Intl.NumberFormat MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat)
- [GC Content Style Guide](https://www.canada.ca/en/treasury-board-secretariat/services/government-communications/canada-content-style-guide.html)
- [Official Languages Act](https://laws-lois.justice.gc.ca/eng/acts/o-3.01/)

## License

MIT © EVA Suite Team
