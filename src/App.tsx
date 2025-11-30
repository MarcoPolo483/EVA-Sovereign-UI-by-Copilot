import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Buildings, Code, Layout } from '@phosphor-icons/react';
import { Toaster } from 'sonner';
import { ESDCDemo } from '@/pages/ESDCDemo';
import { DeveloperKitDemo } from '@/pages/DeveloperKitDemo';
import { GCTemplatesDemo } from '@/pages/GCTemplatesDemo';

type Page = 'esdc' | 'devkit' | 'templates';

function App() {
  const [currentPage, setCurrentPage] = useState<Page>('templates');

  return (
    <div className="min-h-screen bg-background">
      <Toaster position="top-center" />
      
      <nav className="fixed top-4 left-1/2 -translate-x-1/2 z-50 bg-card border rounded-full shadow-lg px-2 py-2">
        <div className="flex gap-2">
          <Button
            variant={currentPage === 'templates' ? 'default' : 'ghost'}
            size="sm"
            onClick={() => setCurrentPage('templates')}
            className="flex items-center gap-2 rounded-full"
          >
            <Layout size={18} weight="duotone" />
            <span className="hidden sm:inline">GC Templates</span>
          </Button>
          <Button
            variant={currentPage === 'esdc' ? 'default' : 'ghost'}
            size="sm"
            onClick={() => setCurrentPage('esdc')}
            className="flex items-center gap-2 rounded-full"
          >
            <Buildings size={18} weight="duotone" />
            <span className="hidden sm:inline">ESDC Demo</span>
          </Button>
          <Button
            variant={currentPage === 'devkit' ? 'default' : 'ghost'}
            size="sm"
            onClick={() => setCurrentPage('devkit')}
            className="flex items-center gap-2 rounded-full"
          >
            <Code size={18} weight="duotone" />
            <span className="hidden sm:inline">Developer Kit</span>
          </Button>
        </div>
      </nav>

      <div className="pt-4">
        {currentPage === 'templates' && <GCTemplatesDemo />}
        {currentPage === 'esdc' && <ESDCDemo />}
        {currentPage === 'devkit' && <DeveloperKitDemo />}
      </div>
    </div>
  );
}

export default App;
