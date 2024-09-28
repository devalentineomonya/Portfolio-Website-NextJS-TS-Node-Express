import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Navbar from "@/components/common/navbar/Navbar";
import Footer from "@/components/common/footer/Footer";
import SocialLinks from "@/components/common/socialLinks/SocialLinks";
import Head from "next/head";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});


export const metadata: Metadata = {
  title: "Valentine Omonya | Software Engineer",
  description:
    "Explore the work of Valentine Omonya, a passionate Software Engineer specializing in web and mobile development. Discover innovative projects showcasing expertise in Python, JavaScript, PHP, and React, all crafted with a focus on user experience and creative problem-solving",
creator: "Valentine Omonya",
keywords: "Valentine Omonya, Omonya, Valentine, valentine omonya, valentine mutinda, devalentine, devalentine omonya, devalenthcohen, deval enth cohen, devalenthcohen.inpynb.dev, deval enth cohen.ipynb.dev, devalenthcohen ipynb.dev, Software Engineer, Python, JavaScript, PHP, React, Web Development, Mobile Development, User Experience, Creative Problem-Solving",


  };


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (

    <html lang="en">
      <Head>
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-icon-180.png.png"/>
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png"/>
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png"/>
        <link rel="favicon" type="image/png" href="/logo.ico"/>
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5"/>
        <meta name="msapplication-TileColor" content="#da532c"/>
        <link rel="manifest" href="/manifest.json"/>
        <meta name="theme-color" content="#ffffff"/>
      </Head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased font-grotesk`}
      >
        <Navbar />
        <SocialLinks />
        {children}
        <Footer/>
      </body>
    </html>
  );
}
