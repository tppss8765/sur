import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Fresh Market",
  description: "Browse today's fresh fruits and vegetables at Suresh Veg & Fruits, Malaparamba, Kozhikode — sourced fresh every morning.",
};

export default function FreshLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
