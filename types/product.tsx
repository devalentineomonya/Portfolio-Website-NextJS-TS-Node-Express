import { SanityImageSource } from "@sanity/image-url/lib/types/types";

export type Product = {
  slug: {
    current: string;
  };
  name: string;
  description: string;
  isAvailable: boolean;
  price: number;
  image: SanityImageSource;
  sizes?: string[];
};
