import { Database } from "lucide-react"
import type { Software } from "@/types/software"

export const backendData: Software[] = [
  {
    id: 3,
    name: "Express",
    category: "backend",
    description: "Fast, unopinionated, minimalist web framework for Node.js",
    stars: 60000,
    downloads: "20M+",
    icon: <Database className="h-5 w-5" />,
    domains: ["web"],
  },
  {
    id: 4,
    name: "Django",
    category: "backend",
    description: "The web framework for perfectionists with deadlines",
    stars: 68000,
    downloads: "5M+",
    icon: <Database className="h-5 w-5" />,
    domains: ["web"],
  },
]

