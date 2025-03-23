import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { VideoGallery } from "@/components/video-gallery"
import { Play } from "lucide-react"

export default function VideosPage() {
  // Sample video data
  const videos = [
    {
      id: 1,
      title: "Nuntă: Sarah & John",
      description: "O nuntă frumoasă de vară la țară.",
      thumbnailSrc: "/placeholder.svg?height=720&width=1280",
      videoSrc: "https://example.com/video1.mp4",
      duration: "3:45",
      date: "15 Iunie 2023",
      category: "weddings",
    },
    {
      id: 2,
      title: "Seria de Călătorii: Islanda",
      description: "Explorarea peisajelor uimitoare din Islanda.",
      thumbnailSrc: "/placeholder.svg?height=720&width=1280",
      videoSrc: "https://example.com/video2.mp4",
      duration: "5:20",
      date: "3 Mai 2023",
      category: "travel",
    },
    {
      id: 3,
      title: "Comercial: Brand de Ceasuri de Lux",
      description: "Un comercial cinematografic pentru o colecție de ceasuri premium.",
      thumbnailSrc: "/placeholder.svg?height=720&width=1280",
      videoSrc: "https://example.com/video3.mp4",
      duration: "1:30",
      date: "22 Aprilie 2023",
      category: "commercial",
    },
    {
      id: 4,
      title: "Din Culise: Ședință Foto în Munți",
      description: "Vezi cum am surprins peisaje montane uimitoare la răsărit.",
      thumbnailSrc: "/placeholder.svg?height=720&width=1280",
      videoSrc: "https://example.com/video4.mp4",
      duration: "7:15",
      date: "10 Martie 2023",
      category: "behind-scenes",
    },
    {
      id: 5,
      title: "Acoperire Eveniment: Festival de Muzică",
      description: "Momente importante de la festivalul anual de muzică de vară.",
      thumbnailSrc: "/placeholder.svg?height=720&width=1280",
      videoSrc: "https://example.com/video5.mp4",
      duration: "4:50",
      date: "28 Februarie 2023",
      category: "events",
    },
    {
      id: 6,
      title: "Sfaturi Foto: Stăpânirea Luminii Naturale",
      description: "Învață cum să lucrezi cu lumina naturală pentru fotografii mai bune.",
      thumbnailSrc: "/placeholder.svg?height=720&width=1280",
      videoSrc: "https://example.com/video6.mp4",
      duration: "10:25",
      date: "15 Ianuarie 2023",
      category: "tutorials",
    },
  ]

  // Categories
  const categories = [
    { id: "all", name: "Toate" },
    { id: "weddings", name: "Nunți" },
    { id: "travel", name: "Călătorii" },
    { id: "commercial", name: "Comerciale" },
    { id: "events", name: "Evenimente" },
    { id: "tutorials", name: "Tutoriale" },
    { id: "behind-scenes", name: "Din Culise" },
  ]

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative h-[40vh] overflow-hidden">
        <Image src="/placeholder.svg?height=800&width=1920" alt="Videos hero" fill className="object-cover" priority />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/30 flex items-center">
          <div className="container px-4 md:px-6">
            <div className="max-w-2xl space-y-4">
              <Badge className="bg-primary text-primary-foreground px-3 py-1 text-sm">Galerie Video</Badge>
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-white">
                Clipuri cinematografice
              </h1>
              <p className="text-muted-100 md:text-xl text-white/80">
                Explorează colecția noastră de proiecte video, de la nunți la lucrări comerciale.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Video Gallery Section */}
      <section className="py-12 md:py-24">
        <div className="container px-4 md:px-6">
          <VideoGallery videos={videos} categories={categories} />
        </div>
      </section>

      {/* Featured Video Section */}
      <section className="py-12 md:py-24 bg-muted">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-10">
            <div className="space-y-2">
              <Badge variant="outline" className="border-primary text-primary">
                Recomandat
              </Badge>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Cele mai recente proiecte</h2>
              <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                Descoperă cea mai recentă creație cinematografică a noastră.
              </p>
            </div>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="relative aspect-video rounded-lg overflow-hidden shadow-xl group cursor-pointer">
              <Image
                src="/placeholder.svg?height=1080&width=1920"
                alt="Featured video thumbnail"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                <Button
                  size="lg"
                  className="gap-2 rounded-full bg-primary/90 hover:bg-primary/100 transition-transform duration-300 group-hover:scale-110"
                >
                  <Play className="h-5 w-5" />
                  Vizionează prezentarea
                </Button>
              </div>
            </div>
            <div className="mt-6 text-center">
              <h3 className="text-2xl font-bold"></h3>
              <p className="text-muted-foreground mt-2">
                
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

