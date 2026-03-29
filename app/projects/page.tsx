import type { Metadata } from "next";
import SectionLayout from "@/components/SectionLayout";
import Projects from "@/components/Projects";

export const metadata: Metadata = { title: "Projects - Ashwin Deshpande" };

export default function ProjectsPage() {
  return (
    <SectionLayout title="Projects" maxWidth="wide">
      <Projects />
    </SectionLayout>
  );
}
