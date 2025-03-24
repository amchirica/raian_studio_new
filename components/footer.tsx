import Link from "next/link"
import { Instagram, Facebook, Twitter } from "lucide-react"

export function Footer() {
  return (
    <footer className="w-full border-t bg-background py-6">
      <div className="container flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex flex-col items-center md:items-start">
          <p className="text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} Raian Fine Arts. Toate drepturile rezervate.
          </p>
        </div>
        <div className="flex items-center gap-4">
          <Link href="https://instagram.com" target="_blank" rel="noopener noreferrer">
            <Instagram className="h-5 w-5 text-muted-foreground hover:text-primary" />
            <span className="sr-only">Instagram</span>
          </Link>
          <Link href="https://facebook.com" target="_blank" rel="noopener noreferrer">
            <Facebook className="h-5 w-5 text-muted-foreground hover:text-primary" />
            <span className="sr-only">Facebook</span>
          </Link>
        </div>
      </div>
    </footer>
  )
}

