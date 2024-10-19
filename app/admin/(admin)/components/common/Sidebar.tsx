import React from 'react'
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@radix-ui/react-dropdown-menu'
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { ChevronsUpDown, User } from 'lucide-react'
const AdminSidebar = () => {
  return (
    <Sidebar className='shadow-md'>
      <SidebarHeader>
        <SidebarMenu className='bg-gray-100 py-1 rounded-md'>
          <SidebarMenuItem>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <SidebarMenuButton>
                  <User /> Username
                  <ChevronsUpDown className="ml-auto" />
                </SidebarMenuButton>
              </DropdownMenuTrigger>
              <DropdownMenuContent
                side="right"
                className="w-56 min-h-32 bg-white shadow-md ml-3 px-1 py-2 flex flex-col justify-between"
              >
                <DropdownMenuItem className='py-1 hover:bg-gray-100 px-2  rounded-md '>
                  <span>Account</span>
                </DropdownMenuItem>
                <DropdownMenuItem className='py-1 hover:bg-gray-100 px-2  rounded-md '>
                  <span>Billing</span>
                </DropdownMenuItem>
                <DropdownMenuItem className='py-1 hover:bg-gray-100 px-2  rounded-md '>
                  <span>Sign out</span>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          {/* Add navigation links or other content here */}
        </SidebarGroup>
        <SidebarGroup>
          {/* Add additional sidebar groups here */}
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter >
        <SidebarMenu className='bg-gray-100 py-1 rounded-md'>
          <SidebarMenuItem>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <SidebarMenuButton>
                  <Avatar className='aspect-square h-10'>
                    <AvatarImage src="https://github.com/shadcn.png" width={10} height={10} />
                    <AvatarFallback>CN</AvatarFallback>
                  </Avatar>

                  <ChevronsUpDown className="ml-auto" />
                </SidebarMenuButton>
              </DropdownMenuTrigger>
              <DropdownMenuContent
                side="right"
                className="w-56 min-h-32 bg-white shadow-md ml-3 px-1 py-2 flex flex-col justify-between"
              >
                <DropdownMenuItem className='py-1 hover:bg-gray-100 px-2  rounded-md '>
                  <span>Account</span>
                </DropdownMenuItem>
                <DropdownMenuItem className='py-1 hover:bg-gray-100 px-2  rounded-md '>
                  <span>Billing</span>
                </DropdownMenuItem>
                <DropdownMenuItem className='py-1 hover:bg-gray-100 px-2  rounded-md '>
                  <span>Sign out</span>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>
    </Sidebar>
  )
}

export default AdminSidebar
