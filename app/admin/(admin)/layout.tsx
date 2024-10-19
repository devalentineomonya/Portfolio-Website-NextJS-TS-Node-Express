import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/app-sidebar";

export default function DashboardLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body
                className={`antialiased font-grotesk`}
            >
                <SidebarProvider>
                    <AppSidebar />
                    <main className=" min-h-screen flex-1 w-full">
                        <header className="h-10 w-full flex justify-between items-center px-2 bg-red-500">
                            <SidebarTrigger />
                            <div></div>
                        </header>
                        <div className="p-4">
                            {children}
                        </div>
                    </main>

                </SidebarProvider>

            </body>
        </html>
    );
}
