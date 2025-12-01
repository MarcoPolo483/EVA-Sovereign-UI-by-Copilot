/**
 * Design tokens index
 * Exports all design tokens for easy import
 * 
 * Three-tier token architecture:
 * 1. Base Tokens - Raw primitive values (colors, spacing, typography scales)
 * 2. Semantic Tokens - Meaningful, purpose-driven tokens (text, background, border)
 * 3. Component Tokens - Component-specific tokens (button, input, card)
 * 
 * Reference: Government of Canada Design System
 * https://design-system.alpha.canada.ca/en/design-tokens/
 */

// ============================================================================
// THREE-TIER TOKEN SYSTEM (Recommended)
// ============================================================================

// Tier 1: Base Tokens (primitives - rarely used directly)
export * from './base-tokens';

// Tier 2: Semantic Tokens (purpose-driven - use these in most cases)
export * from './semantic-tokens';

// Tier 3: Component Tokens (component-specific - use within components)
export * from './component-tokens';

// ============================================================================
// LEGACY TOKEN EXPORTS (Backward compatibility)
// ============================================================================

export * from './colors';
export * from './typography';
export * from './spacing';
export * from './shadows';
export * from './animations';
export * from './breakpoints';
export * from './sovereign-profiles';

