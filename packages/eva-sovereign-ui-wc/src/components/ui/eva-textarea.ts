/**
 * EVA Textarea Component
 * Multi-line text input with Spark styling
 * Features: auto-growing, focus states, validation states
 */

import { EVABaseComponent } from '../../utils/base-component';
import { 
  modernColors,
  gcSpacing,
  shadows,
  transitions,
} from '../../tokens';

export class EVATextarea extends EVABaseComponent {
  private textareaEl?: HTMLTextAreaElement;
  private labelId?: string;

  static get observedAttributes() {
    return ['value', 'placeholder', 'disabled', 'readonly', 'rows', 'label', 'aria-label'];
  }

  attributeChangedCallback() {
    if (this.textareaEl) {
      const value = this.getAttr('value', '');
      const placeholder = this.getAttr('placeholder', '');
      const rows = this.getAttr('rows', '4');
      const label = this.getAttr('label', '');
      const ariaLabel = this.getAttr('aria-label', '');
      
      this.textareaEl.value = value;
      this.textareaEl.placeholder = placeholder;
      this.textareaEl.rows = parseInt(rows);
      this.textareaEl.disabled = this.getBoolAttr('disabled');
      this.textareaEl.readOnly = this.getBoolAttr('readonly');

      if (label && this.labelId) {
        this.textareaEl.setAttribute('aria-labelledby', this.labelId);
        this.textareaEl.removeAttribute('aria-label');
      } else {
        this.textareaEl.removeAttribute('aria-labelledby');
        if (ariaLabel) {
          this.textareaEl.setAttribute('aria-label', ariaLabel);
        } else {
          this.textareaEl.removeAttribute('aria-label');
        }
      }
    }
  }

  connectedCallback() {
    super.connectedCallback();
    this.setupTextarea();
  }

  private setupTextarea() {
    if (this.textareaEl) {
      this.textareaEl.addEventListener('input', (e) => {
        const target = e.target as HTMLTextAreaElement;
        this.setAttribute('value', target.value);
        this.emit('input', { value: target.value });
      });

      this.textareaEl.addEventListener('change', (e) => {
        const target = e.target as HTMLTextAreaElement;
        this.emit('change', { value: target.value });
      });
    }
  }

  protected render(): void {
    this.shadow.innerHTML = '';
    
    this.shadow.appendChild(this.createStyles(`
      :host {
        display: block;
        width: 100%;
      }

      .textarea {
        display: flex;
        min-height: 4rem;
        width: 100%;
        border-radius: ${gcSpacing[2]};
        border: 1px solid ${modernColors.input};
        background: transparent;
        padding: ${gcSpacing[2]} ${gcSpacing[3]};
        font-size: 0.875rem;
        line-height: 1.5;
        box-shadow: ${shadows.xs};
        transition: ${transitions.colors};
        outline: none;
        resize: vertical;
        font-family: inherit;
        color: ${modernColors.foreground};
      }

      .textarea::placeholder {
        color: ${modernColors.mutedForeground};
      }

      .textarea:hover {
        background: color-mix(in srgb, ${modernColors.input} 30%, transparent);
      }

      .textarea:focus-visible {
        border-color: ${modernColors.ring};
        box-shadow: 0 0 0 3px color-mix(in srgb, ${modernColors.ring} 50%, transparent);
      }

      .textarea:disabled {
        cursor: not-allowed;
        opacity: 0.5;
      }

      .textarea[aria-invalid="true"] {
        box-shadow: 0 0 0 3px color-mix(in srgb, ${modernColors.destructive} 20%, transparent);
        border-color: ${modernColors.destructive};
      }

      @media (prefers-reduced-motion: reduce) {
        .textarea {
          transition-duration: 0.01ms !important;
        }
      }

      @media (min-width: 768px) {
        .textarea {
          font-size: 0.875rem;
        }
      }
    `));

    const wrapper = document.createElement('div');
    wrapper.style.display = 'flex';
    wrapper.style.flexDirection = 'column';
    wrapper.style.gap = gcSpacing[1];

    const labelText = this.getAttr('label', '');
    let labelEl: HTMLLabelElement | undefined;
    if (labelText) {
      labelEl = document.createElement('label');
      this.labelId = this.labelId || `txt-label-${Math.random().toString(36).slice(2)}`;
      labelEl.id = this.labelId;
      labelEl.textContent = labelText;
      labelEl.style.fontSize = '0.75rem';
      labelEl.style.fontWeight = '500';
      labelEl.style.color = modernColors.mutedForeground;
      wrapper.appendChild(labelEl);
    } else {
      this.labelId = undefined;
    }

    const textarea = document.createElement('textarea');
    textarea.className = 'textarea';
    const textareaId = `txt-${Math.random().toString(36).slice(2)}`;
    textarea.id = textareaId;
    textarea.value = this.getAttr('value', '');
    textarea.placeholder = this.getAttr('placeholder', '');
    textarea.rows = parseInt(this.getAttr('rows', '4'));
    textarea.disabled = this.getBoolAttr('disabled');
    textarea.readOnly = this.getBoolAttr('readonly');

    if (labelEl) {
      labelEl.htmlFor = textareaId;
      textarea.setAttribute('aria-labelledby', this.labelId!);
    } else {
      const ariaLabel = this.getAttr('aria-label', '');
      if (ariaLabel) {
        textarea.setAttribute('aria-label', ariaLabel);
      } else {
        textarea.setAttribute('aria-label', 'Textarea');
      }
    }
    wrapper.appendChild(textarea);
    this.shadow.appendChild(wrapper);
    this.textareaEl = textarea;
    this.setupTextarea();
  }
}

customElements.define('eva-textarea', EVATextarea);
