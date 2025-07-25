import { type SchemaTypeDefinition } from "sanity";
import items from "./items";
import categories from "./categories";
import measuring from "./measuring";
import products from "./products.tsx";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [products, categories],
};
