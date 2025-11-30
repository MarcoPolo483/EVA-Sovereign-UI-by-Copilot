import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { 
  GCButton,
  GCBadge,
  GCAlert,
  GCInput,
  GCTextarea,
  GCCheckbox,
  GCRadio,
  GCSelect,
  GCProgressBar,
  GCTabs,
  GCAccordion,
  GCTable,
  GCPagination,
  GCBreadcrumb
} from '@/components/gc';
import { GCBasicTemplate } from './GCBasicTemplate';
import { GCFormTemplate } from './GCFormTemplate';
import { GCServiceTemplate } from './GCServiceTemplate';
import { GCTopicTemplate } from './GCTopicTemplate';
import { GCCalculatorTemplate } from './GCCalculatorTemplate';
import { GCChecklistTemplate } from './GCChecklistTemplate';
import { GCContactTemplate } from './GCContactTemplate';
import { GCNewsTemplate } from './GCNewsTemplate';
import { GCDashboardTemplate } from './GCDashboardTemplate';
import { CheckCircle, Copy } from '@phosphor-icons/react';
import { toast } from 'sonner';

export function GCComponentsShowcase() {
  const [copiedCode, setCopiedCode] = useState<string | null>(null);
  const [currentTab, setCurrentTab] = useState('buttons');

  const handleCopyCode = (code: string, label: string) => {
    navigator.clipboard.writeText(code);
    setCopiedCode(label);
    toast.success(`Copied ${label}!`);
    setTimeout(() => setCopiedCode(null), 2000);
  };

  const codeExamples = {
    buttons: `<GCButton variant="primary">Primary Action</GCButton>
<GCButton variant="secondary">Secondary Action</GCButton>
<GCButton variant="supertask">Important Task</GCButton>
<GCButton variant="danger">Delete</GCButton>
<GCButton variant="link">Text Link</GCButton>`,

    badges: `<GCBadge variant="info">Info</GCBadge>
<GCBadge variant="success">Success</GCBadge>
<GCBadge variant="warning">Warning</GCBadge>
<GCBadge variant="error">Error</GCBadge>`,

    alerts: `<GCAlert variant="info">
  This is an informational message
</GCAlert>

<GCAlert variant="success">
  Your application was submitted successfully
</GCAlert>

<GCAlert variant="warning">
  Please review your information before proceeding
</GCAlert>

<GCAlert variant="error">
  There was an error processing your request
</GCAlert>`,

    forms: `<GCInput 
  id="name" 
  label="Full Name" 
  required 
  placeholder="Enter your name"
  helperText="As it appears on your ID"
/>

<GCTextarea 
  id="comments" 
  label="Comments" 
  rows={4}
  placeholder="Enter your comments here"
/>

<GCCheckbox 
  id="agree" 
  label="I agree to the terms" 
/>

<GCRadio 
  id="option1" 
  name="choice" 
  label="Option 1" 
/>

<GCSelect 
  id="province" 
  label="Province" 
  options={[
    { value: 'ON', label: 'Ontario' },
    { value: 'QC', label: 'Quebec' }
  ]}
/>`,

    navigation: `<GCBreadcrumb 
  items={[
    { label: 'Home', href: '/' },
    { label: 'Services', href: '/services' },
    { label: 'Current' }
  ]} 
/>

<GCTabs 
  tabs={[
    { id: 'tab1', label: 'Tab 1', content: <div>Content 1</div> },
    { id: 'tab2', label: 'Tab 2', content: <div>Content 2</div> }
  ]} 
/>

<GCPagination 
  currentPage={1} 
  totalPages={10} 
  onPageChange={(page) => console.log(page)} 
/>`,

    dataDisplay: `<GCProgressBar value={65} max={100} label="Progress" />

<GCTable 
  columns={[
    { key: 'name', header: 'Name' },
    { key: 'email', header: 'Email' },
    { key: 'status', header: 'Status' }
  ]}
  data={[
    { name: 'John Doe', email: 'john@example.com', status: 'Active' },
    { name: 'Jane Smith', email: 'jane@example.com', status: 'Pending' }
  ]}
/>

<GCAccordion 
  items={[
    { 
      id: '1', 
      title: 'Question 1', 
      content: 'Answer to question 1' 
    },
    { 
      id: '2', 
      title: 'Question 2', 
      content: 'Answer to question 2' 
    }
  ]} 
/>`
  };

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-4xl font-bold text-primary mb-4">GC Design System Components</h1>
        <p className="text-xl text-muted-foreground">
          Complete component library following Government of Canada design standards
        </p>
      </div>

      <Tabs value={currentTab} onValueChange={setCurrentTab} className="space-y-6">
        <TabsList className="grid w-full grid-cols-3 lg:grid-cols-6 h-auto">
          <TabsTrigger value="buttons" className="py-3">Buttons</TabsTrigger>
          <TabsTrigger value="badges" className="py-3">Badges & Alerts</TabsTrigger>
          <TabsTrigger value="forms" className="py-3">Form Inputs</TabsTrigger>
          <TabsTrigger value="navigation" className="py-3">Navigation</TabsTrigger>
          <TabsTrigger value="dataDisplay" className="py-3">Data Display</TabsTrigger>
          <TabsTrigger value="templates" className="py-3">Templates</TabsTrigger>
        </TabsList>

        <TabsContent value="buttons" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Button Variants</CardTitle>
              <CardDescription>All official GC button styles with proper accessibility</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="flex flex-wrap gap-4">
                <GCButton variant="primary">Primary Action</GCButton>
                <GCButton variant="secondary">Secondary Action</GCButton>
                <GCButton variant="supertask">Important Task</GCButton>
                <GCButton variant="danger">Delete</GCButton>
                <GCButton variant="link">Text Link</GCButton>
              </div>
              
              <div>
                <h4 className="font-semibold mb-2">Button Sizes</h4>
                <div className="flex flex-wrap gap-4 items-center">
                  <GCButton variant="primary" size="small">Small</GCButton>
                  <GCButton variant="primary" size="default">Default</GCButton>
                  <GCButton variant="primary" size="large">Large</GCButton>
                </div>
              </div>

              <div>
                <h4 className="font-semibold mb-2">Full Width</h4>
                <GCButton variant="primary" fullWidth>Full Width Button</GCButton>
              </div>

              <div className="relative">
                <pre className="bg-muted p-4 rounded-lg overflow-x-auto text-sm font-mono">
                  <code>{codeExamples.buttons}</code>
                </pre>
                <button
                  className="absolute top-2 right-2 p-2 hover:bg-muted-foreground/10 rounded"
                  onClick={() => handleCopyCode(codeExamples.buttons, 'Button code')}
                >
                  {copiedCode === 'Button code' ? <CheckCircle size={16} /> : <Copy size={16} />}
                </button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="badges" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Badges</CardTitle>
              <CardDescription>Status indicators and labels</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="flex flex-wrap gap-3">
                <GCBadge variant="info">Info</GCBadge>
                <GCBadge variant="success">Success</GCBadge>
                <GCBadge variant="warning">Warning</GCBadge>
                <GCBadge variant="danger">Error</GCBadge>
              </div>

              <div className="relative">
                <pre className="bg-muted p-4 rounded-lg overflow-x-auto text-sm font-mono">
                  <code>{codeExamples.badges}</code>
                </pre>
                <button
                  className="absolute top-2 right-2 p-2 hover:bg-muted-foreground/10 rounded"
                  onClick={() => handleCopyCode(codeExamples.badges, 'Badge code')}
                >
                  {copiedCode === 'Badge code' ? <CheckCircle size={16} /> : <Copy size={16} />}
                </button>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Alerts</CardTitle>
              <CardDescription>Important messages and notifications</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <GCAlert variant="info">
                This is an informational message about your application
              </GCAlert>
              <GCAlert variant="success">
                Your application was submitted successfully
              </GCAlert>
              <GCAlert variant="warning">
                Please review your information before proceeding
              </GCAlert>
              <GCAlert variant="danger">
                There was an error processing your request
              </GCAlert>

              <div className="relative mt-6">
                <pre className="bg-muted p-4 rounded-lg overflow-x-auto text-sm font-mono">
                  <code>{codeExamples.alerts}</code>
                </pre>
                <button
                  className="absolute top-2 right-2 p-2 hover:bg-muted-foreground/10 rounded"
                  onClick={() => handleCopyCode(codeExamples.alerts, 'Alert code')}
                >
                  {copiedCode === 'Alert code' ? <CheckCircle size={16} /> : <Copy size={16} />}
                </button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="forms" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Form Components</CardTitle>
              <CardDescription>Accessible form inputs following GC standards</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-6 max-w-2xl">
                <GCInput 
                  id="demo-name" 
                  label="Full Name" 
                  required 
                  placeholder="Enter your name"
                  helperText="As it appears on your government-issued ID"
                />

                <GCTextarea 
                  id="demo-comments" 
                  label="Comments" 
                  rows={4}
                  placeholder="Enter your comments here"
                  helperText="Maximum 500 characters"
                />

                <div className="space-y-2">
                  <GCCheckbox 
                    id="demo-agree" 
                    label="I agree to the terms and conditions" 
                  />
                  <GCCheckbox 
                    id="demo-newsletter" 
                    label="Send me updates about new services" 
                  />
                </div>

                <div className="space-y-2">
                  <label className="font-semibold text-sm">Preferred Language</label>
                  <GCRadio 
                    id="demo-en" 
                    name="language" 
                    value="en"
                    label="English" 
                  />
                  <GCRadio 
                    id="demo-fr" 
                    name="language" 
                    value="fr"
                    label="Français" 
                  />
                </div>

                <GCSelect 
                  id="demo-province" 
                  label="Province or Territory" 
                  required
                  options={[
                    { value: '', label: 'Select...' },
                    { value: 'ON', label: 'Ontario' },
                    { value: 'QC', label: 'Quebec' },
                    { value: 'BC', label: 'British Columbia' },
                    { value: 'AB', label: 'Alberta' },
                  ]}
                />
              </div>

              <div className="relative mt-6">
                <pre className="bg-muted p-4 rounded-lg overflow-x-auto text-sm font-mono">
                  <code>{codeExamples.forms}</code>
                </pre>
                <button
                  className="absolute top-2 right-2 p-2 hover:bg-muted-foreground/10 rounded"
                  onClick={() => handleCopyCode(codeExamples.forms, 'Form code')}
                >
                  {copiedCode === 'Form code' ? <CheckCircle size={16} /> : <Copy size={16} />}
                </button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="navigation" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Navigation Components</CardTitle>
              <CardDescription>Breadcrumbs, tabs, and pagination</CardDescription>
            </CardHeader>
            <CardContent className="space-y-8">
              <div>
                <h4 className="font-semibold mb-3">Breadcrumbs</h4>
                <GCBreadcrumb 
                  items={[
                    { label: 'Home', href: '/' },
                    { label: 'Services', href: '/services' },
                    { label: 'Employment Insurance', href: '/services/ei' },
                    { label: 'Apply' }
                  ]} 
                />
              </div>

              <div>
                <h4 className="font-semibold mb-3">Tabs</h4>
                <GCTabs 
                  tabs={[
                    { id: 'overview', label: 'Overview', content: <div className="p-4 bg-muted/30 rounded">Overview content goes here</div> },
                    { id: 'eligibility', label: 'Eligibility', content: <div className="p-4 bg-muted/30 rounded">Eligibility requirements</div> },
                    { id: 'apply', label: 'How to Apply', content: <div className="p-4 bg-muted/30 rounded">Application instructions</div> }
                  ]} 
                />
              </div>

              <div>
                <h4 className="font-semibold mb-3">Pagination</h4>
                <GCPagination 
                  currentPage={3} 
                  totalPages={10} 
                  onPageChange={(page) => toast.info(`Navigating to page ${page}`)} 
                />
              </div>

              <div className="relative">
                <pre className="bg-muted p-4 rounded-lg overflow-x-auto text-sm font-mono">
                  <code>{codeExamples.navigation}</code>
                </pre>
                <button
                  className="absolute top-2 right-2 p-2 hover:bg-muted-foreground/10 rounded"
                  onClick={() => handleCopyCode(codeExamples.navigation, 'Navigation code')}
                >
                  {copiedCode === 'Navigation code' ? <CheckCircle size={16} /> : <Copy size={16} />}
                </button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="dataDisplay" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Data Display Components</CardTitle>
              <CardDescription>Tables, progress bars, and accordions</CardDescription>
            </CardHeader>
            <CardContent className="space-y-8">
              <div>
                <h4 className="font-semibold mb-3">Progress Bar</h4>
                <GCProgressBar value={65} max={100} label="Application Progress" />
                <div className="mt-4">
                  <GCProgressBar value={30} max={100} label="Profile Completion" />
                </div>
              </div>

              <div>
                <h4 className="font-semibold mb-3">Data Table</h4>
                <GCTable 
                  columns={[
                    { key: 'name', header: 'Name' },
                    { key: 'email', header: 'Email' },
                    { key: 'province', header: 'Province' },
                    { key: 'status', header: 'Status' }
                  ]}
                  data={[
                    { name: 'John Doe', email: 'john.doe@example.com', province: 'Ontario', status: 'Active' },
                    { name: 'Jane Smith', email: 'jane.smith@example.com', province: 'Quebec', status: 'Pending' },
                    { name: 'Bob Johnson', email: 'bob.johnson@example.com', province: 'British Columbia', status: 'Active' }
                  ]}
                />
              </div>

              <div>
                <h4 className="font-semibold mb-3">Accordion (FAQ)</h4>
                <GCAccordion 
                  items={[
                    { 
                      id: '1', 
                      title: 'Who is eligible for Employment Insurance?', 
                      content: 'You may be eligible for EI regular benefits if you lost your job through no fault of your own, have been without work and without pay for at least seven consecutive days, and have worked for the required number of insurable employment hours.' 
                    },
                    { 
                      id: '2', 
                      title: 'How do I apply for benefits?', 
                      content: 'You can apply for benefits online through My Service Canada Account. You will need your Social Insurance Number and relevant employment information for the last 52 weeks.' 
                    },
                    { 
                      id: '3', 
                      title: 'How long does it take to process my application?', 
                      content: 'It typically takes 28 days to process a complete EI application. You should apply as soon as you stop working to avoid delays in receiving your benefits.' 
                    }
                  ]} 
                />
              </div>

              <div className="relative">
                <pre className="bg-muted p-4 rounded-lg overflow-x-auto text-sm font-mono">
                  <code>{codeExamples.dataDisplay}</code>
                </pre>
                <button
                  className="absolute top-2 right-2 p-2 hover:bg-muted-foreground/10 rounded"
                  onClick={() => handleCopyCode(codeExamples.dataDisplay, 'Data Display code')}
                >
                  {copiedCode === 'Data Display code' ? <CheckCircle size={16} /> : <Copy size={16} />}
                </button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="templates" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Page Templates</CardTitle>
              <CardDescription>Complete page layouts following GC Design System patterns</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <p className="text-base text-muted-foreground">
                Choose from 10 production-ready page templates designed for common government service patterns. Each template includes proper accessibility, bilingual support, and follows official GC design standards.
              </p>

              <div className="grid md:grid-cols-2 gap-4">
                <div className="border rounded-lg p-4 hover:border-primary transition-colors">
                  <h3 className="text-lg font-bold mb-2">Basic Page</h3>
                  <p className="text-sm text-muted-foreground mb-3">Standard content page with proper typography and structure</p>
                  <GCButton variant="link" size="small">View template</GCButton>
                </div>

                <div className="border rounded-lg p-4 hover:border-primary transition-colors">
                  <h3 className="text-lg font-bold mb-2">Application Form</h3>
                  <p className="text-sm text-muted-foreground mb-3">Complete form with validation and accessibility features</p>
                  <GCButton variant="link" size="small">View template</GCButton>
                </div>

                <div className="border rounded-lg p-4 hover:border-primary transition-colors">
                  <h3 className="text-lg font-bold mb-2">Service Page</h3>
                  <p className="text-sm text-muted-foreground mb-3">Service description with eligibility, how to apply, and FAQ</p>
                  <GCButton variant="link" size="small">View template</GCButton>
                </div>

                <div className="border rounded-lg p-4 hover:border-primary transition-colors">
                  <h3 className="text-lg font-bold mb-2">Topic Page</h3>
                  <p className="text-sm text-muted-foreground mb-3">Topic navigation with service cards and most requested links</p>
                  <GCButton variant="link" size="small">View template</GCButton>
                </div>

                <div className="border rounded-lg p-4 hover:border-primary transition-colors">
                  <h3 className="text-lg font-bold mb-2">Calculator Tool</h3>
                  <p className="text-sm text-muted-foreground mb-3">Interactive calculator for pension estimates and benefits</p>
                  <GCButton variant="link" size="small">View template</GCButton>
                </div>

                <div className="border rounded-lg p-4 hover:border-primary transition-colors">
                  <h3 className="text-lg font-bold mb-2">Checklist/Wizard</h3>
                  <p className="text-sm text-muted-foreground mb-3">Multi-step eligibility checker with progress tracking</p>
                  <GCButton variant="link" size="small">View template</GCButton>
                </div>

                <div className="border rounded-lg p-4 hover:border-primary transition-colors">
                  <h3 className="text-lg font-bold mb-2">Contact Page</h3>
                  <p className="text-sm text-muted-foreground mb-3">Contact information organized by channel (phone, online, in-person)</p>
                  <GCButton variant="link" size="small">View template</GCButton>
                </div>

                <div className="border rounded-lg p-4 hover:border-primary transition-colors">
                  <h3 className="text-lg font-bold mb-2">News & Updates</h3>
                  <p className="text-sm text-muted-foreground mb-3">News articles with filtering, search, and pagination</p>
                  <GCButton variant="link" size="small">View template</GCButton>
                </div>

                <div className="border rounded-lg p-4 hover:border-primary transition-colors">
                  <h3 className="text-lg font-bold mb-2">Dashboard</h3>
                  <p className="text-sm text-muted-foreground mb-3">User dashboard for My Service Canada Account</p>
                  <GCButton variant="link" size="small">View template</GCButton>
                </div>

                <div className="border rounded-lg p-4 hover:border-primary transition-colors">
                  <h3 className="text-lg font-bold mb-2">Components Showcase</h3>
                  <p className="text-sm text-muted-foreground mb-3">Interactive demo of all GC Design System components</p>
                  <GCButton variant="link" size="small">View template</GCButton>
                </div>
              </div>

              <div className="bg-muted/30 rounded-lg p-6 mt-6">
                <h4 className="font-bold text-lg mb-3">Template Features</h4>
                <div className="grid md:grid-cols-2 gap-3 text-sm">
                  <div className="flex items-start gap-2">
                    <CheckCircle size={18} weight="fill" className="text-green-600 flex-shrink-0 mt-0.5" />
                    <span>WCAG 2.1 Level AA compliant</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle size={18} weight="fill" className="text-green-600 flex-shrink-0 mt-0.5" />
                    <span>Fully responsive design</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle size={18} weight="fill" className="text-green-600 flex-shrink-0 mt-0.5" />
                    <span>Bilingual-ready architecture</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle size={18} weight="fill" className="text-green-600 flex-shrink-0 mt-0.5" />
                    <span>Keyboard navigation support</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle size={18} weight="fill" className="text-green-600 flex-shrink-0 mt-0.5" />
                    <span>Semantic HTML structure</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle size={18} weight="fill" className="text-green-600 flex-shrink-0 mt-0.5" />
                    <span>Official GC design tokens</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
