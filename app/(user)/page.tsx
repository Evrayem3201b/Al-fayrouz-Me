import Categories from "@/components/Categories";
import ContactUs from "@/components/ContactUs";
import Hero from "@/components/Hero";
import Testimonials from "@/components/Testimonials";
export const revalidate = 30; // revalidate at most every hour
export default function Home() {
  return (
    <>
      <Hero />
      <Categories />
      <Testimonials />
      <ContactUs />
    </>
  );
}
