import Image from "next/image"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { MasonryGallery } from "@/components/masonry-gallery"

export default function GalleryPage() {
  // Categories for the tabs
  const categories = [
    { id: "all", name: "Toate" },
    { id: "portraits", name: "Portrete" },
    { id: "landscapes", name: "Peisaje" },
    { id: "weddings", name: "Nunți" },
    { id: "street", name: "Stradă" },
    { id: "wildlife", name: "Natură" },
    { id: "architecture", name: "Arhitectură" },
  ]

  // Sample gallery images with different heights for masonry effect
  const galleryImages = [
    {
      id: 1,
      src: "/placeholder.svg?height=600&width=400",
      alt: "Portret foto",
      category: "portraits",
      width: 400,
      height: 600,
    },
    {
      id: 2,
      src: "/placeholder.svg?height=400&width=600",
      alt: "Peisaj foto",
      category: "landscapes",
      width: 600,
      height: 400,
    },
    {
      id: 3,
      src: "/placeholder.svg?height=500&width=400",
      alt: "Nuntă foto",
      category: "weddings",
      width: 400,
      height: 500,
    },
    {
      id: 4,
      src: "/placeholder.svg?height=700&width=400",
      alt: "Stradă foto",
      category: "street",
      width: 400,
      height: 700,
    },
    {
      id: 5,
      src: "/placeholder.svg?height=450&width=400",
      alt: "Natură foto",
      category: "wildlife",
      width: 400,
      height: 450,
    },
    {
      id: 6,
      src: "/placeholder.svg?height=550&width=400",
      alt: "Arhitectură foto",
      category: "architecture",
      width: 400,
      height: 550,
    },
    {
      id: 7,
      src: "/placeholder.svg?height=650&width=400",
      alt: "Portret foto",
      category: "portraits",
      width: 400,
      height: 650,
    },
    {
      id: 8,
      src: "/placeholder.svg?height=500&width=400",
      alt: "Peisaj foto",
      category: "landscapes",
      width: 400,
      height: 500,
    },
    {
      id: 9,
      src: "/placeholder.svg?height=600&width=400",
      alt: "Nuntă foto",
      category: "weddings",
      width: 400,
      height: 600,
    },
    {
      id: 10,
      src: "/placeholder.svg?height=450&width=400",
      alt: "Stradă foto",
      category: "street",
      width: 400,
      height: 450,
    },
    {
      id: 11,
      src: "/placeholder.svg?height=550&width=400",
      alt: "Natură foto",
      category: "wildlife",
      width: 400,
      height: 550,
    },
    {
      id: 12,
      src: "/placeholder.svg?height=500&width=400",
      alt: "Arhitectură foto",
      category: "architecture",
      width: 400,
      height: 500,
    },
    {
      id: 13,
      src: "/placeholder.svg?height=700&width=400",
      alt: "Portret foto",
      category: "portraits",
      width: 400,
      height: 700,
    },
    {
      id: 14,
      src: "/placeholder.svg?height=600&width=400",
      alt: "Peisaj foto",
      category: "landscapes",
      width: 400,
      height: 600,
    },
    {
      id: 15,
      src: "/placeholder.svg?height=500&width=400",
      alt: "Nuntă foto",
      category: "weddings",
      width: 400,
      height: 500,
    },
  ]

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative h-[40vh] overflow-hidden">
        <Image src="/placeholder.svg?height=800&width=1920" alt="Fotografii hero" fill className="object-cover" priority />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/30 flex items-center">
          <div className="container px-4 md:px-6">
            <div className="max-w-2xl space-y-4">
              <Badge className="bg-primary text-primary-foreground px-3 py-1 text-sm">Galerie foto</Badge>
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-white">
                Explorează colecția noastră de fotografii
              </h1>
              <p className="text-muted-100 md:text-xl text-white/80">
                O selecție cu cele mai bune lucrări din diverse genuri și stiluri.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-12 md:py-24">
        <div className="container px-4 md:px-6">
          <Tabs defaultValue="all" className="w-full">
            <div className="flex justify-center mb-8">
              <TabsList className="grid grid-flow-col auto-cols-max gap-2 overflow-x-auto p-1">
                {categories.map((category) => (
                  <TabsTrigger
                    key={category.id}
                    value={category.id}
                    className="px-4 py-2 rounded-full data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
                  >
                    {category.name}
                  </TabsTrigger>
                ))}
              </TabsList>
            </div>

            {/* All Photos Tab */}
            <TabsContent value="all" className="mt-6">
              <MasonryGallery photos={galleryImages} categories={[]} />
            </TabsContent>

            {/* Category Tabs */}
            {categories.slice(1).map((category) => (
              <TabsContent key={category.id} value={category.id} className="mt-6">
                <MasonryGallery
                  photos={galleryImages.filter((img) => img.category === category.id)}
                  categories={[]}
                />
              </TabsContent>
            ))}


          </Tabs>
        </div>
      </section>
    </div>
  )
}

