import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";
import { ToolTypes } from "@/types/tool";

const ToolCard: React.FC<Omit<ToolTypes, "_id"> & { image: string }> = ({
  name,
  link,
  image,
}) => {
  return (
    <Link href={link} className="block">
      <Card>
        <CardContent className="flex items-center justify-center ">
          <Image
            src={image || "/placeholder.svg"}
            alt={name}
            width={100}
            height={100}
            className="h-12 w-12 object-contain"
          />
        </CardContent>
        <CardFooter className="flex items-center justify-between border-t py-0">
          <span className="text-sm font-medium">{name}</span>
          <ArrowRight className="h-4 w-4" />
        </CardFooter>
      </Card>
    </Link>
  );
};

export default ToolCard;
