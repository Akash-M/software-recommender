import { backendData } from "@/src/data/domain/web"
import { SoftwareTable } from "@/components/software-table"

export default function BackendPage() {
  return (
    <div className="w-full space-y-6">
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div>
          <h2 className="text-2xl font-bold tracking-tight">Backend Technologies</h2>
          <p className="text-muted-foreground">Explore backend tools and libraries for web development</p>
        </div>
      </div>

      <SoftwareTable
        data={backendData}
        title="Backend Technologies"
        description="Browse and filter through our curated list of backend development tools and libraries"
      />
    </div>
  )
}

