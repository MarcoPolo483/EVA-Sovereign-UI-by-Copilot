/**
 * CSS Utility Classes - TypeScript Generator
 * Programmatic generation of utility classes matching GC Design System
 * 
 * Usage:
 * import { generateUtilities, applyUtilities } from '@eva-sovereign-ui/utilities';
 */

import { baseSpacing, baseColors, baseFontSizes, baseShadows, baseBorderRadius } from '../tokens/base-tokens';
import { semanticColors, semanticSpacing } from '../tokens/semantic-tokens';

/**
 * Generate spacing utility classes
 */
export function generateSpacingUtilities(): string {
  const properties = {
    m: 'margin',
    mt: 'margin-top',
    mr: 'margin-right',
    mb: 'margin-bottom',
    ml: 'margin-left',
    mx: ['margin-left', 'margin-right'],
    my: ['margin-top', 'margin-bottom'],
    p: 'padding',
    pt: 'padding-top',
    pr: 'padding-right',
    pb: 'padding-bottom',
    pl: 'padding-left',
    px: ['padding-left', 'padding-right'],
    py: ['padding-top', 'padding-bottom'],
  };

  let css = '';
  
  Object.entries(properties).forEach(([prefix, property]) => {
    Object.entries(baseSpacing).forEach(([key, value]) => {
      const className = `.${prefix}-${key.replace('.', '\\.')}`;
      
      if (Array.isArray(property)) {
        css += `${className} { ${property.map(p => `${p}: ${value};`).join(' ')} }\n`;
      } else {
        css += `${className} { ${property}: ${value}; }\n`;
      }
    });
  });

  return css;
}

/**
 * Generate color utility classes
 */
export function generateColorUtilities(): string {
  let css = '';

  // Text colors
  Object.entries(semanticColors.text).forEach(([key, value]) => {
    css += `.text-${key} { color: ${value}; }\n`;
  });

  // Background colors
  Object.entries(semanticColors.background).forEach(([key, value]) => {
    css += `.bg-${key} { background-color: ${value}; }\n`;
  });

  // Border colors
  Object.entries(semanticColors.border).forEach(([key, value]) => {
    css += `.border-${key} { border-color: ${value}; }\n`;
  });

  return css;
}

/**
 * Apply utility classes to an element
 */
export function applyUtilities(element: HTMLElement, utilities: string[]): void {
  element.classList.add(...utilities);
}

/**
 * Parse utility string to CSS object
 */
export function utilityToStyle(utility: string): Partial<CSSStyleDeclaration> {
  const patterns: Record<string, (match: RegExpMatchArray) => Partial<CSSStyleDeclaration>> = {
    // Margin
    '^m-(.+)$': (match) => ({ margin: baseSpacing[match[1] as keyof typeof baseSpacing] }),
    '^mt-(.+)$': (match) => ({ marginTop: baseSpacing[match[1] as keyof typeof baseSpacing] }),
    '^mr-(.+)$': (match) => ({ marginRight: baseSpacing[match[1] as keyof typeof baseSpacing] }),
    '^mb-(.+)$': (match) => ({ marginBottom: baseSpacing[match[1] as keyof typeof baseSpacing] }),
    '^ml-(.+)$': (match) => ({ marginLeft: baseSpacing[match[1] as keyof typeof baseSpacing] }),
    
    // Padding
    '^p-(.+)$': (match) => ({ padding: baseSpacing[match[1] as keyof typeof baseSpacing] }),
    '^pt-(.+)$': (match) => ({ paddingTop: baseSpacing[match[1] as keyof typeof baseSpacing] }),
    '^pr-(.+)$': (match) => ({ paddingRight: baseSpacing[match[1] as keyof typeof baseSpacing] }),
    '^pb-(.+)$': (match) => ({ paddingBottom: baseSpacing[match[1] as keyof typeof baseSpacing] }),
    '^pl-(.+)$': (match) => ({ paddingLeft: baseSpacing[match[1] as keyof typeof baseSpacing] }),
    
    // Text
    '^text-(.+)$': (match) => {
      const key = match[1] as keyof typeof semanticColors.text;
      return { color: semanticColors.text[key] || match[1] };
    },
    
    // Background
    '^bg-(.+)$': (match) => {
      const key = match[1] as keyof typeof semanticColors.background;
      return { backgroundColor: semanticColors.background[key] || match[1] };
    },
    
    // Flex
    '^flex$': () => ({ display: 'flex' }),
    '^flex-col$': () => ({ flexDirection: 'column' }),
    '^flex-row$': () => ({ flexDirection: 'row' }),
    '^justify-(.+)$': (match) => ({ justifyContent: match[1] }),
    '^items-(.+)$': (match) => ({ alignItems: match[1] }),
    '^gap-(.+)$': (match) => ({ gap: baseSpacing[match[1] as keyof typeof baseSpacing] }),
  };

  for (const [pattern, handler] of Object.entries(patterns)) {
    const match = utility.match(new RegExp(pattern));
    if (match) {
      return handler(match);
    }
  }

  return {};
}

/**
 * GC Design System utility presets
 */
export const gcUtilityPresets = {
  container: ['max-w-gc', 'mx-auto', 'px-6'],
  card: ['bg-primary', 'rounded-lg', 'shadow-md', 'p-6'],
  button: ['px-6', 'py-3', 'rounded-md', 'font-semibold', 'transition-colors'],
  buttonPrimary: ['bg-primary', 'text-inverse', 'hover:bg-primaryHover'],
  input: ['px-3', 'py-2', 'border', 'border-primary', 'rounded-md', 'focus:border-focus'],
  heading: ['font-bold', 'text-primary', 'mb-4'],
  link: ['text-link', 'underline', 'hover:text-linkHover'],
  prose: ['max-w-prose', 'leading-relaxed'],
} as const;

export type UtilityPreset = keyof typeof gcUtilityPresets;
