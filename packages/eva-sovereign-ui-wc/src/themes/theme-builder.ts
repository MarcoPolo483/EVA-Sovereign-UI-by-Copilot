/**
 * Theme Builder Component
 * Interactive UI for creating and customizing themes
 */

import { LitElement, html, css } from 'lit';
import { customElement, state } from 'lit/decorators.js';
import { themeEngine, Theme, ThemeColors } from './theme-engine';

@customElement('eva-theme-builder')
export class EvaThemeBuilder extends LitElement {
  static styles = css`
    :host {
      display: block;
      font-family: var(--eva-font-family-body, sans-serif);
    }

    .theme-builder {
      max-width: 1200px;
      margin: 0 auto;
      padding: var(--eva-spacing-6, 24px);
    }

    .header {
      margin-bottom: var(--eva-spacing-8, 32px);
    }

    .header h1 {
      font-size: var(--eva-font-size-heading-h2, 32px);
      font-weight: 700;
      margin: 0 0 var(--eva-spacing-2, 8px) 0;
      color: var(--eva-text-primary);
    }

    .header p {
      color: var(--eva-text-secondary);
      margin: 0;
    }

    .layout {
      display: grid;
      grid-template-columns: 300px 1fr;
      gap: var(--eva-spacing-6, 24px);
    }

    .sidebar {
      position: sticky;
      top: var(--eva-spacing-6, 24px);
      height: fit-content;
    }

    .theme-selector {
      background: var(--eva-background-primary);
      border: 1px solid var(--eva-border-primary);
      border-radius: 8px;
      padding: var(--eva-spacing-4, 16px);
      margin-bottom: var(--eva-spacing-4, 16px);
    }

    .theme-selector h2 {
      font-size: 18px;
      margin: 0 0 var(--eva-spacing-3, 12px) 0;
    }

    .theme-button {
      width: 100%;
      padding: var(--eva-spacing-3, 12px);
      margin-bottom: var(--eva-spacing-2, 8px);
      border: 2px solid var(--eva-border-primary);
      border-radius: 6px;
      background: var(--eva-background-primary);
      cursor: pointer;
      text-align: left;
      transition: all 0.2s;
    }

    .theme-button:hover {
      border-color: var(--eva-interactive-primary);
      background: var(--eva-background-secondary);
    }

    .theme-button.active {
      border-color: var(--eva-interactive-primary);
      background: var(--eva-interactive-primary);
      color: var(--eva-text-inverse);
    }

    .theme-button-name {
      font-weight: 600;
      display: block;
      margin-bottom: 4px;
    }

    .theme-button-desc {
      font-size: 13px;
      opacity: 0.8;
    }

    .color-editor {
      background: var(--eva-background-primary);
      border: 1px solid var(--eva-border-primary);
      border-radius: 8px;
      padding: var(--eva-spacing-4, 16px);
    }

    .color-group {
      margin-bottom: var(--eva-spacing-6, 24px);
    }

    .color-group h3 {
      font-size: 16px;
      font-weight: 600;
      margin: 0 0 var(--eva-spacing-3, 12px) 0;
      color: var(--eva-text-primary);
    }

    .color-input {
      display: grid;
      grid-template-columns: 140px 1fr 80px;
      gap: var(--eva-spacing-3, 12px);
      align-items: center;
      margin-bottom: var(--eva-spacing-2, 8px);
    }

    .color-input label {
      font-size: 14px;
      color: var(--eva-text-secondary);
    }

    .color-input input[type="text"] {
      padding: 8px 12px;
      border: 1px solid var(--eva-border-primary);
      border-radius: 4px;
      font-family: var(--eva-font-family-mono, monospace);
      font-size: 13px;
    }

    .color-input input[type="color"] {
      width: 60px;
      height: 36px;
      border: 1px solid var(--eva-border-primary);
      border-radius: 4px;
      cursor: pointer;
    }

    .preview {
      background: var(--eva-background-primary);
      border: 1px solid var(--eva-border-primary);
      border-radius: 8px;
      padding: var(--eva-spacing-6, 24px);
    }

    .preview h2 {
      font-size: 20px;
      margin: 0 0 var(--eva-spacing-4, 16px) 0;
    }

    .preview-components {
      display: flex;
      flex-direction: column;
      gap: var(--eva-spacing-4, 16px);
    }

    .preview-button {
      padding: 12px 24px;
      border: none;
      border-radius: 6px;
      font-weight: 600;
      cursor: pointer;
      transition: all 0.2s;
    }

    .preview-button.primary {
      background: var(--eva-interactive-primary);
      color: var(--eva-text-inverse);
    }

    .preview-button.primary:hover {
      background: var(--eva-interactive-primary-hover);
    }

    .preview-card {
      padding: var(--eva-spacing-4, 16px);
      border: 1px solid var(--eva-border-primary);
      border-radius: 8px;
      background: var(--eva-background-primary);
    }

    .preview-alert {
      padding: var(--eva-spacing-4, 16px);
      border-radius: 6px;
      border-left: 4px solid;
    }

    .preview-alert.success {
      background: var(--eva-feedback-success);
      border-color: var(--eva-feedback-success);
      color: white;
    }

    .actions {
      margin-top: var(--eva-spacing-6, 24px);
      display: flex;
      gap: var(--eva-spacing-3, 12px);
    }

    .action-button {
      padding: 12px 24px;
      border: 2px solid var(--eva-interactive-primary);
      border-radius: 6px;
      background: transparent;
      color: var(--eva-interactive-primary);
      font-weight: 600;
      cursor: pointer;
      transition: all 0.2s;
    }

    .action-button:hover {
      background: var(--eva-interactive-primary);
      color: var(--eva-text-inverse);
    }

    .action-button.primary {
      background: var(--eva-interactive-primary);
      color: var(--eva-text-inverse);
    }

    .action-button.primary:hover {
      background: var(--eva-interactive-primary-hover);
    }

    @media (max-width: 768px) {
      .layout {
        grid-template-columns: 1fr;
      }

      .sidebar {
        position: static;
      }
    }
  `;

  @state()
  private currentTheme: Theme = themeEngine.getCurrentTheme();

  @state()
  private editedColors: ThemeColors = { ...this.currentTheme.colors };

  @state()
  private availableThemes: Theme[] = themeEngine.getAllThemes();

  connectedCallback() {
    super.connectedCallback();
    this.editedColors = { ...this.currentTheme.colors };
  }

  private handleThemeSelect(themeId: string) {
    themeEngine.applyTheme(themeId);
    this.currentTheme = themeEngine.getCurrentTheme();
    this.editedColors = { ...this.currentTheme.colors };
  }

  private handleColorChange(key: keyof ThemeColors, value: string) {
    this.editedColors = {
      ...this.editedColors,
      [key]: value,
    };
    this.requestUpdate();
  }

  private applyCustomTheme() {
    const customTheme = themeEngine.createCustomTheme(this.currentTheme.id, {
      id: `custom-${Date.now()}`,
      name: `Custom ${this.currentTheme.name}`,
      description: 'User-customized theme',
      colors: this.editedColors,
    });

    if (customTheme) {
      themeEngine.applyTheme(customTheme.id);
      this.currentTheme = customTheme;
      this.availableThemes = themeEngine.getAllThemes();
    }
  }

  private exportTheme() {
    const themeJSON = JSON.stringify(this.currentTheme, null, 2);
    const blob = new Blob([themeJSON], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `${this.currentTheme.id}-theme.json`;
    a.click();
    URL.revokeObjectURL(url);
  }

  private renderColorInput(label: string, key: keyof ThemeColors) {
    const value = this.editedColors[key];
    
    // Extract approximate hex color from oklch for color picker
    const hexValue = this.oklchToHex(value);

    return html`
      <div class="color-input">
        <label>${label}</label>
        <input
          type="text"
          .value=${value}
          @input=${(e: Event) => {
            const input = e.target as HTMLInputElement;
            this.handleColorChange(key, input.value);
          }}
        />
        <input
          type="color"
          .value=${hexValue}
          @input=${(e: Event) => {
            const input = e.target as HTMLInputElement;
            const oklch = this.hexToOklch(input.value);
            this.handleColorChange(key, oklch);
          }}
        />
      </div>
    `;
  }

  private oklchToHex(oklch: string): string {
    // Simplified conversion - in production use a proper color conversion library
    return '#4169E1'; // Default blue
  }

  private hexToOklch(hex: string): string {
    // Simplified conversion - in production use a proper color conversion library
    return 'oklch(50% 0.15 265)'; // Default oklch blue
  }

  render() {
    return html`
      <div class="theme-builder">
        <div class="header">
          <h1>Theme Builder</h1>
          <p>Customize your design system theme with live preview</p>
        </div>

        <div class="layout">
          <aside class="sidebar">
            <div class="theme-selector">
              <h2>Preset Themes</h2>
              ${this.availableThemes.map(
                (theme) => html`
                  <button
                    class="theme-button ${theme.id === this.currentTheme.id ? 'active' : ''}"
                    @click=${() => this.handleThemeSelect(theme.id)}
                  >
                    <span class="theme-button-name">${theme.name}</span>
                    <span class="theme-button-desc">${theme.description}</span>
                  </button>
                `
              )}
            </div>

            <div class="actions">
              <button class="action-button primary" @click=${this.applyCustomTheme}>
                Apply Custom
              </button>
              <button class="action-button" @click=${this.exportTheme}>
                Export
              </button>
            </div>
          </aside>

          <main>
            <div class="color-editor">
              <div class="color-group">
                <h3>Background Colors</h3>
                ${this.renderColorInput('Primary', 'backgroundPrimary')}
                ${this.renderColorInput('Secondary', 'backgroundSecondary')}
                ${this.renderColorInput('Tertiary', 'backgroundTertiary')}
                ${this.renderColorInput('Inverse', 'backgroundInverse')}
              </div>

              <div class="color-group">
                <h3>Text Colors</h3>
                ${this.renderColorInput('Primary', 'textPrimary')}
                ${this.renderColorInput('Secondary', 'textSecondary')}
                ${this.renderColorInput('Link', 'textLink')}
                ${this.renderColorInput('Link Hover', 'textLinkHover')}
              </div>

              <div class="color-group">
                <h3>Interactive Colors</h3>
                ${this.renderColorInput('Primary', 'interactivePrimary')}
                ${this.renderColorInput('Hover', 'interactivePrimaryHover')}
                ${this.renderColorInput('Active', 'interactivePrimaryActive')}
                ${this.renderColorInput('Disabled', 'interactivePrimaryDisabled')}
              </div>

              <div class="color-group">
                <h3>Feedback Colors</h3>
                ${this.renderColorInput('Success', 'feedbackSuccess')}
                ${this.renderColorInput('Warning', 'feedbackWarning')}
                ${this.renderColorInput('Error', 'feedbackError')}
                ${this.renderColorInput('Info', 'feedbackInfo')}
              </div>
            </div>

            <div class="preview" style="
              --eva-background-primary: ${this.editedColors.backgroundPrimary};
              --eva-text-primary: ${this.editedColors.textPrimary};
              --eva-interactive-primary: ${this.editedColors.interactivePrimary};
              --eva-interactive-primary-hover: ${this.editedColors.interactivePrimaryHover};
              --eva-border-primary: ${this.editedColors.borderPrimary};
              --eva-feedback-success: ${this.editedColors.feedbackSuccess};
            ">
              <h2>Live Preview</h2>
              <div class="preview-components">
                <button class="preview-button primary">Primary Button</button>
                
                <div class="preview-card">
                  <h3>Card Component</h3>
                  <p>This is a preview of how your theme will look with card components.</p>
                </div>

                <div class="preview-alert success">
                  <strong>Success!</strong> Your theme has been applied.
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'eva-theme-builder': EvaThemeBuilder;
  }
}
