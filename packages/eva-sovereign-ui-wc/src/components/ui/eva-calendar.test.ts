import { describe, it, expect, beforeEach, vi } from 'vitest';
import { createComponent, testAccessibility, shadowQuery, simulateClick, simulateKeyboard } from 'tests/test-utils';
import './eva-calendar';
import type { EVACalendar } from './eva-calendar';

describe('eva-calendar', () => {
  let calendar: EVACalendar;

  beforeEach(async () => {
    calendar = await createComponent('eva-calendar') as EVACalendar;
    await new Promise(r => setTimeout(r, 50));
  });

  describe('Rendering', () => {
    it('should render with shadow DOM', () => {
      expect(calendar.shadowRoot).toBeTruthy();
      expect(customElements.get('eva-calendar')).toBeTruthy();
    });

    it('should render weekday headers', () => {
      const weekdays = calendar.shadowRoot?.querySelectorAll('.weekday');
      expect(weekdays?.length).toBe(7);
    });

    it('should render day buttons', () => {
      const days = calendar.shadowRoot?.querySelectorAll('.day');
      expect(days!.length).toBeGreaterThan(28);
    });
  });

  describe('Month Navigation', () => {
    it('should navigate to previous month', async () => {
      const prevBtn = shadowQuery<HTMLButtonElement>(calendar, '.nav-button[aria-label="Previous month"]');
      prevBtn?.click();
      await new Promise(r => setTimeout(r, 50));
      expect(calendar.shadowRoot?.querySelector('.header-title')).toBeTruthy();
    });

    it('should navigate to next month', async () => {
      const nextBtn = shadowQuery<HTMLButtonElement>(calendar, '.nav-button[aria-label="Next month"]');
      nextBtn?.click();
      await new Promise(r => setTimeout(r, 50));
      expect(calendar.shadowRoot?.querySelector('.header-title')).toBeTruthy();
    });
  });

  describe('Date Selection', () => {
    it('should select a date and emit change event', async () => {
      const changeSpy = vi.fn();
      calendar.addEventListener('change', changeSpy);
      
      const dayButton = shadowQuery<HTMLButtonElement>(calendar, '.day:not([data-outside="true"])');
      dayButton?.click();
      await new Promise(r => setTimeout(r, 50));
      
      expect(changeSpy).toHaveBeenCalled();
      expect(calendar.getAttribute('value')).toBeTruthy();
    });

    it('should mark selected date visually', async () => {
      const dayButton = shadowQuery<HTMLButtonElement>(calendar, '.day:not([data-outside="true"])');
      dayButton?.click();
      await new Promise(r => setTimeout(r, 50));
      
      const selectedDay = shadowQuery(calendar, '.day[data-selected="true"]');
      expect(selectedDay).toBeTruthy();
    });
  });

  describe('Accessibility', () => {
    it('should have no accessibility violations', async () => {
      await testAccessibility(calendar);
    });

    it('should have accessible navigation buttons', () => {
      const buttons = calendar.shadowRoot?.querySelectorAll('.nav-button');
      expect(buttons!.length).toBeGreaterThan(0);
    });
  });
});
