export default {
  name: "categories",
  title: "الاصناف جميع",
  type: "document",
  fields: [
    {
      name: "category",
      title: "الصنف",
      type: "string",
    },
  ],
  preview: {
    select: {
      title: "category", // shows and enables search by category name
    },
  },
};
