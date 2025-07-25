export default {
  name: "items",
  title: "البضاعة",
  type: "document",
  fields: [
    {
      name: "product",
      title: "المنتج",
      type: "object",
      fields: [
        {
          name: "measurement",
          type: "reference",
          title: "القياس",
          to: [{ type: "measuring" }],
        },
        {
          name: "category",
          type: "reference",
          title: "الصنف",
          to: [{ type: "allCategories" }],
        },
      ],
    },
  ],
  preview: {
    select: {
      category: "product.category.category",
      amount: "product.measurement.type.amount",
      unit: "product.measurement.type.unit",
    },
    prepare({ category, amount, unit }: any) {
      return {
        title: `${category ?? ""} ${unit ?? ""}`.trim(),
      };
    },
  },
};
