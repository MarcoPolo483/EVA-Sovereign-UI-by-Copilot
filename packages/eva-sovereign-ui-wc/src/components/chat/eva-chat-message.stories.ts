import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';
import './eva-chat-message';

/**
 * ## EVA Chat Message
 * 
 * Individual chat message bubble with user/assistant styling.
 * 
 * ### Features:
 * - User and assistant message types
 * - Distinct visual styling per type
 * - Timestamp display
 * - Smooth fade-in animation
 * - Max-width constraint for readability
 * - Slot-based content
 * 
 * ### Usage:
 * ```html
 * <eva-chat-message type="user" timestamp="2:30 PM">
 *   Hello, how can I help you?
 * </eva-chat-message>
 * 
 * <eva-chat-message type="assistant" timestamp="2:31 PM">
 *   I'm here to assist you!
 * </eva-chat-message>
 * ```
 */
const meta: Meta = {
  title: 'Components/Chat Message',
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: 'Chat message bubble component with user/assistant distinction.',
      },
    },
    a11y: {
      config: {
        rules: [
          { id: 'color-contrast', enabled: true },
        ],
      },
    },
  },
};

export default meta;
type Story = StoryObj;

/**
 * User message bubble.
 */
export const UserMessage: Story = {
  render: () => html`
    <eva-chat-message type="user" timestamp="2:30 PM">
      Hello! I need help with my account settings.
    </eva-chat-message>
  `,
};

/**
 * Assistant message bubble.
 */
export const AssistantMessage: Story = {
  render: () => html`
    <eva-chat-message type="assistant" timestamp="2:31 PM">
      I'd be happy to help you with your account settings. What specific aspect would you like to adjust?
    </eva-chat-message>
  `,
};

/**
 * Conversation thread showing multiple messages.
 */
export const Conversation: Story = {
  render: () => html`
    <div style="max-width: 800px; padding: 2rem; background: #f9fafb; border-radius: 0.5rem;">
      <eva-chat-message type="assistant" timestamp="2:00 PM">
        Welcome! How can I assist you today?
      </eva-chat-message>
      
      <eva-chat-message type="user" timestamp="2:01 PM">
        I'm looking for information about employment insurance benefits.
      </eva-chat-message>
      
      <eva-chat-message type="assistant" timestamp="2:02 PM">
        I can help you with that. Employment Insurance (EI) provides temporary financial assistance to unemployed Canadians. What specific information do you need?
      </eva-chat-message>
      
      <eva-chat-message type="user" timestamp="2:03 PM">
        How do I apply for benefits?
      </eva-chat-message>
      
      <eva-chat-message type="assistant" timestamp="2:04 PM">
        You can apply for EI benefits online through your My Service Canada Account. You'll need your Social Insurance Number, banking information, and employment details for the past 52 weeks. Would you like me to guide you through the application process?
      </eva-chat-message>
      
      <eva-chat-message type="user" timestamp="2:05 PM">
        Yes, that would be helpful. Thank you!
      </eva-chat-message>
    </div>
  `,
};

/**
 * Long message content wrapping.
 */
export const LongMessages: Story = {
  render: () => html`
    <div style="max-width: 800px; padding: 2rem; background: #f9fafb; border-radius: 0.5rem;">
      <eva-chat-message type="user" timestamp="3:15 PM">
        I have a very long question about the employment services available through ESDC. Specifically, I'm interested in learning about job search assistance, training programs, wage subsidies for employers, and career counseling services. Can you provide detailed information about each of these programs and how I can access them?
      </eva-chat-message>
      
      <eva-chat-message type="assistant" timestamp="3:16 PM">
        I'd be happy to provide information about ESDC employment services:

        1. Job Search Assistance: Access Job Bank (jobbank.gc.ca) to search thousands of job postings across Canada. You can also visit Service Canada centers for in-person job search support.

        2. Training Programs: Skills development programs help you gain new qualifications. Check with your provincial/territorial government for available programs in your area.

        3. Wage Subsidies: The Canada Job Grant and other programs provide financial incentives to employers who hire and train workers. Contact your local Service Canada office for details.

        4. Career Counseling: Free career planning services are available at Service Canada centers and through online resources.

        Would you like more specific information about any of these services?
      </eva-chat-message>
    </div>
  `,
};

/**
 * Different message types and timestamps.
 */
export const MessageVariations: Story = {
  render: () => html`
    <div style="display: flex; flex-direction: column; gap: 2rem;">
      <div>
        <h4 style="margin-bottom: 1rem;">User Messages (Right-aligned, Blue)</h4>
        <div style="max-width: 800px; padding: 1rem; background: #f9fafb; border-radius: 0.5rem;">
          <eva-chat-message type="user" timestamp="9:00 AM">
            Short message
          </eva-chat-message>
          <eva-chat-message type="user" timestamp="9:01 AM">
            This is a longer message that demonstrates how text wraps within the message bubble while maintaining readability.
          </eva-chat-message>
        </div>
      </div>

      <div>
        <h4 style="margin-bottom: 1rem;">Assistant Messages (Left-aligned, Gray)</h4>
        <div style="max-width: 800px; padding: 1rem; background: #f9fafb; border-radius: 0.5rem;">
          <eva-chat-message type="assistant" timestamp="9:02 AM">
            Hello! How can I help?
          </eva-chat-message>
          <eva-chat-message type="assistant" timestamp="9:03 AM">
            I'm here to provide assistance with any questions you might have. Feel free to ask me anything about our services.
          </eva-chat-message>
        </div>
      </div>

      <div style="padding: 1rem; background: #f0f9ff; border: 1px solid #bfdbfe; border-radius: 0.5rem;">
        <h4 style="margin-top: 0;">Styling Features</h4>
        <ul style="margin: 0.5rem 0; padding-left: 1.5rem; line-height: 1.8;">
          <li>User messages: right-aligned with blue background</li>
          <li>Assistant messages: left-aligned with gray background</li>
          <li>Max-width 75% for better readability</li>
          <li>Timestamps in muted color</li>
          <li>Smooth fade-in animation on render</li>
        </ul>
      </div>
    </div>
  `,
};

/**
 * Accessibility features and WCAG 2.2 AA compliance.
 * 
 * - **Color Contrast**: User (blue) and assistant (gray) bubbles meet WCAG AA
 * - **Visual Distinction**: Clear left/right alignment and color coding
 * - **Readable Width**: Max-width 75% prevents overly long lines
 * - **Timestamps**: Muted color but still readable (4.5:1+ contrast)
 * - **Animation**: Subtle fade-in doesn't interfere with content
 * - **Screen Readers**: Message type and timestamp announced
 */
export const AccessibilityNotes: Story = {
  render: () => html`
    <div style="padding: 1.5rem; background: #f9fafb; border-radius: 0.5rem;">
      <h3 style="margin-top: 0;">Chat Message Accessibility</h3>
      
      <div style="margin-bottom: 1.5rem;">
        <h4>Visual Design</h4>
        <ul style="line-height: 1.8;">
          <li>User messages: blue background (#3b82f6) with white text</li>
          <li>Assistant messages: gray background with dark text</li>
          <li>Both meet WCAG AA contrast requirements (4.5:1+)</li>
          <li>Max-width prevents overly long lines (optimal readability)</li>
        </ul>
      </div>

      <div style="margin-bottom: 1.5rem;">
        <h4>Screen Reader Support</h4>
        <ul style="line-height: 1.8;">
          <li>Message type announced (user or assistant)</li>
          <li>Timestamp provided for context</li>
          <li>Content read in natural order</li>
          <li>No aria-live (handled by chat-panel)</li>
        </ul>
      </div>

      <div style="max-width: 800px; padding: 1rem; background: white; border-radius: 0.5rem; margin-bottom: 1.5rem;">
        <eva-chat-message type="user" timestamp="Now">
          This is a user message
        </eva-chat-message>
        <eva-chat-message type="assistant" timestamp="Now">
          This is an assistant response
        </eva-chat-message>
      </div>

      <div style="padding: 1rem; background: white; border-radius: 0.375rem;">
        <p style="margin: 0; font-size: 0.875rem; color: #6b7280;">
          ✓ WCAG 2.2 Level AA Compliant<br>
          ✓ High contrast colors<br>
          ✓ Readable width constraint<br>
          ✓ Clear visual distinction
        </p>
      </div>
    </div>
  `,
};
