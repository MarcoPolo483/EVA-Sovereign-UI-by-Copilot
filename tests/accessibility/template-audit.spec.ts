import { describe, it, expect } from 'vitest';
import { fixture, html } from '@open-wc/testing';
import { axe, toHaveNoViolations } from 'jest-axe';
import { axeConfig } from './axe-config';

expect.extend(toHaveNoViolations);

/**
 * Accessibility audit tests for all GC page templates
 * Tests WCAG 2.1 AA compliance using axe-core
 */

describe('GC Templates - Accessibility Audit', () => {
  describe('eva-gc-page (Base Template)', () => {
    it('should have no accessibility violations', async () => {
      const el = await fixture(html`
        <eva-gc-page title="Test Page" lang="en">
          <nav slot="header">
            <a href="/">Home</a>
          </nav>
          <main>
            <h1>Page Title</h1>
            <p>Page content</p>
          </main>
          <footer slot="footer">
            <p>&copy; 2024 Government of Canada</p>
          </footer>
        </eva-gc-page>
      `);
      
      const results = await axe(el, axeConfig);
      expect(results).toHaveNoViolations();
    });
  });

  describe('eva-gc-basic-page', () => {
    it('should have no accessibility violations', async () => {
      const el = await fixture(html`
        <eva-gc-basic-page 
          title="Basic Page Title"
          title-fr="Titre de page de base"
          lang="en"
          show-date-modified
          date-modified="2024-12-01"
        >
          <p>Page content goes here.</p>
        </eva-gc-basic-page>
      `);
      
      const results = await axe(el, axeConfig);
      expect(results).toHaveNoViolations();
    });
  });

  describe('eva-gc-campaign-page', () => {
    it('should have no accessibility violations', async () => {
      const el = await fixture(html`
        <eva-gc-campaign-page
          campaign-title="Campaign Title"
          tagline="Campaign tagline"
          cta-text="Learn More"
          cta-url="/learn-more"
          lang="en"
        >
          <div slot="features">
            <div class="feature">
              <h3>Feature 1</h3>
              <p>Description</p>
            </div>
          </div>
        </eva-gc-campaign-page>
      `);
      
      const results = await axe(el, axeConfig);
      expect(results).toHaveNoViolations();
    });
  });

  describe('eva-gc-landing-page', () => {
    it('should have no accessibility violations', async () => {
      const el = await fixture(html`
        <eva-gc-landing-page
          title="Landing Page"
          intro="Introduction text"
          lang="en"
        >
          <div slot="featured">
            <article>
              <h3>Featured Item</h3>
              <p>Content</p>
            </article>
          </div>
        </eva-gc-landing-page>
      `);
      
      const results = await axe(el, axeConfig);
      expect(results).toHaveNoViolations();
    });
  });

  describe('eva-gc-service-initiation', () => {
    it('should have no accessibility violations', async () => {
      const el = await fixture(html`
        <eva-gc-service-initiation
          service-name="Apply for Service"
          start-url="/apply"
          lang="en"
        >
          <div>
            <h2>Eligibility</h2>
            <ul>
              <li>Requirement 1</li>
              <li>Requirement 2</li>
            </ul>
          </div>
          <aside slot="sidebar">
            <h3>Estimated time</h3>
            <p>15 minutes</p>
          </aside>
        </eva-gc-service-initiation>
      `);
      
      const results = await axe(el, axeConfig);
      expect(results).toHaveNoViolations();
    });
  });

  describe('eva-gc-news-page', () => {
    it('should have no accessibility violations', async () => {
      const el = await fixture(html`
        <eva-gc-news-page
          title="News Article Title"
          news-type="news"
          publish-date="2024-12-01"
          location="Ottawa, ON"
          lang="en"
        >
          <p>Article content goes here.</p>
          <aside slot="sidebar">
            <h3>Related Links</h3>
            <ul>
              <li><a href="/link1">Link 1</a></li>
            </ul>
          </aside>
        </eva-gc-news-page>
      `);
      
      const results = await axe(el, axeConfig);
      expect(results).toHaveNoViolations();
    });
  });

  describe('eva-gc-contact-page', () => {
    it('should have no accessibility violations', async () => {
      const el = await fixture(html`
        <eva-gc-contact-page
          title="Contact Us"
          intro="Get in touch with us"
          lang="en"
        >
          <div slot="contact-methods">
            <div class="contact-card">
              <h3>Phone</h3>
              <p>1-800-123-4567</p>
            </div>
          </div>
        </eva-gc-contact-page>
      `);
      
      const results = await axe(el, axeConfig);
      expect(results).toHaveNoViolations();
    });
  });

  describe('eva-gc-institutional-profile', () => {
    it('should have no accessibility violations', async () => {
      const el = await fixture(html`
        <eva-gc-institutional-profile
          institution-name="Department Name"
          tagline="Department tagline"
          lang="en"
        >
          <div slot="logo">
            <img src="/logo.png" alt="Department Logo" />
          </div>
          <section>
            <h2>Our Mandate</h2>
            <p>Department mandate description.</p>
          </section>
          <aside slot="sidebar">
            <h3>Quick Links</h3>
            <ul>
              <li><a href="/link">Link</a></li>
            </ul>
          </aside>
        </eva-gc-institutional-profile>
      `);
      
      const results = await axe(el, axeConfig);
      expect(results).toHaveNoViolations();
    });
  });

  describe('eva-gc-theme-topic', () => {
    it('should have no accessibility violations', async () => {
      const el = await fixture(html`
        <eva-gc-theme-topic
          theme="Theme Name"
          description="Theme description"
          lang="en"
        >
          <div slot="most-requested">
            <ul>
              <li><a href="/service1">Service 1</a></li>
              <li><a href="/service2">Service 2</a></li>
            </ul>
          </div>
        </eva-gc-theme-topic>
      `);
      
      const results = await axe(el, axeConfig);
      expect(results).toHaveNoViolations();
    });
  });

  describe('eva-gc-organization-profile', () => {
    it('should have no accessibility violations', async () => {
      const el = await fixture(html`
        <eva-gc-organization-profile
          organization-name="Organization Name"
          tagline="Organization tagline"
          lang="en"
        >
          <div slot="quick-links">
            <a href="/link1" class="quick-link">Quick Link 1</a>
          </div>
          <section>
            <h2>About</h2>
            <p>Organization information.</p>
          </section>
        </eva-gc-organization-profile>
      `);
      
      const results = await axe(el, axeConfig);
      expect(results).toHaveNoViolations();
    });
  });

  describe('eva-gc-laws-regulations', () => {
    it('should have no accessibility violations', async () => {
      const el = await fixture(html`
        <eva-gc-laws-regulations
          law-title="Act Name"
          citation="S.C. 2024, c. 1"
          lang="en"
        >
          <nav slot="toc">
            <ul>
              <li><a href="#section1">Section 1</a></li>
              <li><a href="#section2">Section 2</a></li>
            </ul>
          </nav>
          <section id="section1">
            <h2>Section 1</h2>
            <p>Section content.</p>
          </section>
        </eva-gc-laws-regulations>
      `);
      
      const results = await axe(el, axeConfig);
      expect(results).toHaveNoViolations();
    });
  });

  describe('eva-gc-about-institution', () => {
    it('should have no accessibility violations', async () => {
      const el = await fixture(html`
        <eva-gc-about-institution
          title="About the Institution"
          lang="en"
        >
          <div slot="info-cards">
            <div class="info-card">
              <h3>Our Mandate</h3>
              <p>Mandate description</p>
              <a href="/mandate">Learn more</a>
            </div>
          </div>
          <div slot="transparency">
            <h2>Transparency</h2>
            <p>Transparency information</p>
          </div>
        </eva-gc-about-institution>
      `);
      
      const results = await axe(el, axeConfig);
      expect(results).toHaveNoViolations();
    });
  });

  describe('eva-gc-generic-page', () => {
    it('should have no accessibility violations - default width', async () => {
      const el = await fixture(html`
        <eva-gc-generic-page
          title="Generic Page"
          intro="Page introduction"
          lang="en"
        >
          <p>Page content</p>
        </eva-gc-generic-page>
      `);
      
      const results = await axe(el, axeConfig);
      expect(results).toHaveNoViolations();
    });

    it('should have no accessibility violations - narrow width', async () => {
      const el = await fixture(html`
        <eva-gc-generic-page
          title="Narrow Page"
          width="narrow"
          lang="en"
        >
          <p>Narrow content</p>
        </eva-gc-generic-page>
      `);
      
      const results = await axe(el, axeConfig);
      expect(results).toHaveNoViolations();
    });

    it('should have no accessibility violations - full width', async () => {
      const el = await fixture(html`
        <eva-gc-generic-page
          title="Full Width Page"
          width="full-width"
          lang="en"
        >
          <p>Full width content</p>
        </eva-gc-generic-page>
      `);
      
      const results = await axe(el, axeConfig);
      expect(results).toHaveNoViolations();
    });
  });
});
