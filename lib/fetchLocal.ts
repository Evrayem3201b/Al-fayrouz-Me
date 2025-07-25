type categoryType = {
  category_en: string;
  category_ar: string;
  image_url?: string;
};
type testimonialType = {
  name: string;
  logoUrl: string;
};
const baseURL = "http://localhost:3000";

export async function getCategories(): Promise<categoryType[]> {
  // const res = await fetch("./categories.json");
  // const data = await res.json();
  const res = await fetch(`${baseURL}/categories.json`);

  console.log("Fetched categories");

  return res.json().then((data) => {
    console.log("Parsed categories data");
    return data as categoryType[];
  });
}

export async function getTestimonials(): Promise<testimonialType[]> {
  // const res = await fetch("./testimonials.json");
  // const data = await res.json();

  const res = await fetch(`${baseURL}/testimonials.json`);

  console.log("Fetched testimonials");

  return res.json().then((data) => {
    console.log("Parsed testimonials data");
    return data as testimonialType[];
  });
}
