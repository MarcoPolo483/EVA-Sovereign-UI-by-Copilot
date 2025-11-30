export type Locale = 'en-CA' | 'fr-CA'

type TranslationKey = string
type Translations = Record<TranslationKey, string>

const translations: Record<Locale, Translations> = {
    'en-CA': {
        'app.name': 'Government Services Portal',
        'hero.title': 'Welcome to the Government Services Portal',
        'hero.description': 'Access services, information, and support for Canadian citizens and residents.',
        'language.switcher.label': 'Language',
        'language.english': 'English',
        'language.french': 'Français',
        'quick.actions.title': 'Quick Actions',
        'quick.actions.myAccount': 'My Account',
        'quick.actions.myAccount.desc': 'View and manage your account',
        'quick.actions.applications': 'Applications',
        'quick.actions.applications.desc': 'Track your applications',
        'quick.actions.payments': 'Payments',
        'quick.actions.payments.desc': 'Make a payment or view history',
        'quick.actions.documents': 'Documents',
        'quick.actions.documents.desc': 'Access your documents',
        'chat.title': 'EVA Assistant',
        'chat.subtitle': 'Ask me anything about government services',
        'chat.placeholder': 'Type your message...',
        'chat.send': 'Send',
        'chat.voice': 'Voice input',
        'chat.welcome': 'Hello! I\'m EVA, your virtual assistant. How can I help you today?',
        'footer.copyright': '© Government of Canada',
        'footer.privacy': 'Privacy',
        'footer.terms': 'Terms of Use',
        'footer.accessibility': 'Accessibility',
        'demo.controls': 'Demo Controls',
        'demo.profile': 'Sovereign Profile',
        'demo.language': 'Language',
    },
    'fr-CA': {
        'app.name': 'Portail des services gouvernementaux',
        'hero.title': 'Bienvenue au portail des services gouvernementaux',
        'hero.description': 'Accédez aux services, renseignements et soutien pour les citoyens et résidents canadiens.',
        'language.switcher.label': 'Langue',
        'language.english': 'English',
        'language.french': 'Français',
        'quick.actions.title': 'Actions rapides',
        'quick.actions.myAccount': 'Mon compte',
        'quick.actions.myAccount.desc': 'Voir et gérer votre compte',
        'quick.actions.applications': 'Demandes',
        'quick.actions.applications.desc': 'Suivre vos demandes',
        'quick.actions.payments': 'Paiements',
        'quick.actions.payments.desc': 'Faire un paiement ou voir l\'historique',
        'quick.actions.documents': 'Documents',
        'quick.actions.documents.desc': 'Accéder à vos documents',
        'chat.title': 'Assistante EVA',
        'chat.subtitle': 'Posez-moi vos questions sur les services gouvernementaux',
        'chat.placeholder': 'Tapez votre message...',
        'chat.send': 'Envoyer',
        'chat.voice': 'Entrée vocale',
        'chat.welcome': 'Bonjour! Je suis EVA, votre assistante virtuelle. Comment puis-je vous aider aujourd\'hui?',
        'footer.copyright': '© Gouvernement du Canada',
        'footer.privacy': 'Confidentialité',
        'footer.terms': 'Conditions d\'utilisation',
        'footer.accessibility': 'Accessibilité',
        'demo.controls': 'Contrôles de démo',
        'demo.profile': 'Profil souverain',
        'demo.language': 'Langue',
    },
}

class I18nService {
    private currentLocale: Locale = 'en-CA'

    setLocale(locale: Locale) {
        this.currentLocale = locale
        if (typeof window !== 'undefined') {
            window.dispatchEvent(new CustomEvent('eva-locale-changed', { detail: { locale } }))
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
