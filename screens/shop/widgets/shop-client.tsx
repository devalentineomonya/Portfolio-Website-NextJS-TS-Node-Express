"use client";
import React, { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { ArrowDownWideNarrow, ArrowUpWideNarrow, Search } from "lucide-react";
import ProductCard from "@/components/common/product-card";
import { Product } from "@/types/product";
import { urlFor } from "@/sanity/lib/image";

const gridVariants = {
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

const ShopClient: React.FC<{ products: Product[] }> = ({ products }) => {
  const [sortAscending, setSortAscending] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");

  const filteredSortedProducts = useMemo(() => {

    const filtered = products.filter((product) =>
      product.name.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return filtered.sort((a, b) => {
      const comparison = a.name.localeCompare(b.name);
      return sortAscending ? comparison : -comparison;
    });
  }, [products, searchQuery, sortAscending]);

  const toggleSort = () => setSortAscending(!sortAscending);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div className="flex flex-col sm:flex-row justify-between gap-4 mb-8">
        <motion.div
          initial={{ x: -20, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.4 }}
          className="relative w-full sm:max-w-md"
        >
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-500" />
          <Input
            type="search"
            placeholder="Search shirts..."
            className="pl-10"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </motion.div>

        <motion.div
          initial={{ x: 20, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.4, delay: 0.1 }}
        >
          <motion.button
            whileTap={{ scale: 0.95 }}
            whileHover={{ scale: 1.05 }}
            className="cursor-pointer"
          >
            <Button variant="outline" onClick={toggleSort} asChild>
              <motion.div className="flex items-center gap-2">
                <AnimatePresence mode="wait">
                  {sortAscending ? (
                    <motion.span
                      key="asc"
                      initial={{ rotate: -180 }}
                      animate={{ rotate: 0 }}
                      exit={{ rotate: 180 }}
                      transition={{ duration: 0.2 }}
                    >
                      <ArrowUpWideNarrow className="h-5 w-5" />
                    </motion.span>
                  ) : (
                    <motion.span
                      key="desc"
                      initial={{ rotate: 180 }}
                      animate={{ rotate: 0 }}
                      exit={{ rotate: -180 }}
                      transition={{ duration: 0.2 }}
                    >
                      <ArrowDownWideNarrow className="h-5 w-5" />
                    </motion.span>
                  )}
                </AnimatePresence>
                <span>{sortAscending ? "Sort A-Z" : "Sort Z-A"}</span>
              </motion.div>
            </Button>
          </motion.button>
        </motion.div>
      </div>

      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4"
        variants={gridVariants}
        initial="hidden"
        animate="visible"
      >
        <AnimatePresence>
          {filteredSortedProducts.map((product) => (
            <motion.div
              key={product.slug.current}
              variants={itemVariants}
              layout 
            >
              <ProductCard
              sizes={product.sizes}
                price={product.price}
                name={product.name}
                slug={product.slug}
                image={urlFor(product.image).url()}
              />
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      {filteredSortedProducts.length === 0 && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-center py-12 text-gray-500"
        >
          No products found matching your search
        </motion.div>
      )}
    </motion.div>
  );
};

export default ShopClient;
