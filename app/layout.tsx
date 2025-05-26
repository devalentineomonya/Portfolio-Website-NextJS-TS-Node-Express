import type { Metadata } from "next";
import { Rubik } from "next/font/google";
import { ThemeProvider } from "@/providers/theme-provider";
import "./globals.css";
import { Navbar } from "@/components/navbar/navbar";
import Footer from "@/components/footer/footer";
import { Toaster } from "@/components/ui/sonner";

const rubik = Rubik({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Valentine Omonya | Software Engineer",
  description:
    "Valentine Omonya is a Software Engineer specializing in Python and JavaScript, building intuitive web and mobile applications with a focus on user experience and problem-solving.",
  creator: "Valentine Omonya",
  keywords: [
    "Valentine Omonya",
    "Software Engineer",
    "Python",
    "JavaScript",
    "Web Development",
    "Mobile Development",
    "User Experience",
    "Problem Solving",
  ],
  manifest: "/manifest.json",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`antialiased ${rubik.className}`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Navbar />
          {children}
          <Footer />
          <Toaster position="top-center" richColors />
        </ThemeProvider>
      </body>
    </html>
  );
}
