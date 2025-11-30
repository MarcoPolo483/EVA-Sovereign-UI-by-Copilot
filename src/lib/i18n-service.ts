export type Locale = 'en-CA' | 'fr-CA'

export type TranslationKey =
    | 'app.name'
    | 'hero.title'
    | 'hero.description'
    | 'header.skipToContent'
    | 'header.navigation'
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
    | 'chat.welcome'
    | 'chat.send'
    | 'chat.voice'
    | 'chat.messageList'
    | 'chat.sending'
    | 'footer.copyright'
    | 'footer.privacy'
    | 'footer.terms'
    | 'footer.accessibility'

const translations: Record<Locale, Record<TranslationKey, string>> = {
    'en-CA': {
        'app.name': 'Government Portal',
        'hero.title': 'Welcome to the Government Portal',
        'hero.description': 'Access your services and information securely',
        'header.skipToContent': 'Skip to main content',
        'header.navigation': 'Main navigation',
        'language.english': 'English',
        'language.french': 'Français',
        'language.switcher.label': 'Switch language',
        'demo.controls': 'Demo Controls',
        'demo.profile': 'Sovereign Profile',
        'demo.language': 'Language',
        'quick.actions.title': 'Quick Actions',
        'quick.actions.myAccount': 'My Account',
        'quick.actions.myAccount.desc': 'View and manage your account settings',
        'quick.actions.applications': 'Applications',
        'quick.actions.applications.desc': 'Track your applications',
        'quick.actions.payments': 'Payments',
        'quick.actions.payments.desc': 'Make a payment or view history',
        'quick.actions.documents': 'Documents',
        'quick.actions.documents.desc': 'Access your documents and forms',
        'chat.title': 'Ask EVA',
        'chat.subtitle': 'Ask me questions about government services',
        'chat.placeholder': 'Type your question here...',
        'chat.welcome': 'Hello! How can I help you today?',
        'chat.send': 'Send',
        'chat.voice': 'Use voice input',
        'chat.messageList': 'Conversation messages',
        'chat.sending': 'Sending message...',
        'footer.copyright': '© 2024 Government Portal. All rights reserved.',
        'footer.privacy': 'Privacy',
        'footer.terms': 'Terms of Use',
        'footer.accessibility': 'Accessibility'
    },
    'fr-CA': {
        'app.name': 'Portail gouvernemental',
        'hero.title': 'Bienvenue au portail gouvernemental',
        'hero.description': 'Accédez à vos services et informations en toute sécurité',
        'header.skipToContent': 'Passer au contenu principal',
        'header.navigation': 'Navigation principale',
        'language.english': 'English',
        'language.french': 'Français',
        'language.switcher.label': 'Changer de langue',
        'demo.controls': 'Contrôles de démo',
        'demo.profile': 'Profil souverain',
        'demo.language': 'Langue',
        'quick.actions.title': 'Actions rapides',
        'quick.actions.myAccount': 'Mon compte',
        'quick.actions.myAccount.desc': 'Voir et gérer les paramètres de votre compte',
        'quick.actions.applications': 'Applications',
        'quick.actions.applications.desc': 'Suivre vos demandes',
        'quick.actions.payments': 'Paiements',
        'quick.actions.payments.desc': 'Effectuer un paiement ou voir l\'historique',
        'quick.actions.documents': 'Documents',
        'quick.actions.documents.desc': 'Accéder à vos documents et formulaires',
        'chat.title': 'Demandez à EVA',
        'chat.subtitle': 'Posez-moi des questions sur les services gouvernementaux',
        'chat.placeholder': 'Tapez votre question ici...',
        'chat.welcome': 'Bonjour! Comment puis-je vous aider aujourd\'hui?',
        'chat.send': 'Envoyer',
        'chat.voice': 'Utiliser l\'entrée vocale',
        'chat.messageList': 'Messages de conversation',
        'chat.sending': 'Envoi du message...',
        'footer.copyright': '© 2024 Portail gouvernemental. Tous droits réservés.',
        'footer.privacy': 'Confidentialité',
        'footer.terms': 'Conditions d\'utilisation',
        'footer.accessibility': 'Accessibilité'
    }
}

class I18nService {
    private currentLocale: Locale = 'en-CA'

    setLocale(locale: Locale) {
        this.currentLocale = locale
    }

    getLocale(): Locale {
        return this.currentLocale
    }

    t(key: TranslationKey): string {
        return translations[this.currentLocale][key] || key
    }
}

export const i18nService = new I18nService()
