export type WallClockMedia =
  | { type: "image"; src: string; alt: string }
  | { type: "video"; src: string; alt: string };

/** Build photos/videos in `public/images` (excludes website_photo). */
export const WALL_CLOCK_MEDIA: WallClockMedia[] = [
  { type: "image", src: "/images/0.jpg", alt: "Electromechanical wall clock — frame 0" },
  { type: "image", src: "/images/1.jpg", alt: "Electromechanical wall clock — frame 1" },
  { type: "image", src: "/images/2.jpg", alt: "Electromechanical wall clock — frame 2" },
  { type: "image", src: "/images/3.jpg", alt: "Electromechanical wall clock — frame 3" },
  { type: "image", src: "/images/4.jpg", alt: "Electromechanical wall clock — frame 4" },
  { type: "image", src: "/images/5.jpg", alt: "Electromechanical wall clock — frame 5" },
  { type: "image", src: "/images/6.jpg", alt: "Electromechanical wall clock — frame 6" },
  { type: "video", src: "/images/7.mp4", alt: "Electromechanical wall clock — clip 7" },
  { type: "image", src: "/images/8.jpg", alt: "Electromechanical wall clock — frame 8" },
  { type: "video", src: "/images/9.mp4", alt: "Electromechanical wall clock — clip 9" },
  { type: "image", src: "/images/10.jpg", alt: "Electromechanical wall clock — frame 10" },
  { type: "image", src: "/images/11.jpg", alt: "Electromechanical wall clock — frame 11" },
  { type: "image", src: "/images/12.jpg", alt: "Electromechanical wall clock — frame 12" },
  { type: "video", src: "/images/Final.mp4", alt: "Electromechanical wall clock — final demo" },
];
