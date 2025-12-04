import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';
import './eva-input-otp';

/**
 * ## EVA Input OTP
 * 
 * One-time password (OTP) input component with auto-focus and paste support.
 * 
 * ### Features:
 * - Configurable number of digits (max-length attribute)
 * - Auto-focus next input on digit entry
 * - Paste support (splits pasted code across inputs)
 * - Backspace navigation (moves to previous input)
 * - Arrow key navigation (Left/Right)
 * - Accessible with proper labels
 * - Change event with complete code
 * 
 * ### Usage:
 * ```html
 * <eva-input-otp max-length="6"></eva-input-otp>
 * ```
 */
const meta: Meta = {
  title: 'Components/Input OTP',
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: 'OTP/PIN input with auto-focus, paste support, and keyboard navigation.',
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
 * Default 6-digit OTP input.
 */
export const Default: Story = {
  render: () => html`
    <eva-input-otp max-length="6"></eva-input-otp>
  `,
};

/**
 * Two-factor authentication code input.
 */
export const TwoFactorAuth: Story = {
  render: () => html`
    <div style="max-width: 400px; margin: 0 auto; padding: 2rem; border: 1px solid #e5e7eb; border-radius: 0.5rem; text-align: center;">
      <h3 style="margin-bottom: 0.5rem;">Two-Factor Authentication</h3>
      <p style="margin-bottom: 1.5rem; color: #6b7280;">
        Enter the 6-digit code from your authenticator app
      </p>
      <eva-input-otp 
        max-length="6"
        @change=${(e: CustomEvent) => {
          console.log('OTP entered:', e.detail.value);
        }}
      ></eva-input-otp>
      <div style="margin-top: 1.5rem; padding: 1rem; background: #f0f9ff; border: 1px solid #bfdbfe; border-radius: 0.5rem; text-align: left;">
        <p style="margin: 0; font-size: 0.875rem; color: #1e40af;">
          💡 <strong>Tip:</strong> You can paste your 6-digit code directly from your authenticator app.
        </p>
      </div>
      <button 
        style="margin-top: 1.5rem; width: 100%; padding: 0.75rem; background: #3b82f6; color: white; border: none; border-radius: 0.375rem; font-weight: 500; cursor: pointer;"
      >
        Verify Code
      </button>
    </div>
  `,
};

/**
 * Email verification code (4 digits).
 */
export const EmailVerification: Story = {
  render: () => html`
    <div style="max-width: 400px; margin: 0 auto; padding: 2rem; border: 1px solid #e5e7eb; border-radius: 0.5rem; text-align: center;">
      <div style="width: 64px; height: 64px; background: #dbeafe; border-radius: 9999px; display: flex; align-items: center; justify-content: center; margin: 0 auto 1rem; font-size: 2rem;">
        📧
      </div>
      <h3 style="margin-bottom: 0.5rem;">Verify Your Email</h3>
      <p style="margin-bottom: 1.5rem; color: #6b7280;">
        We sent a 4-digit code to<br><strong>user@example.com</strong>
      </p>
      <eva-input-otp max-length="4"></eva-input-otp>
      <button 
        style="margin-top: 1.5rem; width: 100%; padding: 0.75rem; background: #3b82f6; color: white; border: none; border-radius: 0.375rem; font-weight: 500; cursor: pointer;"
      >
        Confirm
      </button>
      <button 
        style="margin-top: 0.75rem; width: 100%; padding: 0.75rem; background: transparent; color: #3b82f6; border: none; font-weight: 500; cursor: pointer;"
      >
        Resend Code
      </button>
    </div>
  `,
};

/**
 * Phone verification (6 digits).
 */
export const PhoneVerification: Story = {
  render: () => html`
    <div style="max-width: 400px; margin: 0 auto; padding: 2rem; border: 1px solid #e5e7eb; border-radius: 0.5rem;">
      <h3 style="margin-bottom: 0.5rem;">Verify Phone Number</h3>
      <p style="margin-bottom: 1rem; color: #6b7280;">
        Enter the verification code sent to +1 (555) 123-4567
      </p>
      <label style="display: block; margin-bottom: 0.5rem; font-weight: 500;">
        Verification Code
      </label>
      <eva-input-otp max-length="6"></eva-input-otp>
      <div style="margin-top: 1rem; display: flex; justify-content: space-between; font-size: 0.875rem;">
        <span style="color: #6b7280;">Code expires in 5:00</span>
        <button style="background: none; border: none; color: #3b82f6; cursor: pointer; padding: 0; font-weight: 500;">
          Resend code
        </button>
      </div>
      <button 
        style="margin-top: 1.5rem; width: 100%; padding: 0.75rem; background: #3b82f6; color: white; border: none; border-radius: 0.375rem; font-weight: 500; cursor: pointer;"
      >
        Verify
      </button>
    </div>
  `,
};

/**
 * PIN input (4 digits).
 */
export const PinInput: Story = {
  render: () => html`
    <div style="max-width: 400px; margin: 0 auto; padding: 2rem; border: 1px solid #e5e7eb; border-radius: 0.5rem; text-align: center;">
      <div style="width: 64px; height: 64px; background: #fef3c7; border-radius: 9999px; display: flex; align-items: center; justify-content: center; margin: 0 auto 1rem; font-size: 2rem;">
        🔒
      </div>
      <h3 style="margin-bottom: 0.5rem;">Enter Your PIN</h3>
      <p style="margin-bottom: 1.5rem; color: #6b7280;">
        Enter your 4-digit PIN to continue
      </p>
      <eva-input-otp max-length="4"></eva-input-otp>
      <button 
        style="margin-top: 1.5rem; width: 100%; padding: 0.75rem; background: #3b82f6; color: white; border: none; border-radius: 0.375rem; font-weight: 500; cursor: pointer;"
      >
        Unlock
      </button>
      <button 
        style="margin-top: 0.75rem; width: 100%; padding: 0.75rem; background: transparent; color: #6b7280; border: none; font-size: 0.875rem; cursor: pointer;"
      >
        Forgot PIN?
      </button>
    </div>
  `,
};

/**
 * Different digit lengths.
 */
export const DifferentLengths: Story = {
  render: () => html`
    <div style="display: flex; flex-direction: column; gap: 2rem;">
      <div>
        <h4 style="margin-bottom: 0.5rem;">4 Digits</h4>
        <eva-input-otp max-length="4"></eva-input-otp>
      </div>

      <div>
        <h4 style="margin-bottom: 0.5rem;">6 Digits (Default)</h4>
        <eva-input-otp max-length="6"></eva-input-otp>
      </div>

      <div>
        <h4 style="margin-bottom: 0.5rem;">8 Digits</h4>
        <eva-input-otp max-length="8"></eva-input-otp>
      </div>
    </div>
  `,
};

/**
 * OTP input states and keyboard navigation.
 */
export const AllStates: Story = {
  render: () => html`
    <div style="display: flex; flex-direction: column; gap: 2rem;">
      <div>
        <h4 style="margin-bottom: 0.5rem;">Empty State</h4>
        <eva-input-otp max-length="6"></eva-input-otp>
      </div>

      <div>
        <h4 style="margin-bottom: 0.5rem;">With Value</h4>
        <eva-input-otp max-length="6" value="123456"></eva-input-otp>
      </div>

      <div style="padding: 1rem; background: #f0f9ff; border: 1px solid #bfdbfe; border-radius: 0.5rem;">
        <h4 style="margin-top: 0;">Keyboard Navigation</h4>
        <ul style="margin: 0.5rem 0; padding-left: 1.5rem; line-height: 1.8;">
          <li><strong>Type digit:</strong> Auto-focuses next input</li>
          <li><strong>Backspace on empty:</strong> Focuses previous input</li>
          <li><strong>Left Arrow:</strong> Move to previous input</li>
          <li><strong>Right Arrow:</strong> Move to next input</li>
          <li><strong>Paste:</strong> Distributes code across all inputs</li>
        </ul>
      </div>

      <div style="padding: 1rem; background: #fef3c7; border: 1px solid #fde68a; border-radius: 0.5rem;">
        <h4 style="margin-top: 0;">Paste Support</h4>
        <p style="margin: 0.5rem 0; line-height: 1.8;">
          Try copying this code: <strong style="background: white; padding: 0.25rem 0.5rem; border-radius: 0.25rem;">123456</strong>
          <br>Then paste it into the OTP input above. The code will automatically distribute across all input fields.
        </p>
      </div>
    </div>
  `,
};

/**
 * Accessibility features and WCAG 2.2 AA compliance.
 * 
 * - **Keyboard Navigation**: Arrow keys, Backspace, and Tab for navigation
 * - **Auto-Focus**: Automatically moves focus to next input on digit entry
 * - **Paste Support**: Handles pasted codes by distributing digits across inputs
 * - **Focus Management**: Clear focus indicators on all input fields
 * - **Screen Readers**: Proper labels and ARIA attributes for each input
 * - **Color Contrast**: WCAG AA compliant colors (4.5:1 for text)
 * - **Input Type**: Uses type="text" with maxLength=1 for better mobile keyboard
 */
export const AccessibilityNotes: Story = {
  render: () => html`
    <div style="padding: 1.5rem; background: #f9fafb; border-radius: 0.5rem;">
      <h3 style="margin-top: 0;">Input OTP Accessibility</h3>
      
      <div style="margin-bottom: 1.5rem;">
        <h4>Keyboard Support</h4>
        <ul style="line-height: 1.8;">
          <li>Type digit to enter and auto-advance</li>
          <li>Backspace on empty moves to previous input</li>
          <li>Left/Right arrows navigate between inputs</li>
          <li>Tab moves to next input (standard behavior)</li>
          <li>Paste distributes full code across inputs</li>
        </ul>
      </div>

      <div style="margin-bottom: 1.5rem;">
        <h4>Screen Reader Support</h4>
        <ul style="line-height: 1.8;">
          <li>Each input has accessible label</li>
          <li>Position announced (e.g., "Digit 1 of 6")</li>
          <li>Input type and maxLength communicated</li>
          <li>Focus changes announced</li>
        </ul>
      </div>

      <div style="margin-bottom: 1.5rem;">
        <h4>Mobile Considerations</h4>
        <ul style="line-height: 1.8;">
          <li>Numeric keyboard on mobile devices</li>
          <li>Auto-complete for SMS codes (if supported)</li>
          <li>Large touch targets for each input</li>
          <li>Paste from clipboard supported</li>
        </ul>
      </div>

      <eva-input-otp max-length="6"></eva-input-otp>

      <div style="margin-top: 1.5rem; padding: 1rem; background: white; border-radius: 0.375rem;">
        <p style="margin: 0; font-size: 0.875rem; color: #6b7280;">
          ✓ WCAG 2.2 Level AA Compliant<br>
          ✓ Keyboard navigable<br>
          ✓ Screen reader friendly<br>
          ✓ Mobile-optimized
        </p>
      </div>
    </div>
  `,
};
