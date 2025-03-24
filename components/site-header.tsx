"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Menu, Sun, Moon } from "lucide-react"
import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { useTheme } from "next-themes"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"

const routes = [
  {
    href: "/",
    label: "Acasă",
  },
  {
    href: "/gallery",
    label: "Fotografii",
    isDropdown: false,
  },
  {
    href: "/videos",
    label: "Videoclipuri",
  },
  {
    href: "/vlog",
    label: "Vlog",
  },
  {
    href: "#",
    label: "Servicii",
    isDropdown: true,
    dropdownItems: [
      {
        href: "/studio",
        label: "Studio",
      },
      {
        href: "/print",
        label: "Print",
      },
      {
        href: "/rezervari",
        label: "Rezervări",
      },
      {
        href: "/gallery",
        label: "Fotografii",
      },
    ],
  },
  {
    href: "/blog",
    label: "Blog",
  },
  {
    href: "/oferte",
    label: "Oferte",
  },
  {
    href: "/contact",
    label: "Contact",
  },
]

export function SiteHeader() {
  const pathname = usePathname()
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const { setTheme, theme } = useTheme()

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={cn(
        "sticky top-0 z-50 w-full border-b backdrop-blur supports-[backdrop-filter]:bg-background/60 transition-all duration-200",
        scrolled ? "bg-background/95 shadow-md" : "bg-background/80",
      )}
    >
      <div className="container flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center space-x-2">
          <span className="text-2xl font-bold bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 text-transparent bg-clip-text">
            Raian Fine Arts |
          </span>
              
          <span className="hidden sm:inline-block font-medium"></span>
        </Link>
        <nav className="hidden md:flex gap-6">
          {routes.map((route) =>
            route.isDropdown ? (
              <DropdownMenu key={route.label}>
                <DropdownMenuTrigger className="relative text-sm font-medium transition-colors hover:text-primary">
                  {route.label}
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                  {route.dropdownItems?.map((item) => (
                    <DropdownMenuItem key={item.href} asChild>
                      <Link
                        href={item.href}
                        className={cn("w-full", pathname === item.href ? "text-primary" : "text-muted-foreground")}
                      >
                        {item.label}
                      </Link>
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>
            ) : (
              <Link
                key={route.href}
                href={route.href}
                className={cn(
                  "relative text-sm font-medium transition-colors hover:text-primary",
                  pathname === route.href
                    ? "text-primary after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-full after:bg-primary after:content-['']"
                    : "text-muted-foreground",
                )}
              >
                {route.label}
              </Link>
            ),
          )}
        </nav>

        {/* Theme toggle */}
        <div className="flex items-center gap-2">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" size="icon" className="rounded-full">
                <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
                <span className="sr-only">Toggle theme</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem onClick={() => setTheme("light")}>Light</DropdownMenuItem>
              <DropdownMenuItem onClick={() => setTheme("dark")}>Dark</DropdownMenuItem>
              <DropdownMenuItem onClick={() => setTheme("system")}>System</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="outline" size="icon" className="rounded-full">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Deschide meniul</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right">
              <nav className="flex flex-col gap-4 mt-8">
                {routes.map((route) =>
                  route.isDropdown ? (
                    <div key={route.label} className="flex flex-col gap-2">
                      <span className="text-base font-medium text-primary">{route.label}</span>
                      <div className="flex flex-col gap-2 pl-4">
                        {route.dropdownItems?.map((item) => (
                          <Link
                            key={item.href}
                            href={item.href}
                            className={cn(
                              "text-base font-medium transition-colors hover:text-primary",
                              pathname === item.href ? "text-primary" : "text-muted-foreground",
                            )}
                            onClick={() => setOpen(false)}
                          >
                            {item.label}
                          </Link>
                        ))}
                      </div>
                    </div>
                  ) : (
                    <Link
                      key={route.href}
                      href={route.href}
                      className={cn(
                        "text-base font-medium transition-colors hover:text-primary",
                        pathname === route.href ? "text-primary" : "text-muted-foreground",
                      )}
                      onClick={() => setOpen(false)}
                    >
                      {route.label}
                    </Link>
                  ),
                )}
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </motion.header>
  )
}

