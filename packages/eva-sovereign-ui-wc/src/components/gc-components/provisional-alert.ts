/**
 * GC Provisional Alert Component
 * Alert banner for experimental/provisional features
 */

import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';

@customElement('eva-gc-provisional-alert')
export class EvaGCProvisionalAlert extends LitElement {
  static styles = css`
    :host {
      display: block;
      margin: var(--eva-spacing-4, 16px) 0;
    }

    .provisional-alert {
      background: var(--eva-feedback-warning-bg, #FFF8E1);
      border: 2px solid var(--eva-feedback-warning, #F39C12);
      border-left-width: 8px;
      border-radius: 4px;
      padding: var(--eva-spacing-4, 16px) var(--eva-spacing-6, 24px);
      display: flex;
      gap: var(--eva-spacing-3, 12px);
      align-items: flex-start;
    }

    .provisional-icon {
      flex-shrink: 0;
      width: 32px;
      height: 32px;
      color: var(--eva-feedback-warning, #F39C12);
    }

    .provisional-content {
      flex: 1;
    }

    .provisional-badge {
      display: inline-block;
      background: var(--eva-feedback-warning, #F39C12);
      color: var(--eva-text-inverse, #fff);
      padding: 4px 12px;
      border-radius: 16px;
      font-weight: 700;
      font-size: 14px;
      text-transform: uppercase;
      letter-spacing: 0.5px;
      margin-bottom: var(--eva-spacing-2, 8px);
    }

    .provisional-title {
      font-weight: 700;
      font-size: 18px;
      margin: var(--eva-spacing-2, 8px) 0;
      color: var(--eva-text-primary, #333);
    }

    .provisional-message {
      line-height: 1.6;
      color: var(--eva-text-primary, #333);
      margin: 0;
    }

    .provisional-link {
      color: var(--eva-text-link, #26374A);
      text-decoration: underline;
      font-weight: 600;
    }

    .provisional-link:hover {
      color: var(--eva-text-link-hover, #0c1a2b);
    }

    @media print {
      .provisional-alert {
        border: 3px solid #000;
      }
    }
  `;

  @property({ type: String })
  lang: 'en' | 'fr' = 'en';

  @property({ type: String })
  title = '';

  @property({ type: String })
  titleFr = '';

  @property({ type: String })
  feedbackUrl = '';

  render() {
    const isEnglish = this.lang === 'en';
    const displayTitle = this.title || (isEnglish ? this.title : (this.titleFr || this.title));
    const badgeText = isEnglish ? 'Experimental' : 'Expérimental';

    return html`
      <div class="provisional-alert" role="alert">
        <svg class="provisional-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"></path>
          <line x1="12" y1="9" x2="12" y2="13"></line>
          <line x1="12" y1="17" x2="12.01" y2="17"></line>
        </svg>
        <div class="provisional-content">
          <div class="provisional-badge">${badgeText}</div>
          ${displayTitle ? html`<div class="provisional-title">${displayTitle}</div>` : ''}
          <div class="provisional-message">
            <slot></slot>
            ${this.feedbackUrl
              ? html`
                  <p>
                    <a href="${this.feedbackUrl}" class="provisional-link">
                      ${isEnglish ? 'Send feedback about this feature' : 'Envoyer des commentaires sur cette fonctionnalité'}
                    </a>
                  </p>
                `
              : ''}
          </div>
        </div>
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'eva-gc-provisional-alert': EvaGCProvisionalAlert;
  }
}
