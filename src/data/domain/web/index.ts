import { frontendData } from "./frontend"
import { backendData } from "./backend"
import { infrastructureData } from "./infrastructure"
import type { Software } from "@/types/software"

// Export individual category data
export { frontendData, backendData, infrastructureData }

// Export combined data for convenience
export const softwareData: Software[] = [...frontendData, ...backendData, ...infrastructureData]

