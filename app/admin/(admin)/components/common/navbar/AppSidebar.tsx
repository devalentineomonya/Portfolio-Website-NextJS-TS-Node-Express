"use client";
import * as React from "react";
import { NavMain } from "@/app/admin/(admin)/components/common/navbar/NavMain";
import { NavProjects } from "@/app/admin/(admin)/components/common/navbar/NavProjects";
import { NavUser } from "@/app/admin/(admin)/components/common/navbar/NavUser";
import { TeamSwitcher } from "@/app/admin/(admin)/components/common/navbar/TeamSwitcher";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarRail,
} from "@/components/ui/sidebar";
import { sidebarData } from "./sidebarItems";

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader>
        <TeamSwitcher teams={sidebarData.teams} />
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={sidebarData.navMain} />
        <NavProjects projects={sidebarData.projects} />
      </SidebarContent>
      <SidebarFooter>
        <NavUser />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  );
}
