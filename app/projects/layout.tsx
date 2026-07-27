import type { Metadata } from "next";
import SectionLayout from "@/components/SectionLayout";

export const metadata: Metadata = { title: "Projects - Ashwin S Deshpande" };

export default function ProjectsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <SectionLayout title="Projects" maxWidth="wide">
      {children}
    </SectionLayout>
  );
}
