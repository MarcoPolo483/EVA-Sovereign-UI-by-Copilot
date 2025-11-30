/**
 * EVA Menubar Component
 * Application-style horizontal menu bar
 * Features: Dropdown menus, keyboard navigation
 */

import { EVABaseComponent } from '../../utils/base-component';
import { 
  modernColors,
  gcSpacing,
  shadows,
  transitions,
} from '../../tokens';

export class EVAMenubar extends EVABaseComponent {
  protected render(): void {
    this.shadow.innerHTML = '';
    
    this.shadow.appendChild(this.createStyles(`
      :host {
        display: flex;
        height: 2.5rem;
        border: 1px solid ${modernColors.border};
        border-radius: ${gcSpacing[2]};
        background: ${modernColors.background};
        padding: ${gcSpacing[1]};
      }

      .menubar {
        display: flex;
        align-items: center;
        gap: ${gcSpacing[1]};
        width: 100%;
      }
    `));

    const menubar = document.createElement('div');
    menubar.className = 'menubar';
    menubar.setAttribute('role', 'menubar');
    
    const slot = document.createElement('slot');
    menubar.appendChild(slot);

    this.shadow.appendChild(menubar);
  }
}

export class EVAMenubarMenu extends EVABaseComponent {
  private isOpen = false;

  connectedCallback() {
    super.connectedCallback();
    
    document.addEventListener('click', (e) => {
      if (!this.contains(e.target as Node) && this.isOpen) {
        this.isOpen = false;
        this.render();
      }
    });
  }

  private toggle() {
    this.isOpen = !this.isOpen;
    this.render();
  }

  protected render(): void {
    this.shadow.innerHTML = '';
    
    this.shadow.appendChild(this.createStyles(`
      :host {
        position: relative;
        display: inline-flex;
      }

      .trigger {
        display: inline-flex;
        align-items: center;
        gap: ${gcSpacing[2]};
        height: 2rem;
        padding: 0 ${gcSpacing[3]};
        border-radius: ${gcSpacing[1]};
        font-size: 0.875rem;
        font-weight: 500;
        cursor: pointer;
        transition: ${transitions.colors};
        background: transparent;
        border: none;
        color: ${modernColors.foreground};
      }

      .trigger:hover {
        background: ${modernColors.accent};
      }

      .trigger[data-open="true"] {
        background: ${modernColors.accent};
      }

      .content {
        position: absolute;
        top: 100%;
        left: 0;
        z-index: 50;
        min-width: 12rem;
        margin-top: ${gcSpacing[1]};
        padding: ${gcSpacing[1]};
        background: ${modernColors.popover};
        border: 1px solid ${modernColors.border};
        border-radius: ${gcSpacing[2]};
        box-shadow: ${shadows.lg};
        display: ${this.isOpen ? 'block' : 'none'};
        animation: menuIn 150ms ease-out;
      }

      @keyframes menuIn {
        from {
          opacity: 0;
          transform: scale(0.95);
        }
        to {
          opacity: 1;
          transform: scale(1);
        }
      }
    `));

    const trigger = document.createElement('button');
    trigger.className = 'trigger';
    trigger.setAttribute('data-open', this.isOpen.toString());
    trigger.addEventListener('click', () => this.toggle());
    
    const triggerSlot = document.createElement('slot');
    triggerSlot.name = 'trigger';
    trigger.appendChild(triggerSlot);

    const content = document.createElement('div');
    content.className = 'content';
    const contentSlot = document.createElement('slot');
    content.appendChild(contentSlot);

    this.shadow.appendChild(trigger);
    this.shadow.appendChild(content);
  }
}

export class EVAMenubarItem extends EVABaseComponent {
  protected render(): void {
    this.shadow.innerHTML = '';
    
    const variant = this.getAttr('variant', 'default');
    
    this.shadow.appendChild(this.createStyles(`
      :host {
        display: block;
      }

      .item {
        display: flex;
        align-items: center;
        gap: ${gcSpacing[2]};
        width: 100%;
        padding: ${gcSpacing[2]} ${gcSpacing[3]};
        border-radius: ${gcSpacing[1]};
        font-size: 0.875rem;
        cursor: pointer;
        transition: ${transitions.colors};
        background: transparent;
        border: none;
        text-align: left;
        color: ${variant === 'destructive' ? modernColors.destructive : modernColors.foreground};
      }

      .item:hover:not(:disabled) {
        background: ${variant === 'destructive' 
          ? 'color-mix(in srgb, ' + modernColors.destructive + ' 10%, transparent)'
          : modernColors.accent};
      }

      .item:focus-visible {
        outline: none;
        background: ${modernColors.accent};
      }

      .item:disabled {
        pointer-events: none;
        opacity: 0.5;
      }

      .item ::slotted(svg) {
        width: 1rem;
        height: 1rem;
        flex-shrink: 0;
      }
    `));

    const button = document.createElement('button');
    button.className = 'item';
    
    if (this.getBoolAttr('disabled')) {
      button.disabled = true;
    }

    const slot = document.createElement('slot');
    button.appendChild(slot);

    this.shadow.appendChild(button);
  }
}

customElements.define('eva-menubar', EVAMenubar);
customElements.define('eva-menubar-menu', EVAMenubarMenu);
customElements.define('eva-menubar-item', EVAMenubarItem);
