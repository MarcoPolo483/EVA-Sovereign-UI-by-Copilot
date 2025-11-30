export type Locale = 'en-CA' | 'fr-CA'

type TranslationKey =
    | 'app.name'
    | 'language.en
    | 'language.switcher
    | 'demo.profile'
    | 'quick.actions.ti
    | 'quick.actions.myAccount.
    | 'quick.actions.
    | 'quick.actions
    | 'quick.actions.
    | 'chat.subtitle'
    | 'chat.welcome'
    | 'chat.voice'
    | 'footer.privacy'
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
    | 'footer.copyright'
    | 'footer.privacy'
    | 'footer.terms'
    | 'footer.accessibility'

        'quick.actions.applications': 'Applications',
        'quick
        'quick.actions.documents': 'Docu
        'chat.title': 'Ask EVA',
        'chat.placeholder': 'Type your question here...',
        'chat.send': 'Send',
        'footer.copyright': '© 2024 Go
        'footer.terms': 'Terms of Use',
    },
        'app.name': 'Portail gouvernemental'
        'hero.description': 'Accédez
        'language.french': 'Français',
        'demo.controls': 'Contrôles de démonstra
        'demo.language': 'Langue',
        'quick.actions.myAccount': 'Mon compte',
        'quick.actions.applications': 'Demandes',
        'quick.actions.payments': 'Paiements'
        'quick.actions.documents': 'Documents',
        'chat.title': 'Demander à EVA',
        'chat.placeholder': 'Tapez votre question ici...',
        'chat.send': 'Envoyer',
        'footer.copyright': '© 2024 Portail gouvernemental. Tous droit
        'footer.terms': 'Conditions d\'utilisation',
    }

    private currentLocale: Locale = 'en-CA'
    setLocale(locale: Locale) {
        document.documentElement.lan

        return this.currentLocale

        const 
        'app.name': 'Portail gouvernemental',
        'hero.title': 'Bienvenue au Portail gouvernemental',
        'hero.description': 'Accédez à vos services et informations en toute sécurité',
        'language.english': 'English',
        'language.french': 'Français',
        'language.switcher.label': 'Langue',
        'demo.controls': 'Contrôles de démonstration',
        'demo.profile': 'Profil souverain',
        'demo.language': 'Langue',
        'quick.actions.title': 'Actions rapides',
        'quick.actions.myAccount': 'Mon compte',
        'quick.actions.myAccount.desc': 'Voir et gérer les paramètres de votre compte',
        'quick.actions.applications': 'Demandes',
        'quick.actions.applications.desc': 'Suivre vos demandes',
        'quick.actions.payments': 'Paiements',
        'quick.actions.payments.desc': 'Effectuer un paiement ou voir l\'historique',
        'quick.actions.documents': 'Documents',
        'quick.actions.documents.desc': 'Accéder à vos documents et formulaires',
        'chat.title': 'Demander à EVA',
        'chat.subtitle': 'Posez-moi des questions sur les services gouvernementaux',
        'chat.placeholder': 'Tapez votre question ici...',
        'chat.welcome': 'Bonjour! Comment puis-je vous aider aujourd\'hui?',
        'chat.send': 'Envoyer',
        'chat.voice': 'L\'entrée vocale n\'est pas encore implémentée',
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
        document.documentElement.lang = locale
    }

    getLocale(): Locale {
        return this.currentLocale
    }

    t(key: TranslationKey | string): string {
        const translation = translations[this.currentLocale]?.[key as TranslationKey]
        if (!translation) {
            return key
        }
        return translation
    }
}

export const i18nService = new I18nService()
        if (!translation) {
            return key
        }
        return translation
    }
}

export const i18nService = new I18nService()
