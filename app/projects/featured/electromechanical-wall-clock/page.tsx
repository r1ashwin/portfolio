import type { Metadata } from "next";
import ProjectsBreadcrumb from "@/components/ProjectsBreadcrumb";
import ProjectsTabs from "@/components/ProjectsTabs";
import WallClockGallery from "@/components/WallClockGallery";
import {
  PROJECTS_FEATURED_PATH,
  WALL_CLOCK_TITLE,
} from "@/lib/project-routes";

export const metadata: Metadata = {
  title: `${WALL_CLOCK_TITLE} - Projects - Ashwin S Deshpande`,
};

export default function WallClockProjectPage() {
  return (
    <>
      <ProjectsBreadcrumb
        items={[
          { label: "Featured work", href: PROJECTS_FEATURED_PATH },
          { label: WALL_CLOCK_TITLE },
        ]}
      />
      <ProjectsTabs />
      <WallClockGallery />
    </>
  );
}
