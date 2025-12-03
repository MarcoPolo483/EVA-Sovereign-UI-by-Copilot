import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';
import './eva-program-card';

/**
 * ## EVA Program Card
 * 
 * Card component for displaying ESDC programs and services.
 * 
 * ### Features:
 * - Icon, title, and description display
 * - Internationalization support (i18n keys)
 * - Hover effects with shadow and transform
 * - Link support for navigation
 * - Responsive design
 * - Modern card styling
 * 
 * ### Usage:
 * ```html
 * <eva-program-card 
 *   title-key="program.jobbank.title"
 *   description-key="program.jobbank.description"
 *   icon="💼"
 *   link="/job-bank">
 * </eva-program-card>
 * ```
 */
const meta: Meta = {
  title: 'ESDC/Program Card',
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: 'Program card for ESDC services with icon, title, description, and link.',
      },
    },
    a11y: {
      config: {
        rules: [
          { id: 'color-contrast', enabled: true },
          { id: 'link-name', enabled: true },
        ],
      },
    },
  },
};

export default meta;
type Story = StoryObj;

/**
 * Default program card with job bank example.
 */
export const Default: Story = {
  render: () => html`
    <div style="max-width: 350px;">
      <eva-program-card 
        title-key="program.jobbank.title"
        description-key="program.jobbank.description"
        icon="💼"
        link="/job-bank">
      </eva-program-card>
    </div>
  `,
};

/**
 * Grid of program cards for ESDC services.
 */
export const ProgramGrid: Story = {
  render: () => html`
    <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 1.5rem; max-width: 1200px;">
      <eva-program-card 
        title-key="program.jobbank.title"
        description-key="program.jobbank.description"
        icon="💼"
        link="/job-bank">
      </eva-program-card>
      
      <eva-program-card 
        title-key="program.ei.title"
        description-key="program.ei.description"
        icon="💰"
        link="/employment-insurance">
      </eva-program-card>
      
      <eva-program-card 
        title-key="program.training.title"
        description-key="program.training.description"
        icon="🎓"
        link="/training">
      </eva-program-card>
      
      <eva-program-card 
        title-key="program.cpp.title"
        description-key="program.cpp.description"
        icon="🏦"
        link="/canada-pension-plan">
      </eva-program-card>
      
      <eva-program-card 
        title-key="program.oas.title"
        description-key="program.oas.description"
        icon="👵"
        link="/old-age-security">
      </eva-program-card>
      
      <eva-program-card 
        title-key="program.gis.title"
        description-key="program.gis.description"
        icon="💵"
        link="/guaranteed-income-supplement">
      </eva-program-card>
    </div>
  `,
};

/**
 * Program cards with custom icons.
 */
export const CustomIcons: Story = {
  render: () => html`
    <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 1.5rem;">
      <eva-program-card 
        title-key="program.childcare.title"
        description-key="program.childcare.description"
        icon="👶"
        link="/childcare">
      </eva-program-card>
      
      <eva-program-card 
        title-key="program.disability.title"
        description-key="program.disability.description"
        icon="♿"
        link="/disability-benefits">
      </eva-program-card>
      
      <eva-program-card 
        title-key="program.apprentice.title"
        description-key="program.apprentice.description"
        icon="🔧"
        link="/apprenticeship">
      </eva-program-card>
      
      <eva-program-card 
        title-key="program.student.title"
        description-key="program.student.description"
        icon="📚"
        link="/student-loans">
      </eva-program-card>
    </div>
  `,
};

/**
 * Landing page with program cards and header.
 */
export const LandingPage: Story = {
  render: () => html`
    <div style="max-width: 1200px; margin: 0 auto;">
      <div style="text-align: center; margin-bottom: 3rem;">
        <h1 style="margin-bottom: 1rem; font-size: 2.5rem;">ESDC Services and Programs</h1>
        <p style="font-size: 1.125rem; color: #6b7280; max-width: 700px; margin: 0 auto;">
          Employment and Social Development Canada offers a wide range of programs and services to support Canadians.
        </p>
      </div>
      
      <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 2rem;">
        <eva-program-card 
          title-key="program.jobbank.title"
          description-key="program.jobbank.description"
          icon="💼"
          link="/job-bank">
        </eva-program-card>
        
        <eva-program-card 
          title-key="program.ei.title"
          description-key="program.ei.description"
          icon="💰"
          link="/employment-insurance">
        </eva-program-card>
        
        <eva-program-card 
          title-key="program.training.title"
          description-key="program.training.description"
          icon="🎓"
          link="/training">
        </eva-program-card>
        
        <eva-program-card 
          title-key="program.cpp.title"
          description-key="program.cpp.description"
          icon="🏦"
          link="/canada-pension-plan">
        </eva-program-card>
        
        <eva-program-card 
          title-key="program.oas.title"
          description-key="program.oas.description"
          icon="👵"
          link="/old-age-security">
        </eva-program-card>
        
        <eva-program-card 
          title-key="program.childcare.title"
          description-key="program.childcare.description"
          icon="👶"
          link="/childcare">
        </eva-program-card>
      </div>
    </div>
  `,
};

/**
 * Program card hover states.
 */
export const HoverStates: Story = {
  render: () => html`
    <div style="display: flex; flex-direction: column; gap: 2rem;">
      <div style="padding: 1.5rem; background: #f0f9ff; border: 1px solid #bfdbfe; border-radius: 0.5rem;">
        <h4 style="margin-top: 0;">Hover Effects</h4>
        <ul style="margin: 0.5rem 0; padding-left: 1.5rem; line-height: 1.8;">
          <li>Border color changes to primary blue</li>
          <li>Shadow increases (sm → lg)</li>
          <li>Card lifts up with translateY(-4px)</li>
          <li>Smooth transition (200ms)</li>
        </ul>
      </div>
      
      <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 1.5rem;">
        <eva-program-card 
          title-key="program.jobbank.title"
          description-key="program.jobbank.description"
          icon="💼"
          link="/job-bank">
        </eva-program-card>
        
        <eva-program-card 
          title-key="program.ei.title"
          description-key="program.ei.description"
          icon="💰"
          link="/employment-insurance">
        </eva-program-card>
        
        <eva-program-card 
          title-key="program.training.title"
          description-key="program.training.description"
          icon="🎓"
          link="/training">
        </eva-program-card>
      </div>
    </div>
  `,
};

/**
 * Accessibility features and WCAG 2.2 AA compliance.
 * 
 * - **Semantic Links**: Each card is a semantic link (a element)
 * - **Keyboard Navigation**: Tab to focus, Enter to activate
 * - **Focus Indicators**: Visible focus ring on keyboard focus
 * - **Color Contrast**: Text meets WCAG AA (4.5:1+)
 * - **Screen Readers**: Icon, title, and description all announced
 * - **Hover Effects**: Not required for interaction (keyboard works without hover)
 */
export const AccessibilityNotes: Story = {
  render: () => html`
    <div style="padding: 1.5rem; background: #f9fafb; border-radius: 0.5rem;">
      <h3 style="margin-top: 0;">Program Card Accessibility</h3>
      
      <div style="margin-bottom: 1.5rem;">
        <h4>Semantic Structure</h4>
        <ul style="line-height: 1.8;">
          <li>Card wrapper is a semantic link (a element)</li>
          <li>Icon provides visual context (not critical for understanding)</li>
          <li>Title uses heading for proper hierarchy</li>
          <li>Description provides additional context</li>
        </ul>
      </div>

      <div style="margin-bottom: 1.5rem;">
        <h4>Keyboard Support</h4>
        <ul style="line-height: 1.8;">
          <li>Tab navigates between cards</li>
          <li>Enter activates focused card link</li>
          <li>Focus indicator clearly visible</li>
          <li>Hover effects also apply on keyboard focus</li>
        </ul>
      </div>

      <div style="margin-bottom: 1.5rem;">
        <h4>Screen Reader Support</h4>
        <ul style="line-height: 1.8;">
          <li>Link announces as clickable</li>
          <li>Title read as heading</li>
          <li>Description provides context</li>
          <li>Icon adds visual interest but not essential</li>
        </ul>
      </div>

      <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 1.5rem; margin-bottom: 1.5rem;">
        <eva-program-card 
          title-key="program.jobbank.title"
          description-key="program.jobbank.description"
          icon="💼"
          link="/job-bank">
        </eva-program-card>
        
        <eva-program-card 
          title-key="program.ei.title"
          description-key="program.ei.description"
          icon="💰"
          link="/employment-insurance">
        </eva-program-card>
      </div>

      <div style="padding: 1rem; background: white; border-radius: 0.375rem;">
        <p style="margin: 0; font-size: 0.875rem; color: #6b7280;">
          ✓ WCAG 2.2 Level AA Compliant<br>
          ✓ Keyboard navigable<br>
          ✓ Screen reader friendly<br>
          ✓ Semantic HTML
        </p>
      </div>
    </div>
  `,
};
