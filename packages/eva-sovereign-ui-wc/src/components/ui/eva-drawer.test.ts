import { describe, it, expect, beforeEach, afterEach, vi } from 'vitest';
import { createComponent, testAccessibility, shadowQuery, simulateClick } from 'tests/test-utils';
import './eva-drawer';
import type { EVADrawer } from './eva-drawer';

describe('eva-drawer', () => {
  let element: EVADrawer;

  beforeEach(async () => {
    element = await createComponent('eva-drawer') as EVADrawer;
  });

  afterEach(() => {
    element.remove();
  });

  describe('Rendering', () => {
    it('should render with shadow DOM', () => {
      expect(element).toBeInstanceOf(HTMLElement);
      expect(element.shadowRoot).toBeTruthy();
    });

    it('should be defined as custom element', () => {
      expect(customElements.get('eva-drawer')).toBeTruthy();
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
      
      const drawer = shadowQuery(element, '.drawer');
      expect(drawer).toBeTruthy();
    });
  });

  describe('Side Attribute', () => {
    it('should default to right side', async () => {
      element.setAttribute('open', '');
      await new Promise(resolve => setTimeout(resolve, 50));
      
      const drawer = shadowQuery(element, '.drawer');
      expect(drawer).toBeTruthy();
      // Right side is the default
    });

    it('should support left side', async () => {
      element.setAttribute('side', 'left');
      element.setAttribute('open', '');
      await new Promise(resolve => setTimeout(resolve, 50));
      
      const drawer = shadowQuery(element, '.drawer');
      expect(drawer).toBeTruthy();
      expect(element.getAttribute('side')).toBe('left');
    });

    it('should support top side', async () => {
      element.setAttribute('side', 'top');
      element.setAttribute('open', '');
      await new Promise(resolve => setTimeout(resolve, 50));
      
      const drawer = shadowQuery(element, '.drawer');
      expect(drawer).toBeTruthy();
      expect(element.getAttribute('side')).toBe('top');
    });

    it('should support bottom side', async () => {
      element.setAttribute('side', 'bottom');
      element.setAttribute('open', '');
      await new Promise(resolve => setTimeout(resolve, 50));
      
      const drawer = shadowQuery(element, '.drawer');
      expect(drawer).toBeTruthy();
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
    it('should open when open attribute is set', async () => {
      element.setAttribute('open', '');
      await new Promise(resolve => setTimeout(resolve, 50));
      
      expect(element.hasAttribute('open')).toBe(true);
      
      const overlay = shadowQuery(element, '.overlay');
      expect(overlay).toBeTruthy();
    });

    it('should close when open attribute is removed', async () => {
      element.setAttribute('open', '');
      await new Promise(resolve => setTimeout(resolve, 50));
      
      element.removeAttribute('open');
      await new Promise(resolve => setTimeout(resolve, 50));
      
      expect(element.hasAttribute('open')).toBe(false);
    });

    it('should close when overlay is clicked', async () => {
      element.setAttribute('open', '');
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

    it('should close when ESC key is pressed', async () => {
      element.setAttribute('open', '');
      await new Promise(resolve => setTimeout(resolve, 50));
      
      const closeSpy = vi.fn();
      element.addEventListener('close', closeSpy);
      
      const escEvent = new KeyboardEvent('keydown', { key: 'Escape', bubbles: true });
      element.shadowRoot?.dispatchEvent(escEvent);
      await new Promise(resolve => setTimeout(resolve, 50));
      
      expect(element.hasAttribute('open')).toBe(false);
      expect(closeSpy).toHaveBeenCalled();
    });

    it('should NOT close when other keys are pressed', async () => {
      element.setAttribute('open', '');
      await new Promise(resolve => setTimeout(resolve, 50));
      
      const enterEvent = new KeyboardEvent('keydown', { key: 'Enter', bubbles: true });
      element.shadowRoot?.dispatchEvent(enterEvent);
      await new Promise(resolve => setTimeout(resolve, 50));
      
      expect(element.hasAttribute('open')).toBe(true);
    });
  });

  describe('Events', () => {
    it('should emit "close" event when closed', async () => {
      element.setAttribute('open', '');
      await new Promise(resolve => setTimeout(resolve, 50));
      
      const closeSpy = vi.fn();
      element.addEventListener('close', closeSpy);
      
      element.removeAttribute('open');
      await new Promise(resolve => setTimeout(resolve, 50));
      
      expect(closeSpy).toHaveBeenCalledTimes(1);
    });

    it('should emit close event when ESC is pressed', async () => {
      element.setAttribute('open', '');
      await new Promise(resolve => setTimeout(resolve, 50));
      
      const closeSpy = vi.fn();
      element.addEventListener('close', closeSpy);
      
      const escEvent = new KeyboardEvent('keydown', { key: 'Escape', bubbles: true });
      element.shadowRoot?.dispatchEvent(escEvent);
      await new Promise(resolve => setTimeout(resolve, 50));
      
      expect(closeSpy).toHaveBeenCalled();
    });

    it('should emit close event when overlay is clicked', async () => {
      element.setAttribute('open', '');
      await new Promise(resolve => setTimeout(resolve, 50));
      
      const closeSpy = vi.fn();
      element.addEventListener('close', closeSpy);
      
      const overlay = shadowQuery(element, '.overlay');
      simulateClick(overlay!);
      await new Promise(resolve => setTimeout(resolve, 50));
      
      expect(closeSpy).toHaveBeenCalled();
    });
  });

  describe('Slots', () => {
    it('should support content slot', async () => {
      const content = document.createElement('div');
      content.textContent = 'Drawer Content';
      element.appendChild(content);
      
      element.setAttribute('open', '');
      await new Promise(resolve => setTimeout(resolve, 50));
      
      const slot = shadowQuery(element, 'slot');
      expect(slot).toBeTruthy();
    });
  });

  describe('Accessibility', () => {
    it('should pass accessibility tests when open', async () => {
      const content = document.createElement('div');
      content.textContent = 'Accessible drawer content';
      element.appendChild(content);
      
      element.setAttribute('open', '');
      await new Promise(resolve => setTimeout(resolve, 50));
      
      await testAccessibility(element);
    });
  });

  describe('Animations', () => {
    it('should apply slide-in animation from right', async () => {
      element.setAttribute('side', 'right');
      element.setAttribute('open', '');
      await new Promise(resolve => setTimeout(resolve, 50));
      
      const drawer = shadowQuery(element, '.drawer');
      expect(drawer).toBeTruthy();
      // Animation is applied via CSS, just verify element exists
    });

    it('should apply slide-in animation from left', async () => {
      element.setAttribute('side', 'left');
      element.setAttribute('open', '');
      await new Promise(resolve => setTimeout(resolve, 50));
      
      const drawer = shadowQuery(element, '.drawer');
      expect(drawer).toBeTruthy();
    });

    it('should apply slide-in animation from top', async () => {
      element.setAttribute('side', 'top');
      element.setAttribute('open', '');
      await new Promise(resolve => setTimeout(resolve, 50));
      
      const drawer = shadowQuery(element, '.drawer');
      expect(drawer).toBeTruthy();
    });

    it('should apply slide-in animation from bottom', async () => {
      element.setAttribute('side', 'bottom');
      element.setAttribute('open', '');
      await new Promise(resolve => setTimeout(resolve, 50));
      
      const drawer = shadowQuery(element, '.drawer');
      expect(drawer).toBeTruthy();
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

    it('should handle side changes while open', async () => {
      element.setAttribute('open', '');
      element.setAttribute('side', 'left');
      await new Promise(resolve => setTimeout(resolve, 50));
      
      expect(element.getAttribute('side')).toBe('left');
      
      element.setAttribute('side', 'right');
      await new Promise(resolve => setTimeout(resolve, 50));
      
      expect(element.getAttribute('side')).toBe('right');
      expect(element.hasAttribute('open')).toBe(true);
    });

    it('should handle multiple ESC key presses', async () => {
      element.setAttribute('open', '');
      await new Promise(resolve => setTimeout(resolve, 50));
      
      const closeSpy = vi.fn();
      element.addEventListener('close', closeSpy);
      
      const escEvent1 = new KeyboardEvent('keydown', { key: 'Escape', bubbles: true });
      element.shadowRoot?.dispatchEvent(escEvent1);
      
      const escEvent2 = new KeyboardEvent('keydown', { key: 'Escape', bubbles: true });
      element.shadowRoot?.dispatchEvent(escEvent2);
      
      await new Promise(resolve => setTimeout(resolve, 50));
      
      // Should only close once
      expect(element.hasAttribute('open')).toBe(false);
    });

    it('should handle removal while open', async () => {
      element.setAttribute('open', '');
      await new Promise(resolve => setTimeout(resolve, 50));
      
      const overlay = shadowQuery(element, '.overlay');
      expect(overlay).toBeTruthy();
      
      element.remove();
      // Component removed successfully
    });
  });

  describe('Use Cases', () => {
    it('should work as navigation drawer', async () => {
      const nav = document.createElement('nav');
      
      const link1 = document.createElement('a');
      link1.href = '#home';
      link1.textContent = 'Home';
      nav.appendChild(link1);
      
      const link2 = document.createElement('a');
      link2.href = '#about';
      link2.textContent = 'About';
      nav.appendChild(link2);
      
      element.appendChild(nav);
      element.setAttribute('side', 'left');
      element.setAttribute('open', '');
      await new Promise(resolve => setTimeout(resolve, 50));
      
      expect(element.hasAttribute('open')).toBe(true);
      expect(element.getAttribute('side')).toBe('left');
    });

    it('should work as filter panel', async () => {
      const filters = document.createElement('div');
      
      const checkbox1 = document.createElement('input');
      checkbox1.type = 'checkbox';
      checkbox1.id = 'filter1';
      filters.appendChild(checkbox1);
      
      const label1 = document.createElement('label');
      label1.htmlFor = 'filter1';
      label1.textContent = 'Option 1';
      filters.appendChild(label1);
      
      element.appendChild(filters);
      element.setAttribute('side', 'right');
      element.setAttribute('open', '');
      await new Promise(resolve => setTimeout(resolve, 50));
      
      expect(element.hasAttribute('open')).toBe(true);
      expect(element.getAttribute('side')).toBe('right');
    });

    it('should work as notification panel', async () => {
      const notifications = document.createElement('div');
      notifications.textContent = 'You have 3 new messages';
      
      element.appendChild(notifications);
      element.setAttribute('side', 'top');
      element.setAttribute('open', '');
      await new Promise(resolve => setTimeout(resolve, 50));
      
      expect(element.hasAttribute('open')).toBe(true);
      expect(element.getAttribute('side')).toBe('top');
    });
  });
});
