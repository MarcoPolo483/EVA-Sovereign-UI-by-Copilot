/**
 * EVA Context Menu Component
 * Right-click context menu
 * Features: Position at cursor, click outside to close
 */

import { EVABaseComponent } from '../../utils/base-component';
import { 
  modernColors,
  gcSpacing,
  shadows,
  transitions,
} from '../../tokens';

export class EVAContextMenu extends EVABaseComponent {
  private isOpen = false;

  connectedCallback() {
    super.connectedCallback();
    
    this.addEventListener('contextmenu', (e) => {
      e.preventDefault();
      this.isOpen = true;
      this.positionMenu(e.clientX, e.clientY);
      this.render();
    });

    document.addEventListener('click', () => {
      if (this.isOpen) {
        this.isOpen = false;
        this.render();
      }
    });
  }

  private positionMenu(x: number, y: number) {
    const menu = this.shadow.querySelector('.menu') as HTMLElement;
    if (!menu) return;

    menu.style.left = `${x}px`;
    menu.style.top = `${y}px`;

    // Adjust if off-screen
    setTimeout(() => {
      const rect = menu.getBoundingClientRect();
      if (rect.right > window.innerWidth) {
        menu.style.left = `${x - rect.width}px`;
      }
      if (rect.bottom > window.innerHeight) {
        menu.style.top = `${y - rect.height}px`;
      }
    }, 0);
  }

  protected render(): void {
    this.shadow.innerHTML = '';
    
    this.shadow.appendChild(this.createStyles(`
      :host {
        display: block;
        position: relative;
      }

      .trigger {
        display: contents;
      }

      .menu {
        position: fixed;
        z-index: 50;
        min-width: 12rem;
        padding: ${gcSpacing[1]};
        background: ${modernColors.popover};
        border: 1px solid ${modernColors.border};
        border-radius: ${gcSpacing[2]};
        box-shadow: ${shadows.lg};
        display: ${this.isOpen ? 'block' : 'none'};
        animation: contextMenuIn 150ms ease-out;
      }

      @keyframes contextMenuIn {
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

    const trigger = document.createElement('div');
    trigger.className = 'trigger';
    const triggerSlot = document.createElement('slot');
    triggerSlot.name = 'trigger';
    trigger.appendChild(triggerSlot);

    const menu = document.createElement('div');
    menu.className = 'menu';
    const menuSlot = document.createElement('slot');
    menu.appendChild(menuSlot);

    this.shadow.appendChild(trigger);
    this.shadow.appendChild(menu);
  }
}

export class EVAContextMenuItem extends EVABaseComponent {
  protected render(): void {
    this.shadow.innerHTML = '';
    
    const variant = this.getAttr('variant', 'default');
    
    this.shadow.appendChild(this.createStyles(`
      :host {
        display: block;
      }

      .item {
        position: relative;
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

      .item:hover {
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

customElements.define('eva-context-menu', EVAContextMenu);
customElements.define('eva-context-menu-item', EVAContextMenuItem);
