"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { galleryImages } from "@/lib/gallery";

export function HeroPhotoSlider() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    if (galleryImages.length <= 1) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const id = window.setInterval(() => {
      setActive((i) => (i + 1) % galleryImages.length);
    }, 4500);
    return () => window.clearInterval(id);
  }, []);

  return (
    <div className="flex shrink-0 flex-col items-center">
      <div
        className="relative h-[min(280px,72vw)] w-[min(280px,72vw)] overflow-hidden rounded-full border border-border bg-card shadow-[0_1px_0_0_rgba(255,255,255,0.06)] md:h-64 md:w-64"
        aria-roledescription="carousel"
        aria-label="Photos of Abdelsalam Muhammed"
      >
        <div
          className="flex h-full transition-transform duration-700 ease-out motion-reduce:transition-none"
          style={{
            width: `${galleryImages.length * 100}%`,
            transform: `translateX(-${(active * 100) / galleryImages.length}%)`,
          }}
        >
          {galleryImages.map((item, i) => (
            <div
              key={item.src}
              className="relative h-full shrink-0"
              style={{ width: `${100 / galleryImages.length}%` }}
              aria-hidden={i !== active}
            >
              <Image
                src={item.src}
                alt={item.alt}
                fill
                className="object-cover"
                style={{ objectPosition: item.objectPosition ?? "50% 20%" }}
                sizes="280px"
                priority={i === 0}
              />
            </div>
          ))}
        </div>
      </div>
      {galleryImages.length > 1 ? (
        <div className="mt-5 flex justify-center gap-2" role="tablist" aria-label="Photo selection">
          {galleryImages.map((_, i) => (
            <button
              key={i}
              type="button"
              role="tab"
              aria-selected={i === active}
              aria-label={`Show photo ${i + 1}`}
              onClick={() => setActive(i)}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                i === active ? "w-7 bg-foreground" : "w-1.5 bg-border hover:bg-muted"
              }`}
            />
          ))}
        </div>
      ) : null}
    </div>
  );
}
