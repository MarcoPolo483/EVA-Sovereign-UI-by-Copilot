// ESDC Demo Entry Point
// Import and register all EVA Sovereign UI web components

// Import the core web components package to register all custom elements
import '@eva-suite/sovereign-ui';

// Log successful initialization
console.log('✅ EVA Sovereign UI Web Components loaded (ESDC Demo)');
console.log(`📦 ${'getName' in customElements ? 'Modern' : 'Legacy'} Custom Elements API detected`);

// Verify Five Eyes demo components are registered
const requiredComponents = [
  'eva-gc-header',
  'eva-gc-footer',
  'eva-language-switcher',
  'eva-page-shell',
  'eva-hero-banner',
  'eva-container',
  'eva-program-card',
  'eva-chat-panel',
  'eva-skip-link'
];

const registeredCount = requiredComponents.filter(name => 
  customElements.get(name) !== undefined
).length;

console.log(`✓ ${registeredCount}/${requiredComponents.length} demo components registered`);

if (registeredCount < requiredComponents.length) {
  console.error('❌ Missing components:', 
    requiredComponents.filter(name => !customElements.get(name))
  );
}
