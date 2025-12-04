// Dev Kit Demo Entry Point
// Import and register all EVA Sovereign UI web components

// Import the core web components package to register all custom elements
import '@eva-suite/sovereign-ui';

// Log successful initialization
console.log('✅ EVA Sovereign UI Web Components loaded successfully');
console.log(`📦 ${'getName' in customElements ? 'Modern' : 'Legacy'} Custom Elements API detected`);

// Verify critical components are registered
const criticalComponents = [
  'eva-gc-header',
  'eva-gc-footer',
  'eva-gc-button',
  'eva-language-switcher',
  'eva-page-shell',
  'eva-container',
  'eva-pagination',
  'eva-progress',
  'eva-slider',
  'eva-accordion',
  'eva-tabs',
  'eva-card'
];

const registeredCount = criticalComponents.filter(name => 
  customElements.get(name) !== undefined
).length;

console.log(`✓ ${registeredCount}/${criticalComponents.length} critical components registered`);

if (registeredCount < criticalComponents.length) {
  console.warn('⚠️ Some components failed to register:', 
    criticalComponents.filter(name => !customElements.get(name))
  );
}
