import type { Metadata } from "next";
import SectionLayout from "@/components/SectionLayout";
import About from "@/components/About";

export const metadata: Metadata = { title: "About - Ashwin S Deshpande" };

export default function AboutPage() {
  return (
    <SectionLayout title="About">
      <About />
    </SectionLayout>
  );
}
