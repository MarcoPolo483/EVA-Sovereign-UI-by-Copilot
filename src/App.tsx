import { useState } from 'react';
import { Toaster } from 'sonner';
import { ESDCDemo } from '@/pages/ESDCDemo';
import { GCTemplatesDemo } from '@/pages/GCTemplatesDemo';

type Page = 'esdc' | 'templates';

function App() {
  const [currentPage, setCurrentPage] = useState<Page>('esdc');

  return (
    <div className="min-h-screen bg-background">
      <Toaster position="top-center" />

      <div>
        {currentPage === 'esdc' && (
          <ESDCDemo onNavigateToTemplates={() => setCurrentPage('templates')} />
        )}
        {currentPage === 'templates' && (
          <GCTemplatesDemo onNavigateToESDC={() => setCurrentPage('esdc')} />
        )}
      </div>
    </div>
  );
}

export default App;
