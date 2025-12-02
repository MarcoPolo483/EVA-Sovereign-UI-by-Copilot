/**
 * @vitest-environment jsdom
 */
import { describe, it, expect, beforeEach, afterEach, vi } from 'vitest';
import { FocusTrap } from '../../a11y/focus-trap';

describe('FocusTrap', () => {
  let container: HTMLElement;
  let trap: FocusTrap;
  let outsideElement: HTMLButtonElement;

  beforeEach(() => {
    container = document.createElement('div');
    container.innerHTML = `
      <button id="btn1">Button 1</button>
      <input id="input1" type="text" />
      <button id="btn2">Button 2</button>
    `;
    document.body.appendChild(container);

    outsideElement = document.createElement('button');
    outsideElement.id = 'outside';
    outsideElement.textContent = 'Outside Button';
    document.body.appendChild(outsideElement);
  });

  afterEach(() => {
    trap?.deactivate();
    document.body.removeChild(container);
    document.body.removeChild(outsideElement);
  });

  describe('Activation', () => {
    it('should store previously focused element on activate', () => {
      outsideElement.focus();
      trap = new FocusTrap(container);
      trap.activate();

      expect(trap.isActivated()).toBe(true);
    });

    it('should focus first focusable element by default', () => {
      trap = new FocusTrap(container);
      trap.activate();

      const firstButton = container.querySelector('#btn1') as HTMLButtonElement;
      expect(document.activeElement).toBe(firstButton);
    });

    it('should focus element specified by initialFocus selector', () => {
      trap = new FocusTrap(container, {
        initialFocus: '#input1',
      });
      trap.activate();

      const input = container.querySelector('#input1') as HTMLInputElement;
      expect(document.activeElement).toBe(input);
    });

    it('should focus element specified by initialFocus element', () => {
      const input = container.querySelector('#input1') as HTMLInputElement;
      trap = new FocusTrap(container, {
        initialFocus: input,
      });
      trap.activate();

      expect(document.activeElement).toBe(input);
    });

    it('should not activate twice', () => {
      trap = new FocusTrap(container);
      trap.activate();
      const firstActiveElement = document.activeElement;

      trap.activate();
      expect(document.activeElement).toBe(firstActiveElement);
    });

    it('should handle container with no focusable elements', () => {
      container.innerHTML = '<div>No focusable elements</div>';
      trap = new FocusTrap(container);

      expect(() => {
        trap.activate();
      }).not.toThrow();
    });
  });

  describe('Deactivation', () => {
    it('should return focus to previously focused element', () => {
      outsideElement.focus();
      trap = new FocusTrap(container, {
        returnFocusOnDeactivate: true,
      });
      trap.activate();
      trap.deactivate();

      expect(document.activeElement).toBe(outsideElement);
      expect(trap.isActivated()).toBe(false);
    });

    it('should not return focus when returnFocusOnDeactivate is false', () => {
      outsideElement.focus();
      trap = new FocusTrap(container, {
        returnFocusOnDeactivate: false,
      });
      trap.activate();

      const activeElementBeforeDeactivate = document.activeElement;
      trap.deactivate();

      expect(document.activeElement).not.toBe(outsideElement);
      expect(document.activeElement).toBe(activeElementBeforeDeactivate);
    });

    it('should not deactivate if not activated', () => {
      trap = new FocusTrap(container);

      expect(() => {
        trap.deactivate();
      }).not.toThrow();
    });

    it('should handle previously focused element being removed from DOM', () => {
      const tempButton = document.createElement('button');
      document.body.appendChild(tempButton);
      tempButton.focus();

      trap = new FocusTrap(container);
      trap.activate();

      document.body.removeChild(tempButton);

      expect(() => {
        trap.deactivate();
      }).not.toThrow();
    });
  });

  describe('Tab Key Cycling', () => {
    beforeEach(() => {
      trap = new FocusTrap(container);
      trap.activate();
    });

    it('should cycle focus forward with Tab key', () => {
      const btn1 = container.querySelector('#btn1') as HTMLButtonElement;
      const input = container.querySelector('#input1') as HTMLInputElement;
      btn1.focus();

      const event = new KeyboardEvent('keydown', {
        key: 'Tab',
        bubbles: true,
        cancelable: true,
      });
      container.dispatchEvent(event);

      // Focus should move to next element
      expect(document.activeElement).toBe(input);
    });

    it('should cycle focus backward with Shift+Tab', () => {
      const input = container.querySelector('#input1') as HTMLInputElement;
      const btn1 = container.querySelector('#btn1') as HTMLButtonElement;
      input.focus();

      const event = new KeyboardEvent('keydown', {
        key: 'Tab',
        shiftKey: true,
        bubbles: true,
        cancelable: true,
      });
      container.dispatchEvent(event);

      // Focus should move to previous element
      expect(document.activeElement).toBe(btn1);
    });

    it('should wrap focus from last to first element with Tab', () => {
      const btn2 = container.querySelector('#btn2') as HTMLButtonElement;
      const btn1 = container.querySelector('#btn1') as HTMLButtonElement;
      btn2.focus();

      const event = new KeyboardEvent('keydown', {
        key: 'Tab',
        bubbles: true,
        cancelable: true,
      });
      const preventDefaultSpy = vi.spyOn(event, 'preventDefault');
      container.dispatchEvent(event);

      expect(preventDefaultSpy).toHaveBeenCalled();
      expect(document.activeElement).toBe(btn1);
    });

    it('should wrap focus from first to last element with Shift+Tab', () => {
      const btn1 = container.querySelector('#btn1') as HTMLButtonElement;
      const btn2 = container.querySelector('#btn2') as HTMLButtonElement;
      btn1.focus();

      const event = new KeyboardEvent('keydown', {
        key: 'Tab',
        shiftKey: true,
        bubbles: true,
        cancelable: true,
      });
      const preventDefaultSpy = vi.spyOn(event, 'preventDefault');
      container.dispatchEvent(event);

      expect(preventDefaultSpy).toHaveBeenCalled();
      expect(document.activeElement).toBe(btn2);
    });

    it('should prevent Tab in container with no focusable elements', () => {
      trap.deactivate();
      container.innerHTML = '<div>No focusable elements</div>';
      trap = new FocusTrap(container);
      trap.activate();

      const event = new KeyboardEvent('keydown', {
        key: 'Tab',
        bubbles: true,
        cancelable: true,
      });
      const preventDefaultSpy = vi.spyOn(event, 'preventDefault');
      container.dispatchEvent(event);

      expect(preventDefaultSpy).toHaveBeenCalled();
    });

    it('should handle single focusable element', () => {
      trap.deactivate();
      container.innerHTML = '<button id="only">Only Button</button>';
      trap = new FocusTrap(container);
      trap.activate();

      const onlyButton = container.querySelector('#only') as HTMLButtonElement;
      onlyButton.focus();

      const event = new KeyboardEvent('keydown', {
        key: 'Tab',
        bubbles: true,
        cancelable: true,
      });
      const preventDefaultSpy = vi.spyOn(event, 'preventDefault');
      container.dispatchEvent(event);

      expect(preventDefaultSpy).toHaveBeenCalled();
      expect(document.activeElement).toBe(onlyButton);
    });
  });

  describe('Escape Key', () => {
    it('should call onEscape callback when Escape is pressed', () => {
      const onEscape = vi.fn();
      trap = new FocusTrap(container, {
        escapeDeactivates: true,
        onEscape,
      });
      trap.activate();

      const event = new KeyboardEvent('keydown', {
        key: 'Escape',
        bubbles: true,
        cancelable: true,
      });
      const preventDefaultSpy = vi.spyOn(event, 'preventDefault');
      container.dispatchEvent(event);

      expect(preventDefaultSpy).toHaveBeenCalled();
      expect(onEscape).toHaveBeenCalled();
    });

    it('should not call onEscape when escapeDeactivates is false', () => {
      const onEscape = vi.fn();
      trap = new FocusTrap(container, {
        escapeDeactivates: false,
        onEscape,
      });
      trap.activate();

      const event = new KeyboardEvent('keydown', {
        key: 'Escape',
        bubbles: true,
        cancelable: true,
      });
      container.dispatchEvent(event);

      expect(onEscape).not.toHaveBeenCalled();
    });
  });

  describe('Focusable Elements', () => {
    it('should include links with href', () => {
      container.innerHTML = `
        <a id="link" href="#test">Link</a>
        <button id="btn">Button</button>
      `;
      trap = new FocusTrap(container);
      trap.activate();

      const link = container.querySelector('#link') as HTMLAnchorElement;
      expect(document.activeElement).toBe(link);
    });

    it('should exclude disabled elements', () => {
      container.innerHTML = `
        <button disabled>Disabled Button</button>
        <button id="enabled">Enabled Button</button>
      `;
      trap = new FocusTrap(container);
      trap.activate();

      const enabledButton = container.querySelector('#enabled') as HTMLButtonElement;
      expect(document.activeElement).toBe(enabledButton);
    });

    it('should exclude aria-hidden elements', () => {
      container.innerHTML = `
        <button aria-hidden="true">Hidden Button</button>
        <button id="visible">Visible Button</button>
      `;
      trap = new FocusTrap(container);
      trap.activate();

      const visibleButton = container.querySelector('#visible') as HTMLButtonElement;
      expect(document.activeElement).toBe(visibleButton);
    });

    it('should exclude elements with tabindex="-1"', () => {
      container.innerHTML = `
        <button tabindex="-1">Unfocusable Button</button>
        <button id="focusable">Focusable Button</button>
      `;
      trap = new FocusTrap(container);
      trap.activate();

      const focusableButton = container.querySelector('#focusable') as HTMLButtonElement;
      expect(document.activeElement).toBe(focusableButton);
    });

    it('should include contenteditable elements', () => {
      container.innerHTML = `
        <div id="editor" contenteditable="true">Editable</div>
        <button id="btn">Button</button>
      `;
      trap = new FocusTrap(container);
      trap.activate();

      const editor = container.querySelector('#editor') as HTMLDivElement;
      expect(document.activeElement).toBe(editor);
    });

    it('should include select and textarea elements', () => {
      container.innerHTML = `
        <select id="select"><option>Option</option></select>
        <textarea id="textarea"></textarea>
        <button id="btn">Button</button>
      `;
      trap = new FocusTrap(container);
      trap.activate();

      const select = container.querySelector('#select') as HTMLSelectElement;
      expect(document.activeElement).toBe(select);
    });

    it('should exclude invisible elements (offsetParent === null)', () => {
      container.innerHTML = `
        <button style="display: none;">Hidden Button</button>
        <button id="visible">Visible Button</button>
      `;
      trap = new FocusTrap(container);
      trap.activate();

      const visibleButton = container.querySelector('#visible') as HTMLButtonElement;
      expect(document.activeElement).toBe(visibleButton);
    });
  });

  describe('Options Update', () => {
    it('should update options dynamically', () => {
      const onEscape1 = vi.fn();
      trap = new FocusTrap(container, {
        escapeDeactivates: false,
        onEscape: onEscape1,
      });
      trap.activate();

      const onEscape2 = vi.fn();
      trap.updateOptions({
        escapeDeactivates: true,
        onEscape: onEscape2,
      });

      const event = new KeyboardEvent('keydown', {
        key: 'Escape',
        bubbles: true,
        cancelable: true,
      });
      container.dispatchEvent(event);

      expect(onEscape1).not.toHaveBeenCalled();
      expect(onEscape2).toHaveBeenCalled();
    });

    it('should update returnFocusOnDeactivate option', () => {
      outsideElement.focus();
      trap = new FocusTrap(container, {
        returnFocusOnDeactivate: false,
      });
      trap.activate();

      trap.updateOptions({
        returnFocusOnDeactivate: true,
      });

      trap.deactivate();

      expect(document.activeElement).toBe(outsideElement);
    });
  });

  describe('Event Listeners', () => {
    it('should add event listener on activate', () => {
      const spy = vi.spyOn(container, 'addEventListener');
      trap = new FocusTrap(container);
      trap.activate();

      expect(spy).toHaveBeenCalledWith('keydown', expect.any(Function));
    });

    it('should remove event listener on deactivate', () => {
      const spy = vi.spyOn(container, 'removeEventListener');
      trap = new FocusTrap(container);
      trap.activate();
      trap.deactivate();

      expect(spy).toHaveBeenCalledWith('keydown', expect.any(Function));
    });

    it('should not handle events after deactivation', () => {
      const onEscape = vi.fn();
      trap = new FocusTrap(container, {
        escapeDeactivates: true,
        onEscape,
      });
      trap.activate();
      trap.deactivate();

      const event = new KeyboardEvent('keydown', {
        key: 'Escape',
        bubbles: true,
      });
      container.dispatchEvent(event);

      expect(onEscape).not.toHaveBeenCalled();
    });
  });

  describe('Complex Scenarios', () => {
    it('should handle nested focusable elements', () => {
      container.innerHTML = `
        <div>
          <button id="btn1">Button 1</button>
          <div>
            <input id="input1" type="text" />
            <div>
              <button id="btn2">Button 2</button>
            </div>
          </div>
        </div>
      `;
      trap = new FocusTrap(container);
      trap.activate();

      const btn1 = container.querySelector('#btn1') as HTMLButtonElement;
      expect(document.activeElement).toBe(btn1);

      // Tab through nested elements
      let event = new KeyboardEvent('keydown', {
        key: 'Tab',
        bubbles: true,
        cancelable: true,
      });
      container.dispatchEvent(event);

      const input = container.querySelector('#input1') as HTMLInputElement;
      expect(document.activeElement).toBe(input);

      event = new KeyboardEvent('keydown', {
        key: 'Tab',
        bubbles: true,
        cancelable: true,
      });
      container.dispatchEvent(event);

      const btn2 = container.querySelector('#btn2') as HTMLButtonElement;
      expect(document.activeElement).toBe(btn2);
    });

    it('should handle dynamic content changes', () => {
      trap = new FocusTrap(container);
      trap.activate();

      // Add new focusable element
      const newButton = document.createElement('button');
      newButton.id = 'new-btn';
      newButton.textContent = 'New Button';
      container.appendChild(newButton);

      // Tab to last element (should now include new button)
      const btn2 = container.querySelector('#btn2') as HTMLButtonElement;
      btn2.focus();

      const event = new KeyboardEvent('keydown', {
        key: 'Tab',
        bubbles: true,
        cancelable: true,
      });
      container.dispatchEvent(event);

      expect(document.activeElement).toBe(newButton);
    });

    it('should maintain trap after element removal', () => {
      trap = new FocusTrap(container);
      trap.activate();

      const btn1 = container.querySelector('#btn1') as HTMLButtonElement;
      container.removeChild(btn1);

      // Should still trap focus with remaining elements
      const input = container.querySelector('#input1') as HTMLInputElement;
      input.focus();

      const event = new KeyboardEvent('keydown', {
        key: 'Tab',
        bubbles: true,
        cancelable: true,
      });
      container.dispatchEvent(event);

      const btn2 = container.querySelector('#btn2') as HTMLButtonElement;
      expect(document.activeElement).toBe(btn2);
    });
  });

  describe('Edge Cases', () => {
    it('should handle invalid initialFocus selector', () => {
      trap = new FocusTrap(container, {
        initialFocus: '#nonexistent',
      });

      expect(() => {
        trap.activate();
      }).not.toThrow();

      // Should fall back to first focusable element
      const btn1 = container.querySelector('#btn1') as HTMLButtonElement;
      expect(document.activeElement).toBe(btn1);
    });

    it('should handle being activated multiple times', () => {
      trap = new FocusTrap(container);
      trap.activate();
      const firstFocus = document.activeElement;

      trap.activate();
      expect(document.activeElement).toBe(firstFocus);
    });

    it('should handle being deactivated multiple times', () => {
      trap = new FocusTrap(container);
      trap.activate();
      trap.deactivate();

      expect(() => {
        trap.deactivate();
      }).not.toThrow();
    });

    it('should work with form elements', () => {
      container.innerHTML = `
        <form>
          <input type="text" id="text" />
          <input type="checkbox" id="checkbox" />
          <input type="radio" id="radio" name="test" />
          <button type="submit" id="submit">Submit</button>
        </form>
      `;
      trap = new FocusTrap(container);
      trap.activate();

      const textInput = container.querySelector('#text') as HTMLInputElement;
      expect(document.activeElement).toBe(textInput);

      // Tab through form elements
      for (let i = 0; i < 3; i++) {
        const event = new KeyboardEvent('keydown', {
          key: 'Tab',
          bubbles: true,
          cancelable: true,
        });
        container.dispatchEvent(event);
      }

      const submitButton = container.querySelector('#submit') as HTMLButtonElement;
      expect(document.activeElement).toBe(submitButton);
    });
  });
});
