import { getCategories } from "@/lib/fetchLocal";
import ClientCategoryGrid from "./ClientCategoryGrid";

export const revalidate = 30;

export default async function Categories() {
  let categories = [];

  try {
    categories = await getCategories();
    console.log("Fetched categories");
  } catch (error) {
    console.error("Failed to fetch categories:", error);
    return (
      <section className="text-center text-red-500 py-10">
        فشل تحميل الأصناف. الرجاء المحاولة لاحقًا.
      </section>
    );
  }

  return (
    <section
      dir="rtl"
      className="whiteGradientTopBottom section-main flex flex-col items-center text-[#252525] gap-6 pt-6 overflow-hidden max-md:px-4 min-[743px]:px-8 pb-10 w-full"
    >
      <h2 className="text-2xl font-bold">الاصناف</h2>
      <ClientCategoryGrid categories={categories} />
    </section>
  );
}
