// Vue plugin placeholder for EVA-Sovereign-UI
import '@eva-suite/sovereign-ui';
import { App } from 'vue';

export interface SovereignUIVueOptions {
  autoRegister?: boolean;
}

export function createSovereignUIPlugin(options: SovereignUIVueOptions = {}) {
  return {
    install(app: App) {
      // Placeholder: future component wrapper registration
      if (options.autoRegister) {
        // e.g., app.component('EVAAccordion', EVAAccordion);
      }
    }
  };
}

// Placeholder export for future wrappers
export const version = '0.1.0';
