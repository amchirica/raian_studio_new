import Link from "next/link"
import Image from "next/image"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export const metadata = {
  title: "Foto-Video | Raian",
  description: "Articole și sfaturi despre Fotografii și videografie",
}

export default function BlogPage() {
  // În mod normal, aceste date ar veni de la un CMS sau API
  const blogPosts = [
    {
      id: 1,
      title: "Cum să alegi fotograful perfect pentru nunta ta",
      excerpt: "Sfaturi esențiale pentru a găsi fotograful care să surprindă perfect ziua nunții tale.",
      date: "15 Mai 2023",
      author: "Maria Ionescu",
      category: "Nunți",
      slug: "cum-sa-alegi-fotograful-perfect-pentru-nunta",
      imageSrc: "/placeholder.svg?height=400&width=800&text=Blog1",
    },
    {
      id: 2,
      title: "Echipamentul esențial pentru fotografia de peisaj",
      excerpt: "Ghid complet despre echipamentul necesar pentru a realiza fotografii de peisaj impresionante.",
      date: "3 Iunie 2023",
      author: "Andrei Popescu",
      category: "Echipament",
      slug: "echipamentul-esential-pentru-fotografia-de-peisaj",
      imageSrc: "/placeholder.svg?height=400&width=800&text=Blog2",
    },
    {
      id: 3,
      title: "Tehnici de editare pentru portrete perfecte",
      excerpt: "Descoperă cele mai bune tehnici de editare pentru a obține portrete profesionale.",
      date: "22 Iulie 2023",
      author: "Elena Dumitrescu",
      category: "Editare",
      slug: "tehnici-de-editare-pentru-portrete-perfecte",
      imageSrc: "/placeholder.svg?height=400&width=800&text=Blog3",
    },
    {
      id: 4,
      title: "Cum să realizezi videoclipuri de calitate cu buget redus",
      excerpt: "Sfaturi practice pentru a crea conținut video profesional fără a cheltui o avere.",
      date: "10 August 2023",
      author: "Mihai Stanescu",
      category: "Videografie",
      slug: "cum-sa-realizezi-videoclipuri-de-calitate-cu-buget-redus",
      imageSrc: "/placeholder.svg?height=400&width=800&text=Blog4",
    },
    {
      id: 5,
      title: "Cele mai bune locații pentru ședințe foto în România",
      excerpt: "Descoperă locurile perfecte pentru ședințe foto memorabile în diverse regiuni ale țării.",
      date: "5 Septembrie 2023",
      author: "Ana Vasilescu",
      category: "Locații",
      slug: "cele-mai-bune-locatii-pentru-sedinte-foto-in-romania",
      imageSrc: "/placeholder.svg?height=400&width=800&text=Blog5",
    },
    {
      id: 6,
      title: "Tendințe în fotografia de nuntă pentru 2023",
      excerpt: "Cele mai recente tendințe și stiluri în fotografia de nuntă pentru anul curent.",
      date: "18 Octombrie 2023",
      author: "Cristina Munteanu",
      category: "Nunți",
      slug: "tendinte-in-fotografia-de-nunta-pentru-2023",
      imageSrc: "/placeholder.svg?height=400&width=800&text=Blog6",
    },
  ]

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="mb-12 text-center">
        <h1 className="mb-4 text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Blog</h1>
        <p className="mx-auto max-w-[700px] text-muted-foreground md:text-lg">
          Articole, sfaturi și inspirație din lumea fotografiei și videografiei.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {blogPosts.map((post) => (
          <Link key={post.id} href={`/blog/${post.slug}`}>
            <Card className="h-full overflow-hidden transition-all hover:shadow-lg">
              <div className="relative aspect-[16/9] w-full overflow-hidden">
                <Image
                  src={post.imageSrc || "/placeholder.svg"}
                  alt={post.title}
                  fill
                  className="object-cover transition-transform duration-300 hover:scale-105"
                />
              </div>
              <CardContent className="p-6">
                <div className="mb-4 flex items-center gap-2">
                  <Badge variant="secondary">{post.category}</Badge>
                  <span className="text-sm text-muted-foreground">{post.date}</span>
                </div>
                <h2 className="mb-2 text-xl font-bold">{post.title}</h2>
                <p className="text-muted-foreground">{post.excerpt}</p>
              </CardContent>
              <CardFooter className="border-t p-6 pt-4">
                <div className="flex items-center gap-2">
                  <div className="h-8 w-8 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold">
                    {post.author.charAt(0)}
                  </div>
                  <span className="text-sm">{post.author}</span>
                </div>
              </CardFooter>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  )
}

