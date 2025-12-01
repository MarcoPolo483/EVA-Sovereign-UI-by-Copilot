import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';

/**
 * EVA GC Organization Profile Template
 * 
 * Template for displaying organization/department profiles with
 * mandate, services, leadership, and contact information.
 * 
 * @element eva-gc-organization-profile
 */
@customElement('eva-gc-organization-profile')
export class EvaGCOrganizationProfile extends LitElement {
  static override styles = css`
    :host {
      display: block;
      font-family: 'Lato', 'Noto Sans', sans-serif;
      min-height: 100vh;
      display: flex;
      flex-direction: column;
    }

    .org-wrapper {
      flex: 1;
      display: flex;
      flex-direction: column;
    }

    .org-banner {
      background: var(--gc-color-primary, #26374A);
      color: white;
      padding: 48px 24px;
    }

    .banner-container {
      max-width: 1200px;
      margin: 0 auto;
      display: flex;
      gap: 32px;
      align-items: center;
    }

    .org-logo {
      width: 100px;
      height: 100px;
      background: white;
      border-radius: 8px;
      flex-shrink: 0;
    }

    .org-info h1 {
      font-size: 36px;
      font-weight: 700;
      margin: 0 0 8px 0;
    }

    .org-tagline {
      font-size: 18px;
      opacity: 0.95;
    }

    .quick-links {
      background: var(--gc-color-background-light, #f5f5f5);
      padding: 24px;
      border-bottom: 1px solid var(--gc-color-border-default, #e0e0e0);
    }

    .links-container {
      max-width: 1200px;
      margin: 0 auto;
      display: flex;
      gap: 24px;
      flex-wrap: wrap;
    }

    .quick-link {
      padding: 12px 20px;
      background: white;
      border: 2px solid var(--gc-color-primary, #26374A);
      border-radius: 4px;
      color: var(--gc-color-primary, #26374A);
      text-decoration: none;
      font-weight: 700;
      transition: all 0.2s ease;
    }

    .quick-link:hover {
      background: var(--gc-color-primary, #26374A);
      color: white;
    }

    .org-content {
      max-width: 1200px;
      margin: 0 auto;
      padding: 40px 24px;
    }

    .content-grid {
      display: grid;
      grid-template-columns: 1fr 350px;
      gap: 40px;
    }

    .main-content {
      min-width: 0;
    }

    .sidebar {
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

    @media (max-width: 1024px) {
      .content-grid {
        grid-template-columns: 1fr;
      }

      .sidebar {
        position: static;
      }

      .banner-container {
        flex-direction: column;
        text-align: center;
      }
    }

    @media (max-width: 768px) {
      .org-banner {
        padding: 32px 16px;
      }

      .org-info h1 {
        font-size: 28px;
      }

      .org-content {
        padding: 24px 16px;
      }

      .links-container {
        flex-direction: column;
      }

      .quick-link {
        text-align: center;
      }
    }

    @media print {
      .org-banner {
        background: white;
        color: var(--gc-color-text-primary, #333333);
      }

      .quick-links,
      .sidebar {
        display: none;
      }

      .content-grid {
        grid-template-columns: 1fr;
      }
    }
  `;

  @property({ type: String })
  lang: 'en' | 'fr' = 'en';

  @property({ type: String, attribute: 'organization-name' })
  organizationName = '';

  @property({ type: String, attribute: 'organization-name-fr' })
  organizationNameFr = '';

  @property({ type: String })
  tagline = '';

  @property({ type: String, attribute: 'tagline-fr' })
  taglineFr = '';

  private get currentOrganizationName(): string {
    return this.lang === 'fr' && this.organizationNameFr ? this.organizationNameFr : this.organizationName;
  }

  private get currentTagline(): string {
    return this.lang === 'fr' && this.taglineFr ? this.taglineFr : this.tagline;
  }

  override render() {
    return html`
      <div class="org-wrapper">
        <slot name="header"></slot>
        <slot name="breadcrumbs"></slot>

        <section class="org-banner">
          <div class="banner-container">
            <div class="org-logo">
              <slot name="logo"></slot>
            </div>
            <div class="org-info">
              <h1>${this.currentOrganizationName}</h1>
              ${this.tagline ? html`
                <p class="org-tagline">${this.currentTagline}</p>
              ` : ''}
            </div>
          </div>
        </section>

        <section class="quick-links">
          <div class="links-container">
            <slot name="quick-links"></slot>
          </div>
        </section>

        <div class="org-content">
          <div class="content-grid">
            <main class="main-content" role="main">
              <slot></slot>
            </main>

            <aside class="sidebar">
              <slot name="sidebar"></slot>
            </aside>
          </div>
        </div>

        <slot name="footer"></slot>
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'eva-gc-organization-profile': EvaGCOrganizationProfile;
  }
}
