"use client"

import { useState, useEffect } from "react"
import { useParams } from "next/navigation"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowLeft, Check } from "lucide-react"

export default function OfferDetailPage() {
  const params = useParams()
  const { id } = params
  const [isLoading, setIsLoading] = useState(true)

  // In a real app, this would fetch from an API
  const offer = {
    id: Number(id),
    name: "Pachet Premium",
    price: "3.500",
    description: "Ideal pentru nunți și evenimente importante",
    fullDescription: `
      <p>Pachetul Premium este alegerea perfectă pentru cuplurile care doresc să imortalizeze fiecare moment important al nunții lor sau pentru organizatorii de evenimente care vor să asigure o acoperire completă a evenimentului.</p>
      
      <p>Cu o echipă de doi fotografi profesioniști, vă garantăm că niciun moment important nu va fi ratat. Abordarea noastră combină fotografia documentară cu portrete artistice, oferindu-vă o colecție completă de imagini care spun povestea evenimentului dumneavoastră.</p>
      
      <h2>Ce include pachetul Premium:</h2>
      <ul>
        <li>10 ore de Fotografiire continuă</li>
        <li>Doi fotografi profesioniști</li>
        <li>Minim 400 de fotografii editate profesional</li>
        <li>Album foto premium de 30x30cm cu 20 de pagini</li>
        <li>Fotografii online privată pentru partajarea ușoară cu invitații</li>
        <li>Livrare în maxim 10 zile lucrătoare</li>
        <li>Stick USB cu toate fotografiile în format digital</li>
        <li>Sesiune foto de cuplu pre-eveniment (1 oră)</li>
      </ul>
      
      <h2>Procesul nostru de lucru:</h2>
      <ol>
        <li>Consultare inițială pentru a înțelege viziunea și așteptările dumneavoastră</li>
        <li>Planificarea detaliată a programului de Fotografiire</li>
        <li>Sesiune foto pre-eveniment pentru a vă obișnui cu fotografii</li>
        <li>Acoperirea completă a evenimentului cu doi fotografi</li>
        <li>Selecția și editarea profesională a fotografiilor</li>
        <li>Livrarea Fotografiii online în 5 zile lucrătoare</li>
        <li>Livrarea albumului foto și a stick-ului USB în maxim 10 zile lucrătoare</li>
      </ol>
      
      <p>Pachetul poate fi personalizat în funcție de nevoile specifice ale evenimentului dumneavoastră. Pentru opțiuni suplimentare sau modificări, vă rugăm să ne contactați.</p>
    `,
    images: [
      "/placeholder.svg?height=800&width=1200&text=Premium1",
      "/placeholder.svg?height=800&width=1200&text=Premium2",
      "/placeholder.svg?height=800&width=1200&text=Premium3",
      "/placeholder.svg?height=800&width=1200&text=Premium4",
    ],
    features: [
      "10 ore de Fotografiire",
      "2 fotografi",
      "400 fotografii editate",
      "Album foto 30x30cm (20 pagini)",
      "Fotografii online privată",
      "Livrare în 10 zile",
      "Stick USB cu toate fotografiile",
      "Sesiune foto pre-eveniment",
    ],
    popular: true,
    additionalOptions: [
      { name: "Ore suplimentare", price: "250 RON/oră" },
      { name: "Videograf", price: "1.500 RON" },
      { name: "Album foto suplimentar", price: "500 RON" },
      { name: "Fotografii printate (set de 10)", price: "200 RON" },
    ],
    testimonials: [
      {
        name: "Maria & Andrei",
        event: "Nuntă, Iulie 2023",
        text: "Alegerea pachetului Premium a fost una dintre cele mai bune decizii pentru nunta noastră. Fotografiile sunt absolut superbe și au surprins perfect atmosfera și emoțiile zilei. Recomandăm cu încredere!",
        avatar: "/placeholder.svg?height=100&width=100",
      },
      {
        name: "Elena Popescu",
        event: "Eveniment Corporate, Mai 2023",
        text: "Am apelat la serviciile R pentru gala anuală a companiei noastre și rezultatele au depășit așteptările. Profesionalismul echipei și calitatea fotografiilor au fost remarcabile.",
        avatar: "/placeholder.svg?height=100&width=100",
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
          <Link href="/offers">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Înapoi la Oferte
          </Link>
        </Button>

        {offer.popular && <Badge className="mb-4 bg-primary">Popular</Badge>}
        <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-4">{offer.name}</h1>
        <div className="flex items-baseline gap-2 mb-4">
          <span className="text-3xl font-bold">{offer.price} RON</span>
        </div>
        <p className="text-xl text-muted-foreground">{offer.description}</p>
      </div>

      {/* Image Gallery */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-12">
        <div className="relative aspect-[4/3] w-full overflow-hidden rounded-lg">
          <Image
            src={offer.images[0] || "/placeholder.svg"}
            alt={`${offer.name} - Imagine principală`}
            fill
            className="object-cover"
          />
        </div>
        <div className="grid grid-cols-2 gap-4">
          {offer.images.slice(1, 4).map((image, index) => (
            <div key={index} className="relative aspect-square w-full overflow-hidden rounded-lg">
              <Image
                src={image || "/placeholder.svg"}
                alt={`${offer.name} - Imagine ${index + 2}`}
                fill
                className="object-cover"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Content */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
        <div className="md:col-span-2">
          <Card>
            <CardContent className="p-6">
              <div
                className="prose prose-lg max-w-none dark:prose-invert"
                dangerouslySetInnerHTML={{ __html: offer.fullDescription }}
              />
            </CardContent>
          </Card>
        </div>

        <div>
          <Card className={`overflow-hidden border-none shadow-lg h-full ${offer.popular ? "border-primary" : ""}`}>
            <CardContent className="p-6">
              <h3 className="text-xl font-bold mb-4">Ce include:</h3>
              <ul className="space-y-2 mb-6">
                {offer.features.map((feature, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <Button size="lg" className="w-full mb-4" asChild>
                <Link href="/contact">Rezervă Acum</Link>
              </Button>

              <p className="text-sm text-muted-foreground text-center">
                Contactează-ne pentru detalii suplimentare sau pentru a personaliza pachetul.
              </p>
            </CardContent>
          </Card>

          <Card className="mt-6">
            <CardContent className="p-6">
              <h3 className="text-lg font-bold mb-4">Opțiuni suplimentare</h3>
              <ul className="space-y-3">
                {offer.additionalOptions.map((option, index) => (
                  <li key={index} className="flex justify-between items-center pb-2 border-b last:border-0">
                    <span>{option.name}</span>
                    <span className="font-medium">{option.price}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Testimonials */}
      <div className="mb-12">
        <h2 className="text-2xl font-bold mb-6">Ce spun clienții noștri</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {offer.testimonials.map((testimonial, index) => (
            <Card key={index} className="overflow-hidden">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="h-12 w-12 rounded-full overflow-hidden shrink-0">
                    <Image
                      src={testimonial.avatar || "/placeholder.svg"}
                      alt={testimonial.name}
                      width={48}
                      height={48}
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <p className="font-medium">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground mb-2">{testimonial.event}</p>
                    <p className="italic">{testimonial.text}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* CTA */}
      <div className="bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 text-white rounded-xl p-8 text-center">
        <h2 className="text-2xl font-bold mb-4">Pregătit să imortalizezi momentele speciale?</h2>
        <p className="max-w-2xl mx-auto mb-6">
          Contactează-ne acum pentru a discuta despre proiectul tău și pentru a rezerva pachetul {offer.name}.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" variant="secondary" asChild>
            <Link href="/contact">Contactează-ne</Link>
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

