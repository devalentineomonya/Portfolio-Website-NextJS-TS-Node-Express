import { motion } from "framer-motion";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import Link from "next/link";
import { ArrowRight, SquareArrowOutUpRight } from "lucide-react";

interface ProjectCardProps {
  title: string;
  description: string;
  year: string;
  imageSrc: string;
  link: string;
}

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const imageHoverVariants = {
  hover: { scale: 1.05 },
};

const overlayVariants = {
  hidden: { opacity: 0 },
  hover: { opacity: 1 },
};

const linkVariants = {
  hidden: { opacity: 0, x: -10 },
  visible: { opacity: 1, x: 0 },
};

export default function ProjectCard({
  title,
  description,
  year,
  imageSrc,
  link,
}: ProjectCardProps) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={cardVariants}
      whileHover={{ scale: 1.02 }}
      transition={{ type: "spring", stiffness: 300 }}
      animate={{ opacity: 1, y: 0 }}
      className="overflow-hidden group"
    >
      <Card className="gap-0 pt-0 overflow-hidden">
        <CardHeader className="relative  w-full aspect-video p-0">
          <motion.div
            variants={imageHoverVariants}
            whileHover="hover"
            transition={{ type: "spring", stiffness: 200 }}
            className="w-full aspect-video relative"
          >
            <Image
              src={imageSrc || "/placeholder.svg"}
              alt={title}
              fill
              className="object-cover"
              priority={false}
            />

            <motion.div
              variants={overlayVariants}
              transition={{ duration: 0.3 }}
              className="absolute inset-0 hidden group-hover:flex items-center justify-center bg-black/50"
            >
              <Link href={link}>
                <SquareArrowOutUpRight className="text-white size-6 hover:text-primary transition-colors" />
              </Link>
            </motion.div>
          </motion.div>
        </CardHeader>

        <CardContent className="justify-between p-4 pt-0">
          <CardHeader className="p-0">
            <motion.div
              whileHover={{ x: 5 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <CardTitle className="text-xl font-bold mb-2">{title}</CardTitle>
            </motion.div>
            <CardDescription className="text-gray-400 mb-4 text-sm">
              {description}
            </CardDescription>
          </CardHeader>
        </CardContent>

        <CardFooter className="px-4 flex items-center justify-between">
          <Badge
            variant="outline"
            className="bg-transparent border-gray-700 text-white"
          >
            {year}
          </Badge>

          <motion.div
            variants={linkVariants}
            transition={{ type: "spring", stiffness: 300 }}
            whileHover="hover"
          >
            <Link href={link} className="flex items-center gap-x-1 text-sm">
              <span>View Project</span>
              <motion.span
                whileHover={{ x: 5 }}
                transition={{ type: "spring", stiffness: 400 }}
              >
                <ArrowRight className="size-4" />
              </motion.span>
            </Link>
          </motion.div>
        </CardFooter>
      </Card>
    </motion.div>
  );
}
