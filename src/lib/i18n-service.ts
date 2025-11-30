export type Locale = 'en-CA' | 'fr-CA'

    | 'hero.title'
    | 'header.sk
    | 'language.en
    | 'language.switcher
    | 'demo.profile'
    | 'quick.actions.titl
    | 'quick.actions.myA
    | 'quick.actions.ap
    | 'quick.actions.payments.d
    | 'quick.actions.
    | 'chat.subtitle
    | 'chat.welcome'
    | 'chat.voice'
    | 'chat.sending'
    | 'footer.privacy'
    | 'footer.accessibility'
const translations: Record<Locale, Reco
        'app.name': 'Governmen
        'hero.description': 'Access
        'header.navigation': 'M
        'language.french': 'Français
        'demo.cont
        'demo.languag
        'quick.actions.m
        'quick.actio
        'quick.ac
        'quick.act
        'chat.title': 'A
        'chat.placeh
        'chat.send': 'Se
        'chat.messageL
        'footer.copy
        'footer.terms': 'Ter

        'app.name': 'Portail gouvernemental',
        'hero.
        'header.navigation': 'Navigation
        'language.french': 'Français',
        'demo.controls': 'Contrôles de démo',
        'demo.language': 'Langue',
        'quick.actions.myAccount': 'Mon compte'
        'quick.actions.applications': 
        'quick.actions.payments': 'Pai
        'quick.actions.documents': 'Documents',
        'chat.title': 'Demandez à EVA',
        'chat.placeholder': 'Tapez votre que
        'chat.send': 'Envoyer',
        'chat.messageList': 'Messages de conver
        'footer.copyright': '© 2024 Portail gouv
        'footer.terms': 'Conditions d\'utilisation',
    }

    private currentLocale: Locale = 'en-CA'
    setLocale(locale: Locale) {
    }
    getLocale(): Locale {
    }
    t(key: TranslationKey): string {
    }































































