require("dotenv").config({ path: "P:/al-fayrouz/.env.local" });

import { createClient } from "next-sanity";
export const client = createClient({
  projectId: "se2nqpcg", // e.g. "abcd1234"
  dataset: "production", // e.g. "production"
  token: process.env.SANITY_TOKEN, // Make sure this token has write permissions
  useCdn: false, // `false` for writes
});
