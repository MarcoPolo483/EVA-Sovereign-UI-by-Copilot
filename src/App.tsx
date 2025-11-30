import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Chat, Code } from '@phosphor-icons/react'
import { Toaster } from 'sonner'
import { DevKit } from '@/pages/DevKit'
import { ChatDemo } from '@/pages/ChatDemo'

type Page = 'devkit' | 'chat'

function App() {
  const [currentPage, setCurrentPage] = useState<Page>('devkit')

  return (
    <div className="min-h-screen bg-background">
      <Toaster position="top-center" />
      
      <header className="border-b bg-card sticky top-0 z-50">
        <div className="container mx-auto px-8 py-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-semibold tracking-tight">DevKit</h1>
              <p className="text-sm text-muted-foreground mt-1">CSS Shortcuts & Design Resources</p>
            </div>
            <nav className="flex gap-2">
              <Button
                variant={currentPage === 'devkit' ? 'default' : 'outline'}
                size="sm"
                onClick={() => setCurrentPage('devkit')}
                className="flex items-center gap-2"
              >
                <Code size={18} />
                DevKit
              </Button>
              <Button
                variant={currentPage === 'chat' ? 'default' : 'outline'}
                size="sm"
                onClick={() => setCurrentPage('chat')}
                className="flex items-center gap-2"
              >
                <Chat size={18} />
                Chat Demo
              </Button>
            </nav>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-8 py-12">
        {currentPage === 'devkit' && <DevKit />}
        {currentPage === 'chat' && <ChatDemo />}
      </main>
    </div>
  )
}

export default App
