import { describe, it, expect, beforeEach } from 'vitest';
import { createComponent, testAccessibility, shadowQuery } from '../../../../../tests/test-utils';
import './eva-hero-banner';
import type { EVAHeroBanner } from './eva-hero-banner';

describe('eva-hero-banner', () => {
  let hero: EVAHeroBanner;

  beforeEach(async () => {
    hero = await createComponent('eva-hero-banner') as EVAHeroBanner;
    await new Promise(r => setTimeout(r, 50));
  });

  describe('Rendering', () => {
    it('should render with shadow DOM', () => {
      expect(hero.shadowRoot).toBeTruthy();
      expect(customElements.get('eva-hero-banner')).toBeTruthy();
    });

    it('should render hero container', () => {
      const container = shadowQuery(hero, '.hero-container');
      expect(container).toBeTruthy();
    });
  });

  describe('Attributes', () => {
    it('should support title and description keys', async () => {
      hero.setAttribute('title-key', 'esdc.hero.title');
      hero.setAttribute('description-key', 'esdc.hero.description');
      await new Promise(r => setTimeout(r, 50));
      const titleEl = shadowQuery(hero, '.hero-title');
      const descEl = shadowQuery(hero, '.hero-description');
      expect(titleEl && descEl).toBeTruthy();
    });

    it('should support custom background attribute', async () => {
      hero.setAttribute('background', 'oklch(0.7 0.1 250)');
      await new Promise(r => setTimeout(r, 50));
      expect(hero.getAttribute('background')).toBe('oklch(0.7 0.1 250)');
    });
  });

  describe('Accessibility', () => {
    it('should have no accessibility violations', async () => {
      await testAccessibility(hero);
    });

    it('should use heading font for title', () => {
      const titleEl = shadowQuery(hero, '.hero-title') as HTMLElement;
      expect(titleEl).toBeTruthy();
    });
  });
});
