"use client"

import * as React from "react"
import {
  BookOpen,
  Car,
  Clapperboard,
  FolderGit2,
  GalleryVerticalEnd,
  Home,
  Settings2,
  ShoppingBag,
} from "lucide-react"

import { NavMain } from "@/components/nav-main"
import { NavProjects } from "@/components/nav-projects"
import { NavUser } from "@/components/nav-user"
import { TeamSwitcher } from "@/components/team-switcher"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarRail,
} from "@/components/ui/sidebar"

// This is sample data.
const data = {
  user: {
    name: "shadcn",
    email: "m@example.com",
    avatar: "/avatars/shadcn.jpg",
  },
  teams: [
    {
      name: "Devalentine",
      logo: GalleryVerticalEnd,
      plan: "Owner",
    },
    
  ],
  navMain: [
    {
      title: "Home",
      url: "#",
      icon: Home,
      isActive: true,
      items: [
        {
          title: "Dashboard",
          url: "#",
        },
        {
          title: "Visitors",
          url: "#",
        },
        {
          title: "Link Clicks",
          url: "#",
        },
      ],
    },
    {
      title: "Projects",
      url: "#",
      icon: FolderGit2,
      items: [
        {
          title: "Add Project",
          url: "#",
        },
        {
          title: "View Projects",
          url: "#",
        },
        {
          title: "Projects Stats",
          url: "#",
        },
      ],
    },
    {
      title: "Blogs",
      url: "#",
      icon: BookOpen,
      items: [
        {
          title: "Add Blog",
          url: "#",
        },
        {
          title: "All Blogs",
          url: "#",
        },
        {
          title: "Blogs Stats",
          url: "#",
        },
      ],
    },
    {
      title: "Settings",
      url: "#",
      icon: Settings2,
      items: [
        {
          title: "General",
          url: "#",
        },
        {
          title: "Preference",
          url: "#",
        },
      ],
    },
  ],
  projects: [
    {
      name: "DevalShopping Cart",
      url: "#",
      icon: ShoppingBag ,
    },
    {
      name: "DevalRide Hire",
      url: "#",
      icon: Car,
    },
    {
      name: "DevalCinemaz",
      url: "#",
      icon: Clapperboard ,
    },
  ],
}

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader>
        <TeamSwitcher teams={data.teams} />
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={data.navMain} />
        <NavProjects projects={data.projects} />
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={data.user} />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  )
}
