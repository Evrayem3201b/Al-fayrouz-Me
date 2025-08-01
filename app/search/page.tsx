// app/search/page.tsx
import SearchComp from "@/components/SearchComp";
import SearchClient from "./SearchClient";
import { client } from "@/lib/sanity";
import { groq } from "next-sanity";

export const dynamic = "force-dynamic";

export default async function SearchPage({
  searchParams,
}: {
  searchParams: any;
}) {
  const query = searchParams?.query?.trim() || "";

  const results = query
    ? await client.fetch(
        groq`*[_type == "products" && (
          typeArabic match $q || typeEnglish match $q
        )]{ _id, typeArabic, typeEnglish, productImg }`,
        { q: `*${query}*` }
      )
    : [];

  return (
    <div className="max-w-4xl mx-auto px-4 py-6">
      <SearchComp />
      <SearchClient results={results} query={query} />
    </div>
  );
}
