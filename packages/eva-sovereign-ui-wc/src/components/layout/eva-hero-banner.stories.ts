import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';
import './eva-hero-banner';

/**
 * ## EVA Hero Banner
 * 
 * Hero section with gradient backgrounds and prominent call-to-action.
 * 
 * ### Features:
 * - Gradient backgrounds with modern colors
 * - Internationalized title and description
 * - Slot for custom action buttons
 * - Responsive padding and typography
 * - Radial gradient overlay effect
 * 
 * ### Usage:
 * ```html
 * <eva-hero-banner 
 *   title-key="hero.title" 
 *   description-key="hero.description">
 *   <button slot="actions">Get Started</button>
 * </eva-hero-banner>
 * ```
 */
const meta: Meta = {
  title: 'Layout/Hero Banner',
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: 'Hero section component with gradient backgrounds and CTA buttons.',
      },
    },
    a11y: {
      config: {
        rules: [
          { id: 'color-contrast', enabled: true },
          { id: 'heading-order', enabled: true },
        ],
      },
    },
  },
};

export default meta;
type Story = StoryObj;

/**
 * Default hero banner with gradient background.
 */
export const Default: Story = {
  render: () => html`
    <eva-hero-banner></eva-hero-banner>
  `,
};

/**
 * Hero banner with custom action buttons.
 */
export const WithActions: Story = {
  render: () => html`
    <eva-hero-banner>
      <div slot="actions" style="display: flex; gap: 1rem; flex-wrap: wrap; justify-content: center;">
        <button style="padding: 0.75rem 2rem; background: white; color: #3b82f6; border: none; border-radius: 0.5rem; font-weight: 600; font-size: 1rem; cursor: pointer; box-shadow: 0 4px 6px rgba(0,0,0,0.1);">
          Get Started
        </button>
        <button style="padding: 0.75rem 2rem; background: transparent; color: white; border: 2px solid white; border-radius: 0.5rem; font-weight: 600; font-size: 1rem; cursor: pointer;">
          Learn More
        </button>
      </div>
    </eva-hero-banner>
  `,
};

/**
 * Landing page hero with features.
 */
export const LandingPage: Story = {
  render: () => html`
    <eva-hero-banner 
      title-key="hero.landing.title" 
      description-key="hero.landing.description">
      <div slot="actions" style="display: flex; gap: 1rem; flex-wrap: wrap; justify-content: center; margin-bottom: 2rem;">
        <button style="padding: 1rem 2.5rem; background: white; color: #3b82f6; border: none; border-radius: 0.5rem; font-weight: 600; font-size: 1.125rem; cursor: pointer; box-shadow: 0 4px 6px rgba(0,0,0,0.1); transition: transform 0.2s;">
          Start Free Trial
        </button>
        <button style="padding: 1rem 2.5rem; background: rgba(255,255,255,0.1); color: white; border: 2px solid white; border-radius: 0.5rem; font-weight: 600; font-size: 1.125rem; cursor: pointer; backdrop-filter: blur(8px);">
          Watch Demo
        </button>
      </div>
      
      <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 2rem; max-width: 800px; margin: 0 auto; color: white;">
        <div style="text-align: center;">
          <div style="font-size: 3rem; margin-bottom: 0.5rem;">⚡</div>
          <p style="margin: 0; font-weight: 500;">Lightning Fast</p>
        </div>
        <div style="text-align: center;">
          <div style="font-size: 3rem; margin-bottom: 0.5rem;">🔒</div>
          <p style="margin: 0; font-weight: 500;">Secure by Default</p>
        </div>
        <div style="text-align: center;">
          <div style="font-size: 3rem; margin-bottom: 0.5rem;">🌍</div>
          <p style="margin: 0; font-weight: 500;">Global Support</p>
        </div>
      </div>
    </eva-hero-banner>
  `,
};

/**
 * Product showcase hero.
 */
export const ProductShowcase: Story = {
  render: () => html`
    <eva-hero-banner background="oklch(0.45 0.15 260)">
      <div slot="actions" style="text-align: center;">
        <h1 style="margin: 0 0 1rem 0; font-size: 3rem; font-weight: 800; color: white;">
          Build Better Applications
        </h1>
        <p style="margin: 0 0 2rem 0; font-size: 1.25rem; color: rgba(255,255,255,0.9); max-width: 600px; margin-left: auto; margin-right: auto;">
          EVA Sovereign UI provides accessible, government-ready components with modern design and internationalization built-in.
        </p>
        <div style="display: flex; gap: 1rem; justify-content: center; flex-wrap: wrap;">
          <button style="padding: 1rem 2rem; background: white; color: #5b21b6; border: none; border-radius: 0.5rem; font-weight: 600; font-size: 1rem; cursor: pointer; box-shadow: 0 4px 6px rgba(0,0,0,0.2);">
            View Components
          </button>
          <button style="padding: 1rem 2rem; background: transparent; color: white; border: 2px solid white; border-radius: 0.5rem; font-weight: 600; font-size: 1rem; cursor: pointer;">
            Read Documentation
          </button>
        </div>
        
        <div style="margin-top: 3rem; display: flex; gap: 3rem; justify-content: center; flex-wrap: wrap; color: white; font-size: 0.875rem;">
          <div>
            <span style="display: block; font-size: 2rem; font-weight: bold;">47+</span>
            Components
          </div>
          <div>
            <span style="display: block; font-size: 2rem; font-weight: bold;">9</span>
            Languages
          </div>
          <div>
            <span style="display: block; font-size: 2rem; font-weight: bold;">WCAG AA</span>
            Accessible
          </div>
        </div>
      </div>
    </eva-hero-banner>
  `,
};

/**
 * Government service hero.
 */
export const GovernmentService: Story = {
  render: () => html`
    <eva-hero-banner background="oklch(0.35 0.08 240)">
      <div slot="actions" style="text-align: center;">
        <h1 style="margin: 0 0 1rem 0; font-size: 2.5rem; font-weight: 700; color: white;">
          Employment and Social Development Canada
        </h1>
        <p style="margin: 0 0 2rem 0; font-size: 1.125rem; color: rgba(255,255,255,0.95); max-width: 700px; margin-left: auto; margin-right: auto; line-height: 1.8;">
          Access employment services, benefits, training programs, and support for Canadians across the country.
        </p>
        <div style="display: flex; gap: 1rem; justify-content: center; flex-wrap: wrap;">
          <button style="padding: 0.875rem 2rem; background: white; color: #1e40af; border: none; border-radius: 0.375rem; font-weight: 600; cursor: pointer;">
            Find Jobs
          </button>
          <button style="padding: 0.875rem 2rem; background: white; color: #1e40af; border: none; border-radius: 0.375rem; font-weight: 600; cursor: pointer;">
            Apply for Benefits
          </button>
          <button style="padding: 0.875rem 2rem; background: transparent; color: white; border: 2px solid white; border-radius: 0.375rem; font-weight: 600; cursor: pointer;">
            Explore Services
          </button>
        </div>
      </div>
    </eva-hero-banner>
  `,
};

/**
 * Accessibility features and WCAG 2.2 AA compliance.
 * 
 * - **Color Contrast**: Gradient backgrounds ensure WCAG AA compliant text contrast
 * - **Heading Structure**: Proper heading hierarchy with h1 for main title
 * - **Semantic HTML**: Uses section element with descriptive content
 * - **Responsive Design**: Adapts to different viewport sizes
 * - **Focus Management**: Action buttons have visible focus indicators
 * - **Internationalization**: Title and description support i18n keys
 */
export const AccessibilityNotes: Story = {
  render: () => html`
    <div style="padding: 1.5rem; background: #f9fafb; border-radius: 0.5rem;">
      <h3 style="margin-top: 0;">Hero Banner Accessibility</h3>
      
      <div style="margin-bottom: 1.5rem;">
        <h4>Design Features</h4>
        <ul style="line-height: 1.8;">
          <li>Gradient backgrounds with high contrast text</li>
          <li>White text on dark gradients meets WCAG AA (7:1+ ratio)</li>
          <li>Radial gradient overlay adds depth without reducing contrast</li>
          <li>Responsive padding adapts to viewport size</li>
        </ul>
      </div>

      <div style="margin-bottom: 1.5rem;">
        <h4>Content Structure</h4>
        <ul style="line-height: 1.8;">
          <li>Title uses h1 for proper heading hierarchy</li>
          <li>Description provides context for main action</li>
          <li>Action buttons slotted for flexible CTAs</li>
          <li>Supports i18n with title-key and description-key</li>
        </ul>
      </div>

      <eva-hero-banner>
        <div slot="actions" style="display: flex; gap: 1rem; justify-content: center;">
          <button style="padding: 0.75rem 1.5rem; background: white; color: #3b82f6; border: none; border-radius: 0.5rem; font-weight: 600; cursor: pointer;">
            Primary Action
          </button>
          <button style="padding: 0.75rem 1.5rem; background: transparent; color: white; border: 2px solid white; border-radius: 0.5rem; font-weight: 600; cursor: pointer;">
            Secondary Action
          </button>
        </div>
      </eva-hero-banner>

      <div style="margin-top: 1.5rem; padding: 1rem; background: white; border-radius: 0.375rem;">
        <p style="margin: 0; font-size: 0.875rem; color: #6b7280;">
          ✓ WCAG 2.2 Level AA Compliant<br>
          ✓ High contrast text<br>
          ✓ Semantic structure<br>
          ✓ Responsive design
        </p>
      </div>
    </div>
  `,
};
