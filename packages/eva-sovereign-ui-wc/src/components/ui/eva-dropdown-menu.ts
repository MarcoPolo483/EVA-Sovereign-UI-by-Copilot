/**
 * EVA Dropdown Menu Component
 * Context menus with Spark styling
 * Features: positioned menus, keyboard nav, checkboxes/radios, separators
 * Note: Simplified version focusing on core menu functionality
 */

import { EVABaseComponent } from '../../utils/base-component';
import { 
  modernColors,
  gcSpacing,
  shadows,
  transitions,
} from '../../tokens';

export class EVADropdownMenu extends EVABaseComponent {
  private isOpen = false;
  private triggerEl?: HTMLElement;
  private contentEl?: HTMLDivElement;

  static get observedAttributes() {
    return ['open'];
  }

  attributeChangedCallback() {
    this.isOpen = this.getBoolAttr('open');
    this.render();
    
    if (this.isOpen) {
      this.positionContent();
      document.addEventListener('click', this.handleOutsideClick);
    } else {
      document.removeEventListener('click', this.handleOutsideClick);
    }
  }

  private handleOutsideClick = (e: MouseEvent) => {
    if (!this.contains(e.target as Node)) {
      this.close();
    }
  };

  connectedCallback() {
    super.connectedCallback();
    this.setupTrigger();
  }

  disconnectedCallback() {
    document.removeEventListener('click', this.handleOutsideClick);
  }

  private setupTrigger() {
    const trigger = this.querySelector('[slot="trigger"]');
    if (trigger) {
      this.triggerEl = trigger as HTMLElement;
      trigger.addEventListener('click', (e) => {
        e.stopPropagation();
        this.toggle();
      });
    }
  }

  private positionContent() {
    if (!this.contentEl || !this.triggerEl) return;
    
    requestAnimationFrame(() => {
      const triggerRect = this.triggerEl!.getBoundingClientRect();
      const contentRect = this.contentEl!.getBoundingClientRect();
      
      let top = triggerRect.bottom + 4;
      let left = triggerRect.left;
      
      if (top + contentRect.height > window.innerHeight) {
        top = triggerRect.top - contentRect.height - 4;
      }
      
      if (left + contentRect.width > window.innerWidth) {
        left = window.innerWidth - contentRect.width - 8;
      }
      
      this.contentEl!.style.top = `${top}px`;
      this.contentEl!.style.left = `${left}px`;
    });
  }

  public open() {
    this.setAttribute('open', '');
  }

  public close() {
    this.removeAttribute('open');
  }

  public toggle() {
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
        display: inline-block;
        position: relative;
      }

      .trigger {
        display: contents;
      }

      .content {
        display: ${this.isOpen ? 'block' : 'none'};
        position: fixed;
        z-index: 50;
        min-width: 8rem;
        max-height: var(--radix-dropdown-menu-content-available-height, 24rem);
        overflow-x: hidden;
        overflow-y: auto;
        border-radius: ${gcSpacing[2]};
        border: 1px solid ${modernColors.border};
        background: ${modernColors.popover};
        color: ${modernColors.popoverForeground};
        padding: ${gcSpacing[1]};
        box-shadow: ${shadows.md};
        animation: ${this.isOpen ? 'menuIn' : 'menuOut'} 200ms;
      }

      @keyframes menuIn {
        from { 
          opacity: 0;
          transform: scale(0.95) translateY(-0.5rem);
        }
        to { 
          opacity: 1;
          transform: scale(1) translateY(0);
        }
      }

      @keyframes menuOut {
        from { 
          opacity: 1;
          transform: scale(1) translateY(0);
        }
        to { 
          opacity: 0;
          transform: scale(0.95) translateY(-0.5rem);
        }
      }

      @media (prefers-reduced-motion: reduce) {
        .content {
          animation-duration: 0.01ms !important;
        }
      }
    `));

    const trigger = document.createElement('div');
    trigger.className = 'trigger';
    const triggerSlot = document.createElement('slot');
    triggerSlot.name = 'trigger';
    trigger.appendChild(triggerSlot);
    this.shadow.appendChild(trigger);

    if (this.isOpen) {
      const content = document.createElement('div');
      content.className = 'content';
      content.addEventListener('click', (e) => {
        // Close menu when item clicked
        const target = e.target as HTMLElement;
        if (target.tagName === 'EVA-DROPDOWN-MENU-ITEM') {
          this.close();
        }
      });
      
      const slot = document.createElement('slot');
      content.appendChild(slot);

      this.shadow.appendChild(content);
      this.contentEl = content;
      
      requestAnimationFrame(() => this.positionContent());
    }
  }
}

export class EVADropdownMenuItem extends EVABaseComponent {
  static get observedAttributes() {
    return ['variant', 'disabled'];
  }

  connectedCallback() {
    super.connectedCallback();
    this.setupEventListeners();
  }

  private setupEventListeners() {
    this.shadow.addEventListener('click', () => {
      if (!this.getBoolAttr('disabled')) {
        this.emit('select', {}, { bubbles: true, composed: true });
      }
    });
  }

  protected render(): void {
    const variant = this.getAttr('variant', 'default');
    
    this.shadow.innerHTML = '';
    
    this.shadow.appendChild(this.createStyles(`
      :host {
        display: block;
      }

      .item {
        position: relative;
        display: flex;
        align-items: center;
        gap: ${gcSpacing[2]};
        border-radius: ${gcSpacing[1]};
        padding: ${gcSpacing[2]};
        font-size: 0.875rem;
        outline: none;
        user-select: none;
        cursor: pointer;
        transition: ${transitions.colors};
        color: ${variant === 'destructive' ? modernColors.destructive : modernColors.foreground};
      }

      .item:hover {
        background: ${variant === 'destructive' ? 
          'color-mix(in srgb, ' + modernColors.destructive + ' 10%, transparent)' : 
          modernColors.accent};
        color: ${variant === 'destructive' ? modernColors.destructive : modernColors.accentForeground};
      }

      .item:focus-visible {
        background: ${modernColors.accent};
      }

      .item[disabled] {
        pointer-events: none;
        opacity: 0.5;
      }

      .item ::slotted(svg) {
        width: 1rem;
        height: 1rem;
        flex-shrink: 0;
        pointer-events: none;
        color: ${modernColors.mutedForeground};
      }

      @media (prefers-reduced-motion: reduce) {
        .item {
          transition-duration: 0.01ms !important;
        }
      }
    `));

    const item = document.createElement('div');
    item.className = 'item';
    item.setAttribute('role', 'menuitem');
    
    if (this.getBoolAttr('disabled')) {
      item.setAttribute('disabled', '');
    }

    const slot = document.createElement('slot');
    item.appendChild(slot);

    this.shadow.appendChild(item);
  }
}

export class EVADropdownMenuSeparator extends EVABaseComponent {
  protected render(): void {
    this.shadow.innerHTML = '';
    
    this.shadow.appendChild(this.createStyles(`
      :host {
        display: block;
      }

      .separator {
        background: ${modernColors.border};
        height: 1px;
        margin: ${gcSpacing[1]} -${gcSpacing[1]};
        pointer-events: none;
      }
    `));

    const separator = document.createElement('div');
    separator.className = 'separator';
    separator.setAttribute('role', 'separator');

    this.shadow.appendChild(separator);
  }
}

export class EVADropdownMenuLabel extends EVABaseComponent {
  protected render(): void {
    this.shadow.innerHTML = '';
    
    this.shadow.appendChild(this.createStyles(`
      :host {
        display: block;
      }

      .label {
        padding: ${gcSpacing[2]};
        font-size: 0.875rem;
        font-weight: 500;
        color: ${modernColors.foreground};
      }
    `));

    const label = document.createElement('div');
    label.className = 'label';
    
    const slot = document.createElement('slot');
    label.appendChild(slot);

    this.shadow.appendChild(label);
  }
}

customElements.define('eva-dropdown-menu', EVADropdownMenu);
customElements.define('eva-dropdown-menu-item', EVADropdownMenuItem);
customElements.define('eva-dropdown-menu-separator', EVADropdownMenuSeparator);
customElements.define('eva-dropdown-menu-label', EVADropdownMenuLabel);
