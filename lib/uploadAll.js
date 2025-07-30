require("dotenv").config({ path: "P:/al-fayrouz/.env.local" });

const SANITY_PROJECT_ID = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID;
const SANITY_DATASET = process.env.NEXT_PUBLIC_SANITY_DATASET;
const SANITY_TOKEN = process.env.SANITY_TOKEN;
const SANITY_API_VERSION = "2025-07-15";

const docs = [
  {
    _type: "categories",
    category_en: "Plumbing & Gas Fittings",
    category_ar: "تجهيزات السباكة والغاز",
  },
  {
    _type: "categories",
    category_en: "Compressors & Cooling System Parts",
    category_ar: "ضواغط وقطع أنظمة التبريد",
  },
  {
    _type: "categories",
    category_en: "Electrical Components",
    category_ar: "مكونات كهربائية",
  },
  {
    _type: "categories",
    category_en: "Motors & Mechanical Drives",
    category_ar: "محركات وأنظمة نقل الحركة",
  },
  {
    _type: "categories",
    category_en: "Sealing & Insulation Materials",
    category_ar: "مواد العزل والختم",
  },
  {
    _type: "categories",
    category_en: "Containers & Storage",
    category_ar: "عبوات وحاويات",
  },
  {
    _type: "categories",
    category_en: "Heating & Thermal Components",
    category_ar: "عناصر التسخين والتحكم الحراري",
  },
  {
    _type: "categories",
    category_en: "Tools & Workshop Equipment",
    category_ar: "أدوات ومعدات الورشة",
  },
  {
    _type: "categories",
    category_en: "Lighting & Lamps",
    category_ar: "إضاءة ومصابيح",
  },
  {
    _type: "categories",
    category_en: "Household Appliances & Spare Parts",
    category_ar: "أجزاء الأجهزة المنزلية",
  },
  {
    _type: "categories",
    category_en: "Fasteners & Hardware",
    category_ar: "مسامير وقطع تثبيت",
  },
  {
    _type: "categories",
    category_en: "Batteries & Power Sources",
    category_ar: "بطاريات ومصادر طاقة",
  },
  {
    _type: "categories",
    category_en: "Electronic & Control Modules",
    category_ar: "وحدات إلكترونية وحساسات",
  },
  {
    _type: "categories",
    category_en: "Fans & Ventilation",
    category_ar: "مراوح وتهوية",
  },
  {
    _type: "categories",
    category_en: "Pumps & Flow Systems",
    category_ar: "المضخات وأنظمة التدفق",
  },
  {
    _type: "categories",
    category_en: "Plugs and Sockets",
    category_ar: "فيش وبرايز",
  },
  {
    _type: "categories",
    category_en: "Switches",
    category_ar: "مفاتيح كهرباء",
  },
  {
    _type: "categories",
    category_en: "Cables and Wires",
    category_ar: "أسلاك وكابلات",
  },
  {
    _type: "categories",
    category_en: "Adapters",
    category_ar: "محولات",
  },
  {
    _type: "categories",
    category_en: "LED Accessories",
    category_ar: "مستلزمات لمبات ليد",
  },
  {
    _type: "categories",
    category_en: "Sensors and Timers",
    category_ar: "حساسات ومؤقتات",
  },
  {
    _type: "categories",
    category_en: "Clamps and Connectors",
    category_ar: "مشابك وتوصيلات",
  },
  {
    _type: "categories",
    category_en: "Extensions",
    category_ar: "مشترك كهربائي",
  },
  {
    _type: "categories",
    category_en: "Capacitors",
    category_ar: "مكثفات",
  },
  {
    _type: "categories",
    category_en: "Relays and Contactors",
    category_ar: "ريلايات وكونتاكتورات",
  },
  {
    _type: "categories",
    category_en: "Bearings & Bushings",
    category_ar: "رولمان بلي وجلب",
  },
  {
    _type: "categories",
    category_en: "Thermostats",
    category_ar: "الثرموستات والحساسات",
  },
  {
    _type: "categories",
    category_en: "Hoses & Refrigerants",
    category_ar: "الخراطيم ومواد التبريد",
  },
  {
    _type: "categories",
    category_en: "Fan Blades & Accessories",
    category_ar: "ريش المراوح والملحقات",
  },
  {
    _type: "categories",
    category_en: "Miscellaneous",
    category_ar: "متفرقات",
  },
];

const mutations = docs.map((doc) => ({
  create: doc,
}));

fetch(
  `https://${SANITY_PROJECT_ID}.api.sanity.io/v${SANITY_API_VERSION}/data/mutate/${SANITY_DATASET}`,
  {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${SANITY_TOKEN}`,
    },
    body: JSON.stringify({ mutations }),
  }
)
  .then((res) => res.json())
  .then((data) => {
    console.log("✅ Success:", JSON.stringify(data, null, 2));
  })
  .catch((err) => {
    console.error("❌ Error:", err);
  });
