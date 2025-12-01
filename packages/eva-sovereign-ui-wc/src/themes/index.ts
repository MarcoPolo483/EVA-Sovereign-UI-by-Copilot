/**
 * Theme Exports
 * Central export point for theme system
 */

export { ThemeEngine, themeEngine, themes } from './theme-engine';
export type { Theme, ThemeColors, ThemeTypography } from './theme-engine';
export { EvaThemeBuilder } from './theme-builder';

// Initialize theme on import
import { themeEngine } from './theme-engine';

// Apply saved theme or default
const savedTheme = localStorage.getItem('eva-theme-preference');
if (savedTheme) {
  themeEngine.applyTheme(savedTheme);
} else {
  themeEngine.applyTheme('gc-canada');
}
