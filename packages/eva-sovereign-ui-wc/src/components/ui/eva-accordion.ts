/**
 * EVA Accordion Component
 * Collapsible content sections with Spark styling
 * Features: smooth animations, keyboard navigation, ARIA support
 */

import { EVABaseComponent } from '../../utils/base-component';
import { 
  modernColors,
  gcSpacing,
  gcTypography,
  transitions,
} from '../../tokens';

export class EVAAccordion extends EVABaseComponent {
  private items: EVAAccordionItem[] = [];
  private allowMultiple = false;

  static get observedAttributes() {
    return ['allow-multiple'];
  }

  connectedCallback() {
    super.connectedCallback();
    this.allowMultiple = this.getBoolAttr('allow-multiple');
    this.setupItems();
  }

  private setupItems() {
    const itemElements = this.querySelectorAll('eva-accordion-item');
    this.items = Array.from(itemElements) as EVAAccordionItem[];
    
    this.items.forEach((item, index) => {
      item.setAttribute('accordion-id', index.toString());
      item.addEventListener('toggle', ((e: CustomEvent) => {
        if (!this.allowMultiple && e.detail.open) {
          this.items.forEach((otherItem, otherIndex) => {
            if (otherIndex !== index) {
              otherItem.close();
            }
          });
        }
      }) as EventListener);
    });
  }

  protected render(): void {
    this.shadow.innerHTML = '';
    
    this.shadow.appendChild(this.createStyles(`
      :host {
        display: block;
        border-radius: ${gcSpacing[2]};
      }
    `));

    const slot = document.createElement('slot');
    this.shadow.appendChild(slot);
  }
}

export class EVAAccordionItem extends EVABaseComponent {
  private isOpen = false;
  private contentEl?: HTMLDivElement;
  private triggerEl?: HTMLButtonElement;

  connectedCallback() {
    super.connectedCallback();
    this.setupEventListeners();
  }

  private setupEventListeners() {
    this.shadow.addEventListener('click', (e) => {
      const target = e.target as HTMLElement;
      if (target.classList.contains('trigger')) {
        this.toggle();
      }
    });
  }

  public open() {
    if (!this.isOpen) {
      this.isOpen = true;
      this.render();
      this.emit('toggle', { open: true });
    }
  }

  public close() {
    if (this.isOpen) {
      this.isOpen = false;
      this.render();
      this.emit('toggle', { open: false });
    }
  }

  private toggle() {
    if (this.isOpen) {
      this.close();
    } else {
      this.open();
    }
  }

  protected render(): void {
    this.shadow.innerHTML = '';
    
    this.shadow.appendChild(this.createStyles(`
      :host {
        display: block;
        border-bottom: 1px solid ${modernColors.border};
      }

      :host(:last-child) {
        border-bottom: none;
      }

      .trigger {
        display: flex;
        width: 100%;
        align-items: flex-start;
        justify-content: space-between;
        gap: ${gcSpacing[4]};
        padding: ${gcSpacing[4]} 0;
        font-family: ${gcTypography.fontBody};
        font-size: 0.875rem;
        font-weight: 500;
        text-align: left;
        background: none;
        border: none;
        cursor: pointer;
        transition: ${transitions.all};
        border-radius: ${gcSpacing[2]};
        color: ${modernColors.foreground};
      }

      .trigger:hover {
        text-decoration: underline;
      }

      .trigger:focus-visible {
        outline: none;
        border-color: ${modernColors.ring};
        box-shadow: 0 0 0 3px color-mix(in srgb, ${modernColors.ring} 20%, transparent);
      }

      .trigger:disabled {
        pointer-events: none;
        opacity: 0.5;
      }

      .chevron {
        display: inline-block;
        width: 1rem;
        height: 1rem;
        flex-shrink: 0;
        transform: translateY(0.125rem);
        transition: transform 200ms;
        color: ${modernColors.mutedForeground};
      }

      .trigger[aria-expanded="true"] .chevron {
        transform: translateY(0.125rem) rotate(180deg);
      }

      .content {
        overflow: hidden;
        font-size: 0.875rem;
        transition: height 200ms ease-out;
      }

      .content[data-state="closed"] {
        height: 0;
        animation: accordion-up 200ms ease-out;
      }

      .content[data-state="open"] {
        animation: accordion-down 200ms ease-out;
      }

      @keyframes accordion-down {
        from {
          height: 0;
          opacity: 0;
        }
        to {
          height: var(--accordion-height);
          opacity: 1;
        }
      }

      @keyframes accordion-up {
        from {
          height: var(--accordion-height);
          opacity: 1;
        }
        to {
          height: 0;
          opacity: 0;
        }
      }

      .content-inner {
        padding-top: 0;
        padding-bottom: ${gcSpacing[4]};
      }

      @media (prefers-reduced-motion: reduce) {
        .trigger,
        .chevron,
        .content {
          transition-duration: 0.01ms !important;
          animation-duration: 0.01ms !important;
        }
      }
    `));

    const trigger = document.createElement('button');
    trigger.className = 'trigger';
    trigger.setAttribute('aria-expanded', this.isOpen.toString());
    trigger.setAttribute('type', 'button');

    const triggerSlot = document.createElement('slot');
    triggerSlot.name = 'trigger';
    trigger.appendChild(triggerSlot);

    const chevron = document.createElement('span');
    chevron.className = 'chevron';
    chevron.innerHTML = '▼';
    chevron.setAttribute('aria-hidden', 'true');
    trigger.appendChild(chevron);

    this.shadow.appendChild(trigger);

    const content = document.createElement('div');
    content.className = 'content';
    content.setAttribute('data-state', this.isOpen ? 'open' : 'closed');
    content.style.height = this.isOpen ? 'auto' : '0';

    const contentInner = document.createElement('div');
    contentInner.className = 'content-inner';
    const contentSlot = document.createElement('slot');
    contentInner.appendChild(contentSlot);
    content.appendChild(contentInner);

    this.shadow.appendChild(content);
    this.contentEl = content;
    this.triggerEl = trigger;
  }
}

customElements.define('eva-accordion', EVAAccordion);
customElements.define('eva-accordion-item', EVAAccordionItem);
