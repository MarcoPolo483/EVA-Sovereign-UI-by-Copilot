import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';

/**
 * EVA GC Service Initiation Template
 * 
 * Template for transactional service start pages with eligibility,
 * requirements, and application process information.
 * 
 * @element eva-gc-service-initiation
 * 
 * @example
 * ```html
 * <eva-gc-service-initiation
 *   service-name="Apply for Benefits"
 *   lang="en">
 * </eva-gc-service-initiation>
 * ```
 */
@customElement('eva-gc-service-initiation')
export class EvaGCServiceInitiation extends LitElement {
  static override styles = css`
    :host {
      display: block;
      font-family: 'Lato', 'Noto Sans', sans-serif;
      min-height: 100vh;
      display: flex;
      flex-direction: column;
    }

    .service-wrapper {
      flex: 1;
      display: flex;
      flex-direction: column;
    }

    .service-header {
      background: var(--gc-color-primary, #26374A);
      color: white;
      padding: 32px 24px;
    }

    .header-container {
      max-width: 1200px;
      margin: 0 auto;
    }

    .service-name {
      font-size: 32px;
      font-weight: 700;
      margin: 0;
    }

    .content-layout {
      display: grid;
      grid-template-columns: 1fr 350px;
      gap: 40px;
      max-width: 1200px;
      margin: 0 auto;
      padding: 40px 24px;
    }

    .main-content {
      min-width: 0;
    }

    .sidebar {
      background: var(--gc-color-background-light, #f5f5f5);
      border: 1px solid var(--gc-color-border-default, #e0e0e0);
      border-radius: 4px;
      padding: 24px;
      align-self: start;
      position: sticky;
      top: 20px;
    }

    .section {
      margin-bottom: 40px;
    }

    .section-title {
      font-size: 28px;
      font-weight: 700;
      color: var(--gc-color-text-primary, #333333);
      margin: 0 0 16px 0;
      padding-bottom: 12px;
      border-bottom: 3px solid var(--gc-color-primary, #26374A);
    }

    .section-content {
      font-size: 18px;
      line-height: 1.6;
      color: var(--gc-color-text-primary, #333333);
    }

    .checklist {
      list-style: none;
      padding: 0;
      margin: 16px 0;
    }

    .checklist li {
      padding: 12px 0 12px 40px;
      position: relative;
      border-bottom: 1px solid var(--gc-color-border-default, #e0e0e0);
    }

    .checklist li:before {
      content: '✓';
      position: absolute;
      left: 0;
      width: 28px;
      height: 28px;
      background: var(--gc-color-success, #2e7d32);
      color: white;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      font-weight: 700;
    }

    .start-button {
      display: inline-flex;
      align-items: center;
      gap: 8px;
      padding: 16px 32px;
      background: var(--gc-color-primary, #26374A);
      color: white;
      border: none;
      border-radius: 4px;
      font-size: 18px;
      font-weight: 700;
      cursor: pointer;
      text-decoration: none;
      transition: background 0.2s ease;
      margin-top: 24px;
    }

    .start-button:hover {
      background: var(--gc-color-primary-dark, #1c2c3a);
    }

    .sidebar-title {
      font-size: 20px;
      font-weight: 700;
      color: var(--gc-color-text-primary, #333333);
      margin: 0 0 16px 0;
    }

    .sidebar-content {
      font-size: 16px;
      line-height: 1.5;
    }

    @media (max-width: 1024px) {
      .content-layout {
        grid-template-columns: 1fr;
      }

      .sidebar {
        position: static;
      }
    }

    @media (max-width: 768px) {
      .service-header {
        padding: 24px 16px;
      }

      .service-name {
        font-size: 24px;
      }

      .content-layout {
        padding: 24px 16px;
      }

      .section-title {
        font-size: 24px;
      }

      .section-content {
        font-size: 16px;
      }
    }

    @media print {
      .service-header {
        background: white;
        color: var(--gc-color-text-primary, #333333);
      }

      .sidebar {
        display: none;
      }

      .content-layout {
        grid-template-columns: 1fr;
      }

      .start-button {
        display: none;
      }
    }
  `;

  /** Language (en or fr) */
  @property({ type: String })
  lang: 'en' | 'fr' = 'en';

  /** Service name */
  @property({ type: String, attribute: 'service-name' })
  serviceName = '';

  /** French service name */
  @property({ type: String, attribute: 'service-name-fr' })
  serviceNameFr = '';

  /** Start URL */
  @property({ type: String, attribute: 'start-url' })
  startUrl = '';

  private get currentServiceName(): string {
    return this.lang === 'fr' && this.serviceNameFr ? this.serviceNameFr : this.serviceName;
  }

  private get labels() {
    return {
      startApplication: this.lang === 'fr' ? 'Commencer la demande' : 'Start application',
      estimatedTime: this.lang === 'fr' ? 'Temps estimé' : 'Estimated time',
      getHelp: this.lang === 'fr' ? 'Obtenir de l\'aide' : 'Get help'
    };
  }

  override render() {
    return html`
      <div class="service-wrapper">
        <slot name="header"></slot>
        <slot name="breadcrumbs"></slot>

        <header class="service-header">
          <div class="header-container">
            <h1 class="service-name">${this.currentServiceName}</h1>
          </div>
        </header>

        <div class="content-layout">
          <main class="main-content" role="main">
            <slot></slot>

            ${this.startUrl ? html`
              <a href="${this.startUrl}" class="start-button">
                ${this.labels.startApplication}
                <svg width="20" height="20" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                  <path d="M5 12h14m-7-7l7 7-7 7"/>
                </svg>
              </a>
            ` : ''}
          </main>

          <aside class="sidebar">
            <slot name="sidebar"></slot>
          </aside>
        </div>

        <slot name="footer"></slot>
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'eva-gc-service-initiation': EvaGCServiceInitiation;
  }
}
