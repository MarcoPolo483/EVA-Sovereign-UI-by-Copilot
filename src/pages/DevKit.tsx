import { useState, useMemo } from 'react'
import { useKV } from '@github/spark/hooks'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Input } from '@/components/ui/input'
import { Card, CardContent, CardDescription, Ca
import { ScrollArea } from '@/components/ui/scroll-area'
import { 
  Palette, 
  Shapes, 
  Copy, 
  Heart,
} from '@ph
import { cssSn

  const [activeTab,
  const 
  const [
  const 
   
      toast.success(`Copied ${
    } catch {
    }


      if (current.includes
      }
    })

    return cssSnippets.filter((snippet) => {
        snippet.name.toLowerCase().includes(searchQuery.toLower

      return matchesSearch && matchesCategory
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
      if (!current) return [id]
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
    <div className="space-y-6">
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
            {getCur

                size="sm"
              >
              </Button>
          </div>

          {filteredCSS.length ===
              <CardContent className="py-12 text-center">
              </CardContent>
          ) : 
              {filteredCSS.ma
                  key
                  isFavorite={favorites?.includes(
                  onCopy={() => copyToClipboard(snippet.code, snippet.id, snippet.name)}
               
            </div>
        </TabsContent>
        <TabsC
            <Car

            </Card>
            <div cl
                <ColorPaletteCard
                  palet
                  onCopyColor={(color, format) => copyTo
             
                /
            </div>
        </TabsContent>
        <TabsContent 
            <Card>
                <p className="text-muted-foreground">No style templates found</
            </Card>
            <div className="grid grid-cols-1 lg:grid-cols-2 g
               
                  template
                  isCop
               
              ))
          )}

          {filteredGraphics.length === 0 ? (
              <CardContent className="p
              </Ca
          ) : (
              {filteredGraphics.map((element) => (
                  key={eleme
                  i
               
                />
            </div>
        </TabsContent>
    </div>
}
interface CSSSnippetCardProps {
  isFavorite: boolean
  onCopy: () => void
}
function CSSSnippe
    <Card classNa
        <div class
            
          </div>

          >
          </button>
        <div class
          {snippet.tags.slice(0, 2).map((tag) => (
              {tag}
          ))}
      </CardHeader>
        <Scroll
            <code>{snippet.code}</code>
        </ScrollArea>
          onClick={onCopy}
          size="sm"
        >
            <>
              Copied!
          ) : (
              <Copy size={16} className="mr-2" />
            </>
        </Button>
    </Card>
}
interface Co
  isFavorite: boolean

  onToggleFavorite: () => void

  const [format, s
  const copyAllColors = () => {
      .map((c) => `${c.name}: ${format === 'hex' ? c.hex : format === 'oklch' ? c
    onCopyPalette(allColors)

    <Card class
        <div className="flex items-start justify-between">
            <CardTitle className="text-lg">{palet
          </div>
            onClick={onToggleFavori
          >
          </button>
        <Badge variant="secondary" className="w-fit m
      <CardContent className="space-y-4">
          <Button
            size="
          >
          </Button
            
            onClick={(

          <Button
            size="sm"
          >
          </Button>

          {palette.colors.ma
              <div 
               
                />
                  <div className="text-sm font-med
                    onClick={() => 
                  >
                  </button>
              </div>
          ))}


          onClick=
          size="s
        >
            
              Copied A
          ) :
          
   
 

}
interface StyleTempla
  isFavorite: boolean
  onCopy: () => voi
}
function StyleTemplateCard({ t
 

            <CardTitle className="text-lg">{template.name}</CardTitle>
          
            onClick={onToggleFavorite}
          >
          </button>
        <div className="flex gap-2
          {template.tags.slice(0, 2).map((tag) => (
              {tag}
          ))}
      </CardHeade
        <div>
          <div 
           
          <style dangerouslySetInnerHTML={{ __html: template.css }} />

          <div
            <pre className="text-xs font-mono leadi
            </pre>
        </div>
        <Button
          className
          variant={i
          {is
              
            </>
            <>
              Copy CSS
          )}
      </CardContent>
  )

  element: Grap
  isCopied: boolean
  onToggleFavorite: () => void

  const [customColor, setCustomColor] = useState('#6
  return 
      <CardHeader>
          <div
            <CardDescription className="mt-1">{ele
          <button
            cla
            <He
        </div>
      </CardHeader>
        <div className=
            cla
            
        </div>
        {element.cus
           
   
 

          </div>

          onClick={on
          size="sm"
        >
            <>
              Copied!
 

            </>
        </Button>

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
