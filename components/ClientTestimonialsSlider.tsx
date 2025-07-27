"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { Transition } from "@headlessui/react";
import { cn } from "@/lib/utils";

type Testimonial = {
  name: string;
  logoUrl: string;
};

export default function ClientTestimonialsSlider({
  testimonials,
}: {
  testimonials: Testimonial[];
}) {
  const [active, setActive] = useState<number>(0);
  const [autorotate, setAutorotate] = useState<boolean>(true);
  const testimonialsRef = useRef<HTMLDivElement>(null);

  const slicedTestimonials = testimonials.slice(0, 3);

  useEffect(() => {
    if (!autorotate) return;
    const interval = setInterval(() => {
      setActive((prev) =>
        prev + 1 === slicedTestimonials.length ? 0 : prev + 1
      );
    }, 7000);
    return () => clearInterval(interval);
  }, [autorotate, slicedTestimonials.length]);

  const heightFix = () => {
    if (testimonialsRef.current?.parentElement)
      testimonialsRef.current.parentElement.style.height = `${testimonialsRef.current.clientHeight}px`;
  };

  useEffect(() => {
    heightFix();

    const handleVisibilityChange = () => {
      if (document.visibilityState === "visible") {
        heightFix();
      }
    };

    document.addEventListener("visibilitychange", handleVisibilityChange);
    return () => {
      document.removeEventListener("visibilitychange", handleVisibilityChange);
    };
  }, []);

  return (
    <section className="absolute inset-0 mt-20 md:mt-24">
      <div className="max-w-3xl mx-auto relative z-40 h-80">
        <div className="relative pb-12 md:pb-20 text-center">
          <div className="relative h-40 [mask-image:_linear-gradient(0deg,transparent,#FFFFFF_30%,#FFFFFF)] md:[mask-image:_linear-gradient(0deg,transparent,#FFFFFF_40%,#FFFFFF)]">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[480px] h-[480px] -z-10 pointer-events-none before:rounded-full rounded-full before:absolute before:inset-0 before:bg-gradient-to-b before:from-accent/20 before:to-transparent before:to-20% after:rounded-full after:absolute after:inset-0 after:bg-background after:dark:bg-primary/50 after:m-px before:-z-20 after:-z-20">
              {slicedTestimonials.map((item, index) => (
                <Transition
                  key={index}
                  show={active === index}
                  enter="transition ease-[cubic-bezier(0.68,-0.3,0.32,1)] duration-700 order-first"
                  enterFrom="opacity-0 -translate-x-10"
                  enterTo="opacity-100 translate-x-0"
                  leave="transition duration-700"
                  leaveFrom="opacity-100 translate-x-0"
                  leaveTo="opacity-0 translate-x-10"
                  beforeEnter={heightFix}
                >
                  <div className="absolute inset-0 h-full flex flex-col items-center -z-10">
                    <Image
                      className="relative top-11 left-1/2 transform-center inset-0 -translate-x-1/2 rounded-t-lg"
                      src={item.logoUrl}
                      width={200}
                      height={200}
                      alt={item.name}
                    />
                  </div>
                </Transition>
              ))}
            </div>
          </div>
          <div className="mb-10 px-8 sm:px-6 transition-all delay-300 ease-in-out duration-150">
            <div className="relative flex flex-col" ref={testimonialsRef}>
              {slicedTestimonials.map((item, index) => (
                <Transition
                  key={index}
                  show={active === index}
                  enter="transition ease-in-out duration-500 delay-200 order-first"
                  enterFrom="opacity-0 -translate-x-4"
                  enterTo="opacity-100 translate-x-0"
                  leave="transition ease-out duration-300 delay-300 absolute"
                  leaveFrom="opacity-100 translate-x-0"
                  leaveTo="opacity-0 translate-x-4"
                  beforeEnter={heightFix}
                >
                  <div className="text-lg text-foreground md:text-xl font-bold">
                    {item.name}
                  </div>
                </Transition>
              ))}
            </div>
          </div>

          <div className="flex flex-wrap justify-center -m-1.5 px-8 sm:px-6">
            {slicedTestimonials.map((item, index) => (
              <button
                key={index}
                onClick={() => {
                  setActive(index);
                  setAutorotate(false);
                }}
                className={cn(
                  "m-1.5 rounded-full px-4 py-1.5 text-xs font-semibold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
                  active === index
                    ? "bg-accent text-accent-foreground shadow-md"
                    : "bg-card text-card-foreground hover:bg-muted border border-border"
                )}
              >
                {item.name}
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
