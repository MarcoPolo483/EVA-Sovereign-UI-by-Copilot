export type Locale = 'en-CA' | 'fr-CA'

type TranslationKey = 
    | 'app.name'
    | 'hero.title'
    | 'hero.description'
    | 'language.english'
    | 'language.french'
    | 'language.switcher.label'
    | 'demo.controls'
    | 'demo.profile'
    | 'demo.language'
    | 'quick.actions.title'
    | 'quick.actions.myAccount'
    | 'quick.actions.myAccount.desc'
    | 'quick.actions.applications'
    | 'quick.actions.applications.desc'
    | 'quick.actions.payments'
    | 'quick.actions.payments.desc'
    | 'quick.actions.documents'
    | 'quick.actions.documents.desc'
    | 'chat.title'
    | 'chat.subtitle'
    | 'chat.placeholder'
    | 'chat.send'
    | 'chat.welcome'
    | 'chat.voice'
    | 'footer.copyright'
    | 'footer.privacy'
    | 'footer.terms'
    | 'footer.accessibility'

type Translations = Record<TranslationKey, string>
type PartialTranslations = Partial<Record<string, string>>

const translations: Record<Locale, PartialTranslations> = {
    'en-CA': {
        'app.name': 'Government Services Portal',
        'hero.title': 'Welcome to the Government Services Portal',
        'hero.description': 'Access services, information, and support for Canadian citizens and residents.',
        'language.english': 'English',
        'language.french': 'Français',
        'language.switcher.label': 'Language',
        'demo.controls': 'Demo Controls',
        'demo.profile': 'Sovereign Profile',
        'demo.language': 'Language',
        'quick.actions.title': 'Quick Actions',
        'quick.actions.myAccount': 'My Account',
        'quick.actions.myAccount.desc': 'View and manage your account details',
        'quick.actions.applications': 'Applications',
        'quick.actions.applications.desc': 'Track your applications',
        'quick.actions.payments': 'Payments',
        'quick.actions.payments.desc': 'Make a payment or view history',
        'quick.actions.documents': 'Documents',
        'quick.actions.documents.desc': 'Access your documents and files',
        'chat.title': 'Ask EVA',
        'chat.subtitle': 'Ask me anything about government services',
        'chat.placeholder': 'Type your question here...',
        'chat.send': 'Send',
        'chat.welcome': 'Hello! I\'m EVA, your virtual assistant. How can I help you today?',
        'chat.voice': 'Voice input is not yet implemented',
        'footer.copyright': '© 2024 Government of Canada. All rights reserved.',
        'footer.privacy': 'Privacy',
        'footer.terms': 'Terms of Use',
        'footer.accessibility': 'Accessibility',
    },
    'fr-CA': {
        'app.name': 'Portail des services gouvernementaux',
        'hero.title': 'Bienvenue au Portail des services gouvernementaux',
        'hero.description': 'Accédez aux services, renseignements et soutien pour les citoyens et résidents canadiens.',
        'language.english': 'English',
        'language.french': 'Français',
        'language.switcher.label': 'Langue',
        'demo.controls': 'Contrôles de démonstration',
        'demo.profile': 'Profil souverain',
        'demo.language': 'Langue',
        'quick.actions.title': 'Actions rapides',
        'quick.actions.myAccount': 'Mon compte',
        'quick.actions.myAccount.desc': 'Voir et gérer les détails de votre compte',
        'quick.actions.applications': 'Applications',
        'quick.actions.applications.desc': 'Suivre vos demandes',
        'quick.actions.payments': 'Paiements',
        'quick.actions.payments.desc': 'Effectuer un paiement ou consulter l\'historique',
        'quick.actions.documents': 'Documents',
        'quick.actions.documents.desc': 'Accéder à vos documents et fichiers',
        'chat.title': 'Demandez à EVA',
        'chat.subtitle': 'Posez-moi des questions sur les services gouvernementaux',
        'chat.placeholder': 'Tapez votre question ici...',
        'chat.send': 'Envoyer',
        'chat.welcome': 'Bonjour! Je suis EVA, votre assistante virtuelle. Comment puis-je vous aider aujourd\'hui?',
        'chat.voice': 'L\'entrée vocale n\'est pas encore implémentée',
        'footer.copyright': '© 2024 Gouvernement du Canada. Tous droits réservés.',
        'footer.privacy': 'Confidentialité',
        'footer.terms': 'Conditions d\'utilisation',
        'footer.accessibility': 'Accessibilité',
    },
}

class I18nService {
    private currentLocale: Locale = 'en-CA'

    setLocale(locale: Locale) {
        this.currentLocale = locale
        if (typeof window !== 'undefined') {
            document.documentElement.lang = locale
        }
    }

    getLocale(): Locale {
        return this.currentLocale
    }

    t(key: string): string {
        const translation = translations[this.currentLocale]?.[key]
        if (!translation) {
            console.warn(`Translation key "${key}" not found for locale "${this.currentLocale}"`)
            return key
        }
        return translation
    }
}

export const i18nService = new I18nService()
