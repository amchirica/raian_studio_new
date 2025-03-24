"use client"

import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Camera, Clock, Heart, Star } from "lucide-react"
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

export default function HomePage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative h-[90vh] overflow-hidden">
        <Image src="/placeholder.svg?height=1080&width=1920" alt="Hero image" fill className="object-cover" priority />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/30 flex items-center">
          <div className="container px-4 md:px-6">
            <motion.div className="max-w-2xl space-y-4" initial="hidden" animate="visible" variants={staggerContainer}>
              <motion.div variants={fadeIn}>
                <Badge className="bg-primary text-primary-foreground px-3 py-1 text-sm">Hub foto-video creativ</Badge>
              </motion.div>
              <motion.h1
                className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl text-white"
                variants={fadeIn}
              >
                Surprindem momentele{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500">
                  vibrante
                </span>{" "}
                necesare
              </motion.h1>
              <motion.p className="text-muted-100 md:text-xl text-white/80" variants={fadeIn}>
                Suntem partenerii tăi vizuali în orice domeniu!
              </motion.p>
              <motion.div className="flex flex-col sm:flex-row gap-3" variants={fadeIn}>
                <Button size="lg" asChild className="group">
                  <Link href="/gallery">
                    Vezi galeria
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="bg-white/10 text-white border-white/20 hover:bg-white/20"
                  asChild
                >
                  <Link href="/contact">Programează o ședință</Link>
                </Button>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Featured Work */}
      <section className="py-12 md:py-24 bg-muted">
        <div className="container px-4 md:px-6">
          <motion.div
            className="flex flex-col items-center justify-center space-y-4 text-center"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeIn}
          >
            <div className="space-y-2">
              <Badge variant="outline" className="border-primary text-primary">
                Lucrări reprezentative
              </Badge>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Explorează lucrările noastre!
              </h2>
              <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                O selecție a celor mai bune materiale vizuale din diverse genuri și stiluri.
              </p>
            </div>
          </motion.div>
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            {[
              {
                title: "Portrete",
                image: "/placeholder.svg?height=600&width=400",
                color: "from-pink-500 to-rose-500",
              },
              {
                title: "Peisaje",
                image: "/placeholder.svg?height=600&width=400",
                color: "from-blue-500 to-cyan-500",
              },
              {
                title: "Nunți",
                image: "/placeholder.svg?height=600&width=400",
                color: "from-amber-500 to-yellow-500",
              },
              {
                title: "Stradă",
                image: "/placeholder.svg?height=600&width=400",
                color: "from-green-500 to-emerald-500",
              },
              {
                title: "Natură",
                image: "/placeholder.svg?height=600&width=400",
                color: "from-purple-500 to-violet-500",
              },
              {
                title: "Arhitectură",
                image: "/placeholder.svg?height=600&width=400",
                color: "from-red-500 to-orange-500",
              },
            ].map((category, index) => (
              <motion.div key={index} variants={fadeIn}>
                <Link href="/gallery" className="group relative overflow-hidden rounded-lg block h-80">
                  <Image
                    src={category.image || "/placeholder.svg"}
                    alt={category.title}
                    fill
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div
                    className={`absolute inset-0 bg-gradient-to-t ${category.color} opacity-60 group-hover:opacity-70 transition-opacity`}
                  ></div>
                  <div className="absolute inset-0 flex items-end p-6">
                    <div className="transform transition-transform duration-300 group-hover:translate-y-[-10px]">
                      <h3 className="text-xl font-bold text-white">{category.title}</h3>
                      <p className="text-white/80 mt-1 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        Vezi colecția
                      </p>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </motion.div>
          <motion.div
            className="flex justify-center mt-12"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
          >
            <Button asChild>
              <Link href="/gallery" className="flex items-center gap-2 group">
                Vezi toate lucrările!
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Services */}
      <section className="py-12 md:py-24">
        <div className="container px-4 md:px-6">
          <motion.div
            className="flex flex-col items-center justify-center space-y-4 text-center"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
          >
            <div className="space-y-2">
              <Badge variant="outline" className="border-primary text-primary">
                Servicii
              </Badge>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Specialitatea casei!</h2>
              <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                Servicii profesionale pentru fotografia și videografia de nuntă.
              </p>
            </div>
          </motion.div>
          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            {[
              {
                title: "Fotograf de nuntă",
                description: "Surprinde ziua ta specială cu fotografii emoționante și memorabile.",
                icon: Heart,
                color: "bg-pink-100 text-pink-700 dark:bg-pink-950 dark:text-pink-300",
              },
              {
                title: "Sesiune foto în studio",
                description: "Portrete profesionale care îți evidențiază personalitatea și stilul.",
                icon: Camera,
                color: "bg-blue-100 text-blue-700 dark:bg-blue-950 dark:text-blue-300",
              },
              {
                title: "Acoperire eveniment",
                description: "Acoperire completă pentru toate evenimentele și ocaziile speciale.",
                icon: Clock,
                color: "bg-amber-100 text-amber-700 dark:bg-amber-950 dark:text-amber-300",
              },
            ].map((service, index) => (
              <motion.div key={index} variants={fadeIn}>
                <Card className="border-none shadow-lg h-full transition-transform hover:scale-105">
                  <CardContent className="p-6 flex flex-col h-full">
                    <div className={`w-12 h-12 rounded-full ${service.color} flex items-center justify-center mb-4`}>
                      <service.icon className="h-6 w-6" />
                    </div>
                    <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                    <p className="text-muted-foreground mb-4 flex-grow">{service.description}</p>
                    <Link
                      href="/contact"
                      className="text-primary font-medium hover:underline inline-flex items-center group"
                    >
                      Află mai multe
                      <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Link>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-12 md:py-24 bg-muted">
        <div className="container px-4 md:px-6">
          <motion.div
            className="flex flex-col items-center justify-center space-y-4 text-center"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
          >
            <div className="space-y-2">
              <Badge variant="outline" className="border-primary text-primary">
                Testimoniale
              </Badge>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Ce spun clienții</h2>
              <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                Ascultă părerile celor care au experimentat serviciile noastre.
              </p>
            </div>
          </motion.div>
          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            {[
              {
                name: "Madalina Patrasescu",
                role: "Mamă",
                quote:
                  "Am avut onoarea să colaborăm din nou cu Andrei la botezul fiului nostru și nu putem exprima în cuvinte cât de încântați suntem de rezultatul final! Andrei este un adevărat maestru al artei fotografice, un profesionist desăvârșit...",
              },
              {
                name: "Eliza Retevoescu",
                role: "Mamă",
                quote: "Andrei ne-a surprins atat de frumos minunatul eveniment 🎀 avem atat de multe instantanee care au prins momente autentice si pe care le vom aprecia toata viata ❤️",
              },
              {
                name: "Dinca Alexandra",
                role: "Mireasă",
                quote: "O echipa foarte profesionista! Am colaborat cu ei si suntem incantati de rezultate. Foarte implicati si receptivi la dorintele noastre. Recomand cu drag! Multumim pentru tot!",
              },
              {
                name: "Laura-Elena Dorneanu",
                role: "Mireasă",
                quote: "Din toată inima vă recomandăm să îi alegeți. Sunt o echipa care isi da toată silința pentru a va pune in valoare. Consider ca există o înțelegere excelenta intre dumnealor si de aceea comunica perfect cu mirii. Cu drag ne-am dori sa colaboram cu ei oricând vom avea nevoie!🥰🥰🥰",
              },
              {
                name: "Iulia Vrînceanu",
                role: "Mireasă",
                quote: "Am fost foarte multumiti de echipa Rain Visuals! Pe langa calitatea serviciilor, un alt aspect important este cooperarea dintre clineti si furnizori pentru care nu am avut nimic de reprosat! Profesionalism la cel mai inalt nivel!",
              },
              {
                name: "Victoria Baltag",
                role: "Regizor",
                quote: "Un fotograf talentat, uman, inspirat, cald și o companie agreabila!!!",
              }
            ].map((testimonial, index) => (
              <motion.div key={index} variants={fadeIn}>
                <Card className="border-none shadow-lg h-full">
                  <CardContent className="p-6 flex flex-col h-full">
                    <div className="flex items-center gap-1 mb-4">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                    <p className="text-muted-foreground mb-4 italic flex-grow">"{testimonial.quote}"</p>
                    <div className="flex items-center gap-3">
                      <div className="h-10 w-10 rounded-full bg-gradient-to-br from-pink-500 to-purple-500 flex items-center justify-center text-white font-bold">
                        {testimonial.name.charAt(0)}
                      </div>
                      <div>
                        <p className="font-medium">{testimonial.name}</p>
                        <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 md:py-24 bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 text-white">
        <div className="container px-4 md:px-6">
          <motion.div
            className="flex flex-col items-center text-center space-y-4"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
          >
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Ești gata să surprinzi povestea ta?
            </h2>
            <p className="mx-auto max-w-[700px] md:text-xl text-white/80">
              Hai să creăm împreună. Programează o sesiune astăzi.
            </p>
            <Button size="lg" variant="secondary" asChild className="group">
              <Link href="/contact" className="flex items-center gap-2">
                Contactează-ne
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Recent Blog Posts */}
      <section className="py-12 md:py-24">
        <div className="container px-4 md:px-6">
          <motion.div
            className="flex flex-col items-center justify-center space-y-4 text-center"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
          >
            <div className="space-y-2">
              <Badge variant="outline" className="border-primary text-primary">
                Din blog
              </Badge>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Articole recente</h2>
              <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                Sfaturi de fotografii, povești din culise și multe altele.
              </p>
            </div>
          </motion.div>
          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            {[
              {
                title: "10 sfaturi pentru o fotografie de portret mai bună",
                excerpt: "Învață cum să surprinzi portrete uimitoare!",
                date: "15 Mar 2023",
                image: "/placeholder.svg?height=400&width=600",
              },
              {
                title: "Cel mai bun echipament foto pentru nuntă",
                excerpt: "Un ghid complet pentru alegerea optimă a unui setup profesional.",
                date: "28 Feb 2023",
                image: "/placeholder.svg?height=400&width=600",
              },
              {
                title: "Cum să editezi fotografiile folosind AI",
                excerpt: "Stăpânește arta editării fiind în pas cu tehnilogiile.",
                date: "12 Ian 2023",
                image: "/placeholder.svg?height=400&width=600",
              },
            ].map((post, index) => (
              <motion.div key={index} variants={fadeIn}>
                <Card className="overflow-hidden border-none shadow-lg h-full group">
                  <div className="relative h-48 overflow-hidden">
                    <Image
                      src={post.image || "/placeholder.svg"}
                      alt={post.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                  </div>
                  <CardContent className="p-6 flex flex-col h-[calc(100%-12rem)]">
                    <p className="text-sm text-muted-foreground mb-2">{post.date}</p>
                    <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">{post.title}</h3>
                    <p className="text-muted-foreground mb-4 flex-grow">{post.excerpt}</p>
                    <Link
                      href="/blog"
                      className="text-primary font-medium hover:underline inline-flex items-center group"
                    >
                      Citește mai mult
                      <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Link>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
          <motion.div
            className="flex justify-center mt-12"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
          >
            <Button variant="outline" asChild className="group">
              <Link href="/blog" className="flex items-center gap-2">
                Vezi toate articolele
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

