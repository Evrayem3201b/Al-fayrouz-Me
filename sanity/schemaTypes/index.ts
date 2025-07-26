import { type SchemaTypeDefinition } from "sanity";
import items from "./items";
import categories from "./categories";
import testimonials from "./testimonials";
import measuring from "./measuring";
import products from "./products";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [products, categories, testimonials],
};
