"use client"

import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ArrowRight, Camera, Check, MapPin, Phone } from "lucide-react"
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

export default function StudioPage() {
  // Studio equipment
  const equipment = [
    {
      category: "Camere",
      items: [
        { name: "Sony Alpha A7 IV", description: "Cameră full-frame de 33MP" },
        { name: "Canon EOS R5", description: "Cameră full-frame de 45MP" },
        { name: "Nikon Z9", description: "Cameră flagship de 45.7MP" },
      ],
    },
    {
      category: "Obiective",
      items: [
        { name: "Sony 24-70mm f/2.8 GM", description: "Obiectiv zoom standard" },
        { name: "Canon RF 50mm f/1.2L USM", description: "Obiectiv prime pentru portrete" },
        { name: "Nikon Z 14-24mm f/2.8 S", description: "Obiectiv ultra-wide pentru peisaje" },
      ],
    },
    {
      category: "Iluminare",
      items: [
        { name: "Profoto B10 Plus", description: "Bliț de studio portabil" },
        { name: "Godox AD600Pro", description: "Bliț de studio puternic" },
        { name: "Aputure 120d II", description: "Lumină LED continuă" },
      ],
    },
    {
      category: "Accesorii",
      items: [
        { name: "DJI Ronin-S", description: "Stabilizator pentru cameră" },
        { name: "Manfrotto 055XPRO3", description: "Trepied profesional" },
        { name: "Blackmagic ATEM Mini Pro", description: "Switcher video" },
      ],
    },
  ]

  // Studio spaces
  const spaces = [
    {
      name: "Studio Principal",
      description:
        "Un spațiu de 120 mp cu tavan înalt, perfect pentru ședințe foto de modă, portrete și Fotografii comercială.",
      image: "/placeholder.svg?height=600&width=800",
      features: ["Sistem de iluminare profesional", "Fundaluri multiple", "Zonă de machiaj", "Garderobă"],
    },
    {
      name: "Studio Cyclorama",
      description: "Un studio cu cyclorama albă de 80 mp, ideal pentru Fotografii de produs și videoclipuri.",
      image: "/placeholder.svg?height=600&width=800",
      features: ["Cyclorama albă", "Sistem de șine pentru lumini", "Control complet al luminii", "Podea epoxidică"],
    },
    {
      name: "Studio Lifestyle",
      description:
        "Un spațiu de 60 mp amenajat ca un apartament modern, perfect pentru ședințe foto lifestyle și de familie.",
      image: "/placeholder.svg?height=600&width=800",
      features: ["Mobilier modern", "Bucătărie funcțională", "Lumină naturală", "Decor versatil"],
    },
  ]

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative h-[50vh] overflow-hidden">
        <Image src="/placeholder.svg?height=800&width=1920" alt="Studio hero" fill className="object-cover" priority />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/30 flex items-center">
          <div className="container px-4 md:px-6">
            <div className="max-w-2xl space-y-4">
              <Badge className="bg-primary text-primary-foreground px-3 py-1 text-sm">Studio Profesional</Badge>
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-white">
                Studioul Nostru de Fotografii
              </h1>
              <p className="text-muted-100 md:text-xl text-white/80">
                Un spațiu creativ complet echipat pentru toate nevoile tale fotografice.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 pt-2">
                <Button size="lg" asChild className="group">
                  <Link href="#spaces">
                    Explorează Studioul
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="bg-white/10 text-white border-white/20 hover:bg-white/20"
                  asChild
                >
                  <Link href="/contact">Rezervă Studioul</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Studio Overview */}
      <section className="py-12 md:py-24">
        <div className="container px-4 md:px-6">
          <motion.div
            className="grid md:grid-cols-2 gap-12 items-center"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            <motion.div variants={fadeIn} className="space-y-6">
              <Badge variant="outline" className="border-primary text-primary">
                Despre Studioul Nostru
              </Badge>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Un Spațiu Creativ de Top</h2>
              <p className="text-muted-foreground">
                Studioul nostru de Fotografii, situat în inima orașului, oferă un spațiu creativ de 300 mp, complet
                echipat cu cele mai noi tehnologii și echipamente profesionale. Creat pentru a satisface nevoile
                fotografilor, videografilor și creatorilor de conținut, studioul nostru combină funcționalitatea cu
                estetica pentru a oferi un mediu inspirațional.
              </p>
              <p className="text-muted-foreground">
                Cu multiple zone de Fotografiire, inclusiv un studio principal, un studio cu cyclorama și un spațiu
                lifestyle, putem acomoda o varietate de proiecte, de la ședințe foto de modă și portrete, până la
                Fotografii de produs și videoclipuri comerciale.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 pt-2">
                <div className="flex items-center gap-2">
                  <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                    <Camera className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="font-medium">Echipament Profesional</p>
                    <p className="text-sm text-muted-foreground">Camere și obiective de top</p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                    <MapPin className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="font-medium">Locație Centrală</p>
                    <p className="text-sm text-muted-foreground">Ușor accesibil</p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                    <Phone className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="font-medium">Asistență Tehnică</p>
                    <p className="text-sm text-muted-foreground">Suport pe tot parcursul</p>
                  </div>
                </div>
              </div>
            </motion.div>
            <motion.div variants={fadeIn} className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="overflow-hidden rounded-lg">
                  <Image
                    src="/placeholder.svg?height=600&width=400"
                    alt="Studio image 1"
                    width={400}
                    height={600}
                    className="w-full h-auto object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="overflow-hidden rounded-lg">
                  <Image
                    src="/placeholder.svg?height=400&width=400"
                    alt="Studio image 2"
                    width={400}
                    height={400}
                    className="w-full h-auto object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
              </div>
              <div className="space-y-4 pt-8">
                <div className="overflow-hidden rounded-lg">
                  <Image
                    src="/placeholder.svg?height=400&width=400"
                    alt="Studio image 3"
                    width={400}
                    alt="Studio image 3"
                    width={400}
                    height={400}
                    className="w-full h-auto object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="overflow-hidden rounded-lg">
                  <Image
                    src="/placeholder.svg?height=600&width=400"
                    alt="Studio image 4"
                    width={400}
                    height={600}
                    className="w-full h-auto object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Studio Spaces */}
      <section id="spaces" className="py-12 md:py-24 bg-muted">
        <div className="container px-4 md:px-6">
          <motion.div
            className="flex flex-col items-center justify-center space-y-4 text-center mb-12"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
          >
            <Badge variant="outline" className="border-primary text-primary">
              Spații de Studio
            </Badge>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Spații Versatile pentru Orice Proiect</h2>
            <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
              Studioul nostru oferă multiple spații configurabile pentru a se adapta perfect nevoilor tale creative.
            </p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-6"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            {spaces.map((space, index) => (
              <motion.div key={index} variants={fadeIn}>
                <Card className="overflow-hidden border-none shadow-lg h-full hover:shadow-xl transition-shadow duration-300">
                  <div className="relative aspect-[4/3] w-full overflow-hidden">
                    <Image
                      src={space.image || "/placeholder.svg"}
                      alt={space.name}
                      fill
                      className="object-cover transition-transform duration-500 hover:scale-105"
                    />
                  </div>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold mb-2">{space.name}</h3>
                    <p className="text-muted-foreground mb-4">{space.description}</p>
                    <div className="space-y-2">
                      {space.features.map((feature, i) => (
                        <div key={i} className="flex items-start gap-2">
                          <Check className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Equipment */}
      <section className="py-12 md:py-24">
        <div className="container px-4 md:px-6">
          <motion.div
            className="flex flex-col items-center justify-center space-y-4 text-center mb-12"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
          >
            <Badge variant="outline" className="border-primary text-primary">
              Echipament
            </Badge>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Echipament Profesional</h2>
            <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
              Studioul nostru este echipat cu cele mai noi și performante echipamente fotografice și video.
            </p>
          </motion.div>

          <Tabs defaultValue="Camere" className="w-full">
            <div className="flex justify-center mb-8">
              <TabsList className="grid grid-flow-col auto-cols-max gap-2 overflow-x-auto p-1">
                {equipment.map((category) => (
                  <TabsTrigger
                    key={category.category}
                    value={category.category}
                    className="px-4 py-2 rounded-full data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
                  >
                    {category.category}
                  </TabsTrigger>
                ))}
              </TabsList>
            </div>

            {equipment.map((category) => (
              <TabsContent key={category.category} value={category.category} className="mt-6">
                <motion.div
                  className="grid grid-cols-1 md:grid-cols-3 gap-6"
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={staggerContainer}
                >
                  {category.items.map((item, index) => (
                    <motion.div key={index} variants={fadeIn}>
                      <Card className="h-full">
                        <CardContent className="p-6 flex flex-col h-full">
                          <h3 className="text-lg font-bold mb-2">{item.name}</h3>
                          <p className="text-muted-foreground">{item.description}</p>
                        </CardContent>
                      </Card>
                    </motion.div>
                  ))}
                </motion.div>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </section>

      {/* Booking CTA */}
      <section className="py-12 md:py-24 bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 text-white">
        <div className="container px-4 md:px-6">
          <motion.div
            className="flex flex-col items-center text-center space-y-4"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
          >
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Gata să Rezervi Studioul?</h2>
            <p className="mx-auto max-w-[700px] md:text-xl text-white/80">
              Contactează-ne pentru a verifica disponibilitatea și a rezerva studioul pentru proiectul tău.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button size="lg" variant="secondary" asChild className="group">
                <Link href="/contact">
                  Rezervă Acum
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="bg-white/10 text-white border-white/20 hover:bg-white/20"
                asChild
              >
                <Link href="/offers">Vezi Prețurile</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

