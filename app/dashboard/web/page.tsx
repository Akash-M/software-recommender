import { softwareData } from "@/src/data/domain/web"
import { SoftwareTable } from "@/components/software-table"

export default function WebDomainPage() {
  return (
    <div className="w-full space-y-6">
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div>
          <h2 className="text-2xl font-bold tracking-tight">Web Domain</h2>
          <p className="text-muted-foreground">Explore software tools and libraries for web development</p>
        </div>
      </div>

      <SoftwareTable
        data={softwareData}
        title="Web Technologies"
        description="Browse and filter through our curated list of web development tools and libraries"
      />
    </div>
  )
}

