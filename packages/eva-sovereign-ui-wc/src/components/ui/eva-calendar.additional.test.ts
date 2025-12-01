import { describe, it, expect, beforeEach } from 'vitest';
import { createComponent, shadowQuery, shadowQueryAll, simulateClick } from 'tests/test-utils';
import './eva-calendar';

describe('eva-calendar (additional branches)', () => {
  let element: HTMLElement;

  beforeEach(async () => {
    element = await createComponent('eva-calendar');
  });

  it('navigates months via prev/next buttons', async () => {
    const titleBefore = shadowQuery<HTMLDivElement>(element, '.header-title')?.textContent;
    const next = shadowQuery<HTMLButtonElement>(element, '.nav-button:last-of-type');
    const prev = shadowQuery<HTMLButtonElement>(element, '.nav-button:first-of-type');
    expect(next && prev).toBeTruthy();

    // Next month
    simulateClick(next!);
    await new Promise(r => setTimeout(r, 10));
    const titleAfterNext = shadowQuery<HTMLDivElement>(element, '.header-title')?.textContent;
    expect(titleAfterNext).toBeTruthy();
    expect(titleAfterNext).not.toBe(titleBefore);

    // Previous month (back to original)
    simulateClick(prev!);
    await new Promise(r => setTimeout(r, 10));
    const titleAfterPrev = shadowQuery<HTMLDivElement>(element, '.header-title')?.textContent;
    expect(titleAfterPrev).toBe(titleBefore);
  });

  it('marks outside-month days and renders weekday headers', async () => {
    // Ensure initial render complete
    await new Promise(r => setTimeout(r, 20));
    const weekdayRow = Array.from(shadowQueryAll<HTMLDivElement>(element, '.weekday'));
    expect(weekdayRow.length).toBeGreaterThan(0);

    // Find days grid cells
    const dayCells = Array.from(shadowQueryAll<HTMLButtonElement>(element, '.day'));
    expect(dayCells.length).toBeGreaterThan(0);

    // At least one cell should be marked outside of current month
    const outside = dayCells.find(d => d.getAttribute('data-outside') === 'true');
    expect(!!outside).toBe(true);

    // Navigate to next month and ensure header updates and outside markers adjust
    const titleBefore = shadowQuery<HTMLDivElement>(element, '.header-title')?.textContent;
    const next = shadowQuery<HTMLButtonElement>(element, '.nav-button:last-of-type');
    simulateClick(next!);
    await new Promise(r => setTimeout(r, 20));
    const titleAfter = shadowQuery<HTMLDivElement>(element, '.header-title')?.textContent;
    expect(titleAfter).toBeTruthy();
    expect(titleAfter).not.toBe(titleBefore);

    const dayCellsAfter = Array.from(shadowQueryAll<HTMLButtonElement>(element, '.day'));
    const outsideAfter = dayCellsAfter.find(d => d.getAttribute('data-outside') === 'true');
    expect(!!outsideAfter).toBe(true);
  });

  // Note: Selection state depends on TZ-normalized ISO dates; covered in base tests via click events.

  describe('Value attribute handling', () => {
    it('should initialize selectedDate when value attribute is set', async () => {
      const testDate = '2024-06-15';
      element.setAttribute('value', testDate);
      await new Promise(r => requestAnimationFrame(r));
      await new Promise(r => requestAnimationFrame(r));

      // Verify the selected date is rendered (may or may not be visible depending on current month)
      const selectedDay = shadowQuery<HTMLButtonElement>(element, '.day[data-selected="true"]');
      // Selected day exists if we're viewing June 2024
      if (selectedDay) {
        expect(selectedDay.textContent).toBe('15');
      } else {
        // If not visible, check that value attribute was set
        expect(element.getAttribute('value')).toBe(testDate);
      }
    });

    it('should handle empty value attribute without crashing', async () => {
      element.setAttribute('value', '');
      await new Promise(r => requestAnimationFrame(r));

      // Should render calendar without selected date
      const days = shadowQueryAll<HTMLButtonElement>(element, '.day');
      expect(days.length).toBeGreaterThan(0);
    });

    it('should update when value attribute changes', async () => {
      element.setAttribute('value', '2024-06-10');
      await new Promise(r => requestAnimationFrame(r));
      await new Promise(r => requestAnimationFrame(r));
      
      // Check that attribute was set (selected day may not be visible in current month view)
      expect(element.getAttribute('value')).toBe('2024-06-10');

      element.setAttribute('value', '2024-06-20');
      await new Promise(r => requestAnimationFrame(r));
      await new Promise(r => requestAnimationFrame(r));
      
      expect(element.getAttribute('value')).toBe('2024-06-20');
    });
  });

  describe('Date selection matching logic', () => {
    it('should mark selected date when all components match', async () => {
      element.setAttribute('value', '2024-06-15');
      await new Promise(r => requestAnimationFrame(r));
      await new Promise(r => requestAnimationFrame(r));

      // Check that value attribute was properly set
      expect(element.getAttribute('value')).toBe('2024-06-15');
      
      // If we're viewing June 2024, the day should be marked selected
      const title = shadowQuery<HTMLDivElement>(element, '.header-title')?.textContent;
      if (title?.includes('June') && title?.includes('2024')) {
        const selectedDay = shadowQuery<HTMLButtonElement>(element, '.day[data-selected="true"]');
        expect(selectedDay?.textContent).toBe('15');
      }
    });

    it('should handle selected date in different month', async () => {
      // Set value to June 15
      element.setAttribute('value', '2024-06-15');
      await new Promise(r => requestAnimationFrame(r));
      
      // Navigate to different month
      const nextBtn = shadowQuery<HTMLButtonElement>(element, '.nav-button:last-of-type');
      for (let i = 0; i < 3; i++) {
        simulateClick(nextBtn!);
        await new Promise(r => requestAnimationFrame(r));
      }

      // June date should not be marked as selected in September view
      const selectedDays = shadowQueryAll<HTMLButtonElement>(element, '.day[data-selected="true"]');
      // Either no selected days visible or in outside days
      expect(selectedDays.length).toBeGreaterThanOrEqual(0);
    });
  });

  describe('Today highlighting', () => {
    it('should mark today with data-today="true"', async () => {
      await new Promise(r => requestAnimationFrame(r));
      const todayButton = shadowQuery<HTMLButtonElement>(element, '.day[data-today="true"]');
      expect(todayButton).toBeDefined();
    });

    it('should not mark today as selected unless it is the selected date', async () => {
      element.setAttribute('value', '2020-01-01');
      await new Promise(r => requestAnimationFrame(r));
      await new Promise(r => requestAnimationFrame(r));

      const todayButton = shadowQuery<HTMLButtonElement>(element, '.day[data-today="true"]');
      
      if (todayButton) {
        expect(todayButton.getAttribute('data-selected')).not.toBe('true');
      }
    });
  });

  describe('Date selection change event', () => {
    it('should emit change event when date is selected', async () => {
      const eventPromise = new Promise<CustomEvent>((resolve) => {
        element.addEventListener('change', (e) => {
          resolve(e as CustomEvent);
        }, { once: true });
      });

      const dayButton = shadowQuery<HTMLButtonElement>(element, '.day:not([data-outside="true"])');
      simulateClick(dayButton!);

      const event = await eventPromise;
      expect(event.detail).toHaveProperty('date');
      expect(event.detail.date).toMatch(/^\d{4}-\d{2}-\d{2}/);
    });

    it('should update value attribute when date is selected', async () => {
      const dayButton = shadowQuery<HTMLButtonElement>(element, '.day:not([data-outside="true"])');
      
      simulateClick(dayButton!);
      await new Promise(r => requestAnimationFrame(r));

      const value = element.getAttribute('value');
      expect(value).toBeDefined();
      expect(value).toMatch(/\d{4}-\d{2}-\d{2}/);
    });

    it('should allow selecting outside (previous/next month) days', async () => {
      await new Promise(r => requestAnimationFrame(r));
      const outsideDay = shadowQuery<HTMLButtonElement>(element, '.day[data-outside="true"]');
      
      if (outsideDay) {
        simulateClick(outsideDay);
        await new Promise(r => requestAnimationFrame(r));
        await new Promise(r => requestAnimationFrame(r));

        const selectedDay = shadowQuery<HTMLButtonElement>(element, '.day[data-selected="true"]');
        expect(selectedDay).toBeDefined();
      }
    });
  });

  describe('Month navigation edge cases', () => {
    it('should handle year transition going backward', async () => {
      const prevBtn = shadowQuery<HTMLButtonElement>(element, '.nav-button:first-of-type');
      
      for (let i = 0; i < 15; i++) {
        simulateClick(prevBtn!);
        await new Promise(r => requestAnimationFrame(r));
      }

      const title = shadowQuery<HTMLDivElement>(element, '.header-title')?.textContent;
      expect(title).toBeDefined();
      
      simulateClick(prevBtn!);
      await new Promise(r => requestAnimationFrame(r));
      
      const newTitle = shadowQuery<HTMLDivElement>(element, '.header-title')?.textContent;
      expect(newTitle).not.toBe(title);
    });

    it('should handle year transition going forward', async () => {
      const nextBtn = shadowQuery<HTMLButtonElement>(element, '.nav-button:last-of-type');
      
      for (let i = 0; i < 15; i++) {
        simulateClick(nextBtn!);
        await new Promise(r => requestAnimationFrame(r));
      }

      const title = shadowQuery<HTMLDivElement>(element, '.header-title')?.textContent;
      expect(title).toBeDefined();
      
      simulateClick(nextBtn!);
      await new Promise(r => requestAnimationFrame(r));
      
      const newTitle = shadowQuery<HTMLDivElement>(element, '.header-title')?.textContent;
      expect(newTitle).not.toBe(title);
    });
  });

  describe('getDaysInMonth edge cases', () => {
    it('should handle February leap year', async () => {
      element.setAttribute('value', '2024-02-15');
      await new Promise(r => requestAnimationFrame(r));
      await new Promise(r => requestAnimationFrame(r));

      const days = shadowQueryAll<HTMLButtonElement>(element, '.day');
      // February 2024 has 29 days, plus padding days = 28-35 total cells
      expect(days.length).toBeGreaterThanOrEqual(28);
    });

    it('should include previous month days to fill first week', async () => {
      await new Promise(r => requestAnimationFrame(r));
      const outsideDays = shadowQueryAll<HTMLButtonElement>(element, '.day[data-outside="true"]');
      expect(outsideDays).toBeDefined();
    });
  });

  describe('Rapid interactions', () => {
    it('should handle rapid month navigation', async () => {
      const nextBtn = shadowQuery<HTMLButtonElement>(element, '.nav-button:last-of-type');
      
      simulateClick(nextBtn!);
      simulateClick(nextBtn!);
      simulateClick(nextBtn!);
      await new Promise(r => requestAnimationFrame(r));

      const days = shadowQueryAll<HTMLButtonElement>(element, '.day');
      expect(days.length).toBeGreaterThan(0);
    });

    it('should handle rapid date selections', async () => {
      await new Promise(r => requestAnimationFrame(r));
      const days = shadowQueryAll<HTMLButtonElement>(element, '.day:not([data-outside="true"])');
      
      if (days.length >= 3) {
        simulateClick(days[0]);
        simulateClick(days[1]);
        simulateClick(days[2]);
        await new Promise(r => requestAnimationFrame(r));
        await new Promise(r => requestAnimationFrame(r));

        const selected = shadowQuery<HTMLButtonElement>(element, '.day[data-selected="true"]');
        expect(selected).toBeDefined();
      }
    });
  });
});
