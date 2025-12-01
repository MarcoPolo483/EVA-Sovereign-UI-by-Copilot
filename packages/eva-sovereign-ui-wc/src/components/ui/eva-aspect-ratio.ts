/**
 * EVA Aspect Ratio Component
 * Maintains aspect ratio for content
 * Features: Configurable ratios (16/9, 4/3, 1/1, etc.)
 */

import { EVABaseComponent } from '../../utils/base-component';

export class EVAAspectRatio extends EVABaseComponent {
  static get observedAttributes() {
    return ['ratio'];
  }

  attributeChangedCallback() {
    this.render();
  }

  protected render(): void {
    const ratioAttr = this.getAttr('ratio', '16/9');
    let numerator: number;
    let denominator: number;
    if (ratioAttr.includes('/')) {
      const [a, b] = ratioAttr.split('/');
      numerator = parseFloat(a);
      denominator = parseFloat(b);
      if (!numerator || isNaN(numerator)) numerator = 16;
      if (!denominator || isNaN(denominator)) denominator = 9;
    } else {
      numerator = parseFloat(ratioAttr);
      if (!numerator || isNaN(numerator)) {
        numerator = 16;
        denominator = 9;
      } else {
        denominator = 1;
      }
    }
    const percentage = (denominator / numerator) * 100;

    this.shadow.innerHTML = '';
    
    this.shadow.appendChild(this.createStyles(`
      :host {
        display: block;
        position: relative;
        width: 100%;
      }

      .wrapper {
        position: relative;
        width: 100%;
        padding-bottom: ${percentage}%;
      }

      .content {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
      }
    `));

    const wrapper = document.createElement('div');
    wrapper.className = 'wrapper';

    const content = document.createElement('div');
    content.className = 'content';
    
    const slot = document.createElement('slot');
    content.appendChild(slot);

    wrapper.appendChild(content);
    this.shadow.appendChild(wrapper);
  }
}

customElements.define('eva-aspect-ratio', EVAAspectRatio);
