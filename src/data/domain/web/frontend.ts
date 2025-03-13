import { Code } from "lucide-react"
import type { Software } from "@/types/software"

export const frontendData: Software[] = [
  {
    id: 1,
    name: "React",
    category: "frontend",
    description: "A JavaScript library for building user interfaces",
    stars: 203000,
    downloads: "15M+",
    icon: `<Code className="h-5 w-5" />`,
    domains: ["web", "mobile"],
  },
  {
    id: 2,
    name: "Next.js",
    category: "frontend",
    description: "The React framework for production",
    stars: 108000,
    downloads: "8M+",
    icon: `<Code className="h-5 w-5" />`,
    domains: ["web"],
  },
]

