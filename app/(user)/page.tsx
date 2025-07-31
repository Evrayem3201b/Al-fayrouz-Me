import ContactUs from "@/components/ContactUs";
import Hero from "@/components/Hero";
import Testimonials from "@/components/Testimonials";
import { Spinner } from "@/components/ui/shadcn-io/spinner";
import { lazy } from "react";
import { Suspense } from "react";

const Categories = lazy(() => import("@/components/Categories"));
export const revalidate = 30; // revalidate at most every hour
export default function Home() {
  return (
    <>
      <Hero />
      <Suspense fallback={<Spinner variant="circle" />}>
        <Categories />
      </Suspense>
      <Testimonials />
      <ContactUs />
    </>
  );
}
