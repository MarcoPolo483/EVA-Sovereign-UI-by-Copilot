/**
 * Theme System Exports
 * 
 * Provides comprehensive theming capabilities including:
 * - Theme engine for runtime theme management
 * - Five Eyes sovereign themes (Canada, USA, UK, Australia, NZ)
 * - Dark mode and high contrast support
 * - Custom theme creation
 * - Theme builder component for interactive theme customization
 */

export { 
  ThemeEngine, 
  themeEngine, 
  themes,
  gcCanadaTheme,
  gcCanadaDarkTheme,
  gcHighContrastTheme,
  modernTheme,
} from './theme-engine';

export type { 
  Theme, 
  ThemeColors, 
  ThemeTypography 
} from './theme-engine';

export {
  fiveEyesThemes,
  themeGroups,
  canadaLightTheme,
  canadaDarkTheme,
  usaLightTheme,
  usaDarkTheme,
  ukLightTheme,
  ukDarkTheme,
  australiaLightTheme,
  australiaDarkTheme,
  newZealandLightTheme,
  newZealandDarkTheme,
} from './five-eyes-themes';

export { EvaThemeBuilder } from './theme-builder';

// Theme engine initializes automatically in its constructor
// No manual initialization needed - saved preferences are loaded automatically
