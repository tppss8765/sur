import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Gallery",
  description: "Photos and visual gallery of Suresh Veg & Fruits — fresh juices, fruits, vegetables and the Kozhikode counter that never closes.",
};

export default function GalleryLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
