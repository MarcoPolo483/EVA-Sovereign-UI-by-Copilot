import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';

/**
 * EVA GC Institutional Profile Template
 * 
 * Template for government institution profile pages with mandate,
 * organizational structure, minister info, and key services.
 * 
 * @element eva-gc-institutional-profile
 */
@customElement('eva-gc-institutional-profile')
export class EvaGCInstitutionalProfile extends LitElement {
  static override styles = css`
    :host {
      display: block;
      font-family: 'Lato', 'Noto Sans', sans-serif;
      min-height: 100vh;
      display: flex;
      flex-direction: column;
    }

    .profile-wrapper {
      flex: 1;
      display: flex;
      flex-direction: column;
    }

    .profile-banner {
      background: var(--gc-color-primary, #26374A);
      color: white;
      padding: 40px 24px;
    }

    .banner-container {
      max-width: 1200px;
      margin: 0 auto;
      display: grid;
      grid-template-columns: auto 1fr;
      gap: 32px;
      align-items: center;
    }

    .institution-logo {
      width: 120px;
      height: 120px;
      background: white;
      border-radius: 4px;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    .institution-info h1 {
      font-size: 32px;
      font-weight: 700;
      margin: 0 0 8px 0;
    }

    .institution-tagline {
      font-size: 18px;
      opacity: 0.9;
    }

    .profile-content {
      max-width: 1200px;
      margin: 0 auto;
      padding: 40px 24px;
    }

    .profile-grid {
      display: grid;
      grid-template-columns: 1fr 350px;
      gap: 40px;
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

    @media (max-width: 1024px) {
      .profile-grid {
        grid-template-columns: 1fr;
      }

      .sidebar {
        position: static;
      }

      .banner-container {
        grid-template-columns: 1fr;
        text-align: center;
      }

      .institution-logo {
        margin: 0 auto;
      }
    }

    @media (max-width: 768px) {
      .profile-banner {
        padding: 24px 16px;
      }

      .institution-info h1 {
        font-size: 24px;
      }

      .profile-content {
        padding: 24px 16px;
      }
    }

    @media print {
      .profile-banner {
        background: white;
        color: var(--gc-color-text-primary, #333333);
      }

      .sidebar {
        display: none;
      }

      .profile-grid {
        grid-template-columns: 1fr;
      }
    }
  `;

  @property({ type: String })
  lang: 'en' | 'fr' = 'en';

  @property({ type: String, attribute: 'institution-name' })
  institutionName = '';

  @property({ type: String, attribute: 'institution-name-fr' })
  institutionNameFr = '';

  @property({ type: String })
  tagline = '';

  @property({ type: String, attribute: 'tagline-fr' })
  taglineFr = '';

  @property({ type: String, attribute: 'logo-url' })
  logoUrl = '';

  private get currentInstitutionName(): string {
    return this.lang === 'fr' && this.institutionNameFr ? this.institutionNameFr : this.institutionName;
  }

  private get currentTagline(): string {
    return this.lang === 'fr' && this.taglineFr ? this.taglineFr : this.tagline;
  }

  override render() {
    return html`
      <div class="profile-wrapper">
        <slot name="header"></slot>
        <slot name="breadcrumbs"></slot>

        <section class="profile-banner">
          <div class="banner-container">
            ${this.logoUrl ? html`
              <div class="institution-logo">
                <img src="${this.logoUrl}" alt="${this.currentInstitutionName}" style="max-width: 100%; max-height: 100%;" />
              </div>
            ` : ''}
            <div class="institution-info">
              <h1>${this.currentInstitutionName}</h1>
              ${this.tagline ? html`
                <p class="institution-tagline">${this.currentTagline}</p>
              ` : ''}
            </div>
          </div>
        </section>

        <div class="profile-content">
          <div class="profile-grid">
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
    'eva-gc-institutional-profile': EvaGCInstitutionalProfile;
  }
}
