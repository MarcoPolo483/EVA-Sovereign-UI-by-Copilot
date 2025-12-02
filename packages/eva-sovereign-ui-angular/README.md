# @eva-suite/sovereign-ui-angular

Angular wrappers for EVA-Sovereign-UI Web Components, providing native Angular integration with reactive forms support, change detection, and TypeScript definitions.

[![npm version](https://img.shields.io/npm/v/@eva-suite/sovereign-ui-angular.svg)](https://www.npmjs.com/package/@eva-suite/sovereign-ui-angular)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

## Features

- ✅ **49 Components** - Complete suite of government-grade UI components
- ✅ **Angular Forms** - Full support for template-driven and reactive forms
- ✅ **ControlValueAccessor** - All form directives implement CVA interface
- ✅ **Change Detection** - Seamless integration with Angular's change detection
- ✅ **TypeScript** - Full type definitions with HTMLElementTagNameMap extensions
- ✅ **Standalone Components** - Compatible with Angular 15+ standalone API
- ✅ **SSR Compatible** - Works with Angular Universal server-side rendering
- ✅ **WCAG 2.2 AA** - Full accessibility compliance
- ✅ **Government Standards** - GC Design System and Five Eyes compliant
- ✅ **Lightweight** - 8.91 KB CJS, 7.06 KB ESM (gzipped)

## Installation

```bash
npm install @eva-suite/sovereign-ui @eva-suite/sovereign-ui-angular
```

## Setup

### Module-based (NgModule)

```typescript
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EVASovereignUIModule } from '@eva-suite/sovereign-ui-angular';

import '@eva-suite/sovereign-ui';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    EVASovereignUIModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  bootstrap: [AppComponent]
})
export class AppModule {}
```

### Standalone Components

```typescript
import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { 
  EVAInputDirective,
  EVACheckboxDirective,
  EVASwitchDirective 
} from '@eva-suite/sovereign-ui-angular';

import '@eva-suite/sovereign-ui';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    FormsModule,
    EVAInputDirective,
    EVACheckboxDirective,
    EVASwitchDirective
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  template: `
    <eva-input [(ngModel)]="name" placeholder="Enter name"></eva-input>
    <eva-checkbox [(ngModel)]="agreed">I agree</eva-checkbox>
  `
})
export class AppComponent {
  name = '';
  agreed = false;
}
```

## Usage with Template-Driven Forms

```typescript
import { Component } from '@angular/core';

@Component({
  template: `
    <form #form="ngForm" (ngSubmit)="onSubmit()">
      <eva-input 
        name="email"
        [(ngModel)]="model.email"
        placeholder="Email"
        type="email"
        required
      ></eva-input>
      
      <eva-checkbox 
        name="subscribe"
        [(ngModel)]="model.subscribe"
      >
        Subscribe to newsletter
      </eva-checkbox>
      
      <eva-gc-button type="submit" variant="primary">
        Submit
      </eva-gc-button>
    </form>
    
    <p>Form valid: {{ form.valid }}</p>
  `
})
export class MyFormComponent {
  model = {
    email: '',
    subscribe: false
  };
  
  onSubmit() {
    console.log('Form submitted:', this.model);
  }
}
```

## Usage with Reactive Forms

```typescript
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  template: `
    <form [formGroup]="form" (ngSubmit)="onSubmit()">
      <eva-input 
        formControlName="username"
        placeholder="Username"
        type="text"
      ></eva-input>
      
      <eva-input 
        formControlName="password"
        placeholder="Password"
        type="password"
      ></eva-input>
      
      <eva-switch formControlName="rememberMe">
        Remember me
      </eva-switch>
      
      <eva-gc-button 
        type="submit" 
        variant="primary"
        [disabled]="form.invalid"
      >
        Log In
      </eva-gc-button>
    </form>
  `
})
export class LoginComponent {
  form: FormGroup;
  
  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      username: ['', [Validators.required, Validators.minLength(3)]],
      password: ['', [Validators.required, Validators.minLength(8)]],
      rememberMe: [false]
    });
  }
  
  onSubmit() {
    if (this.form.valid) {
      console.log('Login:', this.form.value);
    }
  }
}
```

## Government of Canada Components

```typescript
@Component({
  template: `
    <eva-gc-header 
      logo-text="Department Name"
      [attr.breadcrumbs]="breadcrumbs"
    ></eva-gc-header>
    
    <main>
      <eva-container>
        <eva-gc-button 
          variant="primary"
          size="large"
          (click)="handleSubmit()"
        >
          Submit Application
        </eva-gc-button>
      </eva-container>
    </main>
    
    <eva-gc-footer></eva-gc-footer>
  `
})
export class MyPageComponent {
  breadcrumbs = JSON.stringify([
    { label: 'Home', href: '/' },
    { label: 'Services', href: '/services' }
  ]);
  
  handleSubmit() {
    console.log('Button clicked');
  }
}
```

## Form Control Directives

The following directives enable Angular forms integration:

- `EVAInputDirective` - Text inputs
- `EVATextareaDirective` - Textarea inputs
- `EVACheckboxDirective` - Checkbox inputs
- `EVASwitchDirective` - Toggle switches
- `EVASelectDirective` - Select dropdowns
- `EVARadioGroupDirective` - Radio button groups
- `EVASliderDirective` - Range sliders
- `EVAInputOTPDirective` - OTP input fields

All directives support:
- `ngModel` (Template-driven forms)
- `formControlName` / `formControl` (Reactive forms)
- Validation states
- Disabled states
- Change detection

## TypeScript Support

All components have custom element types registered. For better TypeScript support in templates, you can extend the `HTMLElementTagNameMap`:

```typescript
// typings.d.ts
declare global {
  interface HTMLElementTagNameMap {
    'eva-gc-button': HTMLElement;
    'eva-input': HTMLElement;
    // ... add more as needed
  }
}

export {};
```

## Accessibility

All components are WCAG 2.1 AA compliant and include:
- Full keyboard navigation
- Screen reader support
- ARIA attributes
- Focus management
- Form validation announcements

## Features

- **Angular Forms Integration**: Full support for template-driven and reactive forms
- **Change Detection**: Components work seamlessly with Angular's change detection
- **TypeScript**: Full type definitions for all components
- **Standalone Components**: Compatible with Angular 15+ standalone API
- **SSR Compatible**: Works with Angular Universal
- **Accessibility**: WCAG 2.1 AA compliant components
- **Government Standards**: GC Design System and Five Eyes compliant

## License

MIT © EVA Suite Team
