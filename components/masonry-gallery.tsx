"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent } from "@/components/ui/dialog"
import { ChevronLeft, ChevronRight, X } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

type Photo = {
  id: number
  src: string
  alt: string
  width: number
  height: number
  category: string
}

type Category = {
  id: string
  name: string
}

interface MasonryGalleryProps {
  photos: Photo[]
  categories: Category[]
}

export function MasonryGallery({ photos, categories }: MasonryGalleryProps) {
  const [selectedCategory, setSelectedCategory] = useState("all")
  const [selectedPhoto, setSelectedPhoto] = useState<Photo | null>(null)
  const [lightboxOpen, setLightboxOpen] = useState(false)
  const [columns, setColumns] = useState(4)

  // Responsive columns
  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth
      if (width < 640) {
        setColumns(1)
      } else if (width < 768) {
        setColumns(2)
      } else if (width < 1024) {
        setColumns(3)
      } else {
        setColumns(4)
      }
    }

    handleResize()
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  const filteredPhotos =
    selectedCategory === "all" ? photos : photos.filter((photo) => photo.category === selectedCategory)

  const openLightbox = (photo: Photo) => {
    setSelectedPhoto(photo)
    setLightboxOpen(true)
  }

  const closeLightbox = () => {
    setLightboxOpen(false)
  }

  const navigateLightbox = (direction: "next" | "prev") => {
    if (!selectedPhoto) return

    const currentIndex = filteredPhotos.findIndex((p) => p.id === selectedPhoto.id)
    let newIndex

    if (direction === "next") {
      newIndex = (currentIndex + 1) % filteredPhotos.length
    } else {
      newIndex = (currentIndex - 1 + filteredPhotos.length) % filteredPhotos.length
    }

    setSelectedPhoto(filteredPhotos[newIndex])
  }

  // Organize photos into columns for masonry layout
  const photoColumns = Array.from({ length: columns }, () => [] as Photo[])

  filteredPhotos.forEach((photo, index) => {
    const columnIndex = index % columns
    photoColumns[columnIndex].push(photo)
  })

  return (
    <div>
      {/* Category Filter */}
      <motion.div
        className="mb-8 flex flex-wrap justify-center gap-2"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        {categories.map((category) => (
          <Button
            key={category.id}
            variant={selectedCategory === category.id ? "default" : "outline"}
            onClick={() => setSelectedCategory(category.id)}
            className="rounded-full transition-all hover:shadow-md"
          >
            {category.name}
          </Button>
        ))}
      </motion.div>

      {/* Masonry Gallery */}
      <div className="flex gap-4">
        {photoColumns.map((column, columnIndex) => (
          <div key={columnIndex} className="flex-1 space-y-4">
            {column.map((photo, photoIndex) => (
              <motion.div
                key={photo.id}
                className="overflow-hidden rounded-lg"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: (columnIndex * column.length + photoIndex) * 0.05 }}
                whileHover={{ y: -5 }}
              >
                <div className="group relative cursor-pointer" onClick={() => openLightbox(photo)}>
                  <Image
                    src={photo.src || "/placeholder.svg"}
                    alt={photo.alt}
                    width={photo.width}
                    height={photo.height}
                    className="w-full transform object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/30 opacity-0 transition-opacity duration-300 group-hover:opacity-100 flex items-center justify-center">
                    <div className="transform scale-0 transition-transform duration-300 group-hover:scale-100">
                      <Button variant="secondary" size="sm" className="rounded-full">
                        Vezi imaginea
                      </Button>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        ))}
      </div>

      {/* Lightbox */}
      <Dialog open={lightboxOpen} onOpenChange={setLightboxOpen}>
        <DialogContent className="max-w-5xl p-0 overflow-hidden bg-black/95 border-none">
          <div className="relative flex items-center justify-center h-[90vh]">
            <Button
              variant="ghost"
              size="icon"
              className="absolute right-2 top-2 z-10 text-white hover:bg-white/20 rounded-full"
              onClick={closeLightbox}
            >
              <X className="h-6 w-6" />
              <span className="sr-only">Închide</span>
            </Button>

            <AnimatePresence mode="wait">
              {selectedPhoto && (
                <motion.div
                  key={selectedPhoto.id}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="relative h-full w-full flex items-center justify-center"
                >
                  <Image
                    src={selectedPhoto.src || "/placeholder.svg"}
                    alt={selectedPhoto.alt}
                    fill
                    className="object-contain"
                  />
                </motion.div>
              )}
            </AnimatePresence>

            <Button
              variant="ghost"
              size="icon"
              className="absolute left-2 z-10 text-white hover:bg-white/20 rounded-full h-12 w-12"
              onClick={() => navigateLightbox("prev")}
            >
              <ChevronLeft className="h-8 w-8" />
              <span className="sr-only">Anterior</span>
            </Button>

            <Button
              variant="ghost"
              size="icon"
              className="absolute right-2 z-10 text-white hover:bg-white/20 rounded-full h-12 w-12"
              onClick={() => navigateLightbox("next")}
            >
              <ChevronRight className="h-8 w-8" />
              <span className="sr-only">Următor</span>
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  )
}

