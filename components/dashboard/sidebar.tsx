"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { ChevronDown, Code, Database, Globe, Layers } from "lucide-react"
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
  SidebarRail,
} from "@/components/ui/sidebar"

export function DashboardSidebar() {
  const pathname = usePathname()

  const isActive = (path: string) => {
    return pathname === path
  }

  // Check if any path under web is active
  const isWebActive = pathname.includes("/dashboard/web")

  return (
    <Sidebar variant="floating" collapsible="icon" className="pt-16">
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Domains</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              <SidebarMenuItem>
                <SidebarMenuButton asChild isActive={isWebActive}>
                  <Link href="/dashboard/web">
                    <Globe className="h-4 w-4" />
                    <span>Web</span>
                    <ChevronDown className="ml-auto h-4 w-4" />
                  </Link>
                </SidebarMenuButton>
                <SidebarMenuSub>
                  <SidebarMenuSubItem>
                    <SidebarMenuSubButton asChild isActive={isActive("/dashboard/web/frontend")}>
                      <Link href="/dashboard/web/frontend">
                        <Code className="h-4 w-4 mr-2" />
                        Frontend
                      </Link>
                    </SidebarMenuSubButton>
                  </SidebarMenuSubItem>
                  <SidebarMenuSubItem>
                    <SidebarMenuSubButton asChild isActive={isActive("/dashboard/web/backend")}>
                      <Link href="/dashboard/web/backend">
                        <Database className="h-4 w-4 mr-2" />
                        Backend
                      </Link>
                    </SidebarMenuSubButton>
                  </SidebarMenuSubItem>
                  <SidebarMenuSubItem>
                    <SidebarMenuSubButton asChild isActive={isActive("/dashboard/web/infrastructure")}>
                      <Link href="/dashboard/web/infrastructure">
                        <Layers className="h-4 w-4 mr-2" />
                        Infrastructure
                      </Link>
                    </SidebarMenuSubButton>
                  </SidebarMenuSubItem>
                </SidebarMenuSub>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarRail />
    </Sidebar>
  )
}

