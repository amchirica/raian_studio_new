import { VideoGallery } from "@/components/video-gallery"

export const metadata = {
  title: "Foto-Video | Raian",
  description: "Explorează galeria noastră de videoclipuri profesionale",
}

export default function VideoclipuriPage() {
  // În mod normal, aceste date ar veni de la un CMS sau API
  const categories = [
    { id: "all", name: "Toate" },
    { id: "weddings", name: "Nunți" },
    { id: "events", name: "Evenimente" },
    { id: "commercials", name: "Comerciale" },
  ]

  const videos = [
    {
      id: 1,
      title: "Nuntă Ana & Mihai",
      description: "Highlight de la o nuntă de vis în București",
      thumbnailSrc: "/placeholder.svg?height=400&width=600&text=Video1",
      videoSrc: "https://www.example.com/video1.mp4", // În mod normal, aici ar fi un URL real
      category: "weddings",
    },
    {
      id: 2,
      title: "Eveniment Corporate Tech Summit",
      description: "Rezumat al conferinței anuale Tech Summit",
      thumbnailSrc: "/placeholder.svg?height=400&width=600&text=Video2",
      videoSrc: "https://www.example.com/video2.mp4",
      category: "events",
    },
    {
      id: 3,
      title: "Campanie Produs Nou",
      description: "Videoclip promoțional pentru lansarea unui produs",
      thumbnailSrc: "/placeholder.svg?height=400&width=600&text=Video3",
      videoSrc: "https://www.example.com/video3.mp4",
      category: "commercials",
    },
    {
      id: 4,
      title: "Nuntă Elena & Andrei",
      description: "Momente speciale de la o nuntă de poveste",
      thumbnailSrc: "/placeholder.svg?height=400&width=600&text=Video4",
      videoSrc: "https://www.example.com/video4.mp4",
      category: "weddings",
    },
    {
      id: 5,
      title: "Gala Premiilor Anuale",
      description: "Highlights de la gala de premiere",
      thumbnailSrc: "/placeholder.svg?height=400&width=600&text=Video5",
      videoSrc: "https://www.example.com/video5.mp4",
      category: "events",
    },
    {
      id: 6,
      title: "Reclamă Restaurant Gourmet",
      description: "Videoclip promoțional pentru un restaurant de lux",
      thumbnailSrc: "/placeholder.svg?height=400&width=600&text=Video6",
      videoSrc: "https://www.example.com/video6.mp4",
      category: "commercials",
    },
  ]

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="mb-12 text-center">
        <h1 className="mb-4 text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Galerie Video</h1>
        <p className="mx-auto max-w-[700px] text-muted-foreground md:text-lg">
          Explorează colecția noastră de videoclipuri profesionale din diverse categorii.
        </p>
      </div>

      <VideoGallery videos={videos} categories={categories} />
    </div>
  )
}

