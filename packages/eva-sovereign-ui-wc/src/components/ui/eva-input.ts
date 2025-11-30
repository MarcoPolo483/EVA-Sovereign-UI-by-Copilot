/**
 * EVA Input Component
 * Text input fields with Spark styling
 * Features: focus states, validation states, file input support
 */

import { EVABaseComponent } from '../../utils/base-component';
import { 
  modernColors,
  gcSpacing,
  shadows,
  transitions,
} from '../../tokens';

export class EVAInput extends EVABaseComponent {
  private inputEl?: HTMLInputElement;

  static get observedAttributes() {
    return ['type', 'value', 'placeholder', 'disabled', 'readonly'];
  }

  attributeChangedCallback() {
    if (this.inputEl) {
      const type = this.getAttr('type', 'text');
      const value = this.getAttr('value', '');
      const placeholder = this.getAttr('placeholder', '');
      
      this.inputEl.type = type;
      this.inputEl.value = value;
      this.inputEl.placeholder = placeholder;
      this.inputEl.disabled = this.getBoolAttr('disabled');
      this.inputEl.readOnly = this.getBoolAttr('readonly');
    }
  }

  connectedCallback() {
    super.connectedCallback();
    this.setupInput();
  }

  private setupInput() {
    if (this.inputEl) {
      this.inputEl.addEventListener('input', (e) => {
        const target = e.target as HTMLInputElement;
        this.setAttribute('value', target.value);
        this.emit('input', { value: target.value });
      });

      this.inputEl.addEventListener('change', (e) => {
        const target = e.target as HTMLInputElement;
        this.emit('change', { value: target.value });
      });
    }
  }

  protected render(): void {
    this.shadow.innerHTML = '';
    
    this.shadow.appendChild(this.createStyles(`
      :host {
        display: inline-block;
        width: 100%;
      }

      .input {
        display: flex;
        height: 2.25rem;
        width: 100%;
        min-width: 0;
        border-radius: ${gcSpacing[2]};
        border: 1px solid ${modernColors.input};
        background: transparent;
        padding: ${gcSpacing[1]} ${gcSpacing[3]};
        font-size: 0.875rem;
        box-shadow: ${shadows.xs};
        transition: ${transitions.colors};
        outline: none;
        color: ${modernColors.foreground};
      }

      .input::placeholder {
        color: ${modernColors.mutedForeground};
      }

      .input::selection {
        background: ${modernColors.primary};
        color: ${modernColors.primaryForeground};
      }

      .input:hover {
        background: color-mix(in srgb, ${modernColors.input} 30%, transparent);
      }

      .input:focus-visible {
        border-color: ${modernColors.ring};
        box-shadow: 0 0 0 3px color-mix(in srgb, ${modernColors.ring} 50%, transparent);
      }

      .input:disabled {
        pointer-events: none;
        cursor: not-allowed;
        opacity: 0.5;
      }

      .input[aria-invalid="true"] {
        box-shadow: 0 0 0 3px color-mix(in srgb, ${modernColors.destructive} 20%, transparent);
        border-color: ${modernColors.destructive};
      }

      .input[type="file"] {
        cursor: pointer;
      }

      .input[type="file"]::file-selector-button {
        display: inline-flex;
        height: 1.75rem;
        border: 0;
        background: transparent;
        font-size: 0.875rem;
        font-weight: 500;
        margin-right: ${gcSpacing[2]};
        cursor: pointer;
        color: ${modernColors.foreground};
      }

      @media (prefers-reduced-motion: reduce) {
        .input {
          transition-duration: 0.01ms !important;
        }
      }

      @media (min-width: 768px) {
        .input {
          font-size: 0.875rem;
        }
      }
    `));

    const input = document.createElement('input');
    input.className = 'input';
    input.type = this.getAttr('type', 'text');
    input.value = this.getAttr('value', '');
    input.placeholder = this.getAttr('placeholder', '');
    input.disabled = this.getBoolAttr('disabled');
    input.readOnly = this.getBoolAttr('readonly');

    this.shadow.appendChild(input);
    this.inputEl = input;
    this.setupInput();
  }
}

customElements.define('eva-input', EVAInput);
