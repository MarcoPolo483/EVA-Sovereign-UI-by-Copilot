/**
 * GC Breadcrumbs Component
 * Government of Canada breadcrumb navigation with structured data
 * WCAG 2.1 AA compliant with keyboard navigation and screen reader support
 */

import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';

export interface BreadcrumbItem {
  label: string;
  labelFr?: string;
  href?: string;
  current?: boolean;
}

@customElement('eva-gc-breadcrumbs')
export class EvaGCBreadcrumbs extends LitElement {
  static styles = css`
    :host {
      display: block;
    }

    .breadcrumbs {
      padding: var(--eva-spacing-4, 16px) 0;
    }

    .breadcrumb-nav {
      max-width: var(--eva-layout-container-full, 1200px);
      margin: 0 auto;
      padding: 0 var(--eva-spacing-6, 24px);
    }

    .breadcrumb-list {
      list-style: none;
      margin: 0;
      padding: 0;
      display: flex;
      flex-wrap: wrap;
      gap: var(--eva-spacing-2, 8px);
      align-items: center;
    }

    .breadcrumb-item {
      display: flex;
      align-items: center;
      gap: var(--eva-spacing-2, 8px);
      font-size: 14px;
      line-height: 1.5;
    }

    .breadcrumb-item::after {
      content: '›';
      color: var(--eva-text-secondary, #666);
      font-weight: 700;
      font-size: 16px;
      user-select: none;
    }

    .breadcrumb-item:last-child::after {
      content: '';
    }

    .breadcrumb-link {
      color: var(--eva-text-link, #26374A);
      text-decoration: underline;
      transition: color 0.2s;
    }

    .breadcrumb-link:hover {
      color: var(--eva-text-link-hover, #0c1a2b);
    }

    .breadcrumb-link:focus {
      outline: 3px solid var(--eva-border-focus, #4169E1);
      outline-offset: 2px;
      border-radius: 2px;
    }

    .breadcrumb-current {
      font-weight: 600;
      color: var(--eva-text-primary, #333);
    }

    /* Responsive */
    @media (max-width: 640px) {
      .breadcrumb-list {
        font-size: 13px;
      }

      .breadcrumb-item {
        gap: var(--eva-spacing-1, 4px);
      }
    }

    /* Print */
    @media print {
      .breadcrumbs {
        padding: var(--eva-spacing-2, 8px) 0;
      }

      .breadcrumb-link {
        color: #000;
      }
    }
  `;

  @property({ type: Array })
  items: BreadcrumbItem[] = [];

  @property({ type: String })
  lang: 'en' | 'fr' = 'en';

  @property({ type: String })
  ariaLabel = 'Breadcrumb';

  @property({ type: String })
  ariaLabelFr = 'Fil d\'Ariane';

  private generateStructuredData(): string {
    const baseUrl = window.location.origin;
    const itemListElement = this.items
      .filter(item => item.href)
      .map((item, index) => ({
        '@type': 'ListItem',
        position: index + 1,
        name: item.label,
        item: item.href?.startsWith('http') ? item.href : `${baseUrl}${item.href}`,
      }));

    const structuredData = {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement,
    };

    return JSON.stringify(structuredData);
  }

  render() {
    const isEnglish = this.lang === 'en';
    const ariaLabelText = isEnglish ? this.ariaLabel : this.ariaLabelFr;

    return html`
      <div class="breadcrumbs">
        <nav class="breadcrumb-nav" aria-label="${ariaLabelText}">
          <ol class="breadcrumb-list">
            ${this.items.map(
              (item, index) => html`
                <li class="breadcrumb-item">
                  ${item.href && !item.current
                    ? html`
                        <a href="${item.href}" class="breadcrumb-link">
                          ${isEnglish ? item.label : (item.labelFr || item.label)}
                        </a>
                      `
                    : html`
                        <span class="breadcrumb-current" aria-current="page">
                          ${isEnglish ? item.label : (item.labelFr || item.label)}
                        </span>
                      `}
                </li>
              `
            )}
          </ol>
        </nav>
      </div>

      <!-- Structured Data -->
      <script type="application/ld+json">
        ${this.generateStructuredData()}
      </script>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'eva-gc-breadcrumbs': EvaGCBreadcrumbs;
  }
}
