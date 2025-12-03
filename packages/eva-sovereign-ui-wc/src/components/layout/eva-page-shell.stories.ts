import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';
import './eva-page-shell';
import '../gc-design/eva-gc-header';
import '../gc-design/eva-gc-footer';

/**
 * ## EVA Page Shell
 * 
 * Semantic page structure providing the main layout container.
 * 
 * ### Features:
 * - Semantic HTML structure (header, main, footer)
 * - Flexbox layout with sticky footer
 * - Main content receives focus for skip links
 * - Min-height 100vh for full viewport coverage
 * - Slot-based architecture for flexible content
 * 
 * ### Usage:
 * ```html
 * <eva-page-shell>
 *   <eva-gc-header slot="header"></eva-gc-header>
 *   <div>Main content goes here</div>
 *   <eva-gc-footer slot="footer"></eva-gc-footer>
 * </eva-page-shell>
 * ```
 */
const meta: Meta = {
  title: 'Layout/Page Shell',
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: 'Page layout structure with semantic HTML and flexible slots.',
      },
    },
    a11y: {
      config: {
        rules: [
          { id: 'landmark-one-main', enabled: true },
          { id: 'region', enabled: true },
        ],
      },
    },
  },
};

export default meta;
type Story = StoryObj;

/**
 * Default page shell with header, content, and footer.
 */
export const Default: Story = {
  render: () => html`
    <eva-page-shell>
      <eva-gc-header slot="header"></eva-gc-header>
      <div style="padding: 2rem;">
        <h1>Welcome to EVA Sovereign UI</h1>
        <p style="line-height: 1.8;">
          This is the main content area. The page shell provides a semantic structure 
          with header, main, and footer regions.
        </p>
      </div>
      <eva-gc-footer slot="footer"></eva-gc-footer>
    </eva-page-shell>
  `,
};

/**
 * Government application page structure.
 */
export const GovernmentPage: Story = {
  render: () => html`
    <eva-page-shell>
      <eva-gc-header slot="header" app-name-key="esdc.title"></eva-gc-header>
      
      <div style="max-width: 1200px; margin: 0 auto; padding: 3rem 1rem;">
        <h1 style="margin-bottom: 1.5rem;">Employment Services</h1>
        
        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 2rem; margin-bottom: 3rem;">
          <div style="padding: 2rem; background: white; border: 1px solid #e5e7eb; border-radius: 0.5rem;">
            <h2 style="margin-top: 0;">Job Search</h2>
            <p style="color: #6b7280;">Find employment opportunities across Canada</p>
            <button style="margin-top: 1rem; padding: 0.5rem 1rem; background: #3b82f6; color: white; border: none; border-radius: 0.375rem; cursor: pointer;">
              Search Jobs
            </button>
          </div>
          
          <div style="padding: 2rem; background: white; border: 1px solid #e5e7eb; border-radius: 0.5rem;">
            <h2 style="margin-top: 0;">Benefits</h2>
            <p style="color: #6b7280;">Apply for employment insurance and benefits</p>
            <button style="margin-top: 1rem; padding: 0.5rem 1rem; background: #3b82f6; color: white; border: none; border-radius: 0.375rem; cursor: pointer;">
              View Benefits
            </button>
          </div>
          
          <div style="padding: 2rem; background: white; border: 1px solid #e5e7eb; border-radius: 0.5rem;">
            <h2 style="margin-top: 0;">Training</h2>
            <p style="color: #6b7280;">Access skills training and career development</p>
            <button style="margin-top: 1rem; padding: 0.5rem 1rem; background: #3b82f6; color: white; border: none; border-radius: 0.375rem; cursor: pointer;">
              Explore Training
            </button>
          </div>
        </div>
      </div>
      
      <eva-gc-footer slot="footer"></eva-gc-footer>
    </eva-page-shell>
  `,
};

/**
 * Dashboard layout with sidebar and main content.
 */
export const Dashboard: Story = {
  render: () => html`
    <eva-page-shell>
      <div slot="header" style="background: #1e293b; color: white; padding: 1rem 2rem; display: flex; justify-content: space-between; align-items: center;">
        <h2 style="margin: 0;">Dashboard</h2>
        <div style="display: flex; gap: 1rem; align-items: center;">
          <span>John Doe</span>
          <div style="width: 32px; height: 32px; background: #3b82f6; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-weight: bold;">
            JD
          </div>
        </div>
      </div>
      
      <div style="display: flex; min-height: calc(100vh - 120px);">
        <aside style="width: 250px; background: #f9fafb; border-right: 1px solid #e5e7eb; padding: 2rem 1rem;">
          <nav>
            <ul style="list-style: none; padding: 0; margin: 0;">
              <li style="margin-bottom: 0.5rem;">
                <a href="#" style="display: block; padding: 0.75rem 1rem; background: #3b82f6; color: white; text-decoration: none; border-radius: 0.375rem;">
                  Overview
                </a>
              </li>
              <li style="margin-bottom: 0.5rem;">
                <a href="#" style="display: block; padding: 0.75rem 1rem; color: #374151; text-decoration: none; border-radius: 0.375rem;">
                  Analytics
                </a>
              </li>
              <li style="margin-bottom: 0.5rem;">
                <a href="#" style="display: block; padding: 0.75rem 1rem; color: #374151; text-decoration: none; border-radius: 0.375rem;">
                  Reports
                </a>
              </li>
              <li style="margin-bottom: 0.5rem;">
                <a href="#" style="display: block; padding: 0.75rem 1rem; color: #374151; text-decoration: none; border-radius: 0.375rem;">
                  Settings
                </a>
              </li>
            </ul>
          </nav>
        </aside>
        
        <main style="flex: 1; padding: 2rem;">
          <h1 style="margin-bottom: 1.5rem;">Overview</h1>
          <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 1.5rem;">
            <div style="padding: 1.5rem; background: white; border: 1px solid #e5e7eb; border-radius: 0.5rem;">
              <p style="margin: 0 0 0.5rem 0; color: #6b7280; font-size: 0.875rem;">Total Users</p>
              <p style="margin: 0; font-size: 2rem; font-weight: bold;">1,234</p>
            </div>
            <div style="padding: 1.5rem; background: white; border: 1px solid #e5e7eb; border-radius: 0.5rem;">
              <p style="margin: 0 0 0.5rem 0; color: #6b7280; font-size: 0.875rem;">Active Sessions</p>
              <p style="margin: 0; font-size: 2rem; font-weight: bold;">89</p>
            </div>
            <div style="padding: 1.5rem; background: white; border: 1px solid #e5e7eb; border-radius: 0.5rem;">
              <p style="margin: 0 0 0.5rem 0; color: #6b7280; font-size: 0.875rem;">Revenue</p>
              <p style="margin: 0; font-size: 2rem; font-weight: bold;">$45K</p>
            </div>
          </div>
        </main>
      </div>
      
      <div slot="footer" style="background: #f9fafb; border-top: 1px solid #e5e7eb; padding: 1rem 2rem; text-align: center; color: #6b7280; font-size: 0.875rem;">
        © 2024 Your Company. All rights reserved.
      </div>
    </eva-page-shell>
  `,
};

/**
 * Accessibility features and WCAG 2.2 AA compliance.
 * 
 * - **Semantic Structure**: Uses header, main, footer landmarks
 * - **Skip Link Target**: Main content has id="main-content" and tabindex="-1"
 * - **Focus Management**: Main receives focus when skip link activated
 * - **Flexible Layout**: Sticky footer ensures footer stays at bottom
 * - **Screen Readers**: Proper landmark regions announced
 * - **Keyboard Navigation**: All interactive elements keyboard accessible
 */
export const AccessibilityNotes: Story = {
  render: () => html`
    <div style="padding: 1.5rem; background: #f9fafb; border-radius: 0.5rem;">
      <h3 style="margin-top: 0;">Page Shell Accessibility</h3>
      
      <div style="margin-bottom: 1.5rem;">
        <h4>Semantic Structure</h4>
        <ul style="line-height: 1.8;">
          <li>Header slot creates header landmark</li>
          <li>Main content has role="main" landmark</li>
          <li>Footer slot creates contentinfo landmark</li>
          <li>Main has id="main-content" for skip links</li>
          <li>Main has tabindex="-1" to receive programmatic focus</li>
        </ul>
      </div>

      <div style="margin-bottom: 1.5rem;">
        <h4>Layout Features</h4>
        <ul style="line-height: 1.8;">
          <li>Flexbox ensures footer sticks to bottom</li>
          <li>Min-height 100vh for full viewport coverage</li>
          <li>Main content area grows to fill available space</li>
          <li>Scroll margin top for skip link navigation</li>
        </ul>
      </div>

      <eva-page-shell>
        <div slot="header" style="background: #3b82f6; color: white; padding: 1rem 2rem;">
          <h2 style="margin: 0;">Header</h2>
        </div>
        
        <div style="padding: 2rem;">
          <h1>Main Content</h1>
          <p>This is the main content area with proper landmark structure.</p>
        </div>
        
        <div slot="footer" style="background: #f9fafb; border-top: 1px solid #e5e7eb; padding: 1rem 2rem; text-align: center;">
          Footer
        </div>
      </eva-page-shell>

      <div style="margin-top: 1.5rem; padding: 1rem; background: white; border-radius: 0.375rem;">
        <p style="margin: 0; font-size: 0.875rem; color: #6b7280;">
          ✓ WCAG 2.2 Level AA Compliant<br>
          ✓ Semantic landmarks<br>
          ✓ Skip link compatible<br>
          ✓ Flexible layout
        </p>
      </div>
    </div>
  `,
};
