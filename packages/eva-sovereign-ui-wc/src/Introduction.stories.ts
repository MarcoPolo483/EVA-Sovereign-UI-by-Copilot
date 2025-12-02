import { Meta } from '@storybook/web-components';

const meta: Meta = {
  title: 'Introduction',
  parameters: {
    layout: 'fullscreen',
    options: {
      showPanel: false,
    },
  },
};

export default meta;

export const Welcome = () => `
  <div style="
    max-width: 1200px;
    margin: 0 auto;
    padding: 3rem 2rem;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
  ">
    <div style="
      background: linear-gradient(135deg, #2d5a8c 0%, #4a7ba7 100%);
      color: white;
      padding: 3rem;
      border-radius: 12px;
      margin-bottom: 3rem;
    ">
      <h1 style="font-size: 3rem; margin: 0 0 1rem 0;">🇨🇦 EVA Sovereign UI</h1>
      <p style="font-size: 1.5rem; opacity: 0.95; margin: 0;">
        Production-ready Web Components for Government Applications
      </p>
      <div style="
        display: flex;
        gap: 1rem;
        margin-top: 2rem;
        flex-wrap: wrap;
      ">
        <span style="
          background: rgba(255,255,255,0.2);
          padding: 0.5rem 1rem;
          border-radius: 4px;
          font-size: 0.9rem;
        ">✅ WCAG 2.2 AA</span>
        <span style="
          background: rgba(255,255,255,0.2);
          padding: 0.5rem 1rem;
          border-radius: 4px;
          font-size: 0.9rem;
        ">🌍 Bilingual (EN/FR)</span>
        <span style="
          background: rgba(255,255,255,0.2);
          padding: 0.5rem 1rem;
          border-radius: 4px;
          font-size: 0.9rem;
        ">📦 49 Components</span>
        <span style="
          background: rgba(255,255,255,0.2);
          padding: 0.5rem 1rem;
          border-radius: 4px;
          font-size: 0.9rem;
        ">⚡ TypeScript</span>
        <span style="
          background: rgba(255,255,255,0.2);
          padding: 0.5rem 1rem;
          border-radius: 4px;
          font-size: 0.9rem;
        ">🎨 GC Design System</span>
      </div>
    </div>

    <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 2rem; margin-bottom: 3rem;">
      <div style="
        padding: 2rem;
        border: 1px solid #e0e0e0;
        border-radius: 8px;
        background: white;
      ">
        <h3 style="color: #2d5a8c; margin: 0 0 1rem 0;">🚀 Quick Start</h3>
        <p style="color: #666; line-height: 1.6;">
          Get started in seconds with NPM or CDN. No build tools required for basic usage.
        </p>
        <pre style="
          background: #f5f5f5;
          padding: 1rem;
          border-radius: 4px;
          overflow-x: auto;
          font-size: 0.85rem;
        "><code>npm install @eva-suite/sovereign-ui</code></pre>
      </div>

      <div style="
        padding: 2rem;
        border: 1px solid #e0e0e0;
        border-radius: 8px;
        background: white;
      ">
        <h3 style="color: #2d5a8c; margin: 0 0 1rem 0;">♿ Accessibility First</h3>
        <p style="color: #666; line-height: 1.6;">
          Every component meets WCAG 2.2 AA standards with keyboard navigation, screen reader support, and ARIA attributes.
        </p>
      </div>

      <div style="
        padding: 2rem;
        border: 1px solid #e0e0e0;
        border-radius: 8px;
        background: white;
      ">
        <h3 style="color: #2d5a8c; margin: 0 0 1rem 0;">🌐 Bilingual</h3>
        <p style="color: #666; line-height: 1.6;">
          Built-in support for English and French with easy locale switching and Five Eyes compatibility.
        </p>
      </div>
    </div>

    <div style="
      background: #f8f9fa;
      padding: 2rem;
      border-radius: 8px;
      margin-bottom: 3rem;
    ">
      <h2 style="color: #2d5a8c; margin: 0 0 1.5rem 0;">Component Categories</h2>
      
      <div style="display: grid; gap: 1rem;">
        <div style="padding: 1rem; background: white; border-radius: 4px;">
          <strong style="color: #2d5a8c;">GC Design System</strong> - Header, Footer, Buttons with official Government of Canada styling
        </div>
        
        <div style="padding: 1rem; background: white; border-radius: 4px;">
          <strong style="color: #2d5a8c;">Form Controls</strong> - Input, Select, Textarea, Checkbox, Radio, Switch with validation
        </div>
        
        <div style="padding: 1rem; background: white; border-radius: 4px;">
          <strong style="color: #2d5a8c;">UI Components</strong> - Card, Dialog, Alert, Badge, Tabs, Table, Pagination
        </div>
        
        <div style="padding: 1rem; background: white; border-radius: 4px;">
          <strong style="color: #2d5a8c;">Layout</strong> - Page Shell, Container, Hero Banner for consistent page structure
        </div>
        
        <div style="padding: 1rem; background: white; border-radius: 4px;">
          <strong style="color: #2d5a8c;">Internationalization</strong> - Language Switcher with locale management
        </div>
        
        <div style="padding: 1rem; background: white; border-radius: 4px;">
          <strong style="color: #2d5a8c;">ESDC</strong> - Employment and Social Development Canada specialized components
        </div>
      </div>
    </div>

    <div style="
      border-left: 4px solid #2d5a8c;
      padding: 1.5rem;
      background: #f0f7ff;
      border-radius: 4px;
      margin-bottom: 3rem;
    ">
      <h3 style="color: #2d5a8c; margin: 0 0 1rem 0;">💡 Using Storybook</h3>
      <p style="color: #666; line-height: 1.6; margin: 0 0 0.5rem 0;">
        • Use the <strong>Controls</strong> panel to interact with component props<br>
        • Check the <strong>Accessibility</strong> tab for WCAG compliance<br>
        • View <strong>Docs</strong> for detailed API documentation<br>
        • Use the <strong>Canvas</strong> to see live examples<br>
        • Try the theme and locale toolbars at the top
      </p>
    </div>

    <div style="text-align: center; padding: 2rem 0; color: #666;">
      <p style="margin: 0 0 0.5rem 0;">Built with ❤️ for the Government of Canada</p>
      <p style="margin: 0;">
        <a href="https://github.com/eva-suite/eva-sovereign-ui" style="color: #2d5a8c; text-decoration: none;">GitHub</a> •
        <a href="https://www.npmjs.com/package/@eva-suite/sovereign-ui" style="color: #2d5a8c; text-decoration: none;">npm</a> •
        <a href="#" style="color: #2d5a8c; text-decoration: none;">Documentation</a>
      </p>
    </div>
  </div>
`;
