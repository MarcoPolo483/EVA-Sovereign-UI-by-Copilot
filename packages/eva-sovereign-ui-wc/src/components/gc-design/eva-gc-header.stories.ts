import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';
import '../gc-design/eva-gc-header';

const meta: Meta = {
  title: 'GC Design/Header',
  component: 'eva-gc-header',
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: 'Government of Canada header component with bilingual support, skip links, and WCAG 2.2 AA compliance.',
      },
    },
    a11y: {
      config: {
        rules: [
          { id: 'color-contrast', enabled: true },
          { id: 'landmark-one-main', enabled: true },
        ],
      },
    },
    layout: 'fullscreen',
  },
};

export default meta;
type Story = StoryObj;

export const Default: Story = {
  render: () => html`
    <eva-gc-header>
      <span slot="title">Government of Canada</span>
    </eva-gc-header>
  `,
};

export const Bilingual: Story = {
  render: () => html`
    <eva-gc-header>
      <span slot="title">Government of Canada / Gouvernement du Canada</span>
      <eva-language-switcher 
        slot="language-toggle"
        current-locale="en-CA"
        available-locales='["en-CA", "fr-CA"]'
      ></eva-language-switcher>
    </eva-gc-header>
  `,
};

export const WithNavigation: Story = {
  render: () => html`
    <eva-gc-header>
      <span slot="title">Government of Canada</span>
      <nav slot="nav" style="display: flex; gap: 1.5rem;">
        <a href="#services">Services</a>
        <a href="#departments">Departments</a>
        <a href="#about">About</a>
        <a href="#contact">Contact</a>
      </nav>
      <eva-language-switcher 
        slot="language-toggle"
        current-locale="en-CA"
        available-locales='["en-CA", "fr-CA"]'
      ></eva-language-switcher>
    </eva-gc-header>
  `,
};

export const WithSearch: Story = {
  render: () => html`
    <eva-gc-header>
      <span slot="title">Government of Canada</span>
      <div slot="search" style="display: flex; gap: 0.5rem;">
        <eva-input type="search" placeholder="Search Canada.ca"></eva-input>
        <eva-gc-button size="sm">Search</eva-gc-button>
      </div>
      <eva-language-switcher 
        slot="language-toggle"
        current-locale="en-CA"
        available-locales='["en-CA", "fr-CA"]'
      ></eva-language-switcher>
    </eva-gc-header>
  `,
};

export const CompleteExample: Story = {
  render: () => html`
    <eva-gc-header>
      <span slot="title">
        <div style="display: flex; align-items: center; gap: 0.75rem;">
          <img src="https://canada.ca/etc/designs/canada/wet-boew/assets/sig-blk-en.svg" alt="Government of Canada" style="height: 30px;">
          <span>Canada.ca</span>
        </div>
      </span>
      
      <nav slot="nav" style="display: flex; gap: 1.5rem; align-items: center;">
        <a href="#services" style="text-decoration: none; color: inherit;">Services and information</a>
        <a href="#departments" style="text-decoration: none; color: inherit;">Departments and agencies</a>
        <a href="#about" style="text-decoration: none; color: inherit;">About government</a>
      </nav>
      
      <div slot="search" style="display: flex; gap: 0.5rem; align-items: center;">
        <eva-input 
          type="search" 
          placeholder="Search Canada.ca"
          style="min-width: 200px;"
        ></eva-input>
        <eva-gc-button size="sm">
          <span>🔍 Search</span>
        </eva-gc-button>
      </div>
      
      <eva-language-switcher 
        slot="language-toggle"
        current-locale="en-CA"
        available-locales='["en-CA", "fr-CA"]'
      ></eva-language-switcher>
    </eva-gc-header>

    <main style="padding: 2rem; max-width: 1200px; margin: 0 auto;">
      <h1>Welcome to Canada.ca</h1>
      <p>Find the information and services you need.</p>
    </main>
  `,
  parameters: {
    docs: {
      description: {
        story: 'Complete Canada.ca header with logo, navigation, search, and language switcher.',
      },
    },
  },
};

export const WithBreadcrumbs: Story = {
  render: () => html`
    <div>
      <eva-gc-header>
        <span slot="title">Government of Canada</span>
        <eva-language-switcher 
          slot="language-toggle"
          current-locale="en-CA"
          available-locales='["en-CA", "fr-CA"]'
        ></eva-language-switcher>
      </eva-gc-header>

      <div style="background: #f5f5f5; padding: 0.75rem 2rem;">
        <eva-breadcrumb>
          <eva-breadcrumb-item href="/">Home</eva-breadcrumb-item>
          <eva-breadcrumb-item href="/services">Services</eva-breadcrumb-item>
          <eva-breadcrumb-item>Current Page</eva-breadcrumb-item>
        </eva-breadcrumb>
      </div>

      <main style="padding: 2rem;">
        <h1>Page Title</h1>
        <p>Page content goes here.</p>
      </main>
    </div>
  `,
  parameters: {
    docs: {
      description: {
        story: 'Header with breadcrumb navigation below.',
      },
    },
  },
};
