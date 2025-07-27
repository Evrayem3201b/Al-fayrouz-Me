## Original hero

```
import { ArrowRightIcon, SearchIcon } from "lucide-react";
import { Input } from "./ui/input";
import Form from "next/form";
import { getCategories } from "@/lib/fetchLocal";
import { Button } from "./ui/button";

export default async function Hero() {
  return (
    <section className="section-main pb-20 mx-auto flex flex-col items-center gap-6 pt-6 overflow-hidden max-md:px-10 px-5">
      <h1 className="text-4xl font-black text-center">
        شركة <span className="text-primary">الفيروز</span> لقطع الغيار و المعدات
      </h1>

      <Form
        className="flex flex-col gap-4 items-center bg-[#252525] text-white w-full py-12 px-6 rounded-xl shadow-lg"
        dir="ltr"
        action={"/search"}
      >
        <h2 className="text-2xl font-semibold">ابحث عن القطعة</h2>
        <div className="relative w-full max-w-md">
          <button
            className="text-gray-400 hover:text-white focus-visible:border-ring focus-visible:ring-ring/50 absolute inset-y-0 end-0 flex h-full w-9 items-center justify-center rounded-e-md transition-all outline-none focus:z-10 focus-visible:ring-[2px]"
            aria-label="Submit search"
            type="submit"
          >
            <ArrowRightIcon size={16} />
          </button>

          <Input
            className="peer ps-9 pe-9 bg-white text-black placeholder:text-gray-500 border border-gray-300 focus:border-primary focus:ring-primary rounded-md"
            placeholder="ادخل رقم القطعة أو الموديل أو نوع المعدات..."
            type="search"
            name="query"
          />

          <button
            type="submit"
            className="text-gray-400 pointer-events-none absolute inset-y-0 start-0 flex items-center justify-center ps-3 peer-disabled:opacity-50"
          >
            <SearchIcon size={16} />
          </button>
        </div>
        <Button variant={"default"} className="mt-4">
          البحث في الكاتالوج
        </Button>
      </Form>
    </section>
  );
}

```

## Original ContactUs

```
import { Phone, Mail } from "lucide-react";
export default function ContactUs() {
  return (
    <section className="flex flex-col justify-center items-center w-full overflow-hidden gap-3 p-6 h-[226px] bg-[#001c31] text-white shadow-lg">
      <h2 className="font-bold text-2xl">للتواصل معنا او طلب عرض سعر</h2>
      <h3 className="text-lg text-gray-200">يرجى التواصل على</h3>
      <p className="flex flex-wrap justify-center gap-6 text-lg text-gray-300">
        <a
          className="flex flex-row gap-1.5 items-center hover:text-white transition"
          href="tel:+201000000000"
        >
          رقم الهاتف <Phone size={15} />
        </a>
        <a
          className="flex flex-row gap-1.5 items-center hover:text-white transition"
          href="mailto:info@alfayrouz"
        >
          الايميل <Mail size={15} />
        </a>
      </p>
    </section>
  );
}

```

## Original Testimonials

```
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

```
