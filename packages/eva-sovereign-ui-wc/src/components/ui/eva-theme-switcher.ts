/**
 * Theme Switcher Component
 * Provides UI for switching between themes with persistence
 * Supports:
 * - Five Eyes sovereign themes (Canada, USA, UK, Australia, NZ)
 * - Dark mode toggle
 * - High contrast mode
 * - Custom theme selection
 * - localStorage persistence
 */

import { BaseElement } from '../../base-element';
import { themeEngine, Theme } from '../../themes/theme-engine';

export class EvaThemeSwitcher extends BaseElement {
  static get observedAttributes() {
    return ['variant', 'show-country-flags', 'show-dark-toggle', 'compact'];
  }
  
  private currentTheme: Theme;
  private allThemes: Theme[];
  
  constructor() {
    super();
    this.currentTheme = themeEngine.getCurrentTheme();
    this.allThemes = themeEngine.getAllThemes();
    
    // Listen for theme changes from other sources
    document.addEventListener('eva-theme-change', this.handleThemeChange);
  }
  
  connectedCallback(): void {
    super.connectedCallback();
    this.render();
  }
  
  disconnectedCallback(): void {
    super.disconnectedCallback();
    document.removeEventListener('eva-theme-change', this.handleThemeChange);
  }
  
  private handleThemeChange = (event: Event) => {
    const customEvent = event as CustomEvent<{ theme: Theme }>;
    this.currentTheme = customEvent.detail.theme;
    this.render();
  };
  
  protected render(): void {
    const variant = this.getAttribute('variant') || 'dropdown';
    const showFlags = this.hasAttribute('show-country-flags');
    const showDarkToggle = this.hasAttribute('show-dark-toggle');
    const compact = this.hasAttribute('compact');
    
    const style = this.createStyles(`
      :host {
        display: inline-block;
        font-family: var(--eva-font-family-body, sans-serif);
      }
      
      .theme-switcher {
        position: relative;
      }
      
      /* Dropdown variant */
      .theme-select {
        padding: 8px 32px 8px 12px;
        border: 1px solid var(--eva-border-primary, #ccc);
        border-radius: 4px;
        background: var(--eva-background-primary, white);
        color: var(--eva-text-primary, #333);
        font-size: 14px;
        cursor: pointer;
        appearance: none;
        background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 12 12'%3E%3Cpath fill='%23333' d='M6 9L1 4h10z'/%3E%3C/svg%3E");
        background-repeat: no-repeat;
        background-position: right 10px center;
        min-width: 200px;
      }
      
      .theme-select:focus {
        outline: 2px solid var(--eva-border-focus, #0535d2);
        outline-offset: 2px;
      }
      
      .theme-select.compact {
        min-width: 150px;
        padding: 6px 28px 6px 10px;
        font-size: 13px;
      }
      
      /* Button group variant */
      .theme-buttons {
        display: flex;
        gap: 8px;
        flex-wrap: wrap;
      }
      
      .theme-button {
        padding: 8px 16px;
        border: 2px solid var(--eva-border-primary, #ccc);
        border-radius: 4px;
        background: var(--eva-background-primary, white);
        color: var(--eva-text-primary, #333);
        font-size: 14px;
        cursor: pointer;
        transition: all 0.2s;
        display: flex;
        align-items: center;
        gap: 6px;
      }
      
      .theme-button:hover {
        border-color: var(--eva-interactive-primary, #26374A);
        background: var(--eva-background-secondary, #f5f5f5);
      }
      
      .theme-button.active {
        border-color: var(--eva-interactive-primary, #26374A);
        background: var(--eva-interactive-primary, #26374A);
        color: var(--eva-text-inverse, white);
        font-weight: 600;
      }
      
      .theme-button:focus {
        outline: 2px solid var(--eva-border-focus, #0535d2);
        outline-offset: 2px;
      }
      
      .theme-button.compact {
        padding: 6px 12px;
        font-size: 13px;
      }
      
      .theme-flag {
        font-size: 18px;
        line-height: 1;
      }
      
      /* Dark mode toggle */
      .dark-toggle {
        display: inline-flex;
        align-items: center;
        gap: 8px;
        padding: 8px 12px;
        border: 1px solid var(--eva-border-primary, #ccc);
        border-radius: 4px;
        background: var(--eva-background-primary, white);
        cursor: pointer;
        transition: all 0.2s;
      }
      
      .dark-toggle:hover {
        background: var(--eva-background-secondary, #f5f5f5);
      }
      
      .dark-toggle:focus {
        outline: 2px solid var(--eva-border-focus, #0535d2);
        outline-offset: 2px;
      }
      
      .toggle-icon {
        font-size: 20px;
        line-height: 1;
      }
      
      .toggle-label {
        font-size: 14px;
        color: var(--eva-text-primary, #333);
      }
      
      /* Combined layout */
      .combined-layout {
        display: flex;
        gap: 12px;
        align-items: center;
      }
    `);
    
    this.shadow.innerHTML = '';
    this.shadow.appendChild(style);
    
    const container = document.createElement('div');
    container.className = 'theme-switcher';
    
    if (variant === 'buttons') {
      container.innerHTML = this.renderButtonGroup(showFlags, compact);
    } else if (variant === 'toggle' && showDarkToggle) {
      container.innerHTML = this.renderDarkToggle(compact);
    } else if (variant === 'combined') {
      container.innerHTML = `
        <div class="combined-layout">
          ${this.renderDropdown(showFlags, compact)}
          ${showDarkToggle ? this.renderDarkToggle(compact) : ''}
        </div>
      `;
    } else {
      container.innerHTML = this.renderDropdown(showFlags, compact);
    }
    
    this.shadow.appendChild(container);
    this.attachEventListeners();
  }
  
  private renderDropdown(showFlags: boolean, compact: boolean): string {
    const compactClass = compact ? 'compact' : '';
    
    // Group themes by country
    const themeGroups = this.groupThemesByCountry();
    
    let options = '';
    Object.entries(themeGroups).forEach(([country, countryThemes]) => {
      options += `<optgroup label="${this.getCountryLabel(country, showFlags)}">`;
      countryThemes.forEach(theme => {
        const selected = theme.id === this.currentTheme.id ? 'selected' : '';
        const modeLabel = theme.mode === 'dark' ? ' (Dark)' : theme.mode === 'high-contrast' ? ' (High Contrast)' : '';
        options += `<option value="${theme.id}" ${selected}>${theme.name}${modeLabel}</option>`;
      });
      options += '</optgroup>';
    });
    
    return `<select class="theme-select ${compactClass}" aria-label="Select theme">${options}</select>`;
  }
  
  private renderButtonGroup(showFlags: boolean, compact: boolean): string {
    const compactClass = compact ? 'compact' : '';
    const themeGroups = this.groupThemesByCountry();
    
    let buttons = '<div class="theme-buttons">';
    Object.entries(themeGroups).forEach(([country, countryThemes]) => {
      // Show primary (light) theme for each country
      const primaryTheme = countryThemes.find(t => t.mode === 'light') || countryThemes[0];
      const active = primaryTheme.id === this.currentTheme.id ? 'active' : '';
      const flag = showFlags ? `<span class="theme-flag">${this.getCountryFlag(country)}</span>` : '';
      
      buttons += `
        <button 
          class="theme-button ${compactClass} ${active}" 
          data-theme-id="${primaryTheme.id}"
          aria-pressed="${active ? 'true' : 'false'}"
        >
          ${flag}
          <span>${this.getCountryShortName(country)}</span>
        </button>
      `;
    });
    buttons += '</div>';
    
    return buttons;
  }
  
  private renderDarkToggle(compact: boolean): string {
    const isDark = this.currentTheme.mode === 'dark';
    const icon = isDark ? '☀️' : '🌙';
    const label = isDark ? 'Light Mode' : 'Dark Mode';
    
    return `
      <button 
        class="dark-toggle ${compact ? 'compact' : ''}" 
        aria-label="Toggle dark mode"
        aria-pressed="${isDark}"
      >
        <span class="toggle-icon">${icon}</span>
        ${!compact ? `<span class="toggle-label">${label}</span>` : ''}
      </button>
    `;
  }
  
  private groupThemesByCountry(): Record<string, Theme[]> {
    const groups: Record<string, Theme[]> = {
      canada: [],
      usa: [],
      uk: [],
      australia: [],
      newZealand: [],
      other: [],
    };
    
    this.allThemes.forEach(theme => {
      if (theme.id.includes('canada') || theme.id.includes('gc')) {
        groups.canada.push(theme);
      } else if (theme.id.includes('usa')) {
        groups.usa.push(theme);
      } else if (theme.id.includes('uk')) {
        groups.uk.push(theme);
      } else if (theme.id.includes('australia')) {
        groups.australia.push(theme);
      } else if (theme.id.includes('nz')) {
        groups.newZealand.push(theme);
      } else {
        groups.other.push(theme);
      }
    });
    
    // Remove empty groups
    Object.keys(groups).forEach(key => {
      if (groups[key].length === 0) delete groups[key];
    });
    
    return groups;
  }
  
  private getCountryFlag(country: string): string {
    const flags: Record<string, string> = {
      canada: '🇨🇦',
      usa: '🇺🇸',
      uk: '🇬🇧',
      australia: '🇦🇺',
      newZealand: '🇳🇿',
    };
    return flags[country] || '';
  }
  
  private getCountryLabel(country: string, includeFlag: boolean): string {
    const labels: Record<string, string> = {
      canada: 'Canada',
      usa: 'United States',
      uk: 'United Kingdom',
      australia: 'Australia',
      newZealand: 'New Zealand',
      other: 'Other Themes',
    };
    const label = labels[country] || country;
    const flag = includeFlag ? `${this.getCountryFlag(country)} ` : '';
    return `${flag}${label}`;
  }
  
  private getCountryShortName(country: string): string {
    const names: Record<string, string> = {
      canada: 'Canada',
      usa: 'USA',
      uk: 'UK',
      australia: 'Australia',
      newZealand: 'NZ',
      other: 'Other',
    };
    return names[country] || country;
  }
  
  private attachEventListeners(): void {
    // Dropdown change
    const select = this.shadow.querySelector('.theme-select') as HTMLSelectElement;
    if (select) {
      select.addEventListener('change', (e) => {
        const target = e.target as HTMLSelectElement;
        themeEngine.applyTheme(target.value);
      });
    }
    
    // Button clicks
    const buttons = this.shadow.querySelectorAll('.theme-button');
    buttons.forEach(button => {
      button.addEventListener('click', () => {
        const themeId = button.getAttribute('data-theme-id');
        if (themeId) {
          themeEngine.applyTheme(themeId);
        }
      });
    });
    
    // Dark toggle
    const darkToggle = this.shadow.querySelector('.dark-toggle');
    if (darkToggle) {
      darkToggle.addEventListener('click', () => {
        themeEngine.toggleDarkMode();
      });
    }
  }
}

customElements.define('eva-theme-switcher', EvaThemeSwitcher);
