import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Book } from "@/types/books";

export const BookCard: React.FC<Omit<Book, "image"> & { image: string }> = ({
  title,
  image,
  author,
  level,
  purchaseLink,
  onlineReadLink,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ y: -5 }}
      transition={{ duration: 0.3 }}
      className="h-full"
    >
      <Card className="overflow-hidden p-0 gap-0 h-full">
        <CardContent className="p-0">
          <motion.div
            className="aspect-[3/4] relative overflow-hidden"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <Image
              src={image || "/placeholder.svg"}
              alt={`Cover of ${title}`}
              fill
              className="object-cover rounded-2xl"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          </motion.div>

          <motion.div
            className="px-3 pt-6 space-y-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            <div className="space-y-2">
              <h3 className="font-semibold text-foreground leading-tight truncate">
                {title}
              </h3>
              <p className="text-sm text-muted-foreground">{author}</p>
            </div>

            <motion.div
              className="flex items-center justify-between gap-2"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              {level.map((lvl) => (
                <Badge
                  key={lvl}
                  variant="secondary"
                  className="text-xs font-medium rounded-md"
                >
                  {lvl}
                </Badge>
              ))}
            </motion.div>

            <motion.div
              className="pb-4 flex justify-between items-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              <Button
                variant="link"
                asChild
                className="p-0 h-auto text-sm text-muted-foreground hover:text-foreground"
              >
                <Link target="_blank" href={purchaseLink}>
                  View on Amazon
                </Link>
              </Button>
              <Button
                variant="link"
                asChild
                className="p-0 h-auto text-sm text-muted-foreground hover:text-foreground"
              >
                <Link target="_blank" href={onlineReadLink ?? ""}>
                  Read Online
                </Link>
              </Button>
            </motion.div>
          </motion.div>
        </CardContent>
      </Card>
    </motion.div>
  );
};
