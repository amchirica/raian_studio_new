"use client"

import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Play, Calendar, Clock, User, ArrowRight } from "lucide-react"
import { motion } from "framer-motion"

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 },
  },
}

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
}

export default function VlogPage() {
  // Sample vlog posts
  const vlogPosts = [
    {
      id: 1,
      title: "O zi din viața unui fotograf de nuntă",
      excerpt: "Urmărește-mă în culisele unei nunți de vară și vezi cum surprind momentele speciale.",
      thumbnail: "/placeholder.svg?height=720&width=1280",
      duration: "12:45",
      date: "15 Iunie 2023",
      views: "1.2K",
      category: "Behind the Scenes",
    },
    {
      id: 2,
      title: "Cum să alegi echipamentul potrivit pentru fotografia de peisaj",
      excerpt: "Ghid complet despre camerele, obiectivele și accesoriile esențiale pentru fotografia de peisaj.",
      thumbnail: "/placeholder.svg?height=720&width=1280",
      duration: "18:30",
      date: "3 Mai 2023",
      views: "3.5K",
      category: "Gear Review",
    },
    {
      id: 3,
      title: "Tutorial de editare în Lightroom pentru începători",
      excerpt: "Învață bazele editării fotografiilor în Adobe Lightroom cu acest tutorial pas cu pas.",
      thumbnail: "/placeholder.svg?height=720&width=1280",
      duration: "22:15",
      date: "22 Aprilie 2023",
      views: "5.8K",
      category: "Tutorial",
    },
    {
      id: 4,
      title: "Călătorie fotografică în munții Carpați",
      excerpt: "Vino cu mine într-o aventură de 3 zile pentru a surprinde frumusețea munților Carpați.",
      thumbnail: "/placeholder.svg?height=720&width=1280",
      duration: "28:40",
      date: "10 Martie 2023",
      views: "2.7K",
      category: "Travel",
    },
    {
      id: 5,
      title: "Interviu cu un fotograf de wildlife renumit",
      excerpt: "Discuție cu Mihai Popescu despre provocările și satisfacțiile Fotografiii de wildlife.",
      thumbnail: "/placeholder.svg?height=720&width=1280",
      duration: "35:20",
      date: "28 Februarie 2023",
      views: "1.9K",
      category: "Interview",
    },
    {
      id: 6,
      title: "Cum să construiești un portofoliu de Fotografii impresionant",
      excerpt: "Sfaturi pentru a-ți crea un portofoliu care să atragă clienți și să-ți reprezinte stilul.",
      thumbnail: "/placeholder.svg?height=720&width=1280",
      duration: "15:50",
      date: "15 Ianuarie 2023",
      views: "4.3K",
      category: "Business",
    },
  ]

  // Categories
  const categories = ["All", "Behind the Scenes", "Gear Review", "Tutorial", "Travel", "Interview", "Business"]

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative h-[40vh] overflow-hidden">
        <Image src="/placeholder.svg?height=800&width=1920" alt="Vlog hero" fill className="object-cover" priority />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/30 flex items-center">
          <div className="container px-4 md:px-6">
            <div className="max-w-2xl space-y-4">
              <Badge className="bg-primary text-primary-foreground px-3 py-1 text-sm">Vlog</Badge>
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-white">
                Vlog | Podcast
              </h1>
              <p className="text-muted-100 md:text-xl text-white/80">
                
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Vlog */}
      <section className="py-12 md:py-24">
        <div className="container px-4 md:px-6">
          <motion.div
            className="flex flex-col items-center justify-center space-y-4 text-center mb-10"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
          >
            <div className="space-y-2">
              <Badge variant="outline" className="border-primary text-primary">
                Episod Nou
              </Badge>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Cel mai recent podcast</h2>
              <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                Descoperă cel mai nou episod din ...
              </p>
            </div>
          </motion.div>

          <motion.div
            className="grid md:grid-cols-2 gap-8 items-center"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            <motion.div variants={fadeIn} className="relative aspect-video rounded-xl overflow-hidden group">
              <Image
                src="/placeholder.svg?height=1080&width=1920"
                alt="Featured vlog thumbnail"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                <Button
                  size="lg"
                  className="gap-2 rounded-full bg-primary/90 hover:bg-primary/100 transition-transform duration-300 group-hover:scale-110"
                >
                  <Play className="h-5 w-5" />
                  Vizionează acum
                </Button>
              </div>
              <div className="absolute bottom-4 right-4 bg-black/70 text-white text-sm px-2 py-1 rounded">42:15</div>
            </motion.div>

            <motion.div variants={fadeIn} className="space-y-4">
              <Badge>Călătorie Fotografică</Badge>
              <h3 className="text-2xl font-bold">Explorând Delta Dunării: O Aventură Fotografică de 7 Zile</h3>
              <div className="flex items-center gap-4 text-sm text-muted-foreground">
                <div className="flex items-center gap-1">
                  <Calendar className="h-4 w-4" />
                  <span>20 Martie 2023</span>
                </div>
                <div className="flex items-center gap-1">
                  <Clock className="h-4 w-4" />
                  <span>42:15 min</span>
                </div>
                <div className="flex items-center gap-1">
                  <User className="h-4 w-4" />
                  <span>Alexandru Popescu</span>
                </div>
              </div>
              <p className="text-muted-foreground">
                În acest episod special, vă duc într-o călătorie de 7 zile în Delta Dunării, unde explorăm locuri
                ascunse și surprindem fauna și flora unică a acestui paradis natural. Veți vedea tehnicile pe care le
                folosesc pentru fotografia de natură, provocările întâmpinate și rezultatele finale uimitoare.
              </p>
              <Button className="gap-2 group">
                Vizionează Episodul Complet
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Vlog Categories */}
      <section className="py-8 bg-muted">
        <div className="container px-4 md:px-6">
          <div className="flex flex-wrap justify-center gap-2">
            {categories.map((category, index) => (
              <Button key={index} variant={index === 0 ? "default" : "outline"} className="rounded-full">
                {category}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Vlog Grid */}
      <section className="py-12 md:py-24">
        <div className="container px-4 md:px-6">
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            {vlogPosts.map((post) => (
              <motion.div key={post.id} variants={fadeIn}>
                <Card className="overflow-hidden border-none shadow-lg h-full hover:shadow-xl transition-shadow duration-300">
                  <CardContent className="p-0 h-full">
                    <div className="relative aspect-video w-full overflow-hidden">
                      <Image
                        src={post.thumbnail || "/placeholder.svg"}
                        alt={post.title}
                        fill
                        className="object-cover transition-transform duration-500 hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                        <Button variant="secondary" size="sm" className="rounded-full">
                          <Play className="h-4 w-4 mr-1" /> Vizionează
                        </Button>
                      </div>
                      <div className="absolute bottom-3 right-3 bg-black/70 text-white text-xs px-2 py-1 rounded">
                        {post.duration}
                      </div>
                      <div className="absolute top-3 left-3">
                        <Badge variant="secondary">{post.category}</Badge>
                      </div>
                    </div>
                    <div className="p-5">
                      <div className="flex items-center gap-2 text-xs text-muted-foreground mb-2">
                        <Calendar className="h-3 w-3" />
                        <span>{post.date}</span>
                        <span className="flex items-center gap-1 ml-2">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="12"
                            height="12"
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
                          {post.views} vizualizări
                        </span>
                      </div>
                      <h3 className="text-xl font-bold mb-2 line-clamp-2 hover:text-primary transition-colors">
                        <Link href={`/vlog/${post.id}`}>{post.title}</Link>
                      </h3>
                      <p className="text-muted-foreground line-clamp-2 mb-4">{post.excerpt}</p>
                      <Link
                        href={`/vlog/${post.id}`}
                        className="text-primary font-medium hover:underline inline-flex items-center group"
                      >
                        Citește mai mult
                        <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
                      </Link>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>

          <div className="flex justify-center mt-12">
            <Button variant="outline" className="rounded-full gap-2 group">
              Încarcă Mai Multe
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
                className="transition-transform group-hover:translate-y-1"
              >
                <path d="M12 5v14M5 12l7 7 7-7" />
              </svg>
            </Button>
          </div>
        </div>
      </section>

      {/* Subscribe Section */}
      <section className="py-12 md:py-24 bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 text-white">
        <div className="container px-4 md:px-6">
          <motion.div
            className="flex flex-col items-center text-center space-y-4 max-w-2xl mx-auto"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
          >
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Abonează-te la canalul nostru</h2>
            <p className="text-white/80 md:text-xl">
              Nu rata niciun episod nou! Abonează-te la canalul nostru pentru a primi notificări despre noile
              videoclipuri.
            </p>
            <Button size="lg" variant="secondary" className="mt-4 gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z" />
              </svg>
              Abonează-te pe YouTube
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

