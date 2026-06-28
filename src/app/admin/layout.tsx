import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Admin Panel | Suresh Veg & Fruits",
  description: "Internal admin panel",
  robots: { index: false, follow: false },
};

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
