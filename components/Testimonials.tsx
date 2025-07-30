import { getTestimonials } from "@/lib/fetchLocal";
import ClientTestimonialsSlider from "./ClientTestimonialsSlider";
import ClientTestimonialsGrid from "./ClientTestimonialsGrid";

export const revalidate = 30;

export default async function Testimonials() {
  let testimonials = [];

  try {
    testimonials = await getTestimonials();
    console.log("Fetched testimonials");
  } catch (error) {
    console.error("Failed to fetch testimonials:", error);
    return (
      <div className="text-center text-red-500 py-10">
        فشل تحميل المراجعات. الرجاء المحاولة لاحقًا.
      </div>
    );
  }

  return (
    <div
      dir="rtl"
      className="relative w-full max-w-7xl mx-auto px-4 md:px-8 py-20 overflow-hidden h-full bg-background"
    >
      <div className="pb-12 text-center">
        <h1 className="pt-4 font-bold text-[#252525] text-3xl md:text-4xl">
          موثوق من قبل الفنادق الاكثر شهرة
        </h1>
      </div>

      <div className="relative">
        <ClientTestimonialsSlider testimonials={testimonials} />
        <div className="h-full max-h-screen md:max-h-none overflow-hidden w-full bg-primary opacity-10 [mask-image:radial-gradient(circle_at_center,transparent_10%,white_99%)]">
          <ClientTestimonialsGrid testimonials={testimonials} />
        </div>
      </div>

      <div className="absolute bottom-0 inset-x-0 h-40 w-full bg-gradient-to-t from-background to-transparent"></div>
    </div>
  );
}
