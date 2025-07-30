import { client } from "@/lib/sanity";

type categoryType = {
  category_en: string;
  category_ar: string;
  image_url?: string;
};
type testimonialType = {
  name: string;
  logoUrl: string;
};

const catQuery = `* [_type == "categories"]{
  category_en,
    category_ar
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
