"use client"

import { useState, useEffect } from "react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { FileUpload } from "@/components/file-upload"
import {
  initCMS,
  getPhotos,
  addPhoto,
  deletePhoto,
  getBlogPosts,
  addBlogPost,
  deleteBlogPost,
  getVideos,
  addVideo,
  deleteVideo,
} from "@/lib/cms-utils"
import { useToast } from "@/hooks/use-toast"
import { Trash2, Edit, Plus, ImageIcon, Video, FileText, Printer, Calendar } from "lucide-react"
import type React from "react"
import { useRouter } from "next/navigation"

export default function AdminDashboard() {
  const { toast } = useToast()
  const [photos, setPhotos] = useState([])
  const [videos, setVideos] = useState([])
  const [blogPosts, setBlogPosts] = useState([])
  const [reservations, setReservations] = useState([])
  const [printOrders, setPrintOrders] = useState([])
  const [newPhoto, setNewPhoto] = useState({ title: "", category: "portraits", src: "" })
  const [newVideo, setNewVideo] = useState({ title: "", description: "", category: "tutorials", thumbnailSrc: "" })
  const [newBlogPost, setNewBlogPost] = useState({ title: "", excerpt: "", content: "", category: "tutorials" })

  const router = useRouter()
  const [authenticated, setAuthenticated] = useState(false)
  const [loading, setLoading] = useState(true)

  // State for content management
  const [vlogPosts, setVlogPosts] = useState([
    {
      id: 1,
      title: "O zi din viața unui fotograf de nuntă",
      excerpt: "Urmărește-mă în culisele unei nunți de vară și vezi cum surprind momentele speciale.",
      thumbnail: "/placeholder.svg?height=720&width=1280",
      duration: "12:45",
      date: "15 Iunie 2023",
      views: "1.2K",
      category: "Behind the Scenes",
    },
    {
      id: 2,
      title: "Cum să alegi echipamentul potrivit pentru fotografia de peisaj",
      excerpt: "Ghid complet despre camerele, obiectivele și accesoriile esențiale pentru fotografia de peisaj.",
      thumbnail: "/placeholder.svg?height=720&width=1280",
      duration: "18:30",
      date: "3 Mai 2023",
      views: "3.5K",
      category: "Gear Review",
    },
  ])

  const [studioContent, setStudioContent] = useState([
    {
      id: 1,
      name: "Studio Principal",
      description:
        "Un spațiu de 120 mp cu tavan înalt, perfect pentru ședințe foto de modă, portrete și Fotografii comercială.",
      image: "/placeholder.svg?height=600&width=800",
      features: ["Sistem de iluminare profesional", "Fundaluri multiple", "Zonă de machiaj", "Garderobă"],
    },
    {
      id: 2,
      name: "Studio Cyclorama",
      description: "Un studio cu cyclorama albă de 80 mp, ideal pentru Fotografii de produs și videoclipuri.",
      image: "/placeholder.svg?height=600&width=800",
      features: ["Cyclorama albă", "Sistem de șine pentru lumini", "Control complet al luminii", "Podea epoxidică"],
    },
  ])

  const [offers, setOffers] = useState([
    {
      id: 1,
      name: "Pachet Basic",
      price: "1.500",
      description: "Perfect pentru evenimente mici și ședințe foto de bază",
      features: ["4 ore de Fotografiire", "100 fotografii editate", "Fotografii online privată", "Livrare în 14 zile"],
      popular: false,
    },
    {
      id: 2,
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
      popular: true,
    },
  ])

  // State for editing
  const [editingPhoto, setEditingPhoto] = useState<any>(null)
  const [editingVideo, setEditingVideo] = useState<any>(null)
  const [editingBlogPost, setEditingBlogPost] = useState<any>(null)

  const [editingVlogPost, setEditingVlogPost] = useState<any>(null)
  const [editingStudioContent, setEditingStudioContent] = useState<any>(null)
  const [editingOffer, setEditingOffer] = useState<any>(null)

  const [newVlogPost, setNewVlogPost] = useState({
    title: "",
    excerpt: "",
    thumbnail: "",
    duration: "",
    date: "",
    views: "",
    category: "",
  })
  const [newStudioContent, setNewStudioContent] = useState({
    name: "",
    description: "",
    image: "",
    features: [""],
  })
  const [newOffer, setNewOffer] = useState({
    name: "",
    price: "",
    description: "",
    features: [""],
    popular: false,
  })

  // Add file upload state
  const [selectedFile, setSelectedFile] = useState<File | null>(null)
  const [previewUrl, setPreviewUrl] = useState<string | null>(null)

  // Initialize CMS
  useEffect(() => {
    initCMS()
    loadData()

    // Load reservations from localStorage
    const storedReservations = localStorage.getItem("prism_reservations")
    if (storedReservations) {
      setReservations(JSON.parse(storedReservations))
    }

    // Mock print orders for demo
    setPrintOrders([
      { id: 1, customer: "Ana Popescu", product: "Album Foto 30x30", status: "În procesare", date: "2023-05-15" },
      { id: 2, customer: "Mihai Ionescu", product: "Printuri Fine Art 5x", status: "Finalizat", date: "2023-05-10" },
      { id: 3, customer: "Elena Dumitrescu", product: "Printuri Standard 20x", status: "Livrat", date: "2023-05-05" },
    ])

    // Check if user is authenticated
    const isAuth = localStorage.getItem("cms_auth") === "true"
    setAuthenticated(isAuth)
    setLoading(false)

    if (!isAuth && !loading) {
      router.push("/admin")
    }
  }, [loading, router])

  const loadData = () => {
    setPhotos(getPhotos())
    setVideos(getVideos())
    setBlogPosts(getBlogPosts())
  }

  const handlePhotoUpload = (file) => {
    // Create a URL for the uploaded file
    const url = URL.createObjectURL(file)

    // Create an image element to get dimensions
    const img = new Image()
    img.onload = () => {
      setNewPhoto({ ...newPhoto, src: url, width: img.width, height: img.height })
    }
    img.src = url
  }

  const handleVideoThumbnailUpload = (file) => {
    const url = URL.createObjectURL(file)
    setNewVideo({ ...newVideo, thumbnailSrc: url })
  }

  const handleAddPhoto = () => {
    if (!newPhoto.title || !newPhoto.src) {
      toast({
        title: "Eroare",
        description: "Completați toate câmpurile obligatorii",
        variant: "destructive",
      })
      return
    }

    addPhoto(newPhoto)
    setNewPhoto({ title: "", category: "portraits", src: "" })
    loadData()
    toast({
      title: "Succes",
      description: "Fotografia a fost adăugată cu succes",
    })
  }

  const handleDeletePhoto = (id) => {
    deletePhoto(id)
    loadData()
    toast({
      title: "Succes",
      description: "Fotografia a fost ștearsă cu succes",
    })
  }

  const handleAddVideo = () => {
    if (!newVideo.title || !newVideo.description || !newVideo.thumbnailSrc) {
      toast({
        title: "Eroare",
        description: "Completați toate câmpurile obligatorii",
        variant: "destructive",
      })
      return
    }

    addVideo(newVideo)
    setNewVideo({ title: "", description: "", category: "tutorials", thumbnailSrc: "" })
    loadData()
    toast({
      title: "Succes",
      description: "Videoclipul a fost adăugat cu succes",
    })
  }

  const handleDeleteVideo = (id) => {
    deleteVideo(id)
    loadData()
    toast({
      title: "Succes",
      description: "Videoclipul a fost șters cu succes",
    })
  }

  const handleAddBlogPost = () => {
    if (!newBlogPost.title || !newBlogPost.excerpt || !newBlogPost.content) {
      toast({
        title: "Eroare",
        description: "Completați toate câmpurile obligatorii",
        variant: "destructive",
      })
      return
    }

    addBlogPost(newBlogPost)
    setNewBlogPost({ title: "", excerpt: "", content: "", category: "tutorials" })
    loadData()
    toast({
      title: "Succes",
      description: "Articolul a fost adăugat cu succes",
    })
  }

  const handleDeleteBlogPost = (id) => {
    deleteBlogPost(id)
    loadData()
    toast({
      title: "Succes",
      description: "Articolul a fost șters cu succes",
    })
  }

  const handleUpdateReservationStatus = (id, status) => {
    const updatedReservations = reservations.map((res) => (res.id === id ? { ...res, status } : res))
    setReservations(updatedReservations)
    localStorage.setItem("prism_reservations", JSON.stringify(updatedReservations))
    toast({
      title: "Succes",
      description: "Statusul rezervării a fost actualizat",
    })
  }

  const handleUpdatePrintOrderStatus = (id, status) => {
    const updatedOrders = printOrders.map((order) => (order.id === id ? { ...order, status } : order))
    setPrintOrders(updatedOrders)
    toast({
      title: "Succes",
      description: "Statusul comenzii a fost actualizat",
    })
  }

  const handleLogout = () => {
    localStorage.removeItem("cms_auth")
    router.push("/admin")
  }

  // Photo management
  const updatePhoto = () => {
    if (!editingPhoto) return
    setPhotos(photos.map((p) => (p.id === editingPhoto.id ? editingPhoto : p)))
    setEditingPhoto(null)
    toast({
      title: "Succes",
      description: "Fotografia a fost actualizată",
    })
  }

  const updateVideo = () => {
    if (!editingVideo) return
    setVideos(videos.map((v) => (v.id === editingVideo.id ? editingVideo : v)))
    setEditingVideo(null)
    toast({
      title: "Succes",
      description: "Videoclipul a fost actualizat",
    })
  }

  const updateBlogPost = () => {
    if (!editingBlogPost) return
    setBlogPosts(blogPosts.map((p) => (p.id === editingBlogPost.id ? editingBlogPost : p)))
    setEditingBlogPost(null)
    toast({
      title: "Succes",
      description: "Articolul a fost actualizat",
    })
  }

  // Add file upload handler function
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0]
      setSelectedFile(file)

      // Create a preview URL
      const reader = new FileReader()
      reader.onloadend = () => {
        setPreviewUrl(reader.result as string)
      }
      reader.readAsDataURL(file)
    }
  }

  // Vlog management
  const addVlogPost = () => {
    if (!newVlogPost.title || !newVlogPost.excerpt || !newVlogPost.thumbnail) {
      toast({
        title: "Eroare",
        description: "Câmpurile obligatorii trebuie completate",
        variant: "destructive",
      })
      return
    }

    const newId = vlogPosts.length > 0 ? Math.max(...vlogPosts.map((p) => p.id)) + 1 : 1
    setVlogPosts([...vlogPosts, { ...newVlogPost, id: newId }])
    setNewVlogPost({
      title: "",
      excerpt: "",
      thumbnail: "",
      duration: "",
      date: "",
      views: "",
      category: "",
    })
    toast({
      title: "Succes",
      description: "Postarea vlog a fost adăugată",
    })
  }

  const updateVlogPost = () => {
    if (!editingVlogPost) return
    setVlogPosts(vlogPosts.map((p) => (p.id === editingVlogPost.id ? editingVlogPost : p)))
    setEditingVlogPost(null)
    toast({
      title: "Succes",
      description: "Postarea vlog a fost actualizată",
    })
  }

  const deleteVlogPost = (id: number) => {
    setVlogPosts(vlogPosts.filter((p) => p.id !== id))
    toast({
      title: "Succes",
      description: "Postarea vlog a fost ștearsă",
    })
  }

  // Studio management
  const addStudioContent = () => {
    if (!newStudioContent.name || !newStudioContent.description || !newStudioContent.image) {
      toast({
        title: "Eroare",
        description: "Câmpurile obligatorii trebuie completate",
        variant: "destructive",
      })
      return
    }

    const newId = studioContent.length > 0 ? Math.max(...studioContent.map((s) => s.id)) + 1 : 1
    setStudioContent([...studioContent, { ...newStudioContent, id: newId }])
    setNewStudioContent({ name: "", description: "", image: "", features: [""] })
    toast({
      title: "Succes",
      description: "Conținutul studio a fost adăugat",
    })
  }

  const updateStudioContent = () => {
    if (!editingStudioContent) return
    setStudioContent(studioContent.map((s) => (s.id === editingStudioContent.id ? editingStudioContent : s)))
    setEditingStudioContent(null)
    toast({
      title: "Succes",
      description: "Conținutul studio a fost actualizat",
    })
  }

  const deleteStudioContent = (id: number) => {
    setStudioContent(studioContent.filter((s) => s.id !== id))
    toast({
      title: "Succes",
      description: "Conținutul studio a fost șters",
    })
  }

  // Offers management
  const addOffer = () => {
    if (!newOffer.name || !newOffer.price || !newOffer.description) {
      toast({
        title: "Eroare",
        description: "Câmpurile obligatorii trebuie completate",
        variant: "destructive",
      })
      return
    }

    const newId = offers.length > 0 ? Math.max(...offers.map((o) => o.id)) + 1 : 1
    setOffers([...offers, { ...newOffer, id: newId }])
    setNewOffer({ name: "", price: "", description: "", features: [""], popular: false })
    toast({
      title: "Succes",
      description: "Oferta a fost adăugată",
    })
  }

  const updateOffer = () => {
    if (!editingOffer) return
    setOffers(offers.map((o) => (o.id === editingOffer.id ? editingOffer : o)))
    setEditingOffer(null)
    toast({
      title: "Succes",
      description: "Oferta a fost actualizată",
    })
  }

  const deleteOffer = (id: number) => {
    setOffers(offers.filter((o) => o.id !== id))
    toast({
      title: "Succes",
      description: "Oferta a fost ștearsă",
    })
  }

  // Add file upload utility for photos

  const getPhotos = () => {
    try {
      const photos = localStorage.getItem("prism_cms_photos")
      return photos ? JSON.parse(photos) : []
    } catch (error) {
      console.error("Failed to parse photos from localStorage, returning initialPhotos", error)
      return []
    }
  }

  const uploadPhotoWithFile = () => {
    if (!selectedFile || !newPhoto.title || !newPhoto.category) {
      toast({
        title: "Eroare",
        description: "Selectați un fișier și completați toate câmpurile obligatorii",
        variant: "destructive",
      })
      return
    }

    // Use the preview URL as the image source
    if (previewUrl) {
      const photoWithUploadedImage = {
        ...newPhoto,
        src: previewUrl,
        width: 600, // Add width and height for proper display
        height: 800,
      }

      const newId = photos.length > 0 ? Math.max(...photos.map((p) => p.id)) + 1 : 1
      const newPhotoWithId = { ...photoWithUploadedImage, id: newId }

      // Update state
      setPhotos([...photos, newPhotoWithId])

      // Save to localStorage for persistence
      const existingPhotos = getPhotos()
      localStorage.setItem("prism_cms_photos", JSON.stringify([...existingPhotos, newPhotoWithId]))

      setNewPhoto({ title: "", category: "", src: "" })
      setSelectedFile(null)
      setPreviewUrl(null)

      toast({
        title: "Succes",
        description: "Fotografia a fost încărcată și adăugată",
      })
    }
  }

  if (loading) {
    return <div className="flex items-center justify-center min-h-screen">Se încarcă...</div>
  }

  if (!authenticated) {
    return null // Will redirect in useEffect
  }

  return (
    <div className="container mx-auto py-10 space-y-8">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold">Panou de Administrare</h1>
        <Button variant="outline" onClick={loadData}>
          Reîmprospătează
        </Button>
      </div>

      <Tabs defaultValue="photos">
        <TabsList className="grid grid-cols-6 w-full">
          <TabsTrigger value="photos" className="flex items-center gap-2">
            <ImageIcon className="h-4 w-4" />
            <span>Fotografii</span>
          </TabsTrigger>
          <TabsTrigger value="videos" className="flex items-center gap-2">
            <Video className="h-4 w-4" />
            <span>Videoclipuri</span>
          </TabsTrigger>
          <TabsTrigger value="blog" className="flex items-center gap-2">
            <FileText className="h-4 w-4" />
            <span>Blog</span>
          </TabsTrigger>
          <TabsTrigger value="reservations" className="flex items-center gap-2">
            <Calendar className="h-4 w-4" />
            <span>Rezervări</span>
          </TabsTrigger>
          <TabsTrigger value="print" className="flex items-center gap-2">
            <Printer className="h-4 w-4" />
            <span>Print</span>
          </TabsTrigger>
          <TabsTrigger value="settings">Setări</TabsTrigger>
        </TabsList>

        {/* Photos Tab */}
        <TabsContent value="photos" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Adaugă Fotografii Nouă</CardTitle>
              <CardDescription>Adaugă o Fotografii nouă în Fotografii</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="photo-title">Titlu</Label>
                  <Input
                    id="photo-title"
                    value={newPhoto.title}
                    onChange={(e) => setNewPhoto({ ...newPhoto, title: e.target.value })}
                    placeholder="Titlul Fotografiii"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="photo-category">Categorie</Label>
                  <Select
                    value={newPhoto.category}
                    onValueChange={(value) => setNewPhoto({ ...newPhoto, category: value })}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Selectează o categorie" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="portraits">Portrete</SelectItem>
                      <SelectItem value="landscapes">Peisaje</SelectItem>
                      <SelectItem value="weddings">Nunți</SelectItem>
                      <SelectItem value="street">Stradă</SelectItem>
                      <SelectItem value="wildlife">Natură</SelectItem>
                      <SelectItem value="architecture">Arhitectură</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
              <div className="space-y-2">
                <Label>Imagine</Label>
                <FileUpload onUpload={handlePhotoUpload} accept="image/*" />
                {newPhoto.src && (
                  <div className="mt-2">
                    <img src={newPhoto.src || "/placeholder.svg"} alt="Preview" className="max-h-40 rounded-md" />
                  </div>
                )}
              </div>
              <Button onClick={handleAddPhoto} className="w-full">
                <Plus className="mr-2 h-4 w-4" /> Adaugă Fotografii
              </Button>
            </CardContent>
          </Card>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {photos.map((photo) => (
              <Card key={photo.id}>
                <CardContent className="p-4">
                  <div className="aspect-square relative overflow-hidden rounded-md mb-2">
                    <img
                      src={photo.src || "/placeholder.svg"}
                      alt={photo.title}
                      className="object-cover w-full h-full"
                    />
                  </div>
                  <div className="flex justify-between items-center">
                    <div>
                      <h3 className="font-medium">{photo.title}</h3>
                      <p className="text-sm text-muted-foreground">{photo.category}</p>
                    </div>
                    <Button variant="destructive" size="icon" onClick={() => handleDeletePhoto(photo.id)}>
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        {/* Videos Tab */}
        <TabsContent value="videos" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Adaugă Videoclip Nou</CardTitle>
              <CardDescription>Adaugă un videoclip nou în Fotografii</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="video-title">Titlu</Label>
                  <Input
                    id="video-title"
                    value={newVideo.title}
                    onChange={(e) => setNewVideo({ ...newVideo, title: e.target.value })}
                    placeholder="Titlul videoclipului"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="video-category">Categorie</Label>
                  <Select
                    value={newVideo.category}
                    onValueChange={(value) => setNewVideo({ ...newVideo, category: value })}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Selectează o categorie" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="tutorials">Tutoriale</SelectItem>
                      <SelectItem value="travel">Călătorii</SelectItem>
                      <SelectItem value="events">Evenimente</SelectItem>
                      <SelectItem value="behind-the-scenes">Behind the Scenes</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="video-description">Descriere</Label>
                <Textarea
                  id="video-description"
                  value={newVideo.description}
                  onChange={(e) => setNewVideo({ ...newVideo, description: e.target.value })}
                  placeholder="Descrierea videoclipului"
                />
              </div>
              <div className="space-y-2">
                <Label>Thumbnail</Label>
                <FileUpload onUpload={handleVideoThumbnailUpload} accept="image/*" />
                {newVideo.thumbnailSrc && (
                  <div className="mt-2">
                    <img
                      src={newVideo.thumbnailSrc || "/placeholder.svg"}
                      alt="Preview"
                      className="max-h-40 rounded-md"
                    />
                  </div>
                )}
              </div>
              <Button onClick={handleAddVideo} className="w-full">
                <Plus className="mr-2 h-4 w-4" /> Adaugă Videoclip
              </Button>
            </CardContent>
          </Card>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {videos.map((video) => (
              <Card key={video.id}>
                <CardContent className="p-4">
                  <div className="aspect-video relative overflow-hidden rounded-md mb-2">
                    <img
                      src={video.thumbnailSrc || "/placeholder.svg"}
                      alt={video.title}
                      className="object-cover w-full h-full"
                    />
                  </div>
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="font-medium">{video.title}</h3>
                      <p className="text-sm text-muted-foreground">{video.category}</p>
                      <p className="text-sm mt-1 line-clamp-2">{video.description}</p>
                    </div>
                    <Button variant="destructive" size="icon" onClick={() => handleDeleteVideo(video.id)}>
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        {/* Blog Tab */}
        <TabsContent value="blog" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Adaugă Articol Nou</CardTitle>
              <CardDescription>Adaugă un articol nou pe blog</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="blog-title">Titlu</Label>
                  <Input
                    id="blog-title"
                    value={newBlogPost.title}
                    onChange={(e) => setNewBlogPost({ ...newBlogPost, title: e.target.value })}
                    placeholder="Titlul articolului"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="blog-category">Categorie</Label>
                  <Select
                    value={newBlogPost.category}
                    onValueChange={(value) => setNewBlogPost({ ...newBlogPost, category: value })}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Selectează o categorie" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="tutorials">Tutoriale</SelectItem>
                      <SelectItem value="gear">Echipament</SelectItem>
                      <SelectItem value="tips">Sfaturi</SelectItem>
                      <SelectItem value="inspiration">Inspirație</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="blog-excerpt">Extras</Label>
                <Textarea
                  id="blog-excerpt"
                  value={newBlogPost.excerpt}
                  onChange={(e) => setNewBlogPost({ ...newBlogPost, excerpt: e.target.value })}
                  placeholder="Un scurt extras din articol"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="blog-content">Conținut</Label>
                <Textarea
                  id="blog-content"
                  value={newBlogPost.content}
                  onChange={(e) => setNewBlogPost({ ...newBlogPost, content: e.target.value })}
                  placeholder="Conținutul articolului"
                  className="min-h-[200px]"
                />
              </div>
              <Button onClick={handleAddBlogPost} className="w-full">
                <Plus className="mr-2 h-4 w-4" /> Adaugă Articol
              </Button>
            </CardContent>
          </Card>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {blogPosts.map((post) => (
              <Card key={post.id}>
                <CardContent className="p-4">
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="font-medium text-lg">{post.title}</h3>
                      <p className="text-sm text-muted-foreground">{post.category}</p>
                      <p className="text-sm mt-2">{post.excerpt}</p>
                    </div>
                    <div className="flex gap-2">
                      <Button variant="outline" size="icon">
                        <Edit className="h-4 w-4" />
                      </Button>
                      <Button variant="destructive" size="icon" onClick={() => handleDeleteBlogPost(post.id)}>
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        {/* Reservations Tab */}
        <TabsContent value="reservations" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Rezervări</CardTitle>
              <CardDescription>Gestionează rezervările clienților</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="rounded-md border">
                <table className="min-w-full divide-y divide-border">
                  <thead>
                    <tr className="bg-muted/50">
                      <th className="px-4 py-3 text-left text-sm font-medium">Client</th>
                      <th className="px-4 py-3 text-left text-sm font-medium">Data</th>
                      <th className="px-4 py-3 text-left text-sm font-medium">Ora</th>
                      <th className="px-4 py-3 text-left text-sm font-medium">Serviciu</th>
                      <th className="px-4 py-3 text-left text-sm font-medium">Status</th>
                      <th className="px-4 py-3 text-left text-sm font-medium">Acțiuni</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-border">
                    {reservations.length > 0 ? (
                      reservations.map((reservation) => (
                        <tr key={reservation.id}>
                          <td className="px-4 py-3 text-sm">{reservation.name}</td>
                          <td className="px-4 py-3 text-sm">{reservation.date}</td>
                          <td className="px-4 py-3 text-sm">{reservation.time}</td>
                          <td className="px-4 py-3 text-sm">{reservation.service}</td>
                          <td className="px-4 py-3 text-sm">
                            <Select
                              value={reservation.status}
                              onValueChange={(value) => handleUpdateReservationStatus(reservation.id, value)}
                            >
                              <SelectTrigger className="h-8 w-[130px]">
                                <SelectValue />
                              </SelectTrigger>
                              <SelectContent>
                                <SelectItem value="pending">În așteptare</SelectItem>
                                <SelectItem value="confirmed">Confirmată</SelectItem>
                                <SelectItem value="cancelled">Anulată</SelectItem>
                              </SelectContent>
                            </Select>
                          </td>
                          <td className="px-4 py-3 text-sm">
                            <Button variant="outline" size="sm">
                              Detalii
                            </Button>
                          </td>
                        </tr>
                      ))
                    ) : (
                      <tr>
                        <td colSpan={6} className="px-4 py-3 text-sm text-center">
                          Nu există rezervări
                        </td>
                      </tr>
                    )}
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Print Orders Tab */}
        <TabsContent value="print" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Comenzi Print</CardTitle>
              <CardDescription>Gestionează comenzile de print</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="rounded-md border">
                <table className="min-w-full divide-y divide-border">
                  <thead>
                    <tr className="bg-muted/50">
                      <th className="px-4 py-3 text-left text-sm font-medium">ID</th>
                      <th className="px-4 py-3 text-left text-sm font-medium">Client</th>
                      <th className="px-4 py-3 text-left text-sm font-medium">Produs</th>
                      <th className="px-4 py-3 text-left text-sm font-medium">Data</th>
                      <th className="px-4 py-3 text-left text-sm font-medium">Status</th>
                      <th className="px-4 py-3 text-left text-sm font-medium">Acțiuni</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-border">
                    {printOrders.map((order) => (
                      <tr key={order.id}>
                        <td className="px-4 py-3 text-sm">#{order.id}</td>
                        <td className="px-4 py-3 text-sm">{order.customer}</td>
                        <td className="px-4 py-3 text-sm">{order.product}</td>
                        <td className="px-4 py-3 text-sm">{order.date}</td>
                        <td className="px-4 py-3 text-sm">
                          <Select
                            value={order.status}
                            onValueChange={(value) => handleUpdatePrintOrderStatus(order.id, value)}
                          >
                            <SelectTrigger className="h-8 w-[130px]">
                              <SelectValue />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="În procesare">În procesare</SelectItem>
                              <SelectItem value="Finalizat">Finalizat</SelectItem>
                              <SelectItem value="Livrat">Livrat</SelectItem>
                              <SelectItem value="Anulat">Anulat</SelectItem>
                            </SelectContent>
                          </Select>
                        </td>
                        <td className="px-4 py-3 text-sm">
                          <Button variant="outline" size="sm">
                            Detalii
                          </Button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Settings Tab */}
        <TabsContent value="settings" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Setări Site</CardTitle>
              <CardDescription>Configurează setările site-ului</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="site-title">Titlu Site</Label>
                <Input id="site-title" defaultValue="Foto-Video | Spectrum" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="site-description">Descriere Site</Label>
                <Textarea id="site-description" defaultValue="Professional photography services for all your needs" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="contact-email">Email Contact</Label>
                <Input id="contact-email" type="email" defaultValue="contact@raianvisual.com" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="contact-phone">Telefon Contact</Label>
                <Input id="contact-phone" defaultValue="+40 712 345 678" />
              </div>
              <Button>Salvează Setările</Button>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}

