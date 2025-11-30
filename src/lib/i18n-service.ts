export type Locale = 'en-CA' | 'fr-CA'

    | 'hero.title'
    | 'language.
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
    | 'quick.actions.documents'
    | 'chat.title'
    | 'chat.placeholder'
    | 'chat.send'
    | 'footer.copyright'
    | 'footer.terms'

    'en-CA': {
        'hero.title': 'W
        'language.en
        'language
        'demo.prof
        'quick.actions.t
        'quick.actions
        'quick.actio
        'quick.actions.payme

        'chat.subtitle': 'Ask me questions about government services',
        'chat.
        'chat.voice': 'Voice input not y
        'footer.privacy': 'Privacy',
        'footer.accessibility': 'Accessibility'
    'fr-CA': {
        'hero.title': 'Bienvenue au po
        'language.english': 'English',
        'language.switcher.label': 'Langu
        'demo.profile': 'Profil souverain',
        'quick.actions.title': 'Acti
        'quick.actions.myAccount.desc': 'Voir e
        'quick.actions.applications.desc': 'Suiv
        'quick.actions.payments.desc': 'Effectuer un paiement ou voir l\'histori
        'quick.actions.documents.desc': 'Accéder à vo
        'chat.subtitle': 'Posez-moi des questions sur les services go
        'chat.welcome': 'Bonjour! Comment pui
        'chat.voice': 'L\'entrée vocale n\'est pas encore implémentée',
        'footer.privacy': 'Confidentialité',
        'footer.accessibility': 'Accessibilité'
}
class I18nService {

        this.currentLocale = locale

        return this.currentLocale

        return translations[this.cur
}
export const i18nService = new I18nService()



        'hero.title': 'Bienvenue au portail gouvernemental',




        'demo.controls': 'Contrôles de démo',





        'quick.actions.applications': 'Applications',





        'chat.title': 'Demandez à EVA',























    t(key: TranslationKey): string {
        return translations[this.currentLocale][key] || key




