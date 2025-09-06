"use client";
import React, { useState } from "react";
import Link from "next/link";
import { navigationLinks } from "@/lib/constants";
import { Button } from "../ui/button";
import { ChevronLeft, PanelLeft } from "lucide-react";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { useIsMobile } from "@/hooks/use-mobile";
import NavbarMobile from "./navbar-mobile";
import { CartIndicator } from "./cart-indicator";

export const Navbar: React.FC = () => {
  const pathName = usePathname();
  const isMobile = useIsMobile();
  const [isOpen, setIsOpen] = useState(false);

  const onOpenChange = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className={`mt-8 md:mt-14 ${pathName === "/" && "hidden"}`}>
      <div className="flex items-center justify-between mx-auto w-full max-w-6xl">
        <Button
          className="transition-colors  hover:text-black dark:hover:text-white hover:bg-transparent text-muted-foreground cursor-pointer"
          variant="ghost"
        >
          <Link href="/" className="flex items-center gap-2">
            <ChevronLeft />
            <span>Back</span>
          </Link>
        </Button>
        <div className="pr-2 flex items-center justify-center">
          <Button
            onClick={onOpenChange}
            size="icon"
            variant="ghost"
            className="min-md:hidden transition-colors  hover:text-black dark:hover:text-white hover:bg-transparent text-muted-foreground cursor-pointer"
          >
            <PanelLeft className="size-5" />
          </Button>
          <CartIndicator className="min-md:hidden" />
        </div>
        {!isMobile ? (
          <nav className="pr-4 max-md:hidden">
            <ul className="flex items-center gap-4">
              {navigationLinks.map((link, index) => (
                <li
                  key={index}
                  className={cn(
                    pathName === link.href
                      ? "text-foreground"
                      : "text-muted-foreground"
                  )}
                >
                  <Link
                    className={cn(
                      "transition-colors  hover:text-black dark:hover:text-white"
                    )}
                    href={link.href}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
              <li
                className={cn(
                  pathName === "/cart"
                    ? "text-foreground"
                    : "text-muted-foreground"
                )}
              >
                <CartIndicator />
              </li>
            </ul>
          </nav>
        ) : (
          <NavbarMobile
            pathName={pathName}
            isOpen={isOpen}
            onOpenChange={onOpenChange}
          />
        )}
      </div>
    </header>
  );
};
