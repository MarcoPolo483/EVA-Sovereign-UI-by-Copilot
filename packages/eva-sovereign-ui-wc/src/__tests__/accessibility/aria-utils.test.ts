/**
 * @vitest-environment jsdom
 */
import { describe, it, expect, beforeEach, afterEach, vi } from 'vitest';
import {
  setAriaExpanded,
  setAriaPressed,
  setAriaSelected,
  setAriaChecked,
  setAriaDisabled,
  setAriaHidden,
  setAriaInvalid,
  setAriaCurrent,
  generateAriaId,
  linkLabelToElement,
  linkDescriptionToElement,
  announceToScreenReader,
  setAriaAttributes,
  removeAriaAttribute,
  createAccordionRelationship,
  createTabRelationship,
  announceLoadingState,
  announceError,
  announceSuccess,
} from '../../a11y/aria-utils';

describe('ARIA Utils', () => {
  let element: HTMLElement;

  beforeEach(() => {
    element = document.createElement('div');
  });

  describe('Basic ARIA Setters', () => {
    describe('setAriaExpanded', () => {
      it('should set aria-expanded to "true"', () => {
        setAriaExpanded(element, true);
        expect(element.getAttribute('aria-expanded')).toBe('true');
      });

      it('should set aria-expanded to "false"', () => {
        setAriaExpanded(element, false);
        expect(element.getAttribute('aria-expanded')).toBe('false');
      });
    });

    describe('setAriaPressed', () => {
      it('should set aria-pressed to "true"', () => {
        setAriaPressed(element, true);
        expect(element.getAttribute('aria-pressed')).toBe('true');
      });

      it('should set aria-pressed to "false"', () => {
        setAriaPressed(element, false);
        expect(element.getAttribute('aria-pressed')).toBe('false');
      });
    });

    describe('setAriaSelected', () => {
      it('should set aria-selected to "true"', () => {
        setAriaSelected(element, true);
        expect(element.getAttribute('aria-selected')).toBe('true');
      });

      it('should set aria-selected to "false"', () => {
        setAriaSelected(element, false);
        expect(element.getAttribute('aria-selected')).toBe('false');
      });
    });

    describe('setAriaChecked', () => {
      it('should set aria-checked to "true"', () => {
        setAriaChecked(element, true);
        expect(element.getAttribute('aria-checked')).toBe('true');
      });

      it('should set aria-checked to "false"', () => {
        setAriaChecked(element, false);
        expect(element.getAttribute('aria-checked')).toBe('false');
      });

      it('should set aria-checked to "mixed"', () => {
        setAriaChecked(element, 'mixed');
        expect(element.getAttribute('aria-checked')).toBe('mixed');
      });
    });

    describe('setAriaDisabled', () => {
      it('should set aria-disabled to "true"', () => {
        setAriaDisabled(element, true);
        expect(element.getAttribute('aria-disabled')).toBe('true');
      });

      it('should set aria-disabled to "false"', () => {
        setAriaDisabled(element, false);
        expect(element.getAttribute('aria-disabled')).toBe('false');
      });
    });

    describe('setAriaHidden', () => {
      it('should set aria-hidden to "true"', () => {
        setAriaHidden(element, true);
        expect(element.getAttribute('aria-hidden')).toBe('true');
      });

      it('should set aria-hidden to "false"', () => {
        setAriaHidden(element, false);
        expect(element.getAttribute('aria-hidden')).toBe('false');
      });
    });

    describe('setAriaInvalid', () => {
      it('should set aria-invalid to "true"', () => {
        setAriaInvalid(element, true);
        expect(element.getAttribute('aria-invalid')).toBe('true');
      });

      it('should set aria-invalid to "false"', () => {
        setAriaInvalid(element, false);
        expect(element.getAttribute('aria-invalid')).toBe('false');
      });
    });

    describe('setAriaCurrent', () => {
      it('should set aria-current to "page" when true', () => {
        setAriaCurrent(element, true);
        expect(element.getAttribute('aria-current')).toBe('page');
      });

      it('should remove aria-current when false', () => {
        element.setAttribute('aria-current', 'page');
        setAriaCurrent(element, false);
        expect(element.hasAttribute('aria-current')).toBe(false);
      });

      it('should set aria-current to specific value', () => {
        setAriaCurrent(element, 'step');
        expect(element.getAttribute('aria-current')).toBe('step');
      });

      it('should support all aria-current values', () => {
        const values: Array<'page' | 'step' | 'location' | 'date' | 'time'> = [
          'page',
          'step',
          'location',
          'date',
          'time',
        ];

        values.forEach((value) => {
          setAriaCurrent(element, value);
          expect(element.getAttribute('aria-current')).toBe(value);
        });
      });
    });
  });

  describe('ID Generation and Relationships', () => {
    describe('generateAriaId', () => {
      it('should generate unique IDs', () => {
        const id1 = generateAriaId();
        const id2 = generateAriaId();

        expect(id1).not.toBe(id2);
      });

      it('should use default prefix "aria"', () => {
        const id = generateAriaId();
        expect(id).toMatch(/^aria-/);
      });

      it('should use custom prefix', () => {
        const id = generateAriaId('custom');
        expect(id).toMatch(/^custom-/);
      });

      it('should generate IDs with expected format', () => {
        const id = generateAriaId();
        expect(id).toMatch(/^aria-[a-z0-9]+$/);
      });
    });

    describe('linkLabelToElement', () => {
      let label: HTMLElement;

      beforeEach(() => {
        label = document.createElement('label');
      });

      it('should set aria-labelledby on element', () => {
        linkLabelToElement(element, label);
        expect(element.hasAttribute('aria-labelledby')).toBe(true);
      });

      it('should generate ID for label if missing', () => {
        linkLabelToElement(element, label);
        expect(label.id).toBeTruthy();
        expect(label.id).toMatch(/^label-/);
      });

      it('should use existing label ID', () => {
        label.id = 'existing-label';
        linkLabelToElement(element, label);

        expect(element.getAttribute('aria-labelledby')).toBe('existing-label');
      });

      it('should link multiple elements to same label', () => {
        const element2 = document.createElement('div');
        linkLabelToElement(element, label);
        linkLabelToElement(element2, label);

        expect(element.getAttribute('aria-labelledby')).toBe(
          element2.getAttribute('aria-labelledby')
        );
      });
    });

    describe('linkDescriptionToElement', () => {
      let description: HTMLElement;

      beforeEach(() => {
        description = document.createElement('div');
      });

      it('should set aria-describedby on element', () => {
        linkDescriptionToElement(element, description);
        expect(element.hasAttribute('aria-describedby')).toBe(true);
      });

      it('should generate ID for description if missing', () => {
        linkDescriptionToElement(element, description);
        expect(description.id).toBeTruthy();
        expect(description.id).toMatch(/^desc-/);
      });

      it('should use existing description ID', () => {
        description.id = 'existing-desc';
        linkDescriptionToElement(element, description);

        expect(element.getAttribute('aria-describedby')).toBe('existing-desc');
      });
    });
  });

  describe('Screen Reader Announcements', () => {
    beforeEach(() => {
      // Clean up any existing live regions
      document.querySelectorAll('[data-eva-live-region]').forEach((el) => {
        el.remove();
      });
    });

    afterEach(() => {
      // Clean up live regions after each test
      document.querySelectorAll('[data-eva-live-region]').forEach((el) => {
        el.remove();
      });
    });

    describe('announceToScreenReader', () => {
      it('should create polite live region', () => {
        announceToScreenReader('Test message', 'polite');

        const liveRegion = document.querySelector('[data-eva-live-region="polite"]');
        expect(liveRegion).toBeTruthy();
        expect(liveRegion?.getAttribute('aria-live')).toBe('polite');
      });

      it('should create assertive live region', () => {
        announceToScreenReader('Urgent message', 'assertive');

        const liveRegion = document.querySelector('[data-eva-live-region="assertive"]');
        expect(liveRegion).toBeTruthy();
        expect(liveRegion?.getAttribute('aria-live')).toBe('assertive');
      });

      it('should set role="status" for polite announcements', () => {
        announceToScreenReader('Test message', 'polite');

        const liveRegion = document.querySelector('[data-eva-live-region="polite"]');
        expect(liveRegion?.getAttribute('role')).toBe('status');
      });

      it('should set role="alert" for assertive announcements', () => {
        announceToScreenReader('Urgent message', 'assertive');

        const liveRegion = document.querySelector('[data-eva-live-region="assertive"]');
        expect(liveRegion?.getAttribute('role')).toBe('alert');
      });

      it('should set aria-atomic="true"', () => {
        announceToScreenReader('Test message');

        const liveRegion = document.querySelector('[data-eva-live-region]');
        expect(liveRegion?.getAttribute('aria-atomic')).toBe('true');
      });

      it('should apply screen reader only styles', () => {
        announceToScreenReader('Test message');

        const liveRegion = document.querySelector('[data-eva-live-region]') as HTMLElement;
        expect(liveRegion?.style.position).toBe('absolute');
        expect(liveRegion?.style.width).toBe('1px');
        expect(liveRegion?.style.height).toBe('1px');
      });

      it('should reuse existing live region', () => {
        announceToScreenReader('Message 1', 'polite');
        announceToScreenReader('Message 2', 'polite');

        const liveRegions = document.querySelectorAll('[data-eva-live-region="polite"]');
        expect(liveRegions.length).toBe(1);
      });

      it('should update message content with delay', async () => {
        vi.useFakeTimers();

        announceToScreenReader('Test message', 'polite');

        const liveRegion = document.querySelector('[data-eva-live-region="polite"]');
        expect(liveRegion?.textContent).toBe('');

        vi.advanceTimersByTime(150);

        expect(liveRegion?.textContent).toBe('Test message');

        vi.useRealTimers();
      });

      it('should use default priority "polite"', () => {
        announceToScreenReader('Test message');

        const liveRegion = document.querySelector('[data-eva-live-region="polite"]');
        expect(liveRegion).toBeTruthy();
      });

      it('should clear previous message before announcing new one', async () => {
        vi.useFakeTimers();

        announceToScreenReader('Message 1', 'polite');
        vi.advanceTimersByTime(150);

        const liveRegion = document.querySelector('[data-eva-live-region="polite"]');
        expect(liveRegion?.textContent).toBe('Message 1');

        announceToScreenReader('Message 2', 'polite');
        expect(liveRegion?.textContent).toBe('');

        vi.advanceTimersByTime(150);
        expect(liveRegion?.textContent).toBe('Message 2');

        vi.useRealTimers();
      });
    });

    describe('announceLoadingState', () => {
      it('should announce loading start', () => {
        vi.useFakeTimers();

        announceLoadingState(true);

        vi.advanceTimersByTime(150);

        const liveRegion = document.querySelector('[data-eva-live-region="polite"]');
        expect(liveRegion?.textContent).toBe('Loading...');

        vi.useRealTimers();
      });

      it('should announce loading complete', () => {
        vi.useFakeTimers();

        announceLoadingState(false);

        vi.advanceTimersByTime(150);

        const liveRegion = document.querySelector('[data-eva-live-region="polite"]');
        expect(liveRegion?.textContent).toBe('Loading complete');

        vi.useRealTimers();
      });

      it('should use custom message', () => {
        vi.useFakeTimers();

        announceLoadingState(true, 'Fetching data...');

        vi.advanceTimersByTime(150);

        const liveRegion = document.querySelector('[data-eva-live-region="polite"]');
        expect(liveRegion?.textContent).toBe('Fetching data...');

        vi.useRealTimers();
      });
    });

    describe('announceError', () => {
      it('should announce error with assertive priority', () => {
        vi.useFakeTimers();

        announceError('Something went wrong');

        vi.advanceTimersByTime(150);

        const liveRegion = document.querySelector('[data-eva-live-region="assertive"]');
        expect(liveRegion?.textContent).toBe('Error: Something went wrong');

        vi.useRealTimers();
      });
    });

    describe('announceSuccess', () => {
      it('should announce success with polite priority', () => {
        vi.useFakeTimers();

        announceSuccess('Operation completed successfully');

        vi.advanceTimersByTime(150);

        const liveRegion = document.querySelector('[data-eva-live-region="polite"]');
        expect(liveRegion?.textContent).toBe('Operation completed successfully');

        vi.useRealTimers();
      });
    });
  });

  describe('Batch Attribute Operations', () => {
    describe('setAriaAttributes', () => {
      it('should set multiple ARIA attributes', () => {
        setAriaAttributes(element, {
          expanded: true,
          selected: false,
          disabled: true,
        });

        expect(element.getAttribute('aria-expanded')).toBe('true');
        expect(element.getAttribute('aria-selected')).toBe('false');
        expect(element.getAttribute('aria-disabled')).toBe('true');
      });

      it('should handle attributes with "aria-" prefix', () => {
        setAriaAttributes(element, {
          'aria-label': 'Test Label',
          'aria-hidden': false,
        });

        expect(element.getAttribute('aria-label')).toBe('Test Label');
        expect(element.getAttribute('aria-hidden')).toBe('false');
      });

      it('should convert numbers to strings', () => {
        setAriaAttributes(element, {
          level: 3,
          setsize: 10,
          posinset: 5,
        });

        expect(element.getAttribute('aria-level')).toBe('3');
        expect(element.getAttribute('aria-setsize')).toBe('10');
        expect(element.getAttribute('aria-posinset')).toBe('5');
      });

      it('should handle empty attributes object', () => {
        expect(() => {
          setAriaAttributes(element, {});
        }).not.toThrow();
      });
    });

    describe('removeAriaAttribute', () => {
      beforeEach(() => {
        element.setAttribute('aria-expanded', 'true');
        element.setAttribute('aria-selected', 'false');
      });

      it('should remove ARIA attribute', () => {
        removeAriaAttribute(element, 'expanded');
        expect(element.hasAttribute('aria-expanded')).toBe(false);
      });

      it('should handle attributes with "aria-" prefix', () => {
        removeAriaAttribute(element, 'aria-selected');
        expect(element.hasAttribute('aria-selected')).toBe(false);
      });

      it('should not throw on non-existent attribute', () => {
        expect(() => {
          removeAriaAttribute(element, 'nonexistent');
        }).not.toThrow();
      });
    });
  });

  describe('Complex Relationships', () => {
    describe('createAccordionRelationship', () => {
      let button: HTMLElement;
      let panel: HTMLElement;

      beforeEach(() => {
        button = document.createElement('button');
        panel = document.createElement('div');
      });

      it('should generate IDs for button and panel', () => {
        createAccordionRelationship(button, panel);

        expect(button.id).toMatch(/^accordion-button-/);
        expect(panel.id).toMatch(/^accordion-panel-/);
      });

      it('should set aria-expanded="false" on button', () => {
        createAccordionRelationship(button, panel);
        expect(button.getAttribute('aria-expanded')).toBe('false');
      });

      it('should set aria-controls on button', () => {
        createAccordionRelationship(button, panel);
        expect(button.getAttribute('aria-controls')).toBe(panel.id);
      });

      it('should set role="region" on panel', () => {
        createAccordionRelationship(button, panel);
        expect(panel.getAttribute('role')).toBe('region');
      });

      it('should set aria-labelledby on panel', () => {
        createAccordionRelationship(button, panel);
        expect(panel.getAttribute('aria-labelledby')).toBe(button.id);
      });

      it('should set hidden attribute on panel', () => {
        createAccordionRelationship(button, panel);
        expect(panel.hasAttribute('hidden')).toBe(true);
      });

      it('should preserve existing IDs', () => {
        button.id = 'my-button';
        panel.id = 'my-panel';

        createAccordionRelationship(button, panel);

        expect(button.id).toBe('my-button');
        expect(panel.id).toBe('my-panel');
      });
    });

    describe('createTabRelationship', () => {
      let tab: HTMLElement;
      let panel: HTMLElement;
      let tablist: HTMLElement;

      beforeEach(() => {
        tab = document.createElement('button');
        panel = document.createElement('div');
        tablist = document.createElement('div');
      });

      it('should generate IDs for all elements', () => {
        createTabRelationship(tab, panel, tablist);

        expect(tab.id).toMatch(/^tab-/);
        expect(panel.id).toMatch(/^tabpanel-/);
        expect(tablist.id).toMatch(/^tablist-/);
      });

      it('should set role="tablist" on tablist', () => {
        createTabRelationship(tab, panel, tablist);
        expect(tablist.getAttribute('role')).toBe('tablist');
      });

      it('should set role="tab" on tab', () => {
        createTabRelationship(tab, panel, tablist);
        expect(tab.getAttribute('role')).toBe('tab');
      });

      it('should set aria-selected="false" on tab', () => {
        createTabRelationship(tab, panel, tablist);
        expect(tab.getAttribute('aria-selected')).toBe('false');
      });

      it('should set aria-controls on tab', () => {
        createTabRelationship(tab, panel, tablist);
        expect(tab.getAttribute('aria-controls')).toBe(panel.id);
      });

      it('should set tabindex="-1" on tab', () => {
        createTabRelationship(tab, panel, tablist);
        expect(tab.getAttribute('tabindex')).toBe('-1');
      });

      it('should set role="tabpanel" on panel', () => {
        createTabRelationship(tab, panel, tablist);
        expect(panel.getAttribute('role')).toBe('tabpanel');
      });

      it('should set aria-labelledby on panel', () => {
        createTabRelationship(tab, panel, tablist);
        expect(panel.getAttribute('aria-labelledby')).toBe(tab.id);
      });

      it('should set tabindex="0" on panel', () => {
        createTabRelationship(tab, panel, tablist);
        expect(panel.getAttribute('tabindex')).toBe('0');
      });

      it('should set hidden attribute on panel', () => {
        createTabRelationship(tab, panel, tablist);
        expect(panel.hasAttribute('hidden')).toBe(true);
      });

      it('should preserve existing IDs', () => {
        tab.id = 'my-tab';
        panel.id = 'my-panel';
        tablist.id = 'my-tablist';

        createTabRelationship(tab, panel, tablist);

        expect(tab.id).toBe('my-tab');
        expect(panel.id).toBe('my-panel');
        expect(tablist.id).toBe('my-tablist');
      });
    });
  });

  describe('Integration Tests', () => {
    it('should create complete accessible accordion', () => {
      const accordion = document.createElement('div');
      const button = document.createElement('button');
      const panel = document.createElement('div');

      button.textContent = 'Accordion Header';
      panel.textContent = 'Accordion Content';

      accordion.appendChild(button);
      accordion.appendChild(panel);

      createAccordionRelationship(button, panel);

      // Verify complete setup
      expect(button.hasAttribute('aria-expanded')).toBe(true);
      expect(button.hasAttribute('aria-controls')).toBe(true);
      expect(panel.hasAttribute('role')).toBe(true);
      expect(panel.hasAttribute('aria-labelledby')).toBe(true);
      expect(panel.hasAttribute('hidden')).toBe(true);

      // Verify IDs match
      expect(button.getAttribute('aria-controls')).toBe(panel.id);
      expect(panel.getAttribute('aria-labelledby')).toBe(button.id);
    });

    it('should create complete accessible tabs', () => {
      const tablist = document.createElement('div');
      const tab1 = document.createElement('button');
      const tab2 = document.createElement('button');
      const panel1 = document.createElement('div');
      const panel2 = document.createElement('div');

      tablist.appendChild(tab1);
      tablist.appendChild(tab2);

      createTabRelationship(tab1, panel1, tablist);
      createTabRelationship(tab2, panel2, tablist);

      // Verify tablist
      expect(tablist.getAttribute('role')).toBe('tablist');

      // Verify tabs
      expect(tab1.getAttribute('role')).toBe('tab');
      expect(tab2.getAttribute('role')).toBe('tab');
      expect(tab1.getAttribute('aria-controls')).toBe(panel1.id);
      expect(tab2.getAttribute('aria-controls')).toBe(panel2.id);

      // Verify panels
      expect(panel1.getAttribute('role')).toBe('tabpanel');
      expect(panel2.getAttribute('role')).toBe('tabpanel');
      expect(panel1.getAttribute('aria-labelledby')).toBe(tab1.id);
      expect(panel2.getAttribute('aria-labelledby')).toBe(tab2.id);
    });

    it('should handle multiple announcements in sequence', async () => {
      vi.useFakeTimers();

      announceToScreenReader('Step 1 complete', 'polite');
      vi.advanceTimersByTime(150);

      let liveRegion = document.querySelector('[data-eva-live-region="polite"]');
      expect(liveRegion?.textContent).toBe('Step 1 complete');

      announceToScreenReader('Step 2 complete', 'polite');
      vi.advanceTimersByTime(150);

      liveRegion = document.querySelector('[data-eva-live-region="polite"]');
      expect(liveRegion?.textContent).toBe('Step 2 complete');

      announceError('Step 3 failed');
      vi.advanceTimersByTime(150);

      const alertRegion = document.querySelector('[data-eva-live-region="assertive"]');
      expect(alertRegion?.textContent).toBe('Error: Step 3 failed');

      vi.useRealTimers();
    });
  });
});
