import { ContactForm } from "@/components/contact-form"
import { Card, CardContent } from "@/components/ui/card"
import { Mail, Phone, MapPin, Clock } from "lucide-react"

export const metadata = {
  title: "Foto-Video | Spectrum",
  description: "Contactează-ne pentru servicii de Fotografii și videografie",
}

export default function ContactPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="mb-12 text-center">
        <h1 className="mb-4 text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Contactează-ne</h1>
        <p className="mx-auto max-w-[700px] text-muted-foreground md:text-lg">
          Suntem aici pentru a răspunde întrebărilor tale și pentru a te ajuta să capturezi momentele speciale.
        </p>
      </div>

      <div className="grid gap-8 md:grid-cols-2">
        <div>
          <div className="mb-8 grid gap-4 md:grid-cols-2">
            <Card>
              <CardContent className="flex flex-col items-center p-6 text-center">
                <Mail className="mb-4 h-8 w-8 text-primary" />
                <h3 className="mb-2 font-bold">Email</h3>
                <p className="text-muted-foreground">raian.visual@yahoo.com</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="flex flex-col items-center p-6 text-center">
                <Phone className="mb-4 h-8 w-8 text-primary" />
                <h3 className="mb-2 font-bold">Telefon</h3>
                <p className="text-muted-foreground">+40 740 607 882</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="flex flex-col items-center p-6 text-center">
                <MapPin className="mb-4 h-8 w-8 text-primary" />
                <h3 className="mb-2 font-bold">Adresă</h3>
                <p className="text-muted-foreground">Str. - </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="flex flex-col items-center p-6 text-center">
                <Clock className="mb-4 h-8 w-8 text-primary" />
                <h3 className="mb-2 font-bold">Program</h3>
                <p className="text-muted-foreground">Luni - Vineri: 10:00 - 18:00</p>
                <p className="text-muted-foreground">Sâmbătă: 12:00 - 16:00</p>
                <p className="text-muted-foreground">Duminică: Închis</p>
              </CardContent>
            </Card>
          </div>

          <div className="rounded-lg overflow-hidden h-[300px] md:h-[400px]">
            {/* În mod normal, aici ar fi o hartă Google Maps încorporată */}
            <div className="flex h-full w-full items-center justify-center bg-muted">
              <p className="text-center text-muted-foreground">
                Hartă Google Maps
              </p>
            </div>
          </div>
        </div>

        <div>
          <Card>
            <CardContent className="p-6">
              <h2 className="mb-6 text-2xl font-bold">Trimite-ne un mesaj</h2>
              <ContactForm />
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}

