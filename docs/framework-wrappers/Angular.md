# Angular Framework Integration

Complete guide for using EVA Sovereign UI components in Angular 15-17+ applications with reactive forms.

## Installation

```bash
npm install @eva-suite/sovereign-ui @eva-suite/sovereign-ui-angular
```

## Module Setup

### Standalone Components (Angular 17+)

```typescript
// app.config.ts
import { ApplicationConfig } from '@angular/core';
import { provideEVASovereignUI } from '@eva-suite/sovereign-ui-angular';

export const appConfig: ApplicationConfig = {
  providers: [
    provideEVASovereignUI(),
    // ... other providers
  ]
};
```

```typescript
// app.component.ts
import { Component } from '@angular/core';
import { EVAGCButtonModule, EVAInputModule } from '@eva-suite/sovereign-ui-angular';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [EVAGCButtonModule, EVAInputModule],
  template: `
    <eva-input placeholder="Enter your name"></eva-input>
    <eva-gc-button variant="primary">Submit</eva-gc-button>
  `
})
export class AppComponent {}
```

### NgModule (Angular 15-16)

```typescript
// app.module.ts
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { EVASovereignUIModule } from '@eva-suite/sovereign-ui-angular';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    EVASovereignUIModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  bootstrap: [AppComponent]
})
export class AppModule {}
```

## TypeScript Support

Full TypeScript support with component props and autocomplete:

```typescript
import { Component } from '@angular/core';
import type { 
  EVAInputProps, 
  EVAGCButtonProps 
} from '@eva-suite/sovereign-ui-angular';

@Component({
  selector: 'app-form',
  template: `
    <eva-input 
      [value]="email"
      type="email"
      placeholder="Enter email"
      [required]="true"
      (change)="onEmailChange($event)"
    ></eva-input>
  `
})
export class FormComponent {
  email = '';
  
  onEmailChange(event: CustomEvent<{ value: string }>) {
    this.email = event.detail.value;
  }
}
```

## Reactive Forms Integration

EVA components integrate seamlessly with Angular Reactive Forms using ControlValueAccessor directives:

```typescript
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { 
  EVAInputDirective,
  EVACheckboxDirective,
  EVASelectDirective,
  EVASwitchDirective,
  EVASliderDirective
} from '@eva-suite/sovereign-ui-angular';

@Component({
  selector: 'app-contact-form',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    EVAInputDirective,
    EVACheckboxDirective,
    EVASelectDirective,
    EVASwitchDirective,
    EVASliderDirective
  ],
  template: `
    <form [formGroup]="contactForm" (ngSubmit)="onSubmit()">
      <!-- Text Input -->
      <eva-label>Name</eva-label>
      <eva-input 
        formControlName="name" 
        placeholder="Your name"
        [required]="true"
      ></eva-input>
      
      <!-- Email Input -->
      <eva-label>Email</eva-label>
      <eva-input 
        formControlName="email" 
        type="email"
        placeholder="your@email.com"
      ></eva-input>
      
      <!-- Textarea -->
      <eva-label>Message</eva-label>
      <eva-textarea 
        formControlName="message" 
        rows="5"
        placeholder="Your message..."
      ></eva-textarea>
      
      <!-- Select -->
      <eva-label>Department</eva-label>
      <eva-select formControlName="department">
        <eva-select-item value="hr">Human Resources</eva-select-item>
        <eva-select-item value="it">IT Support</eva-select-item>
        <eva-select-item value="finance">Finance</eva-select-item>
      </eva-select>
      
      <!-- Checkbox -->
      <eva-checkbox formControlName="subscribe">
        Subscribe to newsletter
      </eva-checkbox>
      
      <!-- Switch -->
      <eva-switch formControlName="notifications">
        Enable notifications
      </eva-switch>
      
      <!-- Radio Group -->
      <eva-label>Priority</eva-label>
      <eva-radio-group formControlName="priority">
        <eva-radio-group-item value="low">Low</eva-radio-group-item>
        <eva-radio-group-item value="medium">Medium</eva-radio-group-item>
        <eva-radio-group-item value="high">High</eva-radio-group-item>
      </eva-radio-group>
      
      <!-- Slider -->
      <eva-label>Rating: {{ contactForm.get('rating')?.value }}</eva-label>
      <eva-slider 
        formControlName="rating" 
        [min]="1" 
        [max]="10"
      ></eva-slider>
      
      <!-- Submit Button -->
      <eva-gc-button 
        type="submit" 
        variant="primary"
        [disabled]="!contactForm.valid"
      >
        Submit
      </eva-gc-button>
    </form>
  `
})
export class ContactFormComponent {
  contactForm: FormGroup;
  
  constructor(private fb: FormBuilder) {
    this.contactForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(2)]],
      email: ['', [Validators.required, Validators.email]],
      message: ['', [Validators.required]],
      department: ['hr'],
      subscribe: [false],
      notifications: [true],
      priority: ['medium'],
      rating: [5]
    });
  }
  
  onSubmit() {
    if (this.contactForm.valid) {
      console.log('Form submitted:', this.contactForm.value);
    }
  }
}
```

### Form Validation

```typescript
import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-validated-form',
  template: `
    <div>
      <eva-label for="email">Email</eva-label>
      <eva-input 
        id="email"
        [formControl]="emailControl"
        type="email"
        placeholder="Enter email"
        [attr.aria-invalid]="emailControl.invalid && emailControl.touched"
        [attr.aria-describedby]="emailControl.invalid ? 'email-error' : null"
      ></eva-input>
      
      <span 
        *ngIf="emailControl.invalid && emailControl.touched"
        id="email-error"
        role="alert"
        style="color: red;"
      >
        <span *ngIf="emailControl.errors?.['required']">Email is required</span>
        <span *ngIf="emailControl.errors?.['email']">Invalid email format</span>
      </span>
    </div>
  `
})
export class ValidatedFormComponent {
  emailControl = new FormControl('', [
    Validators.required,
    Validators.email
  ]);
}
```

## Government of Canada Components

### GC Header with Navigation

```typescript
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <eva-gc-header 
      site-title="Employment and Social Development Canada"
      [breadcrumbs]="breadcrumbsJson"
      locale="en-CA"
      [show-language]="true"
      [show-search]="true"
      [show-theme]="true"
    ></eva-gc-header>
    
    <main>
      <eva-container size="lg">
        <h1>Employment Insurance Benefits</h1>
        <router-outlet></router-outlet>
      </eva-container>
    </main>
    
    <eva-gc-footer 
      locale="en-CA" 
      [show-newsletter]="true" 
      [show-social]="true"
    ></eva-gc-footer>
  `
})
export class AppComponent {
  breadcrumbs = [
    { label: 'Home', href: '/' },
    { label: 'Services', href: '/services' },
    { label: 'Employment Insurance' }
  ];
  
  get breadcrumbsJson(): string {
    return JSON.stringify(this.breadcrumbs);
  }
}
```

### Language Switcher

```typescript
import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-language-toggle',
  template: `
    <eva-language-switcher
      [locale]="currentLocale"
      [available-locales]="availableLocalesJson"
      (change)="onLanguageChange($event)"
    ></eva-language-switcher>
  `
})
export class LanguageToggleComponent {
  currentLocale: 'en-CA' | 'fr-CA' = 'en-CA';
  availableLocales = ['en-CA', 'fr-CA'];
  
  get availableLocalesJson(): string {
    return JSON.stringify(this.availableLocales);
  }
  
  constructor(private translate: TranslateService) {}
  
  onLanguageChange(event: CustomEvent<{ value: string }>) {
    this.currentLocale = event.detail.value as 'en-CA' | 'fr-CA';
    this.translate.use(this.currentLocale);
  }
}
```

## Dialog & Modal Components

### Controlled Dialog

```typescript
import { Component } from '@angular/core';

@Component({
  selector: 'app-confirmation-dialog',
  template: `
    <eva-gc-button (click)="openDialog()">Open Dialog</eva-gc-button>
    
    <eva-dialog [open]="isOpen" (close)="closeDialog()" [modal]="true">
      <eva-dialog-header>
        <eva-dialog-title>Confirm Action</eva-dialog-title>
        <eva-dialog-description>
          Are you sure you want to proceed? This action cannot be undone.
        </eva-dialog-description>
      </eva-dialog-header>
      
      <eva-dialog-footer>
        <eva-button variant="outline" (click)="closeDialog()">
          Cancel
        </eva-button>
        <eva-gc-button variant="primary" (click)="confirmAction()">
          Confirm
        </eva-gc-button>
      </eva-dialog-footer>
    </eva-dialog>
  `
})
export class ConfirmationDialogComponent {
  isOpen = false;
  
  openDialog() {
    this.isOpen = true;
  }
  
  closeDialog() {
    this.isOpen = false;
  }
  
  confirmAction() {
    console.log('Action confirmed');
    this.closeDialog();
  }
}
```

### Alert Dialog Service

```typescript
// services/alert-dialog.service.ts
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

export interface AlertDialogConfig {
  title: string;
  description: string;
  actionLabel: string;
  cancelLabel: string;
}

@Injectable({ providedIn: 'root' })
export class AlertDialogService {
  private dialogState = new Subject<AlertDialogConfig | null>();
  dialogState$ = this.dialogState.asObservable();
  
  private actionSubject = new Subject<boolean>();
  action$ = this.actionSubject.asObservable();
  
  open(config: AlertDialogConfig) {
    this.dialogState.next(config);
  }
  
  close() {
    this.dialogState.next(null);
  }
  
  confirm() {
    this.actionSubject.next(true);
    this.close();
  }
  
  cancel() {
    this.actionSubject.next(false);
    this.close();
  }
}
```

## Tabs Navigation

```typescript
import { Component } from '@angular/core';

@Component({
  selector: 'app-tabbed-interface',
  template: `
    <eva-tabs [value]="activeTab" (change)="onTabChange($event)">
      <eva-tabs-list>
        <eva-tabs-trigger value="profile">Profile</eva-tabs-trigger>
        <eva-tabs-trigger value="settings">Settings</eva-tabs-trigger>
        <eva-tabs-trigger value="notifications">Notifications</eva-tabs-trigger>
      </eva-tabs-list>
      
      <eva-tabs-content value="profile">
        <h2>Profile Information</h2>
        <app-profile-form></app-profile-form>
      </eva-tabs-content>
      
      <eva-tabs-content value="settings">
        <h2>Account Settings</h2>
        <app-settings-form></app-settings-form>
      </eva-tabs-content>
      
      <eva-tabs-content value="notifications">
        <h2>Notification Preferences</h2>
        <app-notifications-settings></app-notifications-settings>
      </eva-tabs-content>
    </eva-tabs>
  `
})
export class TabbedInterfaceComponent {
  activeTab = 'profile';
  
  onTabChange(event: CustomEvent<{ value: string }>) {
    this.activeTab = event.detail.value;
  }
}
```

## Chat Interface

```typescript
import { Component } from '@angular/core';

interface Message {
  id: number;
  text: string;
  sender: string;
  role: 'user' | 'assistant';
  timestamp: string;
}

@Component({
  selector: 'app-chat',
  template: `
    <eva-chat-panel 
      locale="en-CA"
      placeholder="Type your message..."
      [show-language-switcher]="true"
      (send-message)="handleSendMessage($event)"
    >
      <eva-chat-message
        *ngFor="let msg of messages"
        [message]="msg.text"
        [sender]="msg.sender"
        [role]="msg.role"
        [timestamp]="msg.timestamp"
      ></eva-chat-message>
    </eva-chat-panel>
  `
})
export class ChatComponent {
  messages: Message[] = [
    {
      id: 1,
      text: 'Hello! How can I help you today?',
      sender: 'Assistant',
      role: 'assistant',
      timestamp: new Date().toISOString()
    }
  ];
  
  handleSendMessage(event: CustomEvent<{ message: string }>) {
    const newMessage: Message = {
      id: this.messages.length + 1,
      text: event.detail.message,
      sender: 'User',
      role: 'user',
      timestamp: new Date().toISOString()
    };
    this.messages.push(newMessage);
    
    // Simulate assistant response
    setTimeout(() => {
      this.messages.push({
        id: this.messages.length + 1,
        text: 'I understand. Let me help you with that.',
        sender: 'Assistant',
        role: 'assistant',
        timestamp: new Date().toISOString()
      });
    }, 1000);
  }
}
```

## Data Tables

```typescript
import { Component } from '@angular/core';

interface User {
  id: number;
  name: string;
  email: string;
  role: string;
}

@Component({
  selector: 'app-users-table',
  template: `
    <eva-table>
      <eva-table-header>
        <eva-table-row>
          <eva-table-head>Name</eva-table-head>
          <eva-table-head>Email</eva-table-head>
          <eva-table-head>Role</eva-table-head>
          <eva-table-head>Actions</eva-table-head>
        </eva-table-row>
      </eva-table-header>
      <eva-table-body>
        <eva-table-row *ngFor="let user of users">
          <eva-table-cell>{{ user.name }}</eva-table-cell>
          <eva-table-cell>{{ user.email }}</eva-table-cell>
          <eva-table-cell>
            <eva-badge [variant]="user.role === 'Admin' ? 'default' : 'secondary'">
              {{ user.role }}
            </eva-badge>
          </eva-table-cell>
          <eva-table-cell>
            <eva-button variant="outline" size="sm" (click)="editUser(user)">
              Edit
            </eva-button>
          </eva-table-cell>
        </eva-table-row>
      </eva-table-body>
    </eva-table>
  `
})
export class UsersTableComponent {
  users: User[] = [
    { id: 1, name: 'Alice Johnson', email: 'alice@example.com', role: 'Admin' },
    { id: 2, name: 'Bob Smith', email: 'bob@example.com', role: 'User' },
    { id: 3, name: 'Carol White', email: 'carol@example.com', role: 'Editor' }
  ];
  
  editUser(user: User) {
    console.log('Editing user:', user);
  }
}
```

## Services & Dependency Injection

### Form Service

```typescript
// services/form.service.ts
import { Injectable } from '@angular/core';
import { FormGroup, AbstractControl } from '@angular/forms';

@Injectable({ providedIn: 'root' })
export class FormService {
  markFormGroupTouched(formGroup: FormGroup) {
    Object.keys(formGroup.controls).forEach(key => {
      const control = formGroup.get(key);
      control?.markAsTouched();
      
      if (control instanceof FormGroup) {
        this.markFormGroupTouched(control);
      }
    });
  }
  
  getFormValidationErrors(formGroup: FormGroup): string[] {
    const errors: string[] = [];
    
    Object.keys(formGroup.controls).forEach(key => {
      const control = formGroup.get(key);
      
      if (control?.errors) {
        Object.keys(control.errors).forEach(errorKey => {
          errors.push(`${key}: ${errorKey}`);
        });
      }
    });
    
    return errors;
  }
}
```

## Pipes for Components

```typescript
// pipes/safe-json.pipe.ts
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'safeJson', standalone: true })
export class SafeJsonPipe implements PipeTransform {
  transform(value: any): string {
    try {
      return JSON.stringify(value);
    } catch {
      return '{}';
    }
  }
}
```

Usage:

```typescript
@Component({
  template: `
    <eva-gc-header [breadcrumbs]="breadcrumbs | safeJson"></eva-gc-header>
  `
})
```

## Accessibility Best Practices

### ARIA Attributes

```typescript
@Component({
  template: `
    <eva-label for="username">Username</eva-label>
    <eva-input 
      id="username"
      [formControl]="usernameControl"
      [attr.aria-required]="true"
      [attr.aria-invalid]="usernameControl.invalid && usernameControl.touched"
      [attr.aria-describedby]="usernameControl.invalid ? 'username-error' : null"
    ></eva-input>
    
    <span 
      *ngIf="usernameControl.invalid && usernameControl.touched"
      id="username-error"
      role="alert"
    >
      Username is required
    </span>
  `
})
```

### Focus Management

```typescript
import { Component, ViewChild, ElementRef, AfterViewInit } from '@angular/core';

@Component({
  template: `
    <eva-input #firstInput placeholder="Focus me on load"></eva-input>
  `
})
export class FocusComponent implements AfterViewInit {
  @ViewChild('firstInput', { read: ElementRef }) firstInput!: ElementRef;
  
  ngAfterViewInit() {
    this.firstInput.nativeElement.focus();
  }
}
```

## Testing

### Component Testing

```typescript
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ContactFormComponent } from './contact-form.component';

describe('ContactFormComponent', () => {
  let component: ContactFormComponent;
  let fixture: ComponentFixture<ContactFormComponent>;
  
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ContactFormComponent],
      imports: [ReactiveFormsModule],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    }).compileComponents();
    
    fixture = TestBed.createComponent(ContactFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
  
  it('should create', () => {
    expect(component).toBeTruthy();
  });
  
  it('should initialize form with default values', () => {
    expect(component.contactForm.get('name')?.value).toBe('');
    expect(component.contactForm.get('subscribe')?.value).toBe(false);
  });
  
  it('should validate required fields', () => {
    const nameControl = component.contactForm.get('name');
    expect(nameControl?.valid).toBeFalsy();
    
    nameControl?.setValue('John Doe');
    expect(nameControl?.valid).toBeTruthy();
  });
});
```

## Performance Optimization

### OnPush Change Detection

```typescript
import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-user-list',
  template: `
    <eva-table>
      <eva-table-body>
        <eva-table-row *ngFor="let user of users; trackBy: trackById">
          <eva-table-cell>{{ user.name }}</eva-table-cell>
        </eva-table-row>
      </eva-table-body>
    </eva-table>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UserListComponent {
  users = [...];
  
  trackById(index: number, item: any) {
    return item.id;
  }
}
```

### Lazy Loading Modules

```typescript
// app-routing.module.ts
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'admin',
    loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
```

## Complete Component List

All 49 components available with Angular integration:

### GC Components (4)
`eva-gc-button`, `eva-gc-header`, `eva-gc-footer`, `eva-language-switcher`

### Form Components (9)
`eva-input`, `eva-textarea`, `eva-checkbox`, `eva-switch`, `eva-select`, `eva-select-item`, `eva-radio-group`, `eva-radio-group-item`, `eva-slider`, `eva-label`, `eva-input-otp`

### Dialog Components (8)
`eva-dialog`, `eva-alert-dialog`, `eva-drawer`, `eva-sheet`

### Layout Components (10)
`eva-tabs`, `eva-accordion`, `eva-card`, `eva-page-shell`, `eva-container`, `eva-hero-banner`, `eva-skip-link`

### Navigation Components (4)
`eva-breadcrumb`, `eva-dropdown-menu`, `eva-context-menu`, `eva-menubar`

### UI Components (9)
`eva-button`, `eva-badge`, `eva-alert`, `eva-tooltip`, `eva-popover`, `eva-separator`, `eva-progress`, `eva-skeleton`, `eva-aspect-ratio`

### Advanced Components (9)
`eva-chat-panel`, `eva-chat-message`, `eva-calendar`, `eva-carousel`, `eva-pagination`, `eva-scroll-area`, `eva-table`, `eva-avatar`, `eva-hover-card`, `eva-toggle`, `eva-collapsible`

### ESDC Components (1)
`eva-program-card`

## Resources

- [NPM Package](https://www.npmjs.com/package/@eva-suite/sovereign-ui-angular)
- [GitHub Repository](https://github.com/MarcoPolo483/EVA-Sovereign-UI-by-Copilot)
- [Component Demos](../../apps/demo)
- [Core Web Components](https://www.npmjs.com/package/@eva-suite/sovereign-ui)

## License

MIT © EVA Suite Team
