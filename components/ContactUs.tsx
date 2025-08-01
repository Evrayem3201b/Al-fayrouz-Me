"use client";
import React from "react";
import { Clock, Mail, Phone } from "lucide-react";
import { useId } from "react";
import Link from "next/link";
import Form from "next/form";

export default function ContactUs() {
  function handleWhatsappClick() {
    var phoneNumber = "+201015729747";
    var name =
      (document.querySelector("#name") as HTMLInputElement | null)?.value || "";
    var company =
      (document.querySelector("#company") as HTMLInputElement | null)?.value ||
      "";
    var phone =
      (document.querySelector("#phone") as HTMLInputElement | null)?.value ||
      "";
    var email =
      (document.querySelector("#email") as HTMLInputElement | null)?.value ||
      "";
    var equipmentModel =
      (document.querySelector("#equipment-model") as HTMLInputElement | null)
        ?.value || "";
    var partNeeded =
      (document.querySelector("#part-needed") as HTMLInputElement | null)
        ?.value || "";
    var message =
      (document.querySelector("#message") as HTMLTextAreaElement | null)
        ?.value || "";

    var messageUrl = `https://wa.me/${phoneNumber}?text=الاسم كامل:${name}%0aالشركة:${company}%0aالرقم:${phone}%0aالايميل:${email}%0aموديل المعدات:${equipmentModel}%0aالقطعة المطلوبة:${partNeeded}%0aالرسالة:${message}%0a%0a`;
    const win = window.open(messageUrl, "_blank");
    if (win) {
      win.focus();
    }
  }

  return (
    <div
      dir="ltr"
      className="mx-auto grid w-full max-w-7xl grid-cols-1 gap-10 bg-background px-4 py-10 text-foreground md:px-6 md:py-20 lg:grid-cols-2"
    >
      <div className="flex flex-col text-end">
        <h2 className="text-3xl font-bold text-[#252525] md:text-4xl lg:text-5xl">
          دعم فني وخدمة عملاء خبراء
        </h2>
        <p className="mt-4 max-w-lg text-base text-muted-foreground">
          فريقنا جاهز للإجابة على جميع استفساراتك الفنية، وتحديد القطع، وأسئلة
          الطلبات. مهمتنا استمرار عمل معداتكم بكفاءة.
        </p>

        <div className="mt-10 flex flex-col space-y-6">
          <div className="flex items-center gap-4 justify-end">
            <div>
              <p className="font-semibold text-foreground">الدعم الفني</p>
              <Link href="tel:01015729747" className="text-muted-foreground">
                0101-572-9747
              </Link>
            </div>
            <Phone className="h-6 w-6 text-accent" />
          </div>
          <div className="flex items-center gap-4 justify-end">
            <div>
              <p className="font-semibold text-foreground">البريد الإلكتروني</p>
              <Link
                href={"mailto:alfayrouz804@gmail.com"}
                className="text-muted-foreground"
              >
                alfayrouz804@gmail.com
              </Link>
            </div>
            <Mail className="h-6 w-6 text-accent" />
          </div>
          <div className="flex items-center gap-4 justify-end">
            <div>
              <p className="font-semibold text-foreground">ساعات العمل</p>
              <p className="text-muted-foreground">
                من الاثنين إلى الجمعة 10ص-9م
              </p>
            </div>
            <Clock className="h-6 w-6 text-accent" />
          </div>
        </div>
      </div>
      <div className="relative mx-auto flex w-full max-w-2xl flex-col items-end gap-4 overflow-hidden rounded-3xl border border-border bg-card p-4 sm:p-10">
        <Grid size={20} />
        <div className="relative z-20 mb-4 w-full">
          <label
            className="mb-2 inline-block text-sm font-medium text-foreground/80"
            htmlFor="name"
          >
            الاسم
          </label>
          <input
            id="name"
            type="text"
            placeholder="اسمك الكامل"
            className="h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring text-end"
          />
        </div>
        <div className="relative z-20 mb-4 w-full">
          <label
            className="mb-2 inline-block text-sm font-medium text-foreground/80"
            htmlFor="company"
          >
            الشركة
          </label>
          <input
            id="company"
            type="text"
            placeholder="اسم الشركة"
            className="h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring text-end"
          />
        </div>
        <div className="relative z-20 mb-4 w-full">
          <label
            className="mb-2 inline-block text-sm font-medium text-foreground/80"
            htmlFor="phone"
          >
            رقم الهاتف
          </label>
          <input
            id="phone"
            type="text"
            placeholder="رقم هاتفك"
            className="h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring text-end"
          />
        </div>

        <div className="relative z-20 mb-4 w-full">
          <label
            className="mb-2 inline-block text-sm font-medium text-foreground/80"
            htmlFor="email"
          >
            البريد الإلكتروني
          </label>
          <input
            id="email"
            type="email"
            placeholder="your@email.com"
            className="h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring text-end"
          />
        </div>
        <div className="relative z-20 mb-4 w-full">
          <label
            className="mb-2 inline-block text-sm font-medium text-foreground/80"
            htmlFor="equipment-model"
          >
            موديل المعدات
          </label>
          <input
            id="equipment-model"
            type="text"
            placeholder="مثال: كاتربيلر ٣٣٠دي"
            className="h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring text-end"
          />
        </div>
        <div className="relative z-20 mb-4 w-full">
          <label
            className="mb-2 inline-block text-sm font-medium text-foreground/80"
            htmlFor="part-needed"
          >
            القطعة المطلوبة
          </label>
          <input
            id="part-needed"
            type="text"
            placeholder="مثال: فلتر هيدروليك، رقم القطعة 123-4567"
            className="h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring text-end"
          />
        </div>

        <div className="relative z-20 mb-4 w-full">
          <label
            className="mb-2 inline-block text-sm font-medium text-foreground/80"
            htmlFor="message"
          >
            رسالتك
          </label>
          <textarea
            id="message"
            rows={5}
            placeholder="يرجى وصف احتياجك أو استفسارك..."
            className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring text-end"
          />
        </div>
        <button
          className="text-white relative z-10 flex items-center justify-center rounded-md bg-accent px-4 py-2 text-sm font-medium transition-colors hover:bg-accent/90"
          onClick={handleWhatsappClick}
        >
          إرسال الطلب بواسطة الواتساب
        </button>
        {/* <button
          className="text-white relative z-10 flex items-center justify-center rounded-md bg-accent px-4 py-2 text-sm font-medium transition-colors hover:bg-accent/90"
          onClick={handleEmailClick}
        >
          إرسال الطلب بواسطة البريد الإلكتروني
        </button> */}
      </div>
    </div>
  );
}

export const Grid = ({
  pattern,
  size,
}: {
  pattern?: number[][];
  size?: number;
}) => {
  const p = pattern ?? [
    [Math.floor(Math.random() * 4) + 7, Math.floor(Math.random() * 6) + 1],
    [Math.floor(Math.random() * 4) + 7, Math.floor(Math.random() * 6) + 1],
    [Math.floor(Math.random() * 4) + 7, Math.floor(Math.random() * 6) + 1],
    [Math.floor(Math.random() * 4) + 7, Math.floor(Math.random() * 6) + 1],
    [Math.floor(Math.random() * 4) + 7, Math.floor(Math.random() * 6) + 1],
  ];
  return (
    <div className="pointer-events-none absolute top-0 left-1/2 -mt-2 -ml-20 h-full w-full [mask-image:linear-gradient(white,transparent)]">
      <div className="absolute inset-0 bg-gradient-to-r from-muted/20 to-transparent opacity-50 [mask-image:radial-gradient(farthest-side_at_top,white,transparent)]">
        <GridPattern
          width={size ?? 20}
          height={size ?? 20}
          x="-12"
          y="4"
          squares={p}
          className="absolute inset-0 h-full w-full fill-foreground/5 stroke-foreground/10 mix-blend-overlay"
        />
      </div>
    </div>
  );
};

export function GridPattern({ width, height, x, y, squares, ...props }: any) {
  const patternId = useId();

  return (
    <svg aria-hidden="true" {...props}>
      <defs>
        <pattern
          id={patternId}
          width={width}
          height={height}
          patternUnits="userSpaceOnUse"
          x={x}
          y={y}
        >
          <path d={`M.5 ${height}V.5H${width}`} fill="none" />
        </pattern>
      </defs>
      <rect
        width="100%"
        height="100%"
        strokeWidth={0}
        fill={`url(#${patternId})`}
      />
      {squares && (
        <svg x={x} y={y} className="overflow-visible">
          {squares.map(([x, y]: any, idx: number) => (
            <rect
              strokeWidth="0"
              key={`${x}-${y}-${idx}`}
              width={width + 1}
              height={height + 1}
              x={x * width}
              y={y * height}
            />
          ))}
        </svg>
      )}
    </svg>
  );
}
