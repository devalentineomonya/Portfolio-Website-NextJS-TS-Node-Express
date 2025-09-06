import { SanityImageSource } from "@sanity/image-url/lib/types/types";

export type ToolTypes = {
  _id: string;
  name: string;
  link: string;
  image: SanityImageSource;
};
