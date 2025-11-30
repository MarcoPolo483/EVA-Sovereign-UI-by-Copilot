import { useState, useMemo } from 'react'
import { useKV } from '@github/spark/hooks'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { ScrollArea } from '@/components/ui/scroll-area'
import { Separator } from '@/components/ui/separator'
import { 
  Code, 
  Palette, 
  PaintBrush, 
  Shapes, 
  MagnifyingGlass, 
  Copy, 
  Check, 
  Heart,
  X
} from '@phosphor-icons/react'
import { toast, Toaster } from 'sonner'
import { cssSnippets, colorPalettes, styleTemplates, graphicElements, categories } from '@/lib/data'
import type { CSSSnippet, ColorPalette, StyleTemplate, GraphicElement } from '@/lib/data'

function App() {
  const [activeTab, setActiveTab] = useState('css')
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedCategory, setSelectedCategory] = useState<string>('All')
  const [favorites, setFavorites] = useKV<string[]>('favorites', [])
  const [copiedId, setCopiedId] = useState<string | null>(null)

  const copyToClipboard = async (text: string, id: string, name: string) => {
    try {
      await navigator.clipboard.writeText(text)
      setCopiedId(id)
      toast.success(`Copied ${name}!`)
      setTimeout(() => setCopiedId(null), 1500)
    } catch {
      toast.error('Failed to copy')
    }
  }

  const toggleFavorite = (id: string) => {
    setFavorites((current) => {
      if (current.includes(id)) {
        return current.filter((fav) => fav !== id)
      }
      return [...current, id]
    })
  }

  const filteredCSS = useMemo(() => {
    return cssSnippets.filter((snippet) => {
      const matchesSearch = 
        snippet.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        snippet.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        snippet.tags.some((tag) => tag.toLowerCase().includes(searchQuery.toLowerCase()))
      const matchesCategory = selectedCategory === 'All' || snippet.category === selectedCategory
      return matchesSearch && matchesCategory
    })
  }, [searchQuery, selectedCategory])

  const filteredColors = useMemo(() => {
    return colorPalettes.filter((palette) => {
      const matchesSearch = 
        palette.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        palette.description.toLowerCase().includes(searchQuery.toLowerCase())
      const matchesCategory = selectedCategory === 'All' || palette.category === selectedCategory
      return matchesSearch && matchesCategory
    })
  }, [searchQuery, selectedCategory])

  const filteredStyles = useMemo(() => {
    return styleTemplates.filter((template) => {
      const matchesSearch = 
        template.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        template.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        template.tags.some((tag) => tag.toLowerCase().includes(searchQuery.toLowerCase()))
      const matchesCategory = selectedCategory === 'All' || template.category === selectedCategory
      return matchesSearch && matchesCategory
    })
  }, [searchQuery, selectedCategory])

  const filteredGraphics = useMemo(() => {
    return graphicElements.filter((element) => {
      const matchesSearch = 
        element.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        element.description.toLowerCase().includes(searchQuery.toLowerCase())
      const matchesCategory = selectedCategory === 'All' || element.category === selectedCategory
      return matchesSearch && matchesCategory
    })
  }, [searchQuery, selectedCategory])

  const getCurrentCategories = () => {
    const categoryMap: Record<string, string[]> = {
      css: categories.css,
      colors: categories.colors,
      styles: categories.styles,
      graphics: categories.graphics
    }
    return categoryMap[activeTab] || []
  }

  return (
    <div className="min-h-screen bg-background">
      <Toaster position="top-center" />
      
      <header className="border-b bg-card sticky top-0 z-50">
        <div className="container mx-auto px-8 py-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-semibold tracking-tight">DevKit</h1>
              <p className="text-sm text-muted-foreground mt-1">CSS Shortcuts & Design Resources</p>
            </div>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-8 py-12">
        <Tabs value={activeTab} onValueChange={(value) => {
          setActiveTab(value)
          setSelectedCategory('All')
          setSearchQuery('')
        }} className="space-y-6">
          <TabsList className="grid w-full max-w-2xl grid-cols-4 h-auto">
            <TabsTrigger value="css" className="flex items-center gap-2 py-3">
              <Code size={18} />
              <span>CSS Shortcuts</span>
            </TabsTrigger>
            <TabsTrigger value="colors" className="flex items-center gap-2 py-3">
              <Palette size={18} />
              <span>Color Palettes</span>
            </TabsTrigger>
            <TabsTrigger value="styles" className="flex items-center gap-2 py-3">
              <PaintBrush size={18} />
              <span>Style Templates</span>
            </TabsTrigger>
            <TabsTrigger value="graphics" className="flex items-center gap-2 py-3">
              <Shapes size={18} />
              <span>Graphics</span>
            </TabsTrigger>
          </TabsList>

          <div className="flex flex-col md:flex-row gap-4 items-start md:items-center justify-between">
            <div className="relative flex-1 max-w-md">
              <MagnifyingGlass className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" size={20} />
              <Input
                placeholder="Search..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 pr-10"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
                >
                  <X size={16} />
                </button>
              )}
            </div>

            <div className="flex gap-2 flex-wrap">
              <Button
                variant={selectedCategory === 'All' ? 'default' : 'outline'}
                size="sm"
                onClick={() => setSelectedCategory('All')}
              >
                All
              </Button>
              {getCurrentCategories().map((category) => (
                <Button
                  key={category}
                  variant={selectedCategory === category ? 'default' : 'outline'}
                  size="sm"
                  onClick={() => setSelectedCategory(category)}
                >
                  {category}
                </Button>
              ))}
            </div>
          </div>

          <TabsContent value="css" className="space-y-4">
            {filteredCSS.length === 0 ? (
              <Card>
                <CardContent className="py-12 text-center">
                  <p className="text-muted-foreground">No CSS snippets found</p>
                </CardContent>
              </Card>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {filteredCSS.map((snippet) => (
                  <CSSSnippetCard
                    key={snippet.id}
                    snippet={snippet}
                    isFavorite={favorites.includes(snippet.id)}
                    isCopied={copiedId === snippet.id}
                    onCopy={() => copyToClipboard(snippet.code, snippet.id, snippet.name)}
                    onToggleFavorite={() => toggleFavorite(snippet.id)}
                  />
                ))}
              </div>
            )}
          </TabsContent>

          <TabsContent value="colors" className="space-y-4">
            {filteredColors.length === 0 ? (
              <Card>
                <CardContent className="py-12 text-center">
                  <p className="text-muted-foreground">No color palettes found</p>
                </CardContent>
              </Card>
            ) : (
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                {filteredColors.map((palette) => (
                  <ColorPaletteCard
                    key={palette.id}
                    palette={palette}
                    isFavorite={favorites.includes(palette.id)}
                    onCopyColor={(color, format) => copyToClipboard(color, `${palette.id}-${format}`, format.toUpperCase())}
                    onCopyPalette={(text) => copyToClipboard(text, palette.id, palette.name)}
                    onToggleFavorite={() => toggleFavorite(palette.id)}
                    isCopied={copiedId === palette.id}
                  />
                ))}
              </div>
            )}
          </TabsContent>

          <TabsContent value="styles" className="space-y-4">
            {filteredStyles.length === 0 ? (
              <Card>
                <CardContent className="py-12 text-center">
                  <p className="text-muted-foreground">No style templates found</p>
                </CardContent>
              </Card>
            ) : (
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                {filteredStyles.map((template) => (
                  <StyleTemplateCard
                    key={template.id}
                    template={template}
                    isFavorite={favorites.includes(template.id)}
                    isCopied={copiedId === template.id}
                    onCopy={() => copyToClipboard(template.css, template.id, template.name)}
                    onToggleFavorite={() => toggleFavorite(template.id)}
                  />
                ))}
              </div>
            )}
          </TabsContent>

          <TabsContent value="graphics" className="space-y-4">
            {filteredGraphics.length === 0 ? (
              <Card>
                <CardContent className="py-12 text-center">
                  <p className="text-muted-foreground">No graphic elements found</p>
                </CardContent>
              </Card>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {filteredGraphics.map((element) => (
                  <GraphicElementCard
                    key={element.id}
                    element={element}
                    isFavorite={favorites.includes(element.id)}
                    isCopied={copiedId === element.id}
                    onCopy={() => copyToClipboard(element.svg, element.id, element.name)}
                    onToggleFavorite={() => toggleFavorite(element.id)}
                  />
                ))}
              </div>
            )}
          </TabsContent>
        </Tabs>
      </main>
    </div>
  )
}

interface CSSSnippetCardProps {
  snippet: CSSSnippet
  isFavorite: boolean
  isCopied: boolean
  onCopy: () => void
  onToggleFavorite: () => void
}

function CSSSnippetCard({ snippet, isFavorite, isCopied, onCopy, onToggleFavorite }: CSSSnippetCardProps) {
  return (
    <Card className="group hover:shadow-md transition-all duration-200 hover:-translate-y-1">
      <CardHeader>
        <div className="flex items-start justify-between">
          <div className="flex-1">
            <CardTitle className="text-lg">{snippet.name}</CardTitle>
            <CardDescription className="mt-1">{snippet.description}</CardDescription>
          </div>
          <button
            onClick={onToggleFavorite}
            className="text-muted-foreground hover:text-destructive transition-colors"
          >
            <Heart size={20} weight={isFavorite ? 'fill' : 'regular'} />
          </button>
        </div>
        <div className="flex gap-2 flex-wrap mt-2">
          <Badge variant="secondary">{snippet.category}</Badge>
          {snippet.tags.slice(0, 2).map((tag) => (
            <Badge key={tag} variant="outline" className="text-xs">
              {tag}
            </Badge>
          ))}
        </div>
      </CardHeader>
      <CardContent>
        <ScrollArea className="h-32 w-full rounded-md border bg-muted/50 p-3">
          <pre className="text-xs font-mono leading-relaxed">
            <code>{snippet.code}</code>
          </pre>
        </ScrollArea>
        <Button
          onClick={onCopy}
          className="w-full mt-4"
          size="sm"
          variant={isCopied ? 'default' : 'outline'}
        >
          {isCopied ? (
            <>
              <Check size={16} className="mr-2" />
              Copied!
            </>
          ) : (
            <>
              <Copy size={16} className="mr-2" />
              Copy Code
            </>
          )}
        </Button>
      </CardContent>
    </Card>
  )
}

interface ColorPaletteCardProps {
  palette: ColorPalette
  isFavorite: boolean
  isCopied: boolean
  onCopyColor: (color: string, format: string) => void
  onCopyPalette: (text: string) => void
  onToggleFavorite: () => void
}

function ColorPaletteCard({ palette, isFavorite, isCopied, onCopyColor, onCopyPalette, onToggleFavorite }: ColorPaletteCardProps) {
  const [format, setFormat] = useState<'hex' | 'oklch' | 'rgb'>('hex')

  const copyAllColors = () => {
    const allColors = palette.colors
      .map((c) => `${c.name}: ${format === 'hex' ? c.hex : format === 'oklch' ? c.oklch : c.rgb}`)
      .join('\n')
    onCopyPalette(allColors)
  }

  return (
    <Card className="group hover:shadow-md transition-all duration-200">
      <CardHeader>
        <div className="flex items-start justify-between">
          <div className="flex-1">
            <CardTitle className="text-lg">{palette.name}</CardTitle>
            <CardDescription className="mt-1">{palette.description}</CardDescription>
          </div>
          <button
            onClick={onToggleFavorite}
            className="text-muted-foreground hover:text-destructive transition-colors"
          >
            <Heart size={20} weight={isFavorite ? 'fill' : 'regular'} />
          </button>
        </div>
        <Badge variant="secondary" className="w-fit mt-2">{palette.category}</Badge>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="flex gap-2 justify-center">
          <Button
            variant={format === 'hex' ? 'default' : 'outline'}
            size="sm"
            onClick={() => setFormat('hex')}
          >
            HEX
          </Button>
          <Button
            variant={format === 'oklch' ? 'default' : 'outline'}
            size="sm"
            onClick={() => setFormat('oklch')}
          >
            OKLCH
          </Button>
          <Button
            variant={format === 'rgb' ? 'default' : 'outline'}
            size="sm"
            onClick={() => setFormat('rgb')}
          >
            RGB
          </Button>
        </div>

        <div className="space-y-2">
          {palette.colors.map((color, index) => (
            <div key={index}>
              <div className="flex items-center gap-2">
                <div
                  className="w-16 h-10 rounded border"
                  style={{ backgroundColor: color.hex }}
                />
                <div className="flex-1 min-w-0">
                  <div className="text-sm font-medium">{color.name}</div>
                  <button
                    onClick={() => onCopyColor(format === 'hex' ? color.hex : format === 'oklch' ? color.oklch : color.rgb, format)}
                    className="text-xs font-mono text-muted-foreground hover:text-foreground truncate block w-full text-left"
                  >
                    {format === 'hex' ? color.hex : format === 'oklch' ? color.oklch : color.rgb}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <Separator />

        <Button
          onClick={copyAllColors}
          className="w-full"
          size="sm"
          variant={isCopied ? 'default' : 'outline'}
        >
          {isCopied ? (
            <>
              <Check size={16} className="mr-2" />
              Copied All!
            </>
          ) : (
            <>
              <Copy size={16} className="mr-2" />
              Copy All Colors
            </>
          )}
        </Button>
      </CardContent>
    </Card>
  )
}

interface StyleTemplateCardProps {
  template: StyleTemplate
  isFavorite: boolean
  isCopied: boolean
  onCopy: () => void
  onToggleFavorite: () => void
}

function StyleTemplateCard({ template, isFavorite, isCopied, onCopy, onToggleFavorite }: StyleTemplateCardProps) {
  return (
    <Card className="group hover:shadow-md transition-all duration-200">
      <CardHeader>
        <div className="flex items-start justify-between">
          <div className="flex-1">
            <CardTitle className="text-lg">{template.name}</CardTitle>
            <CardDescription className="mt-1">{template.description}</CardDescription>
          </div>
          <button
            onClick={onToggleFavorite}
            className="text-muted-foreground hover:text-destructive transition-colors"
          >
            <Heart size={20} weight={isFavorite ? 'fill' : 'regular'} />
          </button>
        </div>
        <div className="flex gap-2 flex-wrap mt-2">
          <Badge variant="secondary">{template.category}</Badge>
          {template.tags.slice(0, 2).map((tag) => (
            <Badge key={tag} variant="outline" className="text-xs">
              {tag}
            </Badge>
          ))}
        </div>
      </CardHeader>
      <CardContent className="space-y-4">
        <div>
          <div className="text-xs font-medium text-muted-foreground mb-2 uppercase tracking-wide">Preview</div>
          <div 
            className="border rounded-md p-4 bg-muted/30 flex items-center justify-center min-h-24"
            dangerouslySetInnerHTML={{ __html: template.html }}
          />
          <style dangerouslySetInnerHTML={{ __html: template.css }} />
        </div>

        <div>
          <div className="text-xs font-medium text-muted-foreground mb-2 uppercase tracking-wide">CSS Code</div>
          <ScrollArea className="h-40 w-full rounded-md border bg-muted/50 p-3">
            <pre className="text-xs font-mono leading-relaxed">
              <code>{template.css}</code>
            </pre>
          </ScrollArea>
        </div>

        <Button
          onClick={onCopy}
          className="w-full"
          size="sm"
          variant={isCopied ? 'default' : 'outline'}
        >
          {isCopied ? (
            <>
              <Check size={16} className="mr-2" />
              Copied!
            </>
          ) : (
            <>
              <Copy size={16} className="mr-2" />
              Copy CSS
            </>
          )}
        </Button>
      </CardContent>
    </Card>
  )
}

interface GraphicElementCardProps {
  element: GraphicElement
  isFavorite: boolean
  isCopied: boolean
  onCopy: () => void
  onToggleFavorite: () => void
}

function GraphicElementCard({ element, isFavorite, isCopied, onCopy, onToggleFavorite }: GraphicElementCardProps) {
  const [customColor, setCustomColor] = useState('#667eea')

  return (
    <Card className="group hover:shadow-md transition-all duration-200 hover:-translate-y-1">
      <CardHeader>
        <div className="flex items-start justify-between">
          <div className="flex-1">
            <CardTitle className="text-lg">{element.name}</CardTitle>
            <CardDescription className="mt-1">{element.description}</CardDescription>
          </div>
          <button
            onClick={onToggleFavorite}
            className="text-muted-foreground hover:text-destructive transition-colors"
          >
            <Heart size={20} weight={isFavorite ? 'fill' : 'regular'} />
          </button>
        </div>
        <Badge variant="secondary" className="w-fit mt-2">{element.category}</Badge>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="border rounded-md p-6 bg-gradient-to-br from-muted/30 to-muted/60 flex items-center justify-center min-h-32">
          <div 
            className="w-full max-w-48"
            style={{ color: customColor }}
            dangerouslySetInnerHTML={{ __html: element.svg }}
          />
        </div>

        {element.customizable && (
          <div className="flex items-center gap-3">
            <label className="text-sm font-medium">Color:</label>
            <input
              type="color"
              value={customColor}
              onChange={(e) => setCustomColor(e.target.value)}
              className="w-12 h-10 border rounded cursor-pointer"
            />
            <span className="text-xs font-mono text-muted-foreground">{customColor}</span>
          </div>
        )}

        <Button
          onClick={onCopy}
          className="w-full"
          size="sm"
          variant={isCopied ? 'default' : 'outline'}
        >
          {isCopied ? (
            <>
              <Check size={16} className="mr-2" />
              Copied!
            </>
          ) : (
            <>
              <Copy size={16} className="mr-2" />
              Copy SVG
            </>
          )}
        </Button>
      </CardContent>
    </Card>
  )
}

export default App
