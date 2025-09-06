import { Metadata } from "next";

export const rootMetaData: Metadata = {
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
  metadataBase: new URL("https://v4.valentinee.dev"),
  robots: "index, follow",
  openGraph: {
    title: "Valentine Omonya | Software Engineer",
    description:
      "Engineer specializing in Python & JavaScript, creating intuitive and scalable applications.",
    url: "https://v4.valentinee.dev",
    siteName: "Valentine Omonya",
    images: [
      {
        url: "/og-image.png", // Recommended 1200x630
        width: 1200,
        height: 630,
        alt: "Valentine Omonya",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Valentine Omonya | Software Engineer",
    description:
      "Engineer specializing in Python & JavaScript, creating intuitive and scalable applications.",
    creator: "@devalentine_",
    images: ["/og-image.png"],
  },
};
