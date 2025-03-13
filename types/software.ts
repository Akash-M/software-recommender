import type React from "react"
export interface Software {
  id: number
  name: string
  category: "frontend" | "backend" | "infrastructure"
  description: string
  stars: number
  downloads: string
  icon: React.ReactNode
}

