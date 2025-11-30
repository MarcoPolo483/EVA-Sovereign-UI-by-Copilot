import { useState } from 'react'
import {
  GCAlert,
  GCButton,
  GCBadge,
  GCCard,
  GCBreadcrumb,
  GCInput,
  GCTextarea,
  GCCheckbox,
  GCRadio,
  GCRadioGroup,
  GCSelect,
  GCProgressBar,
  GCPagination,
  GCTabs,
  GCAccordion,
  GCTable
} from '@/components/gc'
import { Download, PaperPlaneTilt, MagnifyingGlass } from '@phosphor-icons/react'
import { toast, Toaster } from 'sonner'

function App() {
  const [showAlert, setShowAlert] = useState(true)
  const [currentPage, setCurrentPage] = useState(1)
  const [activeTab, setActiveTab] = useState('buttons')
  const [formData, setFormData] = useState({
    firstName: '',
    email: '',
    message: '',
    newsletter: false,
    province: '',
    language: ''
  })

  const breadcrumbItems = [
    { label: 'Components', href: '/components' },
    { label: 'Design System' }
  ]

  const provinceOptions = [
    { value: 'on', label: 'Ontario' },
    { value: 'qc', label: 'Quebec' },
    { value: 'bc', label: 'British Columbia' },
    { value: 'ab', label: 'Alberta' }
  ]

  const tabItems = [
    {
      id: 'buttons',
      label: 'Buttons & Actions',
      content: (
        <div className="space-y-6">
          <div>
            <h3 className="text-lg font-semibold mb-4">Button Variants</h3>
            <div className="flex flex-wrap gap-3">
              <GCButton variant="primary">Primary Button</GCButton>
              <GCButton variant="secondary">Secondary Button</GCButton>
              <GCButton variant="supertask">Supertask</GCButton>
              <GCButton variant="danger">Danger Button</GCButton>
              <GCButton variant="link">Link Button</GCButton>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Button Sizes</h3>
            <div className="flex flex-wrap items-center gap-3">
              <GCButton size="small">Small</GCButton>
              <GCButton size="default">Default</GCButton>
              <GCButton size="large">Large</GCButton>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Buttons with Icons</h3>
            <div className="flex flex-wrap gap-3">
              <GCButton>
                <div className="flex items-center gap-2">
                  <Download size={20} />
                  <span>Download</span>
                </div>
              </GCButton>
              <GCButton variant="primary">
                <div className="flex items-center gap-2">
                  <PaperPlaneTilt size={20} />
                  <span>Submit</span>
                </div>
              </GCButton>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Button States</h3>
            <div className="flex flex-wrap gap-3">
              <GCButton disabled>Disabled Button</GCButton>
              <GCButton fullWidth>Full Width Button</GCButton>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'forms',
      label: 'Form Elements',
      content: (
        <div className="space-y-6">
          <GCInput
            label="First Name"
            placeholder="Enter your first name"
            value={formData.firstName}
            onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
            fullWidth
            required
          />

          <GCInput
            label="Email Address"
            type="email"
            placeholder="name@example.com"
            helperText="We'll never share your email"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            fullWidth
          />

          <GCSelect
            label="Province"
            options={provinceOptions}
            placeholder="Select a province"
            value={formData.province}
            onChange={(e) => setFormData({ ...formData, province: e.target.value })}
            fullWidth
          />

          <GCTextarea
            label="Message"
            placeholder="Enter your message"
            helperText="Maximum 500 characters"
            value={formData.message}
            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
            fullWidth
          />

          <GCCheckbox
            label="Subscribe to newsletter"
            checked={formData.newsletter}
            onChange={(e) => setFormData({ ...formData, newsletter: e.target.checked })}
          />

          <GCRadioGroup label="Preferred Language">
            <GCRadio
              name="language"
              value="en"
              label="English"
              checked={formData.language === 'en'}
              onChange={(e) => setFormData({ ...formData, language: e.target.value })}
            />
            <GCRadio
              name="language"
              value="fr"
              label="Français"
              checked={formData.language === 'fr'}
              onChange={(e) => setFormData({ ...formData, language: e.target.value })}
            />
          </GCRadioGroup>

          <GCButton
            variant="primary"
            onClick={() => toast.success('Form submitted successfully!')}
          >
            Submit Form
          </GCButton>
        </div>
      )
    },
    {
      id: 'data',
      label: 'Data Display',
      content: (
        <div className="space-y-6">
          <div>
            <h3 className="text-lg font-semibold mb-4">Badges</h3>
            <div className="flex flex-wrap gap-2">
              <GCBadge variant="default">Default</GCBadge>
              <GCBadge variant="info">Info</GCBadge>
              <GCBadge variant="success">Success</GCBadge>
              <GCBadge variant="warning">Warning</GCBadge>
              <GCBadge variant="danger">Danger</GCBadge>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Progress Bars</h3>
            <div className="space-y-4">
              <GCProgressBar value={25} label="Upload Progress" showPercentage />
              <GCProgressBar value={75} variant="success" showPercentage />
              <GCProgressBar value={100} variant="success" label="Complete" />
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Table</h3>
            <GCTable
              columns={[
                { key: 'name', header: 'Name' },
                { key: 'department', header: 'Department' },
                { key: 'status', header: 'Status', render: (value) => <GCBadge variant={value === 'Active' ? 'success' : 'default'}>{value}</GCBadge> }
              ]}
              data={[
                { name: 'John Smith', department: 'Finance', status: 'Active' },
                { name: 'Jane Doe', department: 'IT', status: 'Active' },
                { name: 'Bob Johnson', department: 'HR', status: 'Inactive' }
              ]}
              striped
              hoverable
            />
          </div>
        </div>
      )
    }
  ]

  const accordionItems = [
    {
      id: 'about',
      title: 'About the GC Design System',
      content: <p>The Government of Canada Design System provides a consistent, accessible, and bilingual design language for all digital services.</p>
    },
    {
      id: 'accessibility',
      title: 'Accessibility Features',
      content: <p>All components meet WCAG 2.1 Level AA standards and include proper ARIA labels, keyboard navigation, and screen reader support.</p>
    },
    {
      id: 'bilingual',
      title: 'Bilingual Support',
      content: <p>Components are designed to work seamlessly in both English and French, supporting Canada's official languages policy.</p>
    }
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      <Toaster position="top-right" />
      
      <header className="bg-white border-b-4 border-[oklch(0.45_0.12_250)] shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">Government of Canada Design System</h1>
              <p className="text-gray-600 mt-1">Système de conception du gouvernement du Canada</p>
            </div>
            <div className="flex gap-2">
              <GCButton variant="secondary" size="small">
                <div className="flex items-center gap-2">
                  <MagnifyingGlass size={16} />
                  <span>Search</span>
                </div>
              </GCButton>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 py-8">
        <GCBreadcrumb items={breadcrumbItems} className="mb-6" />

        {showAlert && (
          <GCAlert
            variant="info"
            title="Welcome to the GC Design System"
            dismissible
            onDismiss={() => setShowAlert(false)}
            className="mb-6"
          >
            This showcase demonstrates all available components from the Government of Canada design system. 
            All components are accessible, bilingual-ready, and follow GC design standards.
          </GCAlert>
        )}

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
          <GCCard title="Components" variant="bordered">
            <p className="text-gray-700">15+ production-ready components following GC standards.</p>
            <div className="mt-4">
              <GCButton variant="primary" size="small">View All</GCButton>
            </div>
          </GCCard>

          <GCCard title="Accessibility" variant="bordered">
            <p className="text-gray-700">WCAG 2.1 Level AA compliant with full keyboard navigation.</p>
            <div className="mt-4">
              <GCButton variant="primary" size="small">Learn More</GCButton>
            </div>
          </GCCard>

          <GCCard title="Bilingual" variant="bordered">
            <p className="text-gray-700">Built-in support for English and French content.</p>
            <div className="mt-4">
              <GCButton variant="primary" size="small">Documentation</GCButton>
            </div>
          </GCCard>
        </div>

        <GCCard className="mb-8">
          <GCTabs tabs={tabItems} activeTab={activeTab} onTabChange={setActiveTab} />
        </GCCard>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          <GCCard title="Accordion Example">
            <GCAccordion items={accordionItems} />
          </GCCard>

          <GCCard title="Alert Examples">
            <div className="space-y-4">
              <GCAlert variant="success" title="Success">
                Your application has been submitted successfully.
              </GCAlert>
              <GCAlert variant="warning" title="Warning">
                This page will expire in 5 minutes.
              </GCAlert>
              <GCAlert variant="danger" title="Error">
                Unable to process your request. Please try again.
              </GCAlert>
            </div>
          </GCCard>
        </div>

        <GCCard title="Pagination Example" className="mb-8">
          <div className="flex justify-center">
            <GCPagination
              currentPage={currentPage}
              totalPages={10}
              onPageChange={setCurrentPage}
            />
          </div>
          <p className="text-center text-gray-600 mt-4">Current page: {currentPage}</p>
        </GCCard>
      </main>

      <footer className="bg-white border-t border-gray-200 mt-12">
        <div className="max-w-7xl mx-auto px-4 py-8">
          <div className="flex justify-between items-center flex-wrap gap-4">
            <div className="text-sm text-gray-600">
              © {new Date().getFullYear()} Government of Canada
            </div>
            <div className="flex gap-6 text-sm">
              <a href="#" className="text-[oklch(0.45_0.12_250)] hover:underline">Privacy</a>
              <a href="#" className="text-[oklch(0.45_0.12_250)] hover:underline">Terms</a>
              <a href="#" className="text-[oklch(0.45_0.12_250)] hover:underline">Accessibility</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
