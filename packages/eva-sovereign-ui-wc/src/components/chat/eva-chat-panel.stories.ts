import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';
import './eva-chat-panel';

/**
 * ## EVA Chat Panel
 * 
 * Complete chat interface with message history and input.
 * 
 * ### Features:
 * - Message history with user/assistant distinction
 * - Smooth scrolling to latest messages
 * - Input field with Enter to send
 * - Debounced live region for screen readers (Task #6)
 * - Timestamp display
 * - Welcome message on load
 * 
 * ### Usage:
 * ```html
 * <eva-chat-panel 
 *   title-key="chat.title" 
 *   placeholder-key="chat.placeholder">
 * </eva-chat-panel>
 * ```
 */
const meta: Meta = {
  title: 'Components/Chat Panel',
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: 'Complete chat interface with message history and accessible input.',
      },
    },
    a11y: {
      config: {
        rules: [
          { id: 'color-contrast', enabled: true },
          { id: 'label', enabled: true },
        ],
      },
    },
  },
};

export default meta;
type Story = StoryObj;

/**
 * Default chat panel with welcome message.
 */
export const Default: Story = {
  render: () => html`
    <div style="max-width: 800px; height: 600px; margin: 0 auto;">
      <eva-chat-panel></eva-chat-panel>
    </div>
  `,
};

/**
 * Customer support chat interface.
 */
export const CustomerSupport: Story = {
  render: () => html`
    <div style="max-width: 800px; height: 600px; margin: 0 auto; border: 1px solid #e5e7eb; border-radius: 0.5rem; overflow: hidden; box-shadow: 0 4px 6px rgba(0,0,0,0.1);">
      <eva-chat-panel 
        title-key="chat.support.title" 
        placeholder-key="chat.support.placeholder"
        assistant-name="Support Agent">
      </eva-chat-panel>
    </div>
  `,
};

/**
 * AI assistant chat with custom styling.
 */
export const AIAssistant: Story = {
  render: () => html`
    <div style="display: flex; flex-direction: column; height: 100vh; max-height: 700px;">
      <div style="padding: 1rem 1.5rem; background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; display: flex; align-items: center; gap: 1rem;">
        <div style="width: 40px; height: 40px; background: white; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 1.5rem;">
          🤖
        </div>
        <div>
          <h3 style="margin: 0; font-size: 1rem;">AI Assistant</h3>
          <p style="margin: 0; font-size: 0.875rem; opacity: 0.9;">Always here to help</p>
        </div>
      </div>
      <div style="flex: 1; background: #f9fafb;">
        <eva-chat-panel 
          assistant-name="AI Assistant"
          style="height: 100%;">
        </eva-chat-panel>
      </div>
    </div>
  `,
};

/**
 * Embedded chat in application.
 */
export const EmbeddedChat: Story = {
  render: () => html`
    <div style="display: grid; grid-template-columns: 2fr 1fr; gap: 1rem; height: 600px;">
      <div style="padding: 2rem; background: white; border: 1px solid #e5e7eb; border-radius: 0.5rem;">
        <h2>Main Application Content</h2>
        <p style="line-height: 1.8; color: #6b7280;">
          This is your main application interface. The chat panel on the right 
          provides real-time support without leaving the current page.
        </p>
        <div style="margin-top: 2rem; padding: 1.5rem; background: #f9fafb; border-radius: 0.5rem;">
          <h3 style="margin-top: 0;">Form Example</h3>
          <input 
            type="text" 
            placeholder="Enter some data"
            style="width: 100%; padding: 0.75rem; border: 1px solid #d1d5db; border-radius: 0.375rem; margin-bottom: 1rem;"
          />
          <button 
            style="padding: 0.75rem 1.5rem; background: #3b82f6; color: white; border: none; border-radius: 0.375rem; cursor: pointer;"
          >
            Submit
          </button>
        </div>
      </div>
      
      <div style="border: 1px solid #e5e7eb; border-radius: 0.5rem; overflow: hidden; background: white;">
        <eva-chat-panel assistant-name="Help Bot"></eva-chat-panel>
      </div>
    </div>
  `,
};

/**
 * Accessibility features and WCAG 2.2 AA compliance.
 * 
 * - **Live Region**: Debounced aria-live announcements for new messages (Task #6)
 * - **Keyboard Navigation**: Enter to send, Tab to navigate inputs/buttons
 * - **Focus Management**: Input field receives focus after sending message
 * - **Screen Readers**: Messages announced with type (user/assistant) and timestamp
 * - **Color Contrast**: User/assistant messages have distinct, high-contrast colors
 * - **Scrolling**: Auto-scrolls to latest message, smooth scroll behavior
 */
export const AccessibilityNotes: Story = {
  render: () => html`
    <div style="padding: 1.5rem; background: #f9fafb; border-radius: 0.5rem;">
      <h3 style="margin-top: 0;">Chat Panel Accessibility</h3>
      
      <div style="margin-bottom: 1.5rem;">
        <h4>Keyboard Support</h4>
        <ul style="line-height: 1.8;">
          <li>Enter sends message from input field</li>
          <li>Tab navigates between input and send button</li>
          <li>Shift+Enter adds new line in input</li>
          <li>Arrow keys navigate message history (if scrollable)</li>
        </ul>
      </div>

      <div style="margin-bottom: 1.5rem;">
        <h4>Screen Reader Support</h4>
        <ul style="line-height: 1.8;">
          <li>Debounced live region announces new messages (Task #6)</li>
          <li>500ms debounce prevents announcement overload</li>
          <li>Messages include sender type (user/assistant)</li>
          <li>Timestamps provided for context</li>
          <li>Input field properly labeled</li>
        </ul>
      </div>

      <div style="margin-bottom: 1.5rem;">
        <h4>Enhanced Features (Task #6)</h4>
        <p style="margin: 0; padding: 0.75rem; background: #fef3c7; border-radius: 0.375rem;">
          ✨ Added debounced live region to prevent screen reader announcement spam during rapid message exchanges
        </p>
      </div>

      <div style="max-width: 600px; height: 400px; margin-bottom: 1.5rem;">
        <eva-chat-panel></eva-chat-panel>
      </div>

      <div style="padding: 1rem; background: white; border-radius: 0.375rem;">
        <p style="margin: 0; font-size: 0.875rem; color: #6b7280;">
          ✓ WCAG 2.2 Level AA Compliant<br>
          ✓ Debounced live announcements<br>
          ✓ Keyboard navigable<br>
          ✓ High contrast messages
        </p>
      </div>
    </div>
  `,
};
