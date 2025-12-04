import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';
import './eva-carousel';

/**
 * ## EVA Carousel
 * 
 * Image/content carousel with navigation controls and auto-advance.
 * 
 * ### Features:
 * - Previous/next navigation buttons
 * - Indicator dots for slide position
 * - Optional auto-advance with configurable interval
 * - Keyboard navigation (Left/Right, Home/End)
 * - Live region announces slide changes for screen readers
 * - Responsive design
 * 
 * ### Usage:
 * ```html
 * <eva-carousel label="Featured Products">
 *   <eva-carousel-item>Slide 1</eva-carousel-item>
 *   <eva-carousel-item>Slide 2</eva-carousel-item>
 *   <eva-carousel-item>Slide 3</eva-carousel-item>
 * </eva-carousel>
 * ```
 */
const meta: Meta = {
  title: 'Components/Carousel',
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: 'Carousel component for displaying rotating content with navigation.',
      },
    },
    a11y: {
      config: {
        rules: [
          { id: 'color-contrast', enabled: true },
          { id: 'button-name', enabled: true },
        ],
      },
    },
  },
};

export default meta;
type Story = StoryObj;

/**
 * Default carousel with three slides.
 */
export const Default: Story = {
  render: () => html`
    <eva-carousel label="Image Gallery">
      <eva-carousel-item>
        <div style="height: 300px; background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); display: flex; align-items: center; justify-content: center; color: white; font-size: 2rem; font-weight: bold;">
          Slide 1
        </div>
      </eva-carousel-item>
      <eva-carousel-item>
        <div style="height: 300px; background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%); display: flex; align-items: center; justify-content: center; color: white; font-size: 2rem; font-weight: bold;">
          Slide 2
        </div>
      </eva-carousel-item>
      <eva-carousel-item>
        <div style="height: 300px; background: linear-gradient(135deg, #4facfe 0%, #00f2fe 100%); display: flex; align-items: center; justify-content: center; color: white; font-size: 2rem; font-weight: bold;">
          Slide 3
        </div>
      </eva-carousel-item>
    </eva-carousel>
  `,
};

/**
 * Carousel with auto-advance every 3 seconds.
 */
export const AutoAdvance: Story = {
  render: () => html`
    <div>
      <p style="margin-bottom: 1rem;">Auto-advances every 3 seconds</p>
      <eva-carousel label="Featured Products" auto-advance="3000">
        <eva-carousel-item>
          <div style="height: 250px; background: linear-gradient(135deg, #fa709a 0%, #fee140 100%); display: flex; align-items: center; justify-content: center; color: white; font-size: 1.5rem; font-weight: bold;">
            Product 1
          </div>
        </eva-carousel-item>
        <eva-carousel-item>
          <div style="height: 250px; background: linear-gradient(135deg, #30cfd0 0%, #330867 100%); display: flex; align-items: center; justify-content: center; color: white; font-size: 1.5rem; font-weight: bold;">
            Product 2
          </div>
        </eva-carousel-item>
        <eva-carousel-item>
          <div style="height: 250px; background: linear-gradient(135deg, #a8edea 0%, #fed6e3 100%); display: flex; align-items: center; justify-content: center; color: #333; font-size: 1.5rem; font-weight: bold;">
            Product 3
          </div>
        </eva-carousel-item>
      </eva-carousel>
    </div>
  `,
};

/**
 * Product showcase carousel with images and descriptions.
 */
export const ProductShowcase: Story = {
  render: () => html`
    <eva-carousel label="Product Showcase">
      <eva-carousel-item>
        <div style="padding: 2rem; background: #f9fafb; height: 350px; display: flex; flex-direction: column; align-items: center; justify-content: center;">
          <div style="width: 200px; height: 200px; background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); border-radius: 1rem; margin-bottom: 1rem;"></div>
          <h3 style="margin: 0.5rem 0;">Premium Widget</h3>
          <p style="margin: 0; color: #6b7280;">High-quality design for professionals</p>
          <p style="margin-top: 0.5rem; font-size: 1.5rem; font-weight: bold; color: #3b82f6;">$299</p>
        </div>
      </eva-carousel-item>
      <eva-carousel-item>
        <div style="padding: 2rem; background: #f9fafb; height: 350px; display: flex; flex-direction: column; align-items: center; justify-content: center;">
          <div style="width: 200px; height: 200px; background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%); border-radius: 1rem; margin-bottom: 1rem;"></div>
          <h3 style="margin: 0.5rem 0;">Deluxe Package</h3>
          <p style="margin: 0; color: #6b7280;">Everything you need and more</p>
          <p style="margin-top: 0.5rem; font-size: 1.5rem; font-weight: bold; color: #3b82f6;">$499</p>
        </div>
      </eva-carousel-item>
      <eva-carousel-item>
        <div style="padding: 2rem; background: #f9fafb; height: 350px; display: flex; flex-direction: column; align-items: center; justify-content: center;">
          <div style="width: 200px; height: 200px; background: linear-gradient(135deg, #4facfe 0%, #00f2fe 100%); border-radius: 1rem; margin-bottom: 1rem;"></div>
          <h3 style="margin: 0.5rem 0;">Enterprise Suite</h3>
          <p style="margin: 0; color: #6b7280;">Complete solution for large teams</p>
          <p style="margin-top: 0.5rem; font-size: 1.5rem; font-weight: bold; color: #3b82f6;">$999</p>
        </div>
      </eva-carousel-item>
    </eva-carousel>
  `,
};

/**
 * Testimonials carousel with customer quotes.
 */
export const Testimonials: Story = {
  render: () => html`
    <div style="max-width: 600px; margin: 0 auto;">
      <h3 style="text-align: center; margin-bottom: 1.5rem;">What Our Customers Say</h3>
      <eva-carousel label="Customer Testimonials" auto-advance="5000">
        <eva-carousel-item>
          <div style="padding: 2rem; background: white; border: 1px solid #e5e7eb; border-radius: 0.5rem; text-align: center;">
            <p style="font-size: 1.125rem; font-style: italic; margin-bottom: 1rem; color: #374151;">
              "This product completely transformed our workflow. Highly recommended!"
            </p>
            <p style="font-weight: 500; color: #6b7280; margin: 0;">— Sarah Johnson, CEO</p>
          </div>
        </eva-carousel-item>
        <eva-carousel-item>
          <div style="padding: 2rem; background: white; border: 1px solid #e5e7eb; border-radius: 0.5rem; text-align: center;">
            <p style="font-size: 1.125rem; font-style: italic; margin-bottom: 1rem; color: #374151;">
              "Outstanding support and incredible features. Worth every penny."
            </p>
            <p style="font-weight: 500; color: #6b7280; margin: 0;">— Michael Chen, CTO</p>
          </div>
        </eva-carousel-item>
        <eva-carousel-item>
          <div style="padding: 2rem; background: white; border: 1px solid #e5e7eb; border-radius: 0.5rem; text-align: center;">
            <p style="font-size: 1.125rem; font-style: italic; margin-bottom: 1rem; color: #374151;">
              "Easy to use and extremely powerful. Our team loves it!"
            </p>
            <p style="font-weight: 500; color: #6b7280; margin: 0;">— Emily Rodriguez, Product Manager</p>
          </div>
        </eva-carousel-item>
      </eva-carousel>
    </div>
  `,
};

/**
 * Carousel states and keyboard navigation.
 */
export const AllStates: Story = {
  render: () => html`
    <div style="display: flex; flex-direction: column; gap: 2rem;">
      <div>
        <h4 style="margin-bottom: 0.5rem;">Manual Navigation</h4>
        <eva-carousel label="Manual">
          <eva-carousel-item>
            <div style="height: 200px; background: #dbeafe; display: flex; align-items: center; justify-content: center; font-weight: bold;">
              Slide 1
            </div>
          </eva-carousel-item>
          <eva-carousel-item>
            <div style="height: 200px; background: #fef3c7; display: flex; align-items: center; justify-content: center; font-weight: bold;">
              Slide 2
            </div>
          </eva-carousel-item>
        </eva-carousel>
      </div>

      <div>
        <h4 style="margin-bottom: 0.5rem;">Auto-Advance (3s)</h4>
        <eva-carousel label="Auto" auto-advance="3000">
          <eva-carousel-item>
            <div style="height: 200px; background: #fce7f3; display: flex; align-items: center; justify-content: center; font-weight: bold;">
              Slide 1
            </div>
          </eva-carousel-item>
          <eva-carousel-item>
            <div style="height: 200px; background: #e0e7ff; display: flex; align-items: center; justify-content: center; font-weight: bold;">
              Slide 2
            </div>
          </eva-carousel-item>
        </eva-carousel>
      </div>

      <div style="padding: 1rem; background: #f0f9ff; border: 1px solid #bfdbfe; border-radius: 0.5rem;">
        <h4 style="margin-top: 0;">Keyboard Navigation</h4>
        <ul style="margin: 0.5rem 0; padding-left: 1.5rem; line-height: 1.8;">
          <li><strong>Left Arrow:</strong> Previous slide</li>
          <li><strong>Right Arrow:</strong> Next slide</li>
          <li><strong>Home:</strong> First slide</li>
          <li><strong>End:</strong> Last slide</li>
          <li><strong>Tab:</strong> Navigate between prev/next buttons and indicators</li>
        </ul>
      </div>
    </div>
  `,
};

/**
 * Accessibility features and WCAG 2.2 AA compliance.
 * 
 * - **Keyboard Navigation**: Full keyboard support (Left/Right, Home/End)
 * - **Live Region**: Screen readers announce slide changes (aria-live="polite")
 * - **Focus Management**: Visible focus indicators on navigation buttons and indicators
 * - **Color Contrast**: WCAG AA compliant colors for controls and indicators
 * - **Labeled Region**: Carousel has accessible name via "label" attribute
 * - **Auto-Advance Control**: Users can pause rotation by interacting with controls
 */
export const AccessibilityNotes: Story = {
  render: () => html`
    <div style="padding: 1.5rem; background: #f9fafb; border-radius: 0.5rem;">
      <h3 style="margin-top: 0;">Carousel Accessibility</h3>
      
      <div style="margin-bottom: 1.5rem;">
        <h4>Keyboard Support</h4>
        <ul style="line-height: 1.8;">
          <li>Left/Right arrows navigate slides</li>
          <li>Home/End jump to first/last slide</li>
          <li>Tab navigates between controls</li>
          <li>Enter/Space activate focused control</li>
        </ul>
      </div>

      <div style="margin-bottom: 1.5rem;">
        <h4>Screen Reader Support</h4>
        <ul style="line-height: 1.8;">
          <li>Live region announces slide changes</li>
          <li>Current slide number announced (e.g., "Slide 2 of 3")</li>
          <li>Navigation buttons clearly labeled</li>
          <li>Indicator dots labeled with slide numbers</li>
        </ul>
      </div>

      <eva-carousel label="Accessible Carousel">
        <eva-carousel-item>
          <div style="height: 200px; background: #dbeafe; display: flex; align-items: center; justify-content: center; font-weight: bold;">
            Slide 1
          </div>
        </eva-carousel-item>
        <eva-carousel-item>
          <div style="height: 200px; background: #fef3c7; display: flex; align-items: center; justify-content: center; font-weight: bold;">
            Slide 2
          </div>
        </eva-carousel-item>
      </eva-carousel>

      <div style="margin-top: 1.5rem; padding: 1rem; background: white; border-radius: 0.375rem;">
        <p style="margin: 0; font-size: 0.875rem; color: #6b7280;">
          ✓ WCAG 2.2 Level AA Compliant<br>
          ✓ Keyboard navigable<br>
          ✓ Screen reader friendly<br>
          ✓ Pause on interaction
        </p>
      </div>
    </div>
  `,
};
