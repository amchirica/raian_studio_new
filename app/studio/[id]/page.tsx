"use client"

import { useState, useEffect } from "react"
import { useParams } from "next/navigation"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ArrowLeft, Check, Calendar, Clock, MapPin, Phone, Camera } from "lucide-react"

export default function StudioDetailPage() {
  const params = useParams()
  const { id } = params
  const [isLoading, setIsLoading] = useState(true)

  // In a real app, this would fetch from an API
  const studioSpace = {
    id: Number(id),
    name: "Studio Principal",
    description:
      "Un spațiu de 120 mp cu tavan înalt, perfect pentru ședințe foto de modă, portrete și Fotografii comercială.",
    fullDescription: `
      <p>Studioul nostru principal este un spațiu generos de 120 mp, cu o înălțime a tavanului de 4 metri, oferind flexibilitate maximă pentru o gamă largă de proiecte fotografice și video.</p>
      
      <p>Designul modern și minimalist al studioului permite personalizarea completă a spațiului în funcție de nevoile fiecărui proiect. Pereții albi și podeaua epoxidică gri deschis oferă o bază neutră, ideală pentru orice tip de ședință foto.</p>
      
      <h2>Caracteristici principale:</h2>
      <ul>
        <li>Suprafață de 120 mp cu tavan înalt de 4 metri</li>
        <li>Sistem de iluminare profesional Profoto</li>
        <li>Multiple fundaluri de hârtie și textile</li>
        <li>Zonă dedicată pentru machiaj și styling</li>
        <li>Garderobă spațioasă pentru organizarea ținutelor</li>
        <li>Sistem de climatizare performant</li>
        <li>Acces la internet de mare viteză</li>
        <li>Zonă de relaxare pentru clienți</li>
      </ul>
      
      <p>Studioul este ideal pentru:</p>
      <ul>
        <li>Ședințe foto de modă și portrete</li>
        <li>Fotografii comercială și de produs</li>
        <li>Videoclipuri muzicale și reclame</li>
        <li>Ședințe foto de familie și copii</li>
      </ul>
      
      <p>Echipamentul disponibil în studio include:</p>
      <ul>
        <li>Lumini Profoto B10, D1 și generatoare Pro-10</li>
        <li>Diverse modificatoare de lumină (softbox-uri, umbrele, beauty dish-uri)</li>
        <li>Fundaluri de hârtie în multiple culori</li>
        <li>Fundaluri textile și props diverse</li>
      </ul>
    `,
    images: [
      "/placeholder.svg?height=800&width=1200&text=Studio1",
      "/placeholder.svg?height=800&width=1200&text=Studio2",
      "/placeholder.svg?height=800&width=1200&text=Studio3",
      "/placeholder.svg?height=800&width=1200&text=Studio4",
    ],
    features: [
      "Sistem de iluminare profesional",
      "Fundaluri multiple",
      "Zonă de machiaj",
      "Garderobă",
      "Climatizare",
      "Internet de mare viteză",
      "Zonă de relaxare",
      "Acces facil",
    ],
    pricing: {
      hourly: "150 RON/oră",
      halfDay: "500 RON (4 ore)",
      fullDay: "900 RON (8 ore)",
    },
    equipment: [
      { name: "Lumini Profoto B10", quantity: 4 },
      { name: "Lumini Profoto D1", quantity: 2 },
      { name: "Generator Profoto Pro-10", quantity: 1 },
      { name: "Softbox-uri diverse", quantity: 6 },
      { name: "Beauty dish", quantity: 2 },
      { name: "Fundaluri de hârtie", quantity: 8 },
    ],
    availability: [
      { date: "Luni - Vineri", hours: "10:00 - 21:00" },
      { date: "Sâmbătă", hours: "10:00 - 18:00" },
      { date: "Duminică", hours: "Închis (disponibil la cerere)" },
    ],
    location: {
      address: "Str. Exemplu 123, București",
      coordinates: { lat: 44.4268, lng: 26.1025 },
      parking: "Parcare gratuită disponibilă",
      access: "Acces facil cu transportul public, stație de metrou la 5 minute",
    },
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
          <Link href="/studio">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Înapoi la Studio
          </Link>
        </Button>

        <Badge className="mb-4">Studio Profesional</Badge>
        <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-4">{studioSpace.name}</h1>
        <p className="text-xl text-muted-foreground">{studioSpace.description}</p>
      </div>

      {/* Image Gallery */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-12">
        <div className="relative aspect-[4/3] w-full overflow-hidden rounded-lg">
          <Image
            src={studioSpace.images[0] || "/placeholder.svg"}
            alt={`${studioSpace.name} - Imagine principală`}
            fill
            className="object-cover"
          />
        </div>
        <div className="grid grid-cols-2 gap-4">
          {studioSpace.images.slice(1, 4).map((image, index) => (
            <div key={index} className="relative aspect-square w-full overflow-hidden rounded-lg">
              <Image
                src={image || "/placeholder.svg"}
                alt={`${studioSpace.name} - Imagine ${index + 2}`}
                fill
                className="object-cover"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Tabs */}
      <Tabs defaultValue="details" className="mb-12">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="details">Detalii</TabsTrigger>
          <TabsTrigger value="equipment">Echipament</TabsTrigger>
          <TabsTrigger value="pricing">Prețuri</TabsTrigger>
          <TabsTrigger value="location">Locație</TabsTrigger>
        </TabsList>

        <TabsContent value="details" className="mt-6">
          <Card>
            <CardContent className="p-6">
              <div
                className="prose prose-lg max-w-none dark:prose-invert"
                dangerouslySetInnerHTML={{ __html: studioSpace.fullDescription }}
              />

              <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-lg font-bold mb-4">Facilități</h3>
                  <ul className="space-y-2">
                    {studioSpace.features.map((feature, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <Check className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg font-bold mb-4">Program</h3>
                  <ul className="space-y-2">
                    {studioSpace.availability.map((slot, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <Calendar className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                        <div>
                          <span className="font-medium">{slot.date}:</span>
                          <span className="ml-2">{slot.hours}</span>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="equipment" className="mt-6">
          <Card>
            <CardContent className="p-6">
              <h3 className="text-xl font-bold mb-6">Echipament Disponibil</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {studioSpace.equipment.map((item, index) => (
                  <div key={index} className="flex items-center gap-4 p-4 border rounded-lg">
                    <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                      <Camera className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="font-medium">{item.name}</p>
                      <p className="text-sm text-muted-foreground">Cantitate: {item.quantity}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-8">
                <p className="text-muted-foreground">
                  Notă: Echipamentul este inclus în prețul închirierii studioului. Pentru echipamente suplimentare, vă
                  rugăm să ne contactați.
                </p>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="pricing" className="mt-6">
          <Card>
            <CardContent className="p-6">
              <h3 className="text-xl font-bold mb-6">Prețuri</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <Card>
                  <CardContent className="p-6 text-center">
                    <Clock className="h-10 w-10 mx-auto mb-4 text-primary" />
                    <h4 className="text-lg font-bold mb-2">Tarif Orar</h4>
                    <p className="text-2xl font-bold">{studioSpace.pricing.hourly}</p>
                    <p className="text-sm text-muted-foreground mt-2">Minim 2 ore</p>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6 text-center">
                    <Clock className="h-10 w-10 mx-auto mb-4 text-primary" />
                    <h4 className="text-lg font-bold mb-2">Jumătate de Zi</h4>
                    <p className="text-2xl font-bold">{studioSpace.pricing.halfDay}</p>
                    <p className="text-sm text-muted-foreground mt-2">4 ore consecutive</p>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6 text-center">
                    <Clock className="h-10 w-10 mx-auto mb-4 text-primary" />
                    <h4 className="text-lg font-bold mb-2">Zi Întreagă</h4>
                    <p className="text-2xl font-bold">{studioSpace.pricing.fullDay}</p>
                    <p className="text-sm text-muted-foreground mt-2">8 ore consecutive</p>
                  </CardContent>
                </Card>
              </div>

              <div className="mt-8">
                <h4 className="font-bold mb-2">Informații suplimentare:</h4>
                <ul className="list-disc pl-5 space-y-1 text-muted-foreground">
                  <li>Prețurile includ accesul la toate facilitățile studioului și echipamentul de bază.</li>
                  <li>Pentru rezervări în weekend se aplică un tarif suplimentar de 20%.</li>
                  <li>Studenții beneficiază de o reducere de 15% (cu prezentarea legitimației).</li>
                  <li>Pentru proiecte mai mari sau colaborări pe termen lung, oferim tarife personalizate.</li>
                </ul>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="location" className="mt-6">
          <Card>
            <CardContent className="p-6">
              <h3 className="text-xl font-bold mb-6">Locație</h3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <MapPin className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                      <div>
                        <p className="font-medium">Adresă:</p>
                        <p className="text-muted-foreground">{studioSpace.location.address}</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="text-primary shrink-0 mt-0.5"
                      >
                        <rect x="2" y="4" width="20" height="16" rx="2" />
                        <path d="M6 8h.01" />
                        <path d="M2 12h20" />
                      </svg>
                      <div>
                        <p className="font-medium">Parcare:</p>
                        <p className="text-muted-foreground">{studioSpace.location.parking}</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="text-primary shrink-0 mt-0.5"
                      >
                        <circle cx="12" cy="12" r="10" />
                        <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20" />
                        <path d="M2 12h20" />
                      </svg>
                      <div>
                        <p className="font-medium">Acces:</p>
                        <p className="text-muted-foreground">{studioSpace.location.access}</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <Phone className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                      <div>
                        <p className="font-medium">Contact:</p>
                        <p className="text-muted-foreground">+40 712 345 678</p>
                        <p className="text-muted-foreground">studio@prism-photo.com</p>
                      </div>
                    </div>
                  </div>

                  <div className="mt-8">
                    <Button size="lg" asChild className="w-full md:w-auto">
                      <Link href="/contact">Rezervă Acum</Link>
                    </Button>
                  </div>
                </div>

                <div className="relative aspect-square w-full overflow-hidden rounded-lg">
                  {/* In a real app, this would be a Google Maps embed */}
                  <div className="flex h-full w-full items-center justify-center bg-muted">
                    <p className="text-center text-muted-foreground">
                      Hartă Google Maps - În mod normal, aici ar fi încorporată o hartă reală
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>

      {/* Booking CTA */}
      <div className="bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 text-white rounded-xl p-8 text-center">
        <h2 className="text-2xl font-bold mb-4">Gata să rezervi studioul?</h2>
        <p className="max-w-2xl mx-auto mb-6">
          Contactează-ne pentru a verifica disponibilitatea și a rezerva studioul pentru proiectul tău. Oferim asistență
          completă pentru a te asigura că sesiunea ta foto va fi un succes.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" variant="secondary" asChild>
            <Link href="/contact">Rezervă Acum</Link>
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="bg-white/10 text-white border-white/20 hover:bg-white/20"
            asChild
          >
            <Link href="/offers">Vezi Toate Pachetele</Link>
          </Button>
        </div>
      </div>
    </div>
  )
}

