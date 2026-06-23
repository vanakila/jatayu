"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

type Slide = { imageUrl: string; imageUrlMobile?: string | null };

export default function HeroSlider({ slides }: { slides: Slide[] }) {
  const [active, setActive] = useState(0);

  useEffect(() => {
    if (slides.length < 2) return;
    const timer = setInterval(() => {
      setActive((i) => (i + 1) % slides.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [slides.length]);

  if (slides.length === 0) {
    return <div className="h-[320px] bg-black sm:h-[440px]" />;
  }

  return (
    <div className="relative h-[320px] overflow-hidden bg-black sm:h-[440px]">
      {slides.map((slide, i) => (
        <div
          key={slide.imageUrl}
          className="absolute inset-0 transition-opacity duration-700"
          style={{ opacity: i === active ? 1 : 0 }}
        >
          <Image
            src={slide.imageUrlMobile || slide.imageUrl}
            alt=""
            fill
            sizes="100vw"
            priority={i === 0}
            className="object-contain sm:hidden"
          />
          <Image
            src={slide.imageUrl}
            alt=""
            fill
            sizes="100vw"
            priority={i === 0}
            className="hidden object-contain sm:block"
          />
        </div>
      ))}
      {slides.length > 1 && (
        <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2">
          {slides.map((slide, i) => (
            <button
              key={slide.imageUrl}
              aria-label={`Slide ${i + 1}`}
              onClick={() => setActive(i)}
              className={`h-2 w-2 rounded-full transition ${
                i === active ? "bg-yellow-400" : "bg-white/50"
              }`}
            />
          ))}
        </div>
      )}
    </div>
  );
}
