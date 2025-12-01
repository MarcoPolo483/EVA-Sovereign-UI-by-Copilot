import { describe, it, expect, beforeEach, afterEach } from 'vitest';
import { fixture, html } from '@open-wc/testing';
import { axe, toHaveNoViolations } from 'jest-axe';
import { axeConfig, wcagTags } from './axe-config';
// Ensure the language switcher custom element is defined for tests
import '@/components/gc-design/eva-gc-language-switcher';

// Type augmentation so Vitest knows about jest-axe matcher
declare module 'vitest' {
  interface Assertion<T = any> {
    toHaveNoViolations(): void;
  }
  interface AsymmetricMatchersContaining {
    toHaveNoViolations(): void;
  }
}

// Extend expect with axe matchers
expect.extend(toHaveNoViolations);

/**
 * Accessibility audit tests for all GC components
 * Tests WCAG 2.1 AA compliance using axe-core
 */

describe('GC Components - Accessibility Audit', () => {
  describe('Tier 1 Components (Critical)', () => {
    describe('eva-gc-button', () => {
      it('should have no accessibility violations - default button', async () => {
        const el = await fixture(html`
          <eva-gc-button>Submit</eva-gc-button>
        `);
        
        const results = await axe(el, axeConfig);
        expect(results).toHaveNoViolations();
      });

      it('should have no accessibility violations - primary variant', async () => {
        const el = await fixture(html`
          <eva-gc-button variant="primary">Primary Action</eva-gc-button>
        `);
        
        const results = await axe(el, axeConfig);
        expect(results).toHaveNoViolations();
      });

      it('should have no accessibility violations - disabled state', async () => {
        const el = await fixture(html`
          <eva-gc-button disabled>Disabled</eva-gc-button>
        `);
        
        const results = await axe(el, axeConfig);
        expect(results).toHaveNoViolations();
      });

      it('should have no accessibility violations - icon button', async () => {
        const el = await fixture(html`
          <eva-gc-button size="icon">
            <span class="sr-only">Close dialog</span>
            <svg slot="icon" viewBox="0 0 24 24" width="16" height="16" aria-hidden="true">
              <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/>
            </svg>
          </eva-gc-button>
        `);
        
        const results = await axe(el, axeConfig);
        expect(results).toHaveNoViolations();
      });
    });

    describe('eva-gc-link', () => {
      it('should have no accessibility violations - default link', async () => {
        const el = await fixture(html`
          <eva-gc-link href="/page">Link Text</eva-gc-link>
        `);
        
        const results = await axe(el, axeConfig);
        expect(results).toHaveNoViolations();
      });

      it('should have no accessibility violations - external link', async () => {
        const el = await fixture(html`
          <eva-gc-link href="https://example.com" external>
            External Link
          </eva-gc-link>
        `);
        
        const results = await axe(el, axeConfig);
        expect(results).toHaveNoViolations();
      });
    });

    describe('eva-gc-alert', () => {
      it('should have no accessibility violations - info alert', async () => {
        const el = await fixture(html`
          <eva-gc-alert variant="info" title="Information">
            This is an informational message.
          </eva-gc-alert>
        `);
        
        const results = await axe(el, axeConfig);
        expect(results).toHaveNoViolations();
      });

      it('should have no accessibility violations - error alert', async () => {
        const el = await fixture(html`
          <eva-gc-alert variant="error" title="Error">
            An error occurred.
          </eva-gc-alert>
        `);
        
        const results = await axe(el, axeConfig);
        expect(results).toHaveNoViolations();
      });

      it('should have no accessibility violations - dismissible alert', async () => {
        const el = await fixture(html`
          <eva-gc-alert variant="success" title="Success" dismissible>
            Action completed successfully.
          </eva-gc-alert>
        `);
        
        const results = await axe(el, axeConfig);
        expect(results).toHaveNoViolations();
      });
    });

    describe('eva-gc-input', () => {
      it('should have no accessibility violations - text input with label', async () => {
        const el = await fixture(html`
          <div>
            <eva-gc-label for="test-input" required>Full Name</eva-gc-label>
            <eva-gc-input id="test-input" type="text" required></eva-gc-input>
          </div>
        `);
        
        const results = await axe(el, axeConfig);
        expect(results).toHaveNoViolations();
      });

      it('should have no accessibility violations - input with error', async () => {
        const el = await fixture(html`
          <div>
            <eva-gc-label for="error-input">Email</eva-gc-label>
            <eva-gc-input 
              id="error-input" 
              type="email" 
              error="Invalid email address"
              aria-invalid="true"
            ></eva-gc-input>
          </div>
        `);
        
        const results = await axe(el, axeConfig);
        expect(results).toHaveNoViolations();
      });

      it('should have no accessibility violations - input with helper text', async () => {
        const el = await fixture(html`
          <div>
            <eva-gc-label for="helper-input">Password</eva-gc-label>
            <eva-gc-input 
              id="helper-input" 
              type="password" 
              helper-text="Minimum 8 characters"
              aria-describedby="helper-text"
            ></eva-gc-input>
          </div>
        `);
        
        const results = await axe(el, axeConfig);
        expect(results).toHaveNoViolations();
      });
    });

    describe('eva-gc-label', () => {
      it('should have no accessibility violations - label with required indicator', async () => {
        const el = await fixture(html`
          <eva-gc-label for="field" required>Field Label</eva-gc-label>
        `);
        
        const results = await axe(el, axeConfig);
        expect(results).toHaveNoViolations();
      });
    });
  });

  describe('Tier 2 Components (Common)', () => {
    describe('eva-gc-breadcrumbs', () => {
      it('should have no accessibility violations', async () => {
        const el = await fixture(html`
          <eva-gc-breadcrumbs>
            <a href="/">Home</a>
            <a href="/section">Section</a>
            <span>Current Page</span>
          </eva-gc-breadcrumbs>
        `);
        
        const results = await axe(el, axeConfig);
        expect(results).toHaveNoViolations();
      });
    });

    describe('eva-gc-card', () => {
      it('should have no accessibility violations', async () => {
        const el = await fixture(html`
          <eva-gc-card title="Card Title">
            <p>Card content goes here.</p>
          </eva-gc-card>
        `);
        
        const results = await axe(el, axeConfig);
        expect(results).toHaveNoViolations();
      });

      it('should have no accessibility violations - interactive card', async () => {
        const el = await fixture(html`
          <eva-gc-card title="Interactive Card" href="/details">
            <p>Click to view details.</p>
          </eva-gc-card>
        `);
        
        const results = await axe(el, axeConfig);
        expect(results).toHaveNoViolations();
      });
    });

    describe('eva-gc-tag', () => {
      it('should have no accessibility violations', async () => {
        const el = await fixture(html`
          <eva-gc-tag>Tag Label</eva-gc-tag>
        `);
        
        const results = await axe(el, axeConfig);
        expect(results).toHaveNoViolations();
      });

      it('should have no accessibility violations - removable tag', async () => {
        const el = await fixture(html`
          <eva-gc-tag removable>Removable Tag</eva-gc-tag>
        `);
        
        const results = await axe(el, axeConfig);
        expect(results).toHaveNoViolations();
      });
    });

    describe('eva-gc-pagination', () => {
      it('should have no accessibility violations', async () => {
        const el = await fixture(html`
          <eva-gc-pagination total="100" current="5" page-size="10"></eva-gc-pagination>
        `);
        
        const results = await axe(el, axeConfig);
        expect(results).toHaveNoViolations();
      });
    });

    describe('eva-gc-navigation', () => {
      it('should have no accessibility violations', async () => {
        const el = await fixture(html`
          <eva-gc-navigation>
            <a href="/">Home</a>
            <a href="/about">About</a>
            <a href="/services">Services</a>
            <a href="/contact">Contact</a>
          </eva-gc-navigation>
        `);
        
        const results = await axe(el, axeConfig);
        expect(results).toHaveNoViolations();
      });
    });

    describe('eva-gc-footer', () => {
      it('should have no accessibility violations', async () => {
        const el = await fixture(html`
          <eva-gc-footer>
            <div slot="links">
              <a href="/privacy">Privacy</a>
              <a href="/terms">Terms</a>
            </div>
          </eva-gc-footer>
        `);
        
        const results = await axe(el, axeConfig);
        expect(results).toHaveNoViolations();
      });
    });
  });

  describe('Tier 3 Components (Advanced)', () => {
    describe('eva-gc-tabs', () => {
      it('should have no accessibility violations', async () => {
        const el = await fixture(html`
          <eva-gc-tabs>
            <div slot="tab" data-label="Tab 1">Content 1</div>
            <div slot="tab" data-label="Tab 2">Content 2</div>
            <div slot="tab" data-label="Tab 3">Content 3</div>
          </eva-gc-tabs>
        `);
        const results = await axe(el, axeConfig);
        expect(results).toHaveNoViolations();
      });
    });

    describe('eva-gc-accordion', () => {
      it('should have no accessibility violations', async () => {
        const el = await fixture(html`
          <eva-gc-accordion>
            <div slot="item" data-title="Section 1">
              <p>Content for section 1</p>
            </div>
            <div slot="item" data-title="Section 2">
              <p>Content for section 2</p>
            </div>
          </eva-gc-accordion>
        `);
        
        const results = await axe(el, axeConfig);
        expect(results).toHaveNoViolations();
      });
    });

    describe('eva-gc-modal', () => {
      it('should have no accessibility violations - closed state', async () => {
        const el = await fixture(html`
          <eva-gc-modal title="Modal Title">
            <p>Modal content</p>
          </eva-gc-modal>
        `);
        
        const results = await axe(el, axeConfig);
        expect(results).toHaveNoViolations();
      });

      it('should have no accessibility violations - open state', async () => {
        const el = await fixture(html`
          <eva-gc-modal title="Modal Title" open>
            <p>Modal content</p>
          </eva-gc-modal>
        `);
        
        // Give modal time to render and trap focus
        await new Promise(resolve => setTimeout(resolve, 100));
        
        const results = await axe(el, axeConfig);
        expect(results).toHaveNoViolations();
      });
    });

    describe('eva-gc-date-picker', () => {
      it('should have no accessibility violations', async () => {
        const el = await fixture(html`
          <eva-gc-date-picker label="Select Date"></eva-gc-date-picker>
        `);
        
        const results = await axe(el, axeConfig);
        expect(results).toHaveNoViolations();
      });
    });
  });

  describe('eva-gc-language-switcher', () => {
    it('should have no accessibility violations - default render', async () => {
      const el = await fixture(html`
        <eva-gc-language-switcher></eva-gc-language-switcher>
      `);
      const results = await axe(el, axeConfig);
      expect(results).toHaveNoViolations();
    });

    it('opens menu and is navigable via keyboard', async () => {
      const el = await fixture(html`
        <eva-gc-language-switcher></eva-gc-language-switcher>
      `);
      const btn = el.shadowRoot!.querySelector('button.trigger') as HTMLButtonElement;
      btn.dispatchEvent(new KeyboardEvent('keydown', { key: 'ArrowDown', bubbles: true }));
      await new Promise(r => setTimeout(r));
      const firstItem = el.shadowRoot!.querySelector('.menu button.item') as HTMLButtonElement;
      expect(firstItem).toBeTruthy();
      firstItem.dispatchEvent(new KeyboardEvent('keydown', { key: 'ArrowDown', bubbles: true }));
      firstItem.dispatchEvent(new KeyboardEvent('keydown', { key: 'ArrowUp', bubbles: true }));
      firstItem.dispatchEvent(new KeyboardEvent('keydown', { key: 'Escape', bubbles: true }));
      const results = await axe(el, axeConfig);
      expect(results).toHaveNoViolations();
    });

    it('renders only specified locales when include is set', async () => {
      const el = await fixture(html`
        <eva-gc-language-switcher include="en-CA,fr-CA" url-mode="none"></eva-gc-language-switcher>
      `);
      const btn = el.shadowRoot!.querySelector('button.trigger') as HTMLButtonElement;
      btn.click();
      await new Promise(r => setTimeout(r));
      const items = Array.from(el.shadowRoot!.querySelectorAll('.menu button.item')) as HTMLButtonElement[];
      expect(items.length).toBe(2);
      const results = await axe(el, axeConfig);
      expect(results).toHaveNoViolations();
    });
  });

  describe('Advanced Patterns', () => {
    describe('eva-gc-carousel', () => {
      it('should have no accessibility violations', async () => {
        const el = await fixture(html`
          <eva-gc-carousel>
            <div>Slide 1</div>
            <div>Slide 2</div>
            <div>Slide 3</div>
          </eva-gc-carousel>
        `);
        
        const results = await axe(el, axeConfig);
        expect(results).toHaveNoViolations();
      });
    });

    describe('eva-gc-data-table', () => {
      it('should have no accessibility violations', async () => {
        const columns = [
          { key: 'name', label: 'Name' },
          { key: 'email', label: 'Email' },
          { key: 'role', label: 'Role' }
        ];
        
        const data = [
          { name: 'John Doe', email: 'john@example.com', role: 'Admin' },
          { name: 'Jane Smith', email: 'jane@example.com', role: 'User' }
        ];
        
        const el = await fixture(html`
          <eva-gc-data-table
            .columns="${columns}"
            .data="${data}"
            title="Users Table"
          ></eva-gc-data-table>
        `);
        
        const results = await axe(el, axeConfig);
        expect(results).toHaveNoViolations();
      });
    });

    describe('eva-gc-timeline', () => {
      it('should have no accessibility violations', async () => {
        const items = [
          { id: '1', date: '2024-01-01', title: 'Event 1', status: 'completed' },
          { id: '2', date: '2024-02-01', title: 'Event 2', status: 'current' },
          { id: '3', date: '2024-03-01', title: 'Event 3', status: 'upcoming' }
        ];
        
        const el = await fixture(html`
          <eva-gc-timeline .items="${items}"></eva-gc-timeline>
        `);
        
        const results = await axe(el, axeConfig);
        expect(results).toHaveNoViolations();
      });
    });

    describe('eva-gc-file-upload', () => {
      it('should have no accessibility violations', async () => {
        const el = await fixture(html`
          <eva-gc-file-upload accept="image/*" max-size="5242880"></eva-gc-file-upload>
        `);
        
        const results = await axe(el, axeConfig);
        expect(results).toHaveNoViolations();
      });
    });

    describe('eva-gc-chart', () => {
      it('should have no accessibility violations', async () => {
        const chartData = {
          labels: ['Jan', 'Feb', 'Mar'],
          datasets: [{
            label: 'Sales',
            data: [100, 200, 150]
          }]
        };
        
        const el = await fixture(html`
          <eva-gc-chart
            type="bar"
            .data="${chartData}"
            title="Sales Chart"
            show-data-table
          ></eva-gc-chart>
        `);
        
        const results = await axe(el, axeConfig);
        expect(results).toHaveNoViolations();
      });
    });

    describe('eva-gc-rich-text-editor', () => {
      it('should have no accessibility violations', async () => {
        const el = await fixture(html`
          <eva-gc-rich-text-editor 
            placeholder="Enter content..."
          ></eva-gc-rich-text-editor>
        `);
        
        const results = await axe(el, axeConfig);
        expect(results).toHaveNoViolations();
      });
    });
  });
});
