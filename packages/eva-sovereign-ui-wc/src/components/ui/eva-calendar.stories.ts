import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';
import './eva-calendar';

/**
 * ## EVA Calendar
 * 
 * A date picker component with month navigation and keyboard support.
 * 
 * ### Features:
 * - Month navigation with previous/next buttons
 * - Date selection with visual feedback
 * - Keyboard navigation (arrow keys navigate between days/months)
 * - ISO 8601 date format (YYYY-MM-DD)
 * - Disabled dates support
 * - Custom event on date selection
 * 
 * ### Usage:
 * ```html
 * <eva-calendar value="2024-03-15"></eva-calendar>
 * ```
 */
const meta: Meta = {
  title: 'Components/Calendar',
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: 'Date picker with month view and keyboard navigation.',
      },
    },
    a11y: {
      config: {
        rules: [
          { id: 'color-contrast', enabled: true },
          { id: 'label', enabled: true },
        ],
      },
    },
  },
};

export default meta;
type Story = StoryObj;

/**
 * Default calendar with current month view.
 */
export const Default: Story = {
  render: () => html`
    <eva-calendar></eva-calendar>
  `,
};

/**
 * Calendar with pre-selected date.
 */
export const WithSelectedDate: Story = {
  render: () => html`
    <div>
      <p style="margin-bottom: 1rem;">Selected: March 15, 2024</p>
      <eva-calendar value="2024-03-15"></eva-calendar>
    </div>
  `,
};

/**
 * Date picker for scheduling meetings.
 */
export const MeetingScheduler: Story = {
  render: () => html`
    <div style="max-width: 400px;">
      <h3 style="margin-bottom: 1rem;">Schedule a Meeting</h3>
      <label style="display: block; margin-bottom: 0.5rem; font-weight: 500;">
        Select Date
      </label>
      <eva-calendar 
        value="2024-03-20"
        @change=${(e: CustomEvent) => {
          console.log('Meeting scheduled:', e.detail.date);
        }}
      ></eva-calendar>
      <div style="margin-top: 1rem; padding: 1rem; background: #f5f5f5; border-radius: 0.5rem;">
        <p style="margin: 0; font-size: 0.875rem; color: #666;">
          💡 Use arrow keys to navigate between dates. Arrow left/right on edge dates navigates to previous/next month.
        </p>
      </div>
    </div>
  `,
};

/**
 * Booking form with date selection.
 */
export const BookingForm: Story = {
  render: () => html`
    <div style="max-width: 500px; padding: 2rem; border: 1px solid #e5e7eb; border-radius: 0.5rem;">
      <h3 style="margin-bottom: 1.5rem;">Book Your Appointment</h3>
      
      <div style="margin-bottom: 1.5rem;">
        <label style="display: block; margin-bottom: 0.5rem; font-weight: 500;">
          Full Name
        </label>
        <input 
          type="text" 
          placeholder="Enter your name"
          style="width: 100%; padding: 0.5rem; border: 1px solid #d1d5db; border-radius: 0.375rem;"
        />
      </div>

      <div style="margin-bottom: 1.5rem;">
        <label style="display: block; margin-bottom: 0.5rem; font-weight: 500;">
          Preferred Date
        </label>
        <eva-calendar></eva-calendar>
      </div>

      <button 
        style="width: 100%; padding: 0.75rem; background: #3b82f6; color: white; border: none; border-radius: 0.375rem; font-weight: 500; cursor: pointer;"
      >
        Confirm Booking
      </button>
    </div>
  `,
};

/**
 * Calendar states and keyboard navigation.
 */
export const AllStates: Story = {
  render: () => html`
    <div style="display: flex; flex-direction: column; gap: 2rem;">
      <div>
        <h4 style="margin-bottom: 0.5rem;">Default (Current Month)</h4>
        <eva-calendar></eva-calendar>
      </div>

      <div>
        <h4 style="margin-bottom: 0.5rem;">With Selected Date</h4>
        <eva-calendar value="2024-03-15"></eva-calendar>
      </div>

      <div style="padding: 1rem; background: #f0f9ff; border: 1px solid #bfdbfe; border-radius: 0.5rem;">
        <h4 style="margin-top: 0;">Keyboard Navigation</h4>
        <ul style="margin: 0.5rem 0; padding-left: 1.5rem; line-height: 1.8;">
          <li><strong>Arrow Keys:</strong> Navigate between days</li>
          <li><strong>Arrow Left/Right on edge:</strong> Navigate to previous/next month</li>
          <li><strong>Arrow Up on first week:</strong> Navigate to previous month</li>
          <li><strong>Enter/Space:</strong> Select focused date</li>
          <li><strong>Tab:</strong> Move between navigation buttons and calendar grid</li>
        </ul>
      </div>
    </div>
  `,
};

/**
 * Accessibility features and WCAG 2.2 AA compliance.
 * 
 * - **Keyboard Navigation**: Full keyboard support with arrow keys, Enter/Space for selection
 * - **Focus Management**: Visible focus indicators on all interactive elements
 * - **Screen Readers**: Semantic HTML with proper ARIA labels for month/year, navigation buttons
 * - **Color Contrast**: WCAG AA compliant colors (4.5:1 for text, 3:1 for UI components)
 * - **Date Format**: ISO 8601 format (YYYY-MM-DD) for consistent parsing
 * - **Custom Events**: 'change' event with selected date for form integration
 */
export const AccessibilityNotes: Story = {
  render: () => html`
    <div style="padding: 1.5rem; background: #f9fafb; border-radius: 0.5rem;">
      <h3 style="margin-top: 0;">Calendar Accessibility</h3>
      
      <div style="margin-bottom: 1.5rem;">
        <h4>Keyboard Support</h4>
        <ul style="line-height: 1.8;">
          <li>Arrow keys navigate between dates</li>
          <li>Edge navigation triggers month changes</li>
          <li>Enter/Space selects focused date</li>
          <li>Tab navigates to prev/next month buttons</li>
        </ul>
      </div>

      <div style="margin-bottom: 1.5rem;">
        <h4>Screen Reader Support</h4>
        <ul style="line-height: 1.8;">
          <li>Month/year announced in header</li>
          <li>Each date has full date label</li>
          <li>Selected date state announced</li>
          <li>Navigation buttons labeled clearly</li>
        </ul>
      </div>

      <eva-calendar value="2024-03-15"></eva-calendar>

      <div style="margin-top: 1.5rem; padding: 1rem; background: white; border-radius: 0.375rem;">
        <p style="margin: 0; font-size: 0.875rem; color: #6b7280;">
          ✓ WCAG 2.2 Level AA Compliant<br>
          ✓ Keyboard navigable<br>
          ✓ Screen reader friendly<br>
          ✓ High contrast mode compatible
        </p>
      </div>
    </div>
  `,
};
