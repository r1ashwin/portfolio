import type { Metadata } from "next";
import ProjectsBreadcrumb from "@/components/ProjectsBreadcrumb";
import ProjectsTabs from "@/components/ProjectsTabs";
import GitHubProjects from "@/components/GitHubProjects";

export const metadata: Metadata = {
  title: "GitHub - Projects - Ashwin S Deshpande",
};

export default function GitHubProjectsPage() {
  return (
    <>
      <ProjectsBreadcrumb items={[{ label: "GitHub" }]} />
      <ProjectsTabs />
      <GitHubProjects />
    </>
  );
}
