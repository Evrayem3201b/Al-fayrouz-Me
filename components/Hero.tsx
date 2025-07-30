"use client";
import { ArrowRight } from "lucide-react";
import { Search } from "lucide-react";
import Form from "next/form";
import Link from "next/link";
import SearchComp from "./SearchComp";

export default function SplitWithScreenshot() {
  return (
    <div dir="rtl" className="relative isolate overflow-hidden bg-background">
      <svg
        aria-hidden="true"
        className="absolute inset-0 -z-10 size-full mask-[radial-gradient(100%_100%_at_top_right,white,transparent)] stroke-border"
      >
        <defs>
          <pattern
            x="50%"
            y={-1}
            id="0787a7c5-978c-4f66-83c7-11c213f99cb7"
            width={200}
            height={200}
            patternUnits="userSpaceOnUse"
          >
            <path d="M.5 200V.5H200" fill="none" />
          </pattern>
        </defs>
        <rect
          fill="url(#0787a7c5-978c-4f66-83c7-11c213f99cb7)"
          width="100%"
          height="100%"
          strokeWidth={0}
        />
      </svg>
      <div className="mx-auto max-w-7xl px-6 pt-10 pb-24 sm:pb-32 lg:flex lg:items-center lg:px-8 lg:py-40">
        <div className="mx-auto max-w-2xl lg:mx-0 lg:shrink-0 lg:pt-8 prose lg:prose-xl">
          <h1 className="mt-20 text-5xl font-semibold tracking-tight !text-[#374151] sm:text-7xl">
            قطع غيار احترافية لمعدات المطابخ والمغاسل الصناعية
          </h1>
          <p className="mt-8 text-lg font-medium !text-muted-foreground sm:text-xl sm:leading-8">
            قطع أصلية وبديلة لأفران ومغاسل وغسالات وثلاجات المطاعم. شحن سريع.
            دعم فني متخصص.
          </p>
          <SearchComp styling="mt-15" />
          <div className="not-prose mt-10 flex items-center gap-x-6">
            <Link
              href="/catalogue"
              className="rounded-md bg-accent px-3.5 py-2.5 text-sm font-semibold text-[#252525] shadow-sm hover:bg-accent/90 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
            >
              تصفح الكتالوج
            </Link>
            <Link
              href="#"
              className="rounded-md bg-secondary px-3.5 py-2.5 text-sm font-semibold text-[#252525] shadow-sm hover:bg-secondary/80 no-underline"
            >
              ابحث عن قطعة غيار
            </Link>
          </div>
        </div>
        <div className="mx-auto mt-16 flex max-w-2xl sm:mt-24 lg:mt-0 lg:mr-0 lg:ml-10 lg:max-w-none lg:flex-none xl:ml-32 ">
          <div className="max-w-3xl flex-none sm:max-w-5xl lg:max-w-none max-lg:hidden">
            <div className="-m-2 rounded-xl  bg-secondary/80 p-2 ring-1 ring-inset ring-border lg:-m-4 lg:rounded-2xl lg:p-4">
              <img
                alt="مجموعة من قطع غيار المعدات الصناعية مثل المضخات والمحركات ولوحات التحكم"
                src="/images/repair_parts.jpg"
                width={1600}
                height={948.6}
                className="w-auto rounded-md shadow-2xl ring-1 ring-border bg-center"
                dir="rtl"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
