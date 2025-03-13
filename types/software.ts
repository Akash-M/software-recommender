import type { ReactNode } from "react"

export type Domain = "web" | "mobile" | "desktop" | "cloud" | "iot"

export interface Software {
  id: number
  name: string
  category: "frontend" | "backend" | "infrastructure"
  description: string
  stars: number
  downloads: string
  icon: ReactNode
  domains: Domain[]
}

