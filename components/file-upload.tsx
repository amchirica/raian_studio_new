"use client"

import type React from "react"

import { useState, useRef } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { X, Upload } from "lucide-react"

interface FileUploadProps {
  onFileSelect: (file: File, previewUrl: string) => void
  accept?: string
  maxSizeMB?: number
  label?: string
  className?: string
}

export function FileUpload({
  onFileSelect,
  accept = "image/*",
  maxSizeMB = 5,
  label = "Încarcă fișier",
  className = "",
}: FileUploadProps) {
  const [preview, setPreview] = useState<string | null>(null)
  const [error, setError] = useState<string | null>(null)
  const inputRef = useRef<HTMLInputElement>(null)

  const maxSizeBytes = maxSizeMB * 1024 * 1024

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setError(null)

    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0]

      // Check file size
      if (file.size > maxSizeBytes) {
        setError(`Fișierul este prea mare. Dimensiunea maximă este de ${maxSizeMB}MB.`)
        return
      }

      // Create preview
      const reader = new FileReader()
      reader.onloadend = () => {
        const result = reader.result as string
        setPreview(result)
        onFileSelect(file, result)
      }
      reader.readAsDataURL(file)
    }
  }

  const clearFile = () => {
    setPreview(null)
    setError(null)
    if (inputRef.current) {
      inputRef.current.value = ""
    }
  }

  return (
    <div className={`space-y-2 ${className}`}>
      <Label htmlFor="file-upload">{label}</Label>
      <div className="grid gap-2">
        <div className="flex items-center gap-2">
          <Input
            ref={inputRef}
            id="file-upload"
            type="file"
            accept={accept}
            onChange={handleFileChange}
            className="flex-1"
          />
          {preview && (
            <Button variant="destructive" size="icon" onClick={clearFile} type="button">
              <X className="h-4 w-4" />
            </Button>
          )}
        </div>

        {error && <p className="text-sm text-destructive">{error}</p>}

        {preview && accept.includes("image") && (
          <div className="relative aspect-square w-full max-w-[200px] overflow-hidden rounded-md border">
            <Image src={preview || "/placeholder.svg"} alt="Preview" fill className="object-cover" />
          </div>
        )}

        {!preview && (
          <div className="border-2 border-dashed rounded-md p-6 text-center text-muted-foreground">
            <Upload className="h-8 w-8 mx-auto mb-2" />
            <p className="text-sm">Trage și plasează fișierul aici sau apasă pentru a selecta</p>
            <p className="text-xs mt-1">Dimensiune maximă: {maxSizeMB}MB</p>
          </div>
        )}
      </div>
    </div>
  )
}

