import type React from "react"

export const metadata = {
  title: "Admin Panel - Raian Fine Arts",
  description: "Admin panel for Raian Fine Arts website",
}

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <div className="min-h-screen bg-muted/30">{children}</div>
}

