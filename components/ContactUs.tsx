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
