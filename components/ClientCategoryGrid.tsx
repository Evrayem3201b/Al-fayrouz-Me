"use client";

import Image from "next/image";
import { ArrowDown, ArrowUp } from "lucide-react";
import { Button } from "./ui/button";
import { useState } from "react";
import { urlFor } from "@/lib/sanity";

type Category = {
  category_en: string;
  category_ar: string;
  catImg?: string;
};

export function CategoryImage({ category }: any) {
  const [imgSrc, setImgSrc] = useState(
    category.catImg
      ? urlFor(category.catImg).url()
      : `/images/png/${category.category_en}.png`
  );

  return (
    <Image
      src={imgSrc}
      alt={category.category_en}
      width={300}
      height={140}
      className="w-full h-full object-contain"
      loading="lazy"
      onError={() => setImgSrc("/images/error-img.jpg")}
    />
  );
}

export default function ClientCategoryGrid({
  categories,
}: {
  categories: Category[];
}) {
  const [showMore, setShowMore] = useState(false);

  return (
    <>
      <div
        className={`w-full min-[743px]:h-[590px] h-full max-md:w-full whiteGradientTopBottom ${
          showMore
            ? "max-h-[500px] overflow-y-auto"
            : "overflow-x-hidden min-[743px]:overflow-y-auto"
        }`}
      >
        <div
          dir="ltr"
          className={`mx-auto px-4 gap-6 py-[13px] 
            ${
              showMore
                ? "grid place-items-center max-xs:grid-cols-1 grid-cols-2 min-[743px]:grid-cols-3 lg:grid-cols-4"
                : "category-wrapper min-[743px]:grid min-[743px]:grid-cols-3"
            }
          `}
        >
          {categories.map((category, index) => (
            <div
              key={index}
              className={`${
                showMore ? "max-xs:w-[300px]" : "max-xs:w-[230px]"
              } flex flex-col items-center justify-center border rounded-lg shadow-md overflow-hidden w-full h-[220px] bg-white dark:bg-background`}
            >
              <div className="w-full h-[140px] border-b">
                <CategoryImage category={category} />
              </div>
              <div className="flex justify-center items-center h-full w-full text-center p-1 text-xl font-semibold">
                <h3>{category.category_ar}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Button is hidden on wider screens */}
      <Button
        variant={"default"}
        onClick={() => setShowMore((prev) => !prev)}
        className="text-lg font-semibold flex items-center bg-accent gap-2 cursor-pointer pt-1.5 hover:underline min-[743px]:hidden"
      >
        {showMore ? "عرض أقل" : "عرض المزيد"}
        {showMore ? <ArrowUp size={16} /> : <ArrowDown size={16} />}
      </Button>
    </>
  );
}
