import { ArrowRightIcon, SearchIcon } from "lucide-react";
import { Input } from "./ui/input";
import Form from "next/form";
import { getCategories } from "@/lib/fetchLocal";

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
            placeholder="بحث"
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
      </Form>
    </section>
  );
}
