/**
 * Base Design Tokens (Tier 1)
 * Raw primitive values - the foundation of the design system
 * These should rarely be used directly; use semantic or component tokens instead
 * 
 * Reference: Government of Canada Design System
 * https://design-system.alpha.canada.ca/en/design-tokens/
 */

// ============================================================================
// COLOR PRIMITIVES
// ============================================================================

export const baseColors = {
  // Grayscale
  white: '#FFFFFF',
  black: '#000000',
  
  // Gray scale (from darkest to lightest)
  gray950: 'oklch(0.15 0 0)',
  gray900: 'oklch(0.25 0 0)',
  gray800: 'oklch(0.35 0 0)',
  gray700: 'oklch(0.45 0 0)',
  gray600: 'oklch(0.55 0 0)',
  gray500: 'oklch(0.65 0 0)',
  gray400: 'oklch(0.75 0 0)',
  gray300: 'oklch(0.85 0 0)',
  gray200: 'oklch(0.92 0 0)',
  gray100: 'oklch(0.96 0 0)',
  gray50: 'oklch(0.98 0 0)',
  
  // GC Brand Blue (Canada.ca official colors)
  blue950: 'oklch(0.20 0.04 250)',
  blue900: 'oklch(0.25 0.04 250)',
  blue800: 'oklch(0.30 0.04 250)', // Primary GC Blue (#26374A)
  blue700: 'oklch(0.35 0.04 250)',
  blue600: 'oklch(0.40 0.04 250)',
  blue500: 'oklch(0.50 0.06 250)',
  blue400: 'oklch(0.60 0.08 250)',
  blue300: 'oklch(0.70 0.06 250)',
  blue200: 'oklch(0.80 0.04 250)',
  blue100: 'oklch(0.90 0.02 250)',
  blue50: 'oklch(0.95 0.01 250)',
  
  // GC Accent Red (for important calls-to-action)
  red950: 'oklch(0.25 0.15 25)',
  red900: 'oklch(0.35 0.18 25)',
  red800: 'oklch(0.40 0.20 25)', // GC Accent Red (#A62A1E)
  red700: 'oklch(0.45 0.22 25)',
  red600: 'oklch(0.50 0.22 25)',
  red500: 'oklch(0.55 0.22 25)', // Error red (#d3080c)
  red400: 'oklch(0.65 0.20 25)',
  red300: 'oklch(0.75 0.15 25)',
  red200: 'oklch(0.85 0.10 25)',
  red100: 'oklch(0.92 0.05 25)',
  red50: 'oklch(0.96 0.02 25)',
  
  // Success Green
  green950: 'oklch(0.20 0.10 145)',
  green900: 'oklch(0.30 0.12 145)',
  green800: 'oklch(0.35 0.15 145)', // #278400
  green700: 'oklch(0.40 0.15 145)',
  green600: 'oklch(0.50 0.15 145)',
  green500: 'oklch(0.60 0.13 145)',
  green400: 'oklch(0.70 0.10 145)',
  green300: 'oklch(0.80 0.08 145)',
  green200: 'oklch(0.88 0.05 145)',
  green100: 'oklch(0.93 0.03 145)',
  green50: 'oklch(0.97 0.01 145)',
  
  // Warning Yellow/Orange
  yellow950: 'oklch(0.25 0.10 70)',
  yellow900: 'oklch(0.35 0.12 70)',
  yellow800: 'oklch(0.45 0.15 70)',
  yellow700: 'oklch(0.55 0.18 70)',
  yellow600: 'oklch(0.65 0.20 60)', // #ff9900
  yellow500: 'oklch(0.75 0.18 60)',
  yellow400: 'oklch(0.82 0.15 60)',
  yellow300: 'oklch(0.88 0.10 60)',
  yellow200: 'oklch(0.93 0.08 60)',
  yellow100: 'oklch(0.96 0.05 60)',
  yellow50: 'oklch(0.98 0.02 60)',
  
  // Info Blue (lighter than brand blue)
  cyan950: 'oklch(0.25 0.08 220)',
  cyan900: 'oklch(0.35 0.10 220)',
  cyan800: 'oklch(0.45 0.12 220)',
  cyan700: 'oklch(0.52 0.14 210)', // #269abc
  cyan600: 'oklch(0.60 0.14 210)',
  cyan500: 'oklch(0.70 0.12 210)',
  cyan400: 'oklch(0.78 0.10 210)',
  cyan300: 'oklch(0.85 0.08 210)',
  cyan200: 'oklch(0.90 0.05 210)',
  cyan100: 'oklch(0.95 0.03 210)',
  cyan50: 'oklch(0.98 0.01 210)',
} as const;

// ============================================================================
// SPACING PRIMITIVES (8px grid system)
// ============================================================================

export const baseSpacing = {
  0: '0',
  px: '1px',
  0.5: '0.125rem',   // 2px
  1: '0.25rem',      // 4px
  1.5: '0.375rem',   // 6px
  2: '0.5rem',       // 8px
  2.5: '0.625rem',   // 10px
  3: '0.75rem',      // 12px
  3.5: '0.875rem',   // 14px
  4: '1rem',         // 16px
  5: '1.25rem',      // 20px
  6: '1.5rem',       // 24px
  7: '1.75rem',      // 28px
  8: '2rem',         // 32px
  9: '2.25rem',      // 36px
  10: '2.5rem',      // 40px
  11: '2.75rem',     // 44px
  12: '3rem',        // 48px
  14: '3.5rem',      // 56px
  16: '4rem',        // 64px
  20: '5rem',        // 80px
  24: '6rem',        // 96px
  28: '7rem',        // 112px
  32: '8rem',        // 128px
  36: '9rem',        // 144px
  40: '10rem',       // 160px
  44: '11rem',       // 176px
  48: '12rem',       // 192px
  52: '13rem',       // 208px
  56: '14rem',       // 224px
  60: '15rem',       // 240px
  64: '16rem',       // 256px
  72: '18rem',       // 288px
  80: '20rem',       // 320px
  96: '24rem',       // 384px
} as const;

// ============================================================================
// TYPOGRAPHY PRIMITIVES
// ============================================================================

export const baseFontFamilies = {
  heading: '"Lato", -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
  body: '"Noto Sans", system-ui, -apple-system, BlinkMacSystemFont, sans-serif',
  mono: '"JetBrains Mono", "Courier New", Courier, monospace',
} as const;

export const baseFontSizes = {
  xs: '0.75rem',     // 12px
  sm: '0.875rem',    // 14px
  base: '1rem',      // 16px
  lg: '1.125rem',    // 18px
  xl: '1.25rem',     // 20px
  '2xl': '1.5rem',   // 24px
  '3xl': '1.875rem', // 30px
  '4xl': '2.25rem',  // 36px
  '5xl': '3rem',     // 48px
  '6xl': '3.75rem',  // 60px
  '7xl': '4.5rem',   // 72px
  '8xl': '6rem',     // 96px
  '9xl': '8rem',     // 128px
} as const;

export const baseFontWeights = {
  thin: 100,
  extralight: 200,
  light: 300,
  normal: 400,
  medium: 500,
  semibold: 600,
  bold: 700,
  extrabold: 800,
  black: 900,
} as const;

export const baseLineHeights = {
  none: 1,
  tight: 1.25,
  snug: 1.375,
  normal: 1.5,
  relaxed: 1.625,
  loose: 2,
} as const;

export const baseLetterSpacing = {
  tighter: '-0.05em',
  tight: '-0.025em',
  normal: '0',
  wide: '0.025em',
  wider: '0.05em',
  widest: '0.1em',
} as const;

// ============================================================================
// BORDER & RADIUS PRIMITIVES
// ============================================================================

export const baseBorderWidths = {
  0: '0',
  1: '1px',
  2: '2px',
  4: '4px',
  8: '8px',
} as const;

export const baseBorderRadius = {
  none: '0',
  sm: '0.125rem',    // 2px
  base: '0.25rem',   // 4px
  md: '0.375rem',    // 6px
  lg: '0.5rem',      // 8px
  xl: '0.75rem',     // 12px
  '2xl': '1rem',     // 16px
  '3xl': '1.5rem',   // 24px
  full: '9999px',
} as const;

// ============================================================================
// SHADOW PRIMITIVES
// ============================================================================

export const baseShadows = {
  xs: '0 1px 2px 0 rgb(0 0 0 / 0.05)',
  sm: '0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)',
  base: '0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)',
  md: '0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)',
  lg: '0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)',
  xl: '0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)',
  '2xl': '0 25px 50px -12px rgb(0 0 0 / 0.25)',
  inner: 'inset 0 2px 4px 0 rgb(0 0 0 / 0.05)',
  none: 'none',
} as const;

// ============================================================================
// ANIMATION/TRANSITION PRIMITIVES
// ============================================================================

export const baseDurations = {
  instant: '0ms',
  fast: '100ms',
  normal: '200ms',
  slow: '300ms',
  slower: '500ms',
  slowest: '700ms',
} as const;

export const baseEasings = {
  linear: 'linear',
  easeIn: 'cubic-bezier(0.4, 0, 1, 1)',
  easeOut: 'cubic-bezier(0, 0, 0.2, 1)',
  easeInOut: 'cubic-bezier(0.4, 0, 0.2, 1)',
  sharp: 'cubic-bezier(0.4, 0, 0.6, 1)',
  bounce: 'cubic-bezier(0.68, -0.55, 0.265, 1.55)',
} as const;

// ============================================================================
// Z-INDEX PRIMITIVES
// ============================================================================

export const baseZIndex = {
  hide: -1,
  base: 0,
  dropdown: 1000,
  sticky: 1100,
  overlay: 1200,
  modal: 1300,
  popover: 1400,
  tooltip: 1500,
  notification: 1600,
} as const;

// ============================================================================
// BREAKPOINT PRIMITIVES
// ============================================================================

export const baseBreakpoints = {
  xs: '320px',   // Mobile portrait
  sm: '640px',   // Mobile landscape / Small tablets
  md: '768px',   // Tablets
  lg: '1024px',  // Desktop
  xl: '1280px',  // Large desktop
  '2xl': '1536px', // Extra large desktop
} as const;

// ============================================================================
// OPACITY PRIMITIVES
// ============================================================================

export const baseOpacity = {
  0: '0',
  5: '0.05',
  10: '0.1',
  20: '0.2',
  25: '0.25',
  30: '0.3',
  40: '0.4',
  50: '0.5',
  60: '0.6',
  70: '0.7',
  75: '0.75',
  80: '0.8',
  90: '0.9',
  95: '0.95',
  100: '1',
} as const;

// ============================================================================
// TYPE EXPORTS
// ============================================================================

export type BaseColor = keyof typeof baseColors;
export type BaseSpacing = keyof typeof baseSpacing;
export type BaseFontFamily = keyof typeof baseFontFamilies;
export type BaseFontSize = keyof typeof baseFontSizes;
export type BaseFontWeight = keyof typeof baseFontWeights;
export type BaseLineHeight = keyof typeof baseLineHeights;
export type BaseLetterSpacing = keyof typeof baseLetterSpacing;
export type BaseBorderWidth = keyof typeof baseBorderWidths;
export type BaseBorderRadius = keyof typeof baseBorderRadius;
export type BaseShadow = keyof typeof baseShadows;
export type BaseDuration = keyof typeof baseDurations;
export type BaseEasing = keyof typeof baseEasings;
export type BaseZIndex = keyof typeof baseZIndex;
export type BaseBreakpoint = keyof typeof baseBreakpoints;
export type BaseOpacity = keyof typeof baseOpacity;
