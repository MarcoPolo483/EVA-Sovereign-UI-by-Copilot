# Migration Guides

Complete guides for migrating from popular UI libraries to EVA Sovereign UI with component mapping, code examples, and best practices.

## Table of Contents

- [Material-UI (MUI) to EVA](#material-ui-migration)
- [Ant Design to EVA](#ant-design-migration)
- [Bootstrap to EVA](#bootstrap-migration)
- [Chakra UI to EVA](#chakra-ui-migration)
- [General Migration Strategy](#general-migration-strategy)

---

## Material-UI Migration

### Component Mapping

| Material-UI | EVA Sovereign UI | Notes |
|-------------|------------------|-------|
| `<Button>` | `<EVAButton>` or `<EVAGCButton>` | Use GC variant for government apps |
| `<TextField>` | `<EVAInput>` | Add `<EVALabel>` separately |
| `<Checkbox>` | `<EVACheckbox>` | |
| `<Switch>` | `<EVASwitch>` | |
| `<Select>` | `<EVASelect>` + `<EVASelectItem>` | |
| `<Radio>` / `<RadioGroup>` | `<EVARadioGroup>` + `<EVARadioGroupItem>` | |
| `<Slider>` | `<EVASlider>` | |
| `<Dialog>` | `<EVADialog>` | |
| `<Alert>` | `<EVAAlert>` | |
| `<Badge>` | `<EVABadge>` | |
| `<Tabs>` | `<EVATabs>` | |
| `<Accordion>` | `<EVAAccordion>` | |
| `<Card>` | `<EVACard>` | |
| `<Tooltip>` | `<EVATooltip>` | |
| `<Skeleton>` | `<EVASkeleton>` | |
| `<LinearProgress>` | `<EVAProgress>` | |
| `<CircularProgress>` | `<EVAProgress>` | Set `indeterminate` |
| `<Table>` | `<EVATable>` | |
| `<Drawer>` | `<EVADrawer>` | |
| `<Menu>` | `<EVADropdownMenu>` | |
| `<AppBar>` | `<EVAGCHeader>` | For GC apps |

### Code Examples

#### Before (Material-UI):
```tsx
import { Button, TextField, FormControl, FormLabel } from '@mui/material';

function MyForm() {
  const [email, setEmail] = useState('');
  
  return (
    <FormControl>
      <FormLabel htmlFor="email">Email</FormLabel>
      <TextField
        id="email"
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        variant="outlined"
        fullWidth
      />
      <Button variant="contained" color="primary">
        Submit
      </Button>
    </FormControl>
  );
}
```

#### After (EVA):
```tsx
import { EVAInput, EVALabel, EVAGCButton } from '@eva-suite/sovereign-ui-react';

function MyForm() {
  const [email, setEmail] = useState('');
  
  return (
    <div>
      <EVALabel htmlFor="email">Email</EVALabel>
      <EVAInput
        id="email"
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <EVAGCButton variant="primary">
        Submit
      </EVAGCButton>
    </div>
  );
}
```

### Theme Migration

**Material-UI Theme:**
```tsx
const theme = createTheme({
  palette: {
    primary: { main: '#1976d2' },
    secondary: { main: '#dc004e' }
  }
});
```

**EVA Theme (CSS Variables):**
```css
:root {
  --eva-primary: #2563eb;
  --eva-secondary: #64748b;
}
```

### Styling Migration

**MUI `sx` prop:**
```tsx
<Button sx={{ mt: 2, px: 4 }}>Click</Button>
```

**EVA inline styles:**
```tsx
<EVAButton style="margin-top: 1rem; padding-left: 2rem; padding-right: 2rem">
  Click
</EVAButton>
```

---

## Ant Design Migration

### Component Mapping

| Ant Design | EVA Sovereign UI | Notes |
|------------|------------------|-------|
| `<Button>` | `<EVAButton>` or `<EVAGCButton>` | |
| `<Input>` | `<EVAInput>` | |
| `<Input.TextArea>` | `<EVATextarea>` | |
| `<Checkbox>` | `<EVACheckbox>` | |
| `<Switch>` | `<EVASwitch>` | |
| `<Select>` | `<EVASelect>` | |
| `<Radio.Group>` | `<EVARadioGroup>` | |
| `<Slider>` | `<EVASlider>` | |
| `<Modal>` | `<EVADialog>` | |
| `<Alert>` | `<EVAAlert>` | |
| `<Badge>` | `<EVABadge>` | |
| `<Tabs>` | `<EVATabs>` | |
| `<Collapse>` | `<EVAAccordion>` | |
| `<Card>` | `<EVACard>` | |
| `<Tooltip>` | `<EVATooltip>` | |
| `<Skeleton>` | `<EVASkeleton>` | |
| `<Progress>` | `<EVAProgress>` | |
| `<Table>` | `<EVATable>` | |
| `<Drawer>` | `<EVADrawer>` | |
| `<Dropdown>` | `<EVADropdownMenu>` | |
| `<Breadcrumb>` | `<EVABreadcrumb>` | |
| `<Menu>` | `<EVAMenubar>` | |

### Code Examples

#### Before (Ant Design):
```tsx
import { Form, Input, Button, message } from 'antd';

function MyForm() {
  const [form] = Form.useForm();
  
  const onFinish = (values) => {
    message.success('Form submitted!');
  };
  
  return (
    <Form form={form} onFinish={onFinish} layout="vertical">
      <Form.Item 
        label="Email" 
        name="email" 
        rules={[{ required: true, type: 'email' }]}
      >
        <Input placeholder="Enter email" />
      </Form.Item>
      <Form.Item>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
}
```

#### After (EVA):
```tsx
import { EVAInput, EVALabel, EVAGCButton, EVAAlert } from '@eva-suite/sovereign-ui-react';
import { useState } from 'react';

function MyForm() {
  const [email, setEmail] = useState('');
  const [showSuccess, setShowSuccess] = useState(false);
  
  const handleSubmit = (e) => {
    e.preventDefault();
    setShowSuccess(true);
  };
  
  return (
    <form onSubmit={handleSubmit}>
      <EVALabel htmlFor="email">Email</EVALabel>
      <EVAInput
        id="email"
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Enter email"
        required
      />
      
      <EVAGCButton type="submit" variant="primary">
        Submit
      </EVAGCButton>
      
      {showSuccess && (
        <EVAAlert variant="success" dismissible>
          Form submitted!
        </EVAAlert>
      )}
    </form>
  );
}
```

---

## Bootstrap Migration

### Component Mapping

| Bootstrap | EVA Sovereign UI | Notes |
|-----------|------------------|-------|
| `.btn` | `<EVAButton>` or `<EVAGCButton>` | |
| `.form-control` | `<EVAInput>` | |
| `<textarea>` | `<EVATextarea>` | |
| `.form-check` | `<EVACheckbox>` | |
| `.form-switch` | `<EVASwitch>` | |
| `.form-select` | `<EVASelect>` | |
| `.form-check-input[type="radio"]` | `<EVARadioGroup>` | |
| `.form-range` | `<EVASlider>` | |
| `.modal` | `<EVADialog>` | |
| `.alert` | `<EVAAlert>` | |
| `.badge` | `<EVABadge>` | |
| `.nav-tabs` | `<EVATabs>` | |
| `.accordion` | `<EVAAccordion>` | |
| `.card` | `<EVACard>` | |
| `.tooltip` | `<EVATooltip>` | |
| `.progress` | `<EVAProgress>` | |
| `.table` | `<EVATable>` | |
| `.offcanvas` | `<EVADrawer>` | |
| `.dropdown` | `<EVADropdownMenu>` | |
| `.breadcrumb` | `<EVABreadcrumb>` | |

### Code Examples

#### Before (Bootstrap):
```html
<div class="mb-3">
  <label for="email" class="form-label">Email</label>
  <input 
    type="email" 
    class="form-control" 
    id="email"
    placeholder="name@example.com"
  >
</div>
<button type="submit" class="btn btn-primary">Submit</button>
```

#### After (EVA):
```html
<div style="margin-bottom: 1rem">
  <eva-label for="email">Email</eva-label>
  <eva-input 
    id="email"
    type="email"
    placeholder="name@example.com"
  ></eva-input>
</div>
<eva-gc-button type="submit" variant="primary">Submit</eva-gc-button>
```

### Grid System Migration

**Bootstrap Grid:**
```html
<div class="container">
  <div class="row">
    <div class="col-md-6">Column 1</div>
    <div class="col-md-6">Column 2</div>
  </div>
</div>
```

**EVA (use CSS Grid):**
```html
<eva-container size="lg">
  <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 1rem;">
    <div>Column 1</div>
    <div>Column 2</div>
  </div>
</eva-container>
```

---

## Chakra UI Migration

### Component Mapping

| Chakra UI | EVA Sovereign UI | Notes |
|-----------|------------------|-------|
| `<Button>` | `<EVAButton>` or `<EVAGCButton>` | |
| `<Input>` | `<EVAInput>` | |
| `<Textarea>` | `<EVATextarea>` | |
| `<Checkbox>` | `<EVACheckbox>` | |
| `<Switch>` | `<EVASwitch>` | |
| `<Select>` | `<EVASelect>` | |
| `<Radio>` / `<RadioGroup>` | `<EVARadioGroup>` | |
| `<Slider>` | `<EVASlider>` | |
| `<Modal>` | `<EVADialog>` | |
| `<Alert>` | `<EVAAlert>` | |
| `<Badge>` | `<EVABadge>` | |
| `<Tabs>` | `<EVATabs>` | |
| `<Accordion>` | `<EVAAccordion>` | |
| `<Card>` | `<EVACard>` | |
| `<Tooltip>` | `<EVATooltip>` | |
| `<Skeleton>` | `<EVASkeleton>` | |
| `<Progress>` | `<EVAProgress>` | |
| `<Table>` | `<EVATable>` | |
| `<Drawer>` | `<EVADrawer>` | |
| `<Menu>` | `<EVADropdownMenu>` | |

### Code Examples

#### Before (Chakra UI):
```tsx
import { Button, Input, FormControl, FormLabel, Stack } from '@chakra-ui/react';

function MyForm() {
  return (
    <Stack spacing={4}>
      <FormControl>
        <FormLabel>Email</FormLabel>
        <Input type="email" placeholder="Enter email" />
      </FormControl>
      <Button colorScheme="blue" size="lg">
        Submit
      </Button>
    </Stack>
  );
}
```

#### After (EVA):
```tsx
import { EVAInput, EVALabel, EVAGCButton } from '@eva-suite/sovereign-ui-react';

function MyForm() {
  return (
    <div style="display: flex; flex-direction: column; gap: 1rem">
      <div>
        <EVALabel>Email</EVALabel>
        <EVAInput type="email" placeholder="Enter email" />
      </div>
      <EVAGCButton variant="primary" size="lg">
        Submit
      </EVAGCButton>
    </div>
  );
}
```

---

## General Migration Strategy

### Phase 1: Assessment (1-2 days)

1. **Inventory Components**
   - List all components used
   - Note custom modifications
   - Identify dependencies

2. **Map Components**
   - Use tables above
   - Document gaps
   - Plan workarounds

3. **Estimate Effort**
   - Count component instances
   - Factor in testing
   - Add buffer (20%)

### Phase 2: Setup (1 day)

1. **Install EVA**
```bash
npm install @eva-suite/sovereign-ui @eva-suite/sovereign-ui-react
```

2. **Configure Build**
```typescript
// vite.config.ts
export default {
  optimizeDeps: {
    include: ['@eva-suite/sovereign-ui']
  }
};
```

3. **Import Styles**
```tsx
// App.tsx
import '@eva-suite/sovereign-ui/styles';
```

### Phase 3: Incremental Migration (2-4 weeks)

**Strategy: Bottom-up (Leaf components first)**

1. **Week 1: Form Components**
   - Migrate inputs, buttons, checkboxes
   - Test form submissions
   - Validate accessibility

2. **Week 2: Layout Components**
   - Migrate cards, tabs, accordions
   - Test responsive design
   - Verify keyboard navigation

3. **Week 3: Dialogs & Overlays**
   - Migrate modals, drawers, tooltips
   - Test focus management
   - Check z-index stacking

4. **Week 4: Complex Components**
   - Migrate tables, calendars, carousels
   - Performance testing
   - Cross-browser testing

### Phase 4: Testing (1 week)

1. **Visual Regression**
   - Screenshot comparisons
   - Check all breakpoints
   - Verify theme consistency

2. **Accessibility Audit**
   - axe-core scan
   - Keyboard navigation
   - Screen reader testing

3. **Integration Testing**
   - E2E test suite
   - Form submissions
   - API interactions

### Phase 5: Deployment (1 day)

1. **Staged Rollout**
   - Deploy to staging
   - QA approval
   - Gradual production rollout

2. **Monitoring**
   - Error tracking
   - Performance metrics
   - User feedback

### Migration Checklist

- [ ] Audit current component usage
- [ ] Map all components to EVA equivalents
- [ ] Install EVA packages
- [ ] Configure build tools
- [ ] Migrate shared components (Button, Input)
- [ ] Migrate page layouts
- [ ] Migrate complex features
- [ ] Update test suite
- [ ] Accessibility audit
- [ ] Performance testing
- [ ] Cross-browser testing
- [ ] Update documentation
- [ ] Train team on EVA
- [ ] Deploy to staging
- [ ] QA approval
- [ ] Production deployment
- [ ] Monitor metrics
- [ ] Remove old dependencies

### Common Pitfalls

**1. Styling Conflicts**
- Remove old library CSS
- Check specificity issues
- Use CSS isolation

**2. Event Handling**
- Web Components use CustomEvents
- Access detail property: `e.detail.value`
- Not `e.target.value` in some cases

**3. Form State Management**
- Use framework-specific hooks/composables
- React: `useEVAForm`
- Vue: `v-model`
- Angular: `formControlName`

**4. TypeScript Issues**
- Import type definitions
- Use framework-specific types
- Check HTMLElement extensions

### Getting Help

- [GitHub Issues](https://github.com/MarcoPolo483/EVA-Sovereign-UI-by-Copilot/issues)
- [API Documentation](../api/README.md)
- [Component Guidelines](../components/README.md)
- [Framework Integration](../framework-wrappers/README.md)

### Success Metrics

**Before Migration:**
- Bundle size
- Lighthouse score
- Test coverage
- Load time

**After Migration:**
- Bundle size reduction: Target 20-40%
- Accessibility score: WCAG 2.2 AA
- Test coverage: Maintain or improve
- Load time: Maintain or improve

## License

MIT © EVA Suite Team
