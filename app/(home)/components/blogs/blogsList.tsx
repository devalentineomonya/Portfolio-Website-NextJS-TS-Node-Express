import blog1 from "@/assets/images/blog (1).png"
import blog2 from "@/assets/images/blog (2).png"
import blog3 from "@/assets/images/blog (3).png"
const blogsList = [
    {
        id: 1,
        title: "Understanding TypeScript",
        date: "2023-10-01",
        imageSmall: blog1,
        shortDescription: "A comprehensive guide to learning TypeScript.",
        blogContent: "TypeScript is a typed superset of JavaScript that compiles to plain JavaScript...",
        tags: ["TypeScript", "JavaScript", "Programming"]
    },
    {
        id: 2,
        title: "React Hooks in Depth",
        date: "2023-10-05",
        imageSmall: blog2,
        shortDescription: "An in-depth look at React Hooks and how to use them.",
        blogContent: "React Hooks are functions that let you use state and other React features without writing a class...",
        tags: ["React", "Hooks", "JavaScript"]
    },
    {
        id: 3,
        title: "Next.js for Beginners",
        date: "2023-10-10",
        imageSmall: blog3,
        shortDescription: "A beginner's guide to building applications with Next.js.",
        blogContent: "Next.js is a React framework that enables server-side rendering and static site generation...",
        tags: ["Next.js", "React", "Web Development"]
    }
];

export default blogsList