export type Locale = 'en-CA' | 'fr-CA'

    'hero.title': str
    'language.english'
    'language.switcher.l
    'demo.profile': string
    'quick.actions.title': str
    'quick.actions.myAccount.
    'demo.controls': string
    'demo.profile': string
    'demo.language': string
    'quick.actions.title': string
    'quick.actions.myAccount': string
    'quick.actions.myAccount.desc': string
    'quick.actions.applications': string
    'quick.actions.applications.desc': string
    'chat.send': string
    'chat.welcome': string
    'footer.privacy': string
    'footer.accessibility': string


    'en-CA': {
        'hero.title': '
        'language.english'
        'language.switcher.lab
        'demo.profile': 'Sov
        'quick.actions.tit
        'quick.actions.myAccount.d
 

        'quick.actions.documents.desc': 

const translations: Record<Locale, Translations> = {
    'en-CA': {
        'app.name': 'Government Services Portal',
        'hero.title': 'Welcome to the Government Services Portal',
        'hero.description': 'Access services, information, and support for Canadian citizens and residents.',
        'footer.terms': 'Terms of Use'
    },
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
    }

    private currentLocale: Locale 
    setLocale(locale: Locale) {
        if (typeof window !== 'undefined') {
        }

        return this.currentLocale

        const translation = translations[this.currentLocale]?.[key]
            console.warn(`Translation key "${ke
        }
    }




































