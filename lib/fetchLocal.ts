import { client } from "@/lib/sanity";

type categoryType = {
  category_en: string;
  category_ar: string;
  catImg?: string;
};
type testimonialType = {
  name: string;
  logoUrl: string;
};

const catQuery = `* [_type == "categories"]{
  category_en,
    category_ar,
    imgCat
}`;
const testQuery = `* [_type == "testimonials"]{
  name,
    logoUrl
}`;

export async function getCategories(): Promise<categoryType[]> {
  console.log("Fetched categories");

  const data = await client.fetch(catQuery);
  console.log("Fetched data:", data);
  return data;
}

export async function getPaginatedCategories(limit = 10, offset = 0) {
  const query = `*[_type == "categories"] | order(_createdAt desc) [${offset}...${offset + limit}]{
    _id,
    category_en,
    category_ar,
    "products": *[_type == "products" && references(^._id)]{
      _id,
      typeEnglish,
      typeArabic
    }
  }`;
  return await getData(query);
}

export async function getTotalCategoryCount() {
  const query = 'count(*[_type == "categories"])';
  return await getData(query);
}

export async function getTestimonials(): Promise<testimonialType[]> {
  // const res = await fetch("./testimonials.json");
  // const data = await res.json();

  console.log("Fetched testimonials");

  const data = await client.fetch(testQuery);
  console.log("Fetched data:", data);
  return data;
}
export async function getData(query: string) {
  // const res = await fetch("./testimonials.json");
  // const data = await res.json();

  const data = await client.fetch(query);
  console.log("Fetched data:", data);
  return data;
}
