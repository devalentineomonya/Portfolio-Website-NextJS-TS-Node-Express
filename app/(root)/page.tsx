import React from "react";
import Link from "next/link";
import { ThemeToggle } from "@/components/common/theme-toggle";
import { Button } from "@/components/ui/button";
import { ChevronRight, Github, House, Linkedin } from "lucide-react";
import SocialLinks from "@/screens/home/components/social-icons";
import { navigationLinks } from "@/lib/constants";

const page = () => {
  return (
    <main className="min-h-screen flex items-center justify-center flex-col w-full">
      <section className="mx-auto w-full max-w-96 px-6 py-8 flex flex-col gap-8">
        <div className="flex items-center justify-between rounded-lg">
          <Button
            variant="link"
            className="text-sm text-muted-foreground hover:text-accent-foreground transition duration-300 ease-in"
          >
            <House />
            <span>Nairobi, Kenya</span>
          </Button>
          <ThemeToggle />
        </div>
        <div>
          <h1 className="text-2xl font-bold">Valentine Omonya</h1>
          <h4 className="text-md text-muted-foreground my-3">
            Software Engineer/ Backend Developer
          </h4>
        </div>
        <section>
          <h2 className="mb-6 text-sm font-medium uppercase tracking-wider text-muted-foreground">
            MENU
          </h2>
          <div className="space-y-1 w-full">
            {navigationLinks.slice(1).map((link) => (
              <div key={link.href}>
                <Link
                  className="group flex items-center justify-between rounded-lg px-4 py-2 transition-colors hover:bg-muted"
                  href={link.href}
                >
                  <span className="font-medium text-muted-foreground">
                    {link.label}
                  </span>
                  <ChevronRight className="size-4 group-hover:translate-x-2 transition-all ease-in-out duration-300" />
                </Link>
              </div>
            ))}
          </div>
        </section>
        <section>
          <h2 className="mb-6 text-sm font-medium uppercase tracking-wider text-muted-foreground">
            OTHER LINKS
          </h2>
          <div className="space-y-1 w-full">
            <div className="grid grid-cols-2 space-x-3">
              <Link
                target="_blank"
                href="https://linkedin.com/in/devalentineomonya"
              >
                <Button variant="outline" className="items-center">
                  <Linkedin />
                  <span>LinkedIn</span>
                </Button>
              </Link>
              <Link target="_blank" href="https://github.com/devalentineomonya">
                <Button variant="outline" className="items-center">
                  <Github />
                  <span>GitHub</span>
                </Button>
              </Link>
            </div>
            <SocialLinks />
          </div>
        </section>
      </section>
    </main>
  );
};

export default page;
