// app/search/SearchClient.tsx
"use client";

import { useShoppingCart } from "use-shopping-cart";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { urlFor } from "@/lib/sanity";

type ProductType = {
  _id: string;
  typeArabic: string;
  typeEnglish: string;
  productImg?: string;
};

export default function SearchClient({
  results = [],
  query,
}: {
  results: ProductType[];
  query: any;
}) {
  const { addItem, removeItem, cartDetails } = useShoppingCart();

  const isInCart = (id: string) => !!cartDetails?.[id];

  const handleToggle = (product: ProductType) => {
    const item = {
      id: product._id,
      name: product.typeArabic,
      price: 0,
      currency: "USD",
      image: product.productImg ? urlFor(product.productImg).url() : "",
    };

    isInCart(product._id) ? removeItem(product._id) : addItem(item);
  };

  if (!query)
    return <p className="h-noNav text-center mt-10">الرجاء كتابة كلمة للبحث</p>;

  return (
    <>
      <h1 className="text-2xl font-bold my-4">نتائج البحث عن: {query}</h1>
      {results.length === 0 ? (
        <p>لم يتم العثور على نتائج</p>
      ) : (
        <ul className="space-y-4 flex flex-col">
          {results.map((product) => (
            <li
              key={product._id}
              className="flex flex-row gap-2 items-center justify-between border p-4 rounded shadow"
            >
              {product.productImg && (
                <Image
                  src={urlFor(product.productImg).url()}
                  alt={product.typeEnglish}
                  width={100}
                  height={100}
                />
              )}
              <p className="font-bold">{product.typeArabic}</p>
              <p className="text-sm text-gray-600">{product.typeEnglish}</p>
              <Button onClick={() => handleToggle(product)}>
                {isInCart(product._id) ? "حذف" : "اضف الى عرض السعر"}
              </Button>
            </li>
          ))}
        </ul>
      )}
    </>
  );
}
