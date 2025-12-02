import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';
import './eva-accordion';

const meta: Meta = {
  title: 'UI/Accordion',
  component: 'eva-accordion',
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: 'Collapsible sections for organizing content with keyboard navigation and WCAG 2.2 AA compliance.',
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

export const Default: Story = {
  render: () => html`
    <eva-accordion>
      <eva-accordion-item>
        <eva-accordion-trigger slot="trigger">Section 1</eva-accordion-trigger>
        <eva-accordion-content slot="content">
          <p>Content for section 1. This is where your detailed information goes.</p>
        </eva-accordion-content>
      </eva-accordion-item>
      
      <eva-accordion-item>
        <eva-accordion-trigger slot="trigger">Section 2</eva-accordion-trigger>
        <eva-accordion-content slot="content">
          <p>Content for section 2 with more details and information.</p>
        </eva-accordion-content>
      </eva-accordion-item>
      
      <eva-accordion-item>
        <eva-accordion-trigger slot="trigger">Section 3</eva-accordion-trigger>
        <eva-accordion-content slot="content">
          <p>Content for section 3. You can put any HTML content here.</p>
        </eva-accordion-content>
      </eva-accordion-item>
    </eva-accordion>
  `,
};

export const PreExpanded: Story = {
  render: () => html`
    <eva-accordion>
      <eva-accordion-item expanded>
        <eva-accordion-trigger slot="trigger">Expanded by Default</eva-accordion-trigger>
        <eva-accordion-content slot="content">
          <p>This section is expanded by default.</p>
        </eva-accordion-content>
      </eva-accordion-item>
      
      <eva-accordion-item>
        <eva-accordion-trigger slot="trigger">Collapsed Section</eva-accordion-trigger>
        <eva-accordion-content slot="content">
          <p>This section starts collapsed.</p>
        </eva-accordion-content>
      </eva-accordion-item>
    </eva-accordion>
  `,
};

export const FAQExample: Story = {
  render: () => html`
    <div style="max-width: 800px;">
      <h2 style="margin-bottom: 1.5rem;">Frequently Asked Questions</h2>
      
      <eva-accordion>
        <eva-accordion-item>
          <eva-accordion-trigger slot="trigger">
            How do I apply for Employment Insurance?
          </eva-accordion-trigger>
          <eva-accordion-content slot="content">
            <p>You can apply for Employment Insurance (EI) online through your My Service Canada Account. You'll need:</p>
            <ul>
              <li>Your Social Insurance Number (SIN)</li>
              <li>Your banking information for direct deposit</li>
              <li>Names and addresses of all employers in the last 52 weeks</li>
              <li>Record of Employment (ROE) details</li>
            </ul>
            <p>The application typically takes 10-15 minutes to complete.</p>
          </eva-accordion-content>
        </eva-accordion-item>
        
        <eva-accordion-item>
          <eva-accordion-trigger slot="trigger">
            What documents do I need for a passport application?
          </eva-accordion-trigger>
          <eva-accordion-content slot="content">
            <p>For a Canadian passport application, you need:</p>
            <ul>
              <li>Proof of Canadian citizenship (birth certificate, citizenship certificate)</li>
              <li>Two identical passport photos</li>
              <li>Valid government-issued photo identification</li>
              <li>Completed application form</li>
              <li>Payment (fees vary by processing time)</li>
            </ul>
            <p>Processing times vary from 20 days (regular) to 2-9 business days (express/urgent).</p>
          </eva-accordion-content>
        </eva-accordion-item>
        
        <eva-accordion-item>
          <eva-accordion-trigger slot="trigger">
            How can I get my tax documents?
          </eva-accordion-trigger>
          <eva-accordion-content slot="content">
            <p>You can access your tax documents through:</p>
            <ul>
              <li><strong>My Account:</strong> Sign in to access T4s, T5s, and other tax slips</li>
              <li><strong>By Mail:</strong> Documents are mailed automatically by employers and institutions</li>
              <li><strong>CRA Website:</strong> Download forms and publications</li>
            </ul>
            <p>Most tax slips are available by end of February each year.</p>
          </eva-accordion-content>
        </eva-accordion-item>
        
        <eva-accordion-item>
          <eva-accordion-trigger slot="trigger">
            Where can I find information about immigration services?
          </eva-accordion-trigger>
          <eva-accordion-content slot="content">
            <p>Immigration services information is available through:</p>
            <ul>
              <li><strong>IRCC Website:</strong> Canada.ca/immigration</li>
              <li><strong>Online Portal:</strong> Apply and track applications online</li>
              <li><strong>Phone:</strong> Call the IRCC Contact Centre</li>
              <li><strong>In Person:</strong> Visit a Service Canada office</li>
            </ul>
            <p>Processing times vary by application type and country of residence.</p>
          </eva-accordion-content>
        </eva-accordion-item>
      </eva-accordion>
    </div>
  `,
  parameters: {
    docs: {
      description: {
        story: 'FAQ section using accordion for government services.',
      },
    },
  },
};

export const RichContent: Story = {
  render: () => html`
    <eva-accordion style="max-width: 700px;">
      <eva-accordion-item>
        <eva-accordion-trigger slot="trigger">
          Benefits and Programs
        </eva-accordion-trigger>
        <eva-accordion-content slot="content">
          <eva-card>
            <eva-card-header>
              <eva-card-title>Available Programs</eva-card-title>
            </eva-card-header>
            <eva-card-content>
              <p>Explore benefits you may be eligible for:</p>
              <div style="margin-top: 1rem;">
                <eva-gc-button size="sm">Employment Insurance</eva-gc-button>
                <eva-gc-button size="sm" variant="secondary" style="margin-left: 0.5rem;">
                  Canada Child Benefit
                </eva-gc-button>
              </div>
            </eva-card-content>
          </eva-card>
        </eva-accordion-content>
      </eva-accordion-item>
      
      <eva-accordion-item>
        <eva-accordion-trigger slot="trigger">
          Contact Information
        </eva-accordion-trigger>
        <eva-accordion-content slot="content">
          <div style="padding: 1rem; background: #f5f5f5; border-radius: 4px;">
            <p><strong>Phone:</strong> 1-800-O-CANADA (1-800-622-6232)</p>
            <p><strong>TTY:</strong> 1-800-926-9105</p>
            <p><strong>Hours:</strong> Monday to Friday, 8am - 8pm ET</p>
          </div>
        </eva-accordion-content>
      </eva-accordion-item>
    </eva-accordion>
  `,
  parameters: {
    docs: {
      description: {
        story: 'Accordion with rich content including cards and buttons.',
      },
    },
  },
};
