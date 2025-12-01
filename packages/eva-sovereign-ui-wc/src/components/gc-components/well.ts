/**
 * GC Well Component
 * Highlighted content container for Government of Canada
 */

import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';

export type WellVariant = 'default' | 'primary' | 'success' | 'info' | 'warning';

@customElement('eva-gc-well')
export class EvaGCWell extends LitElement {
  static styles = css`
    :host {
      display: block;
      margin: var(--eva-spacing-4, 16px) 0;
    }

    .well {
      padding: var(--eva-spacing-6, 24px);
      border-radius: 8px;
      border: 1px solid;
    }

    .well.default {
      background: var(--eva-background-secondary, #f5f5f5);
      border-color: var(--eva-border-primary, #ddd);
    }

    .well.primary {
      background: oklch(95% 0.02 265);
      border-color: var(--eva-brand-primary, #26374A);
      border-left-width: 4px;
    }

    .well.success {
      background: var(--eva-feedback-success-bg, #E7F7E9);
      border-color: var(--eva-feedback-success, #2E8B57);
      border-left-width: 4px;
    }

    .well.info {
      background: var(--eva-feedback-info-bg, #E8F4FD);
      border-color: var(--eva-feedback-info, #0C71C3);
      border-left-width: 4px;
    }

    .well.warning {
      background: var(--eva-feedback-warning-bg, #FFF8E1);
      border-color: var(--eva-feedback-warning, #F39C12);
      border-left-width: 4px;
    }

    .well-header {
      display: flex;
      align-items: center;
      gap: var(--eva-spacing-3, 12px);
      margin-bottom: var(--eva-spacing-3, 12px);
    }

    .well-icon {
      width: 24px;
      height: 24px;
      flex-shrink: 0;
    }

    .well.primary .well-icon {
      color: var(--eva-brand-primary, #26374A);
    }

    .well.success .well-icon {
      color: var(--eva-feedback-success, #2E8B57);
    }

    .well.info .well-icon {
      color: var(--eva-feedback-info, #0C71C3);
    }

    .well.warning .well-icon {
      color: var(--eva-feedback-warning, #F39C12);
    }

    .well-title {
      font-size: 20px;
      font-weight: 700;
      margin: 0;
      color: var(--eva-text-primary, #333);
    }

    .well-content {
      color: var(--eva-text-primary, #333);
      line-height: 1.6;
    }

    .well-content ::slotted(p:first-child) {
      margin-top: 0;
    }

    .well-content ::slotted(p:last-child) {
      margin-bottom: 0;
    }

    @media (max-width: 640px) {
      .well {
        padding: var(--eva-spacing-4, 16px);
      }
    }
  `;

  @property({ type: String })
  variant: WellVariant = 'default';

  @property({ type: String })
  title = '';

  @property({ type: String })
  titleFr = '';

  @property({ type: String })
  lang: 'en' | 'fr' = 'en';

  @property({ type: Boolean })
  showIcon = true;

  private getIcon() {
    switch (this.variant) {
      case 'primary':
        return html`
          <svg class="well-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <circle cx="12" cy="12" r="10"></circle>
            <line x1="12" y1="16" x2="12" y2="12"></line>
            <line x1="12" y1="8" x2="12.01" y2="8"></line>
          </svg>
        `;
      case 'success':
        return html`
          <svg class="well-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
            <polyline points="22 4 12 14.01 9 11.01"></polyline>
          </svg>
        `;
      case 'info':
        return html`
          <svg class="well-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <circle cx="12" cy="12" r="10"></circle>
            <line x1="12" y1="16" x2="12" y2="12"></line>
            <line x1="12" y1="8" x2="12.01" y2="8"></line>
          </svg>
        `;
      case 'warning':
        return html`
          <svg class="well-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"></path>
            <line x1="12" y1="9" x2="12" y2="13"></line>
            <line x1="12" y1="17" x2="12.01" y2="17"></line>
          </svg>
        `;
      default:
        return null;
    }
  }

  render() {
    const isEnglish = this.lang === 'en';
    const displayTitle = this.title || (isEnglish ? this.title : (this.titleFr || this.title));
    const showHeader = displayTitle || (this.showIcon && this.variant !== 'default');

    return html`
      <div class="well ${this.variant}">
        ${showHeader
          ? html`
              <div class="well-header">
                ${this.showIcon && this.variant !== 'default' ? this.getIcon() : ''}
                ${displayTitle ? html`<h3 class="well-title">${displayTitle}</h3>` : ''}
              </div>
            `
          : ''}
        <div class="well-content">
          <slot></slot>
        </div>
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'eva-gc-well': EvaGCWell;
  }
}
