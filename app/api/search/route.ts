// /app/api/search/route.ts (for App Router)
// Or /pages/api/search.ts (for Pages Router)

import { NextResponse } from "next/server"; // for App Router
// import { NextApiRequest, NextApiResponse } from "next"; // if using Pages Router
import { createClient } from "next-sanity";

const client = createClient({
  projectId: "se2nqpcg", // Replace with your actual project ID
  dataset: "production",
  apiVersion: "2025-07-15",
  useCdn: false,
});

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const query = searchParams.get("query");

  if (!query) {
    return NextResponse.json({ error: "No query provided" }, { status: 400 });
  }

  const products = await client.fetch(
    `*[_type == "products" && (
      typeArabic match $q || typeEnglish match $q
    )]{ 
      _id,
      typeArabic,
      typeEnglish,
      "category": category->category_ar 
    }`,
    { q: `*${query}*` }
  );

  return NextResponse.json(products);
}
