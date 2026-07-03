import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Menu",
  description: "Suresh Veg & Fruits full menu — fresh fruit juices, milkshakes, and the legendary Abooda Saboora Masoora special shakes in Kozhikode.",
};

export default function MenuLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
