export default {
  name: "products",
  title: "Products",
  type: "document",
  fields: [
    {
      name: "category",
      title: "Category",
      type: "reference",
      to: [{ type: "categories" }],
    },

    {
      name: "typeEnglish",
      type: "string",
      title: "النوع بالانجليزي",
    },
    {
      name: "typeArabic",
      type: "string",
      title: "النوع بالعربي",
    },
    {
      name: "measurement",
      type: "string",
      title: "القياس",
    },
  ],
};
