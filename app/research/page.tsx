import type { Metadata } from "next";
import SectionLayout from "@/components/SectionLayout";
import Research from "@/components/Research";

export const metadata: Metadata = { title: "Research - Ashwin S Deshpande" };

export default function ResearchPage() {
  return (
    <SectionLayout title="Research">
      <Research />
    </SectionLayout>
  );
}
