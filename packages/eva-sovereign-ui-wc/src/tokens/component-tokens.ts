/**
 * Component Design Tokens (Tier 3)
 * Component-specific tokens that reference semantic tokens
 * These are the most specific level and should be used within components
 * 
 * Reference: Government of Canada Design System
 * https://design-system.alpha.canada.ca/en/design-tokens/
 */

import { semanticColors, semanticSpacing, semanticTypography, semanticBorders, semanticShadows, semanticTransitions, semanticLayout } from './semantic-tokens';
import { baseSpacing } from './base-tokens';

// ============================================================================
// BUTTON TOKENS
// ============================================================================

export const buttonTokens = {
  // Primary button (GC blue)
  primary: {
    background: semanticColors.brand.primary,
    backgroundHover: semanticColors.interactive.primaryHover,
    backgroundActive: semanticColors.interactive.primaryActive,
    backgroundDisabled: semanticColors.interactive.primaryDisabled,
    text: semanticColors.text.inverse,
    textDisabled: semanticColors.text.disabled,
    border: semanticColors.brand.primary,
    borderHover: semanticColors.interactive.primaryHover,
    padding: `${baseSpacing[3]} ${baseSpacing[6]}`, // 12px 24px
    borderRadius: semanticBorders.radius.base,
    fontSize: semanticTypography.ui.base.fontSize,
    fontWeight: semanticTypography.ui.base.fontWeight,
    transition: semanticTransitions.color,
    minHeight: semanticSpacing.touchTarget.minimum,
  },
  
  // Secondary button
  secondary: {
    background: semanticColors.background.primary,
    backgroundHover: semanticColors.interactive.secondaryHover,
    backgroundActive: semanticColors.interactive.secondaryActive,
    backgroundDisabled: semanticColors.background.disabled,
    text: semanticColors.text.primary,
    textDisabled: semanticColors.text.disabled,
    border: semanticColors.border.primary,
    borderHover: semanticColors.border.primary,
    padding: `${baseSpacing[3]} ${baseSpacing[6]}`,
    borderRadius: semanticBorders.radius.base,
    fontSize: semanticTypography.ui.base.fontSize,
    fontWeight: semanticTypography.ui.base.fontWeight,
    transition: semanticTransitions.color,
    minHeight: semanticSpacing.touchTarget.minimum,
  },
  
  // Destructive button
  destructive: {
    background: semanticColors.feedback.error,
    backgroundHover: 'oklch(0.50 0.24 25)', // Darker red
    backgroundActive: 'oklch(0.45 0.24 25)',
    backgroundDisabled: semanticColors.interactive.primaryDisabled,
    text: semanticColors.text.inverse,
    textDisabled: semanticColors.text.disabled,
    border: semanticColors.feedback.error,
    borderHover: 'oklch(0.50 0.24 25)',
    padding: `${baseSpacing[3]} ${baseSpacing[6]}`,
    borderRadius: semanticBorders.radius.base,
    fontSize: semanticTypography.ui.base.fontSize,
    fontWeight: semanticTypography.ui.base.fontWeight,
    transition: semanticTransitions.color,
    minHeight: semanticSpacing.touchTarget.minimum,
  },
  
  // Ghost button (transparent)
  ghost: {
    background: 'transparent',
    backgroundHover: semanticColors.interactive.secondaryHover,
    backgroundActive: semanticColors.interactive.secondaryActive,
    backgroundDisabled: 'transparent',
    text: semanticColors.brand.primary,
    textDisabled: semanticColors.text.disabled,
    border: 'transparent',
    borderHover: 'transparent',
    padding: `${baseSpacing[3]} ${baseSpacing[6]}`,
    borderRadius: semanticBorders.radius.base,
    fontSize: semanticTypography.ui.base.fontSize,
    fontWeight: semanticTypography.ui.base.fontWeight,
    transition: semanticTransitions.color,
    minHeight: semanticSpacing.touchTarget.minimum,
  },
  
  // Link button (looks like text link)
  link: {
    background: 'transparent',
    backgroundHover: 'transparent',
    backgroundActive: 'transparent',
    backgroundDisabled: 'transparent',
    text: semanticColors.text.link,
    textHover: semanticColors.text.linkHover,
    textDisabled: semanticColors.text.disabled,
    border: 'transparent',
    padding: `${baseSpacing[1]} ${baseSpacing[2]}`,
    borderRadius: semanticBorders.radius.sm,
    fontSize: semanticTypography.ui.base.fontSize,
    fontWeight: semanticTypography.ui.base.fontWeight,
    textDecoration: 'underline',
    transition: semanticTransitions.color,
    minHeight: semanticSpacing.touchTarget.minimum,
  },
} as const;

// ============================================================================
// INPUT/FORM TOKENS
// ============================================================================

export const inputTokens = {
  // Text input
  textInput: {
    background: semanticColors.background.primary,
    backgroundDisabled: semanticColors.background.disabled,
    backgroundFocus: semanticColors.background.primary,
    text: semanticColors.text.primary,
    textDisabled: semanticColors.text.disabled,
    textPlaceholder: semanticColors.text.tertiary,
    border: semanticColors.border.primary,
    borderHover: semanticColors.border.focus,
    borderFocus: semanticColors.border.focus,
    borderError: semanticColors.border.error,
    borderDisabled: semanticColors.border.disabled,
    padding: `${baseSpacing[2]} ${baseSpacing[3]}`, // 8px 12px
    borderRadius: semanticBorders.radius.base,
    fontSize: semanticTypography.ui.base.fontSize,
    lineHeight: semanticTypography.ui.base.lineHeight,
    shadow: semanticShadows.inner,
    shadowFocus: semanticShadows.focus.default,
    transition: semanticTransitions.color,
    minHeight: semanticSpacing.touchTarget.minimum,
  },
  
  // Label
  label: {
    text: semanticColors.text.primary,
    fontSize: semanticTypography.ui.base.fontSize,
    fontWeight: '600',
    marginBottom: baseSpacing[2],
  },
  
  // Helper text
  helperText: {
    text: semanticColors.text.secondary,
    textError: semanticColors.feedback.error,
    fontSize: semanticTypography.ui.small.fontSize,
    marginTop: baseSpacing[1.5],
  },
  
  // Required indicator
  required: {
    text: semanticColors.feedback.error,
    fontSize: semanticTypography.ui.base.fontSize,
  },
} as const;

// ============================================================================
// CARD TOKENS
// ============================================================================

export const cardTokens = {
  default: {
    background: semanticColors.background.primary,
    border: semanticColors.border.primary,
    borderRadius: semanticBorders.radius.lg,
    padding: semanticSpacing.componentPadding.lg,
    shadow: semanticShadows.elevation.low,
    shadowHover: semanticShadows.elevation.medium,
    transition: semanticTransitions.shadow,
  },
  
  elevated: {
    background: semanticColors.background.primary,
    border: 'transparent',
    borderRadius: semanticBorders.radius.lg,
    padding: semanticSpacing.componentPadding.lg,
    shadow: semanticShadows.elevation.medium,
    shadowHover: semanticShadows.elevation.high,
    transition: semanticTransitions.shadow,
  },
  
  interactive: {
    background: semanticColors.background.primary,
    backgroundHover: semanticColors.background.secondary,
    border: semanticColors.border.primary,
    borderHover: semanticColors.border.focus,
    borderRadius: semanticBorders.radius.lg,
    padding: semanticSpacing.componentPadding.lg,
    shadow: semanticShadows.elevation.low,
    shadowHover: semanticShadows.elevation.medium,
    transition: `${semanticTransitions.color}, ${semanticTransitions.shadow}`,
  },
} as const;

// ============================================================================
// ALERT/NOTIFICATION TOKENS
// ============================================================================

export const alertTokens = {
  success: {
    background: semanticColors.feedback.successBackground,
    border: semanticColors.feedback.successBorder,
    text: semanticColors.feedback.success,
    icon: semanticColors.feedback.success,
    padding: semanticSpacing.componentPadding.md,
    borderRadius: semanticBorders.radius.base,
    borderWidth: semanticBorders.width.base,
  },
  
  warning: {
    background: semanticColors.feedback.warningBackground,
    border: semanticColors.feedback.warningBorder,
    text: semanticColors.feedback.warning,
    icon: semanticColors.feedback.warning,
    padding: semanticSpacing.componentPadding.md,
    borderRadius: semanticBorders.radius.base,
    borderWidth: semanticBorders.width.base,
  },
  
  error: {
    background: semanticColors.feedback.errorBackground,
    border: semanticColors.feedback.errorBorder,
    text: semanticColors.feedback.error,
    icon: semanticColors.feedback.error,
    padding: semanticSpacing.componentPadding.md,
    borderRadius: semanticBorders.radius.base,
    borderWidth: semanticBorders.width.base,
  },
  
  info: {
    background: semanticColors.feedback.infoBackground,
    border: semanticColors.feedback.infoBorder,
    text: semanticColors.feedback.info,
    icon: semanticColors.feedback.info,
    padding: semanticSpacing.componentPadding.md,
    borderRadius: semanticBorders.radius.base,
    borderWidth: semanticBorders.width.base,
  },
} as const;

// ============================================================================
// BADGE/TAG TOKENS
// ============================================================================

export const badgeTokens = {
  default: {
    background: semanticColors.background.tertiary,
    text: semanticColors.text.primary,
    padding: `${baseSpacing[0.5]} ${baseSpacing[2.5]}`, // 2px 10px
    borderRadius: semanticBorders.radius.full,
    fontSize: semanticTypography.ui.xs.fontSize,
    fontWeight: '600',
  },
  
  primary: {
    background: semanticColors.brand.primary,
    text: semanticColors.text.inverse,
    padding: `${baseSpacing[0.5]} ${baseSpacing[2.5]}`,
    borderRadius: semanticBorders.radius.full,
    fontSize: semanticTypography.ui.xs.fontSize,
    fontWeight: '600',
  },
  
  success: {
    background: semanticColors.feedback.successBackground,
    text: semanticColors.feedback.success,
    border: semanticColors.feedback.successBorder,
    padding: `${baseSpacing[0.5]} ${baseSpacing[2.5]}`,
    borderRadius: semanticBorders.radius.full,
    fontSize: semanticTypography.ui.xs.fontSize,
    fontWeight: '600',
  },
  
  warning: {
    background: semanticColors.feedback.warningBackground,
    text: semanticColors.feedback.warning,
    border: semanticColors.feedback.warningBorder,
    padding: `${baseSpacing[0.5]} ${baseSpacing[2.5]}`,
    borderRadius: semanticBorders.radius.full,
    fontSize: semanticTypography.ui.xs.fontSize,
    fontWeight: '600',
  },
  
  error: {
    background: semanticColors.feedback.errorBackground,
    text: semanticColors.feedback.error,
    border: semanticColors.feedback.errorBorder,
    padding: `${baseSpacing[0.5]} ${baseSpacing[2.5]}`,
    borderRadius: semanticBorders.radius.full,
    fontSize: semanticTypography.ui.xs.fontSize,
    fontWeight: '600',
  },
} as const;

// ============================================================================
// NAVIGATION TOKENS (GC Header/Footer)
// ============================================================================

export const navigationTokens = {
  // Global header
  header: {
    background: semanticColors.brand.primary,
    text: semanticColors.text.inverse,
    link: semanticColors.text.inverse,
    linkHover: 'oklch(0.90 0.02 250)', // Light blue
    linkActive: semanticColors.text.inverse,
    border: 'transparent',
    height: semanticLayout.chrome.headerHeight,
    padding: `${baseSpacing[4]} ${baseSpacing[6]}`,
    shadow: semanticShadows.elevation.low,
  },
  
  // Breadcrumbs
  breadcrumb: {
    text: semanticColors.text.secondary,
    link: semanticColors.text.link,
    linkHover: semanticColors.text.linkHover,
    separator: semanticColors.text.tertiary,
    fontSize: semanticTypography.ui.small.fontSize,
    gap: baseSpacing[2],
  },
  
  // Site menu
  menu: {
    background: semanticColors.background.primary,
    backgroundHover: semanticColors.background.secondary,
    backgroundActive: semanticColors.background.tertiary,
    text: semanticColors.text.primary,
    textActive: semanticColors.brand.primary,
    border: semanticColors.border.primary,
    padding: `${baseSpacing[3]} ${baseSpacing[4]}`,
    gap: baseSpacing[1],
    shadow: semanticShadows.elevation.medium,
  },
  
  // Footer
  footer: {
    background: semanticColors.background.secondary,
    text: semanticColors.text.primary,
    link: semanticColors.text.link,
    linkHover: semanticColors.text.linkHover,
    border: semanticColors.border.primary,
    padding: `${baseSpacing[12]} ${baseSpacing[6]}`,
    minHeight: semanticLayout.chrome.footerMinHeight,
  },
} as const;

// ============================================================================
// MODAL/DIALOG TOKENS
// ============================================================================

export const modalTokens = {
  overlay: {
    background: semanticColors.overlay.dark,
    backdropFilter: 'blur(4px)',
  },
  
  dialog: {
    background: semanticColors.background.primary,
    border: semanticColors.border.primary,
    borderRadius: semanticBorders.radius.lg,
    padding: semanticSpacing.componentPadding.xl,
    shadow: semanticShadows.elevation.highest,
    maxWidth: '600px',
  },
  
  header: {
    fontSize: semanticTypography.heading.h3.fontSize,
    fontWeight: semanticTypography.heading.h3.fontWeight,
    marginBottom: semanticSpacing.componentPadding.md,
  },
  
  footer: {
    marginTop: semanticSpacing.componentPadding.lg,
    gap: baseSpacing[3],
  },
} as const;

// ============================================================================
// TOOLTIP/POPOVER TOKENS
// ============================================================================

export const tooltipTokens = {
  background: semanticColors.background.inverse,
  text: semanticColors.text.inverse,
  padding: `${baseSpacing[2]} ${baseSpacing[3]}`,
  borderRadius: semanticBorders.radius.base,
  fontSize: semanticTypography.ui.small.fontSize,
  shadow: semanticShadows.elevation.medium,
  maxWidth: '300px',
  arrow: {
    size: '8px',
    color: semanticColors.background.inverse,
  },
} as const;

// ============================================================================
// LOADING/SKELETON TOKENS
// ============================================================================

export const loadingTokens = {
  skeleton: {
    background: semanticColors.background.tertiary,
    shimmer: semanticColors.background.secondary,
    borderRadius: semanticBorders.radius.base,
    animation: 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
  },
  
  spinner: {
    color: semanticColors.brand.primary,
    size: {
      sm: '16px',
      md: '24px',
      lg: '32px',
    },
    borderWidth: '2px',
  },
} as const;

// ============================================================================
// EXPORT ALL COMPONENT TOKENS
// ============================================================================

export const componentTokens = {
  button: buttonTokens,
  input: inputTokens,
  card: cardTokens,
  alert: alertTokens,
  badge: badgeTokens,
  navigation: navigationTokens,
  modal: modalTokens,
  tooltip: tooltipTokens,
  loading: loadingTokens,
} as const;

export type ComponentToken = keyof typeof componentTokens;
