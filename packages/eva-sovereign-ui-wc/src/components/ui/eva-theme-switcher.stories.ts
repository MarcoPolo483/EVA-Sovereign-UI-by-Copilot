import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';
import '../components/ui/eva-theme-switcher';
import { themeEngine } from '../themes/theme-engine';

const meta: Meta = {
  title: 'Theming/Theme Switcher',
  component: 'eva-theme-switcher',
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['dropdown', 'buttons', 'toggle', 'combined'],
      description: 'Display variant for the theme switcher',
    },
    'show-country-flags': {
      control: 'boolean',
      description: 'Show country flag emojis in theme names',
    },
    'show-dark-toggle': {
      control: 'boolean',
      description: 'Show dark mode toggle button',
    },
    compact: {
      control: 'boolean',
      description: 'Use compact styling with smaller padding/fonts',
    },
  },
  parameters: {
    docs: {
      description: {
        component: `
# Theme Switcher Component

Interactive component for switching between themes with support for:
- Five Eyes sovereign themes (Canada, USA, UK, Australia, NZ)
- Dark mode toggle
- Multiple display variants (dropdown, buttons, toggle)
- localStorage persistence
- Automatic system preference detection

## Features

- **Dropdown Variant**: Grouped select dropdown with all themes
- **Button Variant**: Button group for quick theme switching
- **Toggle Variant**: Simple dark mode toggle
- **Combined Variant**: Dropdown + dark toggle together
- **Country Flags**: Optional flag emojis for visual identification
- **Compact Mode**: Smaller size for toolbars/headers
- **Accessible**: Full keyboard navigation and ARIA support

## Usage

\`\`\`html
<!-- Default dropdown -->
<eva-theme-switcher></eva-theme-switcher>

<!-- Button group with flags -->
<eva-theme-switcher 
  variant="buttons" 
  show-country-flags>
</eva-theme-switcher>

<!-- Dark toggle only -->
<eva-theme-switcher 
  variant="toggle" 
  show-dark-toggle>
</eva-theme-switcher>

<!-- Combined with compact mode -->
<eva-theme-switcher 
  variant="combined" 
  show-dark-toggle 
  compact>
</eva-theme-switcher>
\`\`\`
        `,
      },
    },
  },
};

export default meta;
type Story = StoryObj;

/**
 * Default dropdown variant showing all themes grouped by country
 */
export const Dropdown: Story = {
  args: {
    variant: 'dropdown',
  },
  render: (args) => html`
    <eva-theme-switcher
      variant="${args.variant}"
      ?show-country-flags="${args['show-country-flags']}"
      ?show-dark-toggle="${args['show-dark-toggle']}"
      ?compact="${args.compact}"
    ></eva-theme-switcher>
  `,
};

/**
 * Dropdown variant with country flag emojis for visual identification
 */
export const DropdownWithFlags: Story = {
  args: {
    variant: 'dropdown',
    'show-country-flags': true,
  },
  render: (args) => html`
    <eva-theme-switcher
      variant="${args.variant}"
      ?show-country-flags="${args['show-country-flags']}"
      ?show-dark-toggle="${args['show-dark-toggle']}"
      ?compact="${args.compact}"
    ></eva-theme-switcher>
  `,
};

/**
 * Button group variant for quick theme switching between countries
 */
export const ButtonGroup: Story = {
  args: {
    variant: 'buttons',
    'show-country-flags': true,
  },
  render: (args) => html`
    <eva-theme-switcher
      variant="${args.variant}"
      ?show-country-flags="${args['show-country-flags']}"
      ?show-dark-toggle="${args['show-dark-toggle']}"
      ?compact="${args.compact}"
    ></eva-theme-switcher>
  `,
};

/**
 * Dark mode toggle - switches between light and dark variants of current theme
 */
export const DarkModeToggle: Story = {
  args: {
    variant: 'toggle',
    'show-dark-toggle': true,
  },
  render: (args) => html`
    <eva-theme-switcher
      variant="${args.variant}"
      ?show-country-flags="${args['show-country-flags']}"
      ?show-dark-toggle="${args['show-dark-toggle']}"
      ?compact="${args.compact}"
    ></eva-theme-switcher>
  `,
};

/**
 * Combined variant with dropdown selector and dark mode toggle
 */
export const Combined: Story = {
  args: {
    variant: 'combined',
    'show-country-flags': true,
    'show-dark-toggle': true,
  },
  render: (args) => html`
    <eva-theme-switcher
      variant="${args.variant}"
      ?show-country-flags="${args['show-country-flags']}"
      ?show-dark-toggle="${args['show-dark-toggle']}"
      ?compact="${args.compact}"
    ></eva-theme-switcher>
  `,
};

/**
 * Compact mode - smaller size suitable for headers and toolbars
 */
export const Compact: Story = {
  args: {
    variant: 'combined',
    'show-country-flags': true,
    'show-dark-toggle': true,
    compact: true,
  },
  render: (args) => html`
    <eva-theme-switcher
      variant="${args.variant}"
      ?show-country-flags="${args['show-country-flags']}"
      ?show-dark-toggle="${args['show-dark-toggle']}"
      ?compact="${args.compact}"
    ></eva-theme-switcher>
  `,
};

/**
 * Complete example in a header layout
 */
export const InHeaderLayout: Story = {
  render: () => html`
    <div style="
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 16px 24px;
      background: var(--eva-background-primary, white);
      border-bottom: 1px solid var(--eva-border-primary, #ccc);
    ">
      <div style="
        font-size: 20px;
        font-weight: 700;
        color: var(--eva-text-primary, #333);
      ">
        Government Portal
      </div>
      
      <eva-theme-switcher 
        variant="combined" 
        show-dark-toggle 
        compact>
      </eva-theme-switcher>
    </div>
    
    <div style="
      padding: 24px;
      background: var(--eva-background-secondary, #f5f5f5);
      color: var(--eva-text-primary, #333);
      min-height: 200px;
    ">
      <h2 style="margin-top: 0;">Content Area</h2>
      <p>Theme switcher integrated into header. Try changing themes to see the entire page update.</p>
      
      <button style="
        padding: 12px 24px;
        background: var(--eva-interactive-primary, #26374A);
        color: var(--eva-text-inverse, white);
        border: none;
        border-radius: 4px;
        font-weight: 600;
        cursor: pointer;
        margin-top: 16px;
      ">
        Primary Button
      </button>
    </div>
  `,
};

/**
 * Demonstration of theme switching affecting all components
 */
export const ThemeShowcase: Story = {
  render: () => html`
    <div style="padding: 24px;">
      <div style="margin-bottom: 24px;">
        <eva-theme-switcher 
          variant="buttons" 
          show-country-flags>
        </eva-theme-switcher>
      </div>
      
      <div style="
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
        gap: 16px;
        margin-top: 24px;
      ">
        <!-- Card 1: Colors -->
        <div style="
          padding: 20px;
          background: var(--eva-background-primary, white);
          border: 1px solid var(--eva-border-primary, #ccc);
          border-radius: 8px;
        ">
          <h3 style="
            margin-top: 0;
            color: var(--eva-text-primary, #333);
          ">Color Palette</h3>
          
          <div style="display: flex; flex-direction: column; gap: 8px;">
            <div style="
              padding: 12px;
              background: var(--eva-brand-primary, #26374A);
              color: var(--eva-text-inverse, white);
              border-radius: 4px;
            ">Primary</div>
            
            <div style="
              padding: 12px;
              background: var(--eva-brand-secondary, #A62A1E);
              color: var(--eva-text-inverse, white);
              border-radius: 4px;
            ">Secondary</div>
            
            <div style="
              padding: 12px;
              background: var(--eva-feedback-success, #278400);
              color: var(--eva-text-inverse, white);
              border-radius: 4px;
            ">Success</div>
          </div>
        </div>
        
        <!-- Card 2: Typography -->
        <div style="
          padding: 20px;
          background: var(--eva-background-primary, white);
          border: 1px solid var(--eva-border-primary, #ccc);
          border-radius: 8px;
        ">
          <h3 style="
            margin-top: 0;
            color: var(--eva-text-primary, #333);
            font-family: var(--eva-font-family-heading, sans-serif);
          ">Typography</h3>
          
          <p style="
            color: var(--eva-text-primary, #333);
            font-family: var(--eva-font-family-body, sans-serif);
            font-size: var(--eva-font-size-base, 16px);
            line-height: var(--eva-line-height-base, 1.5);
          ">
            Body text adapts to each sovereign theme's official typography standards.
          </p>
          
          <a href="#" style="
            color: var(--eva-text-link, #284162);
            text-decoration: underline;
          ">Link example</a>
        </div>
        
        <!-- Card 3: Interactive -->
        <div style="
          padding: 20px;
          background: var(--eva-background-primary, white);
          border: 1px solid var(--eva-border-primary, #ccc);
          border-radius: 8px;
        ">
          <h3 style="
            margin-top: 0;
            color: var(--eva-text-primary, #333);
          ">Interactive</h3>
          
          <button style="
            width: 100%;
            padding: 12px;
            background: var(--eva-interactive-primary, #26374A);
            color: var(--eva-text-inverse, white);
            border: none;
            border-radius: 4px;
            font-weight: 600;
            cursor: pointer;
            margin-bottom: 8px;
          ">Primary Button</button>
          
          <button style="
            width: 100%;
            padding: 12px;
            background: transparent;
            color: var(--eva-interactive-primary, #26374A);
            border: 2px solid var(--eva-interactive-primary, #26374A);
            border-radius: 4px;
            font-weight: 600;
            cursor: pointer;
          ">Secondary Button</button>
        </div>
      </div>
      
      <div style="
        margin-top: 24px;
        padding: 16px;
        background: var(--eva-feedback-info, #269abc);
        color: var(--eva-text-inverse, white);
        border-radius: 6px;
      ">
        <strong>ℹ️ Info:</strong> All components automatically adapt to the selected theme. Try switching between countries to see different color schemes and typography.
      </div>
    </div>
  `,
};

/**
 * Programmatic theme control example
 */
export const ProgrammaticControl: Story = {
  render: () => html`
    <div style="padding: 24px;">
      <h3>Programmatic Theme Control</h3>
      <p>Control themes via JavaScript API:</p>
      
      <div style="display: flex; gap: 8px; flex-wrap: wrap; margin: 16px 0;">
        <button 
          @click=${() => themeEngine.applyTheme('canada-gc-light')}
          style="
            padding: 8px 16px;
            background: var(--eva-interactive-primary);
            color: var(--eva-text-inverse);
            border: none;
            border-radius: 4px;
            cursor: pointer;
          "
        >
          🇨🇦 Canada Light
        </button>
        
        <button 
          @click=${() => themeEngine.applyTheme('usa-gov-light')}
          style="
            padding: 8px 16px;
            background: var(--eva-interactive-primary);
            color: var(--eva-text-inverse);
            border: none;
            border-radius: 4px;
            cursor: pointer;
          "
        >
          🇺🇸 USA Light
        </button>
        
        <button 
          @click=${() => themeEngine.applyTheme('uk-gov-light')}
          style="
            padding: 8px 16px;
            background: var(--eva-interactive-primary);
            color: var(--eva-text-inverse);
            border: none;
            border-radius: 4px;
            cursor: pointer;
          "
        >
          🇬🇧 UK Light
        </button>
        
        <button 
          @click=${() => themeEngine.toggleDarkMode()}
          style="
            padding: 8px 16px;
            background: var(--eva-brand-secondary);
            color: var(--eva-text-inverse);
            border: none;
            border-radius: 4px;
            cursor: pointer;
          "
        >
          Toggle Dark Mode
        </button>
        
        <button 
          @click=${() => themeEngine.clearThemePreference()}
          style="
            padding: 8px 16px;
            background: transparent;
            color: var(--eva-text-primary);
            border: 1px solid var(--eva-border-primary);
            border-radius: 4px;
            cursor: pointer;
          "
        >
          Clear Preference
        </button>
      </div>
      
      <pre style="
        padding: 16px;
        background: var(--eva-background-tertiary);
        border: 1px solid var(--eva-border-primary);
        border-radius: 4px;
        overflow-x: auto;
        font-size: 13px;
      "><code>// Apply theme
themeEngine.applyTheme('canada-gc-light');

// Toggle dark mode
themeEngine.toggleDarkMode();

// Get current theme
const current = themeEngine.getCurrentTheme();
console.log(current.name); // "🇨🇦 Government of Canada"

// Listen for changes
document.addEventListener('eva-theme-change', (e) => {
  console.log('New theme:', e.detail.theme.name);
});</code></pre>
    </div>
  `,
};
