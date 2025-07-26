// Load environment variables from .env.local
require("dotenv").config({ path: "P:/al-fayrouz/.env.local" });

const SANITY_PROJECT_ID = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID;
const SANITY_DATASET = process.env.NEXT_PUBLIC_SANITY_DATASET;
const SANITY_TOKEN = process.env.SANITY_TOKEN;
const SANITY_API_VERSION = "2025-07-15";

const docs = [
  {
    _type: "testimonials",
    name: "Four Seasons Resort Sharm El Sheikh",
    logoUrl: "/images/testimonials/four-seasons-logo.png",
  },
  {
    _type: "testimonials",
    name: "Rixos Premium Seagate Sharm El Sheikh",
    logoUrl: "/images/testimonials/rixos.png",
  },
  {
    _type: "testimonials",
    name: "Hilton Sharm Waterfalls Resort",
    logoUrl: "/images/testimonials/HiltonHotelsLogo.svg.png",
  },
  {
    _type: "testimonials",
    name: "Savoy Sharm El Sheikh",
    logoUrl: "/images/testimonials/savoy.png",
  },
  {
    _type: "testimonials",
    name: "Park Regency Sharm El Sheikh",
    logoUrl: "/images/testimonials/park-regency.jpg",
  },
  {
    _type: "testimonials",
    name: "Barony Beach Resort Sharm El Sheikh",
    logoUrl: "/images/testimonials/barony.jpg",
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
