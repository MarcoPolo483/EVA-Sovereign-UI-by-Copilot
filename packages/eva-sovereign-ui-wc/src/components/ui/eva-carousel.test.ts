import { describe, it, expect, beforeEach } from 'vitest';
import { createComponent, testAccessibility, shadowQuery, simulateClick, simulateKeyboard } from 'tests/test-utils';
import './eva-carousel';

describe('eva-carousel', () => {
  let carousel: EVACarousel;

  beforeEach(async () => {
    carousel = await createComponent('eva-carousel') as EVACarousel;
    carousel.innerHTML = `
      <eva-carousel-item><div>Slide 1</div></eva-carousel-item>
      <eva-carousel-item><div>Slide 2</div></eva-carousel-item>
      <eva-carousel-item><div>Slide 3</div></eva-carousel-item>
    `;
    await new Promise(r => setTimeout(r, 100));
  });

  afterEach(() => {
    carousel.remove();
  });

  describe('Rendering', () => {
    it('should render with shadow DOM', () => {
      expect(carousel.shadowRoot).toBeTruthy();
      expect(customElements.get('eva-carousel')).toBeTruthy();
    });

    it('should render navigation buttons', () => {
      const prevBtn = shadowQuery(carousel, '.nav-button.prev');
      const nextBtn = shadowQuery(carousel, '.nav-button.next');
      expect(prevBtn).toBeTruthy();
      expect(nextBtn).toBeTruthy();
    });

    it('should render indicators for each slide', () => {
      const indicators = carousel.shadowRoot?.querySelectorAll('.indicator');
      expect(indicators?.length).toBe(3);
    });
  });

  describe('Navigation', () => {
    it('should advance to next slide on next button click', async () => {
      const changeSpy = vi.fn();
      carousel.addEventListener('change', changeSpy);
      
      const nextBtn = shadowQuery<HTMLButtonElement>(carousel, '.nav-button.next');
      nextBtn?.click();
      await new Promise(r => setTimeout(r, 50));
      
      expect(changeSpy).toHaveBeenCalledWith(expect.objectContaining({
        detail: { index: 1 }
      }));
    });

    it('should go to previous slide', async () => {
      const nextBtn = shadowQuery<HTMLButtonElement>(carousel, '.nav-button.next');
      nextBtn?.click();
      await new Promise(r => setTimeout(r, 50));
      
      const changeSpy = vi.fn();
      carousel.addEventListener('change', changeSpy);
      
      const prevBtn = shadowQuery<HTMLButtonElement>(carousel, '.nav-button.prev');
      prevBtn?.click();
      await new Promise(r => setTimeout(r, 50));
      
      expect(changeSpy).toHaveBeenCalledWith(expect.objectContaining({
        detail: { index: 0 }
      }));
    });
  });

  describe('Keyboard Navigation', () => {
    it('should activate slide on Space key', async () => {
      const changeSpy = vi.fn();
      carousel.addEventListener('change', changeSpy);
      
      const indicators = carousel.shadowRoot?.querySelectorAll<HTMLButtonElement>('.indicator');
      simulateKeyboard(indicators![1], ' ');
      await new Promise(r => setTimeout(r, 50));
      
      expect(changeSpy).toHaveBeenCalledWith(expect.objectContaining({
        detail: { index: 1 }
      }));
    });
  });

  describe('Accessibility', () => {
    it('should have live region for announcements', () => {
      const liveRegion = shadowQuery(carousel, '[aria-live]');
      expect(liveRegion).toBeTruthy();
    });
  });
});
