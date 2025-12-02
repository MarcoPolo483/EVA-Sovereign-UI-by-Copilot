import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';
import '../i18n/eva-language-switcher';

const meta: Meta = {
  title: 'I18n/Language Switcher',
  component: 'eva-language-switcher',
  tags: ['autodocs'],
  argTypes: {
    currentLocale: {
      control: 'select',
      options: ['en-CA', 'fr-CA', 'en-US', 'en-GB', 'en-AU', 'en-NZ'],
      description: 'Current active locale',
      defaultValue: 'en-CA',
    },
  },
  parameters: {
    docs: {
      description: {
        component: 'Language switcher for bilingual and multilingual government applications with WCAG 2.2 AA compliance.',
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

export const EnglishFrench: Story = {
  render: () => html`
    <eva-language-switcher 
      current-locale="en-CA"
      available-locales='["en-CA", "fr-CA"]'
    ></eva-language-switcher>
  `,
};

export const FrenchActive: Story = {
  render: () => html`
    <eva-language-switcher 
      current-locale="fr-CA"
      available-locales='["en-CA", "fr-CA"]'
    ></eva-language-switcher>
  `,
};

export const FiveEyesLocales: Story = {
  render: () => html`
    <eva-language-switcher 
      current-locale="en-CA"
      available-locales='["en-CA", "fr-CA", "en-US", "en-GB", "en-AU", "en-NZ"]'
    ></eva-language-switcher>
  `,
  parameters: {
    docs: {
      description: {
        story: 'Language switcher with Five Eyes locales (Canada, USA, UK, Australia, New Zealand).',
      },
    },
  },
};

export const InHeader: Story = {
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
  parameters: {
    docs: {
      description: {
        story: 'Language switcher integrated into GC header.',
      },
    },
    layout: 'fullscreen',
  },
};

export const WithEventHandling: Story = {
  render: () => html`
    <div style="display: flex; flex-direction: column; gap: 1rem; max-width: 500px;">
      <eva-language-switcher 
        id="lang-switcher"
        current-locale="en-CA"
        available-locales='["en-CA", "fr-CA"]'
      ></eva-language-switcher>
      
      <div style="padding: 1rem; border: 1px solid #e0e0e0; border-radius: 4px;">
        <p><strong>Current Language:</strong> <span id="current-lang">English (Canada)</span></p>
        <p><strong>Locale Code:</strong> <span id="locale-code">en-CA</span></p>
      </div>
      
      <eva-alert>
        <strong>Try it:</strong> Click the language switcher to see the event in action.
      </eva-alert>
    </div>
    
    <script>
      const switcher = document.getElementById('lang-switcher');
      const langDisplay = document.getElementById('current-lang');
      const localeDisplay = document.getElementById('locale-code');
      
      const langMap = {
        'en-CA': 'English (Canada)',
        'fr-CA': 'Français (Canada)'
      };
      
      switcher.addEventListener('locale-change', (e) => {
        const locale = e.detail.locale;
        langDisplay.textContent = langMap[locale] || locale;
        localeDisplay.textContent = locale;
        document.documentElement.lang = locale;
      });
    </script>
  `,
  parameters: {
    docs: {
      description: {
        story: 'Interactive example with event handling to demonstrate locale-change events.',
      },
    },
  },
};

export const CompleteApplication: Story = {
  render: () => html`
    <div style="min-height: 100vh; display: flex; flex-direction: column;">
      <eva-gc-header>
        <span slot="title">
          <span id="header-title">Government of Canada</span>
        </span>
        <eva-language-switcher 
          id="app-lang-switcher"
          slot="language-toggle"
          current-locale="en-CA"
          available-locales='["en-CA", "fr-CA"]'
        ></eva-language-switcher>
      </eva-gc-header>

      <main style="flex: 1; padding: 2rem; max-width: 1200px; margin: 0 auto; width: 100%;">
        <h1 id="page-title">Welcome / Bienvenue</h1>
        
        <eva-card style="margin-top: 2rem;">
          <eva-card-header>
            <eva-card-title id="card-title">Language Settings</eva-card-title>
          </eva-card-header>
          <eva-card-content>
            <p id="card-content">Select your preferred language for this application.</p>
            <p style="margin-top: 1rem;"><strong>Current:</strong> <span id="current-language">English (Canada)</span></p>
          </eva-card-content>
        </eva-card>
      </main>

      <eva-gc-footer>
        <p id="footer-text">&copy; 2025 Government of Canada</p>
      </eva-gc-footer>
    </div>
    
    <script>
      const switcher = document.getElementById('app-lang-switcher');
      const translations = {
        'en-CA': {
          headerTitle: 'Government of Canada',
          pageTitle: 'Welcome',
          cardTitle: 'Language Settings',
          cardContent: 'Select your preferred language for this application.',
          currentLabel: 'English (Canada)',
          footerText: '© 2025 Government of Canada'
        },
        'fr-CA': {
          headerTitle: 'Gouvernement du Canada',
          pageTitle: 'Bienvenue',
          cardTitle: 'Paramètres de langue',
          cardContent: 'Sélectionnez votre langue préférée pour cette application.',
          currentLabel: 'Français (Canada)',
          footerText: '© 2025 Gouvernement du Canada'
        }
      };
      
      switcher.addEventListener('locale-change', (e) => {
        const locale = e.detail.locale;
        const t = translations[locale];
        
        document.documentElement.lang = locale;
        document.getElementById('header-title').textContent = t.headerTitle;
        document.getElementById('page-title').textContent = t.pageTitle;
        document.getElementById('card-title').textContent = t.cardTitle;
        document.getElementById('card-content').textContent = t.cardContent;
        document.getElementById('current-language').textContent = t.currentLabel;
        document.getElementById('footer-text').textContent = t.footerText;
      });
    </script>
  `,
  parameters: {
    docs: {
      description: {
        story: 'Complete bilingual application demonstrating language switching across entire page.',
      },
    },
    layout: 'fullscreen',
  },
};
