import React from "react";
import Link from "next/link";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import { navigationLinks } from "@/lib/constants";
import { cn } from "@/lib/utils";

interface NavbarMobileProps {
  isOpen: boolean;
  pathName: string;
  onOpenChange: () => void;
}

const NavbarMobile: React.FC<NavbarMobileProps> = ({
  isOpen,
  onOpenChange,
  pathName,
}) => {
  return (
    <Sheet open={isOpen} onOpenChange={onOpenChange}>
      <SheetContent side="left" className="sm:max-w-sm w-64 p-4">
        <SheetHeader className="px-0 py-2">
          <SheetTitle>Menu</SheetTitle>
        </SheetHeader>
        <nav >
          <ul className="flex flex-col gap-y-4">
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
          </ul>
        </nav>
      </SheetContent>
    </Sheet>
  );
};

export default NavbarMobile;
