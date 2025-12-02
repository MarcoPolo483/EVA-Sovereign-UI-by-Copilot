import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

// Re-export all directives
export * from './directives';

@NgModule({
  declarations: [],
  imports: [CommonModule, FormsModule],
  exports: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class EVASovereignUIModule {
  constructor() {
    // Web components are registered when the package is imported
    if (typeof window !== 'undefined' && !window.customElements.get('eva-gc-button')) {
      // Components will be registered by the peer dependency
    }
  }
}
