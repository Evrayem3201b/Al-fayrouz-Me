"use client";
import { ArrowUp, ArrowDown } from "lucide-react";
import { useEffect, useState } from "react";
import { Button } from "./ui/button";
import Link from "next/link";

type categotiesType = {
  _id: string;
  category_en: string;
  category_ar: string;
  products: {
    _id: string;
    typeEnglish: string;
    typeArabic: string;
  }[];
};
export default function ClientCatalogue({
  catalogueItems,
}: {
  catalogueItems: categotiesType[];
}) {
  const [isVisible, setIsVisible] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 100) {
      // Show button after scrolling down 100px
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  const [showMore, setShowMore] = useState(false);
  const scrollToTop = () => {
    if (typeof window !== "undefined") {
      // Check if running in the browser
      window.scrollTo({
        top: 0,
        behavior: "smooth", // For smooth scrolling animation
      });
    }
  };
  return (
    <>
      <div className="flex flex-col">
        <h2 className="text-2xl text-[#252525]">الاصناف</h2>

        <div
          className={`flex flex-wrap gap-2 pb-0  ${showMore ? "h-full" : "h-[218px]"} overflow-hidden`}
        >
          {catalogueItems.map((category) => (
            <Button className="" key={category._id}>
              <Link href={`#${category._id}`}>{category.category_ar}</Link>
            </Button>
          ))}
        </div>
        <div className="pt-4 pb-20">
          <Button
            variant={"ghost"}
            onClick={() => setShowMore((prev) => !prev)}
            className="text-lg font-semibold flex items-center bg-secondary gap-2 cursor-pointer pt-1.5  hover:underline min-[743px]:hidden"
          >
            {showMore ? "عرض أقل" : "عرض المزيد"}
            {showMore ? <ArrowUp size={16} /> : <ArrowDown size={16} />}
          </Button>
        </div>
      </div>
      <ul className="scroll-pt-6">
        {catalogueItems?.map((category) => (
          <div
            className="border p-4 rounded-lg mb-6 bg-white relative z-20"
            key={category._id}
            id={category._id}
          >
            <li key={category._id} className="mb-4">
              <Link
                href={`/catalogue/${category.category_en}`}
                className="text-lg font-semibold text-[#374151] hover:underline"
              >
                {category.category_ar} - ({category.category_en})
              </Link>
            </li>
            <ul className="ml-4">
              {category.products.map((product) => (
                <li key={product._id} className="mb-2 text-gray-500">
                  {product.typeArabic}
                </li>
              ))}
            </ul>
          </div>
        ))}
        <button
          onClick={scrollToTop}
          style={{
            position: "fixed",
            bottom: "20px",
            right: "20px",
            display: isVisible ? "block" : "none",
            // Add your desired styling here
            zIndex: "30",
            backgroundColor: "var(--accent)",
            padding: "10px",
            borderRadius: "10000px",
          }}
        >
          <ArrowUp color="#fff" />
        </button>
      </ul>
    </>
  );
}
