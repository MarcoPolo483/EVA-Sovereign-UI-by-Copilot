import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';
import './eva-breadcrumb';

const meta: Meta = {
  title: 'UI/Breadcrumb',
  component: 'eva-breadcrumb',
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: 'Navigation breadcrumb trail showing page hierarchy with WCAG 2.2 AA compliance.',
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

export const Default: Story = {
  render: () => html`
    <eva-breadcrumb>
      <eva-breadcrumb-item href="/">Home</eva-breadcrumb-item>
      <eva-breadcrumb-item href="/services">Services</eva-breadcrumb-item>
      <eva-breadcrumb-item>Current Page</eva-breadcrumb-item>
    </eva-breadcrumb>
  `,
};

export const Simple: Story = {
  render: () => html`
    <eva-breadcrumb>
      <eva-breadcrumb-item href="/">Home</eva-breadcrumb-item>
      <eva-breadcrumb-item>About</eva-breadcrumb-item>
    </eva-breadcrumb>
  `,
};

export const DeepHierarchy: Story = {
  render: () => html`
    <eva-breadcrumb>
      <eva-breadcrumb-item href="/">Canada.ca</eva-breadcrumb-item>
      <eva-breadcrumb-item href="/services">Services</eva-breadcrumb-item>
      <eva-breadcrumb-item href="/services/employment">Employment</eva-breadcrumb-item>
      <eva-breadcrumb-item href="/services/employment/insurance">Employment Insurance</eva-breadcrumb-item>
      <eva-breadcrumb-item>Apply for EI</eva-breadcrumb-item>
    </eva-breadcrumb>
  `,
};

export const WithIcons: Story = {
  render: () => html`
    <eva-breadcrumb>
      <eva-breadcrumb-item href="/">🏠 Home</eva-breadcrumb-item>
      <eva-breadcrumb-item href="/departments">🏛️ Departments</eva-breadcrumb-item>
      <eva-breadcrumb-item href="/departments/esdc">Employment and Social Development</eva-breadcrumb-item>
      <eva-breadcrumb-item>Programs</eva-breadcrumb-item>
    </eva-breadcrumb>
  `,
};

export const InPageLayout: Story = {
  render: () => html`
    <div style="display: flex; flex-direction: column; min-height: 100vh;">
      <eva-gc-header>
        <span slot="title">Government of Canada</span>
      </eva-gc-header>

      <div style="background: #f5f5f5; padding: 0.75rem 2rem; border-bottom: 1px solid #e0e0e0;">
        <div style="max-width: 1200px; margin: 0 auto;">
          <eva-breadcrumb>
            <eva-breadcrumb-item href="/">Home</eva-breadcrumb-item>
            <eva-breadcrumb-item href="/services">Services</eva-breadcrumb-item>
            <eva-breadcrumb-item href="/services/tax">Taxes</eva-breadcrumb-item>
            <eva-breadcrumb-item>File your taxes</eva-breadcrumb-item>
          </eva-breadcrumb>
        </div>
      </div>

      <main style="flex: 1; padding: 2rem; max-width: 1200px; margin: 0 auto; width: 100%;">
        <h1>File your taxes</h1>
        <p>Information about filing your tax return...</p>
      </main>
    </div>
  `,
  parameters: {
    docs: {
      description: {
        story: 'Breadcrumb integrated into full page layout.',
      },
    },
    layout: 'fullscreen',
  },
};

export const Bilingual: Story = {
  render: () => html`
    <div style="display: flex; flex-direction: column; gap: 2rem;">
      <div>
        <h4>English</h4>
        <eva-breadcrumb>
          <eva-breadcrumb-item href="/">Home</eva-breadcrumb-item>
          <eva-breadcrumb-item href="/services">Services and information</eva-breadcrumb-item>
          <eva-breadcrumb-item href="/services/benefits">Benefits</eva-breadcrumb-item>
          <eva-breadcrumb-item>Employment Insurance</eva-breadcrumb-item>
        </eva-breadcrumb>
      </div>

      <div>
        <h4>Français</h4>
        <eva-breadcrumb>
          <eva-breadcrumb-item href="/">Accueil</eva-breadcrumb-item>
          <eva-breadcrumb-item href="/services">Services et renseignements</eva-breadcrumb-item>
          <eva-breadcrumb-item href="/services/prestations">Prestations</eva-breadcrumb-item>
          <eva-breadcrumb-item>Assurance-emploi</eva-breadcrumb-item>
        </eva-breadcrumb>
      </div>
    </div>
  `,
  parameters: {
    docs: {
      description: {
        story: 'Breadcrumb examples in English and French.',
      },
    },
  },
};
