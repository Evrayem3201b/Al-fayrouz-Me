// deleteDocsByFilter.js

/**
 * THIS SCRIPT DELETES DATA!
 *
 * To use this script:
 * 1. Put this script in your studio-folder
 * 2. Write a GROQ filter that outputs the documents you want to delete
 * 3. Run `sanity dataset export` to backup your dataset before deleting a bunch of documents
 * 4. Run `sanity exec deleteDocsByFilter.js --with-user-token` to delete the documents
 *
 * NOTE: For the time being you should not delete more than ~1000 documents in one transaction. This will change in the future.
 * See docs:https://www.sanity.io/docs/http-api/http-mutations#deleting-multiple-documents-by-query
 */

import { createClient } from "next-sanity";
import dotenv from "dotenv";
dotenv.config({ path: "./.env.local" }); // Adjust path if needed

const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
  token: process.env.SANITY_TOKEN,
  apiVersion: "2025-07-15",
  useCdn: false,
});

const FILTER = '*[_type == "products"][0...999]._id';

async function deleteDocs() {
  try {
    const ids = await client.fetch(FILTER);

    if (!ids.length) {
      console.log("✅ No documents found to delete.");
      return;
    }

    const transaction = client.transaction();
    ids.forEach((id) => transaction.delete(id)); // Pass each ID correctly

    await transaction.commit();

    console.log(`✅ Deleted ${ids.length} documents.`);
  } catch (err) {
    console.error("❌ Error deleting documents:", err.message);
  }
}

deleteDocs();
