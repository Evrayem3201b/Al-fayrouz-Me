import { getCategories } from "@/lib/fetchLocal";
import ClientCategoryGrid from "./ClientCategoryGrid";

export const revalidate = 30; // revalidate at most every hour

export default async function Categories() {
  const categories = await getCategories();

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
