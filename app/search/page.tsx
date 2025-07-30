import SearchComp from "@/components/SearchComp";
import { Button } from "@/components/ui/button";
import { client } from "@/lib/sanity";
import { groq } from "next-sanity";

export const dynamic = "force-dynamic";
export default async function SearchPage({
  searchParams,
}: {
  searchParams?: Record<string, string | string[] | undefined>;
}) {
  const queryRaw = searchParams?.query;
  const query = typeof queryRaw === "string" ? queryRaw.trim() : "";

  if (!query)
    return <p className="text-center mt-10">الرجاء كتابة كلمة للبحث</p>;

  const results = await client.fetch(
    groq`*[_type == "products" && (
      typeArabic match $q || typeEnglish match $q
    )]{ _id, typeArabic, typeEnglish }`,
    { q: `*${query}*` }
  );

  return (
    <div className="max-w-4xl mx-auto px-4 py-6">
      <SearchComp />
      <h1 className="text-2xl font-bold my-4">نتائج البحث عن: {query}</h1>
      {results.length === 0 ? (
        <p>لم يتم العثور على نتائج</p>
      ) : (
        <ul className="space-y-4 flex flex-col">
          {results.map((product: any) => (
            <li
              key={product._id}
              className="flex flex-row gap-2 items-center justify-between border p-4 rounded shadow"
            >
              <p className="font-bold">{product.typeArabic}</p>
              <p className="text-sm text-gray-600">{product.typeEnglish}</p>
              <Button>اضف الى عرض السعر</Button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
