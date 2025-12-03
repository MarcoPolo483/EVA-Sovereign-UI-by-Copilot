import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';
import './eva-toggle-group';

/**
 * ## EVA Toggle Group
 * 
 * Group of toggle buttons with single or multiple selection.
 * 
 * ### Features:
 * - Single selection mode (radio-like behavior)
 * - Multiple selection mode (checkbox-like behavior)
 * - Variants: default, outline
 * - Sizes: sm, default, lg
 * - aria-pressed state management
 * - Change events with selected values
 * 
 * ### Usage:
 * ```html
 * <eva-toggle-group type="single" value="center">
 *   <eva-toggle-group-item value="left">Left</eva-toggle-group-item>
 *   <eva-toggle-group-item value="center">Center</eva-toggle-group-item>
 *   <eva-toggle-group-item value="right">Right</eva-toggle-group-item>
 * </eva-toggle-group>
 * ```
 */
const meta: Meta = {
  title: 'Components/Toggle Group',
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: 'Toggle button group with single or multiple selection modes.',
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

/**
 * Default toggle group with single selection.
 */
export const Default: Story = {
  render: () => html`
    <eva-toggle-group type="single" value="center">
      <eva-toggle-group-item value="left">Left</eva-toggle-group-item>
      <eva-toggle-group-item value="center">Center</eva-toggle-group-item>
      <eva-toggle-group-item value="right">Right</eva-toggle-group-item>
    </eva-toggle-group>
  `,
};

/**
 * Text alignment toggle group.
 */
export const TextAlignment: Story = {
  render: () => html`
    <div>
      <p style="margin-bottom: 1rem;">Text Alignment Controls</p>
      <eva-toggle-group type="single" value="left">
        <eva-toggle-group-item value="left">
          <span style="font-weight: bold;">⬅</span>
        </eva-toggle-group-item>
        <eva-toggle-group-item value="center">
          <span style="font-weight: bold;">↕</span>
        </eva-toggle-group-item>
        <eva-toggle-group-item value="right">
          <span style="font-weight: bold;">➡</span>
        </eva-toggle-group-item>
        <eva-toggle-group-item value="justify">
          <span style="font-weight: bold;">⬌</span>
        </eva-toggle-group-item>
      </eva-toggle-group>
      <div style="margin-top: 1.5rem; padding: 1rem; background: #f9fafb; border: 1px solid #e5e7eb; border-radius: 0.5rem;">
        <p style="margin: 0; text-align: left;">Sample text that can be aligned using the controls above.</p>
      </div>
    </div>
  `,
};

/**
 * Text formatting toolbar with multiple selection.
 */
export const TextFormatting: Story = {
  render: () => html`
    <div>
      <p style="margin-bottom: 1rem;">Text Formatting Toolbar</p>
      <div style="display: flex; gap: 1rem; flex-wrap: wrap;">
        <eva-toggle-group type="multiple">
          <eva-toggle-group-item value="bold">
            <strong>B</strong>
          </eva-toggle-group-item>
          <eva-toggle-group-item value="italic">
            <em>I</em>
          </eva-toggle-group-item>
          <eva-toggle-group-item value="underline">
            <span style="text-decoration: underline;">U</span>
          </eva-toggle-group-item>
          <eva-toggle-group-item value="strikethrough">
            <span style="text-decoration: line-through;">S</span>
          </eva-toggle-group-item>
        </eva-toggle-group>

        <eva-toggle-group type="single" value="left">
          <eva-toggle-group-item value="left">⬅</eva-toggle-group-item>
          <eva-toggle-group-item value="center">↕</eva-toggle-group-item>
          <eva-toggle-group-item value="right">➡</eva-toggle-group-item>
        </eva-toggle-group>
      </div>
    </div>
  `,
};

/**
 * View mode toggle (list/grid).
 */
export const ViewMode: Story = {
  render: () => html`
    <div>
      <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 1rem;">
        <h3 style="margin: 0;">Products</h3>
        <eva-toggle-group type="single" value="grid">
          <eva-toggle-group-item value="list">
            <span style="font-size: 1.25rem;">☰</span>
          </eva-toggle-group-item>
          <eva-toggle-group-item value="grid">
            <span style="font-size: 1.25rem;">⊞</span>
          </eva-toggle-group-item>
        </eva-toggle-group>
      </div>
      <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 1rem;">
        <div style="padding: 1rem; background: white; border: 1px solid #e5e7eb; border-radius: 0.5rem; text-align: center;">
          <div style="width: 100%; height: 100px; background: #dbeafe; border-radius: 0.5rem; margin-bottom: 0.5rem;"></div>
          <p style="margin: 0; font-weight: 500;">Product 1</p>
        </div>
        <div style="padding: 1rem; background: white; border: 1px solid #e5e7eb; border-radius: 0.5rem; text-align: center;">
          <div style="width: 100%; height: 100px; background: #fef3c7; border-radius: 0.5rem; margin-bottom: 0.5rem;"></div>
          <p style="margin: 0; font-weight: 500;">Product 2</p>
        </div>
        <div style="padding: 1rem; background: white; border: 1px solid #e5e7eb; border-radius: 0.5rem; text-align: center;">
          <div style="width: 100%; height: 100px; background: #fce7f3; border-radius: 0.5rem; margin-bottom: 0.5rem;"></div>
          <p style="margin: 0; font-weight: 500;">Product 3</p>
        </div>
      </div>
    </div>
  `,
};

/**
 * Size variants (sm, default, lg).
 */
export const Sizes: Story = {
  render: () => html`
    <div style="display: flex; flex-direction: column; gap: 1.5rem;">
      <div>
        <p style="margin-bottom: 0.5rem; font-size: 0.875rem; color: #6b7280;">Small</p>
        <eva-toggle-group type="single" size="sm">
          <eva-toggle-group-item value="1">One</eva-toggle-group-item>
          <eva-toggle-group-item value="2">Two</eva-toggle-group-item>
          <eva-toggle-group-item value="3">Three</eva-toggle-group-item>
        </eva-toggle-group>
      </div>

      <div>
        <p style="margin-bottom: 0.5rem; font-size: 0.875rem; color: #6b7280;">Default</p>
        <eva-toggle-group type="single">
          <eva-toggle-group-item value="1">One</eva-toggle-group-item>
          <eva-toggle-group-item value="2">Two</eva-toggle-group-item>
          <eva-toggle-group-item value="3">Three</eva-toggle-group-item>
        </eva-toggle-group>
      </div>

      <div>
        <p style="margin-bottom: 0.5rem; font-size: 0.875rem; color: #6b7280;">Large</p>
        <eva-toggle-group type="single" size="lg">
          <eva-toggle-group-item value="1">One</eva-toggle-group-item>
          <eva-toggle-group-item value="2">Two</eva-toggle-group-item>
          <eva-toggle-group-item value="3">Three</eva-toggle-group-item>
        </eva-toggle-group>
      </div>
    </div>
  `,
};

/**
 * Outline variant.
 */
export const Outline: Story = {
  render: () => html`
    <div style="display: flex; flex-direction: column; gap: 1.5rem;">
      <div>
        <p style="margin-bottom: 0.5rem; font-size: 0.875rem; color: #6b7280;">Default Variant</p>
        <eva-toggle-group type="single" value="center">
          <eva-toggle-group-item value="left">Left</eva-toggle-group-item>
          <eva-toggle-group-item value="center">Center</eva-toggle-group-item>
          <eva-toggle-group-item value="right">Right</eva-toggle-group-item>
        </eva-toggle-group>
      </div>

      <div>
        <p style="margin-bottom: 0.5rem; font-size: 0.875rem; color: #6b7280;">Outline Variant</p>
        <eva-toggle-group type="single" variant="outline" value="center">
          <eva-toggle-group-item value="left">Left</eva-toggle-group-item>
          <eva-toggle-group-item value="center">Center</eva-toggle-group-item>
          <eva-toggle-group-item value="right">Right</eva-toggle-group-item>
        </eva-toggle-group>
      </div>
    </div>
  `,
};

/**
 * Disabled state.
 */
export const Disabled: Story = {
  render: () => html`
    <div style="display: flex; flex-direction: column; gap: 1.5rem;">
      <div>
        <p style="margin-bottom: 0.5rem; font-size: 0.875rem; color: #6b7280;">Active</p>
        <eva-toggle-group type="single" value="center">
          <eva-toggle-group-item value="left">Left</eva-toggle-group-item>
          <eva-toggle-group-item value="center">Center</eva-toggle-group-item>
          <eva-toggle-group-item value="right">Right</eva-toggle-group-item>
        </eva-toggle-group>
      </div>

      <div>
        <p style="margin-bottom: 0.5rem; font-size: 0.875rem; color: #6b7280;">Disabled</p>
        <eva-toggle-group type="single" value="center" disabled>
          <eva-toggle-group-item value="left">Left</eva-toggle-group-item>
          <eva-toggle-group-item value="center">Center</eva-toggle-group-item>
          <eva-toggle-group-item value="right">Right</eva-toggle-group-item>
        </eva-toggle-group>
      </div>
    </div>
  `,
};

/**
 * Toggle group states and modes.
 */
export const AllStates: Story = {
  render: () => html`
    <div style="display: flex; flex-direction: column; gap: 2rem;">
      <div>
        <h4 style="margin-bottom: 0.5rem;">Single Selection (Radio Behavior)</h4>
        <eva-toggle-group type="single" value="option2">
          <eva-toggle-group-item value="option1">Option 1</eva-toggle-group-item>
          <eva-toggle-group-item value="option2">Option 2</eva-toggle-group-item>
          <eva-toggle-group-item value="option3">Option 3</eva-toggle-group-item>
        </eva-toggle-group>
      </div>

      <div>
        <h4 style="margin-bottom: 0.5rem;">Multiple Selection (Checkbox Behavior)</h4>
        <eva-toggle-group type="multiple">
          <eva-toggle-group-item value="feature1">Feature 1</eva-toggle-group-item>
          <eva-toggle-group-item value="feature2">Feature 2</eva-toggle-group-item>
          <eva-toggle-group-item value="feature3">Feature 3</eva-toggle-group-item>
        </eva-toggle-group>
      </div>

      <div style="padding: 1rem; background: #f0f9ff; border: 1px solid #bfdbfe; border-radius: 0.5rem;">
        <h4 style="margin-top: 0;">Usage Notes</h4>
        <ul style="margin: 0.5rem 0; padding-left: 1.5rem; line-height: 1.8;">
          <li><strong>Single mode:</strong> Only one item can be selected (radio behavior)</li>
          <li><strong>Multiple mode:</strong> Multiple items can be selected (checkbox behavior)</li>
          <li><strong>Value attribute:</strong> Set default selection on toggle-group</li>
          <li><strong>Change event:</strong> Emitted when selection changes</li>
        </ul>
      </div>
    </div>
  `,
};

/**
 * Accessibility features and WCAG 2.2 AA compliance.
 * 
 * - **Keyboard Navigation**: Tab navigates between items, Space toggles selection
 * - **ARIA States**: aria-pressed attribute indicates pressed/unpressed state
 * - **Focus Management**: Visible focus indicators on all toggle items
 * - **Screen Readers**: Button role with pressed state announced
 * - **Color Contrast**: WCAG AA compliant colors (4.5:1 for text, 3:1 for components)
 * - **Visual Feedback**: Clear distinction between pressed and unpressed states
 */
export const AccessibilityNotes: Story = {
  render: () => html`
    <div style="padding: 1.5rem; background: #f9fafb; border-radius: 0.5rem;">
      <h3 style="margin-top: 0;">Toggle Group Accessibility</h3>
      
      <div style="margin-bottom: 1.5rem;">
        <h4>Keyboard Support</h4>
        <ul style="line-height: 1.8;">
          <li>Tab navigates between toggle items</li>
          <li>Space/Enter toggles selection</li>
          <li>Arrow keys navigate within group (if implemented)</li>
        </ul>
      </div>

      <div style="margin-bottom: 1.5rem;">
        <h4>Screen Reader Support</h4>
        <ul style="line-height: 1.8;">
          <li>Each item has button role</li>
          <li>aria-pressed indicates selection state</li>
          <li>State changes announced ("pressed" / "not pressed")</li>
          <li>Clear labels for each toggle item</li>
        </ul>
      </div>

      <div style="margin-bottom: 1.5rem;">
        <h4>Enhanced Features (Task #4)</h4>
        <p style="margin: 0; padding: 0.75rem; background: #fef3c7; border-radius: 0.375rem;">
          ✨ aria-pressed attribute already verified on toggle items for proper state management
        </p>
      </div>

      <eva-toggle-group type="single" value="center">
        <eva-toggle-group-item value="left">Left</eva-toggle-group-item>
        <eva-toggle-group-item value="center">Center</eva-toggle-group-item>
        <eva-toggle-group-item value="right">Right</eva-toggle-group-item>
      </eva-toggle-group>

      <div style="margin-top: 1.5rem; padding: 1rem; background: white; border-radius: 0.375rem;">
        <p style="margin: 0; font-size: 0.875rem; color: #6b7280;">
          ✓ WCAG 2.2 Level AA Compliant<br>
          ✓ Keyboard navigable<br>
          ✓ Screen reader friendly<br>
          ✓ Clear visual states
        </p>
      </div>
    </div>
  `,
};
