/**
 * Animation and Transition Tokens
 * 
 * Comprehensive animation system with:
 * - Smooth transitions with performance-optimized CSS transforms
 * - Loading animations (spinners, pulse, skeleton)
 * - Page transitions (fade, slide, zoom)
 * - Reduced motion support (prefers-reduced-motion)
 * - Utility classes for common animations
 * - Accessibility-first design
 */

export const transitions = {
  // Duration
  instant: '50ms',
  fast: '150ms',
  normal: '200ms',
  slow: '300ms',
  slower: '500ms',
  slowest: '700ms',
  
  // Easing functions (optimized for natural motion)
  easeIn: 'cubic-bezier(0.4, 0, 1, 1)',
  easeOut: 'cubic-bezier(0, 0, 0.2, 1)',
  easeInOut: 'cubic-bezier(0.4, 0, 0.2, 1)',
  sharp: 'cubic-bezier(0.4, 0, 0.6, 1)',
  bounce: 'cubic-bezier(0.68, -0.55, 0.265, 1.55)',
  smooth: 'cubic-bezier(0.25, 0.1, 0.25, 1)',
  
  // Common transition properties (performance-optimized)
  all: 'all 200ms cubic-bezier(0.4, 0, 0.2, 1)',
  colors: 'color 200ms cubic-bezier(0.4, 0, 0.2, 1), background-color 200ms cubic-bezier(0.4, 0, 0.2, 1), border-color 200ms cubic-bezier(0.4, 0, 0.2, 1)',
  opacity: 'opacity 200ms cubic-bezier(0.4, 0, 0.2, 1)',
  shadow: 'box-shadow 200ms cubic-bezier(0.4, 0, 0.2, 1)',
  transform: 'transform 200ms cubic-bezier(0.4, 0, 0.2, 1)',
  width: 'width 200ms cubic-bezier(0.4, 0, 0.2, 1)',
  height: 'height 200ms cubic-bezier(0.4, 0, 0.2, 1)',
};

export const animations = {
  // Fade animations
  fadeIn: {
    name: 'fadeIn',
    keyframes: `
      from { opacity: 0; }
      to { opacity: 1; }
    `,
    duration: '200ms',
    easing: 'ease-out',
  },
  
  fadeOut: {
    name: 'fadeOut',
    keyframes: `
      from { opacity: 1; }
      to { opacity: 0; }
    `,
    duration: '200ms',
    easing: 'ease-in',
  },
  
  // Slide animations
  slideInFromTop: {
    name: 'slideInFromTop',
    keyframes: `
      from { transform: translateY(-100%); opacity: 0; }
      to { transform: translateY(0); opacity: 1; }
    `,
    duration: '300ms',
    easing: 'cubic-bezier(0.4, 0, 0.2, 1)',
  },
  
  slideInFromBottom: {
    name: 'slideInFromBottom',
    keyframes: `
      from { transform: translateY(100%); opacity: 0; }
      to { transform: translateY(0); opacity: 1; }
    `,
    duration: '300ms',
    easing: 'cubic-bezier(0.4, 0, 0.2, 1)',
  },
  
  // Scale animations
  scaleIn: {
    name: 'scaleIn',
    keyframes: `
      from { transform: scale(0.95); opacity: 0; }
      to { transform: scale(1); opacity: 1; }
    `,
    duration: '200ms',
    easing: 'cubic-bezier(0.4, 0, 0.2, 1)',
  },
  
  // Spin animation (for loading indicators)
  spin: {
    name: 'spin',
    keyframes: `
      from { transform: rotate(0deg); }
      to { transform: rotate(360deg); }
    `,
    duration: '1000ms',
    easing: 'linear',
  },
  
  // Pulse animation (for loading or attention)
  pulse: {
    name: 'pulse',
    keyframes: `
      0%, 100% { opacity: 1; }
      50% { opacity: 0.5; }
    `,
    duration: '2000ms',
    easing: 'cubic-bezier(0.4, 0, 0.6, 1)',
  },
  
  // Bounce animation (for emphasis)
  bounce: {
    name: 'bounce',
    keyframes: `
      0%, 100% { transform: translateY(0); }
      50% { transform: translateY(-25%); }
    `,
    duration: '1000ms',
    easing: 'cubic-bezier(0.68, -0.55, 0.265, 1.55)',
  },
  
  // Shake animation (for errors)
  shake: {
    name: 'shake',
    keyframes: `
      0%, 100% { transform: translateX(0); }
      10%, 30%, 50%, 70%, 90% { transform: translateX(-10px); }
      20%, 40%, 60%, 80% { transform: translateX(10px); }
    `,
    duration: '500ms',
    easing: 'cubic-bezier(0.4, 0, 0.2, 1)',
  },
  
  // Wiggle animation (for attention)
  wiggle: {
    name: 'wiggle',
    keyframes: `
      0%, 100% { transform: rotate(0deg); }
      25% { transform: rotate(-5deg); }
      75% { transform: rotate(5deg); }
    `,
    duration: '500ms',
    easing: 'cubic-bezier(0.4, 0, 0.2, 1)',
  },
  
  // Slide animations (all directions)
  slideInFromLeft: {
    name: 'slideInFromLeft',
    keyframes: `
      from { transform: translateX(-100%); opacity: 0; }
      to { transform: translateX(0); opacity: 1; }
    `,
    duration: '300ms',
    easing: 'cubic-bezier(0.4, 0, 0.2, 1)',
  },
  
  slideInFromRight: {
    name: 'slideInFromRight',
    keyframes: `
      from { transform: translateX(100%); opacity: 0; }
      to { transform: translateX(0); opacity: 1; }
    `,
    duration: '300ms',
    easing: 'cubic-bezier(0.4, 0, 0.2, 1)',
  },
  
  slideOutToLeft: {
    name: 'slideOutToLeft',
    keyframes: `
      from { transform: translateX(0); opacity: 1; }
      to { transform: translateX(-100%); opacity: 0; }
    `,
    duration: '300ms',
    easing: 'cubic-bezier(0.4, 0, 0.2, 1)',
  },
  
  slideOutToRight: {
    name: 'slideOutToRight',
    keyframes: `
      from { transform: translateX(0); opacity: 1; }
      to { transform: translateX(100%); opacity: 0; }
    `,
    duration: '300ms',
    easing: 'cubic-bezier(0.4, 0, 0.2, 1)',
  },
  
  slideOutToTop: {
    name: 'slideOutToTop',
    keyframes: `
      from { transform: translateY(0); opacity: 1; }
      to { transform: translateY(-100%); opacity: 0; }
    `,
    duration: '300ms',
    easing: 'cubic-bezier(0.4, 0, 0.2, 1)',
  },
  
  slideOutToBottom: {
    name: 'slideOutToBottom',
    keyframes: `
      from { transform: translateY(0); opacity: 1; }
      to { transform: translateY(100%); opacity: 0; }
    `,
    duration: '300ms',
    easing: 'cubic-bezier(0.4, 0, 0.2, 1)',
  },
  
  // Zoom animations
  zoomIn: {
    name: 'zoomIn',
    keyframes: `
      from { transform: scale(0); opacity: 0; }
      to { transform: scale(1); opacity: 1; }
    `,
    duration: '300ms',
    easing: 'cubic-bezier(0.4, 0, 0.2, 1)',
  },
  
  zoomOut: {
    name: 'zoomOut',
    keyframes: `
      from { transform: scale(1); opacity: 1; }
      to { transform: scale(0); opacity: 0; }
    `,
    duration: '300ms',
    easing: 'cubic-bezier(0.4, 0, 0.2, 1)',
  },
  
  // Flip animations
  flipIn: {
    name: 'flipIn',
    keyframes: `
      from { transform: perspective(400px) rotateY(-90deg); opacity: 0; }
      to { transform: perspective(400px) rotateY(0); opacity: 1; }
    `,
    duration: '400ms',
    easing: 'cubic-bezier(0.4, 0, 0.2, 1)',
  },
  
  flipOut: {
    name: 'flipOut',
    keyframes: `
      from { transform: perspective(400px) rotateY(0); opacity: 1; }
      to { transform: perspective(400px) rotateY(90deg); opacity: 0; }
    `,
    duration: '400ms',
    easing: 'cubic-bezier(0.4, 0, 0.2, 1)',
  },
  
  // Loading animations
  spinSlow: {
    name: 'spinSlow',
    keyframes: `
      from { transform: rotate(0deg); }
      to { transform: rotate(360deg); }
    `,
    duration: '2000ms',
    easing: 'linear',
  },
  
  spinFast: {
    name: 'spinFast',
    keyframes: `
      from { transform: rotate(0deg); }
      to { transform: rotate(360deg); }
    `,
    duration: '500ms',
    easing: 'linear',
  },
  
  // Skeleton shimmer (for loading placeholders)
  shimmer: {
    name: 'shimmer',
    keyframes: `
      0% { background-position: -468px 0; }
      100% { background-position: 468px 0; }
    `,
    duration: '1500ms',
    easing: 'linear',
  },
  
  // Progress bar animation
  progress: {
    name: 'progress',
    keyframes: `
      0% { transform: translateX(-100%); }
      100% { transform: translateX(100%); }
    `,
    duration: '1500ms',
    easing: 'cubic-bezier(0.4, 0, 0.2, 1)',
  },
  
  // Heartbeat animation
  heartbeat: {
    name: 'heartbeat',
    keyframes: `
      0%, 100% { transform: scale(1); }
      25% { transform: scale(1.1); }
      50% { transform: scale(1); }
    `,
    duration: '1000ms',
    easing: 'ease-in-out',
  },
  
  // Tada animation (celebration)
  tada: {
    name: 'tada',
    keyframes: `
      0%, 100% { transform: scale(1) rotate(0deg); }
      10%, 20% { transform: scale(0.9) rotate(-3deg); }
      30%, 50%, 70%, 90% { transform: scale(1.1) rotate(3deg); }
      40%, 60%, 80% { transform: scale(1.1) rotate(-3deg); }
    `,
    duration: '1000ms',
    easing: 'cubic-bezier(0.4, 0, 0.2, 1)',
  },
  
  // Fade with slide animations (common for modals/dropdowns)
  fadeSlideIn: {
    name: 'fadeSlideIn',
    keyframes: `
      from { 
        opacity: 0;
        transform: translateY(-10px);
      }
      to { 
        opacity: 1;
        transform: translateY(0);
      }
    `,
    duration: '250ms',
    easing: 'cubic-bezier(0.4, 0, 0.2, 1)',
  },
  
  fadeSlideOut: {
    name: 'fadeSlideOut',
    keyframes: `
      from { 
        opacity: 1;
        transform: translateY(0);
      }
      to { 
        opacity: 0;
        transform: translateY(-10px);
      }
    `,
    duration: '250ms',
    easing: 'cubic-bezier(0.4, 0, 0.2, 1)',
  },
  
  // Scale bounce (for success feedback)
  scaleBounce: {
    name: 'scaleBounce',
    keyframes: `
      0% { transform: scale(0); }
      50% { transform: scale(1.2); }
      100% { transform: scale(1); }
    `,
    duration: '400ms',
    easing: 'cubic-bezier(0.68, -0.55, 0.265, 1.55)',
  },
};

/**
 * Helper to generate @keyframes CSS from animation config
 */
export function generateKeyframes(animation: typeof animations[keyof typeof animations]): string {
  return `
    @keyframes ${animation.name} {
      ${animation.keyframes}
    }
  `;
}

/**
 * Helper to generate animation CSS property
 */
export function generateAnimation(animation: typeof animations[keyof typeof animations], options?: {
  duration?: string;
  easing?: string;
  delay?: string;
  iterationCount?: string | number;
  fillMode?: string;
}): string {
  const duration = options?.duration || animation.duration;
  const easing = options?.easing || animation.easing;
  const delay = options?.delay || '0ms';
  const iterationCount = options?.iterationCount || '1';
  const fillMode = options?.fillMode || 'both';
  
  return `${animation.name} ${duration} ${easing} ${delay} ${iterationCount} ${fillMode}`;
}

// Generate all keyframes CSS
export const allKeyframes = Object.values(animations)
  .map(generateKeyframes)
  .join('\n');

/**
 * Reduced motion media query
 * Respects user's prefers-reduced-motion preference
 */
export const reducedMotionQuery = '@media (prefers-reduced-motion: reduce)';

/**
 * Check if user prefers reduced motion
 */
export function prefersReducedMotion(): boolean {
  if (typeof window === 'undefined') return false;
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
}

/**
 * Get animation with reduced motion support
 * Returns instant animation if user prefers reduced motion
 */
export function getAccessibleAnimation(
  animation: typeof animations[keyof typeof animations],
  options?: Parameters<typeof generateAnimation>[1]
): string {
  if (prefersReducedMotion()) {
    return `${animation.name} 0.01ms linear 0ms 1 both`;
  }
  return generateAnimation(animation, options);
}

/**
 * Animation utility classes generator
 * Creates CSS classes for common animations
 */
export function generateAnimationClasses(): string {
  return `
    /* Animation utility classes */
    
    /* Fade animations */
    .animate-fade-in {
      animation: ${generateAnimation(animations.fadeIn)};
    }
    
    .animate-fade-out {
      animation: ${generateAnimation(animations.fadeOut)};
    }
    
    /* Slide animations */
    .animate-slide-in-top {
      animation: ${generateAnimation(animations.slideInFromTop)};
    }
    
    .animate-slide-in-bottom {
      animation: ${generateAnimation(animations.slideInFromBottom)};
    }
    
    .animate-slide-in-left {
      animation: ${generateAnimation(animations.slideInFromLeft)};
    }
    
    .animate-slide-in-right {
      animation: ${generateAnimation(animations.slideInFromRight)};
    }
    
    /* Scale animations */
    .animate-scale-in {
      animation: ${generateAnimation(animations.scaleIn)};
    }
    
    .animate-zoom-in {
      animation: ${generateAnimation(animations.zoomIn)};
    }
    
    /* Loading animations */
    .animate-spin {
      animation: ${generateAnimation(animations.spin, { iterationCount: 'infinite' })};
    }
    
    .animate-spin-slow {
      animation: ${generateAnimation(animations.spinSlow, { iterationCount: 'infinite' })};
    }
    
    .animate-spin-fast {
      animation: ${generateAnimation(animations.spinFast, { iterationCount: 'infinite' })};
    }
    
    .animate-pulse {
      animation: ${generateAnimation(animations.pulse, { iterationCount: 'infinite' })};
    }
    
    .animate-shimmer {
      animation: ${generateAnimation(animations.shimmer, { iterationCount: 'infinite' })};
    }
    
    /* Feedback animations */
    .animate-bounce {
      animation: ${generateAnimation(animations.bounce)};
    }
    
    .animate-shake {
      animation: ${generateAnimation(animations.shake)};
    }
    
    .animate-wiggle {
      animation: ${generateAnimation(animations.wiggle)};
    }
    
    .animate-heartbeat {
      animation: ${generateAnimation(animations.heartbeat, { iterationCount: 'infinite' })};
    }
    
    .animate-tada {
      animation: ${generateAnimation(animations.tada)};
    }
    
    /* Transition utilities */
    .transition-fast {
      transition: ${transitions.all.replace('200ms', transitions.fast)};
    }
    
    .transition-normal {
      transition: ${transitions.all};
    }
    
    .transition-slow {
      transition: ${transitions.all.replace('200ms', transitions.slow)};
    }
    
    .transition-colors {
      transition: ${transitions.colors};
    }
    
    .transition-opacity {
      transition: ${transitions.opacity};
    }
    
    .transition-transform {
      transition: ${transitions.transform};
    }
    
    .transition-shadow {
      transition: ${transitions.shadow};
    }
    
    /* Hover effects */
    .hover-lift {
      transition: ${transitions.transform};
    }
    
    .hover-lift:hover {
      transform: translateY(-2px);
    }
    
    .hover-scale {
      transition: ${transitions.transform};
    }
    
    .hover-scale:hover {
      transform: scale(1.05);
    }
    
    .hover-glow {
      transition: ${transitions.shadow};
    }
    
    .hover-glow:hover {
      box-shadow: 0 0 20px rgba(0, 0, 0, 0.15);
    }
    
    /* Reduced motion support */
    ${reducedMotionQuery} {
      *,
      *::before,
      *::after {
        animation-duration: 0.01ms !important;
        animation-iteration-count: 1 !important;
        transition-duration: 0.01ms !important;
        scroll-behavior: auto !important;
      }
      
      .hover-lift:hover,
      .hover-scale:hover {
        transform: none !important;
      }
    }
  `;
}

/**
 * Page transition styles
 * For smooth page/view transitions
 */
export const pageTransitions = {
  fade: `
    .page-transition-enter {
      opacity: 0;
    }
    
    .page-transition-enter-active {
      opacity: 1;
      transition: opacity ${transitions.slow};
    }
    
    .page-transition-exit {
      opacity: 1;
    }
    
    .page-transition-exit-active {
      opacity: 0;
      transition: opacity ${transitions.slow};
    }
  `,
  
  slide: `
    .page-transition-enter {
      opacity: 0;
      transform: translateX(100%);
    }
    
    .page-transition-enter-active {
      opacity: 1;
      transform: translateX(0);
      transition: opacity ${transitions.slow}, transform ${transitions.slow};
    }
    
    .page-transition-exit {
      opacity: 1;
      transform: translateX(0);
    }
    
    .page-transition-exit-active {
      opacity: 0;
      transform: translateX(-100%);
      transition: opacity ${transitions.slow}, transform ${transitions.slow};
    }
  `,
  
  zoom: `
    .page-transition-enter {
      opacity: 0;
      transform: scale(0.9);
    }
    
    .page-transition-enter-active {
      opacity: 1;
      transform: scale(1);
      transition: opacity ${transitions.slow}, transform ${transitions.slow};
    }
    
    .page-transition-exit {
      opacity: 1;
      transform: scale(1);
    }
    
    .page-transition-exit-active {
      opacity: 0;
      transform: scale(1.1);
      transition: opacity ${transitions.slow}, transform ${transitions.slow};
    }
  `,
};

export type TransitionProperty = keyof typeof transitions;
export type AnimationName = keyof typeof animations;
