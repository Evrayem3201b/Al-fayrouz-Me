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
    {
      name: "catImg",
      title: "الصورة",
      type: "image",
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "category_en",
        maxLength: 200,
      },
    },
  ],
  preview: {
    select: {
      title: "category_ar",
    },
  },
};
