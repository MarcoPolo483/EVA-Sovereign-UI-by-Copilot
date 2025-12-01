/**
 * GC Site Menu Component
 * Government of Canada site navigation with mega-menu support
 * WCAG 2.1 AA compliant with keyboard navigation
 */

import { LitElement, html, css } from 'lit';
import { customElement, property, state } from 'lit/decorators.js';

export interface MenuItem {
  label: string;
  labelFr?: string;
  href?: string;
  children?: MenuItem[];
  description?: string;
  descriptionFr?: string;
}

@customElement('eva-gc-menu')
export class EvaGCMenu extends LitElement {
  static styles = css`
    :host {
      display: block;
      background: var(--eva-background-secondary, #f5f5f5);
      border-bottom: 4px solid var(--eva-brand-primary, #26374A);
    }

    .menu-container {
      max-width: var(--eva-layout-container-full, 1200px);
      margin: 0 auto;
      padding: 0 var(--eva-spacing-6, 24px);
    }

    .menu-list {
      list-style: none;
      margin: 0;
      padding: 0;
      display: flex;
      gap: var(--eva-spacing-2, 8px);
    }

    .menu-item {
      position: relative;
    }

    .menu-link {
      display: block;
      padding: var(--eva-spacing-4, 16px) var(--eva-spacing-4, 16px);
      color: var(--eva-text-primary, #333);
      text-decoration: none;
      font-weight: 600;
      font-size: 16px;
      transition: all 0.2s;
      border-bottom: 3px solid transparent;
    }

    .menu-link:hover {
      background: var(--eva-background-tertiary, #e5e5e5);
      color: var(--eva-brand-primary, #26374A);
    }

    .menu-link:focus {
      outline: 3px solid var(--eva-border-focus, #4169E1);
      outline-offset: -3px;
    }

    .menu-link.active {
      border-bottom-color: var(--eva-brand-primary, #26374A);
    }

    .menu-button {
      display: flex;
      align-items: center;
      gap: var(--eva-spacing-2, 8px);
      background: none;
      border: none;
      padding: var(--eva-spacing-4, 16px) var(--eva-spacing-4, 16px);
      color: var(--eva-text-primary, #333);
      font-weight: 600;
      font-size: 16px;
      cursor: pointer;
      transition: all 0.2s;
      border-bottom: 3px solid transparent;
    }

    .menu-button:hover {
      background: var(--eva-background-tertiary, #e5e5e5);
      color: var(--eva-brand-primary, #26374A);
    }

    .menu-button:focus {
      outline: 3px solid var(--eva-border-focus, #4169E1);
      outline-offset: -3px;
    }

    .menu-button[aria-expanded="true"] {
      border-bottom-color: var(--eva-brand-primary, #26374A);
      background: var(--eva-background-tertiary, #e5e5e5);
    }

    .menu-icon {
      width: 12px;
      height: 12px;
      border-left: 2px solid currentColor;
      border-bottom: 2px solid currentColor;
      transform: rotate(-45deg);
      transition: transform 0.2s;
    }

    .menu-button[aria-expanded="true"] .menu-icon {
      transform: rotate(135deg);
    }

    .submenu {
      position: absolute;
      top: 100%;
      left: 0;
      min-width: 250px;
      background: var(--eva-background-primary, #fff);
      border: 1px solid var(--eva-border-primary, #ddd);
      border-top: none;
      box-shadow: var(--eva-shadow-elevation-medium, 0 4px 6px rgba(0, 0, 0, 0.1));
      list-style: none;
      margin: 0;
      padding: 0;
      z-index: 1000;
      display: none;
    }

    .submenu.open {
      display: block;
    }

    .submenu.mega {
      left: 0;
      right: 0;
      min-width: 100%;
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
      gap: var(--eva-spacing-6, 24px);
      padding: var(--eva-spacing-6, 24px);
    }

    .submenu-item {
      border-bottom: 1px solid var(--eva-border-secondary, #e5e5e5);
    }

    .submenu-item:last-child {
      border-bottom: none;
    }

    .submenu-link {
      display: block;
      padding: var(--eva-spacing-3, 12px) var(--eva-spacing-4, 16px);
      color: var(--eva-text-primary, #333);
      text-decoration: none;
      transition: all 0.2s;
    }

    .submenu-link:hover {
      background: var(--eva-background-secondary, #f5f5f5);
      color: var(--eva-brand-primary, #26374A);
    }

    .submenu-link:focus {
      outline: 3px solid var(--eva-border-focus, #4169E1);
      outline-offset: -3px;
    }

    .submenu-description {
      display: block;
      font-size: 13px;
      color: var(--eva-text-secondary, #666);
      margin-top: 4px;
    }

    /* Mobile Toggle */
    .mobile-toggle {
      display: none;
      padding: var(--eva-spacing-4, 16px);
      background: none;
      border: none;
      cursor: pointer;
      font-size: 16px;
      font-weight: 600;
      color: var(--eva-text-primary, #333);
    }

    @media (max-width: 768px) {
      .mobile-toggle {
        display: block;
      }

      .menu-list {
        flex-direction: column;
        display: none;
      }

      .menu-list.open {
        display: flex;
      }

      .submenu {
        position: static;
        border: none;
        box-shadow: none;
        padding-left: var(--eva-spacing-4, 16px);
      }

      .submenu.mega {
        grid-template-columns: 1fr;
        padding: var(--eva-spacing-4, 16px);
      }
    }
  `;

  @property({ type: Array })
  items: MenuItem[] = [];

  @property({ type: String })
  lang: 'en' | 'fr' = 'en';

  @property({ type: String })
  ariaLabel = 'Main navigation';

  @property({ type: String })
  ariaLabelFr = 'Navigation principale';

  @state()
  private openMenuIndex: number | null = null;

  @state()
  private mobileOpen = false;

  private handleMenuToggle(index: number) {
    this.openMenuIndex = this.openMenuIndex === index ? null : index;
  }

  private handleMobileToggle() {
    this.mobileOpen = !this.mobileOpen;
  }

  private handleClickOutside = (e: MouseEvent) => {
    const target = e.target as HTMLElement;
    if (!target.closest('eva-gc-menu')) {
      this.openMenuIndex = null;
    }
  };

  connectedCallback() {
    super.connectedCallback();
    document.addEventListener('click', this.handleClickOutside);
  }

  disconnectedCallback() {
    super.disconnectedCallback();
    document.removeEventListener('click', this.handleClickOutside);
  }

  render() {
    const isEnglish = this.lang === 'en';
    const ariaLabelText = isEnglish ? this.ariaLabel : this.ariaLabelFr;

    return html`
      <nav aria-label="${ariaLabelText}">
        <div class="menu-container">
          <button class="mobile-toggle" @click=${this.handleMobileToggle}>
            ${this.mobileOpen ? '✕' : '☰'} Menu
          </button>
          <ul class="menu-list ${this.mobileOpen ? 'open' : ''}">
            ${this.items.map((item, index) => this.renderMenuItem(item, index, isEnglish))}
          </ul>
        </div>
      </nav>
    `;
  }

  private renderMenuItem(item: MenuItem, index: number, isEnglish: boolean) {
    const label = isEnglish ? item.label : (item.labelFr || item.label);
    const hasChildren = item.children && item.children.length > 0;

    if (!hasChildren) {
      return html`
        <li class="menu-item">
          <a href="${item.href || '#'}" class="menu-link">${label}</a>
        </li>
      `;
    }

    const isOpen = this.openMenuIndex === index;
    const isMega = item.children!.length > 6;

    return html`
      <li class="menu-item">
        <button
          class="menu-button"
          @click=${() => this.handleMenuToggle(index)}
          aria-expanded="${isOpen}"
          aria-haspopup="true"
        >
          ${label}
          <span class="menu-icon"></span>
        </button>
        <ul class="submenu ${isOpen ? 'open' : ''} ${isMega ? 'mega' : ''}">
          ${item.children!.map(child => this.renderSubmenuItem(child, isEnglish))}
        </ul>
      </li>
    `;
  }

  private renderSubmenuItem(item: MenuItem, isEnglish: boolean) {
    const label = isEnglish ? item.label : (item.labelFr || item.label);
    const description = isEnglish ? item.description : (item.descriptionFr || item.description);

    return html`
      <li class="submenu-item">
        <a href="${item.href || '#'}" class="submenu-link">
          ${label}
          ${description ? html`<span class="submenu-description">${description}</span>` : ''}
        </a>
      </li>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'eva-gc-menu': EvaGCMenu;
  }
}
