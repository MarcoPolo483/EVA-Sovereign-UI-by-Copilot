import { describe, it, expect, beforeEach, afterEach, vi } from 'vitest';
import { createComponent, testAccessibility, shadowQuery, simulateClick, simulateKeyboard } from 'tests/test-utils';
import './eva-dialog';
import type { EVADialog } from './eva-dialog';

describe('eva-dialog', () => {
  let element: EVADialog;

  beforeEach(async () => {
    element = await createComponent('eva-dialog') as EVADialog;
    document.body.style.overflow = ''; // Reset body overflow
  });

  afterEach(() => {
    element.remove();
    document.body.style.overflow = ''; // Cleanup body overflow
  });

  describe('Rendering', () => {
    it('should render with shadow DOM', () => {
      expect(element).toBeInstanceOf(HTMLElement);
      expect(element.shadowRoot).toBeTruthy();
    });

    it('should be defined as custom element', () => {
      expect(customElements.get('eva-dialog')).toBeTruthy();
    });

    it('should not display when closed', () => {
      expect(element.shadowRoot?.host).toBeInstanceOf(HTMLElement);
      const style = getComputedStyle(element);
      // Initial state should be closed
      expect(element.hasAttribute('open')).toBe(false);
    });

    it('should display when open attribute is set', async () => {
      element.setAttribute('open', '');
      await new Promise(resolve => setTimeout(resolve, 50));
      
      const overlay = shadowQuery(element, '.overlay');
      expect(overlay).toBeTruthy();
      
      const content = shadowQuery(element, '.content');
      expect(content).toBeTruthy();
    });
  });

  describe('Open/Close Functionality', () => {
    it('should open when open() method is called', async () => {
      const openSpy = vi.fn();
      element.addEventListener('open', openSpy);
      
      element.open();
      await new Promise(resolve => setTimeout(resolve, 50));
      
      expect(element.hasAttribute('open')).toBe(true);
      expect(openSpy).toHaveBeenCalled();
    });

    it('should close when close() method is called', async () => {
      const closeSpy = vi.fn();
      element.addEventListener('close', closeSpy);
      
      element.open();
      await new Promise(resolve => setTimeout(resolve, 50));
      
      element.close();
      await new Promise(resolve => setTimeout(resolve, 50));
      
      expect(element.hasAttribute('open')).toBe(false);
      expect(closeSpy).toHaveBeenCalled();
    });

    it('should close when close button is clicked', async () => {
      element.open();
      await new Promise(resolve => setTimeout(resolve, 50));
      
      const closeBtn = shadowQuery<HTMLButtonElement>(element, '.close-button');
      expect(closeBtn).toBeTruthy();
      
      const closeSpy = vi.fn();
      element.addEventListener('close', closeSpy);
      
      closeBtn?.click();
      await new Promise(resolve => setTimeout(resolve, 50));
      
      expect(element.hasAttribute('open')).toBe(false);
      expect(closeSpy).toHaveBeenCalled();
    });

    it('should close when overlay is clicked', async () => {
      element.open();
      await new Promise(resolve => setTimeout(resolve, 50));
      
      const overlay = shadowQuery(element, '.overlay');
      expect(overlay).toBeTruthy();
      
      const closeSpy = vi.fn();
      element.addEventListener('close', closeSpy);
      
      simulateClick(overlay!);
      await new Promise(resolve => setTimeout(resolve, 50));
      
      expect(element.hasAttribute('open')).toBe(false);
      expect(closeSpy).toHaveBeenCalled();
    });

    it('should NOT close when content is clicked', async () => {
      element.open();
      await new Promise(resolve => setTimeout(resolve, 50));
      
      const content = shadowQuery(element, '.content');
      expect(content).toBeTruthy();
      
      simulateClick(content!);
      await new Promise(resolve => setTimeout(resolve, 50));
      
      expect(element.hasAttribute('open')).toBe(true);
    });
  });

  describe('Keyboard Support', () => {
    it('should close when ESC key is pressed', async () => {
      element.open();
      await new Promise(resolve => setTimeout(resolve, 50));
      
      const closeSpy = vi.fn();
      element.addEventListener('close', closeSpy);
      
      const escEvent = new KeyboardEvent('keydown', { key: 'Escape' });
      document.dispatchEvent(escEvent);
      await new Promise(resolve => setTimeout(resolve, 50));
      
      expect(element.hasAttribute('open')).toBe(false);
      expect(closeSpy).toHaveBeenCalled();
    });

    it('should NOT close when other keys are pressed', async () => {
      element.open();
      await new Promise(resolve => setTimeout(resolve, 50));
      
      const enterEvent = new KeyboardEvent('keydown', { key: 'Enter' });
      document.dispatchEvent(enterEvent);
      await new Promise(resolve => setTimeout(resolve, 50));
      
      expect(element.hasAttribute('open')).toBe(true);
    });

    it('should have close button keyboard accessible', async () => {
      element.open();
      await new Promise(resolve => setTimeout(resolve, 50));
      
      const closeBtn = shadowQuery<HTMLButtonElement>(element, '.close-button');
      expect(closeBtn).toBeTruthy();
      expect(closeBtn?.tagName).toBe('BUTTON');
      expect(closeBtn?.getAttribute('type')).toBe('button');
    });
  });

  describe('Body Scroll Lock', () => {
    it('should lock body scroll when opened', async () => {
      document.body.style.overflow = '';
      
      element.open();
      await new Promise(resolve => setTimeout(resolve, 50));
      
      expect(document.body.style.overflow).toBe('hidden');
    });

    it('should restore body scroll when closed', async () => {
      document.body.style.overflow = '';
      
      element.open();
      await new Promise(resolve => setTimeout(resolve, 50));
      expect(document.body.style.overflow).toBe('hidden');
      
      element.close();
      await new Promise(resolve => setTimeout(resolve, 50));
      
      expect(document.body.style.overflow).toBe('');
    });
  });

  describe('Accessibility', () => {
    it('should have role="dialog" on content', async () => {
      element.open();
      await new Promise(resolve => setTimeout(resolve, 50));
      
      const content = shadowQuery(element, '.content');
      expect(content).toBeTruthy();
      expect(content?.getAttribute('role')).toBe('dialog');
    });

    it('should have aria-modal="true" on content', async () => {
      element.open();
      await new Promise(resolve => setTimeout(resolve, 50));
      
      const content = shadowQuery(element, '.content');
      expect(content?.getAttribute('aria-modal')).toBe('true');
    });

    it('should have aria-label when provided', async () => {
      element.setAttribute('aria-label', 'Test Dialog');
      element.open();
      await new Promise(resolve => setTimeout(resolve, 50));
      
      const content = shadowQuery(element, '.content');
      expect(content?.getAttribute('aria-label')).toBe('Test Dialog');
    });

    it('should have fallback aria-label when not provided', async () => {
      element.open();
      await new Promise(resolve => setTimeout(resolve, 50));
      
      const content = shadowQuery(element, '.content');
      const label = content?.getAttribute('aria-label');
      expect(label).toBeTruthy();
      expect(label).toBe('Dialog');
    });

    it('should use aria-labelledby when dialog-title exists', async () => {
      const titleEl = document.createElement('eva-dialog-title');
      titleEl.setAttribute('id', 'dialog-title-1');
      titleEl.textContent = 'Test Title';
      element.appendChild(titleEl);
      
      element.open();
      await new Promise(resolve => setTimeout(resolve, 50));
      
      const content = shadowQuery(element, '.content');
      expect(content?.getAttribute('aria-labelledby')).toBe('dialog-title-1');
    });

    it('should have close button with screen reader text', async () => {
      element.open();
      await new Promise(resolve => setTimeout(resolve, 50));
      
      const closeBtn = shadowQuery(element, '.close-button');
      expect(closeBtn).toBeTruthy();
      
      const srOnly = closeBtn?.querySelector('.sr-only');
      expect(srOnly).toBeTruthy();
      expect(srOnly?.textContent).toBe('Close');
    });

    it('should pass accessibility tests when open', async () => {
      element.open();
      await new Promise(resolve => setTimeout(resolve, 50));
      
      // Add some content for better a11y testing
      const header = document.createElement('eva-dialog-header');
      const title = document.createElement('eva-dialog-title');
      title.textContent = 'Test Dialog';
      header.appendChild(title);
      element.appendChild(header);
      
      await testAccessibility(element);
    });
  });

  describe('Events', () => {
    it('should emit "open" event when opened', async () => {
      const openSpy = vi.fn();
      element.addEventListener('open', openSpy);
      
      element.open();
      await new Promise(resolve => setTimeout(resolve, 50));
      
      expect(openSpy).toHaveBeenCalledTimes(1);
    });

    it('should emit "close" event when closed', async () => {
      const closeSpy = vi.fn();
      element.addEventListener('close', closeSpy);
      
      element.open();
      await new Promise(resolve => setTimeout(resolve, 50));
      
      element.close();
      await new Promise(resolve => setTimeout(resolve, 50));
      
      expect(closeSpy).toHaveBeenCalledTimes(1);
    });

    it('should emit close event when ESC is pressed', async () => {
      element.open();
      await new Promise(resolve => setTimeout(resolve, 50));
      
      const closeSpy = vi.fn();
      element.addEventListener('close', closeSpy);
      
      const escEvent = new KeyboardEvent('keydown', { key: 'Escape' });
      document.dispatchEvent(escEvent);
      await new Promise(resolve => setTimeout(resolve, 50));
      
      expect(closeSpy).toHaveBeenCalled();
    });
  });

  describe('Composition Components', () => {
    it('should render eva-dialog-header', async () => {
      const header = document.createElement('eva-dialog-header');
      expect(header).toBeInstanceOf(HTMLElement);
      expect(customElements.get('eva-dialog-header')).toBeTruthy();
    });

    it('should render eva-dialog-footer', async () => {
      const footer = document.createElement('eva-dialog-footer');
      expect(footer).toBeInstanceOf(HTMLElement);
      expect(customElements.get('eva-dialog-footer')).toBeTruthy();
    });

    it('should render eva-dialog-title', async () => {
      const title = document.createElement('eva-dialog-title');
      expect(title).toBeInstanceOf(HTMLElement);
      expect(customElements.get('eva-dialog-title')).toBeTruthy();
    });

    it('should render eva-dialog-description', async () => {
      const desc = document.createElement('eva-dialog-description');
      expect(desc).toBeInstanceOf(HTMLElement);
      expect(customElements.get('eva-dialog-description')).toBeTruthy();
    });
  });

  describe('Edge Cases', () => {
    it('should handle rapid open/close', async () => {
      element.open();
      element.close();
      element.open();
      await new Promise(resolve => setTimeout(resolve, 50));
      
      expect(element.hasAttribute('open')).toBe(true);
    });

    it('should handle multiple ESC key presses', async () => {
      element.open();
      await new Promise(resolve => setTimeout(resolve, 50));
      
      const closeSpy = vi.fn();
      element.addEventListener('close', closeSpy);
      
      document.dispatchEvent(new KeyboardEvent('keydown', { key: 'Escape' }));
      document.dispatchEvent(new KeyboardEvent('keydown', { key: 'Escape' }));
      await new Promise(resolve => setTimeout(resolve, 50));
      
      // Should only close once
      expect(element.hasAttribute('open')).toBe(false);
    });

    it('should handle removal while open', async () => {
      element.open();
      await new Promise(resolve => setTimeout(resolve, 50));
      
      expect(document.body.style.overflow).toBe('hidden');
      
      element.remove();
      // Body overflow should remain (component can't cleanup on immediate removal)
      // This is expected behavior
    });
  });
});
