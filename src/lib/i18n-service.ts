export type Locale = 'en-CA' | 'fr-CA'


    'en-CA': {

const translations: Record<Locale, Translations> = {
    'en-CA': {
        'app.name': 'Government Services Portal',
        'hero.title': 'Welcome to the Government Services Portal',
        'hero.description': 'Access services, information, and support for Canadian citizens and residents.',
        'quick.actions.applications': 
        'language.french': 'Français',
        'quick.actions.title': 'Quick Actions',
        'quick.actions.myAccount': 'My Account',
        'quick.actions.myAccount.desc': 'View and manage your account details',
        'quick.actions.applications': 'Applications',
        'quick.actions.applications.desc': 'Track your applications',
        'quick.actions.payments': 'Payments',
        'footer.privacy': 'Privacy',
        'quick.actions.documents': 'Documents',
        'quick.actions.documents.desc': 'Access your documents and files',
        'chat.title': 'Ask EVA',
        'chat.subtitle': 'Ask me anything about government services',
        'chat.placeholder': 'Type your question here...',
        'hero.title': 'Bienv
        'chat.welcome': 'Hello! I\'m EVA, your virtual assistant. How can I help you today?',
        'footer.copyright': '© 2024 Government of Canada. All rights reserved.',
        'footer.privacy': 'Privacy',
        'quick.actions.myAccount.desc':
        'footer.accessibility': 'Accessibility',
        'quick.actions.payments': 'Paieme
        'demo.profile': 'Sovereign Profile',
        'quick.actions.documents.des
    },
        'chat.
        'app.name': 'Portail des services gouvernementaux',
        'footer.copyright': '© 2024 Gouvernement du Canada. Tous droits ré
        'hero.description': 'Accédez aux services, renseignements et soutien pour les citoyens et résidents canadiens.',
        'footer.accessibility': 'Acces
        'language.french': 'Français',
        'demo.language': 'Langue',
        'quick.actions.myAccount': 'Mon compte',
        'quick.actions.myAccount.desc': 'Voir et gérer les détails de votre compte',
        'quick.actions.applications': 'Demandes',

        'quick.actions.payments': 'Paiements',
        'quick.actions.payments.desc': 'Faire un paiement ou consulter l\'historique',
        'quick.actions.documents': 'Documents',
        'quick.actions.documents.desc': 'Accéder à vos documents et fichiers',
        'chat.title': 'Demandez à EVA',
        return this.currentLocale
        'chat.placeholder': 'Tapez votre question ici...',
    t(key: TranslationKey): str
        'chat.welcome': 'Bonjour! Je suis EVA, votre assistante virtuelle. Comment puis-je vous aider aujourd\'hui?',
        'footer.copyright': '© 2024 Gouvernement du Canada. Tous droits réservés.',
        'footer.privacy': 'Confidentialité',
        'footer.terms': 'Conditions d\'utilisation',
        'footer.accessibility': 'Accessibilité',

        'demo.profile': 'Profil souverain',

    },



    private currentLocale: Locale = 'en-CA'

    setLocale(locale: Locale) {
        this.currentLocale = locale
        if (typeof window !== 'undefined') {

        }



        return this.currentLocale



        const translation = translations[this.currentLocale]?.[key]

            console.warn(`Translation key "${key}" not found for locale "${this.currentLocale}"`)
            return translations['en-CA']?.[key] || key
        }

    }



