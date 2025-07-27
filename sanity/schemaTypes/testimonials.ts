export default {
  name: "testimonials",
  title: "الشهادات",
  type: "document",
  fields: [
    {
      name: "logoUrl",
      title: "Organization Image (on device storage)",
      type: "string",
    },
    {
      name: "imageUrl",
      title: "Organization Image (on cloud storage)",
      type: "image",
    },
    {
      name: "name",
      title: "Organization",
      type: "string",
    },
  ],
};
