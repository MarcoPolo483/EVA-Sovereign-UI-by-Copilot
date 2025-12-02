// Export all components
export * from './components';

// Export utilities
export { createComponent, createEVAPlugin } from './utils';

// Re-export components for plugin
import * as components from './components';

// Create and export plugin
export const EVASovereignUI = {
  install(app: any) {
    // Register Vue components globally
    Object.entries(components).forEach(([name, component]) => {
      app.component(name, component);
    });
  }
};

// Export default plugin
export default EVASovereignUI;

// Version
export const version = '1.0.0';
