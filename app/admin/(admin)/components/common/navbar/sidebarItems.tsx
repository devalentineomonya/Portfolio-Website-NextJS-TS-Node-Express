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

 export  const sidebarData = {
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