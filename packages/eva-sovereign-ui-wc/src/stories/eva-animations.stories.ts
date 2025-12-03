/**
 * Animation System Stories
 * 
 * Interactive demonstrations of all 31 animations, transitions,
 * loading components, and accessibility features.
 */

import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';
import '../src/components/ui/eva-spinner';
import '../src/components/ui/eva-skeleton';

const meta: Meta = {
  title: 'Animation System/Overview',
  parameters: {
    docs: {
      description: {
        component: 'Comprehensive animation system with 31+ animations, transitions, and loading states.',
      },
    },
  },
};

export default meta;

// Fade Animations
export const FadeAnimations: StoryObj = {
  render: () => html`
    <div style="display: flex; gap: 24px; flex-wrap: wrap;">
      <div>
        <h3>Fade In</h3>
        <div class="animate-fade-in" style="padding: 20px; background: #f0f0f0; border-radius: 8px;">
          Content fades in smoothly
        </div>
      </div>
      <div>
        <h3>Fade Out</h3>
        <div class="animate-fade-out" style="padding: 20px; background: #f0f0f0; border-radius: 8px;">
          Content fades out
        </div>
      </div>
    </div>
  `,
};

// Slide Animations
export const SlideAnimations: StoryObj = {
  render: () => html`
    <div style="display: grid; grid-template-columns: repeat(2, 1fr); gap: 24px;">
      <div>
        <h3>Slide In - Top</h3>
        <div class="animate-slide-in-top" style="padding: 20px; background: #e3f2fd; border-radius: 8px;">
          Slides from top
        </div>
      </div>
      <div>
        <h3>Slide In - Bottom</h3>
        <div class="animate-slide-in-bottom" style="padding: 20px; background: #e8f5e9; border-radius: 8px;">
          Slides from bottom
        </div>
      </div>
      <div>
        <h3>Slide In - Left</h3>
        <div class="animate-slide-in-left" style="padding: 20px; background: #fff3e0; border-radius: 8px;">
          Slides from left
        </div>
      </div>
      <div>
        <h3>Slide In - Right</h3>
        <div class="animate-slide-in-right" style="padding: 20px; background: #fce4ec; border-radius: 8px;">
          Slides from right
        </div>
      </div>
    </div>
  `,
};

// Scale & Zoom Animations
export const ScaleZoomAnimations: StoryObj = {
  render: () => html`
    <div style="display: flex; gap: 24px; flex-wrap: wrap;">
      <div>
        <h3>Scale In</h3>
        <div class="animate-scale-in" style="padding: 20px; background: #f3e5f5; border-radius: 8px;">
          Scales from small
        </div>
      </div>
      <div>
        <h3>Zoom In</h3>
        <div class="animate-zoom-in" style="padding: 20px; background: #e0f2f1; border-radius: 8px;">
          Zooms into view
        </div>
      </div>
      <div>
        <h3>Zoom Out</h3>
        <div class="animate-zoom-out" style="padding: 20px; background: #fce4ec; border-radius: 8px;">
          Zooms out of view
        </div>
      </div>
    </div>
  `,
};

// Flip Animations
export const FlipAnimations: StoryObj = {
  render: () => html`
    <div style="display: flex; gap: 24px; flex-wrap: wrap;">
      <div style="perspective: 1000px;">
        <h3>Flip In</h3>
        <div class="animate-flip-in" style="padding: 20px; background: #ede7f6; border-radius: 8px;">
          Flips into view (3D)
        </div>
      </div>
      <div style="perspective: 1000px;">
        <h3>Flip Out</h3>
        <div class="animate-flip-out" style="padding: 20px; background: #e8eaf6; border-radius: 8px;">
          Flips out of view (3D)
        </div>
      </div>
    </div>
  `,
};

// Loading Animations
export const LoadingAnimations: StoryObj = {
  render: () => html`
    <div style="display: flex; gap: 24px; flex-wrap: wrap; align-items: center;">
      <div>
        <h3>Spin</h3>
        <div class="animate-spin" style="width: 32px; height: 32px; border: 3px solid #e0e0e0; border-top-color: #1976d2; border-radius: 50%;"></div>
      </div>
      <div>
        <h3>Spin Slow</h3>
        <div class="animate-spin-slow" style="width: 32px; height: 32px; border: 3px solid #e0e0e0; border-top-color: #388e3c; border-radius: 50%;"></div>
      </div>
      <div>
        <h3>Spin Fast</h3>
        <div class="animate-spin-fast" style="width: 32px; height: 32px; border: 3px solid #e0e0e0; border-top-color: #d32f2f; border-radius: 50%;"></div>
      </div>
      <div>
        <h3>Pulse</h3>
        <div class="animate-pulse" style="width: 32px; height: 32px; background: #7b1fa2; border-radius: 50%;"></div>
      </div>
      <div>
        <h3>Shimmer</h3>
        <div class="animate-shimmer" style="width: 200px; height: 20px; background: linear-gradient(90deg, #f0f0f0 0%, #e0e0e0 50%, #f0f0f0 100%); background-size: 200% 100%; border-radius: 4px;"></div>
      </div>
    </div>
  `,
};

// Feedback Animations
export const FeedbackAnimations: StoryObj = {
  render: () => html`
    <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 24px;">
      <div>
        <h3>Shake (Error)</h3>
        <button class="animate-shake" style="padding: 12px 24px; background: #d32f2f; color: white; border: none; border-radius: 4px; cursor: pointer;">
          Error!
        </button>
      </div>
      <div>
        <h3>Bounce (Success)</h3>
        <button class="animate-bounce" style="padding: 12px 24px; background: #388e3c; color: white; border: none; border-radius: 4px; cursor: pointer;">
          Success!
        </button>
      </div>
      <div>
        <h3>Wiggle (Attention)</h3>
        <button class="animate-wiggle" style="padding: 12px 24px; background: #f57c00; color: white; border: none; border-radius: 4px; cursor: pointer;">
          Look here!
        </button>
      </div>
      <div>
        <h3>Heartbeat</h3>
        <div class="animate-heartbeat" style="font-size: 48px; text-align: center;">
          ❤️
        </div>
      </div>
      <div>
        <h3>Tada (Celebration)</h3>
        <div class="animate-tada" style="font-size: 48px; text-align: center;">
          🎉
        </div>
      </div>
      <div>
        <h3>Scale Bounce</h3>
        <div class="animate-scale-bounce" style="width: 48px; height: 48px; background: #1976d2; border-radius: 50%; display: flex; align-items: center; justify-content: center; color: white; font-size: 24px; margin: 0 auto;">
          ✓
        </div>
      </div>
    </div>
  `,
};

// Spinner Component
export const SpinnerVariants: StoryObj = {
  render: () => html`
    <div style="display: grid; grid-template-columns: repeat(4, 1fr); gap: 24px;">
      <div>
        <h3>Circular - Small</h3>
        <eva-spinner variant="circular" size="sm" label="Loading"></eva-spinner>
      </div>
      <div>
        <h3>Circular - Medium</h3>
        <eva-spinner variant="circular" size="md" label="Loading"></eva-spinner>
      </div>
      <div>
        <h3>Circular - Large</h3>
        <eva-spinner variant="circular" size="lg" label="Loading"></eva-spinner>
      </div>
      <div>
        <h3>Dots</h3>
        <eva-spinner variant="dots" size="md" label="Loading"></eva-spinner>
      </div>
      <div>
        <h3>Bars</h3>
        <eva-spinner variant="bars" size="md" label="Loading"></eva-spinner>
      </div>
      <div>
        <h3>Pulse</h3>
        <eva-spinner variant="pulse" size="md" label="Loading"></eva-spinner>
      </div>
    </div>
  `,
};

// Skeleton Component
export const SkeletonVariants: StoryObj = {
  render: () => html`
    <div style="max-width: 600px;">
      <h3>Text Skeleton (3 lines)</h3>
      <eva-skeleton variant="text" lines="3" width="100%"></eva-skeleton>
      
      <h3 style="margin-top: 32px;">Circle Avatar</h3>
      <eva-skeleton variant="circle" width="64px" height="64px"></eva-skeleton>
      
      <h3 style="margin-top: 32px;">Rectangle Image</h3>
      <eva-skeleton variant="rectangle" width="100%" height="200px"></eva-skeleton>
      
      <h3 style="margin-top: 32px;">Card Layout</h3>
      <div style="display: flex; gap: 16px; align-items: flex-start;">
        <eva-skeleton variant="circle" width="48px" height="48px"></eva-skeleton>
        <div style="flex: 1;">
          <eva-skeleton variant="text" lines="2" width="100%"></eva-skeleton>
        </div>
      </div>
    </div>
  `,
};

// Transition Utilities
export const TransitionUtilities: StoryObj = {
  render: () => html`
    <div style="display: grid; grid-template-columns: repeat(2, 1fr); gap: 24px;">
      <div>
        <h3>Fast Transition (150ms)</h3>
        <button class="transition-fast hover-lift" style="padding: 12px 24px; background: #1976d2; color: white; border: none; border-radius: 4px; cursor: pointer;">
          Hover me
        </button>
      </div>
      <div>
        <h3>Slow Transition (300ms)</h3>
        <button class="transition-slow hover-scale" style="padding: 12px 24px; background: #388e3c; color: white; border: none; border-radius: 4px; cursor: pointer;">
          Hover me
        </button>
      </div>
      <div>
        <h3>Color Transition</h3>
        <button class="transition-colors" style="padding: 12px 24px; background: #7b1fa2; color: white; border: none; border-radius: 4px; cursor: pointer; transition: colors 200ms;">
          Hover for color change
        </button>
      </div>
      <div>
        <h3>Glow Effect</h3>
        <button class="hover-glow" style="padding: 12px 24px; background: #f57c00; color: white; border: none; border-radius: 4px; cursor: pointer;">
          Hover for glow
        </button>
      </div>
    </div>
    
    <style>
      button:hover {
        transform: translateY(-2px);
      }
      .transition-colors:hover {
        background: #9c27b0;
      }
    </style>
  `,
};

// Reduced Motion Demo
export const ReducedMotionSupport: StoryObj = {
  render: () => html`
    <div style="max-width: 800px;">
      <h2>Accessibility: Reduced Motion Support</h2>
      <p>
        All animations respect the <code>prefers-reduced-motion</code> setting.
        To test: Open DevTools → Rendering → Emulate CSS media "prefers-reduced-motion: reduce"
      </p>
      
      <div style="margin-top: 24px;">
        <h3>With Reduced Motion:</h3>
        <ul>
          <li>Animations run for 0.01ms (instant)</li>
          <li>Spinner shows static state</li>
          <li>Transitions are disabled</li>
          <li>Content appears immediately</li>
        </ul>
      </div>
      
      <div style="margin-top: 24px; padding: 20px; background: #e3f2fd; border-radius: 8px;">
        <h4>Test Element</h4>
        <div class="animate-fade-in" style="padding: 16px; background: white; border-radius: 4px; margin-top: 12px;">
          This element animates normally, but respects reduced motion
        </div>
        <eva-spinner variant="circular" size="md" label="Loading" style="margin-top: 16px;"></eva-spinner>
      </div>
      
      <div style="margin-top: 24px;">
        <h3>Implementation:</h3>
        <pre style="background: #f5f5f5; padding: 16px; border-radius: 4px; overflow-x: auto;"><code>@media (prefers-reduced-motion: reduce) {
  * {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }
}</code></pre>
      </div>
    </div>
  `,
};

// Interactive Playground
export const InteractivePlayground: StoryObj = {
  render: () => html`
    <div style="max-width: 800px;">
      <h2>Interactive Animation Playground</h2>
      
      <div style="margin-top: 24px;">
        <label for="animationSelect" style="display: block; margin-bottom: 8px; font-weight: 600;">
          Select Animation:
        </label>
        <select id="animationSelect" style="padding: 8px 16px; border: 1px solid #ccc; border-radius: 4px; width: 100%; max-width: 300px;">
          <option value="animate-fade-in">Fade In</option>
          <option value="animate-slide-in-top">Slide In Top</option>
          <option value="animate-slide-in-bottom">Slide In Bottom</option>
          <option value="animate-slide-in-left">Slide In Left</option>
          <option value="animate-slide-in-right">Slide In Right</option>
          <option value="animate-scale-in">Scale In</option>
          <option value="animate-zoom-in">Zoom In</option>
          <option value="animate-bounce">Bounce</option>
          <option value="animate-shake">Shake</option>
          <option value="animate-wiggle">Wiggle</option>
          <option value="animate-tada">Tada</option>
          <option value="animate-heartbeat">Heartbeat</option>
          <option value="animate-scale-bounce">Scale Bounce</option>
        </select>
      </div>
      
      <div style="margin-top: 24px;">
        <button id="triggerBtn" style="padding: 12px 24px; background: #1976d2; color: white; border: none; border-radius: 4px; cursor: pointer; font-size: 16px;">
          Trigger Animation
        </button>
      </div>
      
      <div style="margin-top: 32px; padding: 40px; background: #f5f5f5; border-radius: 8px; text-align: center;">
        <div id="animationTarget" style="display: inline-block; padding: 24px 48px; background: white; border-radius: 8px; box-shadow: 0 2px 8px rgba(0,0,0,0.1); font-size: 18px;">
          Animation Target
        </div>
      </div>
      
      <div style="margin-top: 24px; padding: 16px; background: #fff3e0; border-radius: 4px;">
        <strong>Tip:</strong> Click "Trigger Animation" to see the selected animation in action!
      </div>
    </div>
    
    <script>
      const select = document.getElementById('animationSelect');
      const triggerBtn = document.getElementById('triggerBtn');
      const target = document.getElementById('animationTarget');
      
      triggerBtn.addEventListener('click', () => {
        const animationClass = select.value;
        target.className = '';
        
        // Force reflow
        void target.offsetWidth;
        
        target.classList.add(animationClass);
        
        setTimeout(() => {
          target.classList.remove(animationClass);
        }, 1000);
      });
    </script>
  `,
};

// Page Transitions Demo
export const PageTransitions: StoryObj = {
  render: () => html`
    <div style="max-width: 800px;">
      <h2>Page Transition Effects</h2>
      <p>Smooth SPA navigation with fade, slide, and zoom effects</p>
      
      <div style="margin-top: 24px; display: flex; gap: 16px;">
        <button id="fadeBtn" style="padding: 12px 24px; background: #1976d2; color: white; border: none; border-radius: 4px; cursor: pointer;">
          Fade Transition
        </button>
        <button id="slideBtn" style="padding: 12px 24px; background: #388e3c; color: white; border: none; border-radius: 4px; cursor: pointer;">
          Slide Transition
        </button>
        <button id="zoomBtn" style="padding: 12px 24px; background: #7b1fa2; color: white; border: none; border-radius: 4px; cursor: pointer;">
          Zoom Transition
        </button>
      </div>
      
      <div id="pageContainer" style="margin-top: 32px; padding: 40px; background: #f5f5f5; border-radius: 8px; min-height: 200px;">
        <h3>Page Content</h3>
        <p>This content will transition when you click the buttons above.</p>
        <p>Each button demonstrates a different page transition effect suitable for SPA routing.</p>
      </div>
    </div>
    
    <script>
      const pageContainer = document.getElementById('pageContainer');
      
      function applyTransition(type) {
        pageContainer.style.opacity = '0';
        pageContainer.style.transform = type === 'slide' 
          ? 'translateX(-20px)' 
          : type === 'zoom' 
            ? 'scale(0.95)' 
            : 'none';
        
        setTimeout(() => {
          pageContainer.style.transition = 'opacity 300ms ease-out, transform 300ms ease-out';
          pageContainer.style.opacity = '1';
          pageContainer.style.transform = 'none';
        }, 50);
        
        setTimeout(() => {
          pageContainer.style.transition = '';
        }, 400);
      }
      
      document.getElementById('fadeBtn').addEventListener('click', () => applyTransition('fade'));
      document.getElementById('slideBtn').addEventListener('click', () => applyTransition('slide'));
      document.getElementById('zoomBtn').addEventListener('click', () => applyTransition('zoom'));
    </script>
  `,
};
