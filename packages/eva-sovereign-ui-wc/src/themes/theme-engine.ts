/**
 * Theme Engine - Runtime Theme Management
 * Supports dark mode, high contrast, custom themes, Five Eyes sovereign themes
 * Automatic theme detection based on user preferences (dark mode, high contrast)
 * localStorage persistence for user theme preferences
 */

import { baseColors, baseFontFamilies, baseSpacing } from '../tokens/base-tokens';
import { semanticColors, semanticSpacing, semanticTypography } from '../tokens/semantic-tokens';
import { fiveEyesThemes } from './five-eyes-themes';

export interface Theme {
  id: string;
  name: string;
  description: string;
  colors: ThemeColors;
  typography?: Partial<ThemeTypography>;
  spacing?: Partial<typeof baseSpacing>;
  mode: 'light' | 'dark' | 'high-contrast';
}

export interface ThemeColors {
  // Background
  backgroundPrimary: string;
  backgroundSecondary: string;
  backgroundTertiary: string;
  backgroundInverse: string;
  
  // Text
  textPrimary: string;
  textSecondary: string;
  textTertiary: string;
  textInverse: string;
  textLink: string;
  textLinkHover: string;
  
  // Border
  borderPrimary: string;
  borderSecondary: string;
  borderFocus: string;
  
  // Brand
  brandPrimary: string;
  brandSecondary: string;
  brandAccent: string;
  
  // Interactive
  interactivePrimary: string;
  interactivePrimaryHover: string;
  interactivePrimaryActive: string;
  interactivePrimaryDisabled: string;
  
  // Feedback
  feedbackSuccess: string;
  feedbackWarning: string;
  feedbackError: string;
  feedbackInfo: string;
  
  // Surface
  surfaceElevated: string;
  surfaceOverlay: string;
}

export interface ThemeTypography {
  fontFamilyHeading: string;
  fontFamilyBody: string;
  fontFamilyMono: string;
  fontSizeBase: string;
  lineHeightBase: string;
}

/**
 * GC Canada Theme (Light Mode - Official)
 */
export const gcCanadaTheme: Theme = {
  id: 'gc-canada',
  name: 'Government of Canada',
  description: 'Official Government of Canada design system theme',
  mode: 'light',
  colors: {
    // Background
    backgroundPrimary: 'oklch(100% 0 0)', // white
    backgroundSecondary: 'oklch(98% 0 0)', // near-white
    backgroundTertiary: 'oklch(96% 0 0)', // light gray
    backgroundInverse: 'oklch(30% 0.02 265)', // dark blue-gray
    
    // Text
    textPrimary: 'oklch(22% 0.01 265)', // near-black
    textSecondary: 'oklch(42% 0.02 265)', // medium gray
    textTertiary: 'oklch(60% 0.02 265)', // light gray
    textInverse: 'oklch(98% 0 0)', // white
    textLink: 'oklch(45% 0.13 265)', // GC blue
    textLinkHover: 'oklch(30% 0.13 265)', // darker GC blue
    
    // Border
    borderPrimary: 'oklch(75% 0.02 265)', // gray
    borderSecondary: 'oklch(85% 0.01 265)', // light gray
    borderFocus: 'oklch(55% 0.18 265)', // GC focus blue
    
    // Brand
    brandPrimary: 'oklch(45% 0.13 265)', // GC blue #26374A
    brandSecondary: 'oklch(38% 0.15 25)', // GC accent red #A62A1E
    brandAccent: 'oklch(60% 0.13 265)', // lighter blue
    
    // Interactive
    interactivePrimary: 'oklch(45% 0.13 265)', // GC blue
    interactivePrimaryHover: 'oklch(38% 0.13 265)', // darker blue
    interactivePrimaryActive: 'oklch(30% 0.13 265)', // darkest blue
    interactivePrimaryDisabled: 'oklch(75% 0.05 265)', // disabled gray
    
    // Feedback
    feedbackSuccess: 'oklch(55% 0.15 145)', // green
    feedbackWarning: 'oklch(70% 0.14 85)', // yellow
    feedbackError: 'oklch(50% 0.20 25)', // red
    feedbackInfo: 'oklch(60% 0.13 220)', // cyan
    
    // Surface
    surfaceElevated: 'oklch(100% 0 0)', // white
    surfaceOverlay: 'oklch(30% 0.02 265 / 0.9)', // dark with transparency
  },
  typography: {
    fontFamilyHeading: baseFontFamilies.heading,
    fontFamilyBody: baseFontFamilies.body,
    fontFamilyMono: baseFontFamilies.mono,
    fontSizeBase: '20px', // GC base size
    lineHeightBase: '1.5',
  },
};

/**
 * GC Canada Dark Mode Theme
 */
export const gcCanadaDarkTheme: Theme = {
  id: 'gc-canada-dark',
  name: 'Government of Canada (Dark)',
  description: 'Dark mode variant of the official GC theme',
  mode: 'dark',
  colors: {
    // Background
    backgroundPrimary: 'oklch(18% 0.02 265)', // dark blue-gray
    backgroundSecondary: 'oklch(22% 0.02 265)', // slightly lighter
    backgroundTertiary: 'oklch(26% 0.02 265)', // lighter still
    backgroundInverse: 'oklch(98% 0 0)', // white
    
    // Text
    textPrimary: 'oklch(95% 0 0)', // near-white
    textSecondary: 'oklch(75% 0.02 265)', // light gray
    textTertiary: 'oklch(60% 0.02 265)', // medium gray
    textInverse: 'oklch(22% 0.01 265)', // dark
    textLink: 'oklch(70% 0.13 265)', // lighter GC blue
    textLinkHover: 'oklch(80% 0.13 265)', // even lighter
    
    // Border
    borderPrimary: 'oklch(40% 0.02 265)', // medium gray
    borderSecondary: 'oklch(30% 0.02 265)', // darker gray
    borderFocus: 'oklch(70% 0.18 265)', // lighter focus blue
    
    // Brand
    brandPrimary: 'oklch(60% 0.13 265)', // lighter GC blue
    brandSecondary: 'oklch(55% 0.15 25)', // lighter red
    brandAccent: 'oklch(70% 0.13 265)', // accent blue
    
    // Interactive
    interactivePrimary: 'oklch(60% 0.13 265)', // lighter blue
    interactivePrimaryHover: 'oklch(70% 0.13 265)', // even lighter
    interactivePrimaryActive: 'oklch(75% 0.13 265)', // lightest
    interactivePrimaryDisabled: 'oklch(40% 0.05 265)', // disabled dark gray
    
    // Feedback
    feedbackSuccess: 'oklch(65% 0.15 145)', // lighter green
    feedbackWarning: 'oklch(75% 0.14 85)', // lighter yellow
    feedbackError: 'oklch(60% 0.20 25)', // lighter red
    feedbackInfo: 'oklch(70% 0.13 220)', // lighter cyan
    
    // Surface
    surfaceElevated: 'oklch(22% 0.02 265)', // elevated surface
    surfaceOverlay: 'oklch(10% 0.02 265 / 0.95)', // very dark with transparency
  },
  typography: {
    fontFamilyHeading: baseFontFamilies.heading,
    fontFamilyBody: baseFontFamilies.body,
    fontFamilyMono: baseFontFamilies.mono,
    fontSizeBase: '20px',
    lineHeightBase: '1.5',
  },
};

/**
 * High Contrast Theme (WCAG AAA)
 */
export const gcHighContrastTheme: Theme = {
  id: 'gc-high-contrast',
  name: 'High Contrast',
  description: 'Maximum contrast for visual accessibility (WCAG AAA)',
  mode: 'high-contrast',
  colors: {
    // Background
    backgroundPrimary: 'oklch(100% 0 0)', // pure white
    backgroundSecondary: 'oklch(100% 0 0)', // pure white
    backgroundTertiary: 'oklch(95% 0 0)', // very light gray
    backgroundInverse: 'oklch(0% 0 0)', // pure black
    
    // Text
    textPrimary: 'oklch(0% 0 0)', // pure black
    textSecondary: 'oklch(20% 0 0)', // very dark gray
    textTertiary: 'oklch(30% 0 0)', // dark gray
    textInverse: 'oklch(100% 0 0)', // pure white
    textLink: 'oklch(30% 0.20 265)', // high contrast blue
    textLinkHover: 'oklch(20% 0.20 265)', // darker blue
    
    // Border
    borderPrimary: 'oklch(0% 0 0)', // black borders
    borderSecondary: 'oklch(30% 0 0)', // dark borders
    borderFocus: 'oklch(40% 0.25 265)', // high contrast focus
    
    // Brand
    brandPrimary: 'oklch(30% 0.20 265)', // high contrast blue
    brandSecondary: 'oklch(25% 0.22 25)', // high contrast red
    brandAccent: 'oklch(35% 0.20 265)',
    
    // Interactive
    interactivePrimary: 'oklch(30% 0.20 265)',
    interactivePrimaryHover: 'oklch(20% 0.20 265)',
    interactivePrimaryActive: 'oklch(15% 0.20 265)',
    interactivePrimaryDisabled: 'oklch(70% 0 0)',
    
    // Feedback
    feedbackSuccess: 'oklch(35% 0.20 145)', // high contrast green
    feedbackWarning: 'oklch(50% 0.18 85)', // high contrast yellow (darker for contrast)
    feedbackError: 'oklch(35% 0.25 25)', // high contrast red
    feedbackInfo: 'oklch(40% 0.18 220)', // high contrast cyan
    
    // Surface
    surfaceElevated: 'oklch(100% 0 0)',
    surfaceOverlay: 'oklch(0% 0 0 / 0.95)',
  },
  typography: {
    fontFamilyHeading: baseFontFamilies.heading,
    fontFamilyBody: baseFontFamilies.body,
    fontFamilyMono: baseFontFamilies.mono,
    fontSizeBase: '20px',
    lineHeightBase: '1.6', // slightly increased for readability
  },
};

/**
 * Modern Theme (Alternative Light)
 */
export const modernTheme: Theme = {
  id: 'modern',
  name: 'Modern',
  description: 'Contemporary design with softer colors and rounded corners',
  mode: 'light',
  colors: {
    backgroundPrimary: 'oklch(99% 0 0)',
    backgroundSecondary: 'oklch(96% 0.01 265)',
    backgroundTertiary: 'oklch(93% 0.02 265)',
    backgroundInverse: 'oklch(25% 0.03 265)',
    
    textPrimary: 'oklch(25% 0.02 265)',
    textSecondary: 'oklch(45% 0.03 265)',
    textTertiary: 'oklch(62% 0.03 265)',
    textInverse: 'oklch(98% 0 0)',
    textLink: 'oklch(50% 0.15 265)',
    textLinkHover: 'oklch(40% 0.15 265)',
    
    borderPrimary: 'oklch(80% 0.02 265)',
    borderSecondary: 'oklch(88% 0.01 265)',
    borderFocus: 'oklch(60% 0.18 265)',
    
    brandPrimary: 'oklch(50% 0.15 265)',
    brandSecondary: 'oklch(55% 0.16 320)',
    brandAccent: 'oklch(65% 0.14 180)',
    
    interactivePrimary: 'oklch(50% 0.15 265)',
    interactivePrimaryHover: 'oklch(45% 0.15 265)',
    interactivePrimaryActive: 'oklch(40% 0.15 265)',
    interactivePrimaryDisabled: 'oklch(78% 0.05 265)',
    
    feedbackSuccess: 'oklch(58% 0.16 145)',
    feedbackWarning: 'oklch(72% 0.15 85)',
    feedbackError: 'oklch(52% 0.21 25)',
    feedbackInfo: 'oklch(62% 0.14 220)',
    
    surfaceElevated: 'oklch(100% 0 0)',
    surfaceOverlay: 'oklch(25% 0.03 265 / 0.85)',
  },
};

/**
 * Theme Engine Class
 */
export class ThemeEngine {
  private currentTheme: Theme = gcCanadaTheme;
  private customThemes: Map<string, Theme> = new Map();
  private styleElement: HTMLStyleElement | null = null;
  private mediaQueryListeners: Array<{ query: MediaQueryList; handler: (e: MediaQueryListEvent) => void }> = [];
  
  constructor() {
    // Register built-in themes
    this.registerTheme(gcCanadaTheme);
    this.registerTheme(gcCanadaDarkTheme);
    this.registerTheme(gcHighContrastTheme);
    this.registerTheme(modernTheme);
    
    // Register all Five Eyes themes
    Object.values(fiveEyesThemes).forEach(theme => this.registerTheme(theme));
    
    // Load saved theme or detect user preferences
    this.initializeTheme();
  }
  
  /**
   * Register a custom theme
   */
  registerTheme(theme: Theme): void {
    this.customThemes.set(theme.id, theme);
  }
  
  /**
   * Get a registered theme by ID
   */
  getTheme(themeId: string): Theme | undefined {
    return this.customThemes.get(themeId);
  }
  
  /**
   * Get all registered themes
   */
  getAllThemes(): Theme[] {
    return Array.from(this.customThemes.values());
  }
  
  /**
   * Apply a theme
   * @param themeId - ID of the theme to apply
   * @param savePreference - Whether to save this as user's preference (default: true)
   */
  applyTheme(themeId: string, savePreference: boolean = true): boolean {
    const theme = this.getTheme(themeId);
    if (!theme) {
      console.error(`Theme "${themeId}" not found`);
      return false;
    }
    
    this.currentTheme = theme;
    this.generateCSSVariables(theme);
    this.updateDataAttributes(theme);
    this.dispatchThemeChangeEvent(theme);
    
    // Save preference if requested
    if (savePreference) {
      this.saveThemePreference(themeId);
    }
    
    return true;
  }
  
  /**
   * Clear saved theme preference (allow auto-detection)
   */
  clearThemePreference(): void {
    try {
      localStorage.removeItem('eva-theme-preference');
      // Re-detect from system preferences
      this.detectAndApplyUserPreferences();
    } catch (error) {
      console.warn('Failed to clear theme preference:', error);
    }
  }
  
  /**
   * Toggle between light and dark mode of current theme
   */
  toggleDarkMode(): boolean {
    const currentId = this.currentTheme.id;
    
    // Try to find the corresponding dark/light variant
    let targetThemeId: string;
    
    if (this.currentTheme.mode === 'dark') {
      // Switch to light
      targetThemeId = currentId.replace('-dark', '-light');
    } else {
      // Switch to dark
      targetThemeId = currentId.replace('-light', '-dark');
      // Handle legacy IDs without -light suffix
      if (!this.getTheme(targetThemeId)) {
        targetThemeId = `${currentId}-dark`;
      }
    }
    
    // Fall back to generic Canada themes if variant not found
    if (!this.getTheme(targetThemeId)) {
      targetThemeId = this.currentTheme.mode === 'dark' ? 'canada-gc-light' : 'canada-gc-dark';
    }
    
    return this.applyTheme(targetThemeId);
  }
  
  /**
   * Get current theme
   */
  getCurrentTheme(): Theme {
    return this.currentTheme;
  }
  
  /**
   * Generate CSS custom properties from theme
   */
  private generateCSSVariables(theme: Theme): void {
    if (!this.styleElement) {
      this.styleElement = document.createElement('style');
      this.styleElement.setAttribute('data-eva-theme', '');
      document.head.appendChild(this.styleElement);
    }
    
    const cssVars: string[] = [':root {'];
    
    // Color variables
    Object.entries(theme.colors).forEach(([key, value]) => {
      const cssVarName = this.toCSSVarName(key);
      cssVars.push(`  --eva-${cssVarName}: ${value};`);
    });
    
    // Typography variables
    if (theme.typography) {
      Object.entries(theme.typography).forEach(([key, value]) => {
        const cssVarName = this.toCSSVarName(key);
        cssVars.push(`  --eva-${cssVarName}: ${value};`);
      });
    }
    
    // Spacing variables (if custom)
    if (theme.spacing) {
      Object.entries(theme.spacing).forEach(([key, value]) => {
        const cssVarName = this.toCSSVarName(key);
        cssVars.push(`  --eva-spacing-${cssVarName}: ${value};`);
      });
    }
    
    cssVars.push('}');
    
    this.styleElement.textContent = cssVars.join('\n');
  }
  
  /**
   * Update data attributes for theme mode
   */
  private updateDataAttributes(theme: Theme): void {
    document.documentElement.setAttribute('data-eva-theme', theme.id);
    document.documentElement.setAttribute('data-eva-mode', theme.mode);
  }
  
  /**
   * Convert camelCase to kebab-case
   */
  private toCSSVarName(str: string): string {
    return str.replace(/([A-Z])/g, '-$1').toLowerCase();
  }
  
  /**
   * Initialize theme on startup
   */
  private initializeTheme(): void {
    // Try to load saved theme preference
    const savedThemeId = this.loadThemePreference();
    if (savedThemeId && this.getTheme(savedThemeId)) {
      this.applyTheme(savedThemeId);
      return;
    }
    
    // No saved preference, detect from system
    this.detectAndApplyUserPreferences();
    
    // Set up listeners for preference changes
    this.setupPreferenceListeners();
  }
  
  /**
   * Detect user preferences (dark mode, high contrast) and apply appropriate theme
   */
  private detectAndApplyUserPreferences(): void {
    // Check for high contrast preference (takes priority)
    if (window.matchMedia && window.matchMedia('(prefers-contrast: high)').matches) {
      this.applyTheme('gc-high-contrast');
      return;
    }
    
    // Check for dark mode preference
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      this.applyTheme('canada-gc-dark');
      return;
    }
    
    // Default to light theme
    this.applyTheme('canada-gc-light');
  }
  
  /**
   * Set up listeners for system preference changes
   */
  private setupPreferenceListeners(): void {
    if (!window.matchMedia) return;
    
    // Listen for dark mode changes
    const darkModeQuery = window.matchMedia('(prefers-color-scheme: dark)');
    const darkModeHandler = (e: MediaQueryListEvent) => {
      // Only auto-switch if user hasn't manually selected a theme
      if (!this.loadThemePreference()) {
        const currentMode = this.currentTheme.mode;
        if (currentMode !== 'high-contrast') {
          this.applyTheme(e.matches ? 'canada-gc-dark' : 'canada-gc-light');
        }
      }
    };
    darkModeQuery.addEventListener('change', darkModeHandler);
    this.mediaQueryListeners.push({ query: darkModeQuery, handler: darkModeHandler });
    
    // Listen for high contrast changes
    const highContrastQuery = window.matchMedia('(prefers-contrast: high)');
    const highContrastHandler = (e: MediaQueryListEvent) => {
      // Only auto-switch if user hasn't manually selected a theme
      if (!this.loadThemePreference()) {
        if (e.matches) {
          this.applyTheme('gc-high-contrast');
        } else {
          // Switch back to appropriate light/dark theme
          const isDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
          this.applyTheme(isDark ? 'canada-gc-dark' : 'canada-gc-light');
        }
      }
    };
    highContrastQuery.addEventListener('change', highContrastHandler);
    this.mediaQueryListeners.push({ query: highContrastQuery, handler: highContrastHandler });
  }
  
  /**
   * Clean up media query listeners
   */
  public destroy(): void {
    this.mediaQueryListeners.forEach(({ query, handler }) => {
      query.removeEventListener('change', handler);
    });
    this.mediaQueryListeners = [];
  }
  
  /**
   * Save theme preference to localStorage
   */
  private saveThemePreference(themeId: string): void {
    try {
      localStorage.setItem('eva-theme-preference', themeId);
    } catch (error) {
      console.warn('Failed to save theme preference:', error);
    }
  }
  
  /**
   * Load theme preference from localStorage
   */
  private loadThemePreference(): string | null {
    try {
      return localStorage.getItem('eva-theme-preference');
    } catch (error) {
      console.warn('Failed to load theme preference:', error);
      return null;
    }
  }
  
  /**
   * Dispatch theme change event
   */
  private dispatchThemeChangeEvent(theme: Theme): void {
    const event = new CustomEvent('eva-theme-change', {
      detail: { theme },
      bubbles: true,
      composed: true,
    });
    document.dispatchEvent(event);
  }
  
  /**
   * Create a custom theme from base theme
   */
  createCustomTheme(baseThemeId: string, overrides: Partial<Theme>): Theme | null {
    const baseTheme = this.getTheme(baseThemeId);
    if (!baseTheme) {
      console.error(`Base theme "${baseThemeId}" not found`);
      return null;
    }
    
    const customTheme: Theme = {
      ...baseTheme,
      ...overrides,
      id: overrides.id || `custom-${Date.now()}`,
      colors: {
        ...baseTheme.colors,
        ...(overrides.colors || {}),
      },
      typography: {
        ...baseTheme.typography,
        ...(overrides.typography || {}),
      },
    };
    
    this.registerTheme(customTheme);
    return customTheme;
  }
}

// Export singleton instance
export const themeEngine = new ThemeEngine();

// Export theme presets
export const themes = {
  // Legacy Canada themes (backward compatibility)
  gcCanada: gcCanadaTheme,
  gcCanadaDark: gcCanadaDarkTheme,
  gcHighContrast: gcHighContrastTheme,
  modern: modernTheme,
  
  // Five Eyes themes
  ...fiveEyesThemes,
};
