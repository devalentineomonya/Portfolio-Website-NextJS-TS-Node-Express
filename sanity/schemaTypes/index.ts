import { type SchemaTypeDefinition } from "sanity";

import { projectTypes } from "./projectTypes";
import { stackTypes } from "./stackTypes";
import { productTypes } from "./productTypes";
import bookTypes from "./bookTypes";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [projectTypes, stackTypes, productTypes, bookTypes],
};
