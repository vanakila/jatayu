"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

export default function HeroSlider({ images }: { images: string[] }) {
  const [active, setActive] = useState(0);

  useEffect(() => {
    if (images.length < 2) return;
    const timer = setInterval(() => {
      setActive((i) => (i + 1) % images.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [images.length]);

  if (images.length === 0) {
    return <div className="h-[320px] bg-black sm:h-[440px]" />;
  }

  return (
    <div className="relative h-[320px] overflow-hidden bg-black sm:h-[440px]">
      {images.map((src, i) => (
        <div
          key={src}
          className="absolute inset-0 transition-opacity duration-700"
          style={{ opacity: i === active ? 1 : 0 }}
        >
          <Image src={src} alt="" fill priority={i === 0} className="object-cover" />
        </div>
      ))}
      {images.length > 1 && (
        <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2">
          {images.map((src, i) => (
            <button
              key={src}
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
