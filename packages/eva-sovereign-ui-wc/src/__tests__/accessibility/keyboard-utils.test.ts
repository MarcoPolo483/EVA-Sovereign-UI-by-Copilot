/**
 * @vitest-environment jsdom
 */
import { describe, it, expect, beforeEach, afterEach, vi } from 'vitest';
import {
  KeyCode,
  isNavigationKey,
  isActivationKey,
  isPrintableCharacter,
  getKeyPurpose,
  preventDefaultForKeys,
  simulateClick,
  handleActivationKeys,
  getNextFocusableElement,
  getPreviousFocusableElement,
  isFocusable,
  focusElement,
  createTypeaheadHandler,
} from '../../a11y/keyboard-utils';

describe('Keyboard Utils', () => {
  describe('KeyCode Enum', () => {
    it('should have all expected key codes', () => {
      expect(KeyCode.ENTER).toBe('Enter');
      expect(KeyCode.SPACE).toBe(' ');
      expect(KeyCode.ESCAPE).toBe('Escape');
      expect(KeyCode.TAB).toBe('Tab');
      expect(KeyCode.ARROW_UP).toBe('ArrowUp');
      expect(KeyCode.ARROW_DOWN).toBe('ArrowDown');
      expect(KeyCode.ARROW_LEFT).toBe('ArrowLeft');
      expect(KeyCode.ARROW_RIGHT).toBe('ArrowRight');
      expect(KeyCode.HOME).toBe('Home');
      expect(KeyCode.END).toBe('End');
      expect(KeyCode.PAGE_UP).toBe('PageUp');
      expect(KeyCode.PAGE_DOWN).toBe('PageDown');
      expect(KeyCode.DELETE).toBe('Delete');
      expect(KeyCode.BACKSPACE).toBe('Backspace');
    });
  });

  describe('isNavigationKey', () => {
    it('should return true for arrow keys', () => {
      expect(isNavigationKey('ArrowUp')).toBe(true);
      expect(isNavigationKey('ArrowDown')).toBe(true);
      expect(isNavigationKey('ArrowLeft')).toBe(true);
      expect(isNavigationKey('ArrowRight')).toBe(true);
    });

    it('should return true for Home and End keys', () => {
      expect(isNavigationKey('Home')).toBe(true);
      expect(isNavigationKey('End')).toBe(true);
    });

    it('should return true for PageUp and PageDown keys', () => {
      expect(isNavigationKey('PageUp')).toBe(true);
      expect(isNavigationKey('PageDown')).toBe(true);
    });

    it('should return false for non-navigation keys', () => {
      expect(isNavigationKey('Enter')).toBe(false);
      expect(isNavigationKey(' ')).toBe(false);
      expect(isNavigationKey('Escape')).toBe(false);
      expect(isNavigationKey('a')).toBe(false);
    });
  });

  describe('isActivationKey', () => {
    it('should return true for Enter key', () => {
      expect(isActivationKey('Enter')).toBe(true);
    });

    it('should return true for Space key', () => {
      expect(isActivationKey(' ')).toBe(true);
    });

    it('should return false for other keys', () => {
      expect(isActivationKey('ArrowUp')).toBe(false);
      expect(isActivationKey('a')).toBe(false);
      expect(isActivationKey('Escape')).toBe(false);
    });
  });

  describe('isPrintableCharacter', () => {
    it('should return true for single character keys', () => {
      const event = new KeyboardEvent('keydown', { key: 'a' });
      expect(isPrintableCharacter(event)).toBe(true);
    });

    it('should return true for numeric keys', () => {
      const event = new KeyboardEvent('keydown', { key: '5' });
      expect(isPrintableCharacter(event)).toBe(true);
    });

    it('should return false for control keys', () => {
      const event = new KeyboardEvent('keydown', { key: 'Enter' });
      expect(isPrintableCharacter(event)).toBe(false);
    });

    it('should return false for Ctrl+key combinations', () => {
      const event = new KeyboardEvent('keydown', { key: 'a', ctrlKey: true });
      expect(isPrintableCharacter(event)).toBe(false);
    });

    it('should return false for Meta+key combinations', () => {
      const event = new KeyboardEvent('keydown', { key: 'a', metaKey: true });
      expect(isPrintableCharacter(event)).toBe(false);
    });

    it('should return false for Alt+key combinations', () => {
      const event = new KeyboardEvent('keydown', { key: 'a', altKey: true });
      expect(isPrintableCharacter(event)).toBe(false);
    });

    it('should return false for multi-character keys', () => {
      const event = new KeyboardEvent('keydown', { key: 'ArrowUp' });
      expect(isPrintableCharacter(event)).toBe(false);
    });
  });

  describe('getKeyPurpose', () => {
    it('should return "navigation" for navigation keys', () => {
      expect(getKeyPurpose('ArrowUp')).toBe('navigation');
      expect(getKeyPurpose('Home')).toBe('navigation');
      expect(getKeyPurpose('PageDown')).toBe('navigation');
    });

    it('should return "activation" for activation keys', () => {
      expect(getKeyPurpose('Enter')).toBe('activation');
      expect(getKeyPurpose(' ')).toBe('activation');
    });

    it('should return "cancel" for Escape key', () => {
      expect(getKeyPurpose('Escape')).toBe('cancel');
    });

    it('should return "other" for other keys', () => {
      expect(getKeyPurpose('a')).toBe('other');
      expect(getKeyPurpose('Tab')).toBe('other');
      expect(getKeyPurpose('Delete')).toBe('other');
    });
  });

  describe('preventDefaultForKeys', () => {
    it('should prevent default for specified keys', () => {
      const event = new KeyboardEvent('keydown', {
        key: 'Enter',
        cancelable: true,
      });
      const spy = vi.spyOn(event, 'preventDefault');

      const result = preventDefaultForKeys(event, ['Enter', 'Space']);

      expect(spy).toHaveBeenCalled();
      expect(result).toBe(true);
    });

    it('should not prevent default for unspecified keys', () => {
      const event = new KeyboardEvent('keydown', {
        key: 'a',
        cancelable: true,
      });
      const spy = vi.spyOn(event, 'preventDefault');

      const result = preventDefaultForKeys(event, ['Enter', 'Space']);

      expect(spy).not.toHaveBeenCalled();
      expect(result).toBe(false);
    });

    it('should handle empty keys array', () => {
      const event = new KeyboardEvent('keydown', { key: 'Enter' });
      const result = preventDefaultForKeys(event, []);

      expect(result).toBe(false);
    });
  });

  describe('simulateClick', () => {
    it('should dispatch click event on element', () => {
      const button = document.createElement('button');
      const clickHandler = vi.fn();
      button.addEventListener('click', clickHandler);

      simulateClick(button);

      expect(clickHandler).toHaveBeenCalled();
    });

    it('should create bubbling click event', () => {
      const container = document.createElement('div');
      const button = document.createElement('button');
      container.appendChild(button);

      const containerClickHandler = vi.fn();
      container.addEventListener('click', containerClickHandler);

      simulateClick(button);

      expect(containerClickHandler).toHaveBeenCalled();
    });

    it('should create cancelable click event', () => {
      const button = document.createElement('button');
      let eventWasCancelable = false;

      button.addEventListener('click', (e) => {
        eventWasCancelable = e.cancelable;
      });

      simulateClick(button);

      expect(eventWasCancelable).toBe(true);
    });
  });

  describe('handleActivationKeys', () => {
    it('should call callback on Enter key', () => {
      const callback = vi.fn();
      const event = new KeyboardEvent('keydown', {
        key: 'Enter',
        cancelable: true,
      });
      const preventDefaultSpy = vi.spyOn(event, 'preventDefault');

      const result = handleActivationKeys(event, callback);

      expect(callback).toHaveBeenCalled();
      expect(preventDefaultSpy).toHaveBeenCalled();
      expect(result).toBe(true);
    });

    it('should call callback on Space key', () => {
      const callback = vi.fn();
      const event = new KeyboardEvent('keydown', {
        key: ' ',
        cancelable: true,
      });

      const result = handleActivationKeys(event, callback);

      expect(callback).toHaveBeenCalled();
      expect(result).toBe(true);
    });

    it('should not call callback on other keys', () => {
      const callback = vi.fn();
      const event = new KeyboardEvent('keydown', { key: 'a' });

      const result = handleActivationKeys(event, callback);

      expect(callback).not.toHaveBeenCalled();
      expect(result).toBe(false);
    });
  });

  describe('getNextFocusableElement', () => {
    let container: HTMLElement;

    beforeEach(() => {
      container = document.createElement('div');
      container.innerHTML = `
        <button id="btn1">Button 1</button>
        <input id="input1" type="text" />
        <a id="link1" href="#">Link 1</a>
        <button id="btn2">Button 2</button>
      `;
      document.body.appendChild(container);
    });

    afterEach(() => {
      document.body.removeChild(container);
    });

    it('should return next focusable element', () => {
      const btn1 = container.querySelector('#btn1') as HTMLElement;
      const input1 = container.querySelector('#input1') as HTMLElement;

      const next = getNextFocusableElement(btn1, container);

      expect(next).toBe(input1);
    });

    it('should return null when at last element', () => {
      const btn2 = container.querySelector('#btn2') as HTMLElement;

      const next = getNextFocusableElement(btn2, container);

      expect(next).toBeNull();
    });

    it('should return null for element not in container', () => {
      const outsideButton = document.createElement('button');

      const next = getNextFocusableElement(outsideButton, container);

      expect(next).toBeNull();
    });

    it('should skip disabled elements', () => {
      container.innerHTML = `
        <button id="btn1">Button 1</button>
        <button id="btn2" disabled>Button 2</button>
        <button id="btn3">Button 3</button>
      `;

      const btn1 = container.querySelector('#btn1') as HTMLElement;
      const btn3 = container.querySelector('#btn3') as HTMLElement;

      const next = getNextFocusableElement(btn1, container);

      expect(next).toBe(btn3);
    });

    it('should work without container parameter', () => {
      const btn1 = container.querySelector('#btn1') as HTMLElement;
      const input1 = container.querySelector('#input1') as HTMLElement;

      const next = getNextFocusableElement(btn1);

      expect(next).toBe(input1);
    });
  });

  describe('getPreviousFocusableElement', () => {
    let container: HTMLElement;

    beforeEach(() => {
      container = document.createElement('div');
      container.innerHTML = `
        <button id="btn1">Button 1</button>
        <input id="input1" type="text" />
        <a id="link1" href="#">Link 1</a>
        <button id="btn2">Button 2</button>
      `;
      document.body.appendChild(container);
    });

    afterEach(() => {
      document.body.removeChild(container);
    });

    it('should return previous focusable element', () => {
      const input1 = container.querySelector('#input1') as HTMLElement;
      const btn1 = container.querySelector('#btn1') as HTMLElement;

      const prev = getPreviousFocusableElement(input1, container);

      expect(prev).toBe(btn1);
    });

    it('should return null when at first element', () => {
      const btn1 = container.querySelector('#btn1') as HTMLElement;

      const prev = getPreviousFocusableElement(btn1, container);

      expect(prev).toBeNull();
    });

    it('should return null for element not in container', () => {
      const outsideButton = document.createElement('button');

      const prev = getPreviousFocusableElement(outsideButton, container);

      expect(prev).toBeNull();
    });

    it('should skip disabled elements', () => {
      container.innerHTML = `
        <button id="btn1">Button 1</button>
        <button id="btn2" disabled>Button 2</button>
        <button id="btn3">Button 3</button>
      `;

      const btn3 = container.querySelector('#btn3') as HTMLElement;
      const btn1 = container.querySelector('#btn1') as HTMLElement;

      const prev = getPreviousFocusableElement(btn3, container);

      expect(prev).toBe(btn1);
    });

    it('should work without container parameter', () => {
      const input1 = container.querySelector('#input1') as HTMLElement;
      const btn1 = container.querySelector('#btn1') as HTMLElement;

      const prev = getPreviousFocusableElement(input1);

      expect(prev).toBe(btn1);
    });
  });

  describe('isFocusable', () => {
    it('should return false for disabled elements', () => {
      const button = document.createElement('button');
      button.disabled = true;

      expect(isFocusable(button)).toBe(false);
    });

    it('should return false for aria-hidden elements', () => {
      const button = document.createElement('button');
      button.setAttribute('aria-hidden', 'true');

      expect(isFocusable(button)).toBe(false);
    });

    it('should return false for elements with tabindex="-1"', () => {
      const button = document.createElement('button');
      button.setAttribute('tabindex', '-1');

      expect(isFocusable(button)).toBe(false);
    });

    it('should return false for invisible elements', () => {
      const button = document.createElement('button');
      button.style.display = 'none';
      document.body.appendChild(button);

      expect(isFocusable(button)).toBe(false);

      document.body.removeChild(button);
    });

    it('should return true for focusable elements', () => {
      const button = document.createElement('button');
      document.body.appendChild(button);

      expect(isFocusable(button)).toBe(true);

      document.body.removeChild(button);
    });

    it('should return true for elements with tabindex="0"', () => {
      const div = document.createElement('div');
      div.setAttribute('tabindex', '0');
      document.body.appendChild(div);

      expect(isFocusable(div)).toBe(true);

      document.body.removeChild(div);
    });
  });

  describe('focusElement', () => {
    it('should focus element', () => {
      const button = document.createElement('button');
      document.body.appendChild(button);

      focusElement(button);

      expect(document.activeElement).toBe(button);

      document.body.removeChild(button);
    });

    it('should focus without scrolling when preventScroll is true', () => {
      const button = document.createElement('button');
      document.body.appendChild(button);

      const focusSpy = vi.spyOn(button, 'focus');

      focusElement(button, { preventScroll: true });

      expect(focusSpy).toHaveBeenCalledWith({ preventScroll: true });

      document.body.removeChild(button);
    });

    it('should focus with scrolling by default', () => {
      const button = document.createElement('button');
      document.body.appendChild(button);

      const focusSpy = vi.spyOn(button, 'focus');

      focusElement(button);

      expect(focusSpy).toHaveBeenCalledWith({ preventScroll: false });

      document.body.removeChild(button);
    });
  });

  describe('createTypeaheadHandler', () => {
    let items: HTMLElement[];
    let onMatch: ReturnType<typeof vi.fn>;
    let handler: (e: KeyboardEvent) => void;

    beforeEach(() => {
      items = [
        Object.assign(document.createElement('div'), { textContent: 'Apple' }),
        Object.assign(document.createElement('div'), { textContent: 'Banana' }),
        Object.assign(document.createElement('div'), { textContent: 'Cherry' }),
        Object.assign(document.createElement('div'), { textContent: 'Apricot' }),
      ];

      onMatch = vi.fn();
      handler = createTypeaheadHandler(items, onMatch, 500);
    });

    afterEach(() => {
      vi.clearAllTimers();
    });

    it('should match item starting with typed character', () => {
      const event = new KeyboardEvent('keydown', { key: 'a' });
      handler(event);

      expect(onMatch).toHaveBeenCalledWith(items[0]); // Apple
    });

    it('should match item with multiple characters', () => {
      handler(new KeyboardEvent('keydown', { key: 'b' }));
      handler(new KeyboardEvent('keydown', { key: 'a' }));

      expect(onMatch).toHaveBeenLastCalledWith(items[1]); // Banana
    });

    it('should be case insensitive', () => {
      const event = new KeyboardEvent('keydown', { key: 'A' });
      handler(event);

      expect(onMatch).toHaveBeenCalledWith(items[0]); // Apple
    });

    it('should clear search string after delay', () => {
      vi.useFakeTimers();

      handler(new KeyboardEvent('keydown', { key: 'a' }));
      expect(onMatch).toHaveBeenCalledWith(items[0]); // Apple

      vi.advanceTimersByTime(600); // Past clearDelay of 500ms

      onMatch.mockClear();
      handler(new KeyboardEvent('keydown', { key:'p' }));

      // Should not match "ap" (Apple), should start fresh search
      expect(onMatch).not.toHaveBeenCalledWith(items[0]);

      vi.useRealTimers();
    });

    it('should reset timer on each keystroke', () => {
      vi.useFakeTimers();

      handler(new KeyboardEvent('keydown', { key: 'a' }));
      vi.advanceTimersByTime(400);

      handler(new KeyboardEvent('keydown', { key: 'p' }));
      vi.advanceTimersByTime(400);

      // Should still have search string "ap"
      onMatch.mockClear();
      handler(new KeyboardEvent('keydown', { key: 'p' }));

      expect(onMatch).toHaveBeenCalledWith(items[0]); // Apple (matches "app")

      vi.useRealTimers();
    });

    it('should ignore non-printable characters', () => {
      const event = new KeyboardEvent('keydown', { key: 'ArrowUp' });
      handler(event);

      expect(onMatch).not.toHaveBeenCalled();
    });

    it('should ignore control key combinations', () => {
      const event = new KeyboardEvent('keydown', { key: 'a', ctrlKey: true });
      handler(event);

      expect(onMatch).not.toHaveBeenCalled();
    });

    it('should handle no matching item', () => {
      const event = new KeyboardEvent('keydown', { key: 'z' });
      handler(event);

      expect(onMatch).not.toHaveBeenCalled();
    });

    it('should use custom clear delay', () => {
      vi.useFakeTimers();

      const customHandler = createTypeaheadHandler(items, onMatch, 1000);
      customHandler(new KeyboardEvent('keydown', { key: 'a' }));

      vi.advanceTimersByTime(600);

      onMatch.mockClear();
      customHandler(new KeyboardEvent('keydown', { key: 'p' }));

      // Should still match "ap" (not cleared yet)
      expect(onMatch).toHaveBeenCalledWith(items[3]); // Apricot

      vi.useRealTimers();
    });
  });

  describe('Integration Tests', () => {
    it('should work together for keyboard navigation pattern', () => {
      const container = document.createElement('div');
      container.innerHTML = `
        <button id="btn1">Button 1</button>
        <button id="btn2">Button 2</button>
        <button id="btn3">Button 3</button>
      `;
      document.body.appendChild(container);

      const buttons = Array.from(container.querySelectorAll('button'));
      let currentIndex = 0;

      const keydownHandler = (e: KeyboardEvent) => {
        if (isNavigationKey(e.key)) {
          preventDefaultForKeys(e, [e.key]);

          if (e.key === 'ArrowDown') {
            currentIndex = Math.min(currentIndex + 1, buttons.length - 1);
          } else if (e.key === 'ArrowUp') {
            currentIndex = Math.max(currentIndex - 1, 0);
          } else if (e.key === 'Home') {
            currentIndex = 0;
          } else if (e.key === 'End') {
            currentIndex = buttons.length - 1;
          }

          focusElement(buttons[currentIndex] as HTMLElement);
        }

        handleActivationKeys(e, () => {
          simulateClick(buttons[currentIndex] as HTMLElement);
        });
      };

      container.addEventListener('keydown', keydownHandler);

      // Test navigation
      buttons[0].focus();
      container.dispatchEvent(new KeyboardEvent('keydown', { key: 'ArrowDown', cancelable: true }));
      expect(document.activeElement).toBe(buttons[1]);

      container.dispatchEvent(new KeyboardEvent('keydown', { key: 'End', cancelable: true }));
      expect(document.activeElement).toBe(buttons[2]);

      // Test activation
      const clickHandler = vi.fn();
      buttons[2].addEventListener('click', clickHandler);
      container.dispatchEvent(new KeyboardEvent('keydown', { key: 'Enter', cancelable: true }));
      expect(clickHandler).toHaveBeenCalled();

      document.body.removeChild(container);
    });
  });
});
