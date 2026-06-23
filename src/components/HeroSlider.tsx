"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";

type Slide = { imageUrl: string; imageUrlMobile?: string | null };

const SLIDE_DURATION = 20000;
const SWIPE_THRESHOLD = 40;

export default function HeroSlider({ slides }: { slides: Slide[] }) {
  const [active, setActive] = useState(0);
  const touchStartX = useRef<number | null>(null);

  useEffect(() => {
    if (slides.length < 2) return;
    const timer = setInterval(() => {
      setActive((i) => (i + 1) % slides.length);
    }, SLIDE_DURATION);
    return () => clearInterval(timer);
  }, [slides.length]);

  function goTo(delta: number) {
    setActive((i) => (i + delta + slides.length) % slides.length);
  }

  function handleTouchStart(e: React.TouchEvent) {
    touchStartX.current = e.touches[0].clientX;
  }

  function handleTouchEnd(e: React.TouchEvent) {
    if (touchStartX.current === null) return;
    const diff = e.changedTouches[0].clientX - touchStartX.current;
    if (Math.abs(diff) > SWIPE_THRESHOLD) {
      goTo(diff < 0 ? 1 : -1);
    }
    touchStartX.current = null;
  }

  if (slides.length === 0) {
    return <div className="h-[320px] bg-black sm:h-[440px]" />;
  }

  return (
    <div
      className="relative h-[320px] overflow-hidden bg-black sm:h-[440px]"
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
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
        <>
          <button
            type="button"
            aria-label="Slide sebelumnya"
            onClick={() => goTo(-1)}
            className="absolute left-2 top-1/2 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full bg-black/40 text-white transition hover:bg-black/60"
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="h-5 w-5">
              <path d="M15 19l-7-7 7-7" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
          <button
            type="button"
            aria-label="Slide berikutnya"
            onClick={() => goTo(1)}
            className="absolute right-2 top-1/2 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full bg-black/40 text-white transition hover:bg-black/60"
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="h-5 w-5">
              <path d="M9 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
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
        </>
      )}
    </div>
  );
}
