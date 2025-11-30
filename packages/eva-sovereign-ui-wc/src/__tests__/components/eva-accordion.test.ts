import { describe, it, expect, beforeEach } from 'vitest';
import '../../components/ui/eva-accordion';

describe('eva-accordion', () => {
  let accordion: HTMLElement;

  beforeEach(() => {
    accordion = document.createElement('eva-accordion');
    document.body.appendChild(accordion);
  });

  describe('Rendering', () => {
    it('should render accordion element', () => {
      expect(accordion).toBeDefined();
      expect(accordion.shadowRoot).toBeDefined();
    });

    it('should start collapsed', () => {
      expect(accordion.hasAttribute('open')).toBe(false);
    });
  });

  describe('Interaction', () => {
    it('should toggle open state', () => {
      const trigger = accordion.shadowRoot?.querySelector('[role="button"]');
      trigger?.dispatchEvent(new Event('click'));
      expect(accordion.hasAttribute('open')).toBe(true);
      
      trigger?.dispatchEvent(new Event('click'));
      expect(accordion.hasAttribute('open')).toBe(false);
    });

    it('should emit toggle event', () => {
      let toggled = false;
      accordion.addEventListener('accordion-toggle', () => {
        toggled = true;
      });
      
      const trigger = accordion.shadowRoot?.querySelector('[role="button"]');
      trigger?.dispatchEvent(new Event('click'));
      expect(toggled).toBe(true);
    });
  });

  describe('Accessibility', () => {
    it('should have proper ARIA attributes', () => {
      const trigger = accordion.shadowRoot?.querySelector('[role="button"]');
      expect(trigger?.hasAttribute('aria-expanded')).toBe(true);
    });

    it('should update aria-expanded on toggle', () => {
      const trigger = accordion.shadowRoot?.querySelector('[role="button"]');
      expect(trigger?.getAttribute('aria-expanded')).toBe('false');
      
      trigger?.dispatchEvent(new Event('click'));
      expect(trigger?.getAttribute('aria-expanded')).toBe('true');
    });

    it('should support keyboard navigation', () => {
      const trigger = accordion.shadowRoot?.querySelector('[role="button"]');
      const enterEvent = new KeyboardEvent('keydown', { key: 'Enter' });
      trigger?.dispatchEvent(enterEvent);
      expect(accordion.hasAttribute('open')).toBe(true);
    });
  });
});
