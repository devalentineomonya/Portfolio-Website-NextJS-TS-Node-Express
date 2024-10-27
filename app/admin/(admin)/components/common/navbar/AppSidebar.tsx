"use client";
import * as React from "react";
import { NavMain } from "./NavMain";
import { NavProjects } from "./nav-projects";
import { TeamSwitcher } from "./TeamSwitcher";
import NavUserWrapper from "./NavUserWrapper";
import { sidebarData } from "./sidebarItems";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarRail,
} from "@/components/ui/sidebar";

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
        <NavUserWrapper />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  );
}
