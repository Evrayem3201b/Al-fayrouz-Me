import ImageUrlBuilder from "@sanity/image-url";

import { createClient } from "next-sanity";
export const client = createClient({
  projectId: "se2nqpcg", // e.g. "abcd1234"
  dataset: "production", // e.g. "production"
  token: process.env.SANITY_TOKEN, // Make sure this token has write permissions
  useCdn: false, // `false` for writes
  apiVersion: "2025-07-15",
});

const builder = ImageUrlBuilder(client);

export function urlFor(source: any) {
  return builder.image(source);
}
