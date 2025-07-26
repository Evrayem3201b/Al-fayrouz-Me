import type { StructureResolver } from "sanity/structure";

export const structure: StructureResolver = (S) =>
  S.list()
    .title("Admin Panel")
    .items([
      S.listItem()
        .title("Testimonials")
        .child(S.documentTypeList("testimonials").title("Testimonials")),
      S.listItem()
        .title("Dashboard")
        .child(
          S.documentTypeList("categories")
            .title("Categories")
            .child((categoryId) =>
              S.list()
                .title("Category Details")
                .items([
                  S.listItem()
                    .title("Edit Category")
                    .child(
                      S.document()
                        .documentId(categoryId)
                        .schemaType("categories")
                        .title("Edit Category")
                    ),
                  S.listItem()
                    .title("View Products")
                    .child(
                      S.documentTypeList("products")
                        .title("Products")
                        .filter(`category._ref == $categoryId`)
                        .params({ categoryId })
                    ),
                ])
            )
        ),
    ]);
