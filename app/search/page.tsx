import SearchComp from "@/components/SearchComp";
import { Button } from "@/components/ui/button";
import { client, urlFor } from "@/lib/sanity";
import { groq } from "next-sanity";
import Image from "next/image";

export const dynamic = "force-dynamic";

type ProductType = {
  _id: string;
  typeArabic: string;
  typeEnglish: string;
  productImg?: string;
};

export default async function SearchPage({
  searchParams,
}: {
  // ✅ Fix type to be inferred or use any
  searchParams: any;
}) {
  const query = searchParams?.query?.trim() || "";

  let results: ProductType[] = [];

  if (query) {
    results = await client.fetch(
      groq`*[_type == "products" && (
        typeArabic match $q || typeEnglish match $q
      )]{ _id, typeArabic, typeEnglish, productImg }`,
      { q: `*${query}*` }
    );
  }

  return (
    <div className="max-w-4xl mx-auto px-4 py-6">
      <SearchComp />
      {!query ? (
        <p className="h-noNav text-center mt-10">الرجاء كتابة كلمة للبحث</p>
      ) : (
        <>
          <h1 className="text-2xl font-bold my-4">نتائج البحث عن: {query}</h1>
          {results.length === 0 ? (
            <p>لم يتم العثور على نتائج</p>
          ) : (
            <ul className="space-y-4 flex flex-col">
              {results.map((product: ProductType) => (
                <li
                  key={product._id}
                  className="flex flex-row gap-2 items-center justify-between border p-4 rounded shadow"
                >
                  {product.productImg ? (
                    <Image
                      src={urlFor(product.productImg).url()}
                      alt={product.typeEnglish}
                      width={100}
                      height={100}
                    />
                  ) : (
                    ""
                  )}
                  <p className="font-bold">{product.typeArabic}</p>
                  <p className="text-sm text-gray-600">{product.typeEnglish}</p>
                  <Button>اضف الى عرض السعر</Button>
                </li>
              ))}
            </ul>
          )}
        </>
      )}
    </div>
  );
}
