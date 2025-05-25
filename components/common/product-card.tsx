import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ShoppingCart, CheckCircle } from "lucide-react";
import React from "react";
import { Product } from "@/types/product";
import { useCartStore } from "@/stores/cart-store";

const ProductCard: React.FC<
  Omit<Product, "image" | "description" | "isAvailable"> & {
    image: string;
  }
> = ({ slug, image, name, price, sizes }) => {
  const { items, addItem } = useCartStore();
  const cartItem = items.find((item) => item.productId === slug.current);

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    addItem({
      productId: slug.current,
      price: price,
      name: name,
      image: image,
      size: (sizes ?? [])[0],
    });
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      whileHover={{ scale: 1.02 }}
      viewport={{ once: true, margin: "0px 0px -100px 0px" }}
      transition={{ duration: 0.4, ease: "easeOut" }}
    >
      <Card className="group pt-0 overflow-hidden gap-3 pb-3">
        <CardContent className="p-0">
          <motion.div
            className="aspect-square relative overflow-hidden"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <Link
              href={`/shop/${slug.current}`}
              style={{ viewTransitionName: `product-image-${slug.current}` }}
            >
              <Image
                src={image || "/placeholder.svg"}
                alt={name}
                fill
                className="object-cover"
              />
            </Link>
          </motion.div>
          <div className="p-4 pb-0">
            <h3 className="text-lg font-medium mb-2 truncate">{name}</h3>
            <p className="text-xl font-bold">Kes {price}</p>
          </div>
        </CardContent>
        <CardFooter className="border-t [.border-t]:pt-3">
          <Link
            href={`/shop/${slug.current}`}
            className="text-sm flex items-center justify-between w-full"
          >
            <motion.span
              whileHover={{ x: 4 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              View Product
            </motion.span>
          </Link>

          {cartItem ? (
            <Link href="/cart" className="opacity-0 group-hover:opacity-100">
              <Button
                variant="ghost"
                size="icon"
                className="text-green-500 hover:text-green-600"
              >
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <CheckCircle className="h-6 w-6" />
                </motion.div>
                <span className="sr-only">View Cart</span>
              </Button>
            </Link>
          ) : (
            <Button
              variant="ghost"
              size="icon"
              className="opacity-0 group-hover:opacity-100"
              onClick={handleAddToCart}
            >
              <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                <ShoppingCart className="h-6 w-6" />
              </motion.div>
              <span className="sr-only">Add to cart</span>
            </Button>
          )}
        </CardFooter>
      </Card>
    </motion.div>
  );
};

export default ProductCard;
