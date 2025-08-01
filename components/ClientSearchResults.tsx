// components/ClientSearchResults.tsx
"use client";

import { useShoppingCart } from "use-shopping-cart";
import Image from "next/image";
import { Button } from "./ui/button";

type ProductType = {
  _id: string;
  typeArabic: string;
  typeEnglish: string;
  productImg?: string;
};

export default function ClientSearchResults({
  results,
}: {
  results: ProductType[];
}) {
  const { addItem, removeItem, cartDetails } = useShoppingCart();

  const isInCart = (id: string) => !!cartDetails?.[id];

  const handleToggleCart = (product: ProductType) => {
    const item = {
      id: product._id,
      name: product.typeArabic,
      price: 0,
      currency: "USD",
      image: product.productImg || "",
    };

    isInCart(product._id) ? removeItem(product._id) : addItem(item);
  };

  return (
    <ul className="space-y-4 flex flex-col">
      {results.map((product) => (
        <li
          key={product._id}
          className="flex flex-row gap-2 items-center justify-between border p-4 rounded shadow"
        >
          {product.productImg && (
            <Image
              src={product.productImg}
              alt={product.typeEnglish}
              width={100}
              height={100}
            />
          )}
          <div className="flex-1">
            <p className="font-bold">{product.typeArabic}</p>
            <p className="text-sm text-gray-600">{product.typeEnglish}</p>
          </div>
          <Button onClick={() => handleToggleCart(product)}>
            {isInCart(product._id) ? "ازالة من عرض السعر" : "اضف الى عرض السعر"}
          </Button>
        </li>
      ))}
    </ul>
  );
}
