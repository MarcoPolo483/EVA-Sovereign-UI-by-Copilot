import { i18nService, type TranslationKey } from '@/lib/i18n-service'
import { Card, CardHeader, CardTitle, CardDescription } from '@/components/ui/card'
import { User, FileText, CreditCard, FolderOpen, type Icon as PhosphorIcon } from '@phosphor-icons/react'
import { useLocaleChange } from '@/hooks/use-locale-change'

interface QuickAction {
    id: string
    titleKey: TranslationKey
    descriptionKey: TranslationKey
    icon: PhosphorIcon
}

const quickActions: QuickAction[] = [
    {
        id: 'my-account',
        titleKey: 'quick.actions.myAccount',
        descriptionKey: 'quick.actions.myAccount.desc',
        icon: User,
    },
    {
        id: 'applications',
        titleKey: 'quick.actions.applications',
        descriptionKey: 'quick.actions.applications.desc',
        icon: FileText,
    },
    {
        id: 'payments',
        titleKey: 'quick.actions.payments',
        descriptionKey: 'quick.actions.payments.desc',
        icon: CreditCard,
    },
    {
        id: 'documents',
        titleKey: 'quick.actions.documents',
        descriptionKey: 'quick.actions.documents.desc',
        icon: FolderOpen,
    },
]

export function EVAQuickActions() {
    useLocaleChange()
    
    const handleActionClick = (actionId: string) => {
        console.log(`Quick action clicked: ${actionId}`)
    }

    return (
        <section>
            <h2 className="text-2xl font-bold mb-4 text-foreground">
                {i18nService.t('quick.actions.title')}
            </h2>
            
            <div className="grid gap-4 md:grid-cols-2">
                {quickActions.map((action) => {
                    const Icon = action.icon
                    return (
                        <Card
                            key={action.id}
                            className="cursor-pointer hover:shadow-lg transition-all hover:border-primary group"
                            onClick={() => handleActionClick(action.id)}
                            tabIndex={0}
                            role="button"
                            onKeyDown={(e) => {
                                if (e.key === 'Enter' || e.key === ' ') {
                                    e.preventDefault()
                                    handleActionClick(action.id)
                                }
                            }}
                        >
                            <CardHeader>
                                <div className="flex items-start gap-3">
                                    <div className="p-2 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                                        <Icon size={24} className="text-primary" />
                                    </div>
                                    <div className="flex-1">
                                        <CardTitle className="text-lg mb-1">
                                            {i18nService.t(action.titleKey)}
                                        </CardTitle>
                                        <CardDescription>
                                            {i18nService.t(action.descriptionKey)}
                                        </CardDescription>
                                    </div>
                                </div>
                            </CardHeader>
                        </Card>
                    )
                })}
            </div>
        </section>
    )
}
