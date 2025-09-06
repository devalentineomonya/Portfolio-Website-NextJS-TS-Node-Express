import { SanityImageSource } from "@sanity/image-url/lib/types/types";

export type Book =   {
  _id?: string;
  title: string;
  author: string;
  image: SanityImageSource;
  level: ("beginner" | "intermediate" | "advanced")[];
  purchaseLink: string;
  onlineReadLink?: string;
};
