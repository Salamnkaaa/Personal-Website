"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { galleryImages } from "@/lib/gallery";

export function ImageGallery() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const id = window.setInterval(() => {
      setActive((i) => (i + 1) % galleryImages.length);
    }, 5200);
    return () => window.clearInterval(id);
  }, []);

  return (
    <div className="space-y-6">
      {/* Desktop: grid */}
      <div className="hidden gap-4 md:grid md:grid-cols-2 lg:gap-5">
        {galleryImages.map((item, i) => (
          <figure
            key={item.caption}
            className="group relative overflow-hidden rounded-sm border border-border bg-card shadow-[0_1px_0_0_rgba(255,255,255,0.04)]"
          >
            <div className="relative aspect-[4/5] overflow-hidden">
              <Image
                src={item.src}
                alt={item.alt}
                fill
                sizes="(min-width: 1024px) 25vw, 50vw"
                className="object-cover transition duration-700 ease-out group-hover:scale-[1.03] motion-reduce:transition-none"
                style={{ objectPosition: item.objectPosition ?? "50% 20%" }}
                priority={i < 2}
              />
            </div>
            <figcaption className="border-t border-border px-4 py-3 text-[11px] font-medium uppercase tracking-[0.2em] text-muted">
              {item.caption}
            </figcaption>
          </figure>
        ))}
      </div>

      {/* Mobile: rotating focus + thumbnails */}
      <div className="md:hidden">
        <div className="relative aspect-[4/5] overflow-hidden rounded-sm border border-border bg-card">
          {galleryImages.map((item, i) => (
            <div
              key={item.caption}
              className={`absolute inset-0 transition-opacity duration-700 ease-out motion-reduce:transition-none ${
                i === active ? "opacity-100" : "pointer-events-none opacity-0"
              }`}
            >
              <Image
                src={item.src}
                alt={item.alt}
                fill
                className="object-cover"
                style={{ objectPosition: item.objectPosition ?? "50% 20%" }}
                priority={i === 0}
              />
            </div>
          ))}
          <div className="absolute bottom-0 left-0 right-0 border-t border-white/20 bg-black/35 px-4 py-3 backdrop-blur-sm">
            <p className="text-[11px] font-medium uppercase tracking-[0.2em] text-white">
              {galleryImages[active]?.caption}
            </p>
          </div>
        </div>
        <div className="mt-4 flex justify-center gap-2">
          {galleryImages.map((_, i) => (
            <button
              key={i}
              type="button"
              aria-label={`Show image ${i + 1}`}
              onClick={() => setActive(i)}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                i === active ? "w-8 bg-foreground" : "w-1.5 bg-border hover:bg-muted"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
