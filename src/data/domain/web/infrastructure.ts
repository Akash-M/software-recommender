import { Layers } from "lucide-react"
import type { Software } from "@/types/software"

export const infrastructureData: Software[] = [
  {
    id: 5,
    name: "Docker",
    category: "infrastructure",
    description: "Empowering App Development for Developers",
    stars: 73000,
    downloads: "12M+",
    icon: <Layers className="h-5 w-5" />,
    domains: ["web", "cloud"],
  },
  {
    id: 6,
    name: "Kubernetes",
    category: "infrastructure",
    description: "Production-Grade Container Orchestration",
    stars: 98000,
    downloads: "7M+",
    icon: <Layers className="h-5 w-5" />,
    domains: ["web", "cloud"],
  },
]

