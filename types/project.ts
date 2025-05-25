import { SanityImageSource } from "@sanity/image-url/lib/types/types";

export type ProjectTypes = {
  _id: string;
  name: string;
  link: string;
  description: string;
  year: string;
  image: SanityImageSource;
};
