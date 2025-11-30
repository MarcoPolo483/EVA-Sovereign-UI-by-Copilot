export type Locale = 'en-CA' | 'fr-CA'

type TranslationKey = string
type Translations = Record<TranslationKey, string>

const translations: Record<Locale, Translations> = {
    'en-CA': {
        'app.name': 'Government Services Portal',
        'hero.title': 'Welcome to the Government Services Portal',
        'hero.description': 'Access services, information, and support for Canadian citizens and residents.',
        'quick.actions.title': 'Quick Actions'
        'quick.actions.myAccount.desc'
        'quick.actions.applications.de
        'quick.actions.payments.desc': 'Make a 
        'quick.actions.documents.desc': 'Access 
        'chat.subtitle': 'Ask me anything about government services',
        'chat.send': 'Send',
        'chat.welcome': 'Hello! I\'m EVA, your virtual assistant. How
        'footer.privacy': 'Privacy',
        'footer.accessibility': 'Accessibility',
        'demo.profile': 'Sovereign Profile',
    },
        'app.name': 'Portail des servi
        'hero.description': 'Accédez aux services, renseignements et 
        'language.english': 'English',
        'quick.actions.title
        'quick.actions.myAccount.des
        'quick.actions.applications.desc': 'Suivre vos demandes',
        'quick.actions.payments.desc': 'Faire un paie
        'quick.actions.documents.des
        'chat.subtitle': 'Posez-moi vos
        'chat.send': 'Envoyer',
        'chat.welcome': 'Bonjour! Je suis
        'footer.privacy': 'Confidentialité',
        'footer.accessibility': 'Acc
      
    },

    private currentLocale: Locale = 'en-CA'
    setLocale(locale: Locale) {
        if (typeof window !== 'undefined') {
        }

        return this.currentLocale

        const translation = translations[this.currentLocale]?.[key]
            console.warn(`Translation key "${key}
        }
    }



























    }

    getLocale(): Locale {
        return this.currentLocale
    }

    t(key: TranslationKey): string {
        const translation = translations[this.currentLocale]?.[key]
        if (!translation) {
            console.warn(`Translation key "${key}" not found for locale "${this.currentLocale}"`)
            return translations['en-CA']?.[key] || key
        }
        return translation
    }
}

export const i18nService = new I18nService()
