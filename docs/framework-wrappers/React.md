# React Framework Integration

Complete guide for using EVA Sovereign UI components in React 18/19 applications.

## Installation

```bash
npm install @eva-suite/sovereign-ui @eva-suite/sovereign-ui-react
```

## Quick Start

```tsx
import React from 'react';
import { EVAGCButton, EVAInput } from '@eva-suite/sovereign-ui-react';

function App() {
  const [name, setName] = React.useState('');
  
  return (
    <div>
      <EVAInput 
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Enter your name"
      />
      <EVAGCButton variant="primary" onClick={() => alert(`Hello ${name}!`)}>
        Submit
      </EVAGCButton>
    </div>
  );
}
```

## TypeScript Support

All components include full TypeScript definitions with prop types and event handlers:

```tsx
import { EVAInput, EVAGCButton } from '@eva-suite/sovereign-ui-react';
import type { 
  EVAInputProps, 
  EVAGCButtonProps, 
  EVAChangeEvent 
} from '@eva-suite/sovereign-ui-react';

const MyForm: React.FC = () => {
  const handleChange = (e: EVAChangeEvent) => {
    console.log('Input changed:', e.detail.value);
  };
  
  const inputProps: EVAInputProps = {
    type: 'email',
    required: true,
    placeholder: 'Enter email...'
  };
  
  return <EVAInput {...inputProps} onChange={handleChange} />;
};
```

## Form Handling with useEVAForm Hook

The `useEVAForm` hook provides seamless integration with React state management:

```tsx
import { useEVAForm } from '@eva-suite/sovereign-ui-react';

function ContactForm() {
  const form = useEVAForm({
    name: '',
    email: '',
    subscribe: false,
    role: '',
    rating: 5
  });
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form data:', form.values);
  };
  
  return (
    <form onSubmit={handleSubmit}>
      <EVALabel>Name</EVALabel>
      <EVAInput {...form.bindInput('name')} placeholder="Your name" />
      
      <EVALabel>Email</EVALabel>
      <EVAInput {...form.bindInput('email')} type="email" />
      
      <EVACheckbox {...form.bindCheckbox('subscribe')}>
        Subscribe to newsletter
      </EVACheckbox>
      
      <EVALabel>Role</EVALabel>
      <EVASelect {...form.bindSelect('role')}>
        <EVASelectItem value="developer">Developer</EVASelectItem>
        <EVASelectItem value="designer">Designer</EVASelectItem>
        <EVASelectItem value="manager">Manager</EVASelectItem>
      </EVASelect>
      
      <EVALabel>Rating: {form.values.rating}</EVALabel>
      <EVASlider {...form.bindSlider('rating')} min={1} max={10} />
      
      <EVAGCButton type="submit" variant="primary">Submit</EVAGCButton>
    </form>
  );
}
```

### useEVAForm API

The hook provides binding methods for all form components:

- `bindInput(key)` - Text inputs, textarea
- `bindCheckbox(key)` - Checkbox, switch
- `bindSelect(key)` - Select dropdown
- `bindRadioGroup(key)` - Radio button groups
- `bindSlider(key)` - Range slider
- `bindInputOTP(key)` - OTP input

Each binding returns the necessary props (`value`, `checked`, `onChange`, etc.).

## Government of Canada Components

### GC Header with Breadcrumbs

```tsx
import { EVAGCHeader, EVAGCFooter, EVAContainer } from '@eva-suite/sovereign-ui-react';

function GovernmentPage() {
  const breadcrumbs = [
    { label: 'Home', href: '/' },
    { label: 'Services', href: '/services' },
    { label: 'Employment Insurance' }
  ];
  
  return (
    <>
      <EVAGCHeader 
        siteTitle="Employment and Social Development Canada"
        breadcrumbs={JSON.stringify(breadcrumbs)}
        locale="en-CA"
        showLanguage
        showSearch
        showTheme
      />
      
      <main>
        <EVAContainer size="lg">
          <h1>Employment Insurance Benefits</h1>
          {/* Page content */}
        </EVAContainer>
      </main>
      
      <EVAGCFooter locale="en-CA" showNewsletter showSocial />
    </>
  );
}
```

### Language Switcher

```tsx
import { EVALanguageSwitcher } from '@eva-suite/sovereign-ui-react';

function LanguageToggle() {
  const [locale, setLocale] = React.useState<'en-CA' | 'fr-CA'>('en-CA');
  
  const handleLanguageChange = (e: EVAChangeEvent) => {
    setLocale(e.detail.value as 'en-CA' | 'fr-CA');
  };
  
  return (
    <EVALanguageSwitcher
      locale={locale}
      availableLocales={JSON.stringify(['en-CA', 'fr-CA'])}
      onChange={handleLanguageChange}
    />
  );
}
```

## Dialog & Modal Components

### Controlled Dialog

```tsx
import { EVADialog, EVADialogHeader, EVADialogTitle, EVADialogDescription, EVADialogFooter } from '@eva-suite/sovereign-ui-react';

function ConfirmationDialog() {
  const [open, setOpen] = React.useState(false);
  
  const handleConfirm = () => {
    console.log('Confirmed');
    setOpen(false);
  };
  
  return (
    <>
      <EVAGCButton onClick={() => setOpen(true)}>Open Dialog</EVAGCButton>
      
      <EVADialog open={open} onClose={() => setOpen(false)} modal>
        <EVADialogHeader>
          <EVADialogTitle>Confirm Action</EVADialogTitle>
          <EVADialogDescription>
            Are you sure you want to proceed? This action cannot be undone.
          </EVADialogDescription>
        </EVADialogHeader>
        
        <EVADialogFooter>
          <EVAButton variant="outline" onClick={() => setOpen(false)}>
            Cancel
          </EVAButton>
          <EVAGCButton variant="primary" onClick={handleConfirm}>
            Confirm
          </EVAGCButton>
        </EVADialogFooter>
      </EVADialog>
    </>
  );
}
```

### Alert Dialog

```tsx
import { EVAAlertDialog } from '@eva-suite/sovereign-ui-react';

function DeleteConfirmation() {
  const [open, setOpen] = React.useState(false);
  
  return (
    <>
      <EVAButton variant="destructive" onClick={() => setOpen(true)}>
        Delete Account
      </EVAButton>
      
      <EVAAlertDialog 
        open={open} 
        onClose={() => setOpen(false)}
        title="Delete Account"
        description="This will permanently delete your account and all associated data."
        actionLabel="Delete"
        cancelLabel="Cancel"
        onAction={() => {
          console.log('Account deleted');
          setOpen(false);
        }}
      />
    </>
  );
}
```

## Tabs Navigation

```tsx
import { EVATabs, EVATabsList, EVATabsTrigger, EVATabsContent } from '@eva-suite/sovereign-ui-react';

function TabbedInterface() {
  const [activeTab, setActiveTab] = React.useState('profile');
  
  return (
    <EVATabs value={activeTab} onChange={(e) => setActiveTab(e.detail.value)}>
      <EVATabsList>
        <EVATabsTrigger value="profile">Profile</EVATabsTrigger>
        <EVATabsTrigger value="settings">Settings</EVATabsTrigger>
        <EVATabsTrigger value="notifications">Notifications</EVATabsTrigger>
      </EVATabsList>
      
      <EVATabsContent value="profile">
        <h2>Profile Information</h2>
        {/* Profile form */}
      </EVATabsContent>
      
      <EVATabsContent value="settings">
        <h2>Account Settings</h2>
        {/* Settings form */}
      </EVATabsContent>
      
      <EVATabsContent value="notifications">
        <h2>Notification Preferences</h2>
        {/* Notifications settings */}
      </EVATabsContent>
    </EVATabs>
  );
}
```

## Chat Interface

```tsx
import { EVAChatPanel, EVAChatMessage } from '@eva-suite/sovereign-ui-react';

function ChatDemo() {
  const [messages, setMessages] = React.useState([
    { id: 1, text: 'Hello! How can I help you today?', sender: 'Assistant', role: 'assistant' as const },
    { id: 2, text: 'I need help with my application.', sender: 'User', role: 'user' as const }
  ]);
  
  const handleSendMessage = (e: CustomEvent<{ message: string }>) => {
    const newMessage = {
      id: messages.length + 1,
      text: e.detail.message,
      sender: 'User',
      role: 'user' as const
    };
    setMessages([...messages, newMessage]);
    
    // Simulate assistant response
    setTimeout(() => {
      setMessages(prev => [...prev, {
        id: prev.length + 1,
        text: 'I understand. Let me help you with that.',
        sender: 'Assistant',
        role: 'assistant' as const
      }]);
    }, 1000);
  };
  
  return (
    <EVAChatPanel 
      locale="en-CA"
      placeholder="Type your message..."
      showLanguageSwitcher
      onSendMessage={handleSendMessage}
    >
      {messages.map(msg => (
        <EVAChatMessage
          key={msg.id}
          message={msg.text}
          sender={msg.sender}
          role={msg.role}
          timestamp={new Date().toISOString()}
        />
      ))}
    </EVAChatPanel>
  );
}
```

## Data Tables

```tsx
import { EVATable, EVATableHeader, EVATableBody, EVATableRow, EVATableHead, EVATableCell } from '@eva-suite/sovereign-ui-react';

function UsersTable() {
  const users = [
    { id: 1, name: 'Alice Johnson', email: 'alice@example.com', role: 'Admin' },
    { id: 2, name: 'Bob Smith', email: 'bob@example.com', role: 'User' },
    { id: 3, name: 'Carol White', email: 'carol@example.com', role: 'Editor' }
  ];
  
  return (
    <EVATable>
      <EVATableHeader>
        <EVATableRow>
          <EVATableHead>Name</EVATableHead>
          <EVATableHead>Email</EVATableHead>
          <EVATableHead>Role</EVATableHead>
        </EVATableRow>
      </EVATableHeader>
      <EVATableBody>
        {users.map(user => (
          <EVATableRow key={user.id}>
            <EVATableCell>{user.name}</EVATableCell>
            <EVATableCell>{user.email}</EVATableCell>
            <EVATableCell>
              <EVABadge variant={user.role === 'Admin' ? 'default' : 'secondary'}>
                {user.role}
              </EVABadge>
            </EVATableCell>
          </EVATableRow>
        ))}
      </EVATableBody>
    </EVATable>
  );
}
```

## Next.js Integration

### App Router (Next.js 13+)

```tsx
// app/layout.tsx
import '@eva-suite/sovereign-ui/styles';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
```

```tsx
// app/components/ClientComponents.tsx
'use client';

import { EVAGCButton } from '@eva-suite/sovereign-ui-react';

export function InteractiveButton() {
  return (
    <EVAGCButton onClick={() => alert('Clicked!')}>
      Click Me
    </EVAGCButton>
  );
}
```

### Pages Router (Next.js 12 and below)

```tsx
// pages/_app.tsx
import '@eva-suite/sovereign-ui/styles';
import type { AppProps } from 'next/app';

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
```

## Server-Side Rendering (SSR)

EVA components are web components and render on the client. For SSR frameworks, use dynamic imports:

```tsx
import dynamic from 'next/dynamic';

const EVAGCButton = dynamic(
  () => import('@eva-suite/sovereign-ui-react').then(mod => mod.EVAGCButton),
  { ssr: false }
);
```

## Accessibility Best Practices

### Form Labeling

```tsx
<EVALabel htmlFor="email">Email Address</EVALabel>
<EVAInput 
  id="email"
  type="email"
  required
  aria-required="true"
  aria-invalid={hasError}
  aria-describedby={hasError ? "email-error" : undefined}
/>
{hasError && (
  <span id="email-error" role="alert">
    Please enter a valid email address
  </span>
)}
```

### Focus Management

```tsx
const dialogRef = React.useRef<HTMLElement>(null);

React.useEffect(() => {
  if (open && dialogRef.current) {
    dialogRef.current.focus();
  }
}, [open]);

<EVADialog ref={dialogRef} open={open} />
```

### Keyboard Navigation

All components support standard keyboard navigation:
- `Tab` / `Shift+Tab` - Navigate between focusable elements
- `Enter` / `Space` - Activate buttons and toggles
- `Escape` - Close dialogs and dropdowns
- `Arrow keys` - Navigate menus, tabs, and selections

## Performance Optimization

### Code Splitting

```tsx
import React from 'react';

const EVACalendar = React.lazy(() => 
  import('@eva-suite/sovereign-ui-react').then(mod => ({ 
    default: mod.EVACalendar 
  }))
);

function MyComponent() {
  return (
    <React.Suspense fallback={<EVASkeleton />}>
      <EVACalendar value={new Date().toISOString()} />
    </React.Suspense>
  );
}
```

### Memoization

```tsx
const MemoizedButton = React.memo(EVAGCButton);

const handleClick = React.useCallback(() => {
  console.log('Button clicked');
}, []);

<MemoizedButton onClick={handleClick}>Submit</MemoizedButton>
```

## Theming

Components support CSS custom properties for theming:

```tsx
// Apply custom theme
const customTheme = {
  '--eva-primary': '#1E3A8A',
  '--eva-secondary': '#64748B',
  '--eva-success': '#059669',
  '--eva-error': '#DC2626'
};

<div style={customTheme}>
  <EVAGCButton variant="primary">Themed Button</EVAGCButton>
</div>
```

## Common Patterns

### Loading States

```tsx
function AsyncForm() {
  const [loading, setLoading] = React.useState(false);
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    
    try {
      await submitForm();
    } finally {
      setLoading(false);
    }
  };
  
  return (
    <form onSubmit={handleSubmit}>
      {loading ? <EVASkeleton count={3} /> : <FormFields />}
      <EVAGCButton type="submit" disabled={loading}>
        {loading ? 'Submitting...' : 'Submit'}
      </EVAGCButton>
    </form>
  );
}
```

### Error Boundaries

```tsx
import { Component, ReactNode } from 'react';

class EVAErrorBoundary extends Component<
  { children: ReactNode },
  { hasError: boolean }
> {
  state = { hasError: false };
  
  static getDerivedStateFromError() {
    return { hasError: true };
  }
  
  render() {
    if (this.state.hasError) {
      return (
        <EVAAlert variant="destructive" title="Something went wrong">
          Please refresh the page or contact support.
        </EVAAlert>
      );
    }
    
    return this.props.children;
  }
}
```

## Complete Component List

All 49 components are available as React components:

### GC Components (4)
`EVAGCButton`, `EVAGCHeader`, `EVAGCFooter`, `EVALanguageSwitcher`

### Form Components (9)
`EVAInput`, `EVATextarea`, `EVACheckbox`, `EVASwitch`, `EVASelect`, `EVASelectItem`, `EVARadioGroup`, `EVARadioGroupItem`, `EVASlider`, `EVALabel`, `EVAInputOTP`

### Dialog Components (4)
`EVADialog`, `EVAAlertDialog`, `EVADrawer`, `EVASheet`

### Layout Components (10)
`EVATabs`, `EVAAccordion`, `EVACard`, `EVAPageShell`, `EVAContainer`, `EVAHeroBanner`, `EVASkipLink`

### Navigation Components (4)
`EVABreadcrumb`, `EVADropdownMenu`, `EVAContextMenu`, `EVAMenubar`

### UI Components (9)
`EVAButton`, `EVABadge`, `EVAAlert`, `EVATooltip`, `EVAPopover`, `EVASeparator`, `EVAProgress`, `EVASkeleton`, `EVAAspectRatio`

### Advanced Components (8)
`EVAChatPanel`, `EVAChatMessage`, `EVACalendar`, `EVACarousel`, `EVAPagination`, `EVAScrollArea`, `EVATable`, `EVAAvatar`, `EVAHoverCard`, `EVAToggle`, `EVACollapsible`

### ESDC Components (1)
`EVAProgramCard`

## Resources

- [NPM Package](https://www.npmjs.com/package/@eva-suite/sovereign-ui-react)
- [GitHub Repository](https://github.com/MarcoPolo483/EVA-Sovereign-UI-by-Copilot)
- [Component Demos](../../apps/demo)
- [Core Web Components](https://www.npmjs.com/package/@eva-suite/sovereign-ui)

## License

MIT © EVA Suite Team
