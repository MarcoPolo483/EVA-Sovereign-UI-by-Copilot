/**
 * GC Contextual Alert Component
 * Government of Canada alert messages (info/warning/error/success)
 * WCAG 2.1 AA compliant with proper ARIA roles
 */

import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';

export type AlertType = 'info' | 'success' | 'warning' | 'error';

@customElement('eva-gc-alert')
export class EvaGCAlert extends LitElement {
  static styles = css`
    :host {
      display: block;
      margin: var(--eva-spacing-4, 16px) 0;
    }

    .alert {
      padding: var(--eva-spacing-4, 16px) var(--eva-spacing-6, 24px);
      border-left: 4px solid;
      border-radius: 4px;
      display: flex;
      gap: var(--eva-spacing-3, 12px);
      align-items: flex-start;
      position: relative;
    }

    .alert-icon {
      flex-shrink: 0;
      width: 24px;
      height: 24px;
      margin-top: 2px;
    }

    .alert-content {
      flex: 1;
    }

    .alert-title {
      font-weight: 700;
      font-size: 18px;
      margin: 0 0 var(--eva-spacing-2, 8px) 0;
      line-height: 1.3;
    }

    .alert-message {
      margin: 0;
      line-height: 1.5;
    }

    .alert-close {
      position: absolute;
      top: var(--eva-spacing-3, 12px);
      right: var(--eva-spacing-3, 12px);
      background: none;
      border: none;
      cursor: pointer;
      padding: var(--eva-spacing-2, 8px);
      border-radius: 4px;
      color: inherit;
      opacity: 0.7;
      transition: all 0.2s;
    }

    .alert-close:hover {
      opacity: 1;
      background: rgba(0, 0, 0, 0.05);
    }

    .alert-close:focus {
      outline: 2px solid currentColor;
      outline-offset: 2px;
      opacity: 1;
    }

    /* Info Alert */
    .alert.info {
      background: var(--eva-feedback-info-bg, #E8F4FD);
      border-color: var(--eva-feedback-info, #0C71C3);
      color: var(--eva-feedback-info-text, #00315C);
    }

    /* Success Alert */
    .alert.success {
      background: var(--eva-feedback-success-bg, #E7F7E9);
      border-color: var(--eva-feedback-success, #2E8B57);
      color: var(--eva-feedback-success-text, #0C4525);
    }

    /* Warning Alert */
    .alert.warning {
      background: var(--eva-feedback-warning-bg, #FFF8E1);
      border-color: var(--eva-feedback-warning, #F39C12);
      color: var(--eva-feedback-warning-text, #5C3A00);
    }

    /* Error Alert */
    .alert.error {
      background: var(--eva-feedback-error-bg, #FDECEA);
      border-color: var(--eva-feedback-error, #D32F2F);
      color: var(--eva-feedback-error-text, #5C0A00);
    }

    /* Responsive */
    @media (max-width: 640px) {
      .alert {
        padding: var(--eva-spacing-3, 12px) var(--eva-spacing-4, 16px);
      }

      .alert-close {
        top: var(--eva-spacing-2, 8px);
        right: var(--eva-spacing-2, 8px);
      }
    }

    /* Print */
    @media print {
      .alert-close {
        display: none;
      }
    }
  `;

  @property({ type: String })
  type: AlertType = 'info';

  @property({ type: String })
  title = '';

  @property({ type: String })
  titleFr = '';

  @property({ type: String })
  lang: 'en' | 'fr' = 'en';

  @property({ type: Boolean })
  dismissible = false;

  private handleClose() {
    this.dispatchEvent(
      new CustomEvent('alert-close', {
        bubbles: true,
        composed: true,
      })
    );
    this.remove();
  }

  private getDefaultTitle(): string {
    const isEnglish = this.lang === 'en';
    
    switch (this.type) {
      case 'info':
        return isEnglish ? 'Information' : 'Information';
      case 'success':
        return isEnglish ? 'Success' : 'Succès';
      case 'warning':
        return isEnglish ? 'Warning' : 'Avertissement';
      case 'error':
        return isEnglish ? 'Error' : 'Erreur';
      default:
        return '';
    }
  }

  private getIcon() {
    switch (this.type) {
      case 'info':
        return html`
          <svg class="alert-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <circle cx="12" cy="12" r="10"></circle>
            <line x1="12" y1="16" x2="12" y2="12"></line>
            <line x1="12" y1="8" x2="12.01" y2="8"></line>
          </svg>
        `;
      case 'success':
        return html`
          <svg class="alert-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
            <polyline points="22 4 12 14.01 9 11.01"></polyline>
          </svg>
        `;
      case 'warning':
        return html`
          <svg class="alert-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"></path>
            <line x1="12" y1="9" x2="12" y2="13"></line>
            <line x1="12" y1="17" x2="12.01" y2="17"></line>
          </svg>
        `;
      case 'error':
        return html`
          <svg class="alert-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <circle cx="12" cy="12" r="10"></circle>
            <line x1="15" y1="9" x2="9" y2="15"></line>
            <line x1="9" y1="9" x2="15" y2="15"></line>
          </svg>
        `;
    }
  }

  private getRole() {
    return this.type === 'error' ? 'alert' : 'status';
  }

  private getAriaLive() {
    return this.type === 'error' ? 'assertive' : 'polite';
  }

  render() {
    const isEnglish = this.lang === 'en';
    const displayTitle = this.title || (isEnglish ? this.getDefaultTitle() : (this.titleFr || this.getDefaultTitle()));
    const closeLabel = isEnglish ? 'Close alert' : 'Fermer l\'alerte';

    return html`
      <div
        class="alert ${this.type}"
        role="${this.getRole()}"
        aria-live="${this.getAriaLive()}"
        aria-atomic="true"
      >
        ${this.getIcon()}
        <div class="alert-content">
          ${displayTitle ? html`<div class="alert-title">${displayTitle}</div>` : ''}
          <div class="alert-message">
            <slot></slot>
          </div>
        </div>
        ${this.dismissible
          ? html`
              <button
                class="alert-close"
                @click=${this.handleClose}
                aria-label="${closeLabel}"
              >
                ✕
              </button>
            `
          : ''}
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'eva-gc-alert': EvaGCAlert;
  }
}
