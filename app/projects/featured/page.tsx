import type { Metadata } from "next";
import ProjectsBreadcrumb from "@/components/ProjectsBreadcrumb";
import ProjectsTabs from "@/components/ProjectsTabs";
import FeaturedProjects from "@/components/FeaturedProjects";

export const metadata: Metadata = {
  title: "Featured work - Projects - Ashwin S Deshpande",
};

export default function FeaturedProjectsPage() {
  return (
    <>
      <ProjectsBreadcrumb items={[{ label: "Featured work" }]} />
      <ProjectsTabs />
      <FeaturedProjects />
    </>
  );
}
