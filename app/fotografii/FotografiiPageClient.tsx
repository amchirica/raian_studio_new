"use client"

import { useEffect, useState } from "react"
import { MasonryGallery } from "@/components/masonry-gallery"
import { type Photo, getPhotos, initCMS } from "@/lib/cms-utils"

export default function FotografiiPageClient() {
  const [photos, setPhotos] = useState<Photo[]>([])
  const [loading, setLoading] = useState(true)

  // Categories definition
  const categories = [
    { id: "all", name: "Toate" },
    { id: "portraits", name: "Portrete" },
    { id: "landscapes", name: "Peisaje" },
    { id: "weddings", name: "Nunți" },
    { id: "events", name: "Evenimente" },
    { id: "nature", name: "Natură" },
  ]

  useEffect(() => {
    // Initialize CMS
    initCMS()

    // Get photos from CMS
    const cmsPhotos = getPhotos()

    // Transform CMS photos to the format expected by MasonryGallery
    const formattedPhotos = cmsPhotos.map((photo) => ({
      id: photo.id,
      src: photo.src,
      alt: photo.title,
      width: photo.width || 600,
      height: photo.height || 600 + (photo.id % 3) * 100,
      category: photo.category,
    }))

    // If no photos in CMS, use placeholders
    if (formattedPhotos.length === 0) {
      const placeholders = Array.from({ length: 20 }, (_, i) => ({
        id: i + 1,
        src: `/placeholder.svg?height=${600 + (i % 3) * 100}&width=600&text=Foto${i + 1}`,
        alt: `Fotografii ${i + 1}`,
        width: 600,
        height: 600 + (i % 3) * 100,
        category: categories[i % categories.length].id,
      }))
      setPhotos(placeholders)
    } else {
      setPhotos(formattedPhotos)
    }

    setLoading(false)
  }, [])

  if (loading) {
    return <div className="container mx-auto px-4 py-12 text-center">Se încarcă...</div>
  }

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="mb-12 text-center">
        <h1 className="mb-4 text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Galerie foto</h1>
        <p className="mx-auto max-w-[700px] text-muted-foreground md:text-lg">
          Explorează colecția noastră de fotografii profesionale din diverse categorii.
        </p>
      </div>

      <MasonryGallery photos={photos} categories={categories} />
    </div>
  )
}

