export default {
  name: "categories",
  title: "الاصناف جميع",
  type: "document",
  fields: [
    {
      name: "category_en",
      title: "Category",
      type: "string",
    },
    {
      name: "category_ar",
      title: "الصنف",
      type: "string",
    },
  ],
  preview: {
    select: {
      title: "category_en", // shows and enables search by category name
    },
  },
};
