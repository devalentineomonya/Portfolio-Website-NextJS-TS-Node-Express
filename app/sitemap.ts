import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://v4.valentinee.dev";
  const lastModified = new Date();

  const paths = [
    { path: "/", priority: 1, changeFrequency: "monthly" as "monthly" },
    { path: "/about", priority: 0.8, changeFrequency: "monthly" as "monthly" },
    { path: "/shop", priority: 0.9, changeFrequency: "weekly" as "weekly" },
    {
      path: "/contact",
      priority: 0.7,
      changeFrequency: "monthly" as "monthly",
    },
    {
      path: "/changelogs",
      priority: 0.6,
      changeFrequency: "monthly" as "monthly",
    },
    { path: "/books", priority: 0.6, changeFrequency: "monthly" as "monthly" },
    { path: "/tools", priority: 0.5, changeFrequency: "monthly" as "monthly" },
    { path: "/resume", priority: 0.5, changeFrequency: "yearly" as "yearly" },
    { path: "/cart", priority: 0.4, changeFrequency: "weekly" as "weekly" },
  ];

  return paths.map(({ path, priority, changeFrequency }) => ({
    url: `${baseUrl}${path}`,
    lastModified,
    changeFrequency,
    priority,
  }));
}
