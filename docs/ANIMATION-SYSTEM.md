# EVA Animation System

Comprehensive animation system providing smooth transitions, loading animations, and user feedback with built-in accessibility support.

## Features

- **31+ Pre-built Animations** - Fade, slide, zoom, flip, loading, and feedback animations
- **8 Transition Presets** - From instant (50ms) to slowest (700ms)
- **6 Easing Functions** - Optimized curves for natural motion
- **40+ Utility Classes** - Apply animations without custom CSS
- **Reduced Motion Support** - Respects `prefers-reduced-motion`
- **GPU Acceleration** - Transform-based animations for 60fps performance
- **Page Transitions** - Smooth SPA navigation effects

## Quick Start

### Using Utility Classes

```html
<!-- Fade in animation -->
<div class="animate-fade-in">Content appears smoothly</div>

<!-- Slide in from left -->
<div class="animate-slide-in-left">Slides into view</div>

<!-- Loading spinner -->
<div class="animate-spin">⟳</div>

<!-- Hover effect -->
<button class="hover-lift">Lift on hover</button>
```

### Using Web Components

```html
<!-- Loading spinner -->
<eva-spinner variant="circular" size="md" label="Loading data"></eva-spinner>
<eva-spinner variant="dots" size="sm"></eva-spinner>
<eva-spinner variant="bars" size="lg"></eva-spinner>

<!-- Skeleton loaders -->
<eva-skeleton variant="text" lines="3" width="100%"></eva-skeleton>
<eva-skeleton variant="circle" width="48px" height="48px"></eva-skeleton>
<eva-skeleton variant="rectangle" width="100%" height="200px"></eva-skeleton>
```

## Animation Categories

### 1. Fade Animations

Opacity-based entrance and exit effects.

```html
<div class="animate-fade-in">Fades in</div>
<div class="animate-fade-out">Fades out</div>
```

**CSS Variables:**
- Duration: 200ms (default)
- Easing: ease-out

### 2. Slide Animations

Directional entrance effects with 8 variants.

```html
<!-- Entrance animations -->
<div class="animate-slide-in-top">From top</div>
<div class="animate-slide-in-bottom">From bottom</div>
<div class="animate-slide-in-left">From left</div>
<div class="animate-slide-in-right">From right</div>

<!-- Exit animations -->
<div class="animate-slide-out-top">To top</div>
<div class="animate-slide-out-bottom">To bottom</div>
<div class="animate-slide-out-left">To left</div>
<div class="animate-slide-out-right">To right</div>
```

### 3. Scale & Zoom Animations

Size transformation effects.

```html
<div class="animate-scale-in">Scales from small</div>
<div class="animate-zoom-in">Zooms in</div>
<div class="animate-zoom-out">Zooms out</div>
```

### 4. Flip Animations

3D rotation effects for card flips and reveals.

```html
<div class="animate-flip-in">Flips into view</div>
<div class="animate-flip-out">Flips out of view</div>
```

**Properties:**
- Uses `rotateY` for 3D effect
- Requires `perspective` on parent

### 5. Loading Animations

Continuous animations for loading states.

```html
<!-- Circular spinner -->
<div class="animate-spin">⟳</div>

<!-- Speed variants -->
<div class="animate-spin-slow">Slow rotation</div>
<div class="animate-spin-fast">Fast rotation</div>

<!-- Pulse effect -->
<div class="animate-pulse">Pulsing indicator</div>

<!-- Shimmer (for skeletons) -->
<div class="animate-shimmer">Skeleton loader</div>
```

### 6. Feedback Animations

User interaction feedback and attention grabbers.

```html
<!-- Shake (error feedback) -->
<input class="animate-shake" />

<!-- Bounce (success) -->
<button class="animate-bounce">Success!</button>

<!-- Wiggle (attention) -->
<div class="animate-wiggle">Look at me!</div>

<!-- Heartbeat (pulse) -->
<div class="animate-heartbeat">❤️</div>

<!-- Tada (celebration) -->
<div class="animate-tada">🎉 Complete!</div>

<!-- Scale bounce (confirmation) -->
<div class="animate-scale-bounce">✓</div>
```

## Transition Utilities

### Duration Classes

```html
<div class="transition-instant">50ms transition</div>
<div class="transition-fast">150ms transition</div>
<div class="transition-normal">200ms transition</div>
<div class="transition-slow">300ms transition</div>
```

### Property-Specific Transitions

```html
<div class="transition-colors">Only colors transition</div>
<div class="transition-opacity">Only opacity transitions</div>
<div class="transition-transform">Only transforms transition</div>
<div class="transition-shadow">Only shadows transition</div>
```

### Combined Transitions

```html
<button class="transition-fast transition-colors hover-lift">
  Fast color change + lift on hover
</button>
```

## Page Transitions

Smooth SPA navigation effects for route changes.

### Fade Transition

```typescript
import { pageTransitions } from '@eva-sovereign/ui-wc/tokens/animations';

// Apply on route enter
element.style.cssText = pageTransitions.fade.enter;

// Apply on route exit
element.style.cssText = pageTransitions.fade.exit;
```

### Slide Transition

```typescript
// Slide from right (forward navigation)
element.style.cssText = pageTransitions.slide.enter;

// Slide to left (forward navigation)
element.style.cssText = pageTransitions.slide.exit;
```

### Zoom Transition

```typescript
// Zoom in (modal open)
element.style.cssText = pageTransitions.zoom.enter;

// Zoom out (modal close)
element.style.cssText = pageTransitions.zoom.exit;
```

## Accessibility

### Reduced Motion Support

The system automatically respects `prefers-reduced-motion` settings:

```typescript
import { prefersReducedMotion, getAccessibleAnimation } from '@eva-sovereign/ui-wc/tokens/animations';

// Check user preference
if (prefersReducedMotion()) {
  // Disable or reduce animations
}

// Get accessible animation duration
const duration = getAccessibleAnimation('200ms'); // Returns '0.01ms' if reduced motion preferred
```

### Manual Implementation

```css
@media (prefers-reduced-motion: reduce) {
  * {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }
}
```

### Accessible Loading States

Always include proper ARIA attributes:

```html
<!-- Spinner with status -->
<eva-spinner 
  variant="circular" 
  label="Loading user data"
  role="status"
  aria-live="polite">
</eva-spinner>

<!-- Skeleton with busy state -->
<eva-skeleton 
  variant="text" 
  lines="3"
  aria-busy="true"
  aria-label="Loading content">
</eva-skeleton>
```

## Performance Best Practices

### 1. Use GPU-Accelerated Properties

✅ **Recommended:**
```css
transform: translateX(100px);
transform: scale(1.1);
opacity: 0.5;
```

❌ **Avoid:**
```css
left: 100px;
width: 150%;
margin-left: 50px;
```

### 2. Optimize Animation Complexity

Keep animations under 200ms for interactions:

```css
/* Fast feedback */
button { transition: transform 150ms ease-out; }

/* Slower for complex transitions */
.modal { transition: opacity 300ms ease-in-out; }
```

### 3. Use `will-change` Sparingly

Only on actively animating elements:

```css
.animating {
  will-change: transform, opacity;
}

.animation-complete {
  will-change: auto; /* Remove after animation */
}
```

### 4. Batch Animations

Use CSS classes instead of inline styles:

```typescript
// ✅ Good - Single reflow
element.classList.add('animate-fade-in');

// ❌ Bad - Multiple reflows
element.style.opacity = '0';
element.style.transform = 'translateY(-10px)';
element.style.transition = 'all 200ms';
```

## Advanced Usage

### Programmatic Animation Control

```typescript
import { 
  transitions,
  animations,
  generateAnimation,
  generateKeyframes 
} from '@eva-sovereign/ui-wc/tokens/animations';

// Create custom animation
const customKeyframes = generateKeyframes('customFade', {
  '0%': { opacity: '0', transform: 'scale(0.95)' },
  '100%': { opacity: '1', transform: 'scale(1)' }
});

// Apply animation with options
const animationCSS = generateAnimation(animations.fadeIn, {
  duration: transitions.durations.fast,
  easing: transitions.easing.easeOut,
  delay: '100ms',
  iterations: 1
});

element.style.animation = animationCSS;
```

### Chaining Animations

Use animation events for sequences:

```typescript
element.addEventListener('animationend', () => {
  element.classList.remove('animate-fade-in');
  element.classList.add('animate-slide-in-left');
});
```

### Custom Easing Functions

```typescript
// Available easing functions
transitions.easing.easeIn;      // cubic-bezier(0.4, 0, 1, 1)
transitions.easing.easeOut;     // cubic-bezier(0, 0, 0.2, 1)
transitions.easing.easeInOut;   // cubic-bezier(0.4, 0, 0.2, 1)
transitions.easing.sharp;       // cubic-bezier(0.4, 0, 0.6, 1)
transitions.easing.bounce;      // cubic-bezier(0.68, -0.55, 0.265, 1.55)
transitions.easing.smooth;      // cubic-bezier(0.25, 0.1, 0.25, 1)
```

## Component Examples

### Loading Button

```html
<eva-button id="submitBtn">
  Submit
  <eva-spinner 
    variant="dots" 
    size="sm" 
    style="display: none;">
  </eva-spinner>
</eva-button>

<script>
  submitBtn.addEventListener('click', async () => {
    const spinner = submitBtn.querySelector('eva-spinner');
    spinner.style.display = 'inline-flex';
    submitBtn.disabled = true;
    
    await submitForm();
    
    spinner.style.display = 'none';
    submitBtn.disabled = false;
    submitBtn.classList.add('animate-scale-bounce');
  });
</script>
```

### Skeleton Loading Screen

```html
<div class="content">
  <!-- Show while loading -->
  <div class="skeleton-container" id="skeleton">
    <eva-skeleton variant="circle" width="64px" height="64px"></eva-skeleton>
    <eva-skeleton variant="text" lines="3" width="100%"></eva-skeleton>
    <eva-skeleton variant="rectangle" width="100%" height="200px"></eva-skeleton>
  </div>
  
  <!-- Show when loaded -->
  <div class="real-content animate-fade-in" id="content" style="display: none;">
    <!-- Actual content -->
  </div>
</div>

<script>
  async function loadContent() {
    const data = await fetch('/api/content');
    document.getElementById('skeleton').style.display = 'none';
    document.getElementById('content').style.display = 'block';
  }
</script>
```

### Error Shake Animation

```html
<eva-input id="emailInput"></eva-input>

<script>
  function validateEmail() {
    const input = document.getElementById('emailInput');
    if (!isValidEmail(input.value)) {
      input.classList.add('animate-shake');
      setTimeout(() => {
        input.classList.remove('animate-shake');
      }, 500);
    }
  }
</script>
```

### Success Celebration

```html
<eva-button id="completeBtn">Complete Task</eva-button>

<script>
  completeBtn.addEventListener('click', () => {
    completeBtn.classList.add('animate-tada');
    completeBtn.textContent = '✓ Complete!';
    
    setTimeout(() => {
      completeBtn.classList.remove('animate-tada');
    }, 1000);
  });
</script>
```

## Browser Support

All animations use standard CSS3 properties with broad support:

- ✅ Chrome/Edge 88+
- ✅ Firefox 85+
- ✅ Safari 14+
- ✅ Opera 75+

### Fallbacks

For older browsers, animations gracefully degrade:

```css
@supports not (animation: fadeIn 200ms) {
  .animate-fade-in {
    opacity: 1; /* Immediate display */
  }
}
```

## Testing

### Reduced Motion Testing

Test animations respect user preferences:

```typescript
// Enable reduced motion in dev tools
// Chrome: Rendering > Emulate CSS media prefers-reduced-motion

describe('Animation Accessibility', () => {
  it('respects prefers-reduced-motion', () => {
    const element = document.querySelector('.animate-fade-in');
    const style = window.getComputedStyle(element);
    
    if (prefersReducedMotion()) {
      expect(style.animationDuration).toBe('0.01ms');
    }
  });
});
```

### Performance Testing

Monitor animation frame rates:

```typescript
let frameCount = 0;
let lastTime = performance.now();

function measureFPS() {
  frameCount++;
  const currentTime = performance.now();
  
  if (currentTime >= lastTime + 1000) {
    console.log(`FPS: ${frameCount}`);
    frameCount = 0;
    lastTime = currentTime;
  }
  
  requestAnimationFrame(measureFPS);
}

requestAnimationFrame(measureFPS);
```

## Migration from Other Systems

### From Tailwind CSS

```html
<!-- Tailwind -->
<div class="transition duration-300 ease-in-out hover:scale-110">

<!-- EVA Sovereign -->
<div class="transition-slow hover-scale">
```

### From Framer Motion

```jsx
// Framer Motion
<motion.div
  initial={{ opacity: 0, y: -20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.3 }}
/>

// EVA Sovereign
<div class="animate-fade-slide-in">
```

### From CSS Modules

```css
/* CSS Modules */
.button {
  transition: all 0.2s ease-out;
}

/* EVA Sovereign */
.button {
  @apply transition-normal;
}
```

## API Reference

### Transitions Object

```typescript
transitions = {
  durations: {
    instant: '50ms',
    fast: '150ms',
    normal: '200ms',
    slow: '300ms',
    slower: '500ms',
    slowest: '700ms'
  },
  easing: {
    easeIn: 'cubic-bezier(0.4, 0, 1, 1)',
    easeOut: 'cubic-bezier(0, 0, 0.2, 1)',
    easeInOut: 'cubic-bezier(0.4, 0, 0.2, 1)',
    sharp: 'cubic-bezier(0.4, 0, 0.6, 1)',
    bounce: 'cubic-bezier(0.68, -0.55, 0.265, 1.55)',
    smooth: 'cubic-bezier(0.25, 0.1, 0.25, 1)'
  },
  properties: {
    all: 'all',
    colors: 'color, background-color, border-color',
    opacity: 'opacity',
    transform: 'transform',
    shadow: 'box-shadow',
    width: 'width',
    height: 'height'
  }
}
```

### Animations Object

All 31 animations with keyframe definitions.

### Utility Functions

```typescript
// Generate @keyframes CSS
generateKeyframes(name: string, frames: Record<string, Record<string, string>>): string

// Generate animation CSS property
generateAnimation(animation: Animation, options?: {
  duration?: string;
  easing?: string;
  delay?: string;
  iterations?: number | 'infinite';
}): string

// Check reduced motion preference
prefersReducedMotion(): boolean

// Get accessible animation duration
getAccessibleAnimation(duration: string): string

// Generate all utility classes
generateAnimationClasses(): string
```

## Support

For issues, questions, or contributions:
- GitHub: [EVA-Sovereign-UI](https://github.com/yourusername/EVA-Sovereign-UI)
- Documentation: [Full API Docs](./API.md)
- Examples: [Storybook](./storybook)
