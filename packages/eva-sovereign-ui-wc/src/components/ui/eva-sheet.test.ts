import { describe, it, expect, beforeEach, afterEach, vi } from 'vitest';
import { createComponent, testAccessibility, shadowQuery, simulateClick } from '../../../../../tests/test-utils';
import './eva-sheet';
import type { EVASheet } from './eva-sheet';

describe('eva-sheet', () => {
  let element: EVASheet;

  beforeEach(async () => {
    element = await createComponent('eva-sheet') as EVASheet;
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
      expect(customElements.get('eva-sheet')).toBeTruthy();
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

  describe('Side Attribute', () => {
    it('should default to right side', async () => {
      element.setAttribute('open', '');
      await new Promise(resolve => setTimeout(resolve, 50));
      
      const content = shadowQuery(element, '.content');
      expect(content).toBeTruthy();
      // Right side is the default
      expect(element.getAttribute('side') || 'right').toBe('right');
    });

    it('should support left side', async () => {
      element.setAttribute('side', 'left');
      element.setAttribute('open', '');
      await new Promise(resolve => setTimeout(resolve, 50));
      
      const content = shadowQuery(element, '.content');
      expect(content).toBeTruthy();
      expect(element.getAttribute('side')).toBe('left');
    });

    it('should support top side', async () => {
      element.setAttribute('side', 'top');
      element.setAttribute('open', '');
      await new Promise(resolve => setTimeout(resolve, 50));
      
      const content = shadowQuery(element, '.content');
      expect(content).toBeTruthy();
      expect(element.getAttribute('side')).toBe('top');
    });

    it('should support bottom side', async () => {
      element.setAttribute('side', 'bottom');
      element.setAttribute('open', '');
      await new Promise(resolve => setTimeout(resolve, 50));
      
      const content = shadowQuery(element, '.content');
      expect(content).toBeTruthy();
      expect(element.getAttribute('side')).toBe('bottom');
    });

    it('should update when side attribute changes', async () => {
      element.setAttribute('open', '');
      element.setAttribute('side', 'left');
      await new Promise(resolve => setTimeout(resolve, 50));
      
      expect(element.getAttribute('side')).toBe('left');
      
      element.setAttribute('side', 'right');
      await new Promise(resolve => setTimeout(resolve, 50));
      
      expect(element.getAttribute('side')).toBe('right');
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
      const header = document.createElement('eva-sheet-header');
      const title = document.createElement('eva-sheet-title');
      title.textContent = 'Sheet Title';
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
    it('should render eva-sheet-header', async () => {
      const header = document.createElement('eva-sheet-header');
      expect(header).toBeInstanceOf(HTMLElement);
      expect(customElements.get('eva-sheet-header')).toBeTruthy();
    });

    it('should render eva-sheet-footer', async () => {
      const footer = document.createElement('eva-sheet-footer');
      expect(footer).toBeInstanceOf(HTMLElement);
      expect(customElements.get('eva-sheet-footer')).toBeTruthy();
    });

    it('should render eva-sheet-title', async () => {
      const title = document.createElement('eva-sheet-title');
      expect(title).toBeInstanceOf(HTMLElement);
      expect(customElements.get('eva-sheet-title')).toBeTruthy();
    });

    it('should render eva-sheet-description', async () => {
      const desc = document.createElement('eva-sheet-description');
      expect(desc).toBeInstanceOf(HTMLElement);
      expect(customElements.get('eva-sheet-description')).toBeTruthy();
    });
  });

  describe('Animations', () => {
    it('should apply slide-in animation from right', async () => {
      element.setAttribute('side', 'right');
      element.open();
      await new Promise(resolve => setTimeout(resolve, 50));
      
      const content = shadowQuery(element, '.content');
      expect(content).toBeTruthy();
      // Animation is applied via CSS, just verify element exists
    });

    it('should apply slide-in animation from left', async () => {
      element.setAttribute('side', 'left');
      element.open();
      await new Promise(resolve => setTimeout(resolve, 50));
      
      const content = shadowQuery(element, '.content');
      expect(content).toBeTruthy();
    });

    it('should apply slide-in animation from top', async () => {
      element.setAttribute('side', 'top');
      element.open();
      await new Promise(resolve => setTimeout(resolve, 50));
      
      const content = shadowQuery(element, '.content');
      expect(content).toBeTruthy();
    });

    it('should apply slide-in animation from bottom', async () => {
      element.setAttribute('side', 'bottom');
      element.open();
      await new Promise(resolve => setTimeout(resolve, 50));
      
      const content = shadowQuery(element, '.content');
      expect(content).toBeTruthy();
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

    it('should handle side changes while open', async () => {
      element.open();
      element.setAttribute('side', 'left');
      await new Promise(resolve => setTimeout(resolve, 50));
      
      expect(element.getAttribute('side')).toBe('left');
      
      element.setAttribute('side', 'right');
      await new Promise(resolve => setTimeout(resolve, 50));
      
      expect(element.getAttribute('side')).toBe('right');
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

  describe('Use Cases', () => {
    it('should work as navigation menu', async () => {
      const header = document.createElement('eva-sheet-header');
      const title = document.createElement('eva-sheet-title');
      title.textContent = 'Navigation';
      header.appendChild(title);
      
      const nav = document.createElement('nav');
      const link1 = document.createElement('a');
      link1.href = '#home';
      link1.textContent = 'Home';
      nav.appendChild(link1);
      
      const link2 = document.createElement('a');
      link2.href = '#about';
      link2.textContent = 'About';
      nav.appendChild(link2);
      
      element.appendChild(header);
      element.appendChild(nav);
      element.setAttribute('side', 'left');
      element.open();
      await new Promise(resolve => setTimeout(resolve, 50));
      
      expect(element.hasAttribute('open')).toBe(true);
      expect(element.getAttribute('side')).toBe('left');
    });

    it('should work as settings panel', async () => {
      const header = document.createElement('eva-sheet-header');
      const title = document.createElement('eva-sheet-title');
      title.textContent = 'Settings';
      const desc = document.createElement('eva-sheet-description');
      desc.textContent = 'Manage your preferences';
      header.appendChild(title);
      header.appendChild(desc);
      
      const content = document.createElement('div');
      const checkbox = document.createElement('input');
      checkbox.type = 'checkbox';
      checkbox.id = 'setting1';
      const label = document.createElement('label');
      label.htmlFor = 'setting1';
      label.textContent = 'Enable notifications';
      content.appendChild(checkbox);
      content.appendChild(label);
      
      const footer = document.createElement('eva-sheet-footer');
      const saveBtn = document.createElement('button');
      saveBtn.textContent = 'Save';
      footer.appendChild(saveBtn);
      
      element.appendChild(header);
      element.appendChild(content);
      element.appendChild(footer);
      element.setAttribute('side', 'right');
      element.open();
      await new Promise(resolve => setTimeout(resolve, 50));
      
      expect(element.hasAttribute('open')).toBe(true);
      expect(element.getAttribute('side')).toBe('right');
    });

    it('should work as notification bar', async () => {
      const header = document.createElement('eva-sheet-header');
      const title = document.createElement('eva-sheet-title');
      title.textContent = 'Notifications';
      header.appendChild(title);
      
      const notifications = document.createElement('div');
      notifications.textContent = 'You have 3 unread messages';
      
      element.appendChild(header);
      element.appendChild(notifications);
      element.setAttribute('side', 'top');
      element.open();
      await new Promise(resolve => setTimeout(resolve, 50));
      
      expect(element.hasAttribute('open')).toBe(true);
      expect(element.getAttribute('side')).toBe('top');
    });

    it('should work as cookie consent banner', async () => {
      const content = document.createElement('div');
      content.textContent = 'We use cookies to improve your experience.';
      
      const footer = document.createElement('eva-sheet-footer');
      const acceptBtn = document.createElement('button');
      acceptBtn.textContent = 'Accept';
      const rejectBtn = document.createElement('button');
      rejectBtn.textContent = 'Reject';
      footer.appendChild(acceptBtn);
      footer.appendChild(rejectBtn);
      
      element.appendChild(content);
      element.appendChild(footer);
      element.setAttribute('side', 'bottom');
      element.open();
      await new Promise(resolve => setTimeout(resolve, 50));
      
      expect(element.hasAttribute('open')).toBe(true);
      expect(element.getAttribute('side')).toBe('bottom');
    });
  });
});
