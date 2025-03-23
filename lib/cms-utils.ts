// This is a simple client-side CMS utility
// In a production environment, you would use a real database or CMS system

// Types
export type Photo = {
  id: number
  title: string
  category: string
  src: string
  width?: number
  height?: number
}

export type Video = {
  id: number
  title: string
  description: string
  category: string
  thumbnailSrc: string
  videoSrc?: string
  duration?: string
  date?: string
  views?: string
}

export type BlogPost = {
  id: number
  title: string
  excerpt: string
  content: string
  category: string
  image?: string
  author?: string
  date?: string
  readTime?: string
}

export type PrintOrder = {
  id: number
  customer: string
  product: string
  status: string
  date: string
  details?: string
}

export type Reservation = {
  id: string
  name: string
  email: string
  phone: string
  date: string
  time: string
  service: string
  message?: string
  status: "pending" | "confirmed" | "cancelled"
}

// Local storage keys
const STORAGE_KEYS = {
  PHOTOS: "raian_cms_photos",
  VIDEOS: "raian_cms_videos",
  BLOG_POSTS: "raian_cms_blog_posts",
  PRINT_ORDERS: "raian_cms_print_orders",
  RESERVATIONS: "raian_cms_reservations",
  AUTH: "cms_auth",
}

// Initial data
const initialPhotos: Photo[] = [
  { id: 1, title: "Portret în studio", category: "portraits", src: "/placeholder.svg?height=600&width=400" },
  { id: 2, title: "Peisaj montan", category: "landscapes", src: "/placeholder.svg?height=400&width=600" },
  { id: 3, title: "Nuntă de vară", category: "weddings", src: "/placeholder.svg?height=500&width=400" },
]

const initialVideos: Video[] = [
  {
    id: 1,
    title: "Tutorial de editare în Lightroom",
    description: "Învață bazele editării fotografiilor în Adobe Lightroom",
    category: "tutorials",
    thumbnailSrc: "/placeholder.svg?height=720&width=1280",
  },
  {
    id: 2,
    title: "Călătorie fotografică în munții Carpați",
    description: "Vino cu mine într-o aventură de 3 zile",
    category: "travel",
    thumbnailSrc: "/placeholder.svg?height=720&width=1280",
  },
]

const initialBlogPosts: BlogPost[] = [
  {
    id: 1,
    title: "10 Sfaturi pentru o Fotografii de Portret Mai Bună",
    excerpt: "Învață cum să surprinzi portrete uimitoare cu aceste sfaturi profesionale.",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    category: "tutorials",
  },
  {
    id: 2,
    title: "Cel Mai Bun Echipament Foto pentru Începători",
    excerpt: "Un ghid complet pentru alegerea primului tău set de cameră profesională.",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    category: "gear",
  },
]

const initialPrintOrders: PrintOrder[] = [
  {
    id: 1,
    customer: "Ana Popescu",
    product: "Album Foto 30x30",
    status: "În procesare",
    date: "2023-05-15",
  },
  {
    id: 2,
    customer: "Mihai Ionescu",
    product: "Printuri Fine Art 5x",
    status: "Finalizat",
    date: "2023-05-10",
  },
]

// Helper functions
export const initCMS = () => {
  if (typeof window === "undefined") return

  // Initialize photos if not exist
  if (!localStorage.getItem(STORAGE_KEYS.PHOTOS)) {
    localStorage.setItem(STORAGE_KEYS.PHOTOS, JSON.stringify(initialPhotos))
  }

  // Initialize videos if not exist
  if (!localStorage.getItem(STORAGE_KEYS.VIDEOS)) {
    localStorage.setItem(STORAGE_KEYS.VIDEOS, JSON.stringify(initialVideos))
  }

  // Initialize blog posts if not exist
  if (!localStorage.getItem(STORAGE_KEYS.BLOG_POSTS)) {
    localStorage.setItem(STORAGE_KEYS.BLOG_POSTS, JSON.stringify(initialBlogPosts))
  }

  // Initialize print orders if not exist
  if (!localStorage.getItem(STORAGE_KEYS.PRINT_ORDERS)) {
    localStorage.setItem(STORAGE_KEYS.PRINT_ORDERS, JSON.stringify(initialPrintOrders))
  }
}

// Photos CRUD
export const getPhotos = (): Photo[] => {
  if (typeof window === "undefined") return initialPhotos

  const photos = localStorage.getItem(STORAGE_KEYS.PHOTOS)
  return photos ? JSON.parse(photos) : initialPhotos
}

export const addPhoto = (photo: Omit<Photo, "id">): Photo => {
  const photos = getPhotos()
  const newId = photos.length > 0 ? Math.max(...photos.map((p) => p.id)) + 1 : 1
  const newPhoto = { ...photo, id: newId }

  localStorage.setItem(STORAGE_KEYS.PHOTOS, JSON.stringify([...photos, newPhoto]))
  return newPhoto
}

export const updatePhoto = (photo: Photo): Photo => {
  const photos = getPhotos()
  const updatedPhotos = photos.map((p) => (p.id === photo.id ? photo : p))

  localStorage.setItem(STORAGE_KEYS.PHOTOS, JSON.stringify(updatedPhotos))
  return photo
}

export const deletePhoto = (id: number): void => {
  const photos = getPhotos()
  const filteredPhotos = photos.filter((p) => p.id !== id)

  localStorage.setItem(STORAGE_KEYS.PHOTOS, JSON.stringify(filteredPhotos))
}

// Videos CRUD
export const getVideos = (): Video[] => {
  if (typeof window === "undefined") return initialVideos

  const videos = localStorage.getItem(STORAGE_KEYS.VIDEOS)
  return videos ? JSON.parse(videos) : initialVideos
}

export const addVideo = (video: Omit<Video, "id">): Video => {
  const videos = getVideos()
  const newId = videos.length > 0 ? Math.max(...videos.map((v) => v.id)) + 1 : 1
  const newVideo = { ...video, id: newId }

  localStorage.setItem(STORAGE_KEYS.VIDEOS, JSON.stringify([...videos, newVideo]))
  return newVideo
}

export const updateVideo = (video: Video): Video => {
  const videos = getVideos()
  const updatedVideos = videos.map((v) => (v.id === video.id ? video : v))

  localStorage.setItem(STORAGE_KEYS.VIDEOS, JSON.stringify(updatedVideos))
  return video
}

export const deleteVideo = (id: number): void => {
  const videos = getVideos()
  const filteredVideos = videos.filter((v) => v.id !== id)

  localStorage.setItem(STORAGE_KEYS.VIDEOS, JSON.stringify(filteredVideos))
}

// Blog posts CRUD
export const getBlogPosts = (): BlogPost[] => {
  if (typeof window === "undefined") return initialBlogPosts

  const posts = localStorage.getItem(STORAGE_KEYS.BLOG_POSTS)
  return posts ? JSON.parse(posts) : initialBlogPosts
}

export const addBlogPost = (post: Omit<BlogPost, "id">): BlogPost => {
  const posts = getBlogPosts()
  const newId = posts.length > 0 ? Math.max(...posts.map((p) => p.id)) + 1 : 1
  const newPost = { ...post, id: newId }

  localStorage.setItem(STORAGE_KEYS.BLOG_POSTS, JSON.stringify([...posts, newPost]))
  return newPost
}

export const updateBlogPost = (post: BlogPost): BlogPost => {
  const posts = getBlogPosts()
  const updatedPosts = posts.map((p) => (p.id === post.id ? post : p))

  localStorage.setItem(STORAGE_KEYS.BLOG_POSTS, JSON.stringify(updatedPosts))
  return post
}

export const deleteBlogPost = (id: number): void => {
  const posts = getBlogPosts()
  const filteredPosts = posts.filter((p) => p.id !== id)

  localStorage.setItem(STORAGE_KEYS.BLOG_POSTS, JSON.stringify(filteredPosts))
}

// Print orders CRUD
export const getPrintOrders = (): PrintOrder[] => {
  if (typeof window === "undefined") return initialPrintOrders

  const orders = localStorage.getItem(STORAGE_KEYS.PRINT_ORDERS)
  return orders ? JSON.parse(orders) : initialPrintOrders
}

export const addPrintOrder = (order: Omit<PrintOrder, "id">): PrintOrder => {
  const orders = getPrintOrders()
  const newId = orders.length > 0 ? Math.max(...orders.map((o) => o.id)) + 1 : 1
  const newOrder = { ...order, id: newId }

  localStorage.setItem(STORAGE_KEYS.PRINT_ORDERS, JSON.stringify([...orders, newOrder]))
  return newOrder
}

export const updatePrintOrder = (order: PrintOrder): PrintOrder => {
  const orders = getPrintOrders()
  const updatedOrders = orders.map((o) => (o.id === order.id ? order : o))

  localStorage.setItem(STORAGE_KEYS.PRINT_ORDERS, JSON.stringify(updatedOrders))
  return order
}

export const deletePrintOrder = (id: number): void => {
  const orders = getPrintOrders()
  const filteredOrders = orders.filter((o) => o.id !== id)

  localStorage.setItem(STORAGE_KEYS.PRINT_ORDERS, JSON.stringify(filteredOrders))
}

// Authentication
export const isAuthenticated = (): boolean => {
  if (typeof window === "undefined") return false
  return localStorage.getItem(STORAGE_KEYS.AUTH) === "true"
}

export const login = (username: string, password: string): boolean => {
  // Simple authentication - in a real app, this would be handled securely
  if (username === "admin" && password === "123pass123word123!!") {
    localStorage.setItem(STORAGE_KEYS.AUTH, "true")
    return true
  }
  return false
}

export const logout = (): void => {
  localStorage.removeItem(STORAGE_KEYS.AUTH)
}

