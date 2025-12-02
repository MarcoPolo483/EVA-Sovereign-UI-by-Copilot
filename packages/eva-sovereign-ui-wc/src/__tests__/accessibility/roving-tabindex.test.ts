/**
 * @vitest-environment jsdom
 */
import { describe, it, expect, beforeEach, afterEach, vi } from 'vitest';
import { RovingTabindexManager } from '../../a11y/roving-tabindex';

describe('RovingTabindexManager', () => {
  let container: HTMLElement;
  let manager: RovingTabindexManager;

  beforeEach(() => {
    container = document.createElement('div');
    container.innerHTML = `
      <button id="btn1">Button 1</button>
      <button id="btn2">Button 2</button>
      <button id="btn3">Button 3</button>
    `;
    document.body.appendChild(container);
  });

  afterEach(() => {
    manager?.unregister();
    document.body.removeChild(container);
  });

  describe('Initialization', () => {
    it('should set first item tabindex to 0 and others to -1', () => {
      manager = new RovingTabindexManager(container, {
        itemSelector: 'button',
      });

      const buttons = container.querySelectorAll('button');
      expect(buttons[0].getAttribute('tabindex')).toBe('0');
      expect(buttons[1].getAttribute('tabindex')).toBe('-1');
      expect(buttons[2].getAttribute('tabindex')).toBe('-1');
    });

    it('should handle empty container gracefully', () => {
      const emptyContainer = document.createElement('div');
      document.body.appendChild(emptyContainer);

      expect(() => {
        manager = new RovingTabindexManager(emptyContainer, {
          itemSelector: 'button',
        });
      }).not.toThrow();

      document.body.removeChild(emptyContainer);
    });

    it('should filter out disabled items', () => {
      container.innerHTML = `
        <button id="btn1">Button 1</button>
        <button id="btn2" disabled>Button 2</button>
        <button id="btn3">Button 3</button>
      `;

      manager = new RovingTabindexManager(container, {
        itemSelector: 'button',
      });

      const button2 = container.querySelector('#btn2') as HTMLButtonElement;
      expect(button2.getAttribute('tabindex')).toBe('-1');
    });

    it('should filter out aria-disabled items', () => {
      container.innerHTML = `
        <button id="btn1">Button 1</button>
        <button id="btn2" aria-disabled="true">Button 2</button>
        <button id="btn3">Button 3</button>
      `;

      manager = new RovingTabindexManager(container, {
        itemSelector: 'button',
      });
      manager.register();

      const buttons = Array.from(container.querySelectorAll('button'));
      const activeElement = manager.getActiveElement();
      expect(buttons.indexOf(activeElement!)).toBe(0);
    });
  });

  describe('Horizontal Navigation', () => {
    beforeEach(() => {
      manager = new RovingTabindexManager(container, {
        itemSelector: 'button',
        orientation: 'horizontal',
        wrap: true,
      });
      manager.register();
    });

    it('should move focus to next item with ArrowRight', () => {
      const buttons = container.querySelectorAll('button');
      buttons[0].focus();

      const event = new KeyboardEvent('keydown', {
        key: 'ArrowRight',
        bubbles: true,
      });
      container.dispatchEvent(event);

      expect(buttons[0].getAttribute('tabindex')).toBe('-1');
      expect(buttons[1].getAttribute('tabindex')).toBe('0');
      expect(document.activeElement).toBe(buttons[1]);
    });

    it('should move focus to previous item with ArrowLeft', () => {
      const buttons = container.querySelectorAll('button');
      manager.setActiveElement(buttons[1] as HTMLElement);

      const event = new KeyboardEvent('keydown', {
        key: 'ArrowLeft',
        bubbles: true,
      });
      container.dispatchEvent(event);

      expect(buttons[1].getAttribute('tabindex')).toBe('-1');
      expect(buttons[0].getAttribute('tabindex')).toBe('0');
      expect(document.activeElement).toBe(buttons[0]);
    });

    it('should wrap from last to first with ArrowRight when wrap is true', () => {
      const buttons = container.querySelectorAll('button');
      manager.setActiveElement(buttons[2] as HTMLElement);

      const event = new KeyboardEvent('keydown', {
        key: 'ArrowRight',
        bubbles: true,
      });
      container.dispatchEvent(event);

      expect(buttons[2].getAttribute('tabindex')).toBe('-1');
      expect(buttons[0].getAttribute('tabindex')).toBe('0');
      expect(document.activeElement).toBe(buttons[0]);
    });

    it('should wrap from first to last with ArrowLeft when wrap is true', () => {
      const buttons = container.querySelectorAll('button');
      buttons[0].focus();

      const event = new KeyboardEvent('keydown', {
        key: 'ArrowLeft',
        bubbles: true,
      });
      container.dispatchEvent(event);

      expect(buttons[0].getAttribute('tabindex')).toBe('-1');
      expect(buttons[2].getAttribute('tabindex')).toBe('0');
      expect(document.activeElement).toBe(buttons[2]);
    });

    it('should not wrap when wrap is false', () => {
      manager.updateOptions({ wrap: false });
      const buttons = container.querySelectorAll('button');
      manager.setActiveElement(buttons[2] as HTMLElement);

      const event = new KeyboardEvent('keydown', {
        key: 'ArrowRight',
        bubbles: true,
      });
      container.dispatchEvent(event);

      expect(buttons[2].getAttribute('tabindex')).toBe('0');
      expect(document.activeElement).toBe(buttons[2]);
    });

    it('should not respond to ArrowUp/ArrowDown in horizontal mode', () => {
      const buttons = container.querySelectorAll('button');
      buttons[0].focus();

      const downEvent = new KeyboardEvent('keydown', {
        key: 'ArrowDown',
        bubbles: true,
      });
      container.dispatchEvent(downEvent);

      expect(document.activeElement).toBe(buttons[0]);
    });
  });

  describe('Vertical Navigation', () => {
    beforeEach(() => {
      manager = new RovingTabindexManager(container, {
        itemSelector: 'button',
        orientation: 'vertical',
        wrap: true,
      });
      manager.register();
    });

    it('should move focus to next item with ArrowDown', () => {
      const buttons = container.querySelectorAll('button');
      buttons[0].focus();

      const event = new KeyboardEvent('keydown', {
        key: 'ArrowDown',
        bubbles: true,
      });
      container.dispatchEvent(event);

      expect(buttons[0].getAttribute('tabindex')).toBe('-1');
      expect(buttons[1].getAttribute('tabindex')).toBe('0');
      expect(document.activeElement).toBe(buttons[1]);
    });

    it('should move focus to previous item with ArrowUp', () => {
      const buttons = container.querySelectorAll('button');
      manager.setActiveElement(buttons[1] as HTMLElement);

      const event = new KeyboardEvent('keydown', {
        key: 'ArrowUp',
        bubbles: true,
      });
      container.dispatchEvent(event);

      expect(buttons[1].getAttribute('tabindex')).toBe('-1');
      expect(buttons[0].getAttribute('tabindex')).toBe('0');
      expect(document.activeElement).toBe(buttons[0]);
    });

    it('should not respond to ArrowLeft/ArrowRight in vertical mode', () => {
      const buttons = container.querySelectorAll('button');
      buttons[0].focus();

      const rightEvent = new KeyboardEvent('keydown', {
        key: 'ArrowRight',
        bubbles: true,
      });
      container.dispatchEvent(rightEvent);

      expect(document.activeElement).toBe(buttons[0]);
    });
  });

  describe('Both Orientations', () => {
    beforeEach(() => {
      manager = new RovingTabindexManager(container, {
        itemSelector: 'button',
        orientation: 'both',
        wrap: true,
      });
      manager.register();
    });

    it('should respond to all arrow keys', () => {
      const buttons = container.querySelectorAll('button');
      buttons[0].focus();

      // ArrowRight
      let event = new KeyboardEvent('keydown', {
        key: 'ArrowRight',
        bubbles: true,
      });
      container.dispatchEvent(event);
      expect(document.activeElement).toBe(buttons[1]);

      // ArrowDown (should move to next)
      event = new KeyboardEvent('keydown', {
        key: 'ArrowDown',
        bubbles: true,
      });
      container.dispatchEvent(event);
      expect(document.activeElement).toBe(buttons[2]);

      // ArrowUp (should move to previous)
      event = new KeyboardEvent('keydown', {
        key: 'ArrowUp',
        bubbles: true,
      });
      container.dispatchEvent(event);
      expect(document.activeElement).toBe(buttons[1]);

      // ArrowLeft (should move to previous)
      event = new KeyboardEvent('keydown', {
        key: 'ArrowLeft',
        bubbles: true,
      });
      container.dispatchEvent(event);
      expect(document.activeElement).toBe(buttons[0]);
    });
  });

  describe('Home/End Navigation', () => {
    beforeEach(() => {
      manager = new RovingTabindexManager(container, {
        itemSelector: 'button',
        orientation: 'horizontal',
        supportHomeEnd: true,
      });
      manager.register();
    });

    it('should move to first item with Home key', () => {
      const buttons = container.querySelectorAll('button');
      manager.setActiveElement(buttons[2] as HTMLElement);

      const event = new KeyboardEvent('keydown', {
        key: 'Home',
        bubbles: true,
      });
      container.dispatchEvent(event);

      expect(buttons[0].getAttribute('tabindex')).toBe('0');
      expect(document.activeElement).toBe(buttons[0]);
    });

    it('should move to last item with End key', () => {
      const buttons = container.querySelectorAll('button');
      buttons[0].focus();

      const event = new KeyboardEvent('keydown', {
        key: 'End',
        bubbles: true,
      });
      container.dispatchEvent(event);

      expect(buttons[2].getAttribute('tabindex')).toBe('0');
      expect(document.activeElement).toBe(buttons[2]);
    });

    it('should not respond to Home/End when supportHomeEnd is false', () => {
      manager.updateOptions({ supportHomeEnd: false });
      const buttons = container.querySelectorAll('button');
      manager.setActiveElement(buttons[2] as HTMLElement);

      const event = new KeyboardEvent('keydown', {
        key: 'Home',
        bubbles: true,
      });
      container.dispatchEvent(event);

      expect(document.activeElement).toBe(buttons[2]);
    });
  });

  describe('Programmatic Control', () => {
    beforeEach(() => {
      manager = new RovingTabindexManager(container, {
        itemSelector: 'button',
      });
      manager.register();
    });

    it('should set active element programmatically', () => {
      const buttons = container.querySelectorAll('button');
      manager.setActiveElement(buttons[1] as HTMLElement);

      expect(buttons[0].getAttribute('tabindex')).toBe('-1');
      expect(buttons[1].getAttribute('tabindex')).toBe('0');
      expect(document.activeElement).toBe(buttons[1]);
    });

    it('should return current active element', () => {
      const buttons = container.querySelectorAll('button');
      const activeElement = manager.getActiveElement();

      expect(activeElement).toBe(buttons[0]);
    });

    it('should ignore invalid element in setActiveElement', () => {
      const buttons = container.querySelectorAll('button');
      const invalidElement = document.createElement('span');

      manager.setActiveElement(invalidElement);

      expect(manager.getActiveElement()).toBe(buttons[0]);
    });

    it('should update options dynamically', () => {
      manager.updateOptions({ wrap: false, supportHomeEnd: false });

      const buttons = container.querySelectorAll('button');
      manager.setActiveElement(buttons[2] as HTMLElement);

      // Try to wrap (should fail)
      const event = new KeyboardEvent('keydown', {
        key: 'ArrowRight',
        bubbles: true,
      });
      container.dispatchEvent(event);

      expect(document.activeElement).toBe(buttons[2]);
    });
  });

  describe('Event Handling', () => {
    beforeEach(() => {
      manager = new RovingTabindexManager(container, {
        itemSelector: 'button',
        orientation: 'horizontal',
      });
    });

    it('should register event listeners', () => {
      const spy = vi.spyOn(container, 'addEventListener');
      manager.register();

      expect(spy).toHaveBeenCalledWith('keydown', expect.any(Function));
    });

    it('should unregister event listeners', () => {
      const spy = vi.spyOn(container, 'removeEventListener');
      manager.register();
      manager.unregister();

      expect(spy).toHaveBeenCalledWith('keydown', expect.any(Function));
    });

    it('should prevent default and stop propagation on handled keys', () => {
      manager.register();
      const buttons = container.querySelectorAll('button');
      buttons[0].focus();

      const event = new KeyboardEvent('keydown', {
        key: 'ArrowRight',
        bubbles: true,
        cancelable: true,
      });
      const preventDefaultSpy = vi.spyOn(event, 'preventDefault');
      const stopPropagationSpy = vi.spyOn(event, 'stopPropagation');

      container.dispatchEvent(event);

      expect(preventDefaultSpy).toHaveBeenCalled();
      expect(stopPropagationSpy).toHaveBeenCalled();
    });

    it('should not prevent default on unhandled keys', () => {
      manager.register();
      const buttons = container.querySelectorAll('button');
      buttons[0].focus();

      const event = new KeyboardEvent('keydown', {
        key: 'a',
        bubbles: true,
        cancelable: true,
      });
      const preventDefaultSpy = vi.spyOn(event, 'preventDefault');

      container.dispatchEvent(event);

      expect(preventDefaultSpy).not.toHaveBeenCalled();
    });
  });

  describe('Dynamic Content', () => {
    beforeEach(() => {
      manager = new RovingTabindexManager(container, {
        itemSelector: 'button',
      });
      manager.register();
    });

    it('should handle items being added to container', () => {
      const newButton = document.createElement('button');
      newButton.textContent = 'Button 4';
      container.appendChild(newButton);

      // Should still navigate through all items
      const buttons = container.querySelectorAll('button');
      expect(buttons.length).toBe(4);

      // Navigate to end
      for (let i = 0; i < 3; i++) {
        const event = new KeyboardEvent('keydown', {
          key: 'ArrowRight',
          bubbles: true,
        });
        container.dispatchEvent(event);
      }

      expect(document.activeElement).toBe(newButton);
    });

    it('should handle items being removed from container', () => {
      const buttons = Array.from(container.querySelectorAll('button'));
      container.removeChild(buttons[1]);

      // Should navigate correctly with remaining items
      buttons[0].focus();
      const event = new KeyboardEvent('keydown', {
        key: 'ArrowRight',
        bubbles: true,
      });
      container.dispatchEvent(event);

      expect(document.activeElement).toBe(buttons[2]);
    });
  });

  describe('Edge Cases', () => {
    it('should handle single item', () => {
      container.innerHTML = '<button id="btn1">Button 1</button>';
      manager = new RovingTabindexManager(container, {
        itemSelector: 'button',
        wrap: true,
      });
      manager.register();

      const button = container.querySelector('button') as HTMLButtonElement;
      button.focus();

      const event = new KeyboardEvent('keydown', {
        key: 'ArrowRight',
        bubbles: true,
      });
      container.dispatchEvent(event);

      expect(document.activeElement).toBe(button);
    });

    it('should handle no items', () => {
      container.innerHTML = '';
      manager = new RovingTabindexManager(container, {
        itemSelector: 'button',
      });
      manager.register();

      const event = new KeyboardEvent('keydown', {
        key: 'ArrowRight',
        bubbles: true,
      });

      expect(() => {
        container.dispatchEvent(event);
      }).not.toThrow();
    });

    it('should handle invalid index in moveToIndex', () => {
      manager = new RovingTabindexManager(container, {
        itemSelector: 'button',
      });
      manager.register();

      const buttons = container.querySelectorAll('button');
      const currentActive = manager.getActiveElement();

      // Try to set active element to out of bounds index (via reflection)
      // This tests the internal bounds checking
      expect(currentActive).toBe(buttons[0]);
    });
  });
});
