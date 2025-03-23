import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Check } from "lucide-react"

export const metadata = {
  title: "Foto-Video | Spectrum",
  description: "Pachete și oferte pentru servicii de Fotografii și videografie",
}

export default function OfertePage() {
  const pricingPlans = [
    {
      name: "Pachet Basic",
      price: "1.500",
      description: "Perfect pentru evenimente mici și ședințe foto de bază",
      features: ["4 ore de Fotografiire", "100 fotografii editate", "Fotografii online privată", "Livrare în 14 zile"],
      cta: "Alege Pachetul Basic",
      popular: false,
    },
    {
      name: "Pachet Premium",
      price: "3.500",
      description: "Ideal pentru nunți și evenimente importante",
      features: [
        "10 ore de Fotografiire",
        "2 fotografi",
        "400 fotografii editate",
        "Album foto 30x30cm (20 pagini)",
        "Fotografii online privată",
        "Livrare în 10 zile",
      ],
      cta: "Alege Pachetul Premium",
      popular: true,
    },
    {
      name: "Pachet Complet",
      price: "5.500",
      description: "Soluția completă pentru evenimente speciale",
      features: [
        "Acoperire completă a evenimentului",
        "2 fotografi + 1 videograf",
        "500+ fotografii editate",
        "Film highlight (5-7 minute)",
        "Album foto premium 35x35cm (30 pagini)",
        "Fotografii online privată",
        "Livrare în 7 zile",
      ],
      cta: "Alege Pachetul Complet",
      popular: false,
    },
  ]

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="mb-12 text-center">
        <h1 className="mb-4 text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Oferte și Pachete</h1>
        <p className="mx-auto max-w-[700px] text-muted-foreground md:text-lg">
          Alege pachetul care se potrivește cel mai bine nevoilor tale. Toate pachetele pot fi personalizate.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {pricingPlans.map((plan) => (
          <Card key={plan.name} className={`flex flex-col ${plan.popular ? "border-primary shadow-lg" : ""}`}>
            {plan.popular && (
              <div className="absolute right-0 top-0 rounded-bl-lg rounded-tr-lg bg-primary px-3 py-1 text-xs font-medium text-primary-foreground">
                Popular
              </div>
            )}
            <CardHeader>
              <h3 className="text-2xl font-bold">{plan.name}</h3>
              <div className="flex items-baseline gap-1">
                <span className="text-3xl font-bold">{plan.price} RON</span>
              </div>
              <p className="text-sm text-muted-foreground">{plan.description}</p>
            </CardHeader>
            <CardContent className="flex-1">
              <ul className="space-y-2">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-primary" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
            <CardFooter>
              <Button asChild className="w-full" variant={plan.popular ? "default" : "outline"}>
                <Link href="/contact">{plan.cta}</Link>
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>

      <div className="mt-12 rounded-lg bg-muted p-8 text-center">
        <h2 className="mb-4 text-2xl font-bold">Ai nevoie de un pachet personalizat?</h2>
        <p className="mx-auto mb-6 max-w-[600px] text-muted-foreground">
          Contactează-ne pentru a discuta despre cerințele tale specifice și vom crea un pachet personalizat pentru
          tine.
        </p>
        <Button asChild size="lg">
          <Link href="/contact">Contactează-ne</Link>
        </Button>
      </div>
    </div>
  )
}

