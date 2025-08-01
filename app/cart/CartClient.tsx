"use client";

import { useShoppingCart } from "use-shopping-cart";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { useMemo } from "react";
import Link from "next/link";

type CartClientProps = {
  searchParams?: {
    items?: string;
  };
};

export default function CartClient({ searchParams }: any) {
  const { cartDetails, removeItem, totalPrice } = useShoppingCart();

  // Step 1: Parse manual items (from URL)
  const manualItems = useMemo(() => {
    if (!searchParams?.items) return [];

    try {
      const decoded = decodeURIComponent(searchParams.items);
      const parsed = JSON.parse(decoded);
      if (Array.isArray(parsed)) return parsed;
    } catch (err) {
      console.error("Failed to parse manual items:", err);
    }

    return [];
  }, [searchParams]);

  // Step 2: Merge both cart items
  const cartItems = useMemo(() => {
    const itemsFromContext = cartDetails ? Object.values(cartDetails) : [];

    const all = [...manualItems, ...itemsFromContext];

    // Remove duplicates by ID
    const seen = new Set();
    return all.filter((item) => {
      if (seen.has(item.id)) return false;
      seen.add(item.id);
      return true;
    });
  }, [cartDetails, manualItems]);

  const handleWhatsAppClick = () => {
    const message = cartItems
      .map((item: any, index: number) => `${index + 1}. ${item.name}`)
      .join("\n");

    var name =
      (document.querySelector("#namecart") as HTMLInputElement | null)?.value ||
      "";
    var company =
      (document.querySelector("#companycart") as HTMLInputElement | null)
        ?.value || "";
    var phone =
      (document.querySelector("#phonecart") as HTMLInputElement | null)
        ?.value || "";
    var email =
      (document.querySelector("#emailcart") as HTMLInputElement | null)
        ?.value || "";

    const phoneNumber = "201008303207";
    const fullMessage = `
الاسم: ${name}
الشركة: ${company}
رقم الهاتف: ${phone}
الايميل: ${email}
الطلبات:
${message}
`;

    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(fullMessage)}`;

    window.open(url, "_blank");
  };

  if (cartItems.length === 0)
    return <p className="text-center mt-10">السلة فارغة</p>;

  return (
    <div className="max-w-2xl mx-auto py-10 px-4" dir="ltr">
      <div className="mb-7 relative mx-auto flex w-full max-w-2xl flex-col items-end gap-4 overflow-hidden rounded-3xl border border-border bg-card p-4 sm:p-10">
        <div className="relative z-20 mb-4 w-full">
          <label
            className="mb-2 inline-block text-sm font-medium text-foreground/80"
            htmlFor="namecart"
          >
            الاسم
          </label>
          <input
            id="namecart"
            type="text"
            placeholder="اسمك الكامل"
            className="h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring text-end"
          />
        </div>
        <div className="relative z-20 mb-4 w-full">
          <label
            className="mb-2 inline-block text-sm font-medium text-foreground/80"
            htmlFor="companycart"
          >
            الشركة
          </label>
          <input
            id="companycart"
            type="text"
            placeholder="اسم الشركة"
            className="h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring text-end"
          />
        </div>
        <div className="relative z-20 mb-4 w-full">
          <label
            className="mb-2 inline-block text-sm font-medium text-foreground/80"
            htmlFor="phonecart"
          >
            رقم الهاتف
          </label>
          <input
            id="phonecart"
            type="text"
            placeholder="رقم هاتفك"
            className="h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring text-end"
          />
        </div>

        <div className="relative z-20 mb-4 w-full">
          <label
            className="mb-2 inline-block text-sm font-medium text-foreground/80"
            htmlFor="emailcart"
          >
            البريد الإلكتروني
          </label>
          <input
            id="emailcart"
            type="email"
            placeholder="your@email.com"
            className="h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring text-end"
          />
        </div>
      </div>

      <ul
        className="space-y-4 relative mx-auto flex w-full max-w-2xl flex-col items-end gap-4 overflow-hidden rounded-3xl border border-border bg-card p-4 sm:p-10"
        dir="rtl"
      >
        <h2 className="text-2xl w-full text-[#252525] font-bold pb-0 text-start">
          عناصر عرض السعر
        </h2>
        {cartItems.map((item: any) => (
          <li
            key={item.id}
            className="flex justify-between items-center border p-4 rounded-md w-full"
          >
            <div className="flex items-center gap-4">
              {item.image && (
                <Image
                  src={item.image}
                  alt={item.name}
                  width={60}
                  height={60}
                  className="object-contain rounded"
                />
              )}
              <div>
                <p className="font-semibold">{item.name}</p>
              </div>
            </div>
            {cartDetails?.[item.id] && (
              <Button variant="destructive" onClick={() => removeItem(item.id)}>
                ازالة
              </Button>
            )}
          </li>
        ))}
      </ul>

      <div className="mt-8 flex justify-between items-center">
        <Button onClick={handleWhatsAppClick}>ارسال الى واتساب</Button>
        <Button>
          <Link href={"/"}>الرجوع للصفحة الرئيسية</Link>
        </Button>
      </div>
    </div>
  );
}
