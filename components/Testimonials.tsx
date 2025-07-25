import { getTestimonials } from "@/lib/fetchLocal";
import Image from "next/image";

export default async function Testimonials() {
  const testimonials = await getTestimonials();
  let animationDuration = 20; // seconds
  return (
    <section
      dir="rtl"
      className="section-main flex flex-col items-center gap-6 pt-6 overflow-hidden bg-white text-[#252525] mx-auto max-md:px-4 pb-20"
    >
      <h2 className="text-2xl font-bold pb-5">عملاء اكدوا على جودتنا</h2>
      {/* max-xs:grid-cols-1 grid-cols-2 min-[743px]:grid-cols-3 lg:grid-cols-4 gap-6 max-w-screen-xl  */}
      <div className="marquee-wrapper place-items-center relative mx-auto px-4 w-full h-[100px] overflow-hidden">
        {testimonials.map((testimonial, index) => (
          <div
            key={index}
            className={`w-[300px] h-[100px] marquee-item left-full absolute px-24`}
            style={{
              animation: `marquee ${animationDuration}s calc(${animationDuration}s / ${testimonials.length} * (${testimonials.length} - ${index + 1}) * -1) linear infinite`,
            }}
          >
            <Image
              src={`${testimonial.logoUrl}`}
              alt={`${testimonial.name}`}
              width={400}
              height={300}
              className="w-full h-full object-contain"
              loading="lazy"
            />
          </div>
        ))}
      </div>
    </section>
  );
}
