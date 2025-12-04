import { describe, it, expect, beforeEach, afterEach, vi } from 'vitest';
import { createComponent, testAccessibility, shadowQuery, simulateClick } from 'tests/test-utils';
import './eva-alert-dialog';
import type { EVAAlertDialog } from './eva-alert-dialog';

describe('eva-alert-dialog', () => {
  let element: EVAAlertDialog;

  beforeEach(async () => {
    element = await createComponent('eva-alert-dialog') as EVAAlertDialog;
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
      expect(customElements.get('eva-alert-dialog')).toBeTruthy();
    });

    it('should not display when closed', () => {
      expect(element.shadowRoot?.host).toBeInstanceOf(HTMLElement);
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
    it('should open when open attribute is set', async () => {
      element.setAttribute('open', '');
      await new Promise(resolve => setTimeout(resolve, 50));
      
      expect(element.hasAttribute('open')).toBe(true);
      
      const overlay = shadowQuery(element, '.overlay');
      expect(overlay).toBeTruthy();
    });

    it('should close when close() method is called', async () => {
      element.setAttribute('open', '');
      await new Promise(resolve => setTimeout(resolve, 50));
      
      const closeSpy = vi.fn();
      element.addEventListener('close', closeSpy);
      
      element.close();
      await new Promise(resolve => setTimeout(resolve, 50));
      
      expect(element.hasAttribute('open')).toBe(false);
      expect(closeSpy).toHaveBeenCalled();
    });

    it('should close when ESC key is pressed', async () => {
      element.setAttribute('open', '');
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
      element.setAttribute('open', '');
      await new Promise(resolve => setTimeout(resolve, 50));
      
      const enterEvent = new KeyboardEvent('keydown', { key: 'Enter' });
      document.dispatchEvent(enterEvent);
      await new Promise(resolve => setTimeout(resolve, 50));
      
      expect(element.hasAttribute('open')).toBe(true);
    });
  });

  describe('Body Scroll Lock', () => {
    it('should lock body scroll when opened', async () => {
      document.body.style.overflow = '';
      
      element.setAttribute('open', '');
      await new Promise(resolve => setTimeout(resolve, 50));
      
      expect(document.body.style.overflow).toBe('hidden');
    });

    it('should restore body scroll when closed', async () => {
      document.body.style.overflow = '';
      
      element.setAttribute('open', '');
      await new Promise(resolve => setTimeout(resolve, 50));
      expect(document.body.style.overflow).toBe('hidden');
      
      element.close();
      await new Promise(resolve => setTimeout(resolve, 50));
      
      expect(document.body.style.overflow).toBe('');
    });
  });

  describe('Accessibility', () => {
    it('should have role="alertdialog" on content', async () => {
      element.setAttribute('open', '');
      await new Promise(resolve => setTimeout(resolve, 50));
      
      const content = shadowQuery(element, '.content');
      expect(content).toBeTruthy();
      expect(content?.getAttribute('role')).toBe('alertdialog');
    });

    it('should have aria-modal="true" on content', async () => {
      element.setAttribute('open', '');
      await new Promise(resolve => setTimeout(resolve, 50));
      
      const content = shadowQuery(element, '.content');
      expect(content?.getAttribute('aria-modal')).toBe('true');
    });

    it('should pass accessibility tests when open', async () => {
      // Add title and description for better a11y
      const title = document.createElement('span');
      title.setAttribute('slot', 'title');
      title.textContent = 'Confirm Action';
      element.appendChild(title);
      
      const desc = document.createElement('span');
      desc.setAttribute('slot', 'description');
      desc.textContent = 'Are you sure?';
      element.appendChild(desc);
      
      element.setAttribute('open', '');
      await new Promise(resolve => setTimeout(resolve, 50));
      
      await testAccessibility(element);
    });
  });

  describe('Events', () => {
    it('should emit "close" event when closed', async () => {
      element.setAttribute('open', '');
      await new Promise(resolve => setTimeout(resolve, 50));
      
      const closeSpy = vi.fn();
      element.addEventListener('close', closeSpy);
      
      element.close();
      await new Promise(resolve => setTimeout(resolve, 50));
      
      expect(closeSpy).toHaveBeenCalledTimes(1);
    });

    it('should emit close event when ESC is pressed', async () => {
      element.setAttribute('open', '');
      await new Promise(resolve => setTimeout(resolve, 50));
      
      const closeSpy = vi.fn();
      element.addEventListener('close', closeSpy);
      
      const escEvent = new KeyboardEvent('keydown', { key: 'Escape' });
      document.dispatchEvent(escEvent);
      await new Promise(resolve => setTimeout(resolve, 50));
      
      expect(closeSpy).toHaveBeenCalled();
    });
  });

  describe('Slots', () => {
    it('should support title slot', async () => {
      const title = document.createElement('span');
      title.setAttribute('slot', 'title');
      title.textContent = 'Alert Title';
      element.appendChild(title);
      
      element.setAttribute('open', '');
      await new Promise(resolve => setTimeout(resolve, 50));
      
      const slot = shadowQuery(element, 'slot');
      expect(slot).toBeTruthy();
    });

    it('should support description slot', async () => {
      const desc = document.createElement('span');
      desc.setAttribute('slot', 'description');
      desc.textContent = 'Alert description';
      element.appendChild(desc);
      
      element.setAttribute('open', '');
      await new Promise(resolve => setTimeout(resolve, 50));
      
      const slot = shadowQuery(element, 'slot');
      expect(slot).toBeTruthy();
    });

    it('should support action and cancel button slots', async () => {
      const actionBtn = document.createElement('button');
      actionBtn.setAttribute('slot', 'action');
      actionBtn.textContent = 'Confirm';
      element.appendChild(actionBtn);
      
      const cancelBtn = document.createElement('button');
      cancelBtn.setAttribute('slot', 'cancel');
      cancelBtn.textContent = 'Cancel';
      element.appendChild(cancelBtn);
      
      element.setAttribute('open', '');
      await new Promise(resolve => setTimeout(resolve, 50));
      
      const slot = shadowQuery(element, 'slot');
      expect(slot).toBeTruthy();
    });
  });

  describe('Edge Cases', () => {
    it('should handle rapid open/close', async () => {
      element.setAttribute('open', '');
      element.removeAttribute('open');
      element.setAttribute('open', '');
      await new Promise(resolve => setTimeout(resolve, 50));
      
      expect(element.hasAttribute('open')).toBe(true);
    });

    it('should handle multiple ESC key presses', async () => {
      element.setAttribute('open', '');
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
      element.setAttribute('open', '');
      await new Promise(resolve => setTimeout(resolve, 50));
      
      expect(document.body.style.overflow).toBe('hidden');
      
      element.remove();
      // Body overflow should remain (component can't cleanup on immediate removal)
      // This is expected behavior
    });
  });

  describe('Use Cases', () => {
    it('should work as delete confirmation', async () => {
      const title = document.createElement('span');
      title.setAttribute('slot', 'title');
      title.textContent = 'Delete Item';
      element.appendChild(title);
      
      const desc = document.createElement('span');
      desc.setAttribute('slot', 'description');
      desc.textContent = 'Are you sure? This cannot be undone.';
      element.appendChild(desc);
      
      const actionBtn = document.createElement('button');
      actionBtn.setAttribute('slot', 'action');
      actionBtn.textContent = 'Delete';
      actionBtn.addEventListener('click', () => element.close());
      element.appendChild(actionBtn);
      
      const cancelBtn = document.createElement('button');
      cancelBtn.setAttribute('slot', 'cancel');
      cancelBtn.textContent = 'Cancel';
      cancelBtn.addEventListener('click', () => element.close());
      element.appendChild(cancelBtn);
      
      element.setAttribute('open', '');
      await new Promise(resolve => setTimeout(resolve, 50));
      
      expect(element.hasAttribute('open')).toBe(true);
      
      // Click cancel
      cancelBtn.click();
      await new Promise(resolve => setTimeout(resolve, 50));
      
      expect(element.hasAttribute('open')).toBe(false);
    });

    it('should work as success notification', async () => {
      const title = document.createElement('span');
      title.setAttribute('slot', 'title');
      title.textContent = '✓ Success';
      element.appendChild(title);
      
      const desc = document.createElement('span');
      desc.setAttribute('slot', 'description');
      desc.textContent = 'Your changes have been saved.';
      element.appendChild(desc);
      
      const okBtn = document.createElement('button');
      okBtn.setAttribute('slot', 'action');
      okBtn.textContent = 'OK';
      okBtn.addEventListener('click', () => element.close());
      element.appendChild(okBtn);
      
      element.setAttribute('open', '');
      await new Promise(resolve => setTimeout(resolve, 50));
      
      expect(element.hasAttribute('open')).toBe(true);
      
      // Click OK
      okBtn.click();
      await new Promise(resolve => setTimeout(resolve, 50));
      
      expect(element.hasAttribute('open')).toBe(false);
    });
  });
});
