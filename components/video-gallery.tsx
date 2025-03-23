"use client"

import { useState } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogTitle, DialogDescription } from "@/components/ui/dialog"
import { Card, CardContent } from "@/components/ui/card"
import { Play, X } from "lucide-react"
import { motion } from "framer-motion"

type Video = {
  id: number
  title: string
  description: string
  thumbnailSrc: string
  videoSrc: string
  category: string
}

type Category = {
  id: string
  name: string
}

interface VideoGalleryProps {
  videos: Video[]
  categories: Category[]
}

export function VideoGallery({ videos, categories }: VideoGalleryProps) {
  const [selectedCategory, setSelectedCategory] = useState("all")
  const [selectedVideo, setSelectedVideo] = useState<Video | null>(null)
  const [videoModalOpen, setVideoModalOpen] = useState(false)

  const filteredVideos =
    selectedCategory === "all" ? videos : videos.filter((video) => video.category === selectedCategory)

  const openVideoModal = (video: Video) => {
    setSelectedVideo(video)
    setVideoModalOpen(true)
  }

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  }

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

      {/* Video Grid */}
      <motion.div
        className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
        variants={container}
        initial="hidden"
        animate="show"
      >
        {filteredVideos.map((video) => (
          <motion.div key={video.id} variants={item}>
            <Card className="overflow-hidden border-none shadow-lg h-full hover:shadow-xl transition-shadow duration-300">
              <CardContent className="p-0 h-full">
                <div className="group relative cursor-pointer h-full" onClick={() => openVideoModal(video)}>
                  <div className="relative aspect-video w-full overflow-hidden">
                    <Image
                      src={video.thumbnailSrc || "/placeholder.svg"}
                      alt={video.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 flex items-center justify-center bg-black/30 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                      <div className="rounded-full bg-primary/80 p-4 transform scale-0 transition-transform duration-300 group-hover:scale-100">
                        <Play className="h-8 w-8 text-white" />
                      </div>
                    </div>
                  </div>
                  <div className="p-4">
                    <h3 className="mb-2 text-xl font-bold group-hover:text-primary transition-colors">{video.title}</h3>
                    <p className="text-muted-foreground">{video.description}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </motion.div>

      {/* Video Modal */}
      <Dialog open={videoModalOpen} onOpenChange={setVideoModalOpen}>
        <DialogContent className="max-w-4xl p-0 overflow-hidden border-none">
          <div className="relative">
            <Button
              variant="ghost"
              size="icon"
              className="absolute right-2 top-2 z-10 rounded-full"
              onClick={() => setVideoModalOpen(false)}
            >
              <X className="h-6 w-6" />
              <span className="sr-only">Închide</span>
            </Button>

            {selectedVideo && (
              <div className="p-6">
                <DialogTitle className="mb-2 text-2xl">{selectedVideo.title}</DialogTitle>
                <DialogDescription className="mb-4">{selectedVideo.description}</DialogDescription>
                <div className="relative aspect-video w-full overflow-hidden rounded-lg bg-muted">
                  {/* În mod normal, aici ar fi un player video real */}
                  <div className="flex h-full w-full items-center justify-center">
                    <div className="text-center">
                      <Play className="h-16 w-16 mx-auto mb-4 text-primary" />
                      <p className="text-muted-foreground">
                        Player video - În mod normal, aici ar fi încorporat un videoclip real
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </DialogContent>
      </Dialog>
    </div>
  )
}

