"use client";

import Image from "next/image";

type Testimonial = {
  name: string;
  logoUrl: string;
};

export default function ClientTestimonialsGrid({
  testimonials,
}: {
  testimonials: Testimonial[];
}) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 max-w-7xl mx-auto">
      {testimonials.map((col, i) => (
        <div
          key={col.logoUrl}
          className="p-6 rounded-xl border border-border bg-card dark:bg-secondary/20 shadow-inner group"
        >
          <h3 className="text-base font-medium text-foreground py-2">
            {col.name}
          </h3>
          <div className="flex gap-2 items-center mt-4">
            <Image
              src={`${col.logoUrl}`}
              alt={`${col.name}`}
              width={40}
              height={40}
              className="rounded-full"
            />
          </div>
        </div>
      ))}
    </div>
  );
}
