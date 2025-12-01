/**
 * GC Expand/Collapse Component (Accordion)
 * Collapsible content sections for Government of Canada
 */

import { LitElement, html, css } from 'lit';
import { customElement, property, state } from 'lit/decorators.js';

export interface AccordionItem {
  id: string;
  title: string;
  titleFr?: string;
  content?: string;
  contentFr?: string;
  expanded?: boolean;
}

@customElement('eva-gc-accordion')
export class EvaGCAccordion extends LitElement {
  static styles = css`
    :host {
      display: block;
      margin: var(--eva-spacing-4, 16px) 0;
    }

    .accordion {
      border: 1px solid var(--eva-border-primary, #ddd);
      border-radius: 8px;
      overflow: hidden;
    }

    .accordion-item {
      border-bottom: 1px solid var(--eva-border-primary, #ddd);
    }

    .accordion-item:last-child {
      border-bottom: none;
    }

    .accordion-header {
      width: 100%;
      background: var(--eva-background-secondary, #f5f5f5);
      border: none;
      padding: var(--eva-spacing-4, 16px) var(--eva-spacing-6, 24px);
      text-align: left;
      cursor: pointer;
      display: flex;
      justify-content: space-between;
      align-items: center;
      gap: var(--eva-spacing-3, 12px);
      transition: background 0.2s;
      font-size: 16px;
      font-weight: 600;
      color: var(--eva-text-primary, #333);
    }

    .accordion-header:hover {
      background: var(--eva-background-tertiary, #e5e5e5);
    }

    .accordion-header:focus {
      outline: 3px solid var(--eva-border-focus, #4169E1);
      outline-offset: -3px;
    }

    .accordion-header[aria-expanded="true"] {
      background: var(--eva-background-primary, #fff);
      border-bottom: 1px solid var(--eva-border-primary, #ddd);
    }

    .accordion-title {
      flex: 1;
    }

    .accordion-icon {
      width: 20px;
      height: 20px;
      flex-shrink: 0;
      transition: transform 0.2s;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    .accordion-icon svg {
      width: 16px;
      height: 16px;
    }

    .accordion-header[aria-expanded="true"] .accordion-icon {
      transform: rotate(180deg);
    }

    .accordion-content {
      max-height: 0;
      overflow: hidden;
      transition: max-height 0.3s ease-out;
    }

    .accordion-content.expanded {
      max-height: 2000px;
      transition: max-height 0.3s ease-in;
    }

    .accordion-body {
      padding: var(--eva-spacing-4, 16px) var(--eva-spacing-6, 24px);
      color: var(--eva-text-primary, #333);
      line-height: 1.6;
    }

    .accordion-body ::slotted(p:first-child) {
      margin-top: 0;
    }

    .accordion-body ::slotted(p:last-child) {
      margin-bottom: 0;
    }

    /* Single expand mode */
    :host([single-expand]) .accordion-item:not(:first-child) {
      border-top: 1px solid var(--eva-border-primary, #ddd);
    }

    @media (max-width: 640px) {
      .accordion-header {
        padding: var(--eva-spacing-3, 12px) var(--eva-spacing-4, 16px);
        font-size: 15px;
      }

      .accordion-body {
        padding: var(--eva-spacing-3, 12px) var(--eva-spacing-4, 16px);
      }
    }
  `;

  @property({ type: Array })
  items: AccordionItem[] = [];

  @property({ type: String })
  lang: 'en' | 'fr' = 'en';

  @property({ type: Boolean, attribute: 'single-expand' })
  singleExpand = false;

  @property({ type: Boolean, attribute: 'expand-all' })
  expandAll = false;

  @state()
  private expandedItems = new Set<string>();

  connectedCallback() {
    super.connectedCallback();
    
    // Initialize expanded items
    if (this.expandAll) {
      this.items.forEach(item => this.expandedItems.add(item.id));
    } else {
      this.items.forEach(item => {
        if (item.expanded) {
          this.expandedItems.add(item.id);
        }
      });
    }
  }

  private toggleItem(itemId: string) {
    if (this.singleExpand) {
      // In single expand mode, close others
      if (this.expandedItems.has(itemId)) {
        this.expandedItems.clear();
      } else {
        this.expandedItems.clear();
        this.expandedItems.add(itemId);
      }
    } else {
      // In multi-expand mode, toggle current
      if (this.expandedItems.has(itemId)) {
        this.expandedItems.delete(itemId);
      } else {
        this.expandedItems.add(itemId);
      }
    }

    this.requestUpdate();

    this.dispatchEvent(
      new CustomEvent('accordion-change', {
        detail: {
          itemId,
          expanded: this.expandedItems.has(itemId),
          expandedItems: Array.from(this.expandedItems),
        },
        bubbles: true,
        composed: true,
      })
    );
  }

  private isExpanded(itemId: string): boolean {
    return this.expandedItems.has(itemId);
  }

  render() {
    const isEnglish = this.lang === 'en';

    return html`
      <div class="accordion">
        ${this.items.map(
          item => html`
            <div class="accordion-item">
              <button
                class="accordion-header"
                aria-expanded="${this.isExpanded(item.id)}"
                aria-controls="content-${item.id}"
                @click=${() => this.toggleItem(item.id)}
              >
                <span class="accordion-title">
                  ${isEnglish ? item.title : (item.titleFr || item.title)}
                </span>
                <span class="accordion-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <polyline points="6 9 12 15 18 9"></polyline>
                  </svg>
                </span>
              </button>
              <div
                id="content-${item.id}"
                class="accordion-content ${this.isExpanded(item.id) ? 'expanded' : ''}"
                role="region"
                aria-labelledby="header-${item.id}"
              >
                <div class="accordion-body">
                  ${item.content || item.contentFr
                    ? html`<div>${isEnglish ? item.content : (item.contentFr || item.content)}</div>`
                    : html`<slot name="${item.id}"></slot>`}
                </div>
              </div>
            </div>
          `
        )}
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'eva-gc-accordion': EvaGCAccordion;
  }
}
