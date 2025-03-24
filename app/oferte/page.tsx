import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Check } from "lucide-react"

export const metadata = {
  title: "Foto-Video | Raian",
  description: "Pachete și oferte pentru servicii de fotografie și videografie",
}

export default function OfertePage() {
  const pricingPlans = [
    {
      name: "Pachetul Economic",
      price: "8.400",
      description: "Perfect pentru evenimente mici cu ședințe foto-video de bază",
      features: [
        "11-13 ore de activitate", 
        "1 fotograf & 1 videograf",
        "fotografierea și filmarea nelimitată", 
        "stocarea materialului timp de 1 an", 
        "predare 1200 fotografii editate & 60 de minute de filmare", 
        "predare materialului în galerie online", 
        "film highlight și same week edit", 
        "livrare în 70-90 de zile"],
      cta: "Alege pachetul Economic",
      popular: false,
    },
    {
      name: "Pachet Standard",
      price: "9.900",
      description: "Ideal pentru nunți și evenimente importante",
      features: [
        "12-14 ore activitate",
        "1 fotograf & 1 videograf",
        "fotografierea și filmarea nelimitată",
        "stocarea materialului timp de 1 an",
        "predarea 1500 fotografii editate & 60-80 de minute de filmare",
        "predarea materialului în galerie online",
        "cadre foto-video din dronă",
        "film highlight și same week edit",
        "livrare în 70-90 de zile",
      ],
      cta: "Alege pachetul Standard",
      popular: true,
    },
    {
      name: "Pachet Premium",
      price: "11.900",
      description: "Soluția completă pentru evenimente speciale mari",
      features: [
        "15-16 ore de activitate",
        "1 fotografi + 1 videograf + 1 asistent",
        "fotografierea și filmarea nelimitată",
        "stocarea materialulul timp de 1 an",
        "predarea 1800 fotografii editate & minim 90-100 de minute de filmare",
        "predarea materialului în galerie online și stick",
        "cadre foto-video din dronă",
        "film highlight și same week edit",
        "album foto premium 25x25cm (20-22 pagini)",
        "livrare în 70-90 zile",
      ],
      cta: "Alege Pachetul Complet",
      popular: false,
    },
  ]

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="mb-12 text-center">
        <h1 className="mb-4 text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Oferte și pchete</h1>
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

