import type { StructureResolver } from "sanity/structure";

export const structure: StructureResolver = (S) =>
  S.list()
    .title("لوحة الادارة")
    .items([
      S.listItem()
        .title("عرض كل المنتجات")
        .child(S.documentTypeList("products").title("المنتجات")),
      S.listItem()
        .title("المراجعات")
        .child(S.documentTypeList("testimonials").title("المراجعات")),
      S.listItem()
        .title("لوحة القيادة")
        .child(
          S.documentTypeList("categories")
            .title("الاصناف")
            .child((categoryId) =>
              S.list()
                .title("تعديل الاصناف و المنتجات")
                .items([
                  S.listItem()
                    .title("تعديل الصنف")
                    .child(
                      S.document()
                        .documentId(categoryId)
                        .schemaType("categories")
                        .title("تعديل الصنف")
                    ),
                  S.listItem()
                    .title("عرض المنتجات")
                    .child(
                      S.documentTypeList("products")
                        .title("المنتجات")
                        .filter(`category._ref == $categoryId`)
                        .params({ categoryId })
                    ),
                ])
            )
        ),
    ]);
