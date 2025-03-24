"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import { format, addDays, addWeeks, subWeeks, isAfter, isBefore } from "date-fns"
import { ro } from "date-fns/locale"
import { Calendar } from "@/components/ui/calendar"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { useToast } from "@/hooks/use-toast"
import { ChevronLeft, ChevronRight, CalendarIcon, Clock, Check } from "lucide-react"

// Types
type Reservation = {
  id: string
  name: string
  email: string
  phone: string
  date: string
  time: string
  service: string
  message: string
  status: "pending" | "confirmed" | "cancelled"
}

type TimeSlot = {
  time: string
  available: boolean
}

export default function ReservationPage() {
  const { toast } = useToast()
  const router = useRouter()
  const [date, setDate] = useState<Date | undefined>(new Date())
  const [currentMonth, setCurrentMonth] = useState<Date>(new Date())
  const [selectedTime, setSelectedTime] = useState<string | null>(null)
  const [timeSlots, setTimeSlots] = useState<TimeSlot[]>([])
  const [reservations, setReservations] = useState<Reservation[]>([])
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  })

  // Services
  const services = [
    { id: "portrait", name: "Studio foto-video comercial" },
    { id: "wedding", name: "Sesiune foto-video nuntă" },
    { id: "event", name: "Studio podcast-vlogging" },
    { id: "studio", name: "Închiriere Studio foto-video" },
    { id: "product", name: "Editare și tipografie" },
  ]

  // Load reservations from localStorage
  useEffect(() => {
    const storedReservations = localStorage.getItem("prism_reservations")
    if (storedReservations) {
      setReservations(JSON.parse(storedReservations))
    }
  }, [])

  // Generate time slots for selected date
  useEffect(() => {
    if (!date) return

    // Business hours: 10 AM to 6 PM
    const slots: TimeSlot[] = []
    const startHour = 10
    const endHour = 18

    // Generate hourly slots
    for (let hour = startHour; hour < endHour; hour++) {
      const timeString = `${hour}:00`

      // Check if this slot is already booked
      const isBooked = reservations.some(
        (res) => res.date === format(date, "yyyy-MM-dd") && res.time === timeString && res.status !== "cancelled",
      )

      slots.push({
        time: timeString,
        available: !isBooked,
      })
    }

    setTimeSlots(slots)
    setSelectedTime(null) // Reset selected time when date changes
  }, [date, reservations])

  // Handle form input changes
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  // Handle service selection
  const handleServiceChange = (value: string) => {
    setFormData((prev) => ({ ...prev, service: value }))
  }

  // Handle time slot selection
  const handleTimeSelection = (time: string) => {
    setSelectedTime(time)
  }

  // Handle form submission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    if (!date || !selectedTime) {
      toast({
        title: "Eroare",
        description: "Vă rugăm să selectați data și ora",
        variant: "destructive",
      })
      return
    }

    if (!formData.name || !formData.email || !formData.phone || !formData.service) {
      toast({
        title: "Eroare",
        description: "Vă rugăm să completați toate câmpurile obligatorii",
        variant: "destructive",
      })
      return
    }

    // Create new reservation
    const newReservation: Reservation = {
      id: Date.now().toString(),
      name: formData.name,
      email: formData.email,
      phone: formData.phone,
      date: format(date, "yyyy-MM-dd"),
      time: selectedTime,
      service: formData.service,
      message: formData.message,
      status: "pending",
    }

    // Add to reservations
    const updatedReservations = [...reservations, newReservation]
    setReservations(updatedReservations)

    // Save to localStorage
    localStorage.setItem("prism_reservations", JSON.stringify(updatedReservations))

    // Show success message
    toast({
      title: "Rezervare efectuată cu succes!",
      description: "Veți primi un email de confirmare în curând.",
    })

    // Reset form
    setFormData({
      name: "",
      email: "",
      phone: "",
      service: "",
      message: "",
    })
    setDate(new Date())
    setSelectedTime(null)

    // Redirect to confirmation page (could be implemented in the future)
    // router.push("/rezervari/confirmare")
  }

  // Navigate to previous month
  const previousMonth = () => {
    setCurrentMonth(subWeeks(currentMonth, 4))
  }

  // Navigate to next month
  const nextMonth = () => {
    setCurrentMonth(addWeeks(currentMonth, 4))
  }

  // Disable past dates and weekends
  const isDateDisabled = (date: Date) => {
    const today = new Date()
    today.setHours(0, 0, 0, 0)

    // Disable past dates
    if (isBefore(date, today)) {
      return true
    }

    // Disable dates more than 3 months in the future
    const threeMonthsLater = addDays(today, 90)
    if (isAfter(date, threeMonthsLater)) {
      return true
    }

    // Disable Sundays (0 is Sunday in JavaScript)
    return date.getDay() === 0
  }

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="mb-12 text-center">
        <h1 className="mb-4 text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Rezervări online</h1>
        <p className="mx-auto max-w-[700px] text-muted-foreground md:text-lg">
          Rezervă o ședință foto sau închiriază studioul nostru în câțiva pași simpli.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Calendar Section */}
        <Card>
          <CardHeader>
            <CardTitle>Selectează data și ora</CardTitle>
            <CardDescription>Alege data și intervalul orar dorit pentru rezervarea ta.</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              {/* Calendar Navigation */}
              <div className="flex items-center justify-between">
                <Button variant="outline" size="icon" onClick={previousMonth}>
                  <ChevronLeft className="h-4 w-4" />
                </Button>
                <h2 className="text-lg font-medium">{format(currentMonth, "MMMM yyyy", { locale: ro })}</h2>
                <Button variant="outline" size="icon" onClick={nextMonth}>
                  <ChevronRight className="h-4 w-4" />
                </Button>
              </div>

              {/* Calendar */}
              <Calendar
                mode="single"
                selected={date}
                onSelect={setDate}
                month={currentMonth}
                onMonthChange={setCurrentMonth}
                disabled={isDateDisabled}
                className="rounded-md border"
                locale={ro}
              />

              {/* Time Slots */}
              {date && (
                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <CalendarIcon className="h-5 w-5 text-primary" />
                    <span className="font-medium">{format(date, "EEEE, d MMMM yyyy", { locale: ro })}</span>
                  </div>

                  <div className="grid grid-cols-3 gap-2">
                    {timeSlots.map((slot) => (
                      <Button
                        key={slot.time}
                        variant={selectedTime === slot.time ? "default" : "outline"}
                        className={`flex items-center gap-2 ${!slot.available ? "opacity-50 cursor-not-allowed" : ""}`}
                        onClick={() => slot.available && handleTimeSelection(slot.time)}
                        disabled={!slot.available}
                      >
                        <Clock className="h-4 w-4" />
                        {slot.time}
                      </Button>
                    ))}
                  </div>

                  <div className="flex items-center gap-4 text-sm">
                    <div className="flex items-center gap-1">
                      <div className="h-3 w-3 rounded-full bg-primary"></div>
                      <span>Disponibil</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <div className="h-3 w-3 rounded-full bg-muted"></div>
                      <span>Rezervat</span>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </CardContent>
        </Card>

        {/* Reservation Form */}
        <Card>
          <CardHeader>
            <CardTitle>Detalii rezervare</CardTitle>
            <CardDescription>Completează informațiile necesare pentru a finaliza rezervarea.</CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="name">Nume complet *</Label>
                <Input
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder="Numele și prenumele"
                  required
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="email">Email *</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="email@exemplu.com"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phone">Telefon *</Label>
                  <Input
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    placeholder="+40 712 345 678"
                    required
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="service">Serviciu *</Label>
                <Select value={formData.service} onValueChange={handleServiceChange} required>
                  <SelectTrigger id="service">
                    <SelectValue placeholder="Selectează un serviciu" />
                  </SelectTrigger>
                  <SelectContent>
                    {services.map((service) => (
                      <SelectItem key={service.id} value={service.id}>
                        {service.name}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="message">Mesaj (opțional)</Label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder="Detalii suplimentare despre rezervarea ta..."
                  rows={4}
                />
              </div>

              {date && selectedTime && (
                <div className="p-3 bg-muted rounded-lg">
                  <p className="font-medium">Rezumat rezervare:</p>
                  <div className="flex items-center gap-2 mt-2">
                    <CalendarIcon className="h-4 w-4 text-primary" />
                    <span>{format(date, "EEEE, d MMMM yyyy", { locale: ro })}</span>
                  </div>
                  <div className="flex items-center gap-2 mt-1">
                    <Clock className="h-4 w-4 text-primary" />
                    <span>Ora {selectedTime}</span>
                  </div>
                  {formData.service && (
                    <div className="flex items-center gap-2 mt-1">
                      <Check className="h-4 w-4 text-primary" />
                      <span>{services.find((s) => s.id === formData.service)?.name || formData.service}</span>
                    </div>
                  )}
                </div>
              )}
            </form>
          </CardContent>
          <CardFooter>
            <Button
              type="submit"
              className="w-full"
              onClick={handleSubmit}
              disabled={
                !date || !selectedTime || !formData.name || !formData.email || !formData.phone || !formData.service
              }
            >
              Finalizează rezervarea
            </Button>
          </CardFooter>
        </Card>
      </div>

      {/* Information Section */}
      <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card>
          <CardContent className="p-6 flex flex-col items-center text-center">
            <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center text-primary mb-4">
              <CalendarIcon className="h-6 w-6" />
            </div>
            <h3 className="text-lg font-medium mb-2">Program de lucru</h3>
            <ul className="space-y-1 text-muted-foreground">
              <li>Luni - Vineri: 10:00 - 18:00</li>
              <li>Sâmbătă: 12:00 - 16:00</li>
              <li>Duminică: Închis</li>
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6 flex flex-col items-center text-center">
            <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center text-primary mb-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-6 w-6"
              >
                <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" />
                <polyline points="14 2 14 8 20 8" />
                <line x1="16" y1="13" x2="8" y2="13" />
                <line x1="16" y1="17" x2="8" y2="17" />
                <line x1="10" y1="9" x2="8" y2="9" />
              </svg>
            </div>
            <h3 className="text-lg font-medium mb-2">Politica de rezervare</h3>
            <ul className="space-y-1 text-muted-foreground">
              <li>Rezervare cu minim 48h înainte</li>
              <li>Anulare gratuită cu 48h înainte</li>
              <li>Confirmare prin email</li>
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6 flex flex-col items-center text-center">
            <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center text-primary mb-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-6 w-6"
              >
                <circle cx="12" cy="12" r="10" />
                <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" />
                <line x1="12" y1="17" x2="12.01" y2="17" />
              </svg>
            </div>
            <h3 className="text-lg font-medium mb-2">Ai întrebări?</h3>
            <p className="text-muted-foreground mb-4">
              Pentru orice nelămurire sau cerere specială, nu ezita să ne contactezi.
            </p>
            <Button variant="outline" asChild>
              <a href="/contact">Contactează-ne</a>
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

