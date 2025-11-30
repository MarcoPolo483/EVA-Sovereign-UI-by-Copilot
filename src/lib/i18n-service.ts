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
    | 'quick.actions.applications'
    | 'quick.actions.documents.desc'
    | 'chat.subtitle'
    | 'chat.send'
    | 'chat.voice'
    | 'footer.privacy'
    | 'footer.acce
type Translations = R

    'en-CA': {
        'hero.title'
        'language.englis
        'language.swit
        'demo.profil
        'quick.actions.title

        'quick.actions.applications.desc': 'Track 

        'quick.actions.documents.desc': 'Access your
        'chat.
        'chat.send': 'Send',
        'chat.voice': 'Voice input is not yet implemented',
        'footer.privacy': 'Privacy',
        'footer.accessibility': 'Acces
    'fr-CA': {
        'hero.title': 'Bienvenue au Portail de
        'language.english': 'English',
        'language.switcher.label': 'Langue',
        'demo.profile': 'Profil souv
        'quick.actions.title': 'Actions rapides
        'quick.actions.myAccount.desc': 'Voir et
        'quick.actions.applications.desc': 'Suivre vos demandes',
        'quick.actions.payments.desc': 'Effectuer un 
        'quick.actions.documents.desc': 'Accéder à vos documents et f
        'chat.subtitle': 'Posez-moi des quest
        'chat.send': 'Envoyer',
        'chat.voice': 'L\'entrée vocale n\'est 
        'footer.privacy': 'Confidentialité',
        'footer.accessibility': 
}
class I18nService {

        this.currentLocale = locale
            document.documentElement.lang = locale
    }
    getLocale(): Locale {
    }
    t(
        if (!t
            return key
        return translation
}
export const i18nService = new I18nSer



















































