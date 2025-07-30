import { Button } from "@/components/ui/button";
import { getData } from "@/lib/fetchLocal";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Link from "next/link";
import ClientCatalogue from "@/components/ClientCatalogue";
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
export default async function Catalogue() {
  const categoryQuery = `*[_type == "categories"]{
  _id,
  category_en,
  category_ar,
  "products": *[_type == "products" && references(^._id)]{
    _id,
    typeEnglish,
    typeArabic
  }
}
`;
  const categories = await ((await getData(categoryQuery)) as Promise<
    categotiesType[]
  >);
  return (
    <section
      dir="rtl"
      className="relative mx-auto max-w-7xl px-6 pt-10 pb-24 sm:pb-32 lg:flex lg:items-center lg:px-8 lg:py-40 bg-background h-screen"
    >
      <ClientCatalogue catalogueItems={categories} />
    </section>
  );
}
