import type { Metadata } from "next";
import SectionLayout from "@/components/SectionLayout";
import Experience from "@/components/Experience";

export const metadata: Metadata = { title: "Experience - Ashwin S Deshpande" };

export default function ExperiencePage() {
  return (
    <SectionLayout title="Experience">
      <Experience />
    </SectionLayout>
  );
}
