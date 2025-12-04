import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';
import './eva-skip-link';

/**
 * ## EVA Skip Link
 * 
 * Accessibility navigation link that appears on focus.
 * 
 * ### Features:
 * - Hidden until focused (keyboard-only)
 * - Smooth slide-in animation on focus
 * - Jumps to main content when activated
 * - High contrast styling
 * - Fixed positioning for visibility
 * 
 * ### Usage:
 * ```html
 * <eva-skip-link target="#main-content">
 *   Skip to main content
 * </eva-skip-link>
 * ```
 */
const meta: Meta = {
  title: 'Accessibility/Skip Link',
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: 'Skip link for keyboard users to bypass navigation and jump to main content.',
      },
    },
    a11y: {
      config: {
        rules: [
          { id: 'color-contrast', enabled: true },
          { id: 'focus-order-semantics', enabled: true },
        ],
      },
    },
  },
};

export default meta;
type Story = StoryObj;

/**
 * Default skip link (press Tab to see it).
 */
export const Default: Story = {
  render: () => html`
    <div>
      <p style="padding: 1rem; background: #fef3c7; border: 1px solid #fde68a; border-radius: 0.5rem; margin-bottom: 1rem;">
        <strong>⌨️ Press Tab</strong> to reveal the skip link at the top of the page.
      </p>
      
      <eva-skip-link target="#demo-main">
        Skip to main content
      </eva-skip-link>
      
      <nav style="padding: 1rem; background: #f9fafb; border: 1px solid #e5e7eb; border-radius: 0.5rem; margin-bottom: 1rem;">
        <h3 style="margin-top: 0;">Navigation</h3>
        <ul>
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#services">Services</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>
      
      <main id="demo-main" tabindex="-1" style="padding: 2rem; background: white; border: 1px solid #e5e7eb; border-radius: 0.5rem;">
        <h2>Main Content</h2>
        <p>This is the main content area. The skip link allows keyboard users to jump here directly, bypassing the navigation.</p>
      </main>
    </div>
  `,
};

/**
 * Government page with skip link.
 */
export const GovernmentPage: Story = {
  render: () => html`
    <div>
      <p style="padding: 1rem; background: #dbeafe; border: 1px solid #93c5fd; border-radius: 0.5rem; margin-bottom: 1rem;">
        <strong>Accessibility Feature:</strong> Press Tab to focus the skip link and bypass navigation.
      </p>
      
      <eva-skip-link target="#gov-main-content">
        Skip to main content
      </eva-skip-link>
      
      <header style="background: oklch(0.35 0.08 240); color: white; padding: 1rem 2rem; margin-bottom: 1rem;">
        <h1 style="margin: 0;">Government of Canada</h1>
      </header>
      
      <nav style="padding: 1rem 2rem; background: #f9fafb; border-bottom: 1px solid #e5e7eb; margin-bottom: 1rem;">
        <ul style="display: flex; gap: 2rem; list-style: none; padding: 0; margin: 0;">
          <li><a href="#services">Services</a></li>
          <li><a href="#benefits">Benefits</a></li>
          <li><a href="#immigration">Immigration</a></li>
          <li><a href="#taxes">Taxes</a></li>
          <li><a href="#health">Health</a></li>
        </ul>
      </nav>
      
      <main id="gov-main-content" tabindex="-1" style="padding: 2rem; max-width: 1200px; margin: 0 auto;">
        <h2>Employment Services</h2>
        <p style="line-height: 1.8;">
          Access employment insurance, job search tools, and training programs 
          through Employment and Social Development Canada (ESDC).
        </p>
        <div style="margin-top: 2rem; display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 1rem;">
          <div style="padding: 1.5rem; background: white; border: 1px solid #e5e7eb; border-radius: 0.5rem;">
            <h3>Job Bank</h3>
            <p style="color: #6b7280;">Search for jobs across Canada</p>
          </div>
          <div style="padding: 1.5rem; background: white; border: 1px solid #e5e7eb; border-radius: 0.5rem;">
            <h3>EI Benefits</h3>
            <p style="color: #6b7280;">Apply for employment insurance</p>
          </div>
          <div style="padding: 1.5rem; background: white; border: 1px solid #e5e7eb; border-radius: 0.5rem;">
            <h3>Training</h3>
            <p style="color: #6b7280;">Skills development programs</p>
          </div>
        </div>
      </main>
    </div>
  `,
};

/**
 * Multiple skip links for complex pages.
 */
export const MultipleSkipLinks: Story = {
  render: () => html`
    <div>
      <p style="padding: 1rem; background: #fef3c7; border: 1px solid #fde68a; border-radius: 0.5rem; margin-bottom: 1rem;">
        <strong>⌨️ Press Tab</strong> repeatedly to see multiple skip links appear.
      </p>
      
      <eva-skip-link target="#skip-main">
        Skip to main content
      </eva-skip-link>
      <eva-skip-link target="#skip-nav" style="top: 4rem;">
        Skip to navigation
      </eva-skip-link>
      <eva-skip-link target="#skip-footer" style="top: 7rem;">
        Skip to footer
      </eva-skip-link>
      
      <header style="padding: 1rem; background: #3b82f6; color: white; margin-bottom: 1rem;">
        <h1 style="margin: 0;">Website Header</h1>
      </header>
      
      <nav id="skip-nav" tabindex="-1" style="padding: 1rem; background: #f9fafb; border: 1px solid #e5e7eb; border-radius: 0.5rem; margin-bottom: 1rem;">
        <h3 style="margin-top: 0;">Navigation</h3>
        <ul style="display: flex; gap: 1.5rem; list-style: none; padding: 0;">
          <li><a href="#home">Home</a></li>
          <li><a href="#products">Products</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>
      
      <main id="skip-main" tabindex="-1" style="padding: 2rem; background: white; border: 1px solid #e5e7eb; border-radius: 0.5rem; margin-bottom: 1rem; min-height: 300px;">
        <h2>Main Content</h2>
        <p>This is the main content area with important information.</p>
      </main>
      
      <footer id="skip-footer" tabindex="-1" style="padding: 2rem; background: #1f2937; color: white; border-radius: 0.5rem;">
        <h3>Footer</h3>
        <p style="margin: 0;">© 2024 Your Company. All rights reserved.</p>
      </footer>
    </div>
  `,
};

/**
 * Skip link behavior demonstration.
 */
export const Behavior: Story = {
  render: () => html`
    <div>
      <div style="padding: 1.5rem; background: #f0f9ff; border: 1px solid #bfdbfe; border-radius: 0.5rem; margin-bottom: 2rem;">
        <h3 style="margin-top: 0;">How Skip Links Work</h3>
        <ol style="line-height: 1.8; margin: 0.5rem 0 0 1.5rem;">
          <li>Hidden by default (positioned off-screen)</li>
          <li>Appears when focused via keyboard (Tab key)</li>
          <li>Slides in smoothly from the left</li>
          <li>Clicking jumps to target element (e.g., main content)</li>
          <li>Focus moves to target, bypassing navigation</li>
        </ol>
      </div>
      
      <eva-skip-link target="#behavior-demo-main">
        Skip to main content
      </eva-skip-link>
      
      <div style="padding: 1rem; background: #f9fafb; border: 1px solid #e5e7eb; border-radius: 0.5rem; margin-bottom: 1rem;">
        <p style="margin: 0;"><a href="#link1">Link 1</a> • <a href="#link2">Link 2</a> • <a href="#link3">Link 3</a> • <a href="#link4">Link 4</a> • <a href="#link5">Link 5</a></p>
      </div>
      
      <main id="behavior-demo-main" tabindex="-1" style="padding: 2rem; background: white; border: 2px solid #3b82f6; border-radius: 0.5rem;">
        <h2>Main Content (Target)</h2>
        <p>When the skip link is activated, focus jumps directly here, bypassing all the links above.</p>
      </main>
      
      <div style="margin-top: 1.5rem; padding: 1rem; background: #fef3c7; border: 1px solid #fde68a; border-radius: 0.5rem;">
        <p style="margin: 0; font-size: 0.875rem;">
          <strong>💡 Try it:</strong> Press Tab to focus the skip link, then press Enter. 
          Notice how focus moves directly to the main content, skipping all navigation links.
        </p>
      </div>
    </div>
  `,
};

/**
 * Accessibility features and WCAG 2.2 AA compliance.
 * 
 * - **Keyboard Only**: Only visible when focused via keyboard (not mouse)
 * - **High Contrast**: Accent color background with accent foreground text
 * - **Position**: Fixed at top of viewport for immediate visibility
 * - **Animation**: Smooth slide-in from left when focused
 * - **Focus Target**: Moves focus to target element (main content)
 * - **WCAG Requirement**: Required for pages with navigation before main content
 */
export const AccessibilityNotes: Story = {
  render: () => html`
    <div style="padding: 1.5rem; background: #f9fafb; border-radius: 0.5rem;">
      <h3 style="margin-top: 0;">Skip Link Accessibility</h3>
      
      <div style="margin-bottom: 1.5rem;">
        <h4>Purpose</h4>
        <ul style="line-height: 1.8;">
          <li>Allows keyboard users to bypass repetitive navigation</li>
          <li>Required by WCAG 2.4.1 (Bypass Blocks) Level A</li>
          <li>Improves efficiency for screen reader users</li>
          <li>Essential for government and public sector websites</li>
        </ul>
      </div>

      <div style="margin-bottom: 1.5rem;">
        <h4>Implementation</h4>
        <ul style="line-height: 1.8;">
          <li>Hidden off-screen (left: -9999px) by default</li>
          <li>Visible on keyboard focus (left: 1rem)</li>
          <li>Fixed position ensures it's always visible when focused</li>
          <li>High z-index (9999) prevents overlap issues</li>
          <li>Smooth transition animation on focus</li>
        </ul>
      </div>

      <div style="margin-bottom: 1.5rem;">
        <h4>Best Practices</h4>
        <ul style="line-height: 1.8;">
          <li>Place skip link as first focusable element</li>
          <li>Target should have tabindex="-1" to receive focus</li>
          <li>Use descriptive text (e.g., "Skip to main content")</li>
          <li>Test with keyboard-only navigation</li>
        </ul>
      </div>

      <eva-skip-link target="#a11y-demo-main">
        Skip to main content
      </eva-skip-link>
      
      <nav style="padding: 1rem; background: white; border: 1px solid #e5e7eb; border-radius: 0.5rem; margin: 1rem 0;">
        <a href="#nav1">Nav 1</a> • <a href="#nav2">Nav 2</a> • <a href="#nav3">Nav 3</a>
      </nav>
      
      <main id="a11y-demo-main" tabindex="-1" style="padding: 1.5rem; background: white; border: 1px solid #e5e7eb; border-radius: 0.5rem; margin-bottom: 1.5rem;">
        <h4 style="margin-top: 0;">Main Content</h4>
        <p style="margin: 0;">Skip link target</p>
      </main>

      <div style="padding: 1rem; background: white; border-radius: 0.375rem;">
        <p style="margin: 0; font-size: 0.875rem; color: #6b7280;">
          ✓ WCAG 2.2 Level A Required<br>
          ✓ Keyboard-only visible<br>
          ✓ High contrast styling<br>
          ✓ Smooth animations
        </p>
      </div>
    </div>
  `,
};
