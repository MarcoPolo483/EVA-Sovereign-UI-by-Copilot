import { useState, useEffect } from 'react'
import { useKV } from '@github/spark/hooks'
import { EVAGCHeader } from './components/eva/EVAGCHeader'
import { EVAPageShell } from './components/eva/EVAPageShell'
import { EVAHeroBanner } from './components/eva/EVAHeroBanner'
import { EVALanguageSwitcher } from './components/eva/EVALanguageSwitcher'
import { EVAQuickActions } from './components/eva/EVAQuickActions'
import { EVAChatPanel } from './components/eva/EVAChatPanel'
import { i18nService, type Locale } from './lib/i18n-service'
import { sovereignProfiles, type SovereignProfileId } from './lib/sovereign-profiles'
import { useLocaleChange } from './hooks/use-locale-change'

function App() {
    const [locale, setLocale] = useKV<Locale>('eva-locale', 'en-CA')
    const [profile, setProfile] = useKV<SovereignProfileId>('eva-profile', 'canada_gc_intranet')

    const currentLocale = locale ?? 'en-CA'
    const currentProfile = profile ?? 'canada_gc_intranet'

    useLocaleChange()

    useEffect(() => {
        i18nService.setLocale(currentLocale)
        document.documentElement.lang = currentLocale
    }, [currentLocale])

    useEffect(() => {
        const profileData = sovereignProfiles[currentProfile]
        if (profileData) {
            document.body.className = `eva-theme-${currentProfile}`
        }
    }, [currentProfile])

    const handleLanguageChange = (newLocale: Locale) => {
        setLocale(newLocale)
    }

    return (
        <div className="min-h-screen bg-background">
            <div 
                className="fixed top-4 right-4 z-50 bg-card/95 backdrop-blur-sm p-4 rounded-lg shadow-lg border border-border min-w-[220px]"
                role="region"
                aria-label={i18nService.t('demo.controls')}
            >
                <h3 className="text-sm font-semibold mb-3 text-foreground">
                    🎨 {i18nService.t('demo.controls')}
                </h3>
                
                <div className="mb-4">
                    <label 
                        htmlFor="profile-selector"
                        className="block text-xs font-medium mb-2 text-muted-foreground"
                    >
                        {i18nService.t('demo.profile')}
                    </label>
                    <select
                        id="profile-selector"
                        value={currentProfile}
                        onChange={(e) => setProfile(e.target.value as SovereignProfileId)}
                        className="w-full px-3 py-2 border-2 border-input rounded bg-background text-foreground text-sm cursor-pointer focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary focus:ring-offset-2"
                    >
                        {Object.entries(sovereignProfiles).map(([id, prof]) => (
                            <option key={id} value={id}>
                                {prof.name}
                            </option>
                        ))}
                    </select>
                </div>
                
                <div>
                    <label 
                        className="block text-xs font-medium mb-2 text-muted-foreground"
                        id="demo-language-label"
                    >
                        {i18nService.t('demo.language')}
                    </label>
                    <div aria-labelledby="demo-language-label">
                        <EVALanguageSwitcher 
                            currentLocale={currentLocale}
                            onLanguageChange={handleLanguageChange}
                        />
                    </div>
                </div>
            </div>

            <EVAPageShell
                header={
                    <EVAGCHeader 
                        appNameKey="app.name"
                        profile={currentProfile}
                        actions={
                            <EVALanguageSwitcher 
                                currentLocale={currentLocale}
                                onLanguageChange={handleLanguageChange}
                            />
                        }
                    />
                }
                footer={
                    <nav 
                        className="flex justify-between items-center flex-wrap gap-4 text-sm text-muted-foreground"
                        aria-label="Footer navigation"
                    >
                        <div>{i18nService.t('footer.copyright')}</div>
                        <div className="flex gap-6 flex-wrap">
                            <a 
                                href="#privacy" 
                                className="text-primary hover:underline focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 rounded"
                            >
                                {i18nService.t('footer.privacy')}
                            </a>
                            <a 
                                href="#terms" 
                                className="text-primary hover:underline focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 rounded"
                            >
                                {i18nService.t('footer.terms')}
                            </a>
                            <a 
                                href="#accessibility" 
                                className="text-primary hover:underline focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 rounded"
                            >
                                {i18nService.t('footer.accessibility')}
                            </a>
                        </div>
                    </nav>
                }
            >
                <EVAHeroBanner 
                    titleKey="hero.title"
                    descriptionKey="hero.description"
                />
                
                <div className="grid gap-8 mb-8 lg:grid-cols-2">
                    <EVAQuickActions />
                    <EVAChatPanel />
                </div>
            </EVAPageShell>
        </div>
    )
}

export default App