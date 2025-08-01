"use client";

import { ArrowUp, PlusIcon, MinusIcon } from "lucide-react";
import { useEffect, useState } from "react";
import Link from "next/link";
import { Button } from "./ui/button";
import Image from "next/image";
import { useShoppingCart } from "use-shopping-cart";

type CategoryType = {
  _id: string;
  category_en: string;
  category_ar: string;
  products: {
    _id: string;
    typeEnglish: string;
    typeArabic: string;
    productImg: string;
  }[];
};

export default function ClientCatalogue({
  catalogueItems,
  currentPage,
  totalPages,
}: {
  catalogueItems: CategoryType[];
  currentPage: number;
  totalPages: number;
}) {
  const [isVisible, setIsVisible] = useState(false);
  const handleScroll = () => setIsVisible(window.scrollY > 100);
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });
  const [addedItems, setAddedItems] = useState<Record<string, boolean>>({});

  const handleAdd = (id: string) => {
    setAddedItems((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const { addItem, removeItem, cartDetails } = useShoppingCart();

  const isInCart = (id: string) => !!cartDetails?.[id];

  const handleAddOrRemove = (product: any) => {
    const item = {
      id: product._id,
      name: product.typeArabic,
      price: 0, // if you're not charging, set price to 0
      currency: "USD", // required even if 0
      image: product.productImg || "",
    };

    if (isInCart(product._id)) {
      removeItem(product._id);
    } else {
      addItem(item);
    }
  };

  return (
    <>
      <h2 className="text-2xl font-bold mb-6 text-[#252525] dark:text-white">
        الاصناف
      </h2>

      <ul>
        {catalogueItems.map((category) => (
          <div
            className="border p-4 rounded-lg mb-6 bg-background relative z-20"
            key={category._id}
          >
            <li className="mb-4">
              <h2 className="text-lg font-semibold text-[#374151] dark:text-foreground hover:underline">
                {category.category_ar} - ({category.category_en})
              </h2>
            </li>
            <ul className="ml-4">
              {category.products.map((product) => (
                <li
                  key={product._id}
                  className="mb-2 text-gray-500 flex flex-row items-center justify-between"
                >
                  <div className="flex flex-row gap-1 items-center">
                    {product.productImg ? (
                      <Image
                        src="/images/error-img.jpg"
                        width={80}
                        height={80}
                        alt={product.typeArabic}
                        style={{
                          objectFit: "cover",
                          width: "50px",
                          height: "50px",
                          borderTopRightRadius: "10px",
                          borderBottomRightRadius: "10px",
                        }}
                      />
                    ) : (
                      ""
                    )}
                    <span>{product.typeArabic}</span>
                  </div>

                  <button onClick={() => handleAddOrRemove(product)}>
                    {isInCart(product._id) ? (
                      <MinusIcon className="p-1 rounded-full bg-primary text-white" />
                    ) : (
                      <PlusIcon className="p-1 rounded-full bg-primary text-white" />
                    )}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </ul>

      {/* Pagination */}
      <div className="flex justify-center gap-4 mt-10">
        {currentPage > 1 && (
          <Button asChild>
            <Link href={`/catalogue/${currentPage - 1}`}>الصفحة السابقة</Link>
          </Button>
        )}
        {currentPage < totalPages && (
          <Button asChild>
            <Link href={`/catalogue/${currentPage + 1}`}>الصفحة التالية</Link>
          </Button>
        )}
      </div>

      {/* Scroll to Top Button */}
      {isVisible && (
        <button
          onClick={scrollToTop}
          style={{
            position: "fixed",
            bottom: "20px",
            right: "20px",
            zIndex: 30,
            backgroundColor: "var(--accent)",
            padding: "10px",
            borderRadius: "10000px",
          }}
        >
          <ArrowUp color="#fff" />
        </button>
      )}
    </>
  );
}
