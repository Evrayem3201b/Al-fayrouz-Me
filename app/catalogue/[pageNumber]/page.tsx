import {
  getPaginatedCategories,
  getTotalCategoryCount,
} from "@/lib/fetchLocal";
import ClientCatalogue from "@/components/ClientCatalogue";

export const dynamic = "force-dynamic";

export default async function CataloguePage({ params }: { params: any }) {
  const pageParam = params?.pageNumber ?? "1";
  const currentPage = parseInt(pageParam, 10) || 1;

  const pageSize = 6;
  const offset = (currentPage - 1) * pageSize;

  const [categories, totalCategories] = await Promise.all([
    getPaginatedCategories(pageSize, offset),
    getTotalCategoryCount(),
  ]);

  const totalPages = Math.ceil(totalCategories / pageSize);

  return (
    <section
      dir="rtl"
      className="relative mx-auto max-w-7xl px-6 pt-10 pb-24 sm:pb-32 lg:px-8 bg-background min-h-screen"
    >
      <ClientCatalogue
        catalogueItems={categories}
        currentPage={currentPage}
        totalPages={totalPages}
      />
    </section>
  );
}
