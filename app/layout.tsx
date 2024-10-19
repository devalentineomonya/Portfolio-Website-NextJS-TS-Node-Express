import type { Metadata } from "next";
import React from "react";
import localFont from "next/font/local";
import "./globals.css";
import Navbar from "@/components/common/navbar/Navbar";
import Footer from "@/components/common/footer/Footer";
import SocialLinks from "@/components/common/socialLinks/SocialLinks";
import NetworkStatus from "@/components/common/NetworkStatus/NetworkStatus";
import PWAInstallButton from "@/components/common/PWAInstallButton/PWAInstallButton";
import RegisterWorker from "@/components/common/RegisterWorker/RegisterWorker";

import { ToastContainer } from "react-toastify";



export const metadata: Metadata = {
  title: "Valentine Omonya | Software Engineer",
  description:
    "Explore the work of Valentine Omonya, a passionate Software Engineer specializing in web and mobile development. Discover innovative projects showcasing expertise in Python, JavaScript, PHP, and React, all crafted with a focus on user experience and creative problem-solving",
  creator: "Valentine Omonya",
  keywords:
    "Valentine Omonya, Omonya, Valentine, valentine omonya, valentine mutinda, devalentine,Devalentine, devalentin.me, devalentine .me, devalentine me, devalentine omonya, devalenthcohen, deval enth cohen, devalenthcohen.inpynb.dev, deval enth cohen.ipynb.dev, devalenthcohen ipynb.dev, Software Engineer, Python, JavaScript, PHP, React, Web Development, Mobile Development, User Experience, Creative Problem-Solving",
  manifest: "/manifest.json",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`antialiased font-grotesk`}
      >
        <ToastContainer/>
        <NetworkStatus />
        {process.env.NODE_ENV === "production" && <RegisterWorker />}
        <Navbar />
        <SocialLinks />
        <PWAInstallButton />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
