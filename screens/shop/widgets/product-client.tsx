"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import { Label } from "@/components/ui/label";
import { motion } from "framer-motion";
import { CheckIcon, Minus, Plus, Trash2 } from "lucide-react";
import { Product } from "@/types/product";
import { urlFor } from "@/sanity/lib/image";
import { unstable_ViewTransition as ViewTransition } from "react";
import { useCartStore } from "@/stores/cart-store";

const ProductClient: React.FC<{ product: Product }> = ({ product }) => {
  const [selectedSize, setSelectedSize] = useState<string>("");
  const { items, addItem, increaseQuantity, decreaseQuantity, removeItem } =
    useCartStore();

  const cartItem = items.find(
    (item) =>
      item.productId === product.slug.current && item.size === selectedSize
  );
  const quantity = cartItem?.quantity || 0;
  useEffect(() => {
    if (product.sizes && product.sizes.length > 0) {
      const existingCartItem = items.find(
        (item) => item.productId === product.slug.current
      );

      if (existingCartItem) {
        setSelectedSize(existingCartItem.size);
      } else {
        setSelectedSize(product.sizes[0]);
      }
    }
  }, [product.sizes, product.slug.current, items]);

  const handleSizeChange = (newSize: string) => {
    if (!newSize) return;

    const previousCartItem = items.find(
      (item) =>
        item.productId === product.slug.current && item.size === selectedSize
    );

    if (previousCartItem && previousCartItem.quantity > 0) {
      removeItem(product.slug.current, selectedSize);

      for (let i = 0; i < previousCartItem.quantity; i++) {
        addItem({
          productId: product.slug.current,
          price: product.price,
          name: product.name,
          image: urlFor(product.image).url(),
          size: newSize,
        });
      }
    }

    setSelectedSize(newSize);
  };

  const handleAddToCart = () => {
    if (!product.slug || !product.price || !selectedSize) return;

    addItem({
      productId: product.slug.current,
      price: product.price,
      name: product.name,
      image: urlFor(product.image).url(),
      size: selectedSize,
    });
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <motion.div
      className="max-w-6xl mx-auto px-4 py-8 grid grid-cols-1 lg:grid-cols-2 gap-8"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <div className="flex justify-between flex-col">
        <motion.div className="space-y-2" variants={itemVariants}>
          <h1 className="text-3xl font-bold tracking-tight">{product.name}</h1>
          <div className="flex items-center space-x-4">
            <p className="text-2xl font-semibold">Kes {product.price}</p>
          </div>
          <p className="text-muted-foreground mt-4">{product.description}</p>
        </motion.div>

        <motion.div className="space-y-4" variants={itemVariants}>
          <Label className="text-base">Select Sizes</Label>
          <ToggleGroup
            type="single"
            value={selectedSize}
            onValueChange={handleSizeChange}
            className="grid grid-cols-4 w-full  max-h-52 items-center gap-4 "
          >
            {product.sizes?.map((size) => (
              <ToggleGroupItem
                key={size}
                value={size}
                asChild
                className="w-full text-center p-4 data-[state=on]:border-primary data-[state=on]:bg-primary/5 transition-colors hover:border-primary/50"
              >
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="flex items-center justify-between w-full cursor-pointer"
                >
                  <div className="space-y-1 text-left">
                    <h3 className="font-medium">{size}</h3>
                  </div>
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{
                      scale: selectedSize === size ? 1 : 0,
                    }}
                  >
                    <CheckIcon className="h-5 w-5 text-primary" />
                  </motion.div>
                </motion.div>
              </ToggleGroupItem>
            ))}
          </ToggleGroup>
        </motion.div>

        <motion.div className="space-y-6" variants={itemVariants}>
          <div className="flex items-center space-x-2 text-sm">
            <CheckIcon className="h-5 w-5 text-green-500" />
            <span className="text-muted-foreground">
              In stock, ready to ship
            </span>
          </div>

          <div>
            {quantity > 0 ? (
              <div className="flex items-center justify-between gap-2">
                <div className="flex items-center  gap-0 justify-between  flex-1">
                  <Button
                    variant="outline"
                    size="sm"
                    className="h-10 px-3 border-r rounded-r-none"
                    onClick={() =>
                      decreaseQuantity(product.slug.current, selectedSize)
                    }
                    disabled={quantity === 1}
                  >
                    <Minus className="h-4 w-4" />
                  </Button>

                  <span className="px-4 inline-block w-full h-full text-center font-medium border py-2">
                    {quantity}
                  </span>

                  <Button
                    variant="outline"
                    size="sm"
                    className="h-10 px-3 border-l rounded-l-none"
                    onClick={() =>
                      increaseQuantity(product.slug.current, selectedSize)
                    }
                  >
                    <Plus className="h-4 w-4" />
                  </Button>
                </div>
                <Button
                  variant="destructive"
                  size="icon"
                  onClick={() => removeItem(product.slug.current, selectedSize)}
                  className="h-10 w-10 hover:bg-accent/20"
                >
                  <Trash2 className="h-4 w-4" />
                </Button>
              </div>
            ) : (
              <motion.div
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Button
                  className="w-full"
                  size="lg"
                  disabled={!selectedSize}
                  onClick={handleAddToCart}
                >
                  Add to Cart
                </Button>
              </motion.div>
            )}
          </div>
        </motion.div>
      </div>
      <motion.div variants={itemVariants} className="relative aspect-square">
        <Card className="h-full">
          <ViewTransition name={product.slug.current}>
            <Image
              src={urlFor(product.image).url()}
              alt={product.name}
              fill
              style={{
                viewTransitionName: `product-image-${product.slug.current}`,
              }}
              className="rounded-lg object-cover"
            />
          </ViewTransition>
        </Card>
      </motion.div>
    </motion.div>
  );
};

export default ProductClient;
