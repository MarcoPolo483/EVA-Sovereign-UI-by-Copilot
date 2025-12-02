import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';
import '../gc-design/eva-gc-footer';

const meta: Meta = {
  title: 'GC Design/Footer',
  component: 'eva-gc-footer',
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: 'Government of Canada footer component with bilingual support and WCAG 2.2 AA compliance.',
      },
    },
    a11y: {
      config: {
        rules: [
          { id: 'color-contrast', enabled: true },
          { id: 'landmark-contentinfo-is-top-level', enabled: true },
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
    <eva-gc-footer>
      <p>&copy; 2025 Government of Canada</p>
    </eva-gc-footer>
  `,
};

export const WithLinks: Story = {
  render: () => html`
    <eva-gc-footer>
      <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 2rem; padding: 2rem 0;">
        <div>
          <h4>Contact us</h4>
          <ul style="list-style: none; padding: 0; margin: 0.5rem 0 0 0;">
            <li><a href="#enquiries">Enquiries</a></li>
            <li><a href="#help">Help Centre</a></li>
            <li><a href="#offices">Offices</a></li>
          </ul>
        </div>
        
        <div>
          <h4>About government</h4>
          <ul style="list-style: none; padding: 0; margin: 0.5rem 0 0 0;">
            <li><a href="#ministers">Ministers</a></li>
            <li><a href="#departments">Departments</a></li>
            <li><a href="#about">About Canada.ca</a></li>
          </ul>
        </div>
        
        <div>
          <h4>Legal</h4>
          <ul style="list-style: none; padding: 0; margin: 0.5rem 0 0 0;">
            <li><a href="#privacy">Privacy</a></li>
            <li><a href="#terms">Terms and conditions</a></li>
            <li><a href="#transparency">Transparency</a></li>
          </ul>
        </div>
      </div>
      
      <div style="border-top: 1px solid rgba(255,255,255,0.2); padding-top: 1rem; margin-top: 1rem;">
        <p>&copy; 2025 Government of Canada</p>
      </div>
    </eva-gc-footer>
  `,
};

export const Bilingual: Story = {
  render: () => html`
    <eva-gc-footer>
      <div style="display: grid; grid-template-columns: repeat(2, 1fr); gap: 2rem; padding: 2rem 0;">
        <div>
          <h4>About this site</h4>
          <ul style="list-style: none; padding: 0; margin: 0.5rem 0 0 0;">
            <li><a href="#social">Social media</a></li>
            <li><a href="#mobile">Mobile applications</a></li>
            <li><a href="#about">About Canada.ca</a></li>
          </ul>
        </div>
        
        <div>
          <h4>À propos de ce site</h4>
          <ul style="list-style: none; padding: 0; margin: 0.5rem 0 0 0;">
            <li><a href="#social">Médias sociaux</a></li>
            <li><a href="#mobile">Applications mobiles</a></li>
            <li><a href="#about">À propos de Canada.ca</a></li>
          </ul>
        </div>
      </div>
      
      <div style="border-top: 1px solid rgba(255,255,255,0.2); padding-top: 1rem; margin-top: 1rem;">
        <p>&copy; 2025 Government of Canada / Gouvernement du Canada</p>
      </div>
    </eva-gc-footer>
  `,
};

export const CompleteExample: Story = {
  render: () => html`
    <div style="min-height: 100vh; display: flex; flex-direction: column;">
      <eva-gc-header>
        <span slot="title">Government of Canada</span>
      </eva-gc-header>

      <main style="flex: 1; padding: 2rem; max-width: 1200px; margin: 0 auto; width: 100%;">
        <h1>Page Content</h1>
        <p>Main content goes here...</p>
      </main>

      <eva-gc-footer>
        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 2rem; padding: 2rem 0;">
          <div>
            <h4>Government of Canada</h4>
            <ul style="list-style: none; padding: 0; margin: 0.5rem 0 0 0;">
              <li><a href="#" style="color: white; text-decoration: none;">All contacts</a></li>
              <li><a href="#" style="color: white; text-decoration: none;">Departments and agencies</a></li>
              <li><a href="#" style="color: white; text-decoration: none;">About government</a></li>
            </ul>
          </div>
          
          <div>
            <h4>Themes and topics</h4>
            <ul style="list-style: none; padding: 0; margin: 0.5rem 0 0 0;">
              <li><a href="#" style="color: white; text-decoration: none;">Jobs</a></li>
              <li><a href="#" style="color: white; text-decoration: none;">Immigration and citizenship</a></li>
              <li><a href="#" style="color: white; text-decoration: none;">Travel and tourism</a></li>
            </ul>
          </div>
          
          <div>
            <h4>Government of Canada Corporate</h4>
            <ul style="list-style: none; padding: 0; margin: 0.5rem 0 0 0;">
              <li><a href="#" style="color: white; text-decoration: none;">Social media</a></li>
              <li><a href="#" style="color: white; text-decoration: none;">Mobile applications</a></li>
              <li><a href="#" style="color: white; text-decoration: none;">About Canada.ca</a></li>
              <li><a href="#" style="color: white; text-decoration: none;">Terms and conditions</a></li>
              <li><a href="#" style="color: white; text-decoration: none;">Privacy</a></li>
            </ul>
          </div>
        </div>
        
        <div style="border-top: 1px solid rgba(255,255,255,0.2); padding-top: 1rem; margin-top: 1rem; display: flex; align-items: center; gap: 1rem;">
          <img src="https://canada.ca/etc/designs/canada/wet-boew/assets/wmms-blk.svg" alt="Symbol of the Government of Canada" style="height: 40px;">
          <p style="margin: 0;">&copy; 2025 His Majesty the King in Right of Canada</p>
        </div>
      </eva-gc-footer>
    </div>
  `,
  parameters: {
    docs: {
      description: {
        story: 'Complete page layout with header, main content, and comprehensive footer.',
      },
    },
  },
};

export const MinimalFooter: Story = {
  render: () => html`
    <eva-gc-footer>
      <div style="display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 1rem;">
        <p style="margin: 0;">&copy; 2025 Government of Canada</p>
        <nav style="display: flex; gap: 1.5rem;">
          <a href="#terms" style="color: white; text-decoration: none;">Terms</a>
          <a href="#privacy" style="color: white; text-decoration: none;">Privacy</a>
          <a href="#contact" style="color: white; text-decoration: none;">Contact</a>
        </nav>
      </div>
    </eva-gc-footer>
  `,
  parameters: {
    docs: {
      description: {
        story: 'Minimal footer with copyright and essential links.',
      },
    },
  },
};
