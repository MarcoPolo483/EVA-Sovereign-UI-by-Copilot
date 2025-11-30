export type Locale = 'en-CA' | 'fr-CA'

    | 'hero.title'
    | 'header.na
    | 'hero.title'
    | 'hero.description'
    | 'header.navigation'
    | 'header.skipToMain'
    | 'demo.profile'
    | 'quick.actions.ti
    | 'quick.actions.myAc
    | 'quick.actions.
    | 'quick.actions
    | 'quick.actions.
    | 'chat.subtitle'
    | 'chat.placeholder'
    | 'chat.voice'
    | 'chat.messageList'
    | 'footer.privacy'
    | 'footer.accessibility'
const translations: Record<Locale, Record<
        'app.name': 'Government
        'hero.description': 'Access your go
        'header.sk
        'language.fre
        'demo.contro
        'demo.language':
        'quick.ac
        'quick.act
        'quick.actio
        'quick.actions.d
        'chat.title': 'A
    | 'footer.privacy'
    | 'footer.terms'
    | 'footer.accessibility'

const translations: Record<Locale, Record<TranslationKey, string>> = {
    'en-CA': {
        'app.name': 'Government Portal',
        'hero.title': 'Welcome to the Government Services Portal',
        'hero.description': 'Access your government services and information in one place',
        'header.navigation': 'Main navigation',
        'header.skipToMain': 'Skip to main content',
        'language.english': 'English',
        'language.french': 'Français',
        'language.switcher': 'Language switcher',
        'demo.controls': 'Demo Controls',
        'demo.profile': 'Government Profile',
        'demo.language': 'Language',
        'quick.actions.title': 'Quick Actions',
        'quick.actions.myAccount': 'My Account',
        'quick.actions.myAccount.description': 'View and manage your account settings',
        'quick.actions.applications': 'Applications',
        'quick.actions.applications.description': 'Track your application status',
        'quick.actions.payments': 'Payments',
        'quick.actions.payments.description': 'View payment history and make payments',
        'quick.actions.documents': 'Documents',
        'quick.actions.documents.description': 'Access your government documents',
        'chat.title': 'Ask EVA',
        'chat.subtitle': 'Your AI Assistant',
        'chat.welcome': 'Hello! How can I help you today?',
        'chat.placeholder': 'Type your question here...',
        'chat.send': 'Send',
        'chat.voice': 'Voice input',
        'chat.title': 'Demandez à EVA
        'chat.welcome': 'Bonjour! Comment puis-je vo
        'chat.send': 'Envoyer',
        'chat.sending': 'Envoi en co
        'footer.copyright': '© 2024 Portail
        'footer.terms': 'Conditions d\'utilisati
    }

    private currentLocale: Locale = 'en-CA'
    setLocale(locale: Locale) {
    }
    getLocale(): Locale {
    }
    t(key: TranslationKey): string {
    }













































