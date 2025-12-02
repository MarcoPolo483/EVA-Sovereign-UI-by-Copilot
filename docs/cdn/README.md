# CDN Distribution Guide

EVA Sovereign UI is available via multiple CDN providers for direct browser usage without npm installation.

## Quick Start

### HTML Usage

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>EVA Sovereign UI</title>
  
  <!-- EVA Sovereign UI from jsDelivr -->
  <script type="module" src="https://cdn.jsdelivr.net/npm/@eva-suite/eva-sovereign-ui-wc@1.1.0/dist/eva-sovereign-ui.es.js"></script>
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@eva-suite/eva-sovereign-ui-wc@1.1.0/dist/style.css">
</head>
<body>
  <eva-gc-button>Click Me</eva-gc-button>
</body>
</html>
```

## CDN Providers

### jsDelivr (Recommended)

**Features:**
- Global CDN with 750+ locations
- Auto-minification
- Version aliasing
- Load balancing
- China-friendly

**URLs:**

```html
<!-- Latest version -->
<script type="module" src="https://cdn.jsdelivr.net/npm/@eva-suite/eva-sovereign-ui-wc/dist/eva-sovereign-ui.es.js"></script>

<!-- Specific version -->
<script type="module" src="https://cdn.jsdelivr.net/npm/@eva-suite/eva-sovereign-ui-wc@1.1.0/dist/eva-sovereign-ui.es.js"></script>

<!-- Minor version range -->
<script type="module" src="https://cdn.jsdelivr.net/npm/@eva-suite/eva-sovereign-ui-wc@1.1/dist/eva-sovereign-ui.es.js"></script>

<!-- Styles -->
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@eva-suite/eva-sovereign-ui-wc@1.1.0/dist/style.css">
```

### unpkg

**Features:**
- Fast global CDN
- Simple URLs
- Automatic latest version
- File browsing

**URLs:**

```html
<!-- Latest version -->
<script type="module" src="https://unpkg.com/@eva-suite/eva-sovereign-ui-wc/dist/eva-sovereign-ui.es.js"></script>

<!-- Specific version -->
<script type="module" src="https://unpkg.com/@eva-suite/eva-sovereign-ui-wc@1.1.0/dist/eva-sovereign-ui.es.js"></script>

<!-- Styles -->
<link rel="stylesheet" href="https://unpkg.com/@eva-suite/eva-sovereign-ui-wc@1.1.0/dist/style.css">
```

### esm.sh (ES Modules)

**Features:**
- TypeScript support
- Bundle optimization
- Tree shaking
- Subpath imports

**URLs:**

```html
<!-- Main package -->
<script type="module">
  import '@eva-suite/eva-sovereign-ui-wc';
</script>

<!-- With import map -->
<script type="importmap">
{
  "imports": {
    "@eva-suite/eva-sovereign-ui-wc": "https://esm.sh/@eva-suite/eva-sovereign-ui-wc@1.1.0"
  }
}
</script>
```

## Complete Example

### Government Application

```html
<!DOCTYPE html>
<html lang="en-CA">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Government Service Portal</title>
  
  <!-- EVA Sovereign UI -->
  <script type="module" src="https://cdn.jsdelivr.net/npm/@eva-suite/eva-sovereign-ui-wc@1.1.0/dist/eva-sovereign-ui.es.js"></script>
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@eva-suite/eva-sovereign-ui-wc@1.1.0/dist/style.css">
  
  <style>
    body {
      margin: 0;
      font-family: 'Lato', 'Noto Sans', sans-serif;
    }
  </style>
</head>
<body>
  <!-- GC Header -->
  <eva-gc-header>
    <span slot="title">Government of Canada</span>
    <eva-language-switcher 
      slot="language-toggle"
      current-locale="en-CA"
      available-locales='["en-CA", "fr-CA"]'
    ></eva-language-switcher>
  </eva-gc-header>
  
  <!-- Main Content -->
  <main style="padding: 2rem; max-width: 1200px; margin: 0 auto;">
    <h1>Service Application</h1>
    
    <form id="applicationForm">
      <!-- Personal Information -->
      <section>
        <h2>Personal Information</h2>
        
        <eva-label for="firstName">First Name *</eva-label>
        <eva-input 
          id="firstName" 
          name="firstName" 
          required
          aria-required="true"
        ></eva-input>
        
        <eva-label for="lastName">Last Name *</eva-label>
        <eva-input 
          id="lastName" 
          name="lastName" 
          required
          aria-required="true"
        ></eva-input>
        
        <eva-label for="email">Email Address *</eva-label>
        <eva-input 
          id="email" 
          name="email" 
          type="email"
          required
          aria-required="true"
        ></eva-input>
      </section>
      
      <!-- Service Selection -->
      <section style="margin-top: 2rem;">
        <h2>Service Selection</h2>
        
        <eva-label for="service">Select Service *</eva-label>
        <eva-select id="service" name="service" required>
          <eva-select-item value="employment">Employment Insurance</eva-select-item>
          <eva-select-item value="passport">Passport Services</eva-select-item>
          <eva-select-item value="tax">Tax Services</eva-select-item>
        </eva-select>
      </section>
      
      <!-- Terms -->
      <section style="margin-top: 2rem;">
        <eva-checkbox name="terms" required>
          I agree to the terms and conditions *
        </eva-checkbox>
        
        <eva-checkbox name="newsletter">
          Subscribe to email updates
        </eva-checkbox>
      </section>
      
      <!-- Actions -->
      <div style="margin-top: 2rem; display: flex; gap: 1rem;">
        <eva-gc-button type="submit">Submit Application</eva-gc-button>
        <eva-gc-button type="button" variant="secondary" onclick="document.getElementById('applicationForm').reset()">
          Clear Form
        </eva-gc-button>
      </div>
    </form>
  </main>
  
  <!-- GC Footer -->
  <eva-gc-footer style="margin-top: 4rem;">
    <p>© 2025 Government of Canada</p>
  </eva-gc-footer>
  
  <script>
    // Form submission
    document.getElementById('applicationForm').addEventListener('submit', (e) => {
      e.preventDefault();
      
      const formData = new FormData(e.target);
      const data = Object.fromEntries(formData);
      
      console.log('Form submitted:', data);
      
      // Show success dialog
      alert('Application submitted successfully!');
    });
    
    // Language switcher
    document.querySelector('eva-language-switcher').addEventListener('locale-change', (e) => {
      console.log('Language changed to:', e.detail.locale);
      // Update page language
      document.documentElement.lang = e.detail.locale;
    });
  </script>
</body>
</html>
```

## Framework Integration via CDN

### React

```html
<!DOCTYPE html>
<html>
<head>
  <script crossorigin src="https://unpkg.com/react@18/umd/react.production.min.js"></script>
  <script crossorigin src="https://unpkg.com/react-dom@18/umd/react-dom.production.min.js"></script>
  <script src="https://unpkg.com/@babel/standalone/babel.min.js"></script>
  
  <script type="module" src="https://cdn.jsdelivr.net/npm/@eva-suite/eva-sovereign-ui-wc@1.1.0/dist/eva-sovereign-ui.es.js"></script>
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@eva-suite/eva-sovereign-ui-wc@1.1.0/dist/style.css">
</head>
<body>
  <div id="root"></div>
  
  <script type="text/babel">
    function App() {
      const [value, setValue] = React.useState('');
      
      return (
        <div>
          <eva-gc-button onClick={() => alert('Clicked!')}>
            Click Me
          </eva-gc-button>
          
          <eva-input 
            value={value}
            onInput={(e) => setValue(e.target.value)}
          />
          
          <p>Value: {value}</p>
        </div>
      );
    }
    
    ReactDOM.render(<App />, document.getElementById('root'));
  </script>
</body>
</html>
```

### Vue

```html
<!DOCTYPE html>
<html>
<head>
  <script src="https://unpkg.com/vue@3/dist/vue.global.js"></script>
  
  <script type="module" src="https://cdn.jsdelivr.net/npm/@eva-suite/eva-sovereign-ui-wc@1.1.0/dist/eva-sovereign-ui.es.js"></script>
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@eva-suite/eva-sovereign-ui-wc@1.1.0/dist/style.css">
</head>
<body>
  <div id="app">
    <eva-gc-button @click="handleClick">{{ message }}</eva-gc-button>
    <eva-input v-model="text"></eva-input>
    <p>{{ text }}</p>
  </div>
  
  <script>
    const { createApp } = Vue;
    
    createApp({
      data() {
        return {
          message: 'Click Me',
          text: ''
        }
      },
      methods: {
        handleClick() {
          alert('Button clicked!');
        }
      }
    }).mount('#app');
  </script>
</body>
</html>
```

## Import Maps

For modern browsers supporting import maps:

```html
<!DOCTYPE html>
<html>
<head>
  <script type="importmap">
  {
    "imports": {
      "@eva-suite/eva-sovereign-ui-wc": "https://cdn.jsdelivr.net/npm/@eva-suite/eva-sovereign-ui-wc@1.1.0/dist/eva-sovereign-ui.es.js"
    }
  }
  </script>
  
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@eva-suite/eva-sovereign-ui-wc@1.1.0/dist/style.css">
</head>
<body>
  <eva-gc-button>Click Me</eva-gc-button>
  
  <script type="module">
    import '@eva-suite/eva-sovereign-ui-wc';
    
    // Components are now registered and ready to use
    document.querySelector('eva-gc-button').addEventListener('click', () => {
      console.log('Button clicked!');
    });
  </script>
</body>
</html>
```

## Performance Optimization

### Preload Resources

```html
<head>
  <!-- Preload critical resources -->
  <link 
    rel="preload" 
    href="https://cdn.jsdelivr.net/npm/@eva-suite/eva-sovereign-ui-wc@1.1.0/dist/eva-sovereign-ui.es.js" 
    as="script" 
    crossorigin
  >
  
  <link 
    rel="preload" 
    href="https://cdn.jsdelivr.net/npm/@eva-suite/eva-sovereign-ui-wc@1.1.0/dist/style.css" 
    as="style"
  >
</head>
```

### DNS Prefetch

```html
<head>
  <!-- Prefetch CDN domains -->
  <link rel="dns-prefetch" href="https://cdn.jsdelivr.net">
  <link rel="dns-prefetch" href="https://unpkg.com">
</head>
```

### Lazy Loading

```html
<script type="module">
  // Load components only when needed
  async function loadComponents() {
    await import('https://cdn.jsdelivr.net/npm/@eva-suite/eva-sovereign-ui-wc@1.1.0/dist/eva-sovereign-ui.es.js');
  }
  
  // Load on user interaction
  document.getElementById('showForm').addEventListener('click', async () => {
    await loadComponents();
    document.getElementById('form').style.display = 'block';
  });
</script>
```

## Version Pinning

### Semantic Versioning

```html
<!-- Exact version (recommended for production) -->
<script src="https://cdn.jsdelivr.net/npm/@eva-suite/eva-sovereign-ui-wc@1.1.0/dist/eva-sovereign-ui.es.js"></script>

<!-- Minor version updates (e.g., 1.1.x) -->
<script src="https://cdn.jsdelivr.net/npm/@eva-suite/eva-sovereign-ui-wc@1.1/dist/eva-sovereign-ui.es.js"></script>

<!-- Major version updates (e.g., 1.x.x) -->
<script src="https://cdn.jsdelivr.net/npm/@eva-suite/eva-sovereign-ui-wc@1/dist/eva-sovereign-ui.es.js"></script>

<!-- Latest (not recommended for production) -->
<script src="https://cdn.jsdelivr.net/npm/@eva-suite/eva-sovereign-ui-wc/dist/eva-sovereign-ui.es.js"></script>
```

## Subresource Integrity (SRI)

For enhanced security, use SRI hashes:

```bash
# Generate SRI hash
curl https://cdn.jsdelivr.net/npm/@eva-suite/eva-sovereign-ui-wc@1.1.0/dist/eva-sovereign-ui.es.js | openssl dgst -sha384 -binary | openssl base64 -A
```

```html
<script 
  type="module" 
  src="https://cdn.jsdelivr.net/npm/@eva-suite/eva-sovereign-ui-wc@1.1.0/dist/eva-sovereign-ui.es.js"
  integrity="sha384-HASH_HERE"
  crossorigin="anonymous"
></script>
```

## Troubleshooting

### Components Not Rendering

1. Check browser console for errors
2. Verify script is type="module"
3. Ensure CORS is not blocking requests
4. Check browser supports Custom Elements (Chrome 67+, Firefox 63+, Safari 10.1+)

### Styles Not Applying

1. Ensure CSS is loaded: `<link rel="stylesheet" href="...">`
2. Check CSS precedence and specificity
3. Verify no Content Security Policy blocking styles

### Version Issues

1. Clear browser cache
2. Use versioned URLs (not @latest)
3. Check CDN status: https://www.jsdelivr.com/

## Resources

- [jsDelivr Documentation](https://www.jsdelivr.com/documentation)
- [unpkg Documentation](https://unpkg.com/)
- [Import Maps Browser Support](https://caniuse.com/import-maps)

## License

MIT © EVA Suite Team
