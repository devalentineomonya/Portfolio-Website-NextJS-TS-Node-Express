"use client";
import { useCartStore } from "@/stores/cart-store";
import { ShoppingCart } from "lucide-react";
import Link from "next/link";
import { Button } from "../ui/button";
import { cn } from "@/lib/utils";

interface CartIndicatorProps {
  className?: string;
}
export function CartIndicator({ className }: CartIndicatorProps) {
  const { items } = useCartStore();

  return (
    <Link
      href="/cart"
      className={cn(
        "transition-colors  hover:text-black dark:hover:text-white",
        className
      )}
    >
      <Button size="icon" variant="ghost" className="relative">
        <ShoppingCart className="h-6 w-6" />
        {items.length > 0 && (
          <span className="absolute -top-1 -right-1 bg-primary text-primary-foreground rounded-full h-4 w-4 flex items-center justify-center text-xs">
            {items.reduce((sum, item) => sum + item.quantity, 0)}
          </span>
        )}
      </Button>
    </Link>
  );
}
