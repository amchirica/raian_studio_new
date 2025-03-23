"use client"

import { useState, useEffect } from "react"
import { useParams } from "next/navigation"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowLeft, Calendar, Clock, ThumbsUp, MessageSquare, Share2 } from "lucide-react"

export default function VlogPostPage() {
  const params = useParams()
  const { id } = params
  const [isLoading, setIsLoading] = useState(true)

  // In a real app, this would fetch from an API
  const vlogPost = {
    id: Number(id),
    title: "Explorând Delta Dunării: O Aventură Fotografică de 7 Zile",
    excerpt:
      "În acest episod special, vă duc într-o călătorie de 7 zile în Delta Dunării, unde explorăm locuri ascunse și surprindem fauna și flora unică a acestui paradis natural.",
    content: `
      <p>Delta Dunării este unul dintre cele mai spectaculoase locuri din România pentru fotografia de natură. În acest vlog, vă împărtășesc experiența mea de 7 zile explorând acest paradis natural.</p>
      
      <h2>Ziua 1-2: Sosirea și primele impresii</h2>
      <p>Am ajuns în Tulcea și am luat o barcă spre inima Deltei. Primele zile au fost dedicate acomodării cu mediul și explorării zonelor din jurul cazării. Am surprins apusuri spectaculoase peste apă și primele întâlniri cu fauna locală.</p>
      
      <h2>Ziua 3-4: Canalele ascunse</h2>
      <p>Cu ajutorul unui ghid local, am explorat canale mai puțin cunoscute, unde am avut șansa să Fotografiiz păsări rare și vegetație unică. Tehnicile de Fotografii în condiții de lumină dificile au fost esențiale aici.</p>
      
      <h2>Ziua 5-6: Fotografia de macro și peisaj</h2>
      <p>Am alternat între sesiuni de Fotografii macro, surprinzând insecte și plante acvatice fascinante, și cadre largi de peisaj care să capteze măreția Deltei. Provocarea a fost să găsesc compoziții care să transmită atât detaliile cât și amploarea acestui ecosistem.</p>
      
      <h2>Ziua 7: Reflecții și întoarcerea</h2>
      <p>În ultima zi, am revizitat locurile care m-au impresionat cel mai mult și am încercat să surprind cadre care să completeze povestea vizuală a acestei călătorii.</p>
      
      <h2>Echipament utilizat</h2>
      <ul>
        <li>Camera: Sony Alpha A7 IV</li>
        <li>Obiective: 24-70mm f/2.8, 70-200mm f/2.8, 100mm f/2.8 Macro</li>
        <li>Trepied: Manfrotto 055XPRO3</li>
        <li>Filtre: Polarizare și ND pentru expuneri lungi</li>
      </ul>
      
      <p>Această călătorie a fost o experiență incredibilă care mi-a testat abilitățile fotografice și mi-a oferit oportunitatea de a surprinde frumusețea unică a Deltei Dunării. Sper că acest vlog vă inspiră să explorați și să fotografiați acest loc minunat.</p>
    `,
    thumbnail: "/placeholder.svg?height=720&width=1280",
    videoUrl: "#", // În mod normal, aici ar fi un URL real către un videoclip
    duration: "42:15",
    date: "20 Martie 2023",
    views: "4.7K",
    likes: 342,
    comments: 56,
    author: {
      name: "Alexandru Popescu",
      avatar: "/placeholder.svg?height=100&width=100",
    },
    category: "Travel",
    tags: ["Delta Dunării", "Fotografii de natură", "Wildlife", "Călătorii"],
    relatedPosts: [
      {
        id: 2,
        title: "Cum să alegi echipamentul potrivit pentru fotografia de peisaj",
        thumbnail: "/placeholder.svg?height=400&width=600",
        duration: "18:30",
        date: "3 Mai 2023",
        views: "3.5K",
      },
      {
        id: 4,
        title: "Călătorie fotografică în munții Carpați",
        thumbnail: "/placeholder.svg?height=400&width=600",
        duration: "28:40",
        date: "10 Martie 2023",
        views: "2.7K",
      },
      {
        id: 5,
        title: "Interviu cu un fotograf de wildlife renumit",
        thumbnail: "/placeholder.svg?height=400&width=600",
        duration: "35:20",
        date: "28 Februarie 2023",
        views: "1.9K",
      },
    ],
  }

  useEffect(() => {
    // Simulate loading
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 500)

    return () => clearTimeout(timer)
  }, [])

  if (isLoading) {
    return (
      <div className="container mx-auto px-4 py-12 flex justify-center items-center min-h-[60vh]">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div>
      </div>
    )
  }

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="mb-8">
        <Button asChild variant="ghost" className="mb-4">
          <Link href="/vlog">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Înapoi la Vlog
          </Link>
        </Button>

        <div className="flex flex-wrap gap-2 mb-4">
          {vlogPost.tags.map((tag, index) => (
            <Badge key={index} variant="secondary">
              {tag}
            </Badge>
          ))}
        </div>

        <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-4">{vlogPost.title}</h1>

        <div className="flex flex-wrap items-center gap-4 text-muted-foreground mb-8">
          <div className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-full overflow-hidden">
              <Image
                src={vlogPost.author.avatar || "/placeholder.svg"}
                alt={vlogPost.author.name}
                width={32}
                height={32}
                className="object-cover"
              />
            </div>
            <span>{vlogPost.author.name}</span>
          </div>
          <div className="flex items-center gap-1">
            <Calendar className="h-4 w-4" />
            <span>{vlogPost.date}</span>
          </div>
          <div className="flex items-center gap-1">
            <Clock className="h-4 w-4" />
            <span>{vlogPost.duration}</span>
          </div>
          <div className="flex items-center gap-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z" />
              <circle cx="12" cy="12" r="3" />
            </svg>
            <span>{vlogPost.views} vizualizări</span>
          </div>
        </div>
      </div>

      {/* Video Player */}
      <div className="relative aspect-video w-full overflow-hidden rounded-xl bg-muted mb-8 shadow-lg">
        <Image src={vlogPost.thumbnail || "/placeholder.svg"} alt={vlogPost.title} fill className="object-cover" />
        <div className="absolute inset-0 flex items-center justify-center bg-black/30">
          <Button size="lg" className="rounded-full gap-2">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
              <polygon points="5 3 19 12 5 21 5 3" />
            </svg>
            Vizionează
          </Button>
        </div>
      </div>

      {/* Engagement Buttons */}
      <div className="flex flex-wrap gap-4 mb-8">
        <Button variant="outline" className="gap-2">
          <ThumbsUp className="h-4 w-4" />
          <span>{vlogPost.likes}</span>
        </Button>
        <Button variant="outline" className="gap-2">
          <MessageSquare className="h-4 w-4" />
          <span>{vlogPost.comments}</span>
        </Button>
        <Button variant="outline" className="gap-2">
          <Share2 className="h-4 w-4" />
          Distribuie
        </Button>
      </div>

      {/* Content */}
      <div
        className="prose prose-lg max-w-none dark:prose-invert mb-12"
        dangerouslySetInnerHTML={{ __html: vlogPost.content }}
      />

      {/* Related Videos */}
      <div className="mt-12 border-t pt-8">
        <h2 className="text-2xl font-bold mb-6">Videoclipuri similare</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {vlogPost.relatedPosts.map((post) => (
            <Link key={post.id} href={`/vlog/${post.id}`}>
              <Card className="overflow-hidden border-none shadow-lg h-full hover:shadow-xl transition-shadow duration-300">
                <div className="relative aspect-video w-full overflow-hidden">
                  <Image
                    src={post.thumbnail || "/placeholder.svg"}
                    alt={post.title}
                    fill
                    className="object-cover transition-transform duration-500 hover:scale-105"
                  />
                  <div className="absolute bottom-2 right-2 bg-black/70 text-white text-xs px-2 py-1 rounded">
                    {post.duration}
                  </div>
                </div>
                <CardContent className="p-4">
                  <h3 className="font-medium line-clamp-2 hover:text-primary transition-colors">{post.title}</h3>
                  <div className="flex items-center gap-2 text-xs text-muted-foreground mt-2">
                    <Calendar className="h-3 w-3" />
                    <span>{post.date}</span>
                    <span>•</span>
                    <span>{post.views} vizualizări</span>
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}

