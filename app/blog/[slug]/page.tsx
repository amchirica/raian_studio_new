import Image from "next/image"
import Link from "next/link"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ArrowLeft, Calendar, User } from "lucide-react"

interface BlogPostPageProps {
  params: {
    slug: string
  }
}

export default function BlogPostPage({ params }: BlogPostPageProps) {
  // În mod normal, aceste date ar veni de la un CMS sau API bazat pe slug
  const post = {
    title: "Cum să alegi fotograful perfect pentru nunta ta",
    date: "15 Mai 2023",
    author: "Maria Ionescu",
    category: "Nunți",
    imageSrc: "/placeholder.svg?height=600&width=1200&text=BlogHeader",
    content: `
      <p>Alegerea fotografului pentru nunta ta este una dintre cele mai importante decizii pe care le vei lua în procesul de planificare a nunții. Fotografiile sunt amintirile care vor dura o viață, așa că merită să acorzi timp și atenție acestei alegeri.</p>
      
      <h2>1. Stabilește-ți bugetul</h2>
      <p>Înainte de a începe căutarea, este important să știi cât ești dispus să investești în fotografia de nuntă. Prețurile pot varia semnificativ în funcție de experiența fotografului, pachetele oferite și regiunea în care te afli.</p>
      
      <h2>2. Cercetează stilurile de Fotografii</h2>
      <p>Există mai multe stiluri de Fotografii de nuntă: tradițional, fotojurnalistic, artistic, etc. Uită-te la diverse portofolii și identifică stilul care rezonează cel mai bine cu viziunea ta.</p>
      
      <h2>3. Verifică portofoliile</h2>
      <p>Examinează cu atenție portofoliile fotografilor care te interesează. Caută consistență în calitate și stil. Este important să vezi nunți complete, nu doar cele mai bune fotografii din diverse evenimente.</p>
      
      <h2>4. Citește recenzii și mărturii</h2>
      <p>Experiențele altor cupluri pot oferi informații valoroase despre profesionalismul, atitudinea și fiabilitatea fotografului.</p>
      
      <h2>5. Programează întâlniri</h2>
      <p>După ce ai restrâns lista, programează întâlniri cu fotografii preferați. Chimia personală este importantă - vei petrece multe ore cu această persoană în ziua nunții.</p>
      
      <h2>6. Discută despre detaliile tehnice</h2>
      <p>Întreabă despre echipamentul folosit, planul de rezervă în caz de urgență, procesul de editare și timpul de livrare a fotografiilor finale.</p>
      
      <h2>7. Clarifică aspectele contractuale</h2>
      <p>Asigură-te că toate așteptările tale sunt clar stipulate în contract: orele de acoperire, numărul de fotografii, drepturile de autor, costurile suplimentare potențiale.</p>
      
      <p>Urmând acești pași, vei avea mai multe șanse să găsești fotograful perfect care va captura frumusețea și emoția zilei nunții tale exact așa cum ți-ai dorit.</p>
    `,
    relatedPosts: [
      {
        id: 6,
        title: "Tendințe în fotografia de nuntă pentru 2023",
        slug: "tendinte-in-fotografia-de-nunta-pentru-2023",
        imageSrc: "/placeholder.svg?height=200&width=300&text=Related1",
      },
      {
        id: 2,
        title: "Echipamentul esențial pentru fotografia de peisaj",
        slug: "echipamentul-esential-pentru-fotografia-de-peisaj",
        imageSrc: "/placeholder.svg?height=200&width=300&text=Related2",
      },
    ],
  }

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="mb-8">
        <Button asChild variant="ghost" className="mb-4">
          <Link href="/blog">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Înapoi la Blog
          </Link>
        </Button>

        <Badge className="mb-4">{post.category}</Badge>
        <h1 className="mb-4 text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">{post.title}</h1>

        <div className="mb-8 flex flex-wrap items-center gap-4 text-muted-foreground">
          <div className="flex items-center gap-1">
            <Calendar className="h-4 w-4" />
            <span>{post.date}</span>
          </div>
          <div className="flex items-center gap-1">
            <User className="h-4 w-4" />
            <span>{post.author}</span>
          </div>
        </div>
      </div>

      <div className="relative mb-8 aspect-[21/9] w-full overflow-hidden rounded-lg">
        <Image src={post.imageSrc || "/placeholder.svg"} alt={post.title} fill className="object-cover" priority />
      </div>

      <div className="mx-auto max-w-3xl">
        <div
          className="prose prose-lg max-w-none dark:prose-invert"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />

        <div className="mt-12 border-t pt-8">
          <h2 className="mb-6 text-2xl font-bold">Articole similare</h2>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            {post.relatedPosts.map((relatedPost) => (
              <Link key={relatedPost.id} href={`/blog/${relatedPost.slug}`}>
                <div className="group overflow-hidden rounded-lg border">
                  <div className="relative aspect-[16/9] w-full overflow-hidden">
                    <Image
                      src={relatedPost.imageSrc || "/placeholder.svg"}
                      alt={relatedPost.title}
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="font-bold">{relatedPost.title}</h3>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

