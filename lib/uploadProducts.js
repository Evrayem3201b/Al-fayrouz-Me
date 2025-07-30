require("dotenv").config({ path: "P:/al-fayrouz/.env.local" });
const fs = require("fs").promises;

const fetch = (...args) =>
  import("node-fetch").then(({ default: fetch }) => fetch(...args));

const SANITY_PROJECT_ID = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID;
const SANITY_DATASET = process.env.NEXT_PUBLIC_SANITY_DATASET;
const SANITY_TOKEN = process.env.SANITY_TOKEN;
const SANITY_API_VERSION = "2025-07-15";

const SANITY_API_URL = `https://${SANITY_PROJECT_ID}.api.sanity.io/v${SANITY_API_VERSION}`;

// Batch size (adjust to your need)
const BATCH_SIZE = 300;

// Fetch all category slugs and IDs at once
async function fetchAllCategoryIds() {
  const query = `*[_type == "categories"]{ slug, _id }`;
  const res = await fetch(
    `${SANITY_API_URL}/data/query/${SANITY_DATASET}?query=${encodeURIComponent(query)}`,
    {
      headers: {
        Authorization: `Bearer ${SANITY_TOKEN}`,
      },
    }
  );
  const result = await res.json();
  const map = {};
  for (const cat of result.result) {
    if (cat.slug?.current) {
      map[cat.slug.current] = cat._id;
    }
  }
  return map;
}

// Upload data to Sanity in batches
async function uploadInBatches(products, categoryMap) {
  const total = products.length;
  let uploaded = 0;

  while (uploaded < total) {
    const batch = products.slice(uploaded, uploaded + BATCH_SIZE);
    const docs = [];

    for (const product of batch) {
      const categoryId = categoryMap[product.categorySlug];
      if (!categoryId) {
        console.warn(
          `⚠️ Skipping: category not found for slug "${product.categorySlug}"`
        );
        continue;
      }

      docs.push({
        _type: "products",
        typeArabic: product.typeArabic,
        typeEnglish: product.typeEnglish,
        category: {
          _type: "reference",
          _ref: categoryId,
        },
      });
    }

    if (docs.length === 0) {
      uploaded += BATCH_SIZE;
      continue;
    }

    const mutations = docs.map((doc) => ({ create: doc }));

    const res = await fetch(`${SANITY_API_URL}/data/mutate/${SANITY_DATASET}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${SANITY_TOKEN}`,
      },
      body: JSON.stringify({ mutations }),
    });

    const data = await res.json();
    if (data.error) {
      console.error("❌ Failed batch:", data.error);
    } else {
      console.log(
        `✅ Uploaded batch ${uploaded + 1}–${uploaded + docs.length}`
      );
    }

    uploaded += BATCH_SIZE;
  }
}

// Main
async function main() {
  const raw = await fs.readFile("lib/products.json", "utf-8");
  const products = JSON.parse(raw);
  const categoryMap = await fetchAllCategoryIds();

  await uploadInBatches(products, categoryMap);
  console.log("✅ All products uploaded.");
}

main().catch((err) => {
  console.error("❌ Error:", err);
});
