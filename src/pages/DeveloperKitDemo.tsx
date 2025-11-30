import { useState } from 'react';
import { GCHeader } from '@/components/eva/GCHeader';
import { GCFooter } from '@/components/eva/GCFooter';
import { LanguageSwitcher } from '@/components/eva/LanguageSwitcher';
import { ProgramCard } from '@/components/eva/ProgramCard';
import { EVAChat } from '@/components/eva/EVAChat';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Code, Palette, Globe, Eye, Lightbulb, CheckCircle, Copy } from '@phosphor-icons/react';
import { useI18n } from '@/lib/i18n/use-i18n';
import { sovereignProfiles } from '@/lib/tokens/sovereign-profiles';
import { gcColors } from '@/lib/tokens/colors';
import { toast } from 'sonner';

type ProfileId = 'canada_gc' | 'usa_gov' | 'uk_gov' | 'australia_gov' | 'nz_gov';

export function DeveloperKitDemo() {
  const { locale, setLocale, t, formatDate, formatNumber, formatCurrency } = useI18n();
  const [currentProfile, setCurrentProfile] = useState<ProfileId>('canada_gc');
  const [copiedCode, setCopiedCode] = useState<string | null>(null);

  const handleCopyCode = (code: string, label: string) => {
    navigator.clipboard.writeText(code);
    setCopiedCode(label);
    toast.success(`Copied ${label}!`);
    setTimeout(() => setCopiedCode(null), 2000);
  };

  const codeExamples = {
    header: `<GCHeader 
  appName="My Government App" 
  profile="canada_gc"
>
  <LanguageSwitcher 
    currentLocale={locale}
    availableLocales={['en-CA', 'fr-CA']}
    onLocaleChange={setLocale}
  />
</GCHeader>`,
    
    programCard: `<ProgramCard
  icon="💼"
  title={t('programs.ei.title')}
  description={t('programs.ei.description')}
  linkText={t('common.learnMore')}
  onLearnMore={() => {}}
/>`,

    evaChat: `<EVAChat
  title="Ask EVA"
  subtitle="Employment Virtual Assistant"
  placeholder="How can I help you today?"
/>`,

    i18n: `import { useI18n } from '@/lib/i18n/use-i18n';

const { locale, setLocale, t, formatDate, formatCurrency } = useI18n();

// Translate keys
const title = t('esdc.title');

// Format dates
const formattedDate = formatDate(new Date(), 'long');

// Format currency
const amount = formatCurrency(1250.50, 'CAD');`,
  };

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <GCHeader appName="EVA-Sovereign-UI Developer Kit" profile={currentProfile}>
        <LanguageSwitcher
          currentLocale={locale}
          availableLocales={['en-CA', 'fr-CA']}
          onLocaleChange={setLocale}
        />
      </GCHeader>

      <main className="flex-1">
        <div className="bg-gradient-to-br from-primary/10 to-accent/10 border-b">
          <div className="container mx-auto px-6 py-12">
            <Badge className="mb-4">v1.0.0</Badge>
            <h1 className="text-5xl font-bold mb-4">EVA-Sovereign-UI</h1>
            <p className="text-xl text-muted-foreground max-w-3xl">
              A production-ready, framework-agnostic design system for government applications.
              Featuring GC Design System compliance, WCAG 2.2 AAA accessibility, and Five Eyes sovereign profiles.
            </p>
          </div>
        </div>

        <div className="container mx-auto px-6 py-12 space-y-12">
          
          <section aria-labelledby="profile-heading">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <Globe size={24} weight="duotone" className="text-primary" />
                  Sovereign Profile Selector
                </CardTitle>
                <CardDescription>
                  Switch between Five Eyes government themes to see official branding and styling
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <Select value={currentProfile} onValueChange={(value) => setCurrentProfile(value as ProfileId)}>
                  <SelectTrigger className="w-full md:w-80">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    {Object.values(sovereignProfiles).map((profile) => (
                      <SelectItem key={profile.id} value={profile.id}>
                        {profile.flag} {profile.name}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>

                <div className="bg-muted/50 p-4 rounded-lg space-y-2">
                  <p className="text-sm font-medium">Current Profile:</p>
                  <div className="flex items-center gap-2">
                    <span className="text-3xl">{sovereignProfiles[currentProfile].flag}</span>
                    <div>
                      <p className="font-bold">{sovereignProfiles[currentProfile].name}</p>
                      <p className="text-sm text-muted-foreground">{sovereignProfiles[currentProfile].legalText}</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </section>

          <Tabs defaultValue="components" className="space-y-6">
            <TabsList className="grid w-full max-w-2xl grid-cols-4 h-auto">
              <TabsTrigger value="components" className="flex items-center gap-2 py-3">
                <Code size={18} />
                <span className="hidden sm:inline">Components</span>
              </TabsTrigger>
              <TabsTrigger value="accessibility" className="flex items-center gap-2 py-3">
                <Eye size={18} />
                <span className="hidden sm:inline">Accessibility</span>
              </TabsTrigger>
              <TabsTrigger value="i18n" className="flex items-center gap-2 py-3">
                <Globe size={18} />
                <span className="hidden sm:inline">i18n</span>
              </TabsTrigger>
              <TabsTrigger value="theme" className="flex items-center gap-2 py-3">
                <Palette size={18} />
                <span className="hidden sm:inline">Theming</span>
              </TabsTrigger>
            </TabsList>

            <TabsContent value="components" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>GC Header Component</CardTitle>
                  <CardDescription>Official government header with branding and navigation</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="border rounded-lg overflow-hidden">
                    <GCHeader appName="Sample Application" profile={currentProfile}>
                      <Button size="sm" variant="outline">Sign In</Button>
                    </GCHeader>
                  </div>
                  <div className="relative">
                    <pre className="bg-muted p-4 rounded-lg overflow-x-auto text-sm font-mono">
                      <code>{codeExamples.header}</code>
                    </pre>
                    <Button
                      size="sm"
                      variant="ghost"
                      className="absolute top-2 right-2"
                      onClick={() => handleCopyCode(codeExamples.header, 'Header code')}
                    >
                      {copiedCode === 'Header code' ? <CheckCircle size={16} /> : <Copy size={16} />}
                    </Button>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Program Card Component</CardTitle>
                  <CardDescription>Showcase government programs with icons and descriptions</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid md:grid-cols-2 gap-4">
                    <ProgramCard
                      icon="💼"
                      title="Employment Insurance"
                      description="Temporary financial assistance while you look for work or upgrade your skills"
                      linkText="Learn more"
                    />
                    <ProgramCard
                      icon="🧓"
                      title="Old Age Security"
                      description="Monthly payment for seniors 65 years of age and older"
                      linkText="Learn more"
                    />
                  </div>
                  <div className="relative">
                    <pre className="bg-muted p-4 rounded-lg overflow-x-auto text-sm font-mono">
                      <code>{codeExamples.programCard}</code>
                    </pre>
                    <Button
                      size="sm"
                      variant="ghost"
                      className="absolute top-2 right-2"
                      onClick={() => handleCopyCode(codeExamples.programCard, 'Program Card code')}
                    >
                      {copiedCode === 'Program Card code' ? <CheckCircle size={16} /> : <Copy size={16} />}
                    </Button>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>EVA Chat Component</CardTitle>
                  <CardDescription>Conversational AI assistant for citizen inquiries</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <EVAChat
                    title="EVA Demo"
                    subtitle="Ask about government services"
                    placeholder="Try asking about EI, OAS, or CPP..."
                  />
                  <div className="relative">
                    <pre className="bg-muted p-4 rounded-lg overflow-x-auto text-sm font-mono">
                      <code>{codeExamples.evaChat}</code>
                    </pre>
                    <Button
                      size="sm"
                      variant="ghost"
                      className="absolute top-2 right-2"
                      onClick={() => handleCopyCode(codeExamples.evaChat, 'EVA Chat code')}
                    >
                      {copiedCode === 'EVA Chat code' ? <CheckCircle size={16} /> : <Copy size={16} />}
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="accessibility" className="space-y-6">
              <Alert>
                <CheckCircle size={20} weight="fill" className="text-green-600" />
                <AlertTitle>WCAG 2.2 Level AAA Compliant</AlertTitle>
                <AlertDescription>
                  All components meet the highest accessibility standards with 7:1 contrast ratios,
                  full keyboard navigation, and comprehensive ARIA support.
                </AlertDescription>
              </Alert>

              <Card>
                <CardHeader>
                  <CardTitle>Accessibility Features</CardTitle>
                  <CardDescription>Built-in support for all users</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <h4 className="font-semibold flex items-center gap-2">
                        <CheckCircle size={18} weight="fill" className="text-green-600" />
                        Keyboard Navigation
                      </h4>
                      <p className="text-sm text-muted-foreground">
                        All interactive elements accessible via Tab, Enter, Escape, and Arrow keys
                      </p>
                    </div>
                    <div className="space-y-2">
                      <h4 className="font-semibold flex items-center gap-2">
                        <CheckCircle size={18} weight="fill" className="text-green-600" />
                        Screen Reader Support
                      </h4>
                      <p className="text-sm text-muted-foreground">
                        ARIA labels, landmarks, and live regions for NVDA/JAWS compatibility
                      </p>
                    </div>
                    <div className="space-y-2">
                      <h4 className="font-semibold flex items-center gap-2">
                        <CheckCircle size={18} weight="fill" className="text-green-600" />
                        Focus Indicators
                      </h4>
                      <p className="text-sm text-muted-foreground">
                        3px outlines with 3:1 contrast ratio on all focusable elements
                      </p>
                    </div>
                    <div className="space-y-2">
                      <h4 className="font-semibold flex items-center gap-2">
                        <CheckCircle size={18} weight="fill" className="text-green-600" />
                        Skip Links
                      </h4>
                      <p className="text-sm text-muted-foreground">
                        Quick navigation to main content for keyboard and screen reader users
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="i18n" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Internationalization System</CardTitle>
                  <CardDescription>Multi-language support with formatters</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="space-y-2">
                    <h4 className="font-semibold">Current Locale: <Badge variant="secondary">{locale}</Badge></h4>
                    <p className="text-sm text-muted-foreground">
                      Switch languages using the language switcher in the header
                    </p>
                  </div>

                  <div className="space-y-4 bg-muted/50 p-4 rounded-lg">
                    <h4 className="font-semibold">Format Examples</h4>
                    <div className="grid md:grid-cols-2 gap-4 text-sm">
                      <div>
                        <p className="text-muted-foreground">Date (Long):</p>
                        <p className="font-mono">{formatDate(new Date(), 'long')}</p>
                      </div>
                      <div>
                        <p className="text-muted-foreground">Date (Short):</p>
                        <p className="font-mono">{formatDate(new Date(), 'short')}</p>
                      </div>
                      <div>
                        <p className="text-muted-foreground">Number:</p>
                        <p className="font-mono">{formatNumber(1234567.89)}</p>
                      </div>
                      <div>
                        <p className="text-muted-foreground">Currency (CAD):</p>
                        <p className="font-mono">{formatCurrency(1250.50, 'CAD')}</p>
                      </div>
                    </div>
                  </div>

                  <div className="relative">
                    <pre className="bg-muted p-4 rounded-lg overflow-x-auto text-sm font-mono">
                      <code>{codeExamples.i18n}</code>
                    </pre>
                    <Button
                      size="sm"
                      variant="ghost"
                      className="absolute top-2 right-2"
                      onClick={() => handleCopyCode(codeExamples.i18n, 'i18n code')}
                    >
                      {copiedCode === 'i18n code' ? <CheckCircle size={16} /> : <Copy size={16} />}
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="theme" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>GC Design System Colors</CardTitle>
                  <CardDescription>Official Government of Canada color palette</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {Object.entries(gcColors).map(([name, color]) => (
                      <div key={name} className="space-y-2">
                        <div
                          className="h-20 rounded-lg border shadow-sm"
                          style={{ backgroundColor: color }}
                          aria-label={`${name} color swatch`}
                        />
                        <div className="text-sm">
                          <p className="font-medium capitalize">{name.replace(/([A-Z])/g, ' $1').trim()}</p>
                          <p className="font-mono text-xs text-muted-foreground">{color}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Typography Scale</CardTitle>
                  <CardDescription>Lato (headings) + Noto Sans (body)</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-6">
                    <div>
                      <p className="text-sm text-muted-foreground mb-2">H1 - 41px Bold</p>
                      <h1 className="text-[41px] font-bold leading-tight">Employment and Social Development Canada</h1>
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground mb-2">H2 - 32px Bold</p>
                      <h2 className="text-[32px] font-bold">Programs and Services</h2>
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground mb-2">Body - 20px Regular</p>
                      <p className="text-[20px]">
                        Access employment services, benefits, and support programs that help Canadians succeed.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>

        </div>
      </main>

      <GCFooter profile={currentProfile} />
    </div>
  );
}
