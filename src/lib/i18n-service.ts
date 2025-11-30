export type Locale = 'en-CA' | 'fr-CA'

type TranslationKey =
    | 'app.name'
    | 'language.en
    | 'hero.description'
    | 'language.english'
    | 'language.french'
    | 'language.switcher.label'
    | 'demo.controls'
    | 'quick.actions
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

    | 'chat.placeholder'
        'app.name': 
    | 'chat.send'
        'language.
    | 'footer.copyright'
        'demo.controls
    | 'footer.terms'
        'quick.actions.title

    },

        'hero.description': 'Accédez
        'langu
        'demo.controls': 'Contrôles de d
        'demo.language': 'Langue',
        'quick.actions.myAccount': 'Mon compte',
        'quick.actions.applications': 
        'quick.actions.payments': 'Pai
        'quick.actions.documents': 'Documents'
        'chat.title': 'Demander à EVA',
        'chat.placeholder': 'Tapez votre que
        'chat.send': 'Envoyer',
        'footer.copyright': '© 2024 Portail gou
        'footer.terms': 'Conditions d\'utilisati
    }

    private currentLocale: Locale = 'en-CA'
    setLocale(locale: Locale) {
        document.documentElement.lang = locale

        return this.currentLocale

        const translation = translations[this.currentLocale]?.[key as 
            return key
        return translation
}
export const i18nService = new I18nService()




    },
    'fr-CA': {
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