// Lightweight demo harness to showcase bilingual CMS adapter usage
import { InMemoryCMSAdapter, initCMSAdapter, type CMSContent } from '@/i18n/cms-adapter';

import type { Locale } from '@/i18n/cms-adapter';

const seed: Array<{ path: string; en: CMSContent; fr: CMSContent }> = [
  {
    path: 'welcome',
    en: { id: 'welcome', locale: 'en-CA' as Locale, title: 'Welcome', body: 'Hello from EVA Sovereign UI!' },
    fr: { id: 'bienvenue', locale: 'fr-CA' as Locale, title: 'Bienvenue', body: 'Bonjour de EVA Sovereign UI!' }
  },
  {
    path: 'service/apply',
    en: { id: 'apply', locale: 'en-CA' as Locale, title: 'Apply for Service', body: 'Complete the application form.' },
    fr: { id: 'demande', locale: 'fr-CA' as Locale, title: 'Demander le service', body: 'Remplissez le formulaire de demande.' }
  }
];

const adapter = initCMSAdapter(new InMemoryCMSAdapter(seed));

async function render(path: string) {
  const content: CMSContent = await adapter.fetchContent(path);
  const root = document.getElementById('cms-root')!;
  root.innerHTML = `
    <eva-gc-page>
      <header slot="header">
        <nav>
          <a href="${adapter.buildUrl('welcome')}">Home</a>
          <a href="${adapter.buildUrl('service/apply')}">Service</a>
          <eva-gc-language-switcher url-mode="prefix"></eva-gc-language-switcher>
        </nav>
      </header>
      <main>
        <h1>${content.title}</h1>
        <p>${content.body}</p>
      </main>
    </eva-gc-page>
  `;

  // No explicit handlers needed; switcher updates URL
}

// Simple router based on location
function currentPath(): string {
  const m = window.location.pathname.match(/^\/(en|fr)\/(.*)$/);
  return m ? m[2] : 'welcome';
}

render(currentPath());
