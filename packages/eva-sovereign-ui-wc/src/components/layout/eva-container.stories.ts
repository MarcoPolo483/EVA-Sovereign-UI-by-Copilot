import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';
import './eva-container';

/**
 * ## EVA Container
 * 
 * Responsive container component with max-width constraints.
 * 
 * ### Features:
 * - Max-width 1200px with centered alignment
 * - Responsive horizontal padding
 * - Smooth transitions
 * - Flexible content wrapping
 * 
 * ### Usage:
 * ```html
 * <eva-container>
 *   <h1>Content goes here</h1>
 *   <p>Container provides consistent width and spacing.</p>
 * </eva-container>
 * ```
 */
const meta: Meta = {
  title: 'Layout/Container',
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: 'Responsive container with max-width constraints for consistent layouts.',
      },
    },
  },
};

export default meta;
type Story = StoryObj;

/**
 * Default container with content.
 */
export const Default: Story = {
  render: () => html`
    <eva-container>
      <h1>Container Component</h1>
      <p style="line-height: 1.8;">
        This container has a maximum width of 1200px and automatically centers content.
        It adds responsive padding to ensure content doesn't touch the edges on smaller screens.
      </p>
    </eva-container>
  `,
};

/**
 * Content sections in containers.
 */
export const ContentSections: Story = {
  render: () => html`
    <div>
      <eva-container>
        <div style="padding: 3rem 0;">
          <h1 style="margin-bottom: 1rem;">Welcome Section</h1>
          <p style="line-height: 1.8; font-size: 1.125rem; color: #6b7280;">
            This is the main introduction to your application. The container ensures consistent width across different viewport sizes.
          </p>
        </div>
      </eva-container>

      <div style="background: #f9fafb; padding: 3rem 0;">
        <eva-container>
          <h2 style="margin-bottom: 1.5rem;">Features</h2>
          <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 2rem;">
            <div style="padding: 1.5rem; background: white; border-radius: 0.5rem; box-shadow: 0 1px 3px rgba(0,0,0,0.1);">
              <h3>Feature One</h3>
              <p style="color: #6b7280;">Description of the first feature</p>
            </div>
            <div style="padding: 1.5rem; background: white; border-radius: 0.5rem; box-shadow: 0 1px 3px rgba(0,0,0,0.1);">
              <h3>Feature Two</h3>
              <p style="color: #6b7280;">Description of the second feature</p>
            </div>
            <div style="padding: 1.5rem; background: white; border-radius: 0.5rem; box-shadow: 0 1px 3px rgba(0,0,0,0.1);">
              <h3>Feature Three</h3>
              <p style="color: #6b7280;">Description of the third feature</p>
            </div>
          </div>
        </eva-container>
      </div>

      <eva-container>
        <div style="padding: 3rem 0;">
          <h2 style="margin-bottom: 1rem;">Call to Action</h2>
          <p style="margin-bottom: 1.5rem; line-height: 1.8; color: #6b7280;">
            Ready to get started? Sign up today and explore all the features.
          </p>
          <button style="padding: 0.75rem 2rem; background: #3b82f6; color: white; border: none; border-radius: 0.5rem; font-weight: 600; cursor: pointer;">
            Get Started
          </button>
        </div>
      </eva-container>
    </div>
  `,
};

/**
 * Article layout with container.
 */
export const ArticleLayout: Story = {
  render: () => html`
    <eva-container>
      <article style="max-width: 800px; margin: 3rem auto;">
        <header style="margin-bottom: 2rem;">
          <h1 style="margin-bottom: 0.5rem; font-size: 2.5rem;">
            Understanding Accessible Web Components
          </h1>
          <div style="display: flex; gap: 1rem; color: #6b7280; font-size: 0.875rem;">
            <span>By Jane Smith</span>
            <span>•</span>
            <span>December 3, 2024</span>
            <span>•</span>
            <span>5 min read</span>
          </div>
        </header>

        <div style="line-height: 1.8; color: #374151;">
          <p style="font-size: 1.125rem; color: #6b7280; margin-bottom: 2rem;">
            Web components provide a powerful way to create reusable UI elements, 
            but accessibility must be built in from the start.
          </p>

          <h2 style="margin-top: 2rem; margin-bottom: 1rem;">Why Accessibility Matters</h2>
          <p>
            Accessibility ensures that your applications can be used by everyone, 
            regardless of their abilities or the devices they use. When building 
            with web components, we need to ensure proper ARIA attributes, keyboard 
            navigation, and screen reader support.
          </p>

          <h2 style="margin-top: 2rem; margin-bottom: 1rem;">Key Principles</h2>
          <ul style="margin-left: 1.5rem;">
            <li style="margin-bottom: 0.5rem;">Semantic HTML structure</li>
            <li style="margin-bottom: 0.5rem;">Keyboard navigation support</li>
            <li style="margin-bottom: 0.5rem;">ARIA attributes for screen readers</li>
            <li style="margin-bottom: 0.5rem;">Color contrast compliance</li>
            <li style="margin-bottom: 0.5rem;">Focus management</li>
          </ul>

          <h2 style="margin-top: 2rem; margin-bottom: 1rem;">Conclusion</h2>
          <p>
            Building accessible web components is essential for creating inclusive 
            applications that serve all users effectively.
          </p>
        </div>
      </article>
    </eva-container>
  `,
};

/**
 * Form layout with container.
 */
export const FormLayout: Story = {
  render: () => html`
    <eva-container>
      <div style="max-width: 600px; margin: 3rem auto; padding: 2rem; background: white; border: 1px solid #e5e7eb; border-radius: 0.5rem; box-shadow: 0 1px 3px rgba(0,0,0,0.1);">
        <h2 style="margin-top: 0; margin-bottom: 1.5rem;">Contact Us</h2>
        
        <form>
          <div style="margin-bottom: 1.5rem;">
            <label style="display: block; margin-bottom: 0.5rem; font-weight: 500;">
              Full Name
            </label>
            <input 
              type="text" 
              placeholder="John Doe"
              style="width: 100%; padding: 0.75rem; border: 1px solid #d1d5db; border-radius: 0.375rem; font-size: 1rem;"
            />
          </div>

          <div style="margin-bottom: 1.5rem;">
            <label style="display: block; margin-bottom: 0.5rem; font-weight: 500;">
              Email Address
            </label>
            <input 
              type="email" 
              placeholder="john@example.com"
              style="width: 100%; padding: 0.75rem; border: 1px solid #d1d5db; border-radius: 0.375rem; font-size: 1rem;"
            />
          </div>

          <div style="margin-bottom: 1.5rem;">
            <label style="display: block; margin-bottom: 0.5rem; font-weight: 500;">
              Message
            </label>
            <textarea 
              placeholder="Your message here..."
              rows="5"
              style="width: 100%; padding: 0.75rem; border: 1px solid #d1d5db; border-radius: 0.375rem; font-size: 1rem; resize: vertical;"
            ></textarea>
          </div>

          <button 
            type="submit"
            style="width: 100%; padding: 0.75rem; background: #3b82f6; color: white; border: none; border-radius: 0.375rem; font-weight: 600; font-size: 1rem; cursor: pointer;"
          >
            Send Message
          </button>
        </form>
      </div>
    </eva-container>
  `,
};

/**
 * Multiple containers showing responsive behavior.
 */
export const ResponsiveBehavior: Story = {
  render: () => html`
    <div style="display: flex; flex-direction: column; gap: 2rem;">
      <eva-container>
        <div style="padding: 2rem; background: #dbeafe; border-radius: 0.5rem;">
          <h3 style="margin-top: 0;">Container 1</h3>
          <p style="margin: 0;">This container respects the max-width constraint.</p>
        </div>
      </eva-container>

      <eva-container>
        <div style="padding: 2rem; background: #fef3c7; border-radius: 0.5rem;">
          <h3 style="margin-top: 0;">Container 2</h3>
          <p style="margin: 0;">All containers share the same max-width and centering behavior.</p>
        </div>
      </eva-container>

      <eva-container>
        <div style="padding: 2rem; background: #fce7f3; border-radius: 0.5rem;">
          <h3 style="margin-top: 0;">Container 3</h3>
          <p style="margin: 0;">Try resizing the viewport to see responsive padding in action.</p>
        </div>
      </eva-container>

      <div style="padding: 1.5rem; background: #f9fafb; border-radius: 0.5rem; max-width: 1200px; margin: 0 auto;">
        <h4 style="margin-top: 0;">Responsive Features</h4>
        <ul style="margin: 0.5rem 0; padding-left: 1.5rem; line-height: 1.8;">
          <li>Max-width: 1200px on large screens</li>
          <li>Horizontal padding adapts to viewport size</li>
          <li>Content stays centered with auto margins</li>
          <li>Consistent spacing across all breakpoints</li>
        </ul>
      </div>
    </div>
  `,
};

/**
 * Accessibility features and WCAG 2.2 AA compliance.
 * 
 * - **Semantic Structure**: Simple div wrapper, no accessibility barriers
 * - **Responsive Design**: Adapts to all viewport sizes
 * - **Content Reflow**: Text reflows naturally within container
 * - **No Fixed Heights**: Allows content to determine height
 * - **Focus Management**: Does not interfere with focus flow
 * - **Screen Readers**: Transparent to assistive technologies
 */
export const AccessibilityNotes: Story = {
  render: () => html`
    <eva-container>
      <div style="padding: 1.5rem; background: #f9fafb; border-radius: 0.5rem;">
        <h3 style="margin-top: 0;">Container Accessibility</h3>
        
        <div style="margin-bottom: 1.5rem;">
          <h4>Design Features</h4>
          <ul style="line-height: 1.8;">
            <li>Simple layout container without accessibility barriers</li>
            <li>Does not interfere with keyboard navigation</li>
            <li>Transparent to screen readers (just wraps content)</li>
            <li>Responsive padding ensures content doesn't touch edges</li>
          </ul>
        </div>

        <div style="margin-bottom: 1.5rem;">
          <h4>Responsive Behavior</h4>
          <ul style="line-height: 1.8;">
            <li>Max-width prevents overly long line lengths</li>
            <li>Optimal reading width improves readability</li>
            <li>Content reflows naturally on smaller screens</li>
            <li>No horizontal scrolling introduced</li>
          </ul>
        </div>

        <div style="padding: 1rem; background: white; border-radius: 0.375rem;">
          <p style="margin: 0; font-size: 0.875rem; color: #6b7280;">
            ✓ WCAG 2.2 Level AA Compliant<br>
            ✓ Responsive design<br>
            ✓ No accessibility barriers<br>
            ✓ Content-first approach
          </p>
        </div>
      </div>
    </eva-container>
  `,
};
