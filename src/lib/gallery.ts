export type GalleryItem = {
  src: string;
  alt: string;
  caption: string;
  /** Focal point for `object-fit: cover` in circular crop (faces higher in frame). */
  objectPosition?: string;
};

export const galleryImages: GalleryItem[] = [
  {
    src: "/images/speaking.png",
    alt: "Speaking at an event with a microphone",
    caption: "Speaking",
    objectPosition: "50% 8%",
  },
  {
    src: "/images/portrait.png",
    alt: "Portrait — conference and LED environment",
    caption: "Portrait",
    objectPosition: "50% 14%",
  },
];
