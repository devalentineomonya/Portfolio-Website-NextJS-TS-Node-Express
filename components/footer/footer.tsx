"use client";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { navigationLinks, socialLinks } from "@/lib/constants";
import { usePathname } from "next/navigation";

export default function FooterSection() {
  const pathName = usePathname();
  return (
    <footer className={cn("bg-white py-32 dark:bg-transparent", pathName==="/" && "hidden")}>
      <div className="mx-auto max-w-6xl px-4">
        <Link href="" aria-label="go home" className="mx-auto block size-fit">
          <img className="size-8" src="/logo.png" />
        </Link>

        <div
          className=       "my-8 flex flex-wrap justify-center gap-6 text-sm"
        >
          {navigationLinks.map((link) => (
            <Link
              className={cn(
                "transition-colors  hover:text-black dark:hover:text-white"
              )}
              href={link.href}
            >
              {link.label}
            </Link>
          ))}
        </div>
        <div className="my-8 flex flex-wrap justify-center gap-6 text-sm">
          {socialLinks.map((link) => (
            <Link
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-x-3"
            >
              <span>{link.name}</span>
              {<link.icon />}
            </Link>
          ))}
        </div>
        <span className="text-caption block text-center text-sm">
          &copy {new Date().getFullYear()} Devalentine, All rights reserved
        </span>
      </div>
    </footer>
  );
}
