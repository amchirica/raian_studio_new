import Link from "next/link"
import { Instagram, Facebook, Twitter, Mail, Phone } from "lucide-react"

export function SiteFooter() {
  return (
    <footer className="w-full border-t bg-background">
      <div className="container py-10 md:py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-3">
            <h3 className="text-lg font-bold">
              <span className="bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 text-transparent bg-clip-text">
                Raian Fine Arts
              </span>{" "}
              Hub
            </h3>
            <p className="text-sm text-muted-foreground">
              Surprindem momentele vibrante prin pasiune și creativitate.
            </p>
            <div className="flex space-x-3">
              <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </Link>
            </div>
          </div>
          <div className="space-y-3">
            <h3 className="text-sm font-bold uppercase tracking-wider">Navigare</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Acasă
                </Link>
              </li>
              <li>
                <Link href="/gallery" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Fotografii
                </Link>
              </li>
              <li>
                <Link href="/videos" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Videoclipuri
                </Link>
              </li>
              <li>
                <Link href="/vlog" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Vlog
                </Link>
              </li>
              <li>
                <Link href="/studio" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Studio
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/rezervari" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Rezervări
                </Link>
              </li>
            </ul>
          </div>
          <div className="space-y-3">
            <h3 className="text-sm font-bold uppercase tracking-wider">Servicii</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/gallery" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Foto-video nuntă
                </Link>
              </li>
              <li>
                <Link href="/studio" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Studio foto-video
                </Link>
              </li>
              <li>
                <Link href="/vlog" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Studio podcast-vlogging
                </Link>
              </li>
              <li>
                <Link href="/print" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Editare și tipografie
                </Link>
              </li>
            </ul>
          </div>
          <div className="space-y-3">
            <h3 className="text-sm font-bold uppercase tracking-wider">Contact</h3>
            <ul className="space-y-2">
              <li className="flex items-center gap-2 text-sm text-muted-foreground">
                <Mail className="h-4 w-4" />
                <span>raian.visual@yahoo.com</span>
              </li>
              <li className="flex items-center gap-2 text-sm text-muted-foreground">
                <Phone className="h-4 w-4" />
                <span>+40 740 607 882</span>
              </li>
            </ul>
            <div className="pt-2">
              <Link href="/admin" className="text-xs text-muted-foreground hover:text-primary transition-colors">
                
              </Link>
            </div>
          </div>
        </div>
        <div className="mt-10 border-t pt-6 text-center text-sm text-muted-foreground">
          &copy; {new Date().getFullYear()} Raian Fine Arts. Toate drepturile rezervate.
        </div>
      </div>
    </footer>
  )
}

