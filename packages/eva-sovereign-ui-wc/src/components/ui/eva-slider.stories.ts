import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';
import './eva-slider';
import './eva-label';

const meta: Meta = {
  title: 'UI/Slider',
  component: 'eva-slider',
  tags: ['autodocs'],
  argTypes: {
    value: {
      control: { type: 'number', min: 0, max: 100, step: 1 },
      description: 'Current slider value',
      defaultValue: 50,
    },
    min: {
      control: 'number',
      description: 'Minimum value',
      defaultValue: 0,
    },
    max: {
      control: 'number',
      description: 'Maximum value',
      defaultValue: 100,
    },
    step: {
      control: 'number',
      description: 'Step increment',
      defaultValue: 1,
    },
    disabled: {
      control: 'boolean',
      description: 'Disable the slider',
      defaultValue: false,
    },
  },
  parameters: {
    docs: {
      description: {
        component: 'Range slider component with keyboard navigation and WCAG 2.2 AA compliance. Supports single-thumb horizontal sliders with customizable min, max, and step values.',
      },
    },
    a11y: {
      config: {
        rules: [
          { id: 'color-contrast', enabled: true },
          { id: 'label', enabled: true },
          { id: 'keyboard-focus', enabled: true },
        ],
      },
    },
  },
};

export default meta;
type Story = StoryObj;

export const Default: Story = {
  args: {
    value: 50,
    min: 0,
    max: 100,
    step: 1,
  },
  render: (args) => html`
    <eva-slider
      value="${args.value}"
      min="${args.min}"
      max="${args.max}"
      step="${args.step}"
      ?disabled="${args.disabled}"
      aria-label="Default slider"
    ></eva-slider>
  `,
};

export const WithLabel: Story = {
  render: () => html`
    <div style="display: flex; flex-direction: column; gap: 0.5rem; max-width: 400px;">
      <div style="display: flex; justify-content: space-between; align-items: center;">
        <eva-label for="volume-slider">Volume</eva-label>
        <span id="volume-value" style="font-weight: 600;">50%</span>
      </div>
      <eva-slider
        id="volume-slider"
        value="50"
        min="0"
        max="100"
        step="1"
        aria-label="Volume control"
      ></eva-slider>
    </div>
    <script>
      const slider = document.getElementById('volume-slider');
      const valueDisplay = document.getElementById('volume-value');
      slider.addEventListener('input', (e) => {
        valueDisplay.textContent = e.detail.value + '%';
      });
    </script>
  `,
};

export const CustomRange: Story = {
  render: () => html`
    <div style="display: flex; flex-direction: column; gap: 0.5rem; max-width: 400px;">
      <div style="display: flex; justify-content: space-between; align-items: center;">
        <eva-label for="price-slider">Price Range</eva-label>
        <span id="price-value" style="font-weight: 600;">$500</span>
      </div>
      <eva-slider
        id="price-slider"
        value="500"
        min="0"
        max="1000"
        step="50"
        aria-label="Price range selector"
      ></eva-slider>
      <div style="display: flex; justify-content: space-between; font-size: 0.875rem; color: #666;">
        <span>$0</span>
        <span>$1000</span>
      </div>
    </div>
    <script>
      const priceSlider = document.getElementById('price-slider');
      const priceDisplay = document.getElementById('price-value');
      priceSlider.addEventListener('input', (e) => {
        priceDisplay.textContent = '$' + e.detail.value;
      });
    </script>
  `,
};

export const TemperatureControl: Story = {
  render: () => html`
    <div style="display: flex; flex-direction: column; gap: 0.5rem; max-width: 400px;">
      <div style="display: flex; justify-content: space-between; align-items: center;">
        <eva-label for="temp-slider">Temperature</eva-label>
        <span id="temp-value" style="font-weight: 600;">20°C</span>
      </div>
      <eva-slider
        id="temp-slider"
        value="20"
        min="10"
        max="30"
        step="0.5"
        aria-label="Temperature control"
      ></eva-slider>
      <div style="display: flex; justify-content: space-between; font-size: 0.875rem; color: #666;">
        <span>10°C (Cold)</span>
        <span>30°C (Hot)</span>
      </div>
    </div>
    <script>
      const tempSlider = document.getElementById('temp-slider');
      const tempDisplay = document.getElementById('temp-value');
      tempSlider.addEventListener('input', (e) => {
        tempDisplay.textContent = e.detail.value + '°C';
      });
    </script>
  `,
};

export const Brightness: Story = {
  render: () => html`
    <div style="display: flex; flex-direction: column; gap: 0.5rem; max-width: 400px;">
      <div style="display: flex; justify-content: space-between; align-items: center;">
        <eva-label for="brightness-slider">Brightness</eva-label>
        <span id="brightness-value" style="font-weight: 600;">75%</span>
      </div>
      <eva-slider
        id="brightness-slider"
        value="75"
        min="0"
        max="100"
        step="5"
        aria-label="Screen brightness"
      ></eva-slider>
      <div id="brightness-preview" style="
        height: 100px;
        background: linear-gradient(to right, #000, #fff);
        border-radius: 4px;
        border: 1px solid #e0e0e0;
        transition: opacity 0.2s;
        opacity: 0.75;
      "></div>
    </div>
    <script>
      const brightnessSlider = document.getElementById('brightness-slider');
      const brightnessDisplay = document.getElementById('brightness-value');
      const brightnessPreview = document.getElementById('brightness-preview');
      brightnessSlider.addEventListener('input', (e) => {
        const value = e.detail.value;
        brightnessDisplay.textContent = value + '%';
        brightnessPreview.style.opacity = value / 100;
      });
    </script>
  `,
};

export const Disabled: Story = {
  render: () => html`
    <div style="display: flex; flex-direction: column; gap: 1.5rem; max-width: 400px;">
      <div>
        <eva-label>Disabled at 25</eva-label>
        <eva-slider value="25" disabled aria-label="Disabled slider at 25%"></eva-slider>
      </div>
      <div>
        <eva-label>Disabled at 75</eva-label>
        <eva-slider value="75" disabled aria-label="Disabled slider at 75%"></eva-slider>
      </div>
    </div>
  `,
};

export const MultipleSliders: Story = {
  render: () => html`
    <div style="display: flex; flex-direction: column; gap: 2rem; max-width: 400px;">
      <h3 style="margin: 0;">Audio Settings</h3>

      <div>
        <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 0.5rem;">
          <eva-label for="master-volume">Master Volume</eva-label>
          <span id="master-value" style="font-weight: 600;">80%</span>
        </div>
        <eva-slider id="master-volume" value="80" aria-label="Master volume"></eva-slider>
      </div>

      <div>
        <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 0.5rem;">
          <eva-label for="music-volume">Music</eva-label>
          <span id="music-value" style="font-weight: 600;">60%</span>
        </div>
        <eva-slider id="music-volume" value="60" aria-label="Music volume"></eva-slider>
      </div>

      <div>
        <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 0.5rem;">
          <eva-label for="effects-volume">Sound Effects</eva-label>
          <span id="effects-value" style="font-weight: 600;">70%</span>
        </div>
        <eva-slider id="effects-volume" value="70" aria-label="Sound effects volume"></eva-slider>
      </div>

      <div>
        <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 0.5rem;">
          <eva-label for="voice-volume">Voice</eva-label>
          <span id="voice-value" style="font-weight: 600;">90%</span>
        </div>
        <eva-slider id="voice-volume" value="90" aria-label="Voice volume"></eva-slider>
      </div>

      <eva-gc-button>Save Settings</eva-gc-button>
    </div>
    <script>
      ['master', 'music', 'effects', 'voice'].forEach(type => {
        const slider = document.getElementById(type + '-volume');
        const display = document.getElementById(type + '-value');
        slider.addEventListener('input', (e) => {
          display.textContent = e.detail.value + '%';
        });
      });
    </script>
  `,
  parameters: {
    docs: {
      description: {
        story: 'Multiple sliders for controlling different audio settings.',
      },
    },
  },
};

export const StepVariations: Story = {
  render: () => html`
    <div style="display: flex; flex-direction: column; gap: 2rem; max-width: 400px;">
      <div>
        <h4 style="margin: 0 0 0.5rem 0;">Fine Control (step=1)</h4>
        <eva-slider value="50" min="0" max="100" step="1" aria-label="Fine control slider"></eva-slider>
      </div>

      <div>
        <h4 style="margin: 0 0 0.5rem 0;">Coarse Control (step=10)</h4>
        <eva-slider value="50" min="0" max="100" step="10" aria-label="Coarse control slider"></eva-slider>
      </div>

      <div>
        <h4 style="margin: 0 0 0.5rem 0;">Decimal Steps (step=0.1)</h4>
        <eva-slider value="5.5" min="0" max="10" step="0.1" aria-label="Decimal steps slider"></eva-slider>
      </div>

      <div>
        <h4 style="margin: 0 0 0.5rem 0;">Large Steps (step=25)</h4>
        <eva-slider value="50" min="0" max="100" step="25" aria-label="Large steps slider"></eva-slider>
      </div>
    </div>
  `,
  parameters: {
    docs: {
      description: {
        story: 'Demonstration of different step values for slider precision.',
      },
    },
  },
};

export const AllStates: Story = {
  render: () => html`
    <div style="display: flex; flex-direction: column; gap: 2rem; max-width: 400px;">
      <div>
        <h4>Default (50%)</h4>
        <eva-slider value="50" aria-label="Default state slider"></eva-slider>
      </div>

      <div>
        <h4>Minimum Value (0%)</h4>
        <eva-slider value="0" aria-label="Minimum value slider"></eva-slider>
      </div>

      <div>
        <h4>Maximum Value (100%)</h4>
        <eva-slider value="100" aria-label="Maximum value slider"></eva-slider>
      </div>

      <div>
        <h4>Quarter (25%)</h4>
        <eva-slider value="25" aria-label="Quarter value slider"></eva-slider>
      </div>

      <div>
        <h4>Three Quarters (75%)</h4>
        <eva-slider value="75" aria-label="Three quarters slider"></eva-slider>
      </div>

      <div>
        <h4>Disabled</h4>
        <eva-slider value="50" disabled aria-label="Disabled slider"></eva-slider>
      </div>

      <div>
        <h4>Custom Range (200-800)</h4>
        <eva-slider value="500" min="200" max="800" aria-label="Custom range slider"></eva-slider>
      </div>
    </div>
  `,
  parameters: {
    docs: {
      description: {
        story: 'Comprehensive showcase of all slider states and configurations.',
      },
    },
  },
};

export const AccessibilityNotes: Story = {
  render: () => html`
    <div style="max-width: 600px;">
      <h3>Accessibility Features</h3>
      <ul>
        <li><strong>Keyboard Navigation:</strong> Use Arrow keys (←/→) to adjust value, Home/End for min/max</li>
        <li><strong>Screen Reader Support:</strong> Always include aria-label describing the slider purpose</li>
        <li><strong>Visual Feedback:</strong> Clear track and thumb with focus indicators</li>
        <li><strong>Color Contrast:</strong> All elements meet WCAG 2.2 AA standards (4.5:1 minimum)</li>
        <li><strong>Touch Friendly:</strong> Large thumb target for mobile devices</li>
        <li><strong>Value Display:</strong> Consider showing current value for better UX</li>
      </ul>
      
      <div style="margin-top: 1.5rem;">
        <h4>Try Keyboard Controls:</h4>
        <div style="display: flex; flex-direction: column; gap: 0.5rem; max-width: 400px;">
          <eva-label for="keyboard-slider">Use keyboard to adjust</eva-label>
          <eva-slider id="keyboard-slider" value="50" aria-label="Keyboard controlled slider"></eva-slider>
          <p style="margin: 0.5rem 0 0 0; font-size: 0.875rem; color: #666;">
            Press Tab to focus, then use Arrow keys to adjust, Home for minimum, End for maximum
          </p>
        </div>
      </div>
    </div>
  `,
  parameters: {
    docs: {
      description: {
        story: 'Comprehensive accessibility features and keyboard shortcuts for the slider component.',
      },
    },
  },
};
