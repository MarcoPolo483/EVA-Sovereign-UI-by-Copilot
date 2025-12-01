/**
 * Semantic Design Tokens (Tier 2)
 * Meaningful, purpose-driven tokens that reference base tokens
 * These give meaning to primitive values and should be used in most cases
 * 
 * Reference: Government of Canada Design System
 * https://design-system.alpha.canada.ca/en/design-tokens/
 */

import { baseColors, baseSpacing, baseFontSizes, baseFontWeights, baseLineHeights, baseShadows, baseBorderRadius, baseDurations, baseEasings } from './base-tokens';

// ============================================================================
// SEMANTIC COLORS
// ============================================================================

export const semanticColors = {
  // Surface colors
  background: {
    primary: baseColors.white,
    secondary: baseColors.gray50,
    tertiary: baseColors.gray100,
    inverse: baseColors.gray900,
    disabled: baseColors.gray200,
  },
  
  // Text colors
  text: {
    primary: baseColors.gray900,
    secondary: baseColors.gray700,
    tertiary: baseColors.gray600,
    disabled: baseColors.gray400,
    inverse: baseColors.white,
    link: baseColors.blue800,
    linkHover: baseColors.blue700,
    linkVisited: 'oklch(0.45 0.12 300)', // Purple for visited links
  },
  
  // Border colors
  border: {
    primary: baseColors.gray300,
    secondary: baseColors.gray200,
    focus: baseColors.blue600,
    error: baseColors.red500,
    disabled: baseColors.gray200,
  },
  
  // Brand colors (GC Canada.ca)
  brand: {
    primary: baseColors.blue800,      // #26374A
    secondary: baseColors.blue700,
    accent: baseColors.red800,        // #A62A1E
    accentLight: baseColors.red100,
  },
  
  // Interactive states
  interactive: {
    primary: baseColors.blue800,
    primaryHover: baseColors.blue700,
    primaryActive: baseColors.blue900,
    primaryDisabled: baseColors.gray400,
    secondary: baseColors.gray100,
    secondaryHover: baseColors.gray200,
    secondaryActive: baseColors.gray300,
  },
  
  // Feedback colors
  feedback: {
    success: baseColors.green800,
    successBackground: baseColors.green50,
    successBorder: baseColors.green300,
    warning: baseColors.yellow700,
    warningBackground: baseColors.yellow50,
    warningBorder: baseColors.yellow300,
    error: baseColors.red500,
    errorBackground: baseColors.red50,
    errorBorder: baseColors.red300,
    info: baseColors.cyan700,
    infoBackground: baseColors.cyan50,
    infoBorder: baseColors.cyan300,
  },
  
  // Overlay & shadow colors
  overlay: {
    light: 'rgb(0 0 0 / 0.1)',
    medium: 'rgb(0 0 0 / 0.3)',
    dark: 'rgb(0 0 0 / 0.5)',
    darkest: 'rgb(0 0 0 / 0.75)',
  },
  
  // Focus ring (WCAG 2.2 AAA compliant)
  focus: {
    ring: baseColors.blue600,
    ringOffset: baseColors.white,
  },
} as const;

// ============================================================================
// SEMANTIC SPACING
// ============================================================================

export const semanticSpacing = {
  // Component spacing
  componentPadding: {
    xs: baseSpacing[1],      // 4px
    sm: baseSpacing[2],      // 8px
    md: baseSpacing[4],      // 16px
    lg: baseSpacing[6],      // 24px
    xl: baseSpacing[8],      // 32px
  },
  
  // Layout spacing
  layout: {
    xs: baseSpacing[4],      // 16px
    sm: baseSpacing[6],      // 24px
    md: baseSpacing[8],      // 32px
    lg: baseSpacing[12],     // 48px
    xl: baseSpacing[16],     // 64px
    xxl: baseSpacing[24],    // 96px
  },
  
  // Gap spacing (for flex/grid)
  gap: {
    xs: baseSpacing[1],      // 4px
    sm: baseSpacing[2],      // 8px
    md: baseSpacing[4],      // 16px
    lg: baseSpacing[6],      // 24px
    xl: baseSpacing[8],      // 32px
  },
  
  // Content spacing
  content: {
    lineGap: baseSpacing[6],       // 24px between lines/paragraphs
    sectionGap: baseSpacing[12],   // 48px between sections
    pageGap: baseSpacing[16],      // 64px between major page sections
  },
  
  // Touch targets (WCAG 2.2 AAA)
  touchTarget: {
    minimum: '44px',  // WCAG minimum
    comfortable: '48px',
    large: '56px',
  },
} as const;

// ============================================================================
// SEMANTIC TYPOGRAPHY
// ============================================================================

export const semanticTypography = {
  // Headings (GC Design System scale)
  heading: {
    h1: {
      fontSize: '2.5625rem',      // 41px
      fontWeight: baseFontWeights.bold,
      lineHeight: baseLineHeights.tight,
    },
    h2: {
      fontSize: '2rem',           // 32px
      fontWeight: baseFontWeights.bold,
      lineHeight: baseLineHeights.tight,
    },
    h3: {
      fontSize: '1.5rem',         // 24px
      fontWeight: baseFontWeights.bold,
      lineHeight: baseLineHeights.snug,
    },
    h4: {
      fontSize: '1.375rem',       // 22px
      fontWeight: baseFontWeights.bold,
      lineHeight: baseLineHeights.snug,
    },
    h5: {
      fontSize: '1.1875rem',      // 19px
      fontWeight: baseFontWeights.bold,
      lineHeight: baseLineHeights.normal,
    },
    h6: {
      fontSize: '1.1875rem',      // 19px
      fontWeight: baseFontWeights.semibold,
      lineHeight: baseLineHeights.normal,
    },
  },
  
  // Body text
  body: {
    large: {
      fontSize: '1.5rem',         // 24px
      fontWeight: baseFontWeights.normal,
      lineHeight: baseLineHeights.relaxed,
    },
    base: {
      fontSize: '1.25rem',        // 20px (GC standard)
      fontWeight: baseFontWeights.normal,
      lineHeight: baseLineHeights.normal,
    },
    small: {
      fontSize: '1.0625rem',      // 17px
      fontWeight: baseFontWeights.normal,
      lineHeight: baseLineHeights.normal,
    },
  },
  
  // UI text
  ui: {
    large: {
      fontSize: baseFontSizes.lg,
      fontWeight: baseFontWeights.medium,
      lineHeight: baseLineHeights.normal,
    },
    base: {
      fontSize: baseFontSizes.base,
      fontWeight: baseFontWeights.normal,
      lineHeight: baseLineHeights.normal,
    },
    small: {
      fontSize: baseFontSizes.sm,
      fontWeight: baseFontWeights.normal,
      lineHeight: baseLineHeights.normal,
    },
    xs: {
      fontSize: baseFontSizes.xs,
      fontWeight: baseFontWeights.normal,
      lineHeight: baseLineHeights.tight,
    },
  },
  
  // Code/monospace
  code: {
    fontSize: baseFontSizes.sm,
    fontWeight: baseFontWeights.normal,
    lineHeight: baseLineHeights.normal,
  },
  
  // Max line length (WCAG guideline)
  maxLineLength: '65ch',
} as const;

// ============================================================================
// SEMANTIC BORDERS & RADIUS
// ============================================================================

export const semanticBorders = {
  width: {
    thin: '1px',
    base: '1px',
    thick: '2px',
    thicker: '4px',
  },
  
  radius: {
    none: baseBorderRadius.none,
    sm: baseBorderRadius.sm,
    base: baseBorderRadius.md,
    md: baseBorderRadius.md,
    lg: baseBorderRadius.lg,
    xl: baseBorderRadius.xl,
    full: baseBorderRadius.full,
  },
} as const;

// ============================================================================
// SEMANTIC SHADOWS
// ============================================================================

export const semanticShadows = {
  elevation: {
    none: baseShadows.none,
    low: baseShadows.sm,
    medium: baseShadows.md,
    high: baseShadows.lg,
    highest: baseShadows.xl,
  },
  
  focus: {
    default: `0 0 0 3px ${semanticColors.focus.ring}`,
    error: `0 0 0 3px ${semanticColors.feedback.error}`,
  },
  
  inner: baseShadows.inner,
} as const;

// ============================================================================
// SEMANTIC TRANSITIONS
// ============================================================================

export const semanticTransitions = {
  // Duration by interaction type
  duration: {
    instant: baseDurations.instant,
    fast: baseDurations.fast,
    normal: baseDurations.normal,
    slow: baseDurations.slow,
  },
  
  // Common transition combinations
  default: `all ${baseDurations.normal} ${baseEasings.easeInOut}`,
  color: `color ${baseDurations.fast} ${baseEasings.easeOut}, background-color ${baseDurations.fast} ${baseEasings.easeOut}, border-color ${baseDurations.fast} ${baseEasings.easeOut}`,
  transform: `transform ${baseDurations.normal} ${baseEasings.easeInOut}`,
  opacity: `opacity ${baseDurations.fast} ${baseEasings.easeOut}`,
  shadow: `box-shadow ${baseDurations.normal} ${baseEasings.easeOut}`,
  
  // Easing
  easing: {
    default: baseEasings.easeInOut,
    in: baseEasings.easeIn,
    out: baseEasings.easeOut,
    sharp: baseEasings.sharp,
  },
} as const;

// ============================================================================
// SEMANTIC LAYOUT
// ============================================================================

export const semanticLayout = {
  // Container widths
  container: {
    xs: '480px',
    sm: '640px',
    md: '768px',
    lg: '1024px',
    xl: '1200px',     // GC max width
    full: '100%',
  },
  
  // Content widths
  content: {
    narrow: '600px',
    base: '800px',
    wide: '1000px',
    text: '65ch',     // GC reading width
  },
  
  // Header/Footer
  chrome: {
    headerHeight: '64px',
    footerMinHeight: '200px',
    sidebarWidth: '300px',
  },
} as const;

// ============================================================================
// TYPE EXPORTS
// ============================================================================

export type SemanticColorCategory = keyof typeof semanticColors;
export type SemanticSpacingCategory = keyof typeof semanticSpacing;
export type SemanticTypographyCategory = keyof typeof semanticTypography;
