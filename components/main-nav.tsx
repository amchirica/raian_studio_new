"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Menu } from "lucide-react"
import { useMobile } from "@/hooks/use-mobile"

export function MainNav() {
  const isMobile = useMobile()

  const navItems = [
    { href: "/", label: "Acasă" },
    { href: "/fotografii", label: "Fotografii" },
    { href: "/videoclipuri", label: "Videoclipuri" },
    { href: "/blog", label: "Blog" },
    { href: "/oferte", label: "Oferte" },
    { href: "/contact", label: "Contact" },
  ]

  if (isMobile) {
    return (
      <div className="flex w-full items-center justify-between">
        <Link href="/" className="text-xl font-bold">
          Raian Fine Arts
        </Link>
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon">
              <Menu className="h-6 w-6" />
              <span className="sr-only">Deschide meniul</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right">
            <nav className="flex flex-col gap-4 mt-8">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-lg font-medium transition-colors hover:text-primary"
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    )
  }

  return (
    <div className="flex w-full items-center justify-between">
      <Link href="/" className="text-xl font-bold">
        Raian Fine Arts
      </Link>
      <nav className="flex gap-6">
        {navItems.map((item) => (
          <Link key={item.href} href={item.href} className="text-sm font-medium transition-colors hover:text-primary">
            {item.label}
          </Link>
        ))}
      </nav>
    </div>
  )
}

