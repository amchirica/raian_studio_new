"use client"

import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight, Check, Printer, ImageIcon, Package } from "lucide-react"
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

export default function PrintPage() {

  




  // Print services
  const services = [
    {
      title: "Printuri Standard",
      description: "Printuri de înaltă calitate pe hârtie fotografică premium",
      icon: ImageIcon,
      features: [
        "Dimensiuni de la 10x15 cm până la 30x45 cm",
        "Hârtie fotografică premium",
        "Finisaj lucios sau mat",
        "Culori vibrante și detalii clare",
      ],
      price: "de la 20 RON",
    },
    {
      title: "Printuri Fine Art",
      description: "Printuri artistice pe hârtie texturată de calitate supeioară",
      icon: Printer,
      features: [
        "Dimensiuni de la 20x30 cm până la 60x90 cm",
        "Hârtie texturată de calitate muzeală",
        "Durabilitate ridicată",
        "Reproducere exactă a culorilor",
      ],
      price: "de la 180 RON",
    },
    {
      title: "Albume foto",
      description: "Albume personalizate cu design profesional și materiale premium",
      icon: Package,
      features: [
        "Formate de la 25x25 cm până la 30x30 cm",
        "Coperți personalizabile din piele sau material textil",
        "Pagini groase, rezistente la îndoire",
        "Design profesional inclus",
      ],
      price: "de la 450 RON",
    },
  ]

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative h-[50vh] overflow-hidden">
        <Image
          src="/placeholder.svg?height=800&width=1920"
          alt="Print services hero"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/30 flex items-center">
          <div className="container px-4 md:px-6">
            <div className="max-w-2xl space-y-4">
              <Badge className="bg-primary text-primary-foreground px-3 py-1 text-sm">Servicii de print</Badge>
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-white">
                Transformă imaginile digitale în fotografii
              </h1>
              <p className="text-muted-100 md:text-xl text-white/80">
                Servicii profesionale de print pentru fotografiile tale, de la printuri standard la albume
                personalizate.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 pt-2">
                <Button size="lg" asChild className="group">
                  <Link href="#services">
                    Explorează Serviciile
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="bg-white/10 text-white border-white/20 hover:bg-white/20"
                  asChild
                >
                  <Link href="/contact">Solicită o ofertă</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-12 md:py-24">
        <div className="container px-4 md:px-6">
          <motion.div
            className="flex flex-col items-center justify-center space-y-4 text-center mb-12"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
          >
            <Badge variant="outline" className="border-primary text-primary">
              Print
            </Badge>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Servicii de noastre</h2>
            <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
              Oferim o gamă variată de servicii de print pentru fotografiile digitale.
            </p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-6"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            {services.map((service, index) => (
              <motion.div key={index} variants={fadeIn}>
                <Card className="h-full hover:shadow-lg transition-shadow duration-300">
                  <CardContent className="p-6 flex flex-col h-full">
                    <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center text-primary mb-4">
                      <service.icon className="h-6 w-6" />
                    </div>
                    <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                    <p className="text-muted-foreground mb-4">{service.description}</p>
                    <div className="space-y-2 mb-6 flex-1">
                      {service.features.map((feature, i) => (
                        <div key={i} className="flex items-start gap-2">
                          <Check className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>
                    <div className="mt-auto">
                      <p className="font-bold text-lg">{service.price}</p>
                      <Button className="w-full mt-4" asChild>
                        <Link href="/contact">Contact</Link>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-12 md:py-24 bg-muted">
        <div className="container px-4 md:px-6">
          <motion.div
            className="flex flex-col items-center justify-center space-y-4 text-center mb-12"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
          >
            <Badge variant="outline" className="border-primary text-primary">
              Procesul nostru
            </Badge>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Cum funcționează?</h2>
            <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
              Procesul nostru simplu și eficient pentru a obține printuri de calitate.
            </p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-4 gap-6"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            {[
              {
                step: "01",
                title: "Încarcă sau trimite-ne fotografiile",
                description: "Încarcă fotografiile tale prin formularul nostru online sau trimite-le prin email.",
              },
              {
                step: "02",
                title: "Precizează serviciul",
                description: "Selectează tipul de print, dimensiunea și finisajul dorit.",
              },
              {
                step: "03",
                title: "Confirmare și plată",
                description: "Verifică comanda și efectueză plata înainte de procesare.",
              },
              {
                step: "04",
                title: "Livrare",
                description: "Te așteptăm în studio pentru ridicarea comenzii",
              },
            ].map((item, index) => (
              <motion.div key={index} variants={fadeIn} className="text-center">
                <div className="h-16 w-16 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-xl font-bold mx-auto mb-4">
                  {item.step}
                </div>
                <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                <p className="text-muted-foreground">{item.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
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
              
            </h2>
            <p className="mx-auto max-w-[700px] md:text-xl text-white/80">
              
              
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button size="lg" variant="secondary" asChild className="group">
                <Link href="/contact">
                  Contactează-ne pentru mai multe infromații!
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="bg-white/10 text-white border-white/20 hover:bg-white/20"
                asChild
              >
                <Link href="/gallery">Vezi Galeria</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

